/* =====================================================================
   TEACHER RESOURCE HUB: SCORE TRACKER (Google Apps Script web app, Code.gs)

   The website sends every graded activity here. This script keeps:

   📊 ONE MASTER SHEET ("Teacher Resource Hub – Master Scores")
        • Start Here · All submissions · Activity Dashboard · Activity List · Teacher Sheets
        • Discussion Posts + Discussion Grades (the Discussion Board needs these)
        • Service Hours · WYR Votes (daily Would You Rather)

   📊 ONE SHEET PER TEACHER ("Formative Scores - <Teacher>", in their school folder)
        • one TAB per activity, in Activity List order: All periods summary, then one
          block per period sorted by last name, class averages, color-coded
          Average % of points, and ⬇ Download for Aeries for each period
        • Service Hours (that teacher's students)

   GRADED: the 11 full WICOR lessons (2 pts per station), the 17 Discussion Board
   prompts (main post /6 + replies /4), every WICOR Challenge, and the college
   essay / campus tools. (Practice activities and projector tools aren't graded.)

   SETUP (no coding needed):
     1. Open "Teacher Resource Hub – Master Scores" (Drive → Teacher Resource Hub Scores)
        → Extensions → Apps Script → delete what's there → paste this whole file → 💾 Save.
     2. Toolbar: choose "setup" → ▶ Run → Review permissions → your account
        → Advanced → Go to (project name) (unsafe) → Allow.  (Builds all the tabs.)
     3. Choose "createAllTeacherSheets" → ▶ Run (makes + shares every teacher's sheet).
     4. Deploy → New deployment → ⚙ Web app → Execute as: Me → Who has access: Anyone
        → Deploy → copy the Web app URL (ends in /exec).
     5. Paste that URL into hub-config.js (scriptUrl) on GitHub.
   After ANY change to this file: Deploy → Manage deployments → ✏️ → Version: New version → Deploy.
   ===================================================================== */

/* ✏️ 1) School sites and teachers. Keep this the same as hub-config.js. */
const SCHOOLS = {
  "Tulare Union":     ["Amy Mueller", "Stephanie Edwards", "Melany Miller", "Frank Mello", "Shana Duke"],
  "Tulare Western":   ["Jillian Salazar", "Prescilla Carranza", "Chaundra Olsen", "Stevie Bray", "Kristen Rickard", "Eduardo Lopez", "Jordan Perry"],
  "Mission Oak":      ["Dane Maness", "Randall Leal", "Doug Jones", "Summer Trevino", "Heather Luttrell", "Alvaro Martin"]
};

/* ✏️ 2) Teachers' school emails (their sheet is shared with them). */
const TEACHER_EMAILS = {
  // Tulare Union
  "Amy Mueller": 'amy.mueller@tulare.k12.ca.us',
  "Stephanie Edwards": 'stephanie.edwards@tulare.k12.ca.us',
  "Melany Miller": 'melany.miller@tulare.k12.ca.us',
  "Frank Mello": 'frank.mello@tulare.k12.ca.us',
  "Shana Duke": 'shana.duke@tulare.k12.ca.us',
  // Tulare Western
  "Jillian Salazar": 'jillian.salazar@tulare.k12.ca.us',
  "Prescilla Carranza": 'prescilla.carranza@tulare.k12.ca.us',
  "Chaundra Olsen": 'chaundra.olsen@tulare.k12.ca.us',
  "Stevie Bray": 'stevie.bray@tulare.k12.ca.us',
  "Kristen Rickard": 'kristen.rickard@tulare.k12.ca.us',
  "Eduardo Lopez": 'eduardo.lopez-servin@tulare.k12.ca.us',
  "Jordan Perry": 'jordan.perry@tulare.k12.ca.us',
  // Mission Oak
  "Dane Maness": 'dane.maness@tulare.k12.ca.us',
  "Randall Leal": 'randall.leal@tulare.k12.ca.us',
  "Doug Jones": 'doug.jones@tulare.k12.ca.us',
  "Summer Trevino": 'summer.trevino@tulare.k12.ca.us',
  "Heather Luttrell": 'heather.luttrell@tulare.k12.ca.us',
  "Alvaro Martin": 'alvaro.martin@tulare.k12.ca.us',
};

/* ✏️ 3) Your master sheet and folder (already created in your Drive; don't change these) */
const MASTER_SHEET_ID  = '1-pO1VxWEy_QXE1MkSElQqh-WqEeUQpKyhC248_tIxKQ';   // "Teacher Resource Hub – Master Scores"
const SCORES_FOLDER_ID = '1U74C6ejBzYwdn0M6Sxm7eM-bfhr419ht';             // "Teacher Resource Hub Scores" folder

