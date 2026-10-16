/* =====================================================================
   🍎 TEACHER GUIDE (teachers only) and 💗 GET HELP (everyone)
   ===================================================================== */
(() => {
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const S = 'stroke="#2d2a3e" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"';
const TG = 'teacher', HP = 'help';
const I = (id, d) => FS.item(id, Object.assign({ topic: TG, teacherOnly: true }, d));

FS.topic({
  id: TG, name: 'Teacher Guide', short: 'Laws · Parent letters · Pacing · Setup', color: '#0f9d8a', teacherOnly: true, ask: false,
  blurb: 'What California requires, parent notification and opt-out rules, a suggested pacing calendar, tips for teaching sensitive topics, and how to see student work.',
  art: `<svg viewBox="0 0 120 120"><rect x="28" y="20" width="64" height="86" rx="8" fill="#fff" ${S}/><rect x="44" y="12" width="32" height="16" rx="5" fill="#0f9d8a" ${S}/><path d="M40 48l6 6 12-12M40 72l6 6 12-12" fill="none" ${S}/><path d="M66 50h14M66 74h14" ${S}/><circle cx="98" cy="28" r="10" fill="#ff6b6b" ${S}/><path d="M98 18c0-6 4-8 8-8" fill="none" ${S}/><path d="M16 88l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#ffd166" ${S}/></svg>`,
  folders: [
    { name: 'California Requirements', icon: '⚖️', items: ['tg-law'] },
    { name: 'Parent Notification', icon: '✉️', items: ['tg-letter-en', 'tg-letter-es'] },
    { name: 'Pacing Calendar', icon: '🗓️', items: ['tg-pace'] },
    { name: 'Teaching Sensitive Topics', icon: '💗', items: ['tg-care'] },
    { name: 'Student Work & Setup', icon: '📊', items: ['tg-setup', 'tg-preview'] },
    { name: 'Sources', icon: '📚', items: ['tg-src'] }
  ]
});

I('tg-law', {
  kind: 'info', title: 'What California Requires (2026–27)', icon: '⚖️', wide: true, desc: 'AB 2429 (fentanyl), the California Healthy Youth Act (human trafficking; gender identity and sexual orientation), notification, and opt-out.',
  html: `<div class="note warn">This is a summary for planning, not legal advice. Follow your district’s board policy and the CDE guidance linked under Sources.</div>
  <div class="pgrid">
   <div class="pbox"><span class="lbl">💊 Fentanyl: AB 2429 (2024)</span><ul><li>Adds <b>Education Code §51225.38</b>.</li><li>Applies to districts and charter schools that require a <b>health course for graduation</b>, starting in the <b>2026–27</b> school year.</li><li>Instruction may include: what fentanyl is; its risks; how it is added or mixed into other drugs and why that is common; how to detect fentanyl; and how to potentially save a person from an overdose.</li><li>Fentanyl instruction falls under the health-course requirement rather than the CHYA sections. Check with your district about how it handles parent notification for this unit.</li></ul></div>
   <div class="pbox"><span class="lbl">🌎 Human trafficking: CHYA, EC §51934</span><ul><li>Required at least once in high school, as part of comprehensive sexual health education (added by <b>AB 1227</b>, 2017).</li><li>Must cover how common trafficking is and what it looks like, strategies to reduce risk, how to set healthy boundaries, how to safely seek help, and how social media and apps are used for trafficking.</li><li>The <b>CHYA parent opt-out applies</b> to this instruction.</li></ul></div>
   <div class="pbox"><span class="lbl">🏳️‍🌈 Identity & respect: CHYA, EC §51933(d)</span><ul><li>(d)(5): affirmatively recognize different sexual orientations; when discussing relationships and couples, include same-sex relationships.</li><li>(d)(6): teach about gender, gender expression, gender identity, and the harm of negative gender stereotypes.</li><li>All CHYA instruction must be <b>medically accurate</b>, age-appropriate, and appropriate for students of all genders and sexual orientations.</li></ul></div>
  </div>
  <h3 style="margin-top:12px">Parent notification & opt-out (CHYA)</h3>
  <div class="tablewrap"><table class="std">
   <tr><th>Rule</th><th>What it means for you</th></tr>
   <tr><td><b>Notice</b> (EC §51938)</td><td>Parents are notified at the <b>start of the school year</b>. If the lesson is scheduled later, notice can go out at least <b>14 days before</b> instruction. Parents may review the materials.</td></tr>
   <tr><td><b>Opt-out is in writing</b></td><td>A parent or guardian must request the opt-out <b>in writing</b>. The district may not require “opt-in” permission.</td></tr>
   <tr><td><b>What opt-out does NOT cover</b> (EC §51932(b))</td><td>Opt-out does <b>not</b> apply to instruction about <b>gender, gender identity, gender expression, sexual orientation, discrimination, harassment, bullying, intimidation, relationships, or family</b> that does not discuss human reproductive organs and their functions. The LGBTQ+ &amp; Respect lesson on this site is written to fit this category; check your district’s policy.</td></tr>
   <tr><td><b>Students who opt out</b></td><td>Provide an alternative educational activity. Students may not be penalized.</td></tr>
  </table></div>
  <p class="cite">Sources: CDE, “Comprehensive Sexual Health & HIV/AIDS Instruction FAQ”; AB 2429 (2024) summaries; Education Code §§51930–51939.</p>`
});

const letter = (L) => `<div style="text-align:right">${L.date}: ____________</div>
  <p>${L.dear}</p>
  <p>${L.p1}</p>
  <table><tr><th>${L.th[0]}</th><th>${L.th[1]}</th><th>${L.th[2]}</th></tr>
   <tr><td><b>${L.t[0][0]}</b></td><td>${L.t[0][1]}</td><td>____________</td></tr>
   <tr><td><b>${L.t[1][0]}</b></td><td>${L.t[1][1]}</td><td>____________</td></tr>
   <tr><td><b>${L.t[2][0]}</b></td><td>${L.t[2][1]}</td><td>____________</td></tr></table>
  <p>${L.p2}</p><p>${L.p3}</p><p>${L.p4}</p>
  <p>${L.sign}<br><br>______________________________<br>[${L.teacher}] · [${L.school}] · [${L.contact}]</p>
  <div class="wbox"><h4>${L.optTitle}</h4><p>${L.optText}</p><div class="row"><span class="fill">${L.f[0]}</span><span class="fill">${L.f[1]}</span></div><div class="row"><span class="fill">${L.f[2]}</span><span class="fill" style="max-width:160px">${L.f[3]}</span></div></div>`;
I('tg-letter-en', {
  kind: 'print', title: 'Parent Letter (English)', icon: '✉️', desc: 'Editable notification letter with an opt-out form. Fill in the [brackets] and dates.',
  html: `<h2>Freshmen Studies: Health Lessons Notice</h2>` + letter({
    date: 'Date', dear: 'Dear Parent or Guardian,',
    p1: 'This year, your student’s Freshmen Studies class will teach health lessons required by California law. Lessons are medically accurate, age-appropriate, and focus on keeping students safe and treating everyone with respect.',
    th: ['Lesson', 'What students learn', 'Planned date'],
    t: [['Fentanyl: One Pill Can Kill', 'What fentanyl is, the danger of fake pills, refusal skills, and how to respond to an overdose (Education Code §51225.38).'], ['Human Trafficking Prevention', 'What trafficking is, warning signs online and in job offers, healthy boundaries, and how to get help (Education Code §51934).'], ['Gender Identity, Sexual Orientation & Respect', 'Key terms, the harm of gender stereotypes, respectful communication, and healthy relationships (Education Code §51933).']],
    p2: 'You are welcome to review the lesson materials. Please contact me to set up a time.',
    p3: 'Under the California Healthy Youth Act, you may excuse your student from comprehensive sexual health education, which includes the human trafficking lesson, by sending a request in writing (Education Code §51938). Please note that, under Education Code §51932(b), this opt-out does not apply to instruction about gender, gender identity, gender expression, sexual orientation, discrimination, harassment, bullying, relationships, or family that does not discuss reproductive organs and their functions. Students who are excused will receive an alternative assignment and will not be penalized.',
    p4: 'Thank you for partnering with us to keep our students safe and healthy.',
    sign: 'Sincerely,', teacher: 'Teacher name', school: 'School', contact: 'Email / phone',
    optTitle: 'Optional: Written opt-out request (return only if you wish to excuse your student)',
    optText: 'I do NOT want my student to take part in the comprehensive sexual health education lesson(s) listed above that are covered by the opt-out (Human Trafficking Prevention).',
    f: ['Student name', 'Parent/guardian name', 'Parent/guardian signature', 'Date']
  })
});
I('tg-letter-es', {
  kind: 'print', title: 'Carta para Padres (Español)', icon: '✉️', desc: 'Spanish version of the notification letter and opt-out form. Have your district review the translation.',
  html: `<h2>Estudios de Primer Año: Aviso de Lecciones de Salud</h2>` + letter({
    date: 'Fecha', dear: 'Estimado padre, madre o tutor:',
    p1: 'Este año, la clase de Estudios de Primer Año de su estudiante incluirá lecciones de salud que requiere la ley de California. Las lecciones son médicamente precisas, apropiadas para la edad y se enfocan en la seguridad de los estudiantes y en tratar a todos con respeto.',
    th: ['Lección', 'Lo que aprenden los estudiantes', 'Fecha planeada'],
    t: [['Fentanilo: Una pastilla puede matar', 'Qué es el fentanilo, el peligro de las pastillas falsas, cómo decir que no y cómo responder a una sobredosis (Código de Educación §51225.38).'], ['Prevención de la trata de personas', 'Qué es la trata de personas, señales de alerta en internet y en ofertas de trabajo, límites saludables y cómo pedir ayuda (Código de Educación §51934).'], ['Identidad de género, orientación sexual y respeto', 'Términos clave, el daño de los estereotipos de género, la comunicación respetuosa y las relaciones saludables (Código de Educación §51933).']],
    p2: 'Usted puede revisar los materiales de las lecciones. Comuníquese conmigo para hacer una cita.',
    p3: 'Según la Ley de Jóvenes Saludables de California, usted puede excusar a su estudiante de la educación integral de salud sexual, que incluye la lección sobre la trata de personas, enviando una solicitud por escrito (Código de Educación §51938). Tenga en cuenta que, según el Código de Educación §51932(b), esta exclusión no aplica a la enseñanza sobre género, identidad de género, expresión de género, orientación sexual, discriminación, acoso, intimidación, relaciones o familia que no trate de los órganos reproductivos y sus funciones. Los estudiantes excusados recibirán una tarea alternativa y no serán penalizados.',
    p4: 'Gracias por colaborar con nosotros para mantener a nuestros estudiantes seguros y saludables.',
    sign: 'Atentamente,', teacher: 'Nombre del maestro', school: 'Escuela', contact: 'Correo / teléfono',
    optTitle: 'Opcional: Solicitud por escrito para excusar a su estudiante (devuélvala solo si desea excusarlo)',
    optText: 'NO deseo que mi estudiante participe en la(s) lección(es) de educación integral de salud sexual mencionada(s) arriba que permiten la exclusión (Prevención de la trata de personas).',
    f: ['Nombre del estudiante', 'Nombre del padre/tutor', 'Firma del padre/tutor', 'Fecha']
  })
});

I('tg-pace', {
  kind: 'info', title: 'Suggested Pacing Calendar', icon: '🗓️', desc: 'A 3-day core plan (50-minute periods) plus optional extension days.',
  html: `<div class="tablewrap"><table class="std"><tr><th>Day</th><th>Topic</th><th>Warm-up</th><th>Main activities</th><th>Exit ticket</th></tr>
   <tr><td><b>Before</b></td><td>Notify families</td><td colspan="3">Send the parent letter (start of year, or at least 14 days before the CHYA lessons). Set up Google Sheets (Student Work & Setup).</td></tr>
   <tr><td><b>Day 1</b></td><td>💊 Fentanyl</td><td>Myth or Fact</td><td>Digital worksheet · salt demo · Pill Lottery · overdose response · refusal skills · pill-card closer</td><td>Fentanyl Facts</td></tr>
   <tr><td><b>Day 2</b></td><td>🌎 Human Trafficking</td><td>Myth or Fact / Job Ad</td><td>A–M–P · World Map + Data jigsaw · Red Flag sort · Scenarios + safety plan</td><td>Red Flags &amp; Getting Help</td></tr>
   <tr><td><b>Day 3</b></td><td>🏳️‍🌈 Identity &amp; Respect</td><td>Ground rules + Agree/Disagree</td><td>Terms + Video 1 · Video 2 · Gallery Walk · Red/Green flags</td><td>Stereotypes &amp; Respect</td></tr>
   <tr><td><i>Optional 4</i></td><td>💊 Practice day</td><td>Guess vs Reality</td><td>Overdose roleplay stations · Refusal roleplay cards</td><td>Overdose Response / My Plan</td></tr>
   <tr><td><i>Optional 5</i></td><td>🌎 Data deep dive</td><td>Notice &amp; Wonder</td><td>Dashboard · “Is It Trafficking?” · Claim + evidence write</td><td>Global vs U.S. Data</td></tr>
   <tr><td><i>Optional 6</i></td><td>🏳️‍🌈 Upstander day</td><td>Who Can Do It?</td><td>Be an Upstander · Healthy relationships</td><td>Healthy Relationships</td></tr></table></div>`
});

I('tg-care', {
  kind: 'info', title: 'Teaching Sensitive Topics Safely', icon: '💗', desc: 'Ground rules, disclosures and mandated reporting, safe messaging, and handling anonymous questions.',
  html: `<div class="pgrid">
   <div class="pbox"><span class="lbl">Set up the room</span><ul><li>Post the ground rules, and give students the right to pass.</li><li>Never ask students to share their own drug use, identity, orientation, or experiences.</li><li>Give a heads-up before videos or stories: “This may bring up feelings. You can step out to see the counselor.”</li><li>Tell the counselor which days you are teaching these lessons.</li></ul></div>
   <div class="pbox"><span class="lbl">If a student discloses</span><ul><li>Stay calm: “Thank you for telling me. I want to make sure you get support.”</li><li>Don’t promise to keep it secret, and don’t investigate.</li><li>Teachers are <b>mandated reporters</b>. Follow your district’s reporting process for suspected abuse or trafficking.</li><li>Walk the student to the counselor if they are in distress.</li></ul></div>
   <div class="pbox"><span class="lbl">Safe messaging</span><ul><li>Focus on <b>help and hope</b>: 988, counselors, the hotline.</li><li>Avoid graphic details about overdoses, abuse, or self-harm.</li><li>Use people-first language: “a person who uses drugs,” “a survivor.”</li><li>Avoid stereotypes about who uses drugs, who is trafficked, or who is LGBTQ+.</li></ul></div>
   <div class="pbox"><span class="lbl">Anonymous questions</span><ul><li>Questions arrive in the <b>Anonymous Questions</b> tab of your Google Sheet with school, teacher, and period, but no names.</li><li>Answer them with the whole class the next day. Rephrase when needed.</li><li>If a question suggests someone is in danger, talk with your counselor or administrator.</li></ul></div>
  </div>
  <div class="note care"><b>Why respect matters (for teachers):</b> In The Trevor Project’s 2024 national survey, LGBTQ+ young people who found their school affirming, or who lived in very accepting communities, reported significantly lower rates of attempting suicide than those who did not. About half of LGBTQ+ youth ages 13–17 reported being bullied in the past year. Classrooms where stereotypes are challenged help every student.</div>`
});

I('tg-setup', {
  kind: 'info', title: 'Connect Google Sheets (auto-synced scores)', icon: '📊', wide: true, desc: 'One-time setup. Every score lands in a spreadsheet for each teacher, inside a folder for each school, with a tab for each activity, sorted by period.',
  html: `<div class="note">📁 <b>How scores are organized</b> (in your Google Drive → <b>Freshmen Studies Scores</b>):<br>
   📊 <b>Freshmen Studies – Master Scores</b>: the one main sheet. <i>All submissions</i> logs every attempt; <i>Teacher Sheets</i> links to every teacher’s sheet; <i>Anonymous Questions</i>.<br>
   📊 <b>Formative Scores - (Teacher)</b>: one per teacher (in a folder for their school). <b>One tab per activity</b> showing the most recent submission for each student: an All Periods summary, then a block for each period sorted by last name, with class averages, color-coded “Average % of points,” and a <b>⬇ Download for Aeries</b> link for each period.</div>
   <ol class="steps" style="padding-left:0;list-style:none">
   <li class="step"><div class="tm">Step 1</div><div><h4>Open the master sheet</h4><p>In Google Drive, open the folder <b>Freshmen Studies Scores</b> → <b>Freshmen Studies – Master Scores</b>. (It’s already made for you, with a folder for each school.)</p></div></li>
   <li class="step"><div class="tm">Step 2</div><div><h4>Paste the code</h4><p>In the sheet: <b>Extensions → Apps Script</b>. Click in the code box, press <b>Ctrl+A</b> (Mac: ⌘A) and Delete. Paste all of <b>Code.gs</b>. Optional: type teachers’ emails in <b>TEACHER_EMAILS</b> so their sheets are shared with them. Click 💾 <b>Save</b>.</p></div></li>
   <li class="step"><div class="tm">Step 3</div><div><h4>Build the tabs + approve</h4><p>In the toolbar dropdown choose <b>setup</b> → ▶ <b>Run</b> → <b>Review permissions</b> → your account → <b>Advanced</b> → <b>Go to … (unsafe)</b> → <b>Allow</b>. Your master sheet now has Start Here, All submissions, Activity Dashboard, Activity List, Teacher Sheets, and Anonymous Questions. Then run <b>testScore</b> once to see sample rows and a sample teacher sheet.</p></div></li>
   <li class="step"><div class="tm">Step 4</div><div><h4>Deploy as a Web app</h4><p><b>Deploy</b> (blue button, top right) → <b>New deployment</b> → ⚙ gear → <b>Web app</b>. Execute as: <b>Me</b>. Who has access: <b>Anyone</b>. → <b>Deploy</b> → copy the <b>Web app URL</b> (ends in <code>/exec</code>).</p></div></li>
   <li class="step"><div class="tm">Step 5</div><div><h4>Paste the URL on GitHub</h4><p>In your GitHub repository, click <b>sheets-config.js</b> → ✏️ pencil → paste the URL between the quotes on the <code>SHEETS_WEBHOOK_URL</code> line → <b>Commit changes</b>. Wait 1–2 minutes for the site to update.</p></div></li>
   <li class="step"><div class="tm">Step 6</div><div><h4>Test it</h4><p>Open <b>send-test.html</b> on your site (your site address + <code>/send-test.html</code>), fill it in, and press <b>Send test score</b>. Within about 10 seconds, look in Drive → Freshmen Studies Scores → that school → <b>Formative Scores - (teacher)</b> → tab <b>“TEST – Score Sync Check,”</b> and in the master sheet’s <b>All submissions</b> tab.</p></div></li></ol>
   <div class="note"><b>Copying to Aeries:</b> on any activity tab, each period has a yellow <b>⬇ Download for Aeries</b> link (a CSV of Student ID + # Correct). You can also copy those two side-by-side columns and paste them into Aeries.</div>
   <div class="note warn"><b>Changed Code.gs later?</b> Deploy → <b>Manage deployments</b> → ✏️ → Version: <b>New version</b> → Deploy. The URL stays the same.</div>`
});
I('tg-preview', {
  kind: 'info', title: 'Preview-Mode Work on This Device', icon: '🧪', desc: 'Before Sheets is connected: see and download anything submitted on this computer.',
  run: el => {
    let rows = []; try { rows = JSON.parse(localStorage.getItem('fsPreview') || '[]'); } catch (e) { }
    if (!rows.length) { el.innerHTML = '<div class="note">Nothing has been submitted on this device yet.</div>'; return; }
    const cols = ['time', 'school', 'teacher', 'period', 'name', 'id', 'activity', 'score', 'total', 'locks', 'responses'];
    const flat = rows.map(r => ({ time: r.time || r.when, school: r.school || '', teacher: r.teacher || '', period: r.period || '', name: r.kind === 'question' ? '(anonymous)' : (r.firstName || '') + ' ' + (r.lastName || ''), id: r.studentId || '', activity: r.kind === 'question' ? 'Anonymous question · ' + (r.topic || '') : r.activity || '', score: r.score ?? '', total: r.total ?? '', locks: r.locks ?? '', responses: r.responses || r.text || '' }));
    el.innerHTML = `<div class="btnrow" style="margin-top:0"><button class="btn" type="button" id="csv">⬇ Download CSV</button><button class="btn ghost" type="button" id="clr">Clear preview data</button></div><div class="tablewrap" style="margin-top:12px"><table class="std"><tr>${cols.map(c => `<th>${c}</th>`).join('')}</tr>${flat.slice().reverse().map(r => `<tr>${cols.map(c => `<td style="white-space:pre-wrap;max-width:360px">${FS.esc(String(r[c]).slice(0, 400))}</td>`).join('')}</tr>`).join('')}</table></div>`;
    $('#csv', el).onclick = () => { const q = v => '"' + String(v).replace(/"/g, '""') + '"'; const blob = new Blob([cols.join(',') + '\n' + flat.map(r => cols.map(c => q(r[c])).join(',')).join('\n')], { type: 'text/csv' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'freshmen-studies-preview.csv'; a.click(); };
    $('#clr', el).onclick = () => { if (confirm('Delete all preview data on this device?')) { try { localStorage.removeItem('fsPreview'); } catch (e) { } el.innerHTML = '<div class="note">Cleared.</div>'; } };
  }
});

I('tg-src', {
  kind: 'info', title: 'Sources & Data Notes', icon: '📚', desc: 'Every statistic on this site, with where it came from.',
  html: `<ul>
   <li><b>DEA</b>: about 2 mg of fentanyl is a potentially deadly dose. Fake pills with a potentially deadly dose: 4 in 10 (2021), 6 in 10 (2022), 7 in 10 (2023), 5 in 10 (2024). <a href="https://www.dea.gov/press-releases/2024/12/16/overdose-deaths-decline-fentanyl-threat-looms" target="_blank" rel="noopener">DEA, Dec 2024</a> · <a href="https://www.dea.gov/stories/2023/2023-10/2023-10-06/message-dea-administrator-anne-milgram" target="_blank" rel="noopener">DEA, Oct 2023</a> · <a href="https://www.dea.gov/alert/dea-laboratory-testing-reveals-6-out-10-fentanyl-laced-fake-prescription-pills-now-contain" target="_blank" rel="noopener">DEA, 2022</a></li>
   <li><b>CDC MMWR</b> (Dec 2022): adolescent overdose deaths, July 2019–Dec 2021: 84% involved illegally made fentanyl, about 25% had evidence of counterfeit pills, and about 2 in 3 had a potential bystander present. <a href="https://www.cdc.gov/mmwr/volumes/71/wr/mm7150a2.htm" target="_blank" rel="noopener">CDC</a></li>
   <li><b>California Health &amp; Safety Code §11376.5</b>: the 911 Good Samaritan law for overdoses.</li>
   <li><b>ILO, Walk Free &amp; IOM</b>, Global Estimates of Modern Slavery (2022): regional data. <a href="https://alliance87.org/sites/default/files/2023-06/Global%20Estimates%20of%20Modern%20Slavery%20Forced%20Labour%20and%20Forced%20Marriage.pdf" target="_blank" rel="noopener">Report (PDF)</a></li>
   <li><b>Walk Free</b>, Global Slavery Index 2023: U.S. estimate of 1,091,000 people (3.3 per 1,000). <a href="https://walkfree.org/global-slavery-index/country-studies/united-states/" target="_blank" rel="noopener">Walk Free</a></li>
   <li><b>UNODC</b>, Global Report on Trafficking in Persons 2024: detected victims up 25% vs 2019; children 38%. <a href="https://unric.org/en/unodc-global-report-on-human-trafficking-25-per-cent-increase-of-detected-victims-and-more-children-being-exploited/" target="_blank" rel="noopener">UNRIC summary</a></li>
   <li><b>National Human Trafficking Hotline</b>, 2025 national and California statistics. <a href="https://humantraffickinghotline.org/statistics" target="_blank" rel="noopener">U.S.</a> · <a href="https://humantraffickinghotline.org/state/california" target="_blank" rel="noopener">California</a></li>
   <li><b>The Trevor Project</b>, 2024 U.S. National Survey on the Mental Health of LGBTQ+ Young People. <a href="https://www.thetrevorproject.org/survey-2024/" target="_blank" rel="noopener">Trevor Project</a></li>
   <li><b>CDE</b>, Comprehensive Sexual Health &amp; HIV/AIDS Instruction FAQ. <a href="https://www.cde.ca.gov/LS/he/se/faq.asp" target="_blank" rel="noopener">CDE</a></li>
   <li><b>AB 2429</b> (Alvarez, 2024), EC §51225.38. <a href="https://www.f3law.com/insights/new-health-education-course-requirement-fentanyl-102jcs8/" target="_blank" rel="noopener">F3 Law summary</a></li>
  </ul><p class="cite">Data is current as of fall 2026. ✏️ To update a number, edit the data tables at the top of topic-fentanyl.js (DEA) or topic-trafficking.js (ILO, hotline).</p>`
});

/* ======================= GET HELP (students + teachers) ======================= */
const HELP = [
  ['🚨', 'Emergency', '911', 'tel:911', 'Someone is in danger, not breathing, or overdosing.'],
  ['💬', '988 Suicide & Crisis Lifeline', 'Call or text 988', 'tel:988', 'Free, 24/7, for any kind of emotional crisis. Español disponible.'],
  ['🌎', 'National Human Trafficking Hotline', '1-888-373-7888 · text 233733', 'tel:18883737888', '24/7, confidential, 200+ languages.'],
  ['🏳️‍🌈', 'The Trevor Project (LGBTQ+ youth)', '1-866-488-7386 · text START to 678-678', 'tel:18664887386', '24/7 support from people who get it.'],
  ['💔', 'love is respect (dating abuse)', '1-866-331-9474 · text LOVEIS to 22522', 'tel:18663319474', 'Questions about a relationship? Talk it through.'],
  ['💊', 'SAMHSA National Helpline', '1-800-662-4357', 'tel:18006624357', 'Free, confidential help with drug or alcohol use, 24/7.'],
  ['☠️', 'Poison Control', '1-800-222-1222', 'tel:18002221222', 'If someone swallowed something harmful.'],
  ['🏠', 'Tulare County Crisis & Access Line', '1-800-320-1616', 'tel:18003201616', 'Mental health help in Tulare County, 24/7, English and Spanish.'],
  ['🌱', 'Tulare County Substance Use Access Line', '1-866-732-4114', 'tel:18667324114', 'Help with drug or alcohol use in Tulare County, 24/7.'],
  ['🏫', 'Your school counselor', 'Stop by the counseling office', '', 'You can always ask any teacher to walk you there.']
];
FS.topic({
  id: HP, name: 'Get Help', short: 'People who can help, 24/7', color: '#e0408a', ask: false,
  blurb: 'You don’t have to handle things alone. These lines are free and confidential. Save the numbers in your phone.',
  emoji: '💗',
  folders: [{ name: 'Help Lines', icon: '📞', items: [] }],
  page: el => { el.innerHTML = `<header><h2>📞 Help is one call or text away</h2></header><p class="sub">Free · confidential · most are open 24/7</p><div class="help-grid" style="margin-top:14px">${HELP.map(([e, n, num, tel, d]) => `<div class="hcard"><h4>${e} ${n}</h4>${tel ? `<a class="num" href="${tel}">${num}</a>` : `<span class="num">${num}</span>`}<div>${d}</div></div>`).join('')}</div><div class="note" style="margin-top:14px">Worried about a friend? You’re not “snitching” by telling a trusted adult. You might be saving a life.</div>`; }
});
})();
