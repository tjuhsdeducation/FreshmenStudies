/* =====================================================================
   🌎 HUMAN TRAFFICKING: two full 60-minute lessons
     1) How Recruitment Works: The Online Grooming Pattern
     2) Labor Trafficking & the Global Picture
   ===================================================================== */
(() => {
const T = 'trafficking';
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const money = n => '$' + Math.round(n).toLocaleString('en-US');

/* =================== MODULE 1: RECRUITMENT ONLINE =================== */
FS.item('ht-m1', {
  kind: 'module', topic: T, mins: 60, icon: '📱', title: 'Lesson 1: How Recruitment Works Online',
  desc: 'Hook → what trafficking is → DM Inbox Simulator (spot the red flags) → stages of grooming → U.S. & California data → scenarios → warning letter → exit ticket.',
  info: { eq: 'How do traffickers use trust, technology, and people’s needs to recruit young people, and how can I protect myself and my friends?', lt: ['define human trafficking using Action–Means–Purpose', 'identify the stages of online grooming and recruitment', 'recognize red flags in online messages', 'name safe ways to get help for myself or a friend'] },
  tn: 'The simulator is non-graphic and shows a common pattern. Remind students: if something like this has happened to them, it is never their fault, and they can talk to you or the counselor privately.',
  steps: [
    { name: 'Hook: What Do People Need?', icon: '🎣', mins: 5,
      run: (z, done) => {
        const needs = ['💛 Belonging', '👀 Attention', '❤️ Love', '💵 Money', '🏠 A place to stay', '💼 A job', '🧑 Feeling grown-up', '⭐ Followers / fame', '🛡️ Feeling protected'];
        z.innerHTML = `<p style="font-weight:700">Every teen needs things. Pick the <b>3 needs</b> you think teens care about most.</p><div class="needs">${needs.map((n, i) => `<button class="chipc" type="button" data-i="${i}" aria-pressed="false">${n}</button>`).join('')}</div><div class="btnrow"><button class="btn" type="button" id="nr" disabled>Reveal</button></div><div class="r"></div>`;
        const pick = new Set();
        $$('.chipc', z).forEach(b => b.onclick = () => { const i = +b.dataset.i; if (pick.has(i)) pick.delete(i); else if (pick.size < 3) pick.add(i); $$('.chipc', z).forEach(x => { const on = pick.has(+x.dataset.i); x.classList.toggle('pick', on); x.setAttribute('aria-pressed', on); }); $('#nr', z).disabled = pick.size !== 3; });
        $('#nr', z).onclick = () => {
          $('#nr', z).remove(); $$('.chipc', z).forEach(x => x.disabled = true);
          $('.r', z).innerHTML = `<div class="fb info">💡 <b>All of these are normal, healthy needs.</b> Traffickers look for a need that isn’t being met, then <b>promise to fill it</b>: love, money, a job, a place to stay, fame. That promise builds trust, and trust is how control starts.</div><div class="qcard"><div class="q">Why could someone who promises to meet your needs gain power over you?</div><textarea id="ta"></textarea><div class="btnrow"><button class="btn" type="button" id="sv" disabled>Save</button></div></div>`;
          const ta = $('#ta', z); ta.oninput = () => $('#sv', z).disabled = FS.words(ta.value) < 8;
          $('#sv', z).onclick = () => { ta.readOnly = true; $('#sv', z).remove(); done(1, 1, `Needs picked: ${[...pick].map(i => needs[i]).join(', ')}\nWhy: ${ta.value.trim()}`); };
        };
      } },
    { name: 'Learn: What Trafficking Is (and Isn’t)', icon: '📖', mins: 8,
      html: `<p><b>Human trafficking</b> is using <b>force, fraud, or coercion</b> to make someone work or perform commercial sex. Think <b>A–M–P</b>:</p>
        <div class="amp"><div><b>A</b>ction<span>recruit, transport, hide, or obtain a person</span></div><div><b>M</b>eans<span>force, fraud (lies), or coercion (threats, debts, control)</span></div><div><b>P</b>urpose<span>labor/services or commercial sex</span></div></div>
        <div class="note"><b>Under 18?</b> Under U.S. law, any minor involved in commercial sex is a victim of trafficking. No force, fraud, or coercion has to be proven.</div>
        <ul><li>Most victims are <b>not kidnapped</b>. They are recruited by someone they know or trust: a partner, friend, family member, employer, or someone they met online.</li><li>Trafficking doesn’t require crossing a border. It can happen in someone’s hometown.</li><li>Anyone can be targeted: any gender, age, race, or background.</li><li>California law requires students to learn how <b>social media and apps</b> are used to recruit.</li></ul>`,
      qs: [
        { t: 'mc', q: 'What are the three parts of the A–M–P model?', opts: ['Action, Means, Purpose', 'Age, Money, Place', 'Abuse, Money, Power', 'Arrest, Motive, Prison'], a: 0 },
        { t: 'mc', q: 'Most trafficking victims are…', opts: ['Recruited by someone they know or trust', 'Kidnapped by strangers', 'Always moved to another country', 'Adults only'], a: 0 },
        { t: 'mc', q: 'A 16-year-old is paid for commercial sex but “agreed.” Under U.S. law, this is…', opts: ['Trafficking, because they’re a minor', 'Not trafficking, because they agreed', 'Only trafficking if they were kidnapped'], a: 0 }
      ] },
    { name: 'Simulation: The DM Inbox', icon: '📱', mins: 15, tn: 'Students flag messages, then choose a response. The pattern continues so students can see all 5 stages, even when they choose the safe option.',
      run: (z, done) => {
        const D = [
          { day: 'Day 1', stage: 'Stage 1 · Targeting & flattery', m: [['hey saw ur post from the game 🔥', 0], ['ur honestly way more mature than ppl ur age fr', 1], ['lol same i love that song', 0], ['what school u go to? 👀', 1]],
            o: [['Don’t share personal info. Ignore or block.', 2, 'Strangers asking where you go to school is a red flag. Keep personal info private.'], ['Chat, but keep your school and location private.', 1, 'Better, but flattery about being “mature” is a common way to start grooming.'], ['Tell them your school. They seem nice.', 0, 'Sharing where you are lets a stranger find you.']], why: 'Flattery (“you’re so mature”) + asking for personal info.' },
          { day: 'Day 4', stage: 'Stage 2 · Building trust & gifts', m: [['how was ur math test?', 0], ['sent u a $50 gift card 🎁 bc u deserve it', 1], ['ur parents don’t get u like i do', 1]],
            o: [['Don’t accept the gift. Tell a trusted adult about this account.', 2, 'Gifts from strangers create a feeling that you “owe” them.'], ['Say thanks but don’t reply more.', 1, 'Okay, but tell an adult. Gifts are a grooming tool.'], ['Accept it. It’s just a gift.', 0, 'Gifts can later be used as a “debt.”']], why: 'Gifts + trying to turn you against your family.' },
          { day: 'Day 9', stage: 'Stage 3 · Isolation & secrecy', m: [['u up? 🌙', 0], ['don’t tell anyone about us, they’d be jealous', 1], ['delete our chats ok? it’s our thing', 1]],
            o: [['Screenshot the chat, block, and talk to a trusted adult.', 2, 'Secrecy is one of the biggest red flags. Healthy relationships don’t need to be hidden.'], ['Keep it secret but stop replying.', 1, 'Stopping is good, but secrets protect the recruiter, not you. Tell someone.'], ['Delete the chats like they asked.', 0, 'Deleting evidence helps the recruiter.']], why: 'Asking for secrecy and deleting messages.' },
          { day: 'Day 14', stage: 'Stage 4 · The offer (or the ask)', m: [['i got u a modeling gig in LA 💸💸', 1], ['i’ll drive u. just don’t tell ur mom yet', 1], ['send me a pic first so i can show the agency', 1]],
            o: [['Don’t go. Screenshot, block, report, and tell an adult. Call the hotline if you’re worried.', 2, 'Real jobs don’t ask minors to hide things from parents or send photos to strangers.'], ['Go, but bring a friend.', 1, 'A friend doesn’t make an unknown stranger safe. Check with an adult first.'], ['Send a photo.', 0, 'Never send photos to someone you don’t know. Photos can be used to control you.']], why: 'Too-good-to-be-true offer + secrecy + asking for photos.' },
          { day: 'Day 20', stage: 'Stage 5 · Control & threats', m: [['u owe me for everything i bought u', 1], ['if u tell anyone, everyone sees ur pics', 1]], intro: 'This is what can happen if the pattern keeps going. If you ever see messages like these:',
            o: [['Tell a trusted adult or call 1-888-373-7888 (or 911 if in danger). It’s NOT your fault.', 2, 'Threats like these are illegal. Help is available, and the person being threatened is never to blame.'], ['Pay them back.', 0, 'The “debt” is a control tactic. It will never be paid off.'], ['Keep it secret.', 0, 'Secrecy is how traffickers keep control. Telling someone breaks it.']], why: 'Fake “debt” + threats (sextortion).' }
        ];
        let d = 0, flagPts = 0, flagMax = 0, choicePts = 0; const log = [];
        const draw = () => {
          if (d >= D.length) {
            z.innerHTML = `<div class="scorebox"><div class="big">${flagPts + choicePts} / ${flagMax + D.length * 2}</div>Red flags: ${flagPts}/${flagMax} · Choices: ${choicePts}/${D.length * 2}</div><h3 style="margin-top:12px">The 5 stages you saw</h3><ol>${D.map(x => `<li><b>${x.stage.split('· ')[1]}</b>: ${x.why}</li>`).join('')}</ol>`;
            done(flagPts + choicePts, flagMax + D.length * 2, log.join('\n')); return;
          }
          const x = D[d];
          z.innerHTML = `<div class="sorthelp">${x.day} of 5 · Tap 🚩 on every message that is a red flag, then press Check.</div>${x.intro ? `<div class="note">${x.intro}</div>` : ''}
            <div class="phone"><div class="ph-top">📱 <b>jay.m.vibes</b> <small>new follower</small></div><div class="ph-body">${x.m.map((m, k) => `<div class="msg"><span class="bub">${m[0]}</span><button class="flag" type="button" data-k="${k}" aria-pressed="false" aria-label="Flag this message">🚩</button></div>`).join('')}</div></div>
            <div class="btnrow"><button class="btn" type="button" id="cf">Check my flags</button></div><div class="r"></div>`;
          $$('.flag', z).forEach(b => b.onclick = () => { const on = b.classList.toggle('on'); b.setAttribute('aria-pressed', on); });
          $('#cf', z).onclick = () => {
            let right = 0;
            $$('.flag', z).forEach(b => { const k = +b.dataset.k, red = x.m[k][1] === 1, on = b.classList.contains('on'); b.disabled = true; if (red === on) right++; b.closest('.msg').classList.add(red ? 'isred' : 'isok'); });
            flagPts += right; flagMax += x.m.length; $('#cf', z).remove();
            $('.r', z).innerHTML = `<div class="fb ${right === x.m.length ? 'ok' : 'info'}"><b>${x.stage}</b>: you got ${right} of ${x.m.length} right. Red flags: ${x.why}</div><h4 style="margin:10px 0 6px">What’s the safest response?</h4><div class="opts">${FS.shuffle([0, 1, 2]).map(k => `<button class="opt" type="button" data-o="${k}">${x.o[k][0]}</button>`).join('')}</div><div class="r2"></div>`;
            $$('[data-o]', z).forEach(b => b.onclick = () => {
              const o = x.o[+b.dataset.o]; choicePts += o[1]; log.push(`${x.day}: flags ${right}/${x.m.length}; chose "${o[0]}" (${o[1]}/2)`);
              $$('[data-o]', z).forEach(y => { y.disabled = true; if (x.o[+y.dataset.o][1] === 2) y.classList.add('right'); }); if (o[1] < 2) b.classList.add('wrong');
              $('.r2', z).innerHTML = `<div class="fb ${o[1] === 2 ? 'ok' : 'no'}">${o[2]}</div><div class="btnrow"><button class="btn" type="button">${d < D.length - 1 ? 'Next: ' + D[d + 1].day + ' →' : 'See my results'}</button></div>`;
              $('.r2 .btn', z).onclick = () => { d++; draw(); };
            });
          };
        };
        draw();
      } },
    { name: 'Check: Stages of Grooming', icon: '✅', mins: 5,
      qs: [
        { t: 'order', q: 'Put the stages of online recruitment in order.', items: ['Targeting & flattery', 'Building trust & gifts', 'Isolation & secrecy', 'The offer or the ask', 'Control & threats'] },
        { t: 'mc', q: '“Let’s keep this between us. Your friends wouldn’t understand.” Which stage is this?', opts: ['Isolation & secrecy', 'Targeting & flattery', 'Control & threats', 'It’s not a red flag'], a: 0 },
        { t: 'ms', q: 'Which are red flags from an online contact? (Select all.)', opts: ['Asks you to keep it secret', 'Sends gifts or money', 'Offers a job that’s too good to be true', 'Asks for photos', 'Respects it when you say no and stop chatting'], a: [0, 1, 2, 3] }
      ] },
    { name: 'Data: It Happens Here', icon: '📊', mins: 7,
      html: `<div class="statgrid"><div class="stat"><b>15,085</b><span>U.S. cases reported to the National Human Trafficking Hotline (2025)</span></div><div class="stat"><b>#1</b><span>California had the most cases of any state: 1,908</span></div><div class="stat"><b>38%</b><span>of victims detected worldwide were children (UNODC 2024)</span></div><div class="stat"><b>1.1 million</b><span>people estimated in modern slavery in the U.S.</span></div></div>
        <h4>2025 hotline cases by state</h4>${[['California', 1908], ['Texas', 1487], ['Florida', 904], ['New York', 606], ['Washington', 395]].map(([s, n]) => `<div class="hbar"><span>${s}</span><span class="tr"><i style="width:${n / 1908 * 100}%;--bc:${s === 'California' ? '#e0503a' : '#2b7de9'}"></i><em>${n.toLocaleString()}</em></span></div>`).join('')}
        <p class="cite">Sources: National Human Trafficking Hotline (2025); UNODC Global Report (2024); Walk Free Global Slavery Index (2023). Hotline numbers count reported cases only.</p>`,
      qs: [
        { t: 'mc', q: 'Which state had the most hotline cases in 2025?', opts: ['California', 'Texas', 'Florida', 'New York'], a: 0 },
        { t: 'mc', q: 'California also has the most people of any state. What does that mean for comparing states?', opts: ['More people can mean more cases, so we should also look at cases per person', 'California is the most dangerous place on Earth', 'Population doesn’t matter'], a: 0 },
        { t: 'mc', q: 'Why might the real number of victims be higher than hotline cases?', opts: ['Many victims never contact the hotline because of fear, control, or not knowing it exists', 'The hotline makes up numbers', 'Every victim calls the hotline'], a: 0 }
      ] },
    { name: 'Scenarios: Help a Friend', icon: '🤝', mins: 8,
      scen: [
        { who: 'Your friend Dani', s: '“This guy I met online is 21 and he’s going to get me a job and an apartment. Don’t tell anyone, okay?”', o: [['“I care about you, and this worries me. I’m going to talk to the counselor with you.”', 2, 'Secrecy + older person + job/housing offer = big red flags. Telling an adult is caring, not snitching.'], ['Keep the secret like a good friend.', 0, 'Secrets protect the recruiter, not your friend.'], ['Tell everyone at school.', 0, 'That could embarrass or endanger Dani. Tell a trusted adult privately.']] },
        { who: 'Group chat', s: 'Someone shares an ad: “Teens 15+! Travel & make $1,500/week! DM for details.”', o: [['Say “this looks like a scam/red flag,” and report the post.', 2, 'Speaking up protects others who might fall for it.'], ['DM them to see what it is.', 0, 'That shares your info with an unknown recruiter.'], ['Ignore it.', 1, 'Better than replying, but warning friends and reporting can help.']] },
        { who: 'Your cousin', s: 'Your cousin’s new boyfriend controls her phone, and she seems scared to go home.', o: [['Tell a trusted adult, and share the hotline: 1-888-373-7888 or text 233733.', 2, 'You don’t have to be sure it’s trafficking. Trained people can help figure it out.'], ['Confront the boyfriend yourself.', 0, 'That could put you and your cousin in danger.'], ['Wait and see.', 0, 'Control and fear are warning signs. Get help.']] },
        { who: 'Online game', s: 'A player you don’t know keeps offering you skins and wants to video chat alone.', o: [['Don’t accept. Block and report them, and tell an adult.', 2, 'Gifts + wanting to be alone with you are classic grooming moves.'], ['Accept the skins but don’t video chat.', 1, 'Gifts create a feeling of owing. Better not to accept.'], ['Video chat. It’s just a game.', 0, 'Never video chat alone with someone you don’t know.']] }
      ] },
    { name: 'Write: Warn a Younger Student', icon: '✍️', mins: 8,
      write: { prompt: 'Write a message to an <b>8th grader</b> who just got their first phone. Warn them about online recruitment. Include <b>at least 3 red flags</b>, what to do if they notice them, and where to get help. Be kind: remind them it’s never the victim’s fault.', min: 60, frames: ['Hey! Now that you have a phone…', 'Watch out if someone…', 'If that happens…', 'Remember…'], keys: ['secret', 'gift', 'photo', 'block', 'report', 'trusted adult', '888', 'hotline'], checks: ['I named at least 3 red flags.', 'I explained what to do (block, report, tell an adult).', 'I included the hotline or another way to get help.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 4, label: 'Exit ticket',
      qs: [
        { t: 'mc', q: 'Human trafficking is…', opts: ['Using force, fraud, or coercion to make someone work or perform commercial sex', 'Only moving people across borders', 'Any job with low pay', 'Running away from home'], a: 0 },
        { t: 'ms', q: 'Select ALL red flags.', opts: ['“Don’t tell your parents.”', '“Send me a pic.”', 'Expensive gifts from someone you just met', '“Take your time, no pressure.”'], a: [0, 1, 2] },
        { t: 'mc', q: 'The National Human Trafficking Hotline is…', opts: ['1-888-373-7888 / text 233733', '411', '1-800-222-1222', 'There isn’t one'], a: 0 }
      ] }
  ]
});

/* =================== MODULE 2: LABOR TRAFFICKING & THE WORLD =================== */
FS.item('ht-m2', {
  kind: 'module', topic: T, mins: 60, icon: '🌍', title: 'Lesson 2: Labor Trafficking & the Global Picture',
  desc: 'Hook (two job offers) → labor trafficking tactics → The Debt Trap simulator → interactive world map → bad job vs trafficking → scenarios → CER → exit ticket.',
  info: { eq: 'How does labor trafficking work, and how does it affect the world compared to the U.S. and California?', lt: ['explain how debt, document-taking, and threats are used to control workers', 'tell the difference between a bad job and labor trafficking', 'compare global, U.S., and California data using a map', 'name ways to get help'] },
  steps: [
    { name: 'Hook: Two Job Offers', icon: '🎣', mins: 5,
      run: (z, done) => {
        z.innerHTML = `<p style="font-weight:700">You’re 17 and need money for a car. Which job would you apply for?</p>
          <div class="pgrid"><button class="jobcard" type="button" data-j="A"><b>📦 Packing House Helper</b><span>$17/hr · weekends</span><span>Work permit required if under 18</span><span>Paid by direct deposit every 2 weeks, with a pay stub</span><span>Interview Saturday at our office. Bring a parent.</span></button>
          <button class="jobcard" type="button" data-j="B"><b>✈️ Travel Sales Team</b><span>$1,200/WEEK in cash! 💰</span><span>Housing & travel provided (we deduct it later)</span><span>No ID needed. We hold documents for safety</span><span>Leave this week. Don’t tell family until you’re settled</span></button></div><div class="r"></div>`;
        $$('.jobcard', z).forEach(b => b.onclick = () => {
          const j = b.dataset.j; $$('.jobcard', z).forEach(x => x.disabled = true); b.classList.add('sel');
          $('.r', z).innerHTML = `<div class="fb ${j === 'A' ? 'ok' : 'no'}">${j === 'A' ? '✅ Smart pick.' : '🚩 Job B is full of red flags.'} Job B: way too much pay, cash only, a “debt” for housing and travel, <b>they hold your documents</b>, and <b>secrecy from family</b>. These are common signs of labor trafficking.</div>`;
          FS.quiz($('.r', z).appendChild(document.createElement('div')), [{ t: 'mc', q: 'Which detail in Job B is the BIGGEST red flag?', opts: ['“We hold documents for safety”', 'It’s a sales job', 'It involves travel', 'It’s on weekends'], a: 0, why: 'Taking someone’s ID or passport is a way to keep them from leaving.' }], { label: 'Hook', onFinish: (p) => done(p + (j === 'A' ? 1 : 0), 2, `Picked job ${j}. Biggest red flag correct: ${p ? 'yes' : 'no'}`) });
        });
      } },
    { name: 'Learn: How Labor Trafficking Works', icon: '📖', mins: 7,
      html: `<p><b>Labor trafficking</b> is using force, fraud, or coercion to make someone work. It has been found in agriculture, restaurants, domestic work (cleaning, childcare), construction, factories, traveling sales crews, and more.</p>
        <div class="pgrid"><div class="pbox"><span class="lbl">Common control tactics</span><ul><li><b>Debt bondage:</b> a “debt” for travel, housing, or fees that keeps growing</li><li><b>Taking documents:</b> holding someone’s ID or passport</li><li><b>Threats:</b> of violence, or of calling police or immigration</li><li><b>Isolation:</b> no phone, no contact with family</li><li><b>Lies</b> about pay, hours, or the job itself</li></ul></div>
        <div class="pbox"><span class="lbl">Bad job vs. trafficking</span><p>A <b>bad job</b> can be unfair or even illegal (low pay, long hours), but you can <b>quit and leave</b>.</p><p><b>Trafficking</b> uses force, fraud, or coercion so the person <b>feels they can’t leave</b>.</p></div></div>`,
      qs: [
        { t: 'mc', q: 'What is debt bondage?', opts: ['Using a debt that keeps growing to force someone to keep working', 'Borrowing money from a bank', 'Getting paid every two weeks', 'Paying for college'], a: 0 },
        { t: 'mc', q: 'What is the KEY difference between a bad job and labor trafficking?', opts: ['In trafficking, force, fraud, or coercion keeps the person from leaving', 'Trafficking pays less', 'Bad jobs are only on farms', 'There is no difference'], a: 0 },
        { t: 'ms', q: 'Which are labor trafficking control tactics? (Select all.)', opts: ['Holding someone’s ID', 'Threatening to call immigration', 'A debt that can never be paid off', 'Giving a pay stub', 'Taking away their phone'], a: [0, 1, 2, 4] }
      ] },
    { name: 'Simulation: The Debt Trap', icon: '🧮', mins: 14, tn: 'Numbers are fictional and chosen to show how debt bondage works.',
      run: (z, done) => {
        let week = 0, debt = 3200; const rows = [], hist = [debt]; let asked = false;
        z.innerHTML = `<div class="note">👤 <b>Meet Ana (a fictional story).</b> Ana, 19, was promised <b>$18/hour, 40 hours a week</b>, and free housing. When she arrived, she was told she owed <b>$3,200</b> for the recruiter fee and travel. Her boss is holding her passport “for safekeeping.” Work her weeks and watch the debt.</div>
          <div class="statgrid"><div class="stat"><b id="dw">0</b><span>weeks worked</span></div><div class="stat"><b id="dd">${money(debt)}</b><span>Ana’s debt</span></div><div class="stat"><b id="dh">0</b><span>hours worked</span></div></div>
          <div class="btnrow"><button class="btn" type="button" id="wk">▶ Work one week</button><button class="btn ghost" type="button" id="lv">🚪 Ask to leave</button></div>
          <div id="lvmsg"></div><div id="chart"></div><div class="tablewrap" id="tbl"></div><div id="qz"></div>`;
        const chart = () => { const W = 520, H = 140, mx = Math.max(...hist) * 1.1, mn = 0; const pts = hist.map((v, i) => `${20 + i * (W - 40) / 8},${H - (v - mn) / (mx - mn) * (H - 20)}`).join(' '); $('#chart', z).innerHTML = `<svg viewBox="0 0 ${W} ${H + 20}" style="width:100%;max-width:600px;display:block;margin:8px auto" role="img" aria-label="Ana's debt over time"><polyline points="${pts}" fill="none" stroke="#e0503a" stroke-width="4" stroke-linejoin="round"/>${hist.map((v, i) => `<circle cx="${20 + i * (W - 40) / 8}" cy="${H - v / mx * (H - 20)}" r="5" fill="#e0503a"><title>Week ${i}: ${money(v)}</title></circle>`).join('')}<text x="20" y="${H + 16}" font-family="Nunito" font-weight="800" font-size="12" fill="currentColor">Week 0</text><text x="${W - 20}" y="${H + 16}" text-anchor="end" font-family="Nunito" font-weight="800" font-size="12" fill="currentColor">Week 8</text></svg>`; };
        chart();
        $('#wk', z).onclick = () => {
          if (week >= 8) return;
          week++;
          const hrs = 60, pay = hrs * 9, housing = 200, food = 100, tools = 60, fine = [0, 40, 75, 25, 80, 50, 0, 60][week - 1], interest = Math.round(debt * 0.06);
          const net = pay - housing - food - tools - fine;
          debt = debt + interest - net; hist.push(debt);
          rows.push(`<tr><td>${week}</td><td>${hrs} hrs × $9 = ${money(pay)}</td><td>−${money(housing + food + tools)}</td><td>${fine ? '−' + money(fine) : '$0'}</td><td>+${money(interest)}</td><td><b>${money(debt)}</b></td></tr>`);
          $('#tbl', z).innerHTML = `<table class="std"><tr><th>Week</th><th>Actual pay</th><th>Housing, food, tools</th><th>“Fines”</th><th>Interest (6%/week)</th><th>Debt</th></tr>${rows.join('')}</table>`;
          $('#dw', z).textContent = week; $('#dd', z).textContent = money(debt); $('#dh', z).textContent = week * 60; chart();
          if (week === 8) { $('#wk', z).disabled = true; ask(); }
        };
        $('#lv', z).onclick = () => { asked = true; $('#lvmsg', z).innerHTML = `<div class="fb no">🗣️ <b>Boss:</b> “You owe me ${money(debt)}. You’re not getting your passport back until you pay. And if you leave, I’ll call immigration on you.”<br><small>This threat is a form of <b>coercion</b>. It’s meant to make Ana feel she can’t leave.</small></div>`; };
        function ask() {
          if (!asked) $('#lv', z).click();
          $('#qz', z).innerHTML = '<h3 style="margin-top:12px">🔎 Think about Ana’s situation</h3><div></div>';
          FS.quiz($('#qz div', z), [
            { t: 'mc', q: 'After 8 weeks and 480 hours of work, what happened to Ana’s debt?', opts: ['It went UP, even though she worked 60 hours a week', 'It was paid off', 'It went down a lot', 'It stayed exactly the same'], a: 0 },
            { t: 'mc', q: 'Ana was promised $18/hr but paid $9/hr. Which part of A–M–P is that?', opts: ['Means: fraud (lies)', 'Action', 'Purpose', 'It’s not part of it'], a: 0 },
            { t: 'ms', q: 'Which control tactics did you see in Ana’s story? (Select all.)', opts: ['Debt bondage', 'Taking her passport', 'Threatening to call immigration', 'Paying her the promised wage'], a: [0, 1, 2] },
            { t: 'short', q: 'Explain how the debt is used to control Ana. Use a number from the simulation.', min: 20, frames: ['The debt controls Ana because…', 'After 8 weeks…'] }
          ], { label: 'Debt Trap check', onFinish: (p, m, arr) => done(p, m, `Final debt after 8 weeks: ${money(debt)}\n` + arr.map((x, i) => `${i + 1}. ${x.q} → ${x.a}`).join('\n')) });
        }
      } },
    { name: 'Map: The Global Picture', icon: '🗺️', mins: 10,
      run: (z, done) => {
        z.innerHTML = '<p style="font-weight:700">Explore the map. Use the buttons to switch between forced labor and forced marriage, and between rate (per 1,000 people) and number of people. Tap a region, and tap the U.S.</p><div id="mp"></div><div id="qz" style="margin-top:14px"></div>';
        FS.mapExplorer($('#mp', z));
        FS.quiz($('#qz', z), [
          { t: 'mc', q: 'Choose <b>Forced labor</b> + <b>Per 1,000 people</b>. Which region has the highest RATE of forced labor?', opts: ['Arab States (5.3 per 1,000)', 'Americas', 'Africa', 'Asia & the Pacific'], a: 0 },
          { t: 'mc', q: 'Choose <b>Forced labor</b> + <b>Number of people</b>. Which region has the MOST people in forced labor?', opts: ['Asia & the Pacific (about 15.1 million)', 'Arab States', 'Americas', 'Europe & Central Asia'], a: 0 },
          { t: 'mc', q: 'Tap the U.S. How does its estimated rate (3.3 per 1,000) compare with the world (6.4)?', opts: ['Lower, but it’s still about 1.1 million people', 'Higher than every region', 'Zero'], a: 0 }
        ], { label: 'Map', onFinish: (p, m, arr) => done(p, m, arr.map((x, i) => `${i + 1}. ${x.a}`).join('\n')) });
      } },
    { name: 'Check: Bad Job or Trafficking?', icon: '✅', mins: 5,
      qs: [{ t: 'sort', q: 'Sort each situation.', bins: [['🚨 Labor trafficking', 'Force, fraud, or coercion keeps them working', '#e0503a'], ['⚠️ Bad job (not trafficking)', 'Unfair, maybe illegal, but they can leave', '#2b7de9']],
        cards: [['The owner keeps workers’ passports so they can’t leave.', 0], ['A worker’s “travel debt” grows every week, and they’re told they can’t quit until it’s paid.', 0], ['A nanny isn’t allowed to leave the house or call family, and is told she’ll be deported if she complains.', 0], ['A teen’s boss is rude and schedules too many hours, but the teen quits and finds a new job.', 1], ['A restaurant forgets to pay overtime, and the worker reports it to the state labor office.', 1], ['A sales crew leader threatens to leave teens stranded in another state if they don’t meet quotas.', 0]] }] },
    { name: 'Scenarios: What Would You Do?', icon: '🎭', mins: 7,
      scen: [
        { who: 'Your neighbor', s: '“My new job keeps my ID card and says I owe them for my room. I work every day and I’m scared to ask questions.”', o: [['Share the hotline (1-888-373-7888, text 233733). It’s confidential and has interpreters. Offer to help them call.', 2, 'The hotline helps workers in many languages and can connect them to legal help.'], ['Tell them to just work harder to pay it off.', 0, 'A debt like this is a control tactic.'], ['Post about the employer online.', 0, 'That could put your neighbor in danger.']] },
        { who: 'A job post', s: 'An ad says: “Summer crew! Travel the country selling magazines. Housing provided. Must be 16+. Leave tomorrow.”', o: [['Look it up with a parent, and don’t go anywhere without checking it out. Leaving fast with no paperwork is a red flag.', 2, 'Traveling sales crews have been linked to labor trafficking. Check first.'], ['Go. It sounds fun.', 0, 'You’d be far from home with strangers controlling your housing.'], ['Ask a friend to come too.', 1, 'Better than alone, but still check it out with an adult first.']] },
        { who: 'At a store', s: 'You notice a worker who looks scared, never speaks, and a manager answers every question for them.', o: [['If there’s immediate danger, call 911. Otherwise, call or text the hotline and describe what you saw.', 2, 'You don’t have to be sure. Reporting what you noticed lets trained people check.'], ['Ask the worker “Are you trafficked?” in front of the manager.', 0, 'That could put them in danger.'], ['Do nothing.', 0, 'Your report could help someone.']] }
      ] },
    { name: 'Write: Global, U.S., or Both? (CER)', icon: '✍️', mins: 8,
      write: { prompt: '<b>Claim–Evidence–Reasoning:</b> Is labor trafficking a <b>global problem</b>, a <b>U.S. problem</b>, or <b>both</b>? Use at least <b>two numbers</b> from the map or today’s lesson, and explain what someone your age can do about it.', min: 60, frames: ['I think labor trafficking is…', 'The data shows…', 'This matters because…', 'Someone my age can…'], keys: ['million', 'per 1,000', '6.4', '3.3', '1.1', '28', '15', 'asia', 'arab', 'hotline'], checks: ['I made a clear claim.', 'I used at least two numbers.', 'I explained my reasoning and one action I could take.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 4, label: 'Exit ticket',
      qs: [
        { t: 'mc', q: 'Which is a sign of labor trafficking?', opts: ['The employer holds your ID and says you owe them', 'You get a pay stub', 'You can quit any time', 'You get breaks'], a: 0 },
        { t: 'mc', q: 'Worldwide, about how many people are in forced labor?', opts: ['About 28 million', 'About 28 thousand', 'About 28 billion', 'Zero'], a: 0 },
        { t: 'short', q: 'In your own words: what’s the difference between a bad job and labor trafficking?', min: 15 }
      ] }
  ]
});

FS.addModules(T, ['ht-m1', 'ht-m2']);
})();
