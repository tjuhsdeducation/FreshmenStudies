/* =====================================================================
   💊 FENTANYL: ONE PILL CAN KILL
   California AB 2429 (2024), Education Code §51225.38: fentanyl instruction
   in high school health courses starting in 2026–27.
   Built from Kenzie's "ONE PILL CAN KILL" lesson + worksheet.
   ✏️ To change a number or a sentence, edit the text between the quotes/backticks.
   ===================================================================== */
(() => {
const T = 'fentanyl', C = '#e0503a';
const I = (id, d) => FS.item(id, Object.assign({ topic: T }, d));
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const S = 'stroke="#2d2a3e" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"';

/* DEA lab testing of fake pills that contained fentanyl: how many had a potentially deadly dose (2 mg+) */
const DEA = [[2021, 4, 'DEA lab testing, 2021'], [2022, 6, 'DEA lab testing, 2022'], [2023, 7, 'DEA lab testing, 2023'], [2024, 5, 'DEA lab testing, 2024 (newest DEA figure)']];

FS.topic({
  id: T, name: 'Fentanyl', short: 'One Pill Can Kill', color: C, law: 'AB 2429 · EC §51225.38',
  blurb: 'What fentanyl is, why fake pills are so dangerous, how to refuse, and how to help save a life during an overdose.',
  art: `<svg viewBox="0 0 120 120"><g transform="rotate(-35 60 60)"><rect x="22" y="44" width="76" height="32" rx="16" fill="#fff" ${S}/><path d="M60 44h22a16 16 0 0 1 0 32H60z" fill="#e0503a" ${S}/></g><circle cx="92" cy="26" r="13" fill="#ffd166" ${S}/><path d="M92 19v9M92 32v1" ${S}/><path d="M18 94l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#7ad7f0" ${S}/><circle cx="100" cy="96" r="4" fill="#e0503a"/></svg>`,
  folders: [
    { name: 'Lesson Plan & Slides', icon: '📋', teacherOnly: true, sub: 'The full 50-minute lesson with a slide show you can project.', items: ['fen-plan'] },
    { name: 'Warm-Ups', icon: '☀️', sub: 'Project one at the start of class (about 5 minutes).', items: ['fen-w1', 'fen-w2', 'fen-w3', 'fen-w4'] },
    { name: 'Interactive Activities', icon: '🎮', sub: 'Students sign in once, then work through these. Work is sent to the teacher.', items: ['fen-a1', 'fen-a2', 'fen-a3', 'fen-a4'] },
    { name: 'Exit Tickets', icon: '🎟️', sub: 'Quick checks for the end of class. Auto-scored and sent to the teacher.', items: ['fen-e1', 'fen-e2', 'fen-e3'] },
    { name: 'Targets & Standards', icon: '🎯', items: ['fen-std'] },
    { name: 'Printables', icon: '🖨️', teacherOnly: true, sub: 'Paper versions of the worksheet, pill cards, and roleplay cards.', items: ['fen-p1', 'fen-p2', 'fen-p3', 'fen-p4'] },
    { name: 'Real Stories & Links', icon: '🔗', teacherOnly: true, items: ['fen-l1', 'fen-l2', 'fen-l3'] }
  ]
});

const INFO = {
  eq: 'How can one choice about one pill change a life, and what can I do to protect myself and others?',
  lt: ['explain what fentanyl is and why fake pills are dangerous', 'make a plan to refuse drugs', 'list the steps to help someone who is overdosing']
};
const STANDARDS = [
  ['EC §51225.38', 'California Education Code (AB 2429, 2024): fentanyl instruction in the required health course, including what fentanyl is, its risks, how it is added to other drugs and why, how to detect it, and how to potentially save a life during an overdose.'],
  ['NHES 5.12.6', 'Defend the healthy choice when making decisions.'],
  ['NHES 5.12.4', 'Generate alternatives to health-related issues or problems. (Action plan and refusal skills.)'],
  ['NHES 7.12.1', 'Analyze the role of individual responsibility in enhancing health. (Overdose response and naloxone.)'],
  ['NHES 4.12.2', 'Demonstrate refusal, negotiation, and collaboration skills to enhance health and avoid or reduce health risks.'],
  ['NHES 4.12.4', 'Demonstrate how to ask for and offer assistance to enhance the health of self and others.'],
  ['NHES 1.12.8', 'Analyze personal susceptibility to injury, illness, or death if engaging in unhealthy behaviors.'],
  ['CA Health Framework', 'California Health Education Framework (2019), Grades 9–12: Alcohol, Tobacco, and Other Drugs content area.']
];

/* ======================= LESSON PLAN ======================= */
I('fen-plan', {
  kind: 'plan', title: 'ONE PILL CAN KILL: Fentanyl Awareness', mins: 50, icon: '💊',
  desc: 'Your fentanyl lesson: salt activity, overdose roleplay, refusal practice, and the pill-card closer. Includes 14 slides.',
  eq: INFO.eq,
  targets: ['I can explain the dangers of fentanyl and why fake pills are so risky.', 'I can make an action plan for what I will do if I am offered drugs.', 'I can describe how to help someone who has overdosed.', 'I can describe steps to reduce harm if someone chooses to take the risk.'],
  criteria: ['I can state at least 2 facts about fentanyl (strength, deadly dose, can’t see/smell/taste).', 'I can put the overdose response steps in order.', 'I can write and say a refusal line I would really use.'],
  materials: ['“One Pill Can Kill” worksheet (Printables), 1 per student', 'Pill cards printed and cut (Printables)', 'Table salt + a dark sheet of paper (for the deadly-dose demo)', 'Scissors', 'Optional: naloxone (Narcan) training device or picture', 'Projector for the slides'],
  before: 'Send the parent notice used for health lessons. Set ground rules (no names or stories about other people, right to pass). Know your school’s referral process: a student may share a personal or family experience. Do not use real drugs or real naloxone in roleplays.',
  standards: STANDARDS,
  steps: [
    { tm: '0–5 min', name: 'Warm-up + ground rules', do: '<p>Project a warm-up (“Myth or Fact?” works well). Review ground rules: respect, use “I” statements, no names or stories about others, you may pass.</p>', use: ['fen-w1', 'fen-w3'] },
    { tm: '5–12', name: 'What is fentanyl?', do: '<p>Slides 3–5. Students fill in the first two boxes of the worksheet: <i>What is fentanyl?</i> and <i>If I can get it from a doctor, then what’s the problem?</i></p><p>Key points: synthetic opioid, about 50× stronger than heroin and 100× stronger than morphine. Doctors use measured, pharmaceutical fentanyl for severe pain. The danger is <b>illegally made fentanyl</b> pressed into fake pills or mixed into other drugs.</p>', say: 'Fentanyl from a hospital is measured to the microgram. Fentanyl in a fake pill is mixed by someone with no lab, no measuring, and no idea how much is in each pill.' },
    { tm: '12–20', name: 'Salt activity: how much is deadly?', do: '<p>Students write their <b>Guess</b> on the worksheet. Pour a small pile of salt on dark paper and ask: “How much fentanyl do you think could kill someone?” Then reveal the <b>Reality</b>: about <b>2 milligrams</b> can be deadly. That is about 10–15 grains of salt, or the amount that fits on the tip of a pencil.</p>', use: ['fen-w2'] },
    { tm: '20–27', name: 'How can I KNOW if there’s fentanyl in a pill?', do: '<p>You can’t see it, smell it, or taste it. Fake pills are made to look exactly like real ones. Explain lacing (mixing fentanyl into other drugs) and why it’s common: it’s cheap and strong, so sellers make more money. Run the <b>Pill Lottery</b> simulation on the projector.</p>', use: ['fen-a2'] },
    { tm: '27–37', name: 'Overdose response roleplay', do: '<p>Model the steps, then pairs practice with a pretend nasal spray (marker cap):</p><ol><li><b>Check for signs</b>: won’t wake up, slow or no breathing, limp body, tiny pupils, blue or gray lips.</li><li><b>Call 911.</b></li><li><b>Give naloxone (Narcan)</b>: tilt head back, insert nozzle in a nostril, press the plunger.</li><li><b>Second dose</b> after 2–3 minutes if no response.</li><li><b>Rescue breathing</b>: 1 breath every 5 seconds (say it, don’t perform it).</li><li><b>Stay with them</b> and use the recovery position. Narcan wears off, and the overdose can return.</li></ol><p>Teach the <b>911 Good Samaritan law</b> (California Health & Safety Code §11376.5).</p>', use: ['fen-a3'] },
    { tm: '37–45', name: 'Real-life experiences + refusal practice', do: '<p>Show a short story from “Real Stories & Links.” Students write what stood out. Pairs practice refusal scenarios, then write: <i>How do I plan to respond if offered drugs?</i></p>', use: ['fen-a4'] },
    { tm: '45–50', name: 'Closing: pill cards + exit ticket', do: '<p>Hand each student a face-down pill card. Say: “Each of you took one pill from a friend.” Students flip their cards. Those with <b>OVERDOSE</b> stand up. Debrief: “You couldn’t tell from the outside.” Close with harm reduction: the safest choice is never to use. If someone does choose to use, they should never use alone, carry naloxone, test the drug, and call 911.</p><p>Exit ticket.</p>', use: ['fen-p2', 'fen-e1'] }
  ],
  extra: `<div class="note warn" style="margin-top:14px"><b>📊 Data update for the pill cards:</b> Your original cards used 40%, which matched DEA testing in 2021 (4 in 10 pills). DEA lab testing then found <b>6 in 10</b> (2022), <b>7 in 10</b> (2023), and <b>5 in 10</b> (2024, the newest DEA figure). The printable cards now use <b>5 OVERDOSE out of every 10</b>. Point out to students that the number changes every year, and that any number above zero is too many.</div>`,
  slides: [
    { k: 'Freshmen Studies · Health', h: 'ONE PILL CAN KILL', b: '<p>Fentanyl awareness</p><p style="opacity:.8">Essential Question: <b>How can one choice about one pill change a life, and what can I do to protect myself and others?</b></p>' },
    { k: 'Ground rules', h: 'How we talk today', b: '<ul><li>Respect: listen to understand</li><li>Use “I” statements</li><li><b>No names or stories about other people</b></li><li>You always have the right to pass</li><li>Questions? Use the anonymous question box</li></ul>', tn: 'This topic can be personal. Tell students where they can go if they need support (counselor, 988).' },
    { k: 'Box 1', h: 'What is fentanyl?', b: '<ul><li>A <b>synthetic opioid</b> (made in a lab, not from a plant)</li><li>About <b>50×</b> stronger than heroin and <b>100×</b> stronger than morphine</li><li>It slows down, then can stop, breathing</li></ul>' },
    { k: 'Box 2', h: 'If doctors use it… what’s the problem?', b: '<div class="twoc"><div><b>Pharmaceutical fentanyl</b><ul><li>Made in a regulated lab</li><li>Exact, measured dose</li><li>Given by medical staff for severe pain</li></ul></div><div><b>Illegally made fentanyl</b><ul><li>Made without any quality control</li><li>Pressed into <b>fake pills</b> or mixed into other drugs</li><li>No one knows how much is in each pill</li></ul></div></div>' },
    { k: 'Lacing', h: 'Why is fentanyl mixed into other drugs?', b: '<ul><li>It’s <b>cheap</b> and <b>very strong</b>, so sellers make more money</li><li>Found in fake “Xanax,” “Percocet,” “Oxy,” and Adderall pills, and in powders</li><li>The person buying usually <b>doesn’t know</b> it’s there</li></ul>' },
    { k: 'Box 3 · Guess vs Reality', h: 'How much fentanyl can be deadly?', b: '<p>Write your <b>guess</b> first. 🧂</p>', tn: 'Do the salt demo now, then go to the next slide for the reveal.' },
    { k: 'Reality', h: '', b: '<div class="bigstat">2 mg</div><p>About <b>2 milligrams</b> can be deadly. That’s about <b>10–15 grains of salt</b>, or what fits on the <b>tip of a pencil</b>.</p><p style="opacity:.8">Source: U.S. Drug Enforcement Administration (DEA)</p>' },
    { k: 'Box 4', h: 'How can I KNOW if there’s fentanyl in a pill?', b: '<ul><li>You <b>can’t</b> see it, smell it, or taste it</li><li>Fake pills look exactly like real medicine</li><li>Test strips can detect many types of fentanyl, but they are not 100%</li><li>The only way to be safe: <b>only take medicine from a pharmacist or doctor, prescribed to you</b></li></ul>' },
    { k: 'DEA lab testing', h: 'Fake pills with a deadly dose', b: '<div class="twoc"><div><div class="bigstat">5 in 10</div><p>fake pills tested in 2024 had a potentially deadly dose</p></div><div><ul><li>2021: 4 in 10</li><li>2022: 6 in 10</li><li>2023: 7 in 10</li><li>2024: 5 in 10</li></ul><p style="opacity:.8">The number changes. Any number above zero is too many.</p></div></div>', tn: 'Run the Pill Lottery simulation here (Interactive Activities).' },
    { k: 'Box 5', h: 'What to do if someone overdoses', b: '<ol><li><b>Check for signs</b>: won’t wake up, slow or no breathing, limp, tiny pupils, blue or gray lips</li><li><b>Call 911</b></li><li><b>Give naloxone (Narcan)</b>: tilt head back, nozzle in nostril, press plunger</li><li><b>Second dose</b> after 2–3 minutes if no response</li><li><b>Rescue breaths</b>: 1 every 5 seconds</li><li><b>Stay with them</b> and use the recovery position. Narcan can wear off.</li></ol>' },
    { k: 'The law protects you for calling', h: '911 Good Samaritan Law', b: '<p>In California, if you call 911 for an overdose in good faith, you and the person who overdosed are protected from being charged for <b>being under the influence or having a small amount of drugs for personal use</b> (Health & Safety Code §11376.5).</p><p>It does <b>not</b> cover selling or giving drugs, or driving under the influence.</p><p><b>Calling can save a life.</b></p>' },
    { k: 'Box 6', h: 'Real-life experiences', b: '<p>As you watch, write: <b>What stood out to you?</b></p><p>Think about: Who was affected? What did they wish they had known?</p>', tn: 'Use a story from Real Stories & Links (DEA “Faces of Fentanyl” or Song for Charlie). Preview it first.' },
    { k: 'Box 7', h: 'My plan if I’m offered drugs', b: '<ul><li><b>Say no clearly</b>: “No thanks, I’m good.”</li><li><b>Give a reason</b>: “I have a game tomorrow.” “My parents drug-test.”</li><li><b>Suggest something else</b>: “Let’s go get food instead.”</li><li><b>Leave</b> and text someone you trust</li></ul>' },
    { k: 'Closing', h: 'The best choice is never to use.', b: '<p>If someone chooses to take the risk anyway:</p><ul><li><b>Never use alone</b></li><li><b>Carry naloxone</b> (available without a prescription)</li><li><b>Test</b> the drug, knowing tests aren’t perfect</li><li><b>Call 911</b> right away if something goes wrong</li></ul><p>Need help? Talk to a counselor, call or text <b>988</b>, or call the SAMHSA helpline <b>1-800-662-4357</b>.</p>' }
  ]
});

/* ======================= WARM-UPS ======================= */
I('fen-w1', {
  kind: 'warm', title: 'Myth or Fact? Fentanyl', mins: 5, icon: '🤔', desc: 'Six flip cards. Students vote with a thumbs up (fact) or thumbs down (myth), then flip.',
  run: el => FS.flipWarm(el, {
    kick: 'Warm-up', big: 'Myth or fact? Show 👍 for FACT or 👎 for MYTH, then flip.',
    cards: [
      { front: 'You can tell a fake pill by how it looks.', tag: 'myth', back: 'Fake pills are pressed to look exactly like real medicine, with the same color, shape, and letters.' },
      { front: 'Fentanyl is used in hospitals.', tag: 'fact', back: 'Pharmaceutical fentanyl is a real medicine for severe pain. It is carefully measured and given by medical staff.' },
      { front: 'A pill from a friend is safe because they wouldn’t hurt you.', tag: 'myth', back: 'Your friend probably doesn’t know what’s inside either. Most people selling or sharing pills don’t know if they contain fentanyl.' },
      { front: 'An amount the size of a pencil tip can be deadly.', tag: 'fact', back: 'About 2 milligrams of fentanyl can be a deadly dose (DEA).' },
      { front: 'You can smell or taste fentanyl.', tag: 'myth', back: 'Fentanyl has no smell or taste you can notice and can’t be seen in a pill or powder.' },
      { front: 'Naloxone (Narcan) can reverse an opioid overdose.', tag: 'fact', back: 'Naloxone can reverse an opioid overdose, including from fentanyl. It is sold without a prescription. Always call 911 too.' }
    ]
  })
});
I('fen-w2', {
  kind: 'warm', title: 'Guess vs Reality: The Deadly Dose', mins: 5, icon: '🧂', desc: 'Students guess how much fentanyl is deadly, then see 2 mg next to salt grains and a pencil tip.',
  tn: 'Pair with real salt on dark paper. Students write their guess in Box 3 of the worksheet before you reveal.',
  run: el => {
    el.innerHTML = `<div class="warm"><div class="kick">Warm-up · Guess vs Reality</div><div class="big">How much fentanyl do you think can kill a person?</div>
    <div class="opts" style="max-width:520px;margin:0 auto">${['A teaspoon', 'A pinch (like salt on fries)', 'One pill’s worth', 'A few grains, about the size of a pencil tip'].map((o, i) => `<button class="opt" type="button" data-i="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}</div>
    <div class="btnrow" style="justify-content:center"><button class="btn" type="button" id="rv">Reveal reality</button></div>
    <div class="reveal" id="rvb"><svg viewBox="0 0 520 190" role="img" aria-label="About 2 milligrams of fentanyl next to a pencil tip and grains of salt" style="max-width:560px;display:block;margin:0 auto">
      <rect x="0" y="0" width="520" height="190" rx="16" fill="#1f2430"/>
      <g transform="translate(40 70)"><path d="M0 30 L140 30 L180 50 L140 70 L0 70z" fill="#ffd166" stroke="#fff" stroke-width="2"/><path d="M140 30 L180 50 L140 70z" fill="#e8c9a0"/><path d="M168 44 L180 50 L168 56z" fill="#333"/>
      ${Array.from({ length: 13 }, (_, i) => `<rect x="${184 + (i % 5) * 7}" y="${42 + Math.floor(i / 5) * 6}" width="4.5" height="4.5" fill="#fff" transform="rotate(${i * 23} ${186 + (i % 5) * 7} ${44 + Math.floor(i / 5) * 6})"/>`).join('')}</g>
      <text x="270" y="70" fill="#fff" font-family="Fredoka" font-size="40" font-weight="700">2 mg</text>
      <text x="270" y="102" fill="#ffd166" font-family="Nunito" font-size="16" font-weight="800">≈ 10–15 grains of salt</text>
      <text x="270" y="126" fill="#ccc" font-family="Nunito" font-size="15" font-weight="700">fits on the tip of a pencil</text>
      <text x="20" y="176" fill="#aaa" font-family="Nunito" font-size="12">Illustration, not to scale · Source: DEA</text></svg>
      <div class="note" style="margin-top:12px"><b>Reality:</b> About <b>2 milligrams</b> of fentanyl can be deadly. A regular pill weighs about 100 times that, so a tiny, uneven amount mixed into a fake pill can be the difference between life and death.</div></div></div>`;
    $$('.opt', el).forEach(b => b.onclick = () => { $$('.opt', el).forEach(x => x.classList.remove('sel')); b.classList.add('sel'); });
    $('#rv', el).onclick = () => { $('#rvb', el).classList.add('on'); $$('.opt', el).forEach(x => { x.disabled = true; if (x.dataset.i === '3') x.classList.add('right'); }); };
  }
});
I('fen-w3', {
  kind: 'warm', title: 'Agree or Disagree: Pills & Risk', mins: 5, icon: '↔️', desc: 'Four statements. Students move to a side of the room, you count, then reveal the facts.',
  run: el => FS.tallyWarm(el, {
    kick: 'Agree or Disagree', rounds: [
      { s: 'If a pill came from a doctor’s prescription bottle, it’s safe to take, even if it isn’t yours.', fact: 'Medicine is only safe for the person it was prescribed to, at the dose prescribed. And pills in a bottle could have been swapped or bought online. <b>Only take medicine prescribed to you.</b>' },
      { s: 'Most teens who die from overdoses were regular drug users.', fact: 'Not always. Many teen overdose deaths happen to people who took <b>one counterfeit pill</b>. In a CDC study of teen overdose deaths (2019–2021), about <b>84%</b> involved illegally made fentanyl and about <b>1 in 4</b> showed evidence of counterfeit pills.' },
      { s: 'If I call 911 for a friend who overdosed, I’ll get in trouble.', fact: 'California’s <b>Good Samaritan law</b> (H&S Code §11376.5) protects people who call 911 in good faith for an overdose from being charged with being under the influence or having a small amount of drugs for personal use. <b>Call.</b>' },
      { s: 'Someone around me would know what to do if I overdosed.', fact: 'In the CDC study, about <b>2 out of 3</b> teen overdose deaths had a bystander nearby, but most did not respond in time. <b>Today you will learn what to do.</b>' }
    ]
  })
});
I('fen-w4', {
  kind: 'warm', title: 'Quick-Write: Why Would Someone Take It?', mins: 4, icon: '✍️', desc: 'A 3-minute quick-write about pressure, stress, and choices, with a share-out.',
  run: el => FS.writeWarm(el, { big: 'Why might a teen take a pill from a friend, even if they’re not sure what it is?', html: '<p class="sorthelp">Think about stress, sleep, sports injuries, anxiety, fitting in, and social media. No names.</p>', mins: 3, share: 'Collect answers on the board. Then ask: “What could that person do instead to get what they actually need (sleep, less stress, pain relief)?”' })
});

/* ======================= INTERACTIVE ======================= */
I('fen-a1', {
  kind: 'act', title: 'One Pill Can Kill: Digital Worksheet', mins: 20, icon: '📝', info: INFO,
  desc: 'The worksheet’s 7 boxes, made interactive. Guess vs Reality reveal and a refusal plan, sent to the teacher.',
  run: (el, ctx) => {
    const boxes = [
      ['What is Fentanyl?', 'A synthetic opioid that is…', 'opioid'],
      ['If I can get it from a doctor… then what’s the problem?', 'The problem is that fentanyl on the street…', 'illegal'],
      null,
      ['How can I KNOW if there is fentanyl in a pill?', 'You can’t…', ''],
      ['What to do if you find someone who has overdosed', 'First I would…', ''],
      ['What stood out from real-life experiences', 'What stood out to me was…', ''],
      ['How do I plan to respond if offered drugs?', 'If someone offers me a pill, I will say…', '']
    ];
    el.innerHTML = `<h2 style="font-size:1.6rem;text-align:center">💊 ONE PILL CAN KILL</h2><p class="sorthelp" style="text-align:center">Fill in each box during the lesson. Then press Turn in.</p>
     ${boxes.map((b, i) => b ? `<div class="qcard"><div class="qn">Box ${i + 1}</div><div class="q">${b[0]}</div><textarea data-b="${i}" placeholder="${b[1]}"></textarea></div>` :
      `<div class="qcard"><div class="qn">Box 3</div><div class="q">How much fentanyl does it take to be deadly?</div><div class="pgrid" style="margin:0"><div><span class="lbl">My guess</span><input class="txt" id="g" placeholder="e.g. a spoonful"></div><div><span class="lbl">Reality</span><div id="rl" class="fb info" style="margin:0">Type your guess, then reveal.</div></div></div><div class="btnrow"><button class="btn" type="button" id="rvr" disabled>Reveal reality</button></div></div>`).join('')}
     <div id="fin"></div>`;
    $('#g', el).oninput = () => $('#rvr', el).disabled = !$('#g', el).value.trim();
    $('#rvr', el).onclick = () => { $('#rl', el).innerHTML = '<b>About 2 milligrams</b>: 10–15 grains of salt, or the tip of a pencil (DEA).'; $('#g', el).readOnly = true; $('#rvr', el).remove(); };
    const fin = $('#fin', el);
    fin.innerHTML = `<div class="btnrow"><button class="btn" type="button">📤 Turn in to my teacher</button><span class="save" aria-live="polite"></span></div>`;
    const btn = $('button', fin), msg = $('.save', fin);
    btn.onclick = async () => {
      const filled = $$('textarea', el).filter(t => FS.words(t.value) >= 3).length + ($('#g', el).readOnly ? 1 : 0);
      if (filled < 5) { msg.textContent = `Fill in at least 5 of the 7 boxes first (${filled} done). Don’t forget to reveal Box 3.`; return; }
      btn.disabled = true; msg.textContent = 'Sending…';
      const text = boxes.map((b, i) => b ? `${i + 1}. ${b[0]}: ${$(`textarea[data-b="${i}"]`, el).value.trim()}` : `3. Guess: ${$('#g', el).value.trim()} | Reality: 2 mg`).join('\n');
      const r = await FS.submit(T, 'Interactive', ctx.title, filled, 7, text);
      msg.textContent = r.msg; if (r.ok) btn.textContent = '✔ Turned in'; else btn.disabled = false;
    };
  }
});

I('fen-a2', {
  kind: 'act', title: 'Pill Lottery Simulation', mins: 10, icon: '🎲', info: { eq: INFO.eq, lt: ['explain why you can’t know what’s in a fake pill', 'use DEA data to describe the risk'] },
  desc: 'Pick a pill from a pile of fake pills. Then run 100 trials. Uses DEA lab data from 2021–2024.',
  run: (el, ctx) => {
    let yr = DEA.length - 1, picks = [], sim = [];
    const draw = () => {
      const bad = DEA[yr][1];
      el.innerHTML = `<div class="note">Every pill below is a <b>fake</b> “prescription” pill that has fentanyl in it. They all look the same. DEA lab testing found how many of them had a <b>potentially deadly dose</b>. Choose a year of DEA data:</div>
       <div class="mapctl">${DEA.map((d, i) => `<button class="seg ${i === yr ? 'on' : ''}" type="button" data-y="${i}">${d[0]}: ${d[1]} in 10</button>`).join('')}</div>
       <h3 style="text-align:center">Step 1 · Tap ONE pill</h3>
       <div class="pills">${Array.from({ length: 10 }, (_, i) => `<button class="pillb" type="button" data-i="${i}">M 30</button>`).join('')}</div>
       <div id="r1" aria-live="polite"></div>
       <div id="s2" hidden><h3 style="text-align:center;margin-top:16px">Step 2 · What if 100 people each took one pill?</h3><div class="btnrow" style="justify-content:center"><button class="btn" type="button" id="run">▶ Run 100 trials</button></div><div class="dots" id="dots"></div><div id="r2" aria-live="polite"></div></div>
       <div id="s3" hidden><div class="qcard" style="margin-top:14px"><div class="q">Reflect: What does this simulation show about taking a pill that didn’t come from a pharmacy? Use a number from the simulation.</div><textarea id="rf"></textarea><div class="wc" id="wc">0 words</div></div><div id="fin"></div></div>`;
      $$('[data-y]', el).forEach(b => b.onclick = () => { yr = +b.dataset.y; draw(); });
      const deadly = FS.shuffle([...Array(10).keys()]).slice(0, bad);
      $$('.pillb', el).forEach(b => b.onclick = () => {
        const i = +b.dataset.i, d = deadly.includes(i); picks.push(d ? 'deadly' : 'not deadly');
        $$('.pillb', el).forEach(x => { x.disabled = true; x.classList.add(deadly.includes(+x.dataset.i) ? 'bad' : 'good'); x.textContent = deadly.includes(+x.dataset.i) ? '☠' : '✓'; });
        b.style.outline = '4px solid var(--fg)';
        $('#r1', el).innerHTML = `<div class="fb ${d ? 'no' : 'ok'}">${d ? `☠ Your pill had a <b>potentially deadly dose</b>. ${bad} of the 10 did.` : `You got lucky this time. But ${bad} of the 10 pills had a deadly dose, and they looked exactly the same.`}</div>`;
        $('#s2', el).hidden = false;
      });
      $('#run', el).onclick = () => {
        const p = bad / 10; sim = Array.from({ length: 100 }, () => Math.random() < p);
        const dots = $('#dots', el); dots.innerHTML = ''; let k = 0;
        const step = () => { for (let j = 0; j < 5 && k < 100; j++, k++) dots.insertAdjacentHTML('beforeend', `<i class="${sim[k] ? 'b' : 'g'}" title="${sim[k] ? 'deadly dose' : 'not a deadly dose'}"></i>`); if (k < 100) requestAnimationFrame(step); else { const n = sim.filter(Boolean).length; $('#r2', el).innerHTML = `<div class="fb info"><b>${n} out of 100</b> pills had a potentially deadly dose (🔴). Every 🟢 was still a fake pill with fentanyl in it, and the next one could be different. <br><span class="cite">Data: ${DEA[yr][2]}. Simulation uses random chance, so results vary a little each time.</span></div>`; $('#s3', el).hidden = false; } };
        step();
      };
      const rf = $('#rf', el); if (rf) rf.oninput = () => $('#wc', el).textContent = FS.words(rf.value) + ' words';
      FS.saveBox($('#fin', el), T, 'Interactive', ctx.title, 1, 1, () => `Data year: ${DEA[yr][0]} (${bad} in 10). My pill: ${picks[picks.length - 1] || '-'}. 100 trials: ${sim.filter(Boolean).length} deadly. Reflection: ${$('#rf', el).value.trim()}`);
    };
    draw();
  }
});

I('fen-a3', {
  kind: 'act', title: 'Save a Life: Overdose Response', mins: 12, icon: '🚑', info: { eq: 'What should I do in the first minutes of an overdose?', lt: ['recognize signs of an opioid overdose', 'put the response steps in order', 'explain how naloxone and the Good Samaritan law help'] },
  desc: 'Spot the signs, order the 6 steps, practice giving naloxone, and learn California’s 911 Good Samaritan law.',
  run: (el, ctx) => {
    el.innerHTML = `<div class="note">🧠 Practice what to do. In a real emergency, call <b>911</b> first.</div>
     <div class="qcard"><div class="qn">Part A</div><div class="q">Naloxone practice: tap the steps for using the nasal spray.</div>
      <svg viewBox="0 0 300 120" style="max-width:420px;display:block;margin:0 auto" aria-hidden="true"><rect x="110" y="20" width="80" height="80" rx="14" fill="#e9eefb" stroke="#2d2a3e" stroke-width="3"/><rect x="138" y="2" width="24" height="26" rx="6" fill="#fff" stroke="#2d2a3e" stroke-width="3"/><rect x="130" y="66" width="40" height="12" rx="4" fill="#e0503a"/><text x="150" y="56" text-anchor="middle" font-family="Nunito" font-weight="900" font-size="13" fill="#2d2a3e">NALOXONE</text></svg>
      <div class="btnrow" style="justify-content:center" id="nx"></div><div id="nxo" aria-live="polite"></div></div>
     <div id="qz"></div>`;
    const ns = ['Peel open the package', 'Lay the person on their back and tilt their head back', 'Put the nozzle in one nostril', 'Press the plunger firmly', 'Wait 2–3 minutes. No response? Give a 2nd dose in the other nostril'];
    let n = 0;
    const nxDraw = () => { $('#nx', el).innerHTML = n < ns.length ? `<button class="btn" type="button">${n + 1}. ${ns[n]} ▶</button>` : ''; const b = $('#nx button', el); if (b) b.onclick = () => { n++; $('#nxo', el).innerHTML = `<div class="fb ok">✔ ${ns.slice(0, n).map((s, i) => (i + 1) + '. ' + s).join('<br>✔ ')}</div>`; nxDraw(); }; if (n === ns.length) $('#nxo', el).insertAdjacentHTML('beforeend', '<div class="fb info">Naloxone works for about 30–90 minutes, and fentanyl can last longer. That’s why you <b>stay with the person</b> until help arrives.</div>'); };
    nxDraw();
    FS.quiz($('#qz', el), [
      { t: 'ms', q: 'Which of these are signs of an opioid overdose?', opts: ['Can’t be woken up', 'Slow, shallow, or no breathing', 'Tiny “pinpoint” pupils', 'Blue or gray lips or fingertips', 'Gurgling or snoring sounds', 'Talking fast and sweating a lot', 'Laughing at everything'], a: [0, 1, 2, 3, 4], why: 'Opioids slow breathing. Fast talking and sweating are more like signs of stimulants.' },
      { t: 'order', q: 'Put the overdose response steps in order.', items: ['Check for signs and try to wake them (shout, rub their breastbone)', 'Call 911', 'Give naloxone (Narcan) in one nostril', 'Give a second dose after 2–3 minutes if they don’t respond', 'Give rescue breaths: 1 breath every 5 seconds', 'Stay with them and put them in the recovery position'], why: 'If you’re with someone else, one person calls 911 while the other gives naloxone.' },
      { t: 'mc', q: 'Your friend overdoses at a party. Someone says “Don’t call 911, we’ll all get arrested.” What does California’s Good Samaritan law say?', opts: ['Calling 911 in good faith protects you and your friend from charges for being under the influence or having a small amount for personal use', 'Everyone at the party will be arrested', 'Only adults are protected', 'You are protected from every crime, including selling drugs'], a: 0, why: 'Health & Safety Code §11376.5 covers being under the influence and personal-use possession. It does not cover selling or giving drugs. The point is: call.' },
      { t: 'mc', q: 'Why should you stay with the person even after naloxone works?', opts: ['Naloxone can wear off before the fentanyl does, so the overdose can come back', 'You need to give them water', 'So you can drive them home', 'You don’t need to stay once they wake up'], a: 0, why: 'Stay until EMS arrives and tell them naloxone was given.' }
    ], { topic: T, type: 'Interactive', title: ctx.title, label: 'Part B ·' });
  }
});

I('fen-a4', {
  kind: 'act', title: 'Refusal Skills: What Would You Say?', mins: 15, icon: '🛑', info: { eq: INFO.eq, lt: ['choose strong refusal responses', 'write my own action plan for when I’m offered drugs'] },
  desc: 'Five realistic scenarios with feedback, then students write their own refusal plan.',
  run: (el, ctx) => {
    const sc = [
      { who: 'Teammate', msg: 'Bro, your shoulder’s been hurting all week. Take one of these Percs, it’s just a painkiller.', o: [['“No thanks. I’m getting it checked by the trainer.”', 3, 'Clear “no” + a reason + a healthy alternative. 💪'], ['“Maybe later.”', 1, '“Maybe later” leaves the door open. They’ll probably ask again.'], ['Take it but only half.', 0, 'Even part of a fake pill can contain a deadly dose. You can’t split out the fentanyl.']] },
      { who: 'Friend at a party', msg: 'Everyone’s trying these. Don’t be weird, it’s one pill.', o: [['“Nah, I’m good. I’m gonna grab a soda.”', 3, 'Short, confident, and you changed the subject.'], ['“Fine, whatever.”', 0, 'Going along with pressure is how most first-time pills happen.'], ['Leave and text a parent or friend to pick you up.', 3, 'Leaving is always a strong refusal skill.']] },
      { who: 'Older cousin', msg: 'Stressed about finals? This Adderall will help you focus. I got it from a guy.', o: [['“I’m good. I’d rather ask my teacher for help.”', 3, 'You turned it down and picked a real solution.'], ['“How much?”', 0, 'Pills “from a guy” are not from a pharmacy. Fake Adderall can contain fentanyl or meth.'], ['“Is it real?”', 1, 'Nobody can promise that. You can’t tell by looking.']] },
      { who: 'DM from someone you met online', msg: 'I can deliver Xanax tonight, cheap. Just Snap me back.', o: [['Don’t reply, block, and report the account.', 3, 'Drug sellers use social media to reach teens. Block, report, and tell an adult.'], ['Ask what’s in them.', 0, 'Sellers often don’t know, and they won’t tell you the truth.'], ['Screenshot it and show a trusted adult.', 3, 'That’s a smart move. It can protect other students too.']] },
      { who: 'Best friend', msg: 'You don’t have to take anything, but can you just hold these for me?', o: [['“No. I care about you, and I’m not getting involved. Are you okay?”', 3, 'You set a boundary and showed you care.'], ['Hold them so your friend isn’t mad.', 0, 'Holding drugs can get you in serious trouble and keeps your friend at risk.'], ['“Only this once.”', 1, '“Only once” is still yes. Boundaries work best when they’re clear.']] }
    ];
    let i = 0, pts = 0; const log = [];
    const draw = () => {
      if (i >= sc.length) return plan();
      const s = sc[i];
      el.innerHTML = `<div class="prog"><i style="width:${i / sc.length * 100}%"></i></div><div class="scn"><div class="who">💬 ${s.who}</div><div class="bubble">${s.msg}</div></div>
        <h3 style="margin:14px 0 8px">What would you do?</h3><div class="opts">${FS.shuffle(s.o.map((o, k) => k)).map(k => `<button class="opt" type="button" data-k="${k}">${s.o[k][0]}</button>`).join('')}</div><div id="o"></div>`;
      $$('.opt', el).forEach(b => b.onclick = () => {
        const o = s.o[+b.dataset.k]; pts += o[1]; log.push(`${s.who}: ${o[0]} (${o[1]}/3)`);
        $$('.opt', el).forEach(x => { x.disabled = true; const v = s.o[+x.dataset.k][1]; if (v === 3) x.classList.add('right'); });
        if (o[1] < 3) b.classList.add('wrong');
        $('#o', el).innerHTML = `<div class="fb ${o[1] === 3 ? 'ok' : o[1] ? 'info' : 'no'}">${o[2]}</div><div class="btnrow"><button class="btn" type="button" id="nx">${i < sc.length - 1 ? 'Next scenario →' : 'Write my plan →'}</button></div>`;
        $('#nx', el).onclick = () => { i++; draw(); };
      });
    };
    const plan = () => {
      el.innerHTML = `<div class="scorebox"><div class="big">${pts} / ${sc.length * 3}</div>refusal points</div>
       <h3 style="margin-top:16px">My Action Plan</h3><p class="sorthelp">Strong refusals: say NO clearly · give a reason · suggest something else · leave · tell someone.</p>
       <div class="qcard"><div class="q">1. Something I could say if I’m offered a pill:</div><input class="txt" id="p1" placeholder="“No thanks, I…”"></div>
       <div class="qcard"><div class="q">2. A reason that’s true for me:</div><input class="txt" id="p2" placeholder="I have practice / my goals / my family…"></div>
       <div class="qcard"><div class="q">3. If they keep pushing, I will…</div><input class="txt" id="p3" placeholder="leave and…"></div>
       <div class="qcard"><div class="q">4. A trusted adult I could text or call:</div><input class="txt" id="p4" placeholder="Role is fine (coach, aunt, counselor)"></div><div id="fin"></div>`;
      FS.saveBox($('#fin', el), T, 'Interactive', ctx.title, pts, sc.length * 3, () => log.join('\n') + `\nPLAN: say "${$('#p1', el).value}" | reason: ${$('#p2', el).value} | if pushed: ${$('#p3', el).value} | trusted adult: ${$('#p4', el).value}`);
    };
    draw();
  }
});

/* ======================= EXIT TICKETS ======================= */
I('fen-e1', {
  kind: 'exit', title: 'Exit Ticket: Fentanyl Facts', mins: 5, icon: '🎟️', info: INFO, desc: '4 questions on what fentanyl is, the deadly dose, fake pills, and lacing.',
  qs: [
    { t: 'mc', q: 'What is fentanyl?', opts: ['A synthetic opioid that is much stronger than heroin or morphine', 'A type of marijuana', 'A stimulant like caffeine', 'An over-the-counter vitamin'], a: 0, why: 'It’s about 50 times stronger than heroin and 100 times stronger than morphine.' },
    { t: 'mc', q: 'About how much fentanyl can be a deadly dose?', opts: ['2 milligrams (the tip of a pencil)', '1 teaspoon', 'A whole pill', '2 grams'], a: 0, why: 'About 2 mg, or 10–15 grains of salt (DEA).' },
    { t: 'mc', q: 'What is the ONLY way to know a pill is safe?', opts: ['It was prescribed to you and came from a pharmacy', 'It looks like the real pill', 'A friend has taken them before', 'It has letters stamped on it'], a: 0, why: 'Fake pills copy colors, shapes, and stamps exactly.' },
    { t: 'short', q: 'Why do drug sellers mix (lace) fentanyl into other drugs, and why is that dangerous for the person buying?', min: 20, frames: ['Sellers lace drugs because…', 'This is dangerous because…'] }
  ]
});
I('fen-e2', {
  kind: 'exit', title: 'Exit Ticket: Overdose Response', mins: 5, icon: '🚑', info: { eq: 'What should I do in the first minutes of an overdose?', lt: ['list the steps to help someone who is overdosing'] }, desc: 'Signs, steps, naloxone, and the Good Samaritan law.',
  qs: [
    { t: 'ms', q: 'Choose ALL the signs of an opioid overdose.', opts: ['Won’t wake up', 'Slow or no breathing', 'Blue or gray lips', 'Pinpoint pupils', 'Very hyper and energetic'], a: [0, 1, 2, 3] },
    { t: 'order', q: 'Order these steps.', items: ['Check for signs', 'Call 911', 'Give naloxone', 'Second dose after 2–3 minutes if needed', 'Stay with them'] },
    { t: 'mc', q: 'True or false: in California, calling 911 for an overdose can protect you from charges for having a small amount of drugs for personal use.', opts: ['True', 'False'], a: 0, keep: true, why: 'California’s Good Samaritan law, Health & Safety Code §11376.5.' },
    { t: 'short', q: 'Explain to a friend why they should call 911 even if they’re scared of getting in trouble.', min: 15 }
  ]
});
I('fen-e3', {
  kind: 'exit', title: 'Exit Ticket: My Plan', mins: 5, icon: '🧭', info: INFO, desc: 'Refusal skills, defending the healthy choice, and a confidence check.',
  qs: [
    { t: 'mc', q: 'Which is the STRONGEST refusal?', opts: ['“No thanks, I’ve got a game tomorrow. Want to go get tacos?”', '“Maybe later.”', '“I don’t know…”', '“Only if you take one too.”'], a: 0, why: 'Clear no + a reason + an alternative.' },
    { t: 'short', q: 'Write what you would actually say if someone offered you a pill. Then explain why it’s the healthy choice.', min: 20, frames: ['I would say…', 'This is the healthy choice because…'] },
    { t: 'scale', q: 'How confident are you that you could help someone who is overdosing?', opts: ['1 · Not yet', '2 · A little', '3 · Pretty confident', '4 · Very confident'], why: 'Thanks! Your teacher will use this to plan more practice.' }
  ]
});

/* ======================= TARGETS & STANDARDS ======================= */
I('fen-std', {
  kind: 'info', title: 'Learning Targets & Standards: Fentanyl', icon: '🎯', desc: 'Essential question, targets, success criteria, NHES standards, and Education Code §51225.38.',
  html: `<div class="eqbox"><span class="lbl">Essential Question</span><p>${INFO.eq}</p></div>
   <div class="pgrid"><div class="pbox"><span class="lbl">Learning targets</span><ul><li>I can explain the dangers of fentanyl.</li><li>I can make an action plan for what I would do if I’m offered drugs.</li><li>I can describe how to help someone who has overdosed.</li><li>I can describe steps to reduce harm if someone chooses to take the risk.</li></ul></div>
   <div class="pbox"><span class="lbl">Success criteria</span><ul><li>I can state 2+ facts about fentanyl.</li><li>I can put the overdose steps in order.</li><li>I can say a refusal line I’d actually use.</li></ul></div></div>
   <div class="tablewrap"><table class="std"><tr><th>Code</th><th>Standard</th></tr>${STANDARDS.map(([c, s]) => `<tr><td><b>${c}</b></td><td>${s}</td></tr>`).join('')}</table></div>
   <p class="cite">AB 2429 (Alvarez, 2024) applies to districts and charters that require a health course for graduation, starting in 2026–27.</p>`
});

/* ======================= PRINTABLES ======================= */
const box = (t, h = 84) => `<div class="wbox"><h4>${t}</h4><div class="lines" style="--h:${h}px"></div></div>`;
I('fen-p1', {
  kind: 'print', title: 'Worksheet: ONE PILL CAN KILL', icon: '📝', desc: 'Your 7-box student worksheet, cleaned up for printing.',
  html: `<h2 style="text-align:center">💊 FENTANYL: ONE PILL CAN KILL</h2><div class="row"><span class="fill">Name</span><span class="fill">Teacher</span><span class="fill" style="max-width:120px">Date</span></div>
   <div class="g2">${box('What is Fentanyl?')}${box('If I can get it from a doctor… then what’s the problem?')}</div>
   <div class="wbox"><h4>How much fentanyl does it take to be deadly?</h4><div class="g2"><div><b>Guess:</b><div class="lines" style="--h:56px"></div></div><div><b>Reality:</b><div class="lines" style="--h:56px"></div></div></div></div>
   <div class="g2">${box('How can I KNOW if there is fentanyl in a pill?')}${box('What to do if you find someone who has overdosed', 112)}</div>
   ${box('What stood out from real-life experiences')}${box('How do I plan to respond if offered drugs?')}
   <small>Need help? Call or text 988 · SAMHSA National Helpline 1-800-662-4357 · Emergency 911</small>`
});
I('fen-p2', {
  kind: 'print', title: 'Pill Cards (updated: 5 in 10)', icon: '🃏', desc: 'Cut-apart cards: 5 OVERDOSE and 5 YOU’RE SAFE per 10 (DEA 2024 data). Print enough for your class.',
  html: (() => {
    const od = `<div class="pc" style="background:#fde3df"><div style="font-size:38px">☠️</div><div style="font-size:1.5rem">OVERDOSE</div><div style="font-weight:700">Fentanyl was found.</div></div>`;
    const sf = `<div class="pc" style="background:#e3f6e7"><div style="font-size:38px">✅</div><div style="font-size:1.5rem">YOU’RE SAFE</div><div style="font-weight:700">No fentanyl was found… this time.</div></div>`;
    const back = `<div class="pc"><div style="font-size:42px">💊</div><div>ONE PILL</div></div>`;
    return `<h2>Pill Cards</h2><p><b>Page 1:</b> 5 OVERDOSE + 5 YOU’RE SAFE = 10 cards (DEA 2024: 5 in 10 fake pills had a potentially deadly dose). Print page 1 for every 10 students. Optional: print page 2 on the back so all cards look the same face-down.</p>
      <div class="cards6">${[od, sf, od, sf, od, sf, od, sf, od, sf].join('')}</div><div class="pgbreak"></div>
      <h3 style="margin-top:16px">Page 2 · Card backs</h3><div class="cards6">${Array(10).fill(back).join('')}</div>
      <p><small>Debrief: “None of you could tell which card you had. That’s exactly what happens with fake pills.” Be ready for strong feelings; some students may have lost someone.</small></p>`;
  })()
});
I('fen-p3', {
  kind: 'print', title: 'Poster: How to Respond to an Overdose', icon: '🚑', desc: 'One-page step poster for your wall or the roleplay.',
  html: `<div class="poster"><div style="font-size:60px">🚑</div><h2>Overdose? Act fast.</h2>
   <ol style="text-align:left;font-size:1.3rem;font-weight:800;line-height:1.7;max-width:560px">
   <li>CHECK: won’t wake up · slow/no breathing · blue lips · tiny pupils</li><li>CALL 911</li><li>GIVE NALOXONE: tilt head back, nozzle in nostril, press plunger</li><li>2–3 MINUTES, no response? Give a 2nd dose</li><li>BREATHE for them: 1 breath every 5 seconds</li><li>STAY with them · recovery position</li></ol>
   <p style="font-weight:800;font-size:1.1rem;margin-top:auto">California’s Good Samaritan law (H&S Code §11376.5) protects people who call 911 for an overdose from charges for personal-use possession or being under the influence.</p></div>`
});
I('fen-p4', {
  kind: 'print', title: 'Refusal Roleplay Cards', icon: '🎭', desc: '8 cut-apart scenario cards for partner roleplay, plus the refusal steps.',
  html: `<h2>Refusal Roleplay Cards</h2><p><b>Strong refusals:</b> Say NO clearly · Give a reason · Suggest something else · Leave · Tell someone</p>
   <div class="cards6" style="grid-template-columns:repeat(2,1fr)">${['A teammate offers you a “Perc” for your sore shoulder.', 'At a party, someone says “Everyone’s trying these, it’s just one.”', 'Your cousin offers you an “Adderall” to study for finals.', 'Someone you don’t know DMs you offering cheap Xanax.', 'A friend asks you to hold some pills in your backpack.', 'Someone says a vape has “something extra” in it.', 'A friend says “It’s fine, I’ve taken these before.”', 'Your partner says “If you loved me you’d try it with me.”'].map((s, i) => `<div class="pc" style="min-height:120px;font-weight:700"><div><div style="font-size:.8rem;letter-spacing:.08em">SCENARIO ${i + 1}</div>${s}</div></div>`).join('')}</div>`
});

/* ======================= LINKS ======================= */
I('fen-l1', { kind: 'link', title: 'DEA: One Pill Can Kill', icon: '🔗', url: 'https://www.dea.gov/onepill', desc: 'DEA facts, photos of fake vs real pills, and family resources.' });
I('fen-l2', { kind: 'link', title: 'Song for Charlie', icon: '🎵', url: 'https://www.songforcharlie.org/', desc: 'Family-founded nonprofit with real stories and short videos made for teens. Preview first.' });
I('fen-l3', { kind: 'link', title: 'SAMHSA National Helpline', icon: '☎️', url: 'https://www.samhsa.gov/find-help/helplines/national-helpline', desc: 'Free, confidential, 24/7 treatment referral: 1-800-662-4357.' });
})();
