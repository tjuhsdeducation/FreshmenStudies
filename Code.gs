/* =====================================================================
   SCORE TRACKER: Google Apps Script web app (Code.gs)

   Every time a student finishes an activity, the website sends the score here.
   This script keeps:

   📊 ONE MASTER SHEET  ("Freshmen Studies – Master Scores")
        • All submissions: every submission ever sent, newest at the bottom
          (Submitted, Assessment, Teacher, School, Period, Student ID, Last Name,
           First Name, Score, Total, Times Locked, Question Labels/Points/Max, Responses)
        • Teacher Sheets: a link to every teacher's spreadsheet
        • Anonymous Questions (no student names)

   📊 ONE SHEET PER TEACHER  ("Formative Scores - <Teacher>")
        • one TAB per activity, added at the bottom, laid out like this:
            Activity title · "most recent submission for each student. Updated …"
            ALL PERIODS block: class average + average % of points per question
            PERIOD 1, PERIOD 2, … blocks: students sorted by last name, then
              Class average and Average % of points (green / yellow / red)
            On the right of each period: "⬇ Download for Aeries" + Student ID / # Correct
        • ❓ Anonymous Questions for that teacher
        • Created automatically the first time a student picks that teacher,
          inside Drive → Scores → (school), and shared with the teacher if you add
          their email below.

   SETUP (no coding needed):
     1. Open your master sheet "Freshmen Studies – Master Scores" (Drive → Freshmen Studies Scores)
        → Extensions → Apps Script → delete what's there → paste this whole file → 💾 Save.
     2. Toolbar: choose "setup" → ▶ Run → Review permissions → your account
        → Advanced → Go to (project name) (unsafe) → Allow.  (This builds all the tabs.)
        Then choose "testScore" → ▶ Run (adds 3 test rows so you can see it work).
     3. Deploy → New deployment → ⚙ Web app → Execute as: Me → Who has access: Anyone
        → Deploy → copy the Web app URL (ends in /exec).
     4. Paste that URL into sheets-config.js (SHEETS_WEBHOOK_URL) on GitHub.
   After ANY change to this file: Deploy → Manage deployments → ✏️ → Version: New version → Deploy.
   ===================================================================== */

/* ✏️ 1) School sites and teachers. Keep this the same as sheets-config.js. */
const SCHOOLS = {
  'Tulare Union':            ['Amy Gavello', 'Darren Bennett', 'DJ Bennett', 'Fernando Valadao', 'Kristen Pallas', 'Kelli Medeiros', 'Mark Reindl'],
  'Tulare Western':          ['Joseph Rivera', 'Kristen Rickard', 'Michael Sozinho', 'Keith Rickard', 'Ken Searcy', 'Matt Archibald'],
  'Mission Oak':             ['Livi Aguilar', 'Stevan Chamalbide', 'Matt Jones', 'Celina Rodela', 'Richard Salazar'],
  'ACHS':                    ['ACHS Teacher'],
  'Tech Prep / Countryside': ['Silvia Sausedo']
};

/* ✏️ 2) Optional: teachers' school emails. Their sheet is shared with them (as an
   editor) when it is first made. To share sheets that already exist, add the
   email and run "shareWithTeachers" once. */
const TEACHER_EMAILS = {
  // 'Amy Gavello': 'amy.gavello@tulare.k12.ca.us',
};

/* ✏️ 3) Your master sheet and folder (already created in your Drive; don't change these) */
const MASTER_SHEET_ID  = '18OeI1ySGDD7pE1l779zMInuem8_OAU_isrPkEhRX6O0';   // "Freshmen Studies – Master Scores"
const SCORES_FOLDER_ID = '1IsyrHM-jgwt6WeplyAEnc2TpC8ypl-QQ';             // "Freshmen Studies Scores" folder

/* ✏️ 4) Every graded activity and lesson on the site, in order. Teacher tabs are sorted in this order.
   (Warm-ups are teacher-led on the projector, so they don't send scores.)
   New activity later? Add a line here; anything not listed still works and goes at the end. */