/* ✏️ 4) Every graded activity, in the order teacher tabs are sorted. New ones still work (they go at the end). */
const ACTIVITIES = [
  ["WICOR Lessons", "Full WICOR lesson", "Geometry: Angle Detectives: Parallel Lines & Transversals"],
  ["WICOR Lessons", "Full WICOR lesson", "World History: The Plague That Remade Europe"],
  ["WICOR Lessons", "Full WICOR lesson", "English 2: The Real Price of a $5 T-Shirt"],
  ["WICOR Lessons", "Full WICOR lesson", "Algebra 1: Find the Mistake: Solving Multi-Step Equations"],
  ["WICOR Lessons", "Full WICOR lesson", "Algebra 1: The Price Is Linear: Choosing a Phone Plan"],
  ["WICOR Lessons", "Full WICOR lesson", "English 1: Silence the Phones? The Case for Phone-Free Classrooms"],
  ["WICOR Lessons", "Full WICOR lesson", "Biology: Photosynthesis: The Factory in Every Leaf"],
  ["WICOR Lessons", "Full WICOR lesson", "Geometry: Reach for the Sky: The Pythagorean Theorem"],
  ["WICOR Lessons", "Full WICOR lesson", "Algebra 1: Race to School: Reading Linear Graphs"],
  ["WICOR Lessons", "Full WICOR lesson", "Chemistry: Collision Course: Why Cold Keeps Food Fresh"],
  ["WICOR Lessons", "Full WICOR lesson", "Geometry: Shadow Math: Measuring with Similar Triangles"],
  ["AVID Lessons", "Focused notes lesson", "AVID: Note-Taking Studio: Take It, Process It, Revisit It"],
  ["AVID Lessons", "Organization lesson", "AVID: Everything Has a Place: Organizing Your AVID Binder"],
  ["AVID Lessons", "Digital organization lesson", "AVID: Digital Binder: Organizing Your Google Drive"],
  ["AVID Lessons", "Digital literacy lesson", "AVID: Digital Literacy: Google Docs, Slides, and Importing Files"],
  ["Grade It Like a Teacher", "Calibration", "AVID: Grade It Like a Teacher: Focused Notes"],
  ["Grade It Like a Teacher", "Calibration", "AVID: Grade It Like a Teacher: Tutorial Request Forms (TRFs)"],
  ["Grade It Like a Teacher", "Calibration", "AVID: Grade It Like a Teacher: Binder Checks"],
  ["College & Career Lessons", "Scholarship workshop", "College & Career: Scholarship Finder & Essay Coach"],
  ["College & Career Lessons", "College & Career lesson", "College & Career: California, Here I Come: Exploring Our Colleges"],
  ["College & Career Lessons", "College & Career lesson", "College & Career: Major Moves: Pick a Major and Plan Your Classes"],
  ["College & Career Lessons", "College & Career lesson", "College & Career: Degree to Paycheck: Careers, Salaries, and Applications"],
  ["AVID Lessons", "Questioning lesson", "AVID: Costa’s Question Lab: Ask Higher-Level Questions"],
  ["College & Career Lessons", "College & Career lesson", "College & Career: Get Hired: Resumes, Applications & Interviews"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Test Vocabulary: Words in the Directions"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Test Vocabulary: Math Directions"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Algebra 1"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Geometry"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Biology"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Chemistry"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: World History"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: US History"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Government & Economics"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: Literary & Rhetorical Terms"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: College Words"],
  ["Vocabulary Practice", "Vocabulary deck", "Vocabulary: AVID Words"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · US History: Reading Political Cartoons: Trusts and Empire"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · US History: World War I: Causes and Effects"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · US History: World War II: Causes and Effects"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · World History: Economic Systems: Who Decides?"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · World History: Ideas in Conflict: Adam Smith vs. Karl Marx"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Chemistry: Stoichiometry: Reading a Chemical Recipe"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Chemistry: Periodic Trends: Size and Ionization Energy"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Biology: Symbiosis: Living Together"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Biology: Protein Synthesis and Mutations"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Biology: Cellular Transport: The Potato Osmosis Lab"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Biology: Homeostasis: Balancing Blood Sugar"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Algebra 1: Reading Linear Graphs: Saving for a Car"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Algebra 1: Scatter Plots and Trend Lines: Study Time vs. Test Scores"],
  ["Reading Checks", "10-Minute Reading Check", "Reading Check · Algebra 2: Reading Quadratic and Exponential Graphs"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · ELA: Claim 1 Reading: Literary Text"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · ELA: Claim 1 Reading: Informational Text"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · ELA: Claim 2 Writing: Revise and Edit"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · ELA: Claim 4 Research: Evaluating Sources"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · ELA: Claim 3 Listening: A Talk About Urban Heat"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · Math: Claim 1: Concepts and Procedures"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · Math: Claims 2 & 4: Problem Solving and Modeling"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · Math: Claim 3: Communicating Reasoning"],
  ["CAASPP Practice", "CAASPP practice set", "CAASPP Practice · Science (CAST): CAST: Why Are Coral Reefs Turning White?"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Algebra 1: Linear Functions & Systems of Equations"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Algebra 1: Quadratic Functions"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Geometry: Transformations & Congruence"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Geometry: Right Triangles: Pythagorean Theorem & Trigonometry"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Chemistry: Atomic Structure & the Periodic Table"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Chemistry: Chemical Reactions & Balancing Equations"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Chemistry: Gas Laws & Kinetic Molecular Theory"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Biology: Cells & Cellular Transport"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · Biology: Genetics & Heredity"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · World History: The Industrial Revolution"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · World History: The Age of Imperialism"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · US History: The Constitution & Checks and Balances"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · US History: The Civil Rights Movement"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · English 1: Short Story Elements: Plot, Conflict & Character"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · English 1: Figurative Language & Poetry"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · English 2: Rhetoric: Ethos, Pathos, Logos & the Rhetorical Situation"],
  ["Unit Study Guides", "Unit study guide", "Study Guide · English 2: Argument Writing: Claims, Evidence & Counterclaims"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors English 1: Check-In: Imagery, Irony, and Theme in “The Story of an Hour”"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors English 2: Check-In: Rhetoric in Douglass’s “What to the Slave Is the Fourth of July?”"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors Chemistry: Check-In: Limiting Reactant and Percent Yield"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors Biology: Check-In: Photosynthesis, Respiration, and Limiting Factors"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors Geometry: Check-In: Similar Triangles, Proportions, and Area"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors Algebra 2: Check-In: Exponential Models and Logarithms"],
  ["Honors & AP", "Honors check-in", "Honors & AP · Honors World History: Check-In: Enlightenment Ideas and the Age of Revolutions"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP Biology: AP Practice Quiz: Enzyme Structure and Function"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP Chemistry: AP Practice Quiz: Rate Laws and Half-Life"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP Calculus AB: AP Practice Quiz: Limits and Derivatives"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP Statistics: AP Practice Quiz: Scatterplots and Linear Regression"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP Psychology: AP Practice Quiz: Research Methods and Data"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP US History: AP Practice Quiz: The Gilded Age (Period 6, 1865–1898)"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP World History: AP Practice Quiz: Industrialization and Imperialism (Units 5–6)"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP English Language: AP Practice Quiz: Rhetorical Analysis of Lincoln’s Second Inaugural"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP English Literature: AP Practice Quiz: Poetry Analysis of Shakespeare’s Sonnet 73"],
  ["Honors & AP", "AP-style quiz", "Honors & AP · AP US Government: AP Practice Quiz: Federalist No. 10, No. 51, and Brutus No. 1"],
  ["Discussion Board", "Discussion", "Discussion · What Does “College Ready” Really Mean?"],
  ["Discussion Board", "Discussion", "Discussion · Productive Struggle: When Learning Gets Hard"],
  ["Discussion Board", "Discussion", "Discussion · Phones in Class: Helpful or Harmful?"],
  ["Discussion Board", "Discussion", "Discussion · Should School Start Even Later?"],
  ["Discussion Board", "Discussion", "Discussion · Which Invention Changed History the Most?"],
  ["Discussion Board", "Discussion", "Discussion · Where Do You See Math Outside of School?"],
  ["Discussion Board", "Discussion", "Discussion · Is a Four-Year College the Only Path to Success?"],
["Discussion Board", "Discussion", "Discussion · AI Chatbots and Schoolwork: Help or Cheating?"],
  ["Discussion Board", "Discussion", "Discussion · Should Social Media Have a Minimum Age of 16?"],
  ["Discussion Board", "Discussion", "Discussion · Should 16-Year-Olds Vote in Local Elections?"],
  ["Discussion Board", "Discussion", "Discussion · Gene Editing: Where Should We Draw the Line?"],
  ["Discussion Board", "Discussion", "Discussion · Water in the Valley: Who Gets It?"],
  ["Discussion Board", "Discussion", "Discussion · Should Personal Finance Be Required?"],
  ["Discussion Board", "Discussion", "Discussion · Retakes and Late Work: Fair or Not?"],
  ["Discussion Board", "Discussion", "Discussion · Extreme Heat and Student Athletes"],
  ["Discussion Board", "Discussion", "Discussion · Whose Story Gets Told?"],
  ["Discussion Board", "Discussion", "Discussion · Teacher’s Choice: Current Events"],
  ["WICOR Challenges", "Graded challenge", "Reading · Read the Graph: Slope & Intercept"],
  ["WICOR Challenges", "Graded challenge", "Reading · Read the Diagram: Parallel Lines"],
  ["WICOR Challenges", "Graded challenge", "Writing · Explain Each Step (Algebra)"],
  ["WICOR Challenges", "Graded challenge", "Writing · Justify It (Geometry)"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Ask Before You Solve: Systems"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Notice & Wonder: The Diagonal"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Two Methods, One Answer"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Peer Review a Proof"],
  ["WICOR Challenges", "Graded challenge", "Organization · Organize: Solving a System"],
  ["WICOR Challenges", "Graded challenge", "Organization · Organize Triangle Facts"],
  ["WICOR Challenges", "Graded challenge", "Writing · Summary Sprint"],
  ["WICOR Challenges", "Graded challenge", "Writing · Claim, Evidence, Reasoning"],
  ["WICOR Challenges", "Graded challenge", "Writing · Make It Specific"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Costa’s Level Check"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Strong or Vague? Point of Confusion"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Upgrade the Question"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Tutorial Steps in Order"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Group Roles Match"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Academic Talk Upgrade"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Philosophical Chairs Norms"],
  ["WICOR Challenges", "Graded challenge", "Organization · Planner Priorities"],
  ["WICOR Challenges", "Graded challenge", "Organization · Binder Sort"],
  ["WICOR Challenges", "Graded challenge", "Organization · SMART Goals"],
  ["WICOR Challenges", "Graded challenge", "Reading · Find the Claim"],
  ["WICOR Challenges", "Graded challenge", "Reading · Context Clues"],
  ["WICOR Challenges", "Graded challenge", "Reading · Before, During, After"],
  ["WICOR Challenges", "Graded challenge", "Writing · Explain Your Math"],
  ["WICOR Challenges", "Graded challenge", "Writing · Write a Lab Conclusion"],
  ["WICOR Challenges", "Graded challenge", "Writing · Embed a Quote"],
  ["WICOR Challenges", "Graded challenge", "Writing · Write Like a Historian"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Ask Before You Solve"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Testable Questions"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Question the Text"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Source Detective"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Math Talk"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Lab Partners"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Socratic Seminar Moves"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Philosophical Chairs: History Edition"],
  ["WICOR Challenges", "Graded challenge", "Organization · Organize Your Problem Solving"],
  ["WICOR Challenges", "Graded challenge", "Organization · Cell Organizer"],
  ["WICOR Challenges", "Graded challenge", "Organization · Organize an Essay"],
  ["WICOR Challenges", "Graded challenge", "Organization · Timeline Builder"],
  ["WICOR Challenges", "Graded challenge", "Reading · Read the Word Problem"],
  ["WICOR Challenges", "Graded challenge", "Reading · Read a Data Table"],
  ["WICOR Challenges", "Graded challenge", "Reading · Figurative Language"],
  ["WICOR Challenges", "Graded challenge", "Reading · Close Read: The Preamble"],
  ["WICOR Challenges", "Graded challenge", "Reading · Mark the Text: Sleep and Learning"],
  ["WICOR Challenges", "Graded challenge", "Reading · Mark the Text: The Dust Bowl"],
  ["WICOR Challenges", "Graded challenge", "Writing · Color-Code a CER Paragraph"],
  ["WICOR Challenges", "Graded challenge", "Writing · Color-Code an Analysis Paragraph"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Spot the Mistake"],
  ["WICOR Challenges", "Graded challenge", "Inquiry · Color-Code Costa’s Questions"],
  ["WICOR Challenges", "Graded challenge", "Collaboration · Code the Conversation"],
  ["WICOR Challenges", "Graded challenge", "Organization · Color-Code Your Planner"]
];

/* ✏️ 5) Other settings */
const SCORES_FOLDER   = 'Teacher Resource Hub Scores';
const MASTER_NAME     = 'Teacher Resource Hub – Master Scores';
const TEACHER_PREFIX  = 'Formative Scores - ';
const SCHOOL_FOLDERS  = true;
const SHOW_RESPONSES  = true;
const ALLOW_UNLISTED  = false;
const TIME_ZONE       = 'America/Los_Angeles';
const NAVY = '#1c3557', HEAD = '#dce6f2', AVG = '#eef3fa', GREEN = '#b7e1cd', YELLOW = '#fce8b2', RED = '#f4c7c3', AERIES = '#fff2cc';

/* Master tab names + headers for the Discussion Board, Service Hours, and votes */
const POSTS = 'Discussion Posts', GRADES = 'Discussion Grades', SERVICE = 'Service Hours', VOTES = 'WYR Votes';
const HEADS = {};
HEADS[POSTS] = ['Timestamp', 'Post ID', 'Prompt ID', 'Prompt', 'Type', 'Reply To Post ID', 'Reply To', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Display Name', 'Text', 'Word Count', 'Auto Points', 'Hide (type X)', 'Annotations Made', 'School'];
HEADS[GRADES] = ['Teacher', 'Period', 'Student Name', 'Student ID', 'Prompt ID', 'Prompt', 'Main Post Words', 'Main Post Points (/6)', 'Replies', 'Reply Points (/4)', 'Auto Total (/10)', 'Teacher Score', 'Last Activity', 'School'];
HEADS[SERVICE] = ['Timestamp', 'School', 'Teacher', 'Period', 'Student Name', 'Student ID', 'Organization', 'Date of Service', 'Hours', 'Supervisor', 'Supervisor Contact', 'What I Did', 'Reflection', 'Verified (type ✓)'];
HEADS[VOTES] = ['Timestamp', 'Date', 'Choice', 'Question'];

/* ============================ WEB APP ============================ */
function doGet(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p.action === 'ping' || !p.action) return p.action ? json({ ok: true }) : ContentService.createTextOutput('✅ The Teacher Resource Hub score tracker is running.');
    if (p.action === 'votes') {
      const rows = tab(VOTES).getDataRange().getValues().slice(1).filter(r => String(r[1]) === String(p.date));
      return json({ ok: true, a: rows.filter(r => r[2] === 'A').length, b: rows.filter(r => r[2] === 'B').length });
    }
    if (p.action !== 'list') return json({ ok: false, error: 'Unknown request' });
    const rows = tab(POSTS).getDataRange().getValues().slice(1);
    const posts = rows.filter(r => r[2] === p.prompt && String(r[15]).toUpperCase() !== 'X').map(r => ({
      id: r[1], parent: r[5] || '', type: r[4], name: r[11], teacher: r[7], period: String(r[8]),
      text: r[12], words: r[13], time: new Date(r[0]).toISOString(), mine: !!p.sid && idOf(r[10]) === String(p.sid)
    }));
    return json({ ok: true, posts: posts });
  } catch (err) { return json({ ok: false, error: String(err.message || err) }); }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(30000);
    const d = JSON.parse(e.postData.contents);
    if (d.action === 'vote') {                       // anonymous: one vote per device per day (checked on the website)
      const choice = d.choice === 'B' ? 'B' : 'A', date = clean(d.date, 12);
      tab(VOTES).appendRow([new Date(), date, choice, clean(d.question, 200)]);
      const rows = tab(VOTES).getDataRange().getValues().slice(1).filter(r => String(r[1]) === date);
      return json({ ok: true, a: rows.filter(r => r[2] === 'A').length, b: rows.filter(r => r[2] === 'B').length });
    }
    const s = student(d), now = new Date();
    if (d.action === 'post') return json(savePost(d, s, now));
    if (d.action === 'score') return json(saveScore(d, s, now));
    if (d.action === 'lesson') return json(saveLesson(d, s, now));
    if (d.action === 'service') return json(saveService(d, s, now));
    return json({ ok: false, error: 'Unknown request' });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/* ============================ GRADED WORK → master log + teacher sheet ============================ */
/* rec: activity, score, total, q (labels/points/max arrays), responses */
function record(s, activity, score, total, q, responses, when) {
  const labels = (q && q.labels) || [], pts = (q && q.points) || [], mx = (q && q.max) || [];
  const rec = {
    activity: clean(activity, 120).replace(/^'/, '') || 'Untitled activity', id: s.id, last: s.last, first: s.first,
    period: /^\d+$/.test(String(s.period)) ? Number(s.period) : s.period,
    score: num(score), total: num(total), locks: 0, when: when || new Date(),
    labels: clean(labels.map(x => String(x).replace(/\|/g, '/')).join('|'), 3000), points: clean(pts.join('|'), 1000), max: clean(mx.join('|'), 1000),
    responses: clean(responses, 45000)
  };
  masterFile().getSheetByName('All submissions').appendRow([rec.when, rec.activity, s.teacher, s.school, rec.period, "'" + s.id, rec.last, rec.first,
    rec.score, rec.total, (typeof rec.score === 'number' && rec.total) ? rec.score / rec.total : '', rec.locks, rec.labels, rec.points, rec.max, rec.responses]);
  const ss = teacherFile(s.school, s.teacher);
  const data = upsertData(ss, rec);
  renderActivity(ss, s.teacher, rec.activity, data.filter(r => r.activity === rec.activity));
  return rec;
}

/* WICOR Challenges (score sent as "8/10" or with separate total; question columns if provided) */
function saveScore(d, s, now) {
  let score = d.scoreNum, total = d.total;
  if ((score === undefined || score === '') && /^\s*[\d.]+\s*\/\s*[\d.]+/.test(String(d.score))) { const m = String(d.score).split('/'); score = parseFloat(m[0]); total = parseFloat(m[1]); }
  const q = Array.isArray(d.qlabels) ? { labels: d.qlabels, points: d.qpoints || [], max: d.qmax || [] } : { labels: ['Score'], points: [score], max: [total] };
  record(s, d.activity, score, total, q, d.responses, now);
  return { ok: true };
}

/* Full WICOR lessons + college tools: 2 points per station/part finished */
function saveLesson(d, s, now) {
  const done = Math.max(0, Math.min(5, Number(d.stationsDone) || 0));
  const q = Array.isArray(d.qlabels) ? { labels: d.qlabels, points: d.qpoints || [], max: d.qmax || [] } : { labels: ['Stations done'], points: [done], max: [5] };
  record(s, d.lesson, Array.isArray(d.qlabels) ? d.qpoints.reduce((a, b) => a + (+b || 0), 0) : done * 2, Array.isArray(d.qlabels) ? d.qmax.reduce((a, b) => a + (+b || 0), 0) : 10, Array.isArray(d.qlabels) ? q : { labels: ['Stations done (x2)'], points: [done * 2], max: [10] }, d.answers, now);
  return { ok: true, points: done * 2 };
}

function saveService(d, s, now) {
  const hrs = Math.max(0, Math.min(24, Number(d.hours) || 0));
  if (!hrs) throw new Error('Enter the number of hours (up to 24 per entry).');
  const row = [now, s.school, s.teacher, s.period, s.name, "'" + s.id, clean(d.org, 120), clean(d.date, 20), hrs, clean(d.supervisor, 80), clean(d.contact, 80), clean(d.what, 600), clean(d.reflection, 1500), ''];
  tab(SERVICE).appendRow(row);
  const ss = teacherFile(s.school, s.teacher);
  let sh = ss.getSheetByName('Service Hours');
  if (!sh) { sh = ss.insertSheet('Service Hours', ss.getSheets().length); sh.getRange(1, 1, 1, HEADS[SERVICE].length).setValues([HEADS[SERVICE]]).setFontWeight('bold').setBackground(HEAD); sh.setFrozenRows(1); }
  sh.appendRow(row);
  return { ok: true };
}

/* ---------- Discussion Board (auto-graded: main post /6, replies /4) ---------- */
function countWords(s) { return (String(s || '').trim().match(/\S+/g) || []).length; }
function usesSource(text, keys) {
  if (keys && keys.length) return keys.some(k => String(text).toLowerCase().indexOf(String(k).toLowerCase()) >= 0) || /["“][^"”]{8,}["”]/.test(text);
  return /because|for example|for instance|according to|evidence|["“]|\d/i.test(text);
}
function mainPostPoints(text, minWords, keys) {
  const w = countWords(text);
  let p = w >= minWords ? 4 : w >= minWords / 2 ? 2 : w > 0 ? 1 : 0;
  if (usesSource(text, keys)) p += 1;
  if (/\?/.test(text)) p += 1;
  return Math.min(6, p);
}
function replyPoints(text) { const w = countWords(text); return w >= 30 ? 2 : w >= 15 ? 1 : 0; }
function displayName(full) {
  const parts = String(full).trim().split(/\s+/);
  return parts.length > 1 ? parts[0] + ' ' + parts[parts.length - 1].charAt(0).toUpperCase() + '.' : parts[0];
}
function savePost(d, s, now) {
  const text = clean(d.text, 4000);
  const minWords = Math.max(20, Math.min(300, Number(d.minWords) || 75));
  const isReply = !!d.parent;
  if (countWords(text) < 5) throw new Error('Your post is too short.');
  const sh = tab(POSTS);
  const rows = sh.getDataRange().getValues().slice(1);
  let replyToName = '';
  if (isReply) {
    const parent = rows.find(r => r[1] === d.parent);
    if (!parent) throw new Error('That post could not be found.');
    replyToName = parent[11];
  } else if (rows.some(r => r[2] === d.prompt && r[4] === 'Main post' && idOf(r[10]) === s.id)) {
    throw new Error('You already posted. Reply to your classmates next!');
  }
  const id = Utilities.getUuid().slice(0, 8);
  const keys = Array.isArray(d.sourceKeys) ? d.sourceKeys.slice(0, 40).map(k => String(k).slice(0, 40)) : [];
  const pts = isReply ? replyPoints(text) : mainPostPoints(text, minWords, keys);
  sh.appendRow([now, id, clean(d.prompt, 60), clean(d.promptTitle, 200), isReply ? 'Reply' : 'Main post', isReply ? clean(d.parent, 20) : '', replyToName,
                s.teacher, s.period, s.name, "'" + s.id, displayName(s.name), text, countWords(text), pts, '', Math.max(0, Math.min(999, Number(d.annotations) || 0)), s.school]);
  const g = updateGrade(clean(d.prompt, 60), clean(d.promptTitle, 200), s, now);
  record(s, 'Discussion · ' + clean(d.promptTitle, 200), g.total, 10, { labels: ['Main post', 'Replies (best 2)'], points: [g.main, g.replies], max: [6, 4] }, g.summary, now);
  return { ok: true, post: { id: id, parent: isReply ? d.parent : '', type: isReply ? 'Reply' : 'Main post', name: displayName(s.name), teacher: s.teacher, period: s.period, text: text, words: countWords(text), time: now.toISOString(), mine: true }, grade: g };
}
function updateGrade(prompt, title, s, now) {
  const mine = tab(POSTS).getDataRange().getValues().slice(1).filter(r => r[2] === prompt && idOf(r[10]) === s.id);
  const main = mine.find(r => r[4] === 'Main post');
  const replies = mine.filter(r => r[4] === 'Reply').map(r => Number(r[14]) || 0).sort((a, b) => b - a);
  const mainPts = main ? Number(main[14]) || 0 : 0;
  const replyPts = (replies[0] || 0) + (replies[1] || 0);
  const row = [s.teacher, s.period, s.name, "'" + s.id, prompt, title, main ? main[13] : 0, mainPts, replies.length, replyPts, mainPts + replyPts];
  const g = tab(GRADES), data = g.getDataRange().getValues();
  let at = -1;
  for (let i = 1; i < data.length; i++) if (idOf(data[i][3]) === s.id && data[i][4] === prompt) { at = i + 1; break; }
  if (at > 0) { g.getRange(at, 1, 1, 11).setValues([row]); g.getRange(at, 13, 1, 2).setValues([[now, s.school]]); }
  else g.appendRow(row.concat(['', now, s.school]));
  const summary = 'Main post: ' + (main ? main[13] + ' words, ' + mainPts + '/6' : 'not posted yet') + ' | Replies: ' + replies.length + ' (' + replyPts + '/4)' + (main ? '\nMAIN POST: ' + String(main[12]).slice(0, 3000) : '');
  return { main: mainPts, replies: replyPts, total: mainPts + replyPts, summary: summary };
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
  while (found.hasNext()) { const f = found.next(); if (f.isTrashed()) continue; props.setProperty(propKey, f.getId()); return { ss: SpreadsheetApp.openById(f.getId()), isNew: false }; }   // never reuse a file in the trash
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
function tab(name) {
  const ss = masterFile();
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); sh.getRange(1, 1, 1, HEADS[name].length).setValues([HEADS[name]]).setFontWeight('bold').setBackground(HEAD); sh.setFrozenRows(1); }
  return sh;
}

/* ▶ Run "setup" once: builds (or refreshes) every tab in the master sheet. Never deletes scores or posts. */
function setup() { buildMaster(masterFile()); }

function buildMaster(ss) {
  ss.setSpreadsheetTimeZone(TIME_ZONE);
  const mk = (name, i) => ss.getSheetByName(name) || ss.insertSheet(name, Math.min(i, ss.getSheets().length));
  const head = (sh, vals, bg, color) => { sh.getRange(1, 1, 1, vals.length).setValues([vals]).setFontWeight('bold').setBackground(bg || HEAD).setFontColor(color || '#1f2430').setWrap(true).setVerticalAlignment('middle'); sh.setFrozenRows(1); };
  const AS = "'All submissions'!";

  const st = mk('Start Here', 0); st.clear();
  const txt = [
    ['Teacher Resource Hub – Master Scores'],
    ['Your one main sheet for every graded activity on the Teacher Resource Hub (AVID / WICOR).'],
    [''], ['WHAT IS IN THIS SHEET'],
    ['• All submissions: every graded score, newest at the bottom (every attempt is kept).'],
    ['• Activity Dashboard: each activity → school → teacher, with submissions and average %.'],
    ['• Activity List: all ' + ACTIVITIES.length + ' graded activities (WICOR lessons, College & Career lessons, Reading Checks, CAASPP Practice, Discussion Board prompts, WICOR Challenges).'],
    ['• Teacher Sheets: every teacher, with a link to their own "Formative Scores" sheet.'],
    ['• Discussion Posts / Discussion Grades: everything the Discussion Board needs (type X in "Hide" to hide a post).'],
    ['• Service Hours and WYR Votes.'],
    [''], ['EACH TEACHER\'S OWN SHEET  (Drive → Teacher Resource Hub Scores → their school folder)'],
    ['• "Formative Scores - (teacher)": one tab per activity, in Activity List order.'],
    ['• Each tab: All periods summary, then one block per period sorted by last name, class averages, color-coded % of points, and ⬇ Download for Aeries.'],
    [''], ['Please don\'t rename these tabs. Run "setup" again any time to refresh this sheet (scores are never deleted).']
  ];
  st.getRange(1, 1, txt.length, 1).setValues(txt); st.setColumnWidth(1, 1000);
  st.getRange(1, 1).setFontSize(16).setFontWeight('bold'); [4, 12].forEach(r => st.getRange(r, 1).setFontWeight('bold').setFontColor(NAVY));

  const a = mk('All submissions', 1);
  head(a, ['Submitted', 'Assessment', 'Teacher', 'School', 'Period', 'Student ID', 'Last Name', 'First Name', 'Score', 'Total', 'Percent', 'Times Locked', 'Question Labels', 'Question Points', 'Question Max', 'Responses']);
  a.getRange('A:A').setNumberFormat('m/d/yyyy h:mm'); a.getRange('K:K').setNumberFormat('0%');
  [150, 300, 140, 150, 60, 100, 110, 110, 60, 60, 70, 80, 200, 140, 140, 300].forEach((w, i) => a.setColumnWidth(i + 1, w));

  const d = mk('Activity Dashboard', 2); d.clear();
  d.getRange('A1').setValue('Activity Dashboard').setFontSize(14).setFontWeight('bold');
  d.getRange('A2').setValue('Every activity by school and teacher (all attempts). Updates automatically.').setFontStyle('italic').setFontColor('#6b7a90');
  d.getRange('A4').setFormula('=IFERROR(QUERY(' + AS + 'A1:P,"select B, D, C, count(F), avg(K), max(A) where B is not null group by B, D, C order by B, D, C label B \'Activity\', D \'School\', C \'Teacher\', count(F) \'Submissions\', avg(K) \'Average %\', max(A) \'Last submission\'",1),"No submissions yet")');
  d.getRange('A4:F4').setFontWeight('bold').setBackground(HEAD); d.getRange('E:E').setNumberFormat('0%'); d.getRange('F:F').setNumberFormat('m/d/yyyy h:mm');
  [340, 160, 150, 100, 90, 150].forEach((w, i) => d.setColumnWidth(i + 1, w)); d.setFrozenRows(4);

  const l = mk('Activity List', 3); l.clear();
  head(l, ['#', 'Section', 'Type', 'Activity (exact name used in the sheets)', 'Submissions', 'Students', 'Average %', 'Last submission'], NAVY, '#ffffff');
  const rows = ACTIVITIES.map((x, i) => { const r = i + 2; return [i + 1, x[0], x[1], x[2],
    '=COUNTIF(' + AS + 'B:B,D' + r + ')',
    '=IF(E' + r + '=0,0,COUNTUNIQUE(FILTER(' + AS + 'F:F,' + AS + 'B:B=D' + r + ')))',
    '=IFERROR(AVERAGEIF(' + AS + 'B:B,D' + r + ',' + AS + 'K:K),"")',
    '=IF(E' + r + '=0,"",MAXIFS(' + AS + 'A:A,' + AS + 'B:B,D' + r + '))']; });
  l.getRange(2, 1, rows.length, 8).setValues(rows);
  l.getRange(2, 7, rows.length, 1).setNumberFormat('0%'); l.getRange(2, 8, rows.length, 1).setNumberFormat('m/d/yyyy h:mm');
  ACTIVITIES.forEach((x, i) => { if (x[0] !== 'WICOR Challenges') l.getRange(i + 2, 1, 1, 8).setBackground(AVG); });
  [40, 150, 150, 420, 100, 80, 90, 140].forEach((w, i) => l.setColumnWidth(i + 1, w));

  const t = mk('Teacher Sheets', 4);
  const old = {}; if (t.getLastRow() > 1) t.getRange(2, 1, t.getLastRow() - 1, 4).getFormulas().forEach((f, i) => { const v = t.getRange(i + 2, 2).getValue(); old[v] = [f[2] || t.getRange(i + 2, 3).getValue(), t.getRange(i + 2, 4).getValue()]; });
  t.clear();
  head(t, ['School', 'Teacher', 'Teacher sheet', 'Created', 'Submissions', 'Students', 'Average %'], NAVY, '#ffffff');
  const tr = []; Object.keys(SCHOOLS).forEach(sc => SCHOOLS[sc].forEach(tn => { const r = tr.length + 2, o = old[tn] || ['', ''];
    tr.push([sc, tn, o[0], o[1], '=COUNTIF(' + AS + 'C:C,B' + r + ')', '=IF(E' + r + '=0,0,COUNTUNIQUE(FILTER(' + AS + 'F:F,' + AS + 'C:C=B' + r + ')))', '=IFERROR(AVERAGEIF(' + AS + 'C:C,B' + r + ',' + AS + 'K:K),"")']); }));
  t.getRange(2, 1, tr.length, 7).setValues(tr); t.getRange(2, 7, tr.length, 1).setNumberFormat('0%'); t.getRange(2, 4, tr.length, 1).setNumberFormat('m/d/yyyy');
  [170, 160, 320, 100, 100, 80, 90].forEach((w, i) => t.setColumnWidth(i + 1, w));

  [POSTS, GRADES, SERVICE, VOTES].forEach((n, i) => { const sh = mk(n, 5 + i); head(sh, HEADS[n]); });
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
  linkTeacher(school, teacher, r.ss, r.isNew);
  return r.ss;
}

/* ▶ Optional: run "createAllTeacherSheets" to make every teacher's sheet NOW (in their school folder,
   shared with them, and linked on the master's Teacher Sheets tab) instead of waiting for their first
   student to submit. Safe to run again: teachers who already have a sheet are skipped. */
function createAllTeacherSheets() {
  let made = 0;
  Object.keys(SCHOOLS).forEach(school => SCHOOLS[school].forEach(t => {
    if (/^ACHS Teacher$|^Teacher \d+$/.test(t)) return;                       // skip placeholder names
    const before = PropertiesService.getScriptProperties().getProperty('t:' + t);
    const ss = teacherFile(school, t);
    if (ss.getId() !== before) { made++; console.log('Made sheet for ' + t + ' (' + school + ')'); }
  }));
  console.log('Done. New teacher sheets: ' + made + '. All links on the Teacher Sheets tab are up to date.');
}

/* Makes sure the master's Teacher Sheets tab links to this teacher's CURRENT sheet (fixes a missing or old link). */
function linkTeacher(school, teacher, ss, isNew) {
  const t = masterFile().getSheetByName('Teacher Sheets'); if (!t) return;
  const n = Math.max(0, t.getLastRow() - 1);
  const names = n ? t.getRange(2, 2, n, 1).getValues().map(v => String(v[0])) : [];
  const at = names.indexOf(teacher);
  const link = '=HYPERLINK("' + ss.getUrl() + '","Open ' + teacher.replace(/"/g, '') + '’s sheet")';
  if (at < 0) { t.appendRow([school, teacher, link, new Date()]); return; }
  const cell = t.getRange(at + 2, 3);
  if (isNew || String(cell.getFormula()).indexOf(ss.getId()) < 0) { cell.setFormula(link); if (isNew || !t.getRange(at + 2, 4).getValue()) t.getRange(at + 2, 4).setValue(new Date()); }
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
function student(d) {
  const s = d.student || {};
  let first = clean(s.first, 40), last = clean(s.last, 40);
  const full = clean(s.name, 80);
  if ((!first || !last) && full) { const parts = full.split(/\s+/); last = last || (parts.length > 1 ? parts.pop() : ''); first = first || parts.join(' '); }
  const out = { first: first, last: last, name: (first + ' ' + last).trim(), id: clean(s.id, 20).replace(/^'/, ''), period: clean(s.period, 4), teacher: clean(s.teacher, 60) };
  if (!/[A-Za-z]/.test(out.first) || !/[A-Za-z]/.test(out.last) || !/^[A-Za-z0-9-]{3,12}$/.test(out.id) || !out.period)
    throw new Error('Please sign in again with your first and last name, student ID, school, period, and teacher.');
  out.school = schoolFor(out.teacher, clean(s.school, 40));
  return out;
}
function idOf(v) { return String(v).replace(/^'/, ''); }
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
/* ▶ Run "testScore": adds 3 sample challenge scores for the first teacher, so you can see
   the master's All submissions tab and that teacher's sheet. Delete the TEST tab afterward
   (right-click the tab → Delete) and the 3 rows in All submissions. */
function testScore() {
  setup();
  const school = Object.keys(SCHOOLS)[0], teacher = SCHOOLS[school][0];
  [['000123', 'Test', 'Student', '1', 4, [1, 2, 1]], ['000456', 'Ana', 'Example', '1', 5, [1, 2, 2]], ['000789', 'Leo', 'Sample', '2', 2, [0, 1, 1]]].forEach(x => {
    const s = student({ student: { id: x[0], first: x[1], last: x[2], period: x[3], teacher: teacher, school: school } });
    saveScore({ activity: 'TEST – Score Sync Check', scoreNum: x[4], total: 5, qlabels: ['Q1 Warm-up', 'Q2 Vocabulary', 'Q3 Scenario'], qpoints: x[5], qmax: [1, 2, 2], responses: 'Test submission.' }, s, new Date());
  });
  console.log('Test scores saved for ' + teacher + ' (' + school + ').');
}
