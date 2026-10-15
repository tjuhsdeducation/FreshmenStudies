/* =====================================================================
   FRESHMEN STUDIES LESSONS: Google Sheets connection (Google Apps Script)

   Saves every exit ticket and interactive activity (with score + answers)
   and every anonymous question into one Google Sheet. Each teacher gets
   their own tab. Download any time: File → Download → Microsoft Excel.

   SETUP (about 10 minutes, done once):
     1. Make a new Google Sheet named "Freshmen Studies Responses".
     2. Extensions → Apps Script. Delete what's there, paste this whole file, 💾 Save.
     3. ✏️ Edit the TEACHERS list below so it matches fs-config.js.
     4. Choose the function "setup" in the toolbar and click ▶ Run. Allow permissions.
     5. Deploy → New deployment → ⚙ Web app
          Execute as: Me      Who has access: Anyone      → Deploy
     6. Copy the Web app URL and paste it into fs-config.js (scriptUrl) on GitHub.

   ✏️ Added a teacher later? Add the name below, Save, and run setup() again.
      (Existing student work is never deleted.)
   ✏️ After editing this file, use Deploy → Manage deployments → ✏️ → Version: New
      so the website uses your newest version.
   ===================================================================== */

const TEACHERS = {
  'Tulare Union':   ['Teacher 1', 'Teacher 2', 'Teacher 3'],
  'Tulare Western': ['Teacher 1', 'Teacher 2', 'Teacher 3'],
  'Mission Oak':    ['Teacher 1', 'Teacher 2', 'Teacher 3']
};

const WORK = 'Student Work';
const QUESTIONS = 'Anonymous Questions';
const HEAD = {};
HEAD[WORK] = ['Timestamp', 'School', 'Teacher', 'Last Name', 'First Name', 'Student ID', 'Topic', 'Type', 'Activity', 'Score', 'Out Of', 'Percent', 'Answers'];
HEAD[QUESTIONS] = ['Timestamp', 'School', 'Teacher', 'Topic', 'Question', 'Answered? (type ✓)'];

/* ---------- one-time setup: creates every tab, header row, and teacher tab ---------- */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  [WORK, QUESTIONS].forEach(name => {
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.getRange(1, 1, 1, HEAD[name].length).setValues([HEAD[name]]).setFontWeight('bold').setBackground('#efe7fd');
    sh.setFrozenRows(1);
  });
  Object.keys(TEACHERS).forEach(school => TEACHERS[school].forEach(t => {
    if (/^Teacher \d+$/.test(t)) return;                        // skip placeholder names
    const name = (school.split(' ').map(w => w[0]).join('') + ': ' + t).slice(0, 90);   // e.g. "TU: Langlie"
    const sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.clear();
    const q = s => '"' + String(s).replace(/"/g, '') + '"';
    sh.getRange('A1').setValue('STUDENT WORK: ' + t + ' (' + school + ')').setFontWeight('bold');
    sh.getRange('A2').setFormula("=IFERROR(FILTER('" + WORK + "'!A1:M, ('" + WORK + "'!B1:B=" + q(school) + ")*('" + WORK + "'!C1:C=" + q(t) + ")+(ROW('" + WORK + "'!A1:A)=1)), \"No student work yet\")");
    sh.getRange('O1').setValue('ANONYMOUS QUESTIONS').setFontWeight('bold');
    sh.getRange('O2').setFormula("=IFERROR(FILTER('" + QUESTIONS + "'!A1:F, ('" + QUESTIONS + "'!B1:B=" + q(school) + ")*('" + QUESTIONS + "'!C1:C=" + q(t) + ")+(ROW('" + QUESTIONS + "'!A1:A)=1)), \"No questions yet\")");
    sh.setFrozenRows(2);
  }));
  const extra = ss.getSheetByName('Sheet1');
  if (extra && extra.getLastRow() === 0 && ss.getSheets().length > 1) ss.deleteSheet(extra);
}

/* ---------- helpers ---------- */
function json(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function clean(v, max) {                      // trims, limits length, and blocks spreadsheet formulas
  let s = String(v == null ? '' : v).replace(/\r/g, '').trim().slice(0, max || 4000);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}
function schoolOk(s) { return Object.prototype.hasOwnProperty.call(TEACHERS, s); }
function sheet(name) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh) throw new Error('The teacher needs to run setup() in Apps Script first.');
  return sh;
}
function student(d) {
  const s = d.student || {};
  const out = { first: clean(s.first, 40), last: clean(s.last, 40), id: clean(s.id, 20), school: clean(s.school, 40), teacher: clean(s.teacher, 60) };
  if (!/[A-Za-z]/.test(out.first) || !/[A-Za-z]/.test(out.last) || !/^[A-Za-z0-9-]{3,12}$/.test(out.id) || !schoolOk(out.school) || !out.teacher)
    throw new Error('Please sign in with your first and last name, student ID, school, and teacher.');
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
    if (d.action === 'question') {             // anonymous: no name or ID is ever accepted here
      const text = clean(d.text, 600);
      if (text.split(/\s+/).length < 3) throw new Error('Please type a full question.');
      sheet(QUESTIONS).appendRow([now, schoolOk(d.school) ? d.school : '', clean(d.teacher, 60), clean(d.topic, 60), text, '']);
      return json({ ok: true });
    }
    if (d.action === 'submit') {
      const s = student(d);
      const score = Math.max(0, Number(d.score) || 0), max = Math.max(0, Number(d.max) || 0);
      const pct = max ? Math.round(score / max * 100) + '%' : '';
      sheet(WORK).appendRow([now, s.school, s.teacher, s.last, s.first, "'" + s.id, clean(d.topic, 60), clean(d.type, 30), clean(d.activity, 120), score, max, pct, clean(d.responses, 8000)]);
      return json({ ok: true });
    }
    return json({ ok: false, error: 'Unknown request' });
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) { }
  }
}