const ACTIVITIES = [
  ["Fentanyl", "Full lesson (60 min)", "Fentanyl · Lesson 1: The Fake Pill Problem"],
  ["Fentanyl", "Full lesson (60 min)", "Fentanyl · Lesson 2: Save a Life (Overdose Response & Refusal)"],
  ["Fentanyl", "Interactive activity", "Fentanyl · One Pill Can Kill: Digital Worksheet"],
  ["Fentanyl", "Interactive activity", "Fentanyl · Pill Lottery Simulation"],
  ["Fentanyl", "Interactive activity", "Fentanyl · Save a Life: Overdose Response"],
  ["Fentanyl", "Interactive activity", "Fentanyl · Refusal Skills: What Would You Say?"],
  ["Fentanyl", "Exit ticket", "Fentanyl · Exit Ticket: Fentanyl Facts"],
  ["Fentanyl", "Exit ticket", "Fentanyl · Exit Ticket: Overdose Response"],
  ["Fentanyl", "Exit ticket", "Fentanyl · Exit Ticket: My Plan"],
  ["Human Trafficking", "Full lesson (60 min)", "Trafficking · Lesson 1: How Recruitment Works Online"],
  ["Human Trafficking", "Full lesson (60 min)", "Trafficking · Lesson 2: Labor Trafficking & the Global Picture"],
  ["Human Trafficking", "Interactive activity", "Trafficking · World Map Explorer: Global vs U.S."],
  ["Human Trafficking", "Interactive activity", "Trafficking · Data Dashboard: World · U.S. · California"],
  ["Human Trafficking", "Interactive activity", "Trafficking · Is It Trafficking? (A–M–P Check)"],
  ["Human Trafficking", "Interactive activity", "Trafficking · Red Flag or Green Flag? Online & Job Offers"],
  ["Human Trafficking", "Interactive activity", "Trafficking · What Would You Do? Scenarios + Safety Plan"],
  ["Human Trafficking", "Exit ticket", "Trafficking · Exit Ticket: What Is Trafficking?"],
  ["Human Trafficking", "Exit ticket", "Trafficking · Exit Ticket: Red Flags & Getting Help"],
  ["Human Trafficking", "Exit ticket", "Trafficking · Exit Ticket: Global vs U.S. Data"],
  ["LGBTQ+ & Respect", "Full lesson (60 min)", "LGBTQ+ · Lesson 1: Boxes We’re Put In (Gender Stereotypes)"],
  ["LGBTQ+ & Respect", "Full lesson (60 min)", "LGBTQ+ · Lesson 2: Identity, Respect & Healthy Relationships"],
  ["LGBTQ+ & Respect", "Interactive activity", "LGBTQ+ · Terms Sort: Four Different Things"],
  ["LGBTQ+ & Respect", "Interactive activity", "LGBTQ+ · Digital Gallery Walk: “Act Like a…”"],
  ["LGBTQ+ & Respect", "Interactive activity", "LGBTQ+ · Red Flag or Green Flag? Relationships"],
  ["LGBTQ+ & Respect", "Interactive activity", "LGBTQ+ · Be an Upstander: Respond with Respect"],
  ["LGBTQ+ & Respect", "Exit ticket", "LGBTQ+ · Exit Ticket: Stereotypes & Respect"],
  ["LGBTQ+ & Respect", "Exit ticket", "LGBTQ+ · Exit Ticket: Healthy Relationships"]
];

/* ✏️ 5) Other settings */
const SCORES_FOLDER   = 'Freshmen Studies Scores';                  // used only if SCORES_FOLDER_ID is blank
const MASTER_NAME     = 'Freshmen Studies – Master Scores';          // used only if MASTER_SHEET_ID is blank
const TEACHER_PREFIX  = 'Formative Scores - ';                       // + teacher name
const SCHOOL_FOLDERS  = true;      // true = teacher sheets go in a folder for each school
const SHOW_RESPONSES  = true;      // true = teacher tabs get a "Responses" column (written answers)
const ALLOW_UNLISTED  = false;     // true = accept teacher names that aren't in SCHOOLS
const TIME_ZONE       = 'America/Los_Angeles';

/* Colors (match the sample sheets) */
const NAVY = '#1c3557', HEAD = '#dce6f2', AVG = '#eef3fa', GREEN = '#b7e1cd', YELLOW = '#fce8b2', RED = '#f4c7c3', AERIES = '#fff2cc';

