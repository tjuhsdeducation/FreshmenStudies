/* =====================================================================
   🏳️‍🌈 GENDER IDENTITY, SEXUAL ORIENTATION & RESPECT
   California Healthy Youth Act, Education Code §51933(d)(5)–(6): instruction
   must affirmatively recognize different sexual orientations, include examples
   of same-sex relationships, and teach about gender, gender expression, gender
   identity, and the harm of negative gender stereotypes.
   Built from Kenzie's lesson: ground rules → agree/disagree → videos →
   gallery walk → red/green flag check.
   ===================================================================== */
(() => {
const T = 'lgbtq', C = '#8a54e0';
const I = (id, d) => FS.item(id, Object.assign({ topic: T }, d));
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const S = 'stroke="#2d2a3e" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"';
const V = (window.FS_CONFIG && window.FS_CONFIG.videos) || {};
const vid = (url, label) => url ? `<a class="btn" href="${FS.esc(url)}" target="_blank" rel="noopener">▶ Open ${label}</a>` : `<span class="note" style="display:inline-block;margin:0">🍎 Teacher: paste your “${label}” link in <b>fs-config.js</b> (videos section) and a button will appear here.</span>`;

FS.topic({
  id: T, name: 'LGBTQ+ & Respect', short: 'Identity · Stereotypes · Healthy Relationships', color: C, law: 'CHYA · EC §51933(d)',
  blurb: 'Sex assigned at birth, gender identity, gender expression, and sexual orientation; how gender stereotypes affect everyone; and how to respond with respect.',
  art: `<svg viewBox="0 0 120 120"><path d="M60 98C26 74 14 56 18 40c4-16 24-22 42-6 18-16 38-10 42 6 4 16-8 34-42 58z" fill="#fff" ${S}/><clipPath id="hc"><path d="M60 98C26 74 14 56 18 40c4-16 24-22 42-6 18-16 38-10 42 6 4 16-8 34-42 58z"/></clipPath><g clip-path="url(#hc)">${['#e0503a', '#ee7d1c', '#ffd166', '#14a37f', '#2b7de9', '#8a54e0'].map((c, i) => `<rect x="0" y="${22 + i * 13}" width="120" height="13" fill="${c}"/>`).join('')}</g><path d="M60 98C26 74 14 56 18 40c4-16 24-22 42-6 18-16 38-10 42 6 4 16-8 34-42 58z" fill="none" ${S}/><path d="M98 12l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#ffd166" ${S}/><circle cx="18" cy="100" r="4" fill="#8a54e0"/></svg>`,
  folders: [
    { name: 'Lesson Plan & Slides', icon: '📋', teacherOnly: true, sub: 'Your 50-minute lesson with slides and teacher notes.', items: ['lg-plan'] },
    { name: 'Warm-Ups', icon: '☀️', items: ['lg-w1', 'lg-w2', 'lg-w3', 'lg-w4'] },
    { name: 'Interactive Activities', icon: '🎮', items: ['lg-a1', 'lg-a2', 'lg-a3', 'lg-a4'] },
    { name: 'Exit Tickets', icon: '🎟️', items: ['lg-e1', 'lg-e2'] },
    { name: 'Targets & Standards', icon: '🎯', items: ['lg-std'] },
    { name: 'Printables', icon: '🖨️', teacherOnly: true, items: ['lg-p1', 'lg-p2', 'lg-p3', 'lg-p4'] }
  ]
});

const INFO = {
  eq: 'How do gender stereotypes and social expectations affect people, and how can I show respect for everyone?',
  lt: ['identify gender role stereotypes', 'explain how social expectations pressure people', 'describe how stereotypes limit self-expression and well-being']
};
const STANDARDS = [
  ['EC §51933(d)(5)', 'Instruction affirmatively recognizes that people have different sexual orientations and, when discussing or providing examples of relationships and couples, is inclusive of same-sex relationships.'],
  ['EC §51933(d)(6)', 'Instruction teaches pupils about gender, gender expression, gender identity, and explores the harm of negative gender stereotypes.'],
  ['NHES 2.12.2', 'Analyze how the culture supports and challenges health beliefs, practices, and behaviors.'],
  ['NHES 2.12.3', 'Analyze how peers influence healthy and unhealthy behaviors.'],
  ['NHES 2.12.5', 'Evaluate the effect of media on personal and family health.'],
  ['NHES 4.12.1', 'Use skills for communicating effectively with family, peers, and others to enhance health.'],
  ['NHES 8.12.2', 'Demonstrate how to influence and support others to make positive health choices.'],
  ['CA Health Framework', 'California Health Education Framework (2019), Grades 9–12: Growth, Development, and Sexual Health; Mental, Emotional, and Social Health.']
];
const TERMS = [
  ['Sex assigned at birth', 'The sex (female, male, or intersex) a doctor records at birth, usually based on a baby’s body.', '#ee7d1c'],
  ['Gender identity', 'A person’s inner sense of their own gender, such as girl/woman, boy/man, or nonbinary. Only the person can know it.', '#8a54e0'],
  ['Gender expression', 'How a person shows gender on the outside: clothes, hair, voice, name, pronouns, and behavior.', '#2b7de9'],
  ['Sexual orientation', 'Who a person is emotionally, romantically, and/or physically attracted to, such as straight, gay, lesbian, bisexual, or asexual.', '#14a37f']
];

/* ======================= LESSON PLAN ======================= */
I('lg-plan', {
  kind: 'plan', title: 'Gender Identity, Sexual Orientation & Respect', mins: 50, icon: '🏳️‍🌈',
  desc: 'Your lesson: ground rules, agree/disagree, two videos, the “Act like a…” gallery walk, and the red/green flag check. 12 slides.',
  eq: INFO.eq,
  targets: ['I can identify gender role stereotypes.', 'I can explain how social expectations pressure people to act a certain way.', 'I can describe how stereotypes can limit self-expression and well-being.'],
  criteria: ['I can recognize a stereotype.', 'I can explain one effect of a stereotype.', 'I can respond respectfully.'],
  materials: ['Slides (Present button)', 'Category cards (Printables)', 'Yellow and blue sticky notes', '2 posters: “Act like a man” / “Act like a lady” (Printables)', 'Agree / Disagree signs (Printables)', 'Your two videos (add links in fs-config.js)'],
  before: 'Topics covered: sex assigned at birth, gender identity, gender expression, sexual orientation. Keep the focus on respect and the harm of stereotypes. Students should never be asked to share their own identity or orientation. Stop and address any slurs or put-downs right away and calmly.',
  standards: STANDARDS,
  steps: [
    { tm: '0–3 min', name: 'Ground rules', do: '<ul><li>Respect: listen to understand</li><li>Use “I” statements</li><li>No names or stories about others</li><li>Right to pass</li></ul>', use: ['lg-w2'] },
    { tm: '3–8', name: 'Agree or Disagree', do: '<p>Read each statement. Students move to the Agree or Disagree sign. Ask 1–2 volunteers per side to explain (“I think… because…”). No right or wrong answers yet; this shows what students already believe.</p>', use: ['lg-w1'] },
    { tm: '8–18', name: 'Video 1: Sexual Orientation & Identity + partner talk', do: `<p>Teach the four terms (slides 4–5), then show the video. Partner talk: “What’s the difference between gender identity and sexual orientation?” Students can do the Terms Sort to check understanding.</p><div class="noprint">${vid(V.orientation, 'Video 1')}</div>`, use: ['lg-a1'] },
    { tm: '18–23', name: 'Video 2: Gender Roles & Stereotypes', do: `<p>Define <b>gender roles</b> (expectations a culture has for how people “should” act based on gender) and <b>stereotypes</b> (oversimplified beliefs about a whole group). Show the video.</p><div class="noprint">${vid(V.genderRoles, 'Video 2')}</div>` },
    { tm: '23–38', name: 'Gallery Walk: “Act like a man” / “Act like a lady”', do: '<p>Two posters. <b>Yellow</b> sticky notes: expectations people hear (“Don’t cry,” “Be pretty”). <b>Blue</b> sticky notes: build on a yellow note. How does that expectation limit people? What happens to someone who doesn’t fit the box? Debrief: Who made these rules? Who gets hurt? What would happen if we got rid of the boxes?</p>', say: 'These boxes affect everyone: boys, girls, nonbinary people, straight and LGBTQ+ people. Stepping outside the box is often when people get teased or bullied.', use: ['lg-a2'] },
    { tm: '38–45', name: 'Red flag / Green flag check', do: '<p>Read relationship scenarios (including same-sex couples, as the law requires). Students hold up red or green. Connect: healthy relationships are respectful no matter who is in them.</p>', use: ['lg-a3'] },
    { tm: '45–50', name: 'Exit ticket', do: '<p>Students show the 3 success criteria: recognize a stereotype, explain an effect, respond respectfully.</p>', use: ['lg-e1'] }
  ],
  slides: [
    { k: 'Freshmen Studies · Health', h: 'Gender Identity, Sexual Orientation & Respect', b: `<p>Essential Question: <b>${INFO.eq}</b></p>` },
    { k: 'Ground rules', h: 'How we talk today', b: '<ul><li>Respect: listen to understand</li><li>Use “I” statements</li><li>No names or stories about others</li><li>You always have the right to pass</li></ul>', tn: 'Make clear that no one will be asked about their own identity.' },
    { k: 'Agree or Disagree', h: 'Move to a side', b: '<p>Stand by the sign that matches what you think. Be ready to explain: “I think ___ because ___.”</p>', tn: 'Use the Agree/Disagree warm-up to project statements and count.' },
    { k: 'Four different things', h: 'Key terms', b: TERMS.map(t => `<p><b>${t[0]}</b>: ${t[1]}</p>`).join('') },
    { k: 'Key idea', h: 'Separate, not the same', b: '<ul><li><b>Gender identity</b> = who you <b>are</b></li><li><b>Gender expression</b> = how you <b>show</b> it</li><li><b>Sexual orientation</b> = who you’re <b>attracted to</b></li><li>Knowing one doesn’t tell you the others</li></ul>' },
    { k: 'Video 1', h: 'Sexual Orientation & Identity', b: '<p>As you watch: What is the difference between <b>gender identity</b> and <b>sexual orientation</b>?</p><p>Then turn and talk with a partner.</p>' },
    { k: 'Video 2', h: 'Gender Roles & Stereotypes', b: '<p><b>Gender roles:</b> expectations about how people “should” act based on gender.</p><p><b>Stereotype:</b> an oversimplified belief about a whole group of people.</p><p>As you watch: Where do these expectations come from?</p>' },
    { k: 'Gallery walk', h: '“Act like a man” · “Act like a lady”', b: '<div class="twoc"><div><p>🟨 <b>Yellow:</b> an expectation people hear</p></div><div><p>🟦 <b>Blue:</b> build on one: how does it <b>limit</b> people? What happens to someone who doesn’t fit?</p></div></div>' },
    { k: 'Debrief', h: 'What do the boxes do?', b: '<ul><li>Who made these rules?</li><li>What happens to people who step outside the box?</li><li>How could these expectations affect mental health?</li><li>What would change if we let people just be themselves?</li></ul>', tn: 'Affirming, accepting schools and communities are linked to better mental health for LGBTQ+ youth (Trevor Project 2024 survey).' },
    { k: 'Check for understanding', h: 'Red flag 🚩 or Green flag ✅?', b: '<p>Healthy relationships are respectful no matter who is in them. Hold up red or green for each scenario.</p>' },
    { k: 'Respond with respect', h: 'When someone uses a stereotype…', b: '<ul><li>“That’s a stereotype. Not everyone is like that.”</li><li>“Not cool. Let’s move on.”</li><li>Check in with the person who was targeted</li><li>Tell an adult if it keeps happening</li></ul>' },
    { k: 'Exit ticket', h: 'Show what you know', b: '<p>✔ Recognize a stereotype<br>✔ Explain one effect<br>✔ Respond respectfully</p>' }
  ]
});

/* ======================= WARM-UPS ======================= */
I('lg-w1', {
  kind: 'warm', title: 'Agree or Disagree: Gender Expectations', mins: 5, icon: '↔️', desc: 'Five statements. Students move to a side; you count and lead a short talk.',
  run: el => FS.tallyWarm(el, {
    kick: 'Agree or Disagree', rounds: [
      { s: 'Some colors are for boys and some colors are for girls.', talk: 'Ask: Where did you learn that? Fun fact: about 100 years ago, some U.S. stores recommended pink for boys and blue for girls.' },
      { s: 'Boys shouldn’t cry.', talk: 'Ask: What happens to boys who learn to hide feelings? Everyone has emotions; expressing them is healthy.' },
      { s: 'People should be able to wear what makes them comfortable.', talk: 'Ask: What gets in the way? Who decides what’s “normal”?' },
      { s: 'It’s fine to joke about someone’s identity if they aren’t around to hear it.', talk: 'Ask: Who else might be listening? How do “jokes” shape what people think is okay?' },
      { s: 'Any job or hobby can be for anyone.', talk: 'Ask for examples of jobs or hobbies that people label as “for boys” or “for girls.” Are those labels true?' }
    ]
  })
});
I('lg-w2', {
  kind: 'warm', title: 'Ground Rules for Today', mins: 3, icon: '🤝', desc: 'Project the four ground rules and have students add one of their own.',
  run: el => FS.writeWarm(el, { kick: 'Before we start', big: 'Our ground rules', mins: 2, html: '<div class="flipgrid" style="max-width:760px;margin:0 auto">' + [['🤝', 'Respect', 'Listen to understand, not to argue.'], ['🙋', '“I” statements', '“I think…” not “You’re wrong.”'], ['🔒', 'No names or stories', 'Don’t share other people’s business.'], ['✋', 'Right to pass', 'You never have to share.']].map(([e, h, p]) => `<div class="flip on" style="cursor:default"><div style="font-size:30px">${e}</div><b>${h}</b><div style="font-weight:600">${p}</div></div>`).join('') + '</div><p class="sorthelp" style="margin-top:12px">Quick-write: Which rule matters most to you today, and why?</p>', share: 'Ask 2–3 students to share. Add any class-suggested rules to the board.' })
});
I('lg-w3', {
  kind: 'warm', title: 'Who Can Do It? (Jobs & Hobbies)', mins: 5, icon: '🧑‍🔧', desc: 'Flip cards that challenge “for boys / for girls” labels on jobs and activities.',
  run: el => FS.flipWarm(el, {
    big: 'Picture someone doing this job. Who did you picture? Why?', sub: 'Tap a card to see the reality.',
    cards: [
      { front: '👩‍⚕️ Nurse', back: 'Anyone can be a nurse. Men are a growing part of the nursing workforce.' },
      { front: '🔧 Engineer', back: 'Anyone can be an engineer. Stereotypes can steer people away from careers they’d love.' },
      { front: '🩰 Dancer', back: 'Dance takes strength and skill. Anyone can dance.' },
      { front: '🏈 Football player', back: 'Girls’ flag football is now a CIF high school sport in California.' },
      { front: '👨‍🍳 Chef', back: 'Cooking at home is often labeled “for girls,” but professional kitchens are full of every gender.' },
      { front: '👶 Stay-at-home parent', back: 'Any parent can be the one who stays home.' }
    ],
    after: '<b>Discuss:</b> What is one thing you’ve been told you “should” or “shouldn’t” do because of your gender? (Share only if you want to.)'
  })
});
I('lg-w4', {
  kind: 'warm', title: 'Video + Partner Talk', mins: 10, icon: '🎬', desc: 'Your two lesson videos with partner-talk prompts (add links in fs-config.js).',
  run: el => { el.innerHTML = `<div class="warm"><div class="kick">Video + Partner Talk</div><div class="big">Watch, then talk with a partner</div>
    <div class="pgrid" style="text-align:left"><div class="pbox"><span class="lbl">Video 1 · Sexual Orientation & Identity</span><p>Talk: What is the difference between gender identity and sexual orientation?</p>${vid(V.orientation, 'Video 1')}</div>
    <div class="pbox"><span class="lbl">Video 2 · Gender Roles & Stereotypes</span><p>Talk: Where do gender expectations come from? Name one way they can hurt people.</p>${vid(V.genderRoles, 'Video 2')}</div></div></div>`; }
});

/* ======================= INTERACTIVE ======================= */
I('lg-a1', {
  kind: 'act', title: 'Terms Sort: Four Different Things', mins: 10, icon: '🗂️', info: { eq: INFO.eq, lt: ['tell the difference between sex assigned at birth, gender identity, gender expression, and sexual orientation'] },
  desc: 'Learn the four terms with flip cards, then sort 12 examples into the right category.',
  run: (el, ctx) => {
    el.innerHTML = `<h3>Learn the terms</h3><div class="flipgrid">${TERMS.map(t => `<button class="flip" type="button" style="border-color:${t[2]}"><div class="front" style="font-family:var(--display);font-size:1.2rem">${t[0]}<div class="sorthelp">Tap for meaning</div></div><div class="back">${t[1]}</div></button>`).join('')}</div><h3 style="margin-top:18px">Now sort</h3><div id="qz"></div>`;
    $$('.flip', el).forEach(b => b.onclick = () => b.classList.toggle('on'));
    FS.quiz($('#qz', el), [{
      t: 'sort', q: 'Which category does each example describe?', bins: TERMS.map(t => [t[0], '', t[2]]),
      cards: [['“Female” is written on a birth certificate.', 0], ['A doctor says “It’s a boy!”', 0], ['A baby born with traits that are not typically male or female (intersex).', 0],
        ['Knowing inside that you are a girl.', 1], ['Feeling like neither “boy” nor “girl” fits (nonbinary).', 1], ['A person whose inner sense of gender is different from their sex assigned at birth (transgender).', 1],
        ['Wearing nail polish.', 2], ['Choosing a short haircut.', 2], ['Asking people to use certain pronouns.', 2],
        ['Having a crush on people of a different gender.', 3], ['Being attracted to people of the same gender.', 3], ['Being attracted to more than one gender (bisexual).', 3]]
    }, { t: 'short', q: 'In your own words: how is <b>gender identity</b> different from <b>sexual orientation</b>?', min: 15, frames: ['Gender identity is…', 'Sexual orientation is…'] }], { topic: T, type: 'Interactive', title: ctx.title });
  }
});
I('lg-a2', {
  kind: 'act', title: 'Digital Gallery Walk: “Act Like a…”', mins: 15, icon: '🖼️', info: INFO,
  desc: 'Two posters. Add yellow notes (expectations you’ve heard) and blue notes (how they limit people), then reflect.',
  run: (el, ctx) => {
    const P = [
      { h: '“Act like a man”', y: ['Don’t cry', 'Be tough', 'Play sports', 'Be the provider', 'Don’t ask for help'], b: [['Don’t cry', 'Boys may hide feelings and not get help when they’re struggling.']] },
      { h: '“Act like a lady”', y: ['Be quiet', 'Look pretty', 'Be nice', 'Take care of everyone', 'Don’t be bossy'], b: [['Don’t be bossy', 'Girls may stop speaking up or leading.']] }
    ];
    const mine = [[], []];
    const BAD = /\b(f[a@]g+|f[a@]ggot|d[y1]ke|tr[a@]nn(y|ie)|r[e3]t[a@]rd|wh[o0]re|sl[u*]t|b[i1]tch)\b/i;
    const draw = () => {
      el.innerHTML = `<div class="note">🟨 <b>Yellow</b> = an expectation people hear. 🟦 <b>Blue</b> = build on a yellow note: how does it <b>limit</b> people, or what happens to someone who doesn’t fit? Add at least <b>1 yellow and 1 blue</b> to <b>each</b> poster. Keep it respectful: no names, no slurs.</div>
       <div class="gw">${P.map((p, k) => `<div class="gwp"><h3>${p.h}</h3><div class="notes">${p.y.map((t, i) => `<div class="sticky y" style="--rot:${(i % 3 - 1) * 2}deg">${FS.esc(t)}<small>class example</small></div>`).join('')}${p.b.map(([on, t]) => `<div class="sticky b" style="--rot:1deg">${FS.esc(t)}<small>builds on “${FS.esc(on)}”</small></div>`).join('')}${mine[k].map(n => `<div class="sticky ${n.c} mine" style="--rot:-1deg">${FS.esc(n.t)}<small>${n.c === 'b' && n.on ? 'builds on “' + FS.esc(n.on) + '” · ' : ''}you</small></div>`).join('')}</div>
         <div class="gwadd"><input class="txt" data-k="${k}" maxlength="120" placeholder="Type a note…" aria-label="Note for ${p.h}"><span style="display:flex;gap:6px"><button class="btn" type="button" data-add="y" data-k="${k}" style="background:#e6b800;color:#2a2410">🟨</button><button class="btn" type="button" data-add="b" data-k="${k}" style="background:#4aa3e8">🟦</button></span></div>
         <select class="txt" data-on="${k}" style="margin-top:6px" aria-label="Blue note builds on"><option value="">Blue note builds on… (choose a yellow note)</option>${p.y.concat(mine[k].filter(n => n.c === 'y').map(n => n.t)).map(t => `<option>${FS.esc(t)}</option>`).join('')}</select></div>`).join('')}</div>
       <div class="qcard" style="margin-top:14px"><div class="q">Reflect: How do these “boxes” limit everyone? What could our school do to let people just be themselves?</div><textarea id="rf"></textarea></div><div id="fin"></div>`;
      $$('[data-add]', el).forEach(b => b.onclick = () => {
        const k = +b.dataset.k, inp = $(`input[data-k="${k}"]`, el), t = inp.value.trim(), on = $(`select[data-on="${k}"]`, el).value;
        if (FS.words(t) < 1) { FS.toast('Type a note first.'); return; }
        if (BAD.test(t)) { FS.toast('Please keep notes respectful. Try rewording.'); return; }
        if (b.dataset.add === 'b' && !on) { FS.toast('Choose which yellow note your blue note builds on.'); return; }
        const rf = $('#rf', el).value; mine[k].push({ c: b.dataset.add, t, on: b.dataset.add === 'b' ? on : '' }); draw(); $('#rf', el).value = rf;
      });
      FS.saveBox($('#fin', el), T, 'Interactive', ctx.title, mine.flat().length, 4, () => P.map((p, k) => `${p.h}: ` + mine[k].map(n => `[${n.c === 'y' ? 'Yellow' : 'Blue → ' + n.on}] ${n.t}`).join(' | ')).join('\n') + `\nReflection: ${$('#rf', el).value.trim()}`);
      const btn = $('#fin button', el), old = btn.onclick;
      btn.onclick = () => { const ok = mine.every(m => m.some(n => n.c === 'y') && m.some(n => n.c === 'b')); if (!ok) { $('#fin .save', el).textContent = 'Add at least 1 yellow and 1 blue note to each poster first.'; return; } if (FS.words($('#rf', el).value) < 10) { $('#fin .save', el).textContent = 'Write at least 10 words in your reflection.'; return; } old(); };
    };
    draw();
  }
});
I('lg-a3', {
  kind: 'act', title: 'Red Flag or Green Flag? Relationships', mins: 10, icon: '🚦', info: { eq: 'What does a healthy, respectful relationship look like for anyone?', lt: ['tell the difference between healthy and unhealthy relationship behaviors'] },
  desc: '10 relationship scenarios (including same-sex couples). Tap red or green and get feedback.',
  run: (el, ctx) => {
    const sc = [
      ['Maya and her girlfriend Jordan both have their own friends and hobbies and support each other’s goals.', 1, 'Independence and support = healthy.'],
      ['Chris checks his girlfriend’s phone every night “just to make sure.”', 0, 'Checking someone’s phone is about control, not trust.'],
      ['Alex tells his boyfriend Sam, “I’m not ready for that,” and Sam says, “Okay, no pressure.”', 1, 'Respecting a “no” is the foundation of consent.'],
      ['Taylor threatens to “out” their partner’s identity if they break up.', 0, 'Threatening to share someone’s identity is a form of abuse and control.'],
      ['Jasmine’s partner gets angry when she hangs out with friends without them.', 0, 'Isolating someone from friends is a warning sign.'],
      ['After an argument, Nico and Andre take a break and talk calmly later.', 1, 'Cooling off and talking it through is healthy conflict.'],
      ['Riley’s partner calls them names and says it’s “just a joke.”', 0, 'Put-downs hurt, even when called jokes.'],
      ['Sofia’s boyfriend asks before posting photos of her.', 1, 'Asking first respects privacy and consent.'],
      ['Dev’s partner says, “If you really loved me, you’d send me a pic.”', 0, 'Pressure and guilt are not love. Sending images of minors is also illegal.'],
      ['Kai tells their partner, “I feel hurt when you cancel last minute,” using an “I” statement.', 1, '“I” statements share feelings without blaming.']
    ];
    let i = 0, pts = 0; const log = [];
    const draw = () => {
      if (i >= sc.length) { el.innerHTML = `<div class="scorebox"><div class="big">${pts} / ${sc.length}</div>correct</div><div class="qcard" style="margin-top:12px"><div class="q">Healthy relationships look the same no matter who is in them. Name two green flags you would want in any relationship (friendship or dating).</div><textarea id="rf"></textarea></div><div id="fin"></div>`; FS.saveBox($('#fin', el), T, 'Interactive', ctx.title, pts, sc.length, () => log.join('\n') + `\nGreen flags I want: ${$('#rf', el).value.trim()}`); return; }
      const [s, g, why] = sc[i];
      el.innerHTML = `<div class="prog"><i style="width:${i / sc.length * 100}%"></i></div><div class="warm"><div class="kick">Scenario ${i + 1} of ${sc.length}</div><div class="big" style="max-width:40ch">${s}</div>
        <div class="rf"><button class="red" type="button" data-v="0">🚩 Red flag</button><button class="green" type="button" data-v="1">✅ Green flag</button></div><div id="o"></div></div>`;
      $$('.rf button', el).forEach(b => b.onclick = () => {
        const ok = +b.dataset.v === g; if (ok) pts++; log.push(`${i + 1}. ${b.dataset.v === '1' ? 'Green' : 'Red'} ${ok ? '✓' : '✗'}`);
        $$('.rf button', el).forEach(x => x.disabled = true);
        $('#o', el).innerHTML = `<div class="fb ${ok ? 'ok' : 'no'}" style="text-align:left">${ok ? '✅' : '❌'} ${g ? 'Green flag' : 'Red flag'}: ${why}</div><div class="btnrow" style="justify-content:center"><button class="btn" id="nx" type="button">Next →</button></div>`;
        $('#nx', el).onclick = () => { i++; draw(); }; $('#nx', el).focus();
      });
    };
    draw();
  }
});
I('lg-a4', {
  kind: 'act', title: 'Be an Upstander: Respond with Respect', mins: 10, icon: '🦸', info: { eq: INFO.eq, lt: ['recognize a stereotype', 'choose a respectful response'] },
  desc: 'Five hallway and group-chat moments. Pick the most respectful response, then write your own.',
  run: (el, ctx) => FS.quiz(el, [
    { t: 'mc', q: 'In the group chat, someone posts: “Boys who do theater are soft lol.”', opts: ['“That’s a stereotype. Theater takes a lot of guts.”', 'Send a laughing emoji', 'Ignore it', 'Post something mean about the person'], a: 0, why: 'Calmly naming the stereotype changes what feels “normal” in the chat.' },
    { t: 'mc', q: 'A classmate says, “That’s so gay,” about a hard test.', opts: ['“Can we not use ‘gay’ to mean bad? It’s about real people.”', 'Laugh along', '“You’re so dumb.”', 'Nothing, it’s just a saying'], a: 0, why: 'Using an identity as an insult hurts LGBTQ+ people, even when it isn’t aimed at them.' },
    { t: 'mc', q: 'Someone tells a girl she can’t play pickup basketball “because she’ll get hurt.”', opts: ['“She can play. Let’s pick teams.”', '“Yeah, girls aren’t good at sports.”', 'Walk away', 'Make fun of her'], a: 0 },
    { t: 'mc', q: 'A new student uses they/them pronouns. Someone keeps using the wrong one on purpose.', opts: ['Use the right pronouns yourself and say “They use they/them.”', 'Use the wrong pronoun too', 'Tell the new student to get over it', 'Post about it'], a: 0, why: 'Using someone’s name and pronouns is basic respect, like saying a name correctly.' },
    { t: 'ms', q: 'Which are respectful ways to be an upstander? (Select all.)', opts: ['Name the stereotype calmly', 'Check in privately with the person targeted', 'Tell a trusted adult if it keeps happening', 'Change the subject to take the attention away', 'Insult the person who said it'], a: [0, 1, 2, 3] },
    { t: 'short', q: 'Write one thing YOU could say the next time you hear a gender stereotype.', min: 10, frames: ['I could say…'] }
  ], { topic: T, type: 'Interactive', title: ctx.title })
});

/* ======================= EXIT TICKETS ======================= */
I('lg-e1', {
  kind: 'exit', title: 'Exit Ticket: Stereotypes & Respect', mins: 6, icon: '🎟️', info: INFO, desc: 'Matches the 3 success criteria: recognize a stereotype, explain an effect, respond respectfully.',
  qs: [
    { t: 'mc', q: 'Which statement is a gender <b>stereotype</b>?', opts: ['“Girls are bad at math.”', '“Everyone learns at their own pace.”', '“Practice helps you improve.”', '“Some people like math more than others.”'], a: 0, why: 'A stereotype is an oversimplified belief about a whole group.' },
    { t: 'mc', q: 'Gender <b>expression</b> means…', opts: ['How a person shows their gender on the outside (clothes, hair, name, pronouns)', 'Who a person is attracted to', 'A person’s sex assigned at birth', 'A person’s grades'], a: 0 },
    { t: 'short', q: 'Pick one expectation from the gallery walk. Explain one way it could limit a person or affect their well-being.', min: 20, frames: ['The expectation “___” could…', 'This affects well-being because…'] },
    { t: 'mc', q: 'Someone says, “Real men don’t cry.” What is the MOST respectful response?', opts: ['“Everyone has feelings. Crying is human.”', '“Yeah, toughen up.”', 'Laugh', 'Say nothing ever'], a: 0 }
  ]
});
I('lg-e2', {
  kind: 'exit', title: 'Exit Ticket: Healthy Relationships', mins: 5, icon: '🚦', info: { eq: 'What does a healthy, respectful relationship look like for anyone?', lt: ['tell the difference between healthy and unhealthy relationship behaviors'] }, desc: 'Red/green flags and respectful communication.',
  qs: [
    { t: 'sort', q: 'Sort each behavior.', bins: [['🚩 Red flag', '', '#d93a2b'], ['✅ Green flag', '', '#2e9b4a']], cards: [['Checking a partner’s phone', 0], ['Threatening to share someone’s secret', 0], ['Pressuring for photos', 0], ['Respecting “no”', 1], ['Having your own friends', 1], ['Talking calmly after a break', 1]] },
    { t: 'mc', q: 'True or false: the signs of a healthy relationship are the same for same-sex and different-sex couples.', opts: ['True', 'False'], a: 0, keep: true },
    { t: 'short', q: 'Rewrite this as an “I” statement: “You never listen to me!”', min: 8, frames: ['I feel… when… I need…'] }
  ]
});

/* ======================= TARGETS & STANDARDS ======================= */
I('lg-std', {
  kind: 'info', title: 'Learning Targets & Standards: Identity & Respect', icon: '🎯', desc: 'Essential question, targets, success criteria, NHES standards, and EC §51933(d).',
  html: `<div class="eqbox"><span class="lbl">Essential Question</span><p>${INFO.eq}</p></div>
   <div class="pgrid"><div class="pbox"><span class="lbl">Learning targets (I can…)</span><ul><li>identify gender role stereotypes</li><li>explain how social expectations pressure people</li><li>describe how stereotypes limit self-expression and well-being</li></ul></div>
   <div class="pbox"><span class="lbl">Success criteria</span><ul><li>I can recognize a stereotype.</li><li>I can explain one effect.</li><li>I can respond respectfully.</li></ul></div></div>
   <div class="tablewrap"><table class="std"><tr><th>Code</th><th>Standard</th></tr>${STANDARDS.map(([c, s]) => `<tr><td><b>${c}</b></td><td>${s}</td></tr>`).join('')}</table></div>`
});

/* ======================= PRINTABLES ======================= */
I('lg-p1', { kind: 'print', title: 'Gallery Walk Posters', icon: '🖼️', desc: '“Act like a man” and “Act like a lady”: one per page. Print on 11×17 if you can.', html: `<div class="poster"><h2>“Act like a man”</h2><p style="font-size:1.2rem;font-weight:700">🟨 Yellow: expectations people hear · 🟦 Blue: how it limits people</p></div><div class="pgbreak"></div><div class="poster" style="margin-top:20px"><h2>“Act like a lady”</h2><p style="font-size:1.2rem;font-weight:700">🟨 Yellow: expectations people hear · 🟦 Blue: how it limits people</p></div>` });
I('lg-p2', { kind: 'print', title: 'Agree / Disagree Signs', icon: '🪧', desc: 'Two big signs for the walls.', html: `<div class="poster" style="justify-content:center;border-color:#2e9b4a"><div style="font-size:120px">👍</div><h2 style="color:#2e9b4a">AGREE</h2></div><div class="pgbreak"></div><div class="poster" style="justify-content:center;border-color:#d93a2b;margin-top:20px"><div style="font-size:120px">👎</div><h2 style="color:#d93a2b">DISAGREE</h2></div>` });
I('lg-p3', {
  kind: 'print', title: 'Category Cards (Terms Sort)', icon: '🗂️', desc: '4 header cards + 12 example cards for a table sort.',
  html: `<h2>Category Cards</h2><div class="cards6" style="grid-template-columns:repeat(2,1fr)">${TERMS.map(t => `<div class="pc" style="background:${t[2]}22"><div><div style="font-size:1.3rem">${t[0]}</div><div style="font-weight:600;font-size:.9rem">${t[1]}</div></div></div>`).join('')}</div><div class="pgbreak"></div>
   <h3 style="margin-top:16px">Example cards</h3><div class="cards6">${['“Female” on a birth certificate', 'A doctor says “It’s a boy!”', 'Born intersex', 'Knowing inside you’re a girl', 'Nonbinary', 'Transgender', 'Wearing nail polish', 'Short haircut', 'Asking for certain pronouns', 'Crush on a different gender', 'Attracted to the same gender', 'Bisexual'].map(s => `<div class="pc" style="min-height:90px">${s}</div>`).join('')}</div><p><small>Key: row 1 + “Born intersex” = sex assigned at birth · next 3 = gender identity · next 3 = gender expression · last 3 = sexual orientation.</small></p>`
});
I('lg-p4', { kind: 'print', title: 'Red / Green Flag Paddles', icon: '🚦', desc: 'Cut out, glue back-to-back on a craft stick.', html: `<div class="g2"><div class="pc" style="min-height:300px;background:#fde3df;border-color:#d93a2b"><div style="font-size:90px">🚩</div><div style="font-size:2rem">RED FLAG</div></div><div class="pc" style="min-height:300px;background:#e3f6e7;border-color:#2e9b4a"><div style="font-size:90px">✅</div><div style="font-size:2rem">GREEN FLAG</div></div></div>` });
})();
