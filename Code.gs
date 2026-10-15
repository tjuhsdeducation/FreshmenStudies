/* =====================================================================
   FRESHMEN STUDIES LESSONS: Google Sheets connection (Google Apps Script)

   What your Google Sheet will look like after setup():
     • One tab per SCHOOL (Tulare Union, Tulare Western, Mission Oak, ACHS,
       Tech Prep - Countryside). Each school tab is sorted by PERIOD, then
       LAST NAME A–Z, then FIRST NAME, and updates by itself.
       To the right of each list is a SCORE SUMMARY: one row per student,
       one column per activity/exit ticket (best % earned).
     • All Work: every submission, in the order it arrived (the master list).
     • Anonymous Questions: questions from the question box (no names).
   Download any time as Excel: File → Download → Microsoft Excel (.xlsx).

   SETUP (about 10 minutes, done once):
     1. Make a new Google Sheet named "Freshmen Studies Responses".
     2. Extensions → Apps Script. Delete what's there, paste this whole file, 💾 Save.
     3. Choose the function "setup" in the toolbar and click ▶ Run. Allow permissions.
     4. Deploy → New deployment → ⚙ Web app
          Execute as: Me      Who has access: Anyone      → Deploy
     5. Copy the Web app URL and paste it into fs-config.js (scriptUrl) on GitHub.

   ✏️ Teacher names are checked against SCHOOLS below. Keep it matching fs-config.js.
      After any edit: 💾 Save, run setup() again (student work is never deleted),
      then Deploy → Manage deployments → ✏️ → Version: New version → Deploy.
   ✏️ Want a separate tab for every teacher too? Set TEACHER_TABS = true and run setup().
   ===================================================================== */

const SCHOOLS = {
  'Tulare Union':   ['Amy Gavello', 'Darren Bennett', 'DJ Bennett', 'Fernando Valadao', 'Kristen Pallas', 'Kelli Medeiros', 'Mark Reindl'],
  'Tulare Western': ['Joseph Rivera', 'Kristen Rickard', 'Michael Sozinho', 'Keith Rickard', 'Ken Searcy', 'Matt Archibald'],
  'Mission Oak':    ['Livi Aguilar', 'Stevan Chamalbide', 'Matt Jones', 'Celina Rodela', 'Richard Salazar'],
  'ACHS':           ['ACHS Teacher'],
  'Tech Prep / Countryside': ['Silvia Sausedo']
};
const TEACHER_TABS = false;

const ALL = 'All Work';
const QUESTIONS = 'Anonymous Questions';
//               A            B         C          D         E            F             G             H        I       J           K        L         M              N
const HEAD_ALL = ['Timestamp', 'School', 'Teacher', 'Period', 'Last Name', 'First Name', 'Student ID', 'Topic', 'Type', 'Activity', 'Score', 'Out Of', 'Percent (%)', 'Answers'];
const HEAD_Q = ['Timestamp', 'School', 'Teacher', 'Period', 'Topic', 'Question', 'Answered? (type ✓)'];
// Columns shown on school/teacher tabs (letters from All Work), in this order:
const SHOW = [['D', 'Period'], ['E', 'Last Name'], ['F', 'First Name'], ['G', 'Student ID'], ['C', 'Teacher'], ['H', 'Topic'], ['I', 'Type'], ['J', 'Activity'], ['K', 'Score'], ['L', 'Out Of'], ['M', 'Percent (%)'], ['A', 'Submitted'], ['N', 'Answers']];