/* ============================ WEB APP ============================ */
function doGet() {
  return ContentService.createTextOutput('✅ The score tracker is running. (Students send scores here automatically.)');
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);                       // one score at a time, so rows never collide
    const p = (e && e.parameter) || {};
    return json(p.kind === 'question' ? saveQuestion(p) : saveScore(p));
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/* ============================ SAVE A SCORE ============================ */
function saveScore(p) {
  const teacher = clean(p.teacher, 60);
  const school = schoolFor(teacher, clean(p.school, 60));
  const id = clean(p.studentId, 20).replace(/^'/, '');
  if (!/^[A-Za-z0-9-]{3,12}$/.test(id)) throw new Error('Missing or invalid student ID.');
  if (!clean(p.firstName) || !clean(p.lastName)) throw new Error('Missing student name.');
  const activity = clean(p.activity, 120).replace(/^'/, '') || 'Untitled activity';
  const rec = {
    activity: activity, id: id, last: clean(p.lastName, 40), first: clean(p.firstName, 40),
    period: /^\d+$/.test(String(p.period)) ? Number(p.period) : clean(p.period, 6),
    score: num(p.score), total: num(p.total), locks: num(p.locks) || 0, when: parseWhen(p.when),
    labels: clean(p.qlabels, 3000), points: clean(p.qpoints, 1000), max: clean(p.qmax, 1000),
    responses: clean(p.responses, 45000)
  };

  // 1) Master sheet: log every submission (like "All submissions")
  const master = masterFile();
  master.getSheetByName('All submissions').appendRow([rec.when, activity, teacher, school, rec.period, "'" + id, rec.last, rec.first,
    rec.score, rec.total, (typeof rec.score === 'number' && rec.total) ? rec.score / rec.total : '', rec.locks, rec.labels, rec.points, rec.max, rec.responses]);

  // 2) Teacher sheet: keep the newest submission per student, then rebuild that activity's tab
  const ss = teacherFile(school, teacher);
  const data = upsertData(ss, rec);
  renderActivity(ss, teacher, activity, data.filter(r => r.activity === activity));
  return { ok: true, school: school, teacher: teacher, tab: tabName(activity) };
}

/* Anonymous question box: no name or ID is ever saved */
function saveQuestion(p) {
  const teacher = clean(p.teacher, 60), school = schoolFor(teacher, clean(p.school, 60));
  const text = clean(p.text, 800);
  if ((text.match(/\S+/g) || []).length < 3) throw new Error('Question too short.');
  const row = [parseWhen(p.when), clean(p.period, 6), clean(p.topic, 60), text, ''];
  questionsTab(teacherFile(school, teacher)).appendRow(row);
  masterFile().getSheetByName('Anonymous Questions').appendRow([row[0], school, teacher].concat(row.slice(1)));
  return { ok: true };
}
function questionsTab(ss) {
  let sh = ss.getSheetByName('❓ Anonymous Questions');
  if (!sh) {
    sh = ss.insertSheet('❓ Anonymous Questions', ss.getSheets().length);
    sh.getRange(1, 1, 1, 5).setValues([['Date', 'Period', 'Topic', 'Question', 'Answered? (type ✓)']]).setFontWeight('bold').setBackground(HEAD);
    sh.setFrozenRows(1); sh.setColumnWidth(4, 520);
  }
  return sh;
}

/* ============================ TEACHER DATA (hidden tab) ============================ */
/* "_data" holds the newest submission for each student + activity. Tabs are drawn from it. */
const DATA_HEAD = ['Activity', 'Student ID', 'Last Name', 'First Name', 'Period', 'Score', 'Total', 'Times Locked', 'Submitted', 'Question Labels', 'Question Points', 'Question Max', 'Responses'];
function upsertData(ss, rec) {
  let sh = ss.getSheetByName('_data');
  if (!sh) { sh = ss.insertSheet('_data', ss.getSheets().length); sh.getRange(1, 1, 1, DATA_HEAD.length).setValues([DATA_HEAD]).setFontWeight('bold'); sh.hideSheet(); }
  const vals = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, DATA_HEAD.length).getValues() : [];
  const row = [rec.activity, rec.id, rec.last, rec.first, rec.period, rec.score, rec.total, rec.locks, rec.when, rec.labels, rec.points, rec.max, rec.responses];
  const at = vals.findIndex(v => String(v[0]) === rec.activity && String(v[1]).replace(/^'/, '') === rec.id);
  const r = at >= 0 ? at + 2 : vals.length + 2;
  sh.getRange(r, 2, 1, 1).setNumberFormat('@');                      // keep leading zeros in IDs
  sh.getRange(r, 1, 1, row.length).setValues([row]);
  if (at >= 0) vals[at] = row; else vals.push(row);
  return vals.map(v => ({
    activity: String(v[0]), id: String(v[1]).replace(/^'/, ''), last: String(v[2]), first: String(v[3]), period: v[4],
    score: num(v[5]), total: num(v[6]), locks: num(v[7]), when: v[8], labels: splitBar(v[9]), points: splitBar(v[10]).map(num), max: splitBar(v[11]).map(num), responses: String(v[12] || '')
  }));
}

/* ============================ DRAW ONE ACTIVITY TAB ============================ */
function renderActivity(ss, teacher, activity, recs) {
  const name = tabName(activity);
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name, tabPosition(ss, activity));            // new tabs are placed in Activity List order

  // Question columns: every question label seen for this activity, in order
  const qs = [], qmax = {};
  recs.forEach(r => r.labels.forEach((l, i) => { if (!(l in qmax)) { qs.push(l); qmax[l] = r.max[i]; } }));
  const head = ['Student ID', 'Last Name', 'First Name', 'Period'].concat(qs.map(l => l + (qmax[l] !== '' && qmax[l] !== undefined ? ' (of ' + qmax[l] + ')' : '')), ['Score', 'Total', 'Percent', 'Times Locked', 'Submitted'], SHOW_RESPONSES ? ['Responses'] : []);
  const W = head.length, Q0 = 4, cScore = Q0 + qs.length, cTotal = cScore + 1, cPct = cScore + 2, cLock = cScore + 3, cWhen = cScore + 4;
  const A = W + 1;                                        // Aeries block (0-based), after one empty column
  const WIDTH = A + 2;

  const V = [], F = [], B = [], WT = [], FC = [], links = [];     // values, number formats, backgrounds, weights, font colors
  const blank = () => new Array(WIDTH).fill('');
  const fill = (from, to, v, dflt) => { const a = new Array(WIDTH).fill(dflt === undefined ? null : dflt); for (let i = from; i < to; i++) a[i] = v; return a; };
  const push = (vals, fmt, bg, wt, fc) => { V.push(vals); F.push(fmt || new Array(WIDTH).fill('')); B.push(bg || new Array(WIDTH).fill(null)); WT.push(wt || new Array(WIDTH).fill('normal')); FC.push(fc || new Array(WIDTH).fill('#1f2430')); };
  const mean = a => { const n = a.filter(x => typeof x === 'number' && isFinite(x)); return n.length ? n.reduce((s, x) => s + x, 0) / n.length : ''; };
  const heat = pct => pct === '' ? null : pct >= 0.8 ? GREEN : pct >= 0.6 ? YELLOW : RED;
  const qVal = (r, l) => { const k = r.labels.indexOf(l); return k >= 0 ? r.points[k] : ''; };

  const avgRows = list => {
    const a = blank(), b = blank(), fa = new Array(WIDTH).fill(''), fb = new Array(WIDTH).fill(''), bgb = fill(0, W, AVG);
    a[0] = 'Class average'; b[0] = 'Average % of points';
    qs.forEach((l, i) => {
      const m = mean(list.map(r => qVal(r, l)));
      a[Q0 + i] = m; fa[Q0 + i] = '0.0';
      const pct = m !== '' && qmax[l] ? m / qmax[l] : ''; b[Q0 + i] = pct; fb[Q0 + i] = '0%'; bgb[Q0 + i] = heat(pct) || AVG;
    });
    const ms = mean(list.map(r => r.score)), mt = mean(list.map(r => r.total));
    a[cScore] = ms; fa[cScore] = '0.0';
    a[cPct] = mean(list.map(r => (typeof r.score === 'number' && r.total) ? r.score / r.total : '')); fa[cPct] = '0%';
    a[cLock] = mean(list.map(r => r.locks)); fa[cLock] = '0.0';
    const sp = ms !== '' && mt ? ms / mt : ''; b[cScore] = sp; fb[cScore] = '0%'; bgb[cScore] = heat(sp) || AVG;
    push(a, fa, fill(0, W, AVG), fill(0, WIDTH, 'bold', 'normal'));
    push(b, fb, bgb, fill(0, WIDTH, 'bold', 'normal'));
  };
  const band = (text, withAeries) => {
    const v = blank(); v[0] = text;
    const bg = fill(0, W, NAVY); if (withAeries) { bg[A] = AERIES; bg[A + 1] = AERIES; }
    push(v, null, bg, fill(0, WIDTH, 'bold', 'normal'), fill(0, W, '#ffffff', '#1f2430'));
  };
  const header = (blankFirst4, withAeries) => {
    const v = blank(); head.forEach((h, i) => v[i] = blankFirst4 && i < 4 ? '' : h);
    const bg = fill(0, W, HEAD);
    if (withAeries) { v[A] = 'Student ID'; v[A + 1] = '# Correct'; bg[A] = HEAD; bg[A + 1] = HEAD; }
    push(v, null, bg, fill(0, WIDTH, 'bold', 'normal'));
  };

  // Title + note
  const now = Utilities.formatDate(new Date(), TIME_ZONE, 'M/d/yyyy h:mm a');
  let v = blank(); v[0] = activity; push(v, null, null, fill(0, 1, 'bold', 'normal'));
  v = blank(); v[0] = teacher + ': most recent submission for each student. Updated ' + now + '.'; push(v, null, null, null, fill(0, 1, '#6b7a90', '#1f2430'));
  push(blank());

  // All periods block
  band('All periods (' + recs.length + ' student' + (recs.length === 1 ? '' : 's') + ')', false);
  header(true, false);
  avgRows(recs);

  // One block per period, students A–Z by last name
  const per = x => (typeof x === 'number' ? x : (parseInt(x, 10) || 99));
  const periods = [...new Set(recs.map(r => String(r.period)))].sort((a, b) => per(a) - per(b));
  periods.forEach(pd => {
    const list = recs.filter(r => String(r.period) === pd).sort((a, b) => a.last.localeCompare(b.last, 'en', { sensitivity: 'base' }) || a.first.localeCompare(b.first, 'en', { sensitivity: 'base' }));
    push(blank()); push(blank());
    band('Period ' + pd + ' (' + list.length + ' student' + (list.length === 1 ? '' : 's') + ')', true);
    const bandRow = V.length;
    header(false, true);
    list.forEach(r => {
      const rv = blank(), f = new Array(WIDTH).fill('');
      rv[0] = r.id; f[0] = '@'; rv[1] = r.last; rv[2] = r.first; rv[3] = r.period;
      qs.forEach((l, i) => { rv[Q0 + i] = qVal(r, l); f[Q0 + i] = '0.0'; });
      rv[cScore] = r.score; f[cScore] = '0.0'; rv[cTotal] = r.total; f[cTotal] = '0.0';
      rv[cPct] = (typeof r.score === 'number' && r.total) ? r.score / r.total : ''; f[cPct] = '0%';
      rv[cLock] = r.locks; f[cLock] = '0'; rv[cWhen] = r.when; f[cWhen] = 'm/d/yyyy h:mm AM/PM';
      if (SHOW_RESPONSES) rv[cWhen + 1] = r.responses;
      rv[A] = r.id; f[A] = '@'; rv[A + 1] = r.score;
      push(rv, f);
    });
    links.push({ row: bandRow, top: bandRow + 1, bottom: V.length });
    avgRows(list);
  });

  // Write everything in one go
  sh.clear(); sh.clearConditionalFormatRules();
  if (sh.getMaxColumns() < WIDTH) sh.insertColumnsAfter(sh.getMaxColumns(), WIDTH - sh.getMaxColumns());
  if (sh.getMaxRows() < V.length + 5) sh.insertRowsAfter(sh.getMaxRows(), V.length + 5 - sh.getMaxRows());
  sh.getRange(1, 1, V.length, WIDTH).setNumberFormats(F).setValues(V).setBackgrounds(B).setFontWeights(WT).setFontColors(FC).setVerticalAlignment('middle');
  sh.getRange(1, 1).setFontSize(14);
  sh.getRange(2, 1).setFontStyle('italic');
  // "⬇ Download for Aeries" = a CSV of that period's Student ID + # Correct
  const gid = sh.getSheetId(), colA = colLetter(A + 1), colB = colLetter(A + 2);
  links.forEach(L => {
    const url = 'https://docs.google.com/spreadsheets/d/' + ss.getId() + '/export?format=csv&gid=' + gid + '&range=' + colA + L.top + ':' + colB + L.bottom;
    sh.getRange(L.row, A + 1).setFormula('=HYPERLINK("' + url + '","⬇ Download for Aeries")').setFontColor('#1a56db').setFontWeight('bold');
  });
  sh.setFrozenColumns(3);
  sh.setColumnWidth(1, 150); sh.setColumnWidths(2, 2, 110);
  if (SHOW_RESPONSES) sh.setColumnWidth(W, 320);
  sh.setColumnWidth(A + 1, 150);
}

/* ============================ FILES ============================ */
function rootFolder() {
  if (SCORES_FOLDER_ID) return DriveApp.getFolderById(SCORES_FOLDER_ID);
  const it = DriveApp.getRootFolder().getFoldersByName(SCORES_FOLDER);
  return it.hasNext() ? it.next() : DriveApp.getRootFolder().createFolder(SCORES_FOLDER);
}
/* Where a new activity tab goes: after every tab whose activity comes earlier in ACTIVITIES */
function tabPosition(ss, activity) {
  const order = ACTIVITIES.map(a => tabName(a[2]));
  const mine = order.indexOf(tabName(activity));
  const sheets = ss.getSheets();
  if (mine < 0) return sheets.length;                                       // unknown activity → bottom
  let pos = 0;
  sheets.forEach((sh, i) => { const k = order.indexOf(sh.getName()); if (sh.getName() === 'Read Me' || (k >= 0 && k < mine)) pos = i + 1; });
  return pos;
}
function folderFor(school) {
  const root = rootFolder(); if (!SCHOOL_FOLDERS) return root;
  const name = safeName(school), it = root.getFoldersByName(name);
  return it.hasNext() ? it.next() : root.createFolder(name);
}
function openOrCreate(propKey, folder, fileName, build) {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty(propKey);
  if (id) { try { if (!DriveApp.getFileById(id).isTrashed()) return { ss: SpreadsheetApp.openById(id), isNew: false }; } catch (e) {} }
  const found = folder.getFilesByName(fileName);
  if (found.hasNext()) { const f = found.next(); props.setProperty(propKey, f.getId()); return { ss: SpreadsheetApp.openById(f.getId()), isNew: false }; }
  const ss = SpreadsheetApp.create(fileName);
  ss.setSpreadsheetTimeZone(TIME_ZONE);
  DriveApp.getFileById(ss.getId()).moveTo(folder);
  build(ss);
  props.setProperty(propKey, ss.getId());
  return { ss: ss, isNew: true };
}
function masterFile() {
  const ss = MASTER_SHEET_ID ? SpreadsheetApp.openById(MASTER_SHEET_ID)
    : openOrCreate('master', rootFolder(), MASTER_NAME, () => {}).ss;
  if (!ss.getSheetByName('All submissions')) buildMaster(ss);
  return ss;
}

/* ▶ Run "setup" once: builds (or refreshes) every tab in the master sheet. Never deletes scores. */
function setup() { buildMaster(masterFile()); }

function buildMaster(ss) {
  ss.setSpreadsheetTimeZone(TIME_ZONE);
  const tab = (name, i) => ss.getSheetByName(name) || ss.insertSheet(name, Math.min(i, ss.getSheets().length));
  const head = (sh, vals, bg, color) => { sh.getRange(1, 1, 1, vals.length).setValues([vals]).setFontWeight('bold').setBackground(bg || HEAD).setFontColor(color || '#1f2430').setWrap(true).setVerticalAlignment('middle'); sh.setFrozenRows(1); };
  const AS = "'All submissions'!";

  // 1) Start Here
  const st = tab('Start Here', 0); st.clear();
  const txt = [
    ['Freshmen Studies – Master Scores'],
    ['Your one main sheet for every graded activity and lesson on the Freshmen Studies site (Fentanyl, Human Trafficking, LGBTQ+).'],
    [''], ['WHAT IS IN THIS SHEET'],
    ['• All submissions: every score a student sends, newest at the bottom (every attempt is kept).'],
    ['• Activity Dashboard: each activity → school → teacher, with submissions and average %. Updates by itself.'],
    ['• Activity List: all ' + ACTIVITIES.length + ' graded activities and lessons, sorted by topic, with submissions, students, and average %.'],
    ['• Teacher Sheets: every teacher, with a link to their own "Formative Scores" sheet (appears after their first student submits).'],
    ['• Anonymous Questions: questions from the site\'s question box (no student names).'],
    [''], ['EACH TEACHER\'S OWN SHEET  (Drive → Freshmen Studies Scores → their school folder)'],
    ['• "Formative Scores - (teacher)": one tab per activity, in the same order as the Activity List.'],
    ['• Each tab: All periods summary, then one block per period sorted by last name, class averages, color-coded % of points, and ⬇ Download for Aeries.'],
    [''], ['Please don\'t rename these tabs. The script writes to them by name. Run "setup" again any time to refresh this sheet (scores are never deleted).']
  ];
  st.getRange(1, 1, txt.length, 1).setValues(txt); st.setColumnWidth(1, 1000);
  st.getRange(1, 1).setFontSize(16).setFontWeight('bold'); [4, 11].forEach(r => st.getRange(r, 1).setFontWeight('bold').setFontColor(NAVY));

  // 2) All submissions
  const a = tab('All submissions', 1);
  head(a, ['Submitted', 'Assessment', 'Teacher', 'School', 'Period', 'Student ID', 'Last Name', 'First Name', 'Score', 'Total', 'Percent', 'Times Locked', 'Question Labels', 'Question Points', 'Question Max', 'Responses']);
  a.getRange('A:A').setNumberFormat('m/d/yyyy h:mm'); a.getRange('K:K').setNumberFormat('0%');
  [150, 300, 140, 150, 60, 100, 110, 110, 60, 60, 70, 80, 200, 140, 140, 300].forEach((w, i) => a.setColumnWidth(i + 1, w));

  // 3) Activity Dashboard
  const d = tab('Activity Dashboard', 2); d.clear();
  d.getRange('A1').setValue('Activity Dashboard').setFontSize(14).setFontWeight('bold');
  d.getRange('A2').setValue('Every activity by school and teacher (all attempts). Updates automatically.').setFontStyle('italic').setFontColor('#6b7a90');
  d.getRange('A4').setFormula('=IFERROR(QUERY(' + AS + 'A1:P,"select B, D, C, count(F), avg(K), max(A) where B is not null group by B, D, C order by B, D, C label B \'Activity\', D \'School\', C \'Teacher\', count(F) \'Submissions\', avg(K) \'Average %\', max(A) \'Last submission\'",1),"No submissions yet")');
  d.getRange('A4:F4').setFontWeight('bold').setBackground(HEAD); d.getRange('E:E').setNumberFormat('0%'); d.getRange('F:F').setNumberFormat('m/d/yyyy h:mm');
  [340, 160, 150, 100, 90, 150].forEach((w, i) => d.setColumnWidth(i + 1, w)); d.setFrozenRows(4);

  // 4) Activity List
  const l = tab('Activity List', 3); l.clear();
  head(l, ['#', 'Topic', 'Type', 'Activity (exact name used in the sheets)', 'Submissions', 'Students', 'Average %', 'Last submission'], NAVY, '#ffffff');
  const rows = ACTIVITIES.map((x, i) => { const r = i + 2; return [i + 1, x[0], x[1], x[2],
    '=COUNTIF(' + AS + 'B:B,D' + r + ')',
    '=IF(E' + r + '=0,0,COUNTUNIQUE(FILTER(' + AS + 'F:F,' + AS + 'B:B=D' + r + ')))',
    '=IFERROR(AVERAGEIF(' + AS + 'B:B,D' + r + ',' + AS + 'K:K),"")',
    '=IF(E' + r + '=0,"",MAXIFS(' + AS + 'A:A,' + AS + 'B:B,D' + r + '))']; });
  l.getRange(2, 1, rows.length, 8).setValues(rows);
  l.getRange(2, 7, rows.length, 1).setNumberFormat('0%'); l.getRange(2, 8, rows.length, 1).setNumberFormat('m/d/yyyy h:mm');
  ACTIVITIES.forEach((x, i) => { if (/^Full/.test(x[1])) l.getRange(i + 2, 1, 1, 8).setBackground(AVG); });
  [40, 140, 150, 420, 100, 80, 90, 140].forEach((w, i) => l.setColumnWidth(i + 1, w));

  // 5) Teacher Sheets (keeps any links already filled in)
  const t = tab('Teacher Sheets', 4);
  const old = {}; if (t.getLastRow() > 1) t.getRange(2, 1, t.getLastRow() - 1, 4).getFormulas().forEach((f, i) => { const v = t.getRange(i + 2, 2).getValue(); old[v] = [f[2] || t.getRange(i + 2, 3).getValue(), t.getRange(i + 2, 4).getValue()]; });
  t.clear();
  head(t, ['School', 'Teacher', 'Teacher sheet (link appears after first submission)', 'Created', 'Submissions', 'Students', 'Average %'], NAVY, '#ffffff');
  const tr = []; Object.keys(SCHOOLS).forEach(sc => SCHOOLS[sc].forEach(tn => { const r = tr.length + 2, o = old[tn] || ['', ''];
    tr.push([sc, tn, o[0], o[1], '=COUNTIF(' + AS + 'C:C,B' + r + ')', '=IF(E' + r + '=0,0,COUNTUNIQUE(FILTER(' + AS + 'F:F,' + AS + 'C:C=B' + r + ')))', '=IFERROR(AVERAGEIF(' + AS + 'C:C,B' + r + ',' + AS + 'K:K),"")']); }));
  t.getRange(2, 1, tr.length, 7).setValues(tr); t.getRange(2, 7, tr.length, 1).setNumberFormat('0%'); t.getRange(2, 4, tr.length, 1).setNumberFormat('m/d/yyyy');
  [170, 160, 320, 100, 100, 80, 90].forEach((w, i) => t.setColumnWidth(i + 1, w));

  // 6) Anonymous Questions
  const q = tab('Anonymous Questions', 5);
  head(q, ['Date', 'School', 'Teacher', 'Period', 'Topic', 'Question', 'Answered? (type ✓)']); q.setColumnWidth(6, 480);

  const blank = ss.getSheetByName('Sheet1'); if (blank && blank.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(blank);
}

function teacherFile(school, teacher) {
  const r = openOrCreate('t:' + teacher, folderFor(school), TEACHER_PREFIX + safeName(teacher), ss => {
    const s = ss.getSheets()[0]; s.setName('Read Me');
    const lines = [
      TEACHER_PREFIX + teacher + ' (' + school + ')',
      'Each activity gets its own tab at the bottom. Each tab shows the most recent submission for each student.',
      'Top block = all periods. Then one block per period, students sorted by last name.',
      'Average % of points: green = 80%+, yellow = 60–79%, red = below 60%.',
      'Times Locked = how many times the student left the page while the activity was open.',
      'Aeries: click "⬇ Download for Aeries" next to a period for a CSV of Student ID + # Correct, or copy those two columns.',
      'Please don’t edit the activity tabs. They are rebuilt automatically every time a score comes in.',
      'Every submission (including older attempts) is also kept in the master sheet.'
    ];
    s.getRange(1, 1, lines.length, 1).setValues(lines.map(t => [t])); s.getRange(1, 1).setFontWeight('bold').setFontSize(14); s.setColumnWidth(1, 820);
    const email = TEACHER_EMAILS[teacher];
    if (email) { try { DriveApp.getFileById(ss.getId()).addEditor(email); } catch (e) { console.warn('Could not share with ' + email + ': ' + e); } }
  });
  if (r.isNew) {
    const t = masterFile().getSheetByName('Teacher Sheets');
    const names = t.getLastRow() > 1 ? t.getRange(2, 2, t.getLastRow() - 1, 1).getValues().map(v => String(v[0])) : [];
    const at = names.indexOf(teacher), link = '=HYPERLINK("' + r.ss.getUrl() + '","Open ' + teacher.replace(/"/g, '') + '’s sheet")';
    if (at >= 0) { t.getRange(at + 2, 3).setFormula(link); t.getRange(at + 2, 4).setValue(new Date()); }
    else t.appendRow([school, teacher, link, new Date()]);
  }
  return r.ss;
}

/* Run once after adding emails to TEACHER_EMAILS: shares teacher sheets that already exist. */
function shareWithTeachers() {
  const props = PropertiesService.getScriptProperties();
  Object.keys(TEACHER_EMAILS).forEach(t => {
    const id = props.getProperty('t:' + t), email = TEACHER_EMAILS[t];
    if (!id || !email) return;
    try { DriveApp.getFileById(id).addEditor(email); console.log('Shared with ' + t); } catch (e) { console.warn(t + ': ' + e); }
  });
}

/* ============================ HELPERS ============================ */
function schoolFor(teacher, school) {
  if (school && SCHOOLS[school] && SCHOOLS[school].indexOf(teacher) >= 0) return school;
  for (const s in SCHOOLS) if (SCHOOLS[s].indexOf(teacher) >= 0) return s;
  if (!teacher) throw new Error('Missing teacher.');
  if (ALLOW_UNLISTED) return school || 'Other';
  throw new Error('Unknown teacher: ' + teacher + '. Add them to SCHOOLS in Code.gs.');
}
function clean(v, max) {                       // trims, limits length, and blocks spreadsheet formulas
  let s = String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max || 200);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function num(v) { const n = Number(v); return v !== '' && v !== null && v !== undefined && isFinite(n) ? n : ''; }
function splitBar(v) { return String(v == null ? '' : v) === '' ? [] : String(v).split('|'); }
function parseWhen(v) { const d = v ? new Date(v) : new Date(); return isNaN(d.getTime()) ? new Date() : d; }
function safeName(s) { return String(s).replace(/[?*]/g, '').replace(/[\/\\\[\]:]/g, '-').replace(/\s+/g, ' ').trim(); }
function tabName(s) { return safeName(String(s).replace(/\s*:\s*/g, ' – ')).slice(0, 95) || 'Activity'; }
function colLetter(n) { let s = ''; while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
function json(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

/* ============================ TEST ============================ */
/* ▶ Run "testScore". Then open Drive → Freshmen Studies Scores:
     • "Freshmen Studies – Master Scores" → All submissions: 3 new rows
     • (first school) → "Formative Scores - (first teacher)" → tab "TEST – Score Sync Check":
       Period 1 and Period 2 blocks, averages, and a Download for Aeries link.
   Run it again: the master gets 3 more rows, but the teacher tab still shows each
   student once (newest kept). Delete the TEST tab whenever you like. */
function testScore() {
  setup();
  const school = Object.keys(SCHOOLS)[0], teacher = SCHOOLS[school][0];
  [['000123', 'Test', 'Student', '1', '4', '1|2|1'], ['000456', 'Ana', 'Example', '1', '5', '1|2|2'], ['000789', 'Leo', 'Sample', '2', '2', '0|1|1']].forEach(s => {
    const r = saveScore({ studentId: s[0], firstName: s[1], lastName: s[2], period: s[3], teacher: teacher, school: school,
      activity: 'TEST – Score Sync Check', score: s[4], total: '5', qlabels: 'Q1 Warm-up|Q2 Vocabulary|Q3 Scenario', qpoints: s[5], qmax: '1|2|2',
      locks: '0', when: new Date().toISOString(), responses: 'Test submission.' });
    console.log('Saved: ' + JSON.stringify(r));
  });
}