function tabName(s) { return String(s).replace(/[\/\\?*\[\]:]/g, '-').replace(/\s+-\s+|\s*-\s*/g, ' - ').slice(0, 90); }   // "Tech Prep / Countryside" → "Tech Prep - Countryside"
function qs(s) { return String(s).replace(/'/g, "\\'"); }

/* ---------- setup: creates/refreshes every tab ---------- */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const all = ss.getSheetByName(ALL) || ss.insertSheet(ALL);
  all.getRange(1, 1, 1, HEAD_ALL.length).setValues([HEAD_ALL]).setFontWeight('bold').setBackground('#efe7fd');
  all.setFrozenRows(1);
  const q = ss.getSheetByName(QUESTIONS) || ss.insertSheet(QUESTIONS);
  q.getRange(1, 1, 1, HEAD_Q.length).setValues([HEAD_Q]).setFontWeight('bold').setBackground('#fde7f0');
  q.setFrozenRows(1);

  Object.keys(SCHOOLS).forEach((school, i) => {
    const sh = ss.getSheetByName(tabName(school)) || ss.insertSheet(tabName(school), i);
    buildTab(sh, school + ': student work (sorted by period, then last name)', "B = '" + qs(school) + "'", "B = '" + qs(school) + "'");
  });
  if (TEACHER_TABS) Object.keys(SCHOOLS).forEach(school => SCHOOLS[school].forEach(t => {
    const name = tabName(t + ' (' + school + ')');
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    buildTab(sh, t + ' · ' + school, "B = '" + qs(school) + "' and C = '" + qs(t) + "'", "B = '" + qs(school) + "' and C = '" + qs(t) + "'");
  }));
  const extra = ss.getSheetByName('Sheet1');
  if (extra && extra.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(extra);
}

/* One tab = a sorted list (left) + a score summary (right). Both are formulas, so they update automatically. */
function buildTab(sh, title, where, whereSum) {
  sh.clear();
  const cols = SHOW.map(c => c[0]).join(', ');
  sh.getRange(1, 1).setValue(title).setFontWeight('bold').setFontSize(13);
  sh.getRange(2, 1, 1, SHOW.length).setValues([SHOW.map(c => c[1])]).setFontWeight('bold').setBackground('#efe7fd');
  sh.getRange(3, 1).setFormula('=IFERROR(QUERY(\'' + ALL + '\'!A2:N, "select ' + cols + ' where ' + where + ' order by D, E, F, A", 0), "No student work yet")');
  const sc = SHOW.length + 2;                                    // leave one empty column, then the summary
  sh.getRange(1, sc).setValue('SCORE SUMMARY: best % on each activity (one row per student)').setFontWeight('bold').setFontSize(13);
  sh.getRange(2, sc).setFormula('=IFERROR(QUERY(\'' + ALL + '\'!A2:N, "select D, E, F, max(M) where ' + whereSum + ' and J is not null group by D, E, F pivot J order by D, E, F label D \'Period\', E \'Last Name\', F \'First Name\'", 0), "Scores will appear here")');
  sh.setFrozenRows(2);
  sh.setFrozenColumns(3);
}

/* ---------- helpers ---------- */
function json(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function clean(v, max) {                      // trims, limits length, and blocks spreadsheet formulas
  let s = String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max || 4000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function schoolOk(s) { return Object.prototype.hasOwnProperty.call(SCHOOLS, s); }
function sheet(name) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh) throw new Error('The teacher needs to run setup() in Apps Script first.');
  return sh;
}
function student(d) {
  const s = d.student || {};
  const out = { first: clean(s.first, 40), last: clean(s.last, 40), id: clean(s.id, 20), school: clean(s.school, 40), teacher: clean(s.teacher, 60), period: Number(s.period) };
  if (!/[A-Za-z]/.test(out.first) || !/[A-Za-z]/.test(out.last) || !/^[A-Za-z0-9-]{3,12}$/.test(out.id) || !schoolOk(out.school) ||
      SCHOOLS[out.school].indexOf(out.teacher) < 0 || !(out.period >= 0 && out.period <= 12))
    throw new Error('Please sign in again with your name, student ID, school, period, and teacher.');
  return out;
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'ping') return json({ ok: true });
  return json({ ok: true, info: 'Freshmen Studies backend is running.' });
}

/* ---------- POST: save student work or an anonymous question ---------- */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const d = JSON.parse(e.postData.contents);
    const now = new Date();
    if (d.action === 'question') {             // anonymous: no name or ID is ever saved here
      const text = clean(d.text, 600);
      if (text.split(/\s+/).length < 3) throw new Error('Please type a full question.');
      sheet(QUESTIONS).appendRow([now, schoolOk(d.school) ? d.school : '', clean(d.teacher, 60), clean(d.period, 4), clean(d.topic, 60), text, '']);
      return json({ ok: true });
    }
    if (d.action === 'submit') {
      const s = student(d);
      const score = Math.max(0, Number(d.score) || 0), max = Math.max(0, Number(d.max) || 0);
      const pct = max ? Math.round(score / max * 100) : '';
      sheet(ALL).appendRow([now, s.school, s.teacher, s.period, s.last, s.first, "'" + s.id, clean(d.topic, 60), clean(d.type, 30), clean(d.activity, 120), score, max, pct, clean(d.responses, 8000)]);
      return json({ ok: true });
    }
    return json({ ok: false, error: 'Unknown request' });
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) { }
  }
}
