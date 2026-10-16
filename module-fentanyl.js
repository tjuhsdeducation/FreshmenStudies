/* =====================================================================
   💊 FENTANYL: two full 60-minute lessons students complete start to finish
     1) The Fake Pill Problem
     2) Save a Life: Overdose Response & Refusal Skills
   ===================================================================== */
(() => {
const T = 'fentanyl';
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const pillSVG = (label, x = 0) => `<svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true"><circle cx="60" cy="60" r="44" fill="#8ec5f0" stroke="#3b6f99" stroke-width="4"/><circle cx="60" cy="60" r="44" fill="url(#g${x})"/><defs><radialGradient id="g${x}" cx=".35" cy=".3"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><line x1="60" y1="22" x2="60" y2="98" stroke="#3b6f99" stroke-width="3"/><text x="40" y="68" text-anchor="middle" font-family="Arial" font-weight="900" font-size="20" fill="#2d4e6b">M</text><text x="80" y="68" text-anchor="middle" font-family="Arial" font-weight="900" font-size="20" fill="#2d4e6b">30</text></svg><div style="font-weight:900">${label}</div>`;

/* =================== MODULE 1: THE FAKE PILL PROBLEM =================== */
FS.item('fen-m1', {
  kind: 'module', topic: T, mins: 60, icon: '🧪', title: 'Lesson 1: The Fake Pill Problem',
  desc: 'Hook → how fentanyl gets into pills → Pill Press Simulator → DEA & CDC data → scenarios → CER writing → exit ticket.',
  info: { eq: 'Why are counterfeit pills so dangerous, and how can I protect myself from them?', lt: ['explain what fentanyl is and how it ends up in fake pills and other drugs', 'explain why you can’t tell if a pill has fentanyl by looking at it', 'use evidence to defend the healthy choice'] },
  tn: 'Students can work alone or in pairs on one device. Pause after Step 3 for a 2-minute whole-class debrief: “What surprised you about the batch?”',
  steps: [
    { name: 'Hook: Real or Fake?', icon: '🎣', mins: 5,
      run: (z, done) => {
        z.innerHTML = `<p style="font-weight:700">One of these is a real prescription pill from a pharmacy. The other was made in an illegal lab. <b>Which one is real?</b></p>
          <div style="display:flex;gap:30px;justify-content:center;text-align:center;flex-wrap:wrap"><div>${pillSVG('Pill A', 1)}</div><div>${pillSVG('Pill B', 2)}</div></div>
          <div class="opts" style="max-width:520px;margin:12px auto"><button class="opt" type="button" data-v="A">Pill A is real</button><button class="opt" type="button" data-v="B">Pill B is real</button><button class="opt" type="button" data-v="C">I can’t tell</button></div><div class="r"></div>`;
        $$('.opt', z).forEach(b => b.onclick = () => {
          const v = b.dataset.v; $$('.opt', z).forEach(x => { x.disabled = true; if (x.dataset.v === 'C') x.classList.add('right'); }); if (v !== 'C') b.classList.add('wrong');
          $('.r', z).innerHTML = `<div class="fb ${v === 'C' ? 'ok' : 'info'}">${v === 'C' ? '✅ Exactly.' : '🤔 Trick question!'} We drew these two pills <b>exactly the same</b>. That’s the point: fake pills are pressed with the same color, shape, and letters as real medicine. The DEA has found fakes made to look like oxycodone (“M30” blues), Xanax, Adderall, and other pills.</div>
            <div class="qcard"><div class="q">In one sentence: why might someone believe a fake pill is real?</div><textarea id="hk"></textarea><div class="wc">0 words</div><div class="btnrow"><button class="btn" type="button" id="hs" disabled>Save</button></div></div>`;
          const ta = $('#hk', z); ta.oninput = () => { $('.wc', z).textContent = FS.words(ta.value) + ' words'; $('#hs', z).disabled = FS.words(ta.value) < 6; };
          $('#hs', z).onclick = () => { ta.readOnly = true; $('#hs', z).remove(); done((v === 'C' ? 1 : 0) + 1, 2, `Guess: ${v === 'C' ? 'Can’t tell' : 'Pill ' + v}\nWhy someone might believe it: ${ta.value.trim()}`); };
        });
      } },
    { name: 'Learn: From Lab to Street', icon: '📖', mins: 8,
      html: `<h3>What is fentanyl?</h3><p>Fentanyl is a <b>synthetic opioid</b>, a drug made in a lab that slows down the brain and breathing. It is about <b>50 times stronger than heroin</b> and <b>100 times stronger than morphine</b>. Doctors use carefully measured <b>pharmaceutical fentanyl</b> for severe pain, for example after surgery.</p>
        <h3>So where does the danger come from?</h3><p>Most fentanyl causing overdoses is <b>illegally made</b>. Criminal groups make the powder, smuggle it, and then:</p>
        <div class="flow"><span>🧪 Illegal lab makes fentanyl powder</span><span>📦 Smuggled in small packages</span><span>⚙️ Pressed into <b>fake pills</b> or <b>mixed into other drugs</b></span><span>📱 Sold on social media, by “friends,” or at parties</span></div>
        <h3>Why mix it into other drugs? (“lacing”)</h3><ul><li>It is <b>cheap</b> to make and <b>very strong</b>, so a tiny amount goes a long way. That means more money for sellers.</li><li>It’s been found in fake pills, powders sold as other drugs, and drugs like cocaine and meth.</li><li>The person buying usually <b>doesn’t know</b> it’s there.</li></ul>
        <h3>Can you tell if it’s there?</h3><p><b>No.</b> You can’t see it, smell it, or taste it. About <b>2 milligrams</b>, the amount on a pencil tip, can be deadly.</p><p class="cite">Sources: U.S. Drug Enforcement Administration (DEA); CDC.</p>`,
      qs: [
        { t: 'mc', q: 'Fentanyl is best described as…', opts: ['A synthetic opioid, much stronger than heroin or morphine', 'A plant-based drug like marijuana', 'A stimulant like caffeine', 'An over-the-counter vitamin'], a: 0 },
        { t: 'mc', q: 'Why do drug sellers mix fentanyl into other drugs?', opts: ['It is cheap and very strong, so they make more money', 'It makes drugs safer', 'It is required by law', 'Buyers ask for it'], a: 0 },
        { t: 'ms', q: 'Where has illegal fentanyl been found? (Select all that apply.)', opts: ['Fake “Xanax,” “Percocet,” or “Oxy” pills', 'Powders sold as other drugs', 'Mixed into cocaine or meth', 'Medicine from your own pharmacy prescription'], a: [0, 1, 2], why: 'Medicine from a licensed pharmacy, prescribed to you, is regulated and tested.' },
        { t: 'mc', q: 'How can you tell if a pill has fentanyl in it by looking, smelling, or tasting?', opts: ['You can’t', 'It tastes bitter', 'It has a different color', 'It smells like chemicals'], a: 0 }
      ] },
    { name: 'Simulation: Pill Press Factory', icon: '⚙️', mins: 12, tn: 'Models the DEA’s “chocolate chip cookie effect”: illegal pills are mixed unevenly.',
      run: (z, done) => {
        let batches = [], mix = 'poor';
        z.innerHTML = `<div class="note">🏭 <b>Simulation:</b> You’re looking inside an illegal pill press. Workers dump fentanyl powder into filler powder, stir it by hand, and press <b>20 pills</b>. Fentanyl doesn’t spread evenly. It clumps, like chocolate chips in cookie dough. Press at least <b>3 batches</b> and watch what happens to each pill.</div>
          <div class="pgrid" style="align-items:end"><label class="pbox"><span class="lbl">Fentanyl dumped into the batch</span><input type="range" id="mg" min="10" max="60" step="5" value="30" style="width:100%"><b id="mgv">30 mg total</b> <span class="sorthelp">(average <span id="avg">1.5</span> mg per pill)</span></label>
          <div class="pbox"><span class="lbl">How it’s mixed</span><div class="mapctl" style="margin:0"><button class="seg on" data-m="poor" type="button">By hand (clumpy)</button><button class="seg" data-m="better" type="button">Mixed longer</button></div></div></div>
          <div class="btnrow"><button class="btn" type="button" id="press">⚙️ Press a batch of 20 pills</button><span class="save" id="bc">Batches pressed: 0 / 3</span></div>
          <div id="chart"></div><div id="log"></div><div id="qz"></div>`;
        const mg = $('#mg', z);
        mg.oninput = () => { $('#mgv', z).textContent = mg.value + ' mg total'; $('#avg', z).textContent = (mg.value / 20).toFixed(1); };
        $$('[data-m]', z).forEach(b => b.onclick = () => { mix = b.dataset.m; $$('[data-m]', z).forEach(x => x.classList.toggle('on', x === b)); });
        const randn = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
        $('#press', z).onclick = () => {
          const avg = mg.value / 20, sig = mix === 'poor' ? 0.95 : 0.4;
          const pills = Array.from({ length: 20 }, () => { let x = avg * Math.exp(sig * randn() - sig * sig / 2); if (mix === 'poor' && Math.random() < 0.1) x *= 2.5; return Math.round(x * 100) / 100; });
          const over = pills.filter(p => p >= 2).length, mx = Math.max(...pills, 2.5);
          batches.push({ total: +mg.value, mix, over, min: Math.min(...pills), max: Math.max(...pills) });
          const W = 560, H = 210, bw = W / 20;
          $('#chart', z).innerHTML = `<svg viewBox="0 0 ${W} ${H + 30}" style="width:100%;max-width:640px;display:block;margin:10px auto" role="img" aria-label="Fentanyl in each of 20 pills">
            ${pills.map((p, i) => { const h = p / mx * H; return `<rect x="${i * bw + 3}" y="${H - h}" width="${bw - 6}" height="${h}" rx="4" fill="${p >= 2 ? '#e0503a' : '#43b45c'}"><title>Pill ${i + 1}: ${p} mg</title></rect>`; }).join('')}
            <line x1="0" x2="${W}" y1="${H - 2 / mx * H}" y2="${H - 2 / mx * H}" stroke="#1f2430" stroke-width="2" stroke-dasharray="6 4"/><text x="${W - 4}" y="${H - 2 / mx * H - 6}" text-anchor="end" font-family="Nunito" font-weight="900" font-size="13" fill="currentColor">2 mg: potentially deadly</text>
            <text x="0" y="${H + 22}" font-family="Nunito" font-weight="800" font-size="13" fill="currentColor">Each bar = one pill from the SAME batch · 🔴 2 mg or more · 🟢 under 2 mg</text></svg>
            <div class="fb ${over ? 'no' : 'info'}">Batch ${batches.length}: <b>${over} of 20</b> pills had 2 mg or more. Smallest pill: ${Math.min(...pills)} mg · Biggest pill: ${Math.max(...pills)} mg. They all look exactly the same.</div>`;
          $('#log', z).innerHTML = `<div class="tablewrap"><table class="std"><tr><th>Batch</th><th>Fentanyl added</th><th>Mixing</th><th>Pills ≥ 2 mg</th><th>Range per pill</th></tr>${batches.map((b, i) => `<tr><td>${i + 1}</td><td>${b.total} mg</td><td>${b.mix === 'poor' ? 'By hand' : 'Mixed longer'}</td><td><b>${b.over} / 20</b></td><td>${b.min}–${b.max} mg</td></tr>`).join('')}</table></div>`;
          $('#bc', z).textContent = `Batches pressed: ${batches.length} / 3`;
          if (batches.length >= 3 && !$('#qz', z).innerHTML) {
            FS.quiz($('#qz', z), [
              { t: 'mc', q: 'Within ONE batch, did every pill have the same amount of fentanyl?', opts: ['No, the amount changed a lot from pill to pill', 'Yes, every pill was the same', 'Only the first pill was different'], a: 0 },
              { t: 'mc', q: 'Why do people compare illegal pills to chocolate chip cookies?', opts: ['Like chips in dough, fentanyl clumps, so one pill can get a lot more than another', 'Because pills taste sweet', 'Because they are baked in an oven', 'Because every cookie has the same number of chips'], a: 0 },
              { t: 'short', q: 'Your friend says, “I took one from that same bag last week and I was fine.” Using the simulation, explain why the next pill could still be deadly.', min: 20, frames: ['Even pills from the same batch…', 'In my simulation…'] }
            ], { label: 'Simulation check', onFinish: (p, m, arr) => done(p, m, `Batches: ${batches.map(b => `${b.total}mg/${b.mix}: ${b.over}/20 ≥2mg`).join('; ')}\n` + arr.map((x, i) => `${i + 1}. ${x.q} → ${x.a}`).join('\n')) });
            $('#qz', z).insertAdjacentHTML('afterbegin', '<h3 style="margin-top:14px">🔎 What did you notice?</h3>');
          }
        };
        z.insertAdjacentHTML('beforeend', '<p class="cite">This is a model to show uneven mixing. The numbers are made up for learning, not measured from real pills.</p>');
      } },
    { name: 'Check: How Can You Know?', icon: '✅', mins: 5,
      qs: [{ t: 'sort', q: 'Sort each method. Does it tell you if a pill or powder is safe?', bins: [['✅ Reliable', 'Regulated and meant for you', '#2e9b4a'], ['🟡 Helpful, not 100%', 'Can detect many types of fentanyl but can miss some', '#e08a00'], ['❌ Not reliable', 'Tells you nothing about fentanyl', '#d93a2b']],
        cards: [['Medicine prescribed to you, filled at a pharmacy', 0], ['A fentanyl test strip', 1], ['How the pill looks (color, shape, letters)', 2], ['How it smells', 2], ['How it tastes', 2], ['A friend says “I’ve taken these before”', 2], ['The seller promises it’s real', 2], ['It came in a real-looking bottle', 2]] }] },
    { name: 'Data: What the Numbers Say', icon: '📊', mins: 7,
      html: `<h3>DEA lab testing of fake pills</h3><p>Every year, the DEA tests fake pills it seizes. How many contained a <b>potentially deadly dose</b> (2 mg or more)?</p>
        ${[[2021, 4], [2022, 6], [2023, 7], [2024, 5]].map(([y, n]) => `<div class="hbar"><span>${y}</span><span class="tr"><i style="width:${n * 10}%;--bc:#e0503a"></i><em>${n} in 10 pills</em></span></div>`).join('')}
        <h3 style="margin-top:14px">Teens who died from overdoses (CDC study, 2019–2021, ages 10–19)</h3>
        <div class="statgrid"><div class="stat"><b>84%</b><span>involved illegally made fentanyl</span></div><div class="stat"><b>About 1 in 4</b><span>had evidence of counterfeit pills</span></div><div class="stat"><b>About 2 in 3</b><span>had someone nearby who could have helped</span></div></div>
        <p class="cite">Sources: DEA lab testing (2021–2024); CDC <i>MMWR</i>, Dec 2022.</p>`,
      qs: [
        { t: 'mc', q: 'In which year did the DEA find the HIGHEST share of fake pills with a deadly dose?', opts: ['2023 (7 in 10)', '2021 (4 in 10)', '2024 (5 in 10)', '2022 (6 in 10)'], a: 0 },
        { t: 'mc', q: 'The number went DOWN to 5 in 10 in 2024. Does that make fake pills safe?', opts: ['No. Half of the pills still had a potentially deadly dose, and you can’t tell which half', 'Yes, it’s basically safe now', 'Only on weekends'], a: 0 },
        { t: 'mc', q: 'In about 2 out of 3 teen overdose deaths, someone was nearby. What does that suggest?', opts: ['Knowing the signs and how to respond (911, naloxone) could save lives', 'Overdoses only happen alone', 'Bystanders cause overdoses', 'Nothing can be done'], a: 0 }
      ] },
    { name: 'Scenarios: What Would You Do?', icon: '🎭', mins: 8,
      scen: [
        { who: 'Snapchat DM from someone you don’t know', s: '“got pressed 30s and bars 🔥 cheap, can drop off tonight.”', o: [['Don’t reply. Block, report the account, and tell a trusted adult.', 2, 'Yes. Drug sellers use social media to reach teens. “Pressed” pills are fake pills.'], ['Ask if they’re “real” before deciding.', 1, 'The seller can’t promise that. They usually don’t know what’s in them either.'], ['Order one, just to try.', 0, 'One fake pill can contain a deadly dose. There’s no safe “just one.”']] },
        { who: 'Teammate before the SAT', s: '“Take one of my Adderall. It’s real, it’s from MY prescription.”', o: [['“No thanks. It’s not prescribed to me.”', 2, 'Right. Medicine is only safe for the person it’s prescribed to, at their dose. Sharing prescriptions is also illegal.'], ['Take half.', 0, 'A medicine that isn’t yours is still risky, and you can’t be sure the bottle wasn’t refilled with fakes.'], ['“Maybe next time.”', 1, '“Maybe” keeps the door open. A clear no works best.']] },
        { who: 'At a party', s: 'Someone holds out a pill: “It’s just a Xanax, chill. Everyone’s taking one.”', o: [['“I’m good.” Then go find your friends or call for a ride.', 2, 'Short, clear, and you leave the situation.'], ['Take it but stay with friends.', 0, 'Friends being nearby doesn’t remove the fentanyl risk.'], ['Pocket it to “take later.”', 0, 'Holding drugs is risky, and someone else might take it.']] },
        { who: 'Your friend', s: '“I’ve been so anxious. I bought some pills online. They help me sleep.”', o: [['“I’m worried about you. Online pills can have fentanyl. Can we talk to the counselor or your doctor together?”', 2, 'You showed care, shared the risk, and offered a real solution.'], ['“Just test them first.”', 1, 'Test strips help but aren’t perfect. The safest step is to stop and get real help.'], ['Say nothing. It’s their choice.', 0, 'Speaking up could save their life. You can tell a trusted adult too.']] }
      ] },
    { name: 'Write: Defend the Healthy Choice (CER)', icon: '✍️', mins: 10,
      write: { prompt: '<b>Claim–Evidence–Reasoning:</b> Is taking a pill that wasn’t prescribed to you ever worth the risk? Write a paragraph that <b>defends the healthy choice</b>. Use at least <b>two pieces of evidence</b> from today (the Pill Press simulation, the DEA data, or the CDC data).', min: 70, frames: ['My claim is…', 'One piece of evidence is…', 'Another piece of evidence is…', 'This matters because…'], keys: ['dea', 'cdc', '2 mg', 'batch', 'simulation', 'in 10', '84', 'counterfeit', 'fake'], checks: ['I stated a clear claim.', 'I used at least 2 pieces of evidence (numbers or the simulation).', 'I explained WHY the evidence supports my claim.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 5, label: 'Exit ticket',
      qs: [
        { t: 'mc', q: 'About how much fentanyl can be deadly?', opts: ['2 milligrams (a pencil tip)', '2 grams', 'A teaspoon', 'A whole pill'], a: 0 },
        { t: 'mc', q: 'Two pills come from the same bag. One person was “fine.” Is the other pill safe?', opts: ['Not necessarily. Fentanyl is mixed unevenly', 'Yes, pills in the same bag are the same', 'Yes, if it looks the same'], a: 0 },
        { t: 'mc', q: 'The ONLY safe source of a pill is…', opts: ['A pharmacy, prescribed to you', 'A friend you trust', 'A seller with good reviews', 'A pill that looks real'], a: 0 },
        { t: 'short', q: 'One thing from today you will tell a friend or family member:', min: 12 }
      ] }
  ]
});

/* =================== MODULE 2: SAVE A LIFE =================== */
FS.item('fen-m2', {
  kind: 'module', topic: T, mins: 60, icon: '🚑', title: 'Lesson 2: Save a Life (Overdose Response & Refusal)',
  desc: 'Hook → spot the signs → Emergency Response Simulator → naloxone & Good Samaritan law → refusal scenarios → group-chat writing → exit ticket.',
  info: { eq: 'What would I do in the first minutes of an overdose, and how can I stand up to pressure to use drugs?', lt: ['recognize the signs of an opioid overdose', 'put the overdose response steps in order, including naloxone', 'explain how California’s Good Samaritan law protects people who call 911', 'use refusal skills in realistic situations'] },
  tn: 'If you have a naloxone training device, let pairs practice after Step 3. Never use real naloxone or drugs in class.',
  steps: [
    { name: 'Hook: Every Second Counts', icon: '🎣', mins: 5,
      html: `<div class="breath"><div class="lung"></div><div><h3>Breathe in… breathe out…</h3><p>Opioids like fentanyl <b>slow down breathing</b>. Too much can stop it. Without enough oxygen, the brain can start to be damaged within <b>minutes</b>. What the people nearby do in the first few minutes matters.</p></div></div>`,
      qs: [
        { t: 'scale', q: 'Right now, how ready do you feel to help someone who might be overdosing?', opts: ['1 · Not at all', '2 · A little', '3 · Pretty ready', '4 · Very ready'], why: 'Let’s see how this changes by the end of class.' },
        { t: 'mc', q: 'True or false: if someone is passed out and snoring loudly after taking pills, they’re just sleeping it off.', opts: ['True', 'False'], a: 1, keep: true, why: 'Loud snoring or gurgling can be a sign of an overdose: the person is struggling to breathe.' }
      ] },
    { name: 'Learn: Spot the Signs', icon: '👀', mins: 7,
      html: `<div class="pgrid"><div class="pbox"><span class="lbl">🚨 Signs of an opioid overdose</span><ul><li>Can’t be woken up, even when you shout or rub their breastbone</li><li>Slow, shallow, or no breathing</li><li>Blue, gray, or pale lips and fingertips</li><li>Tiny “pinpoint” pupils</li><li>Gurgling, choking, or snoring sounds</li><li>Limp body</li></ul></div>
        <div class="pbox"><span class="lbl">💊 Naloxone (Narcan)</span><ul><li>A medicine that can <b>reverse an opioid overdose</b>, including fentanyl</li><li>Comes as an easy nasal spray</li><li>Sold <b>without a prescription</b> (FDA approved over-the-counter in 2023)</li><li>Won’t harm someone who hasn’t taken opioids, so <b>if you’re not sure, give it</b></li><li>Can wear off before the opioid does, so <b>stay with them</b></li></ul></div></div>`,
      qs: [
        { t: 'ms', q: 'Select ALL signs of an opioid overdose.', opts: ['Won’t wake up', 'Slow or no breathing', 'Blue or gray lips', 'Pinpoint pupils', 'Gurgling sounds', 'Talking really fast', 'Very sweaty and hyper'], a: [0, 1, 2, 3, 4] },
        { t: 'mc', q: 'You’re not sure if it’s an overdose. What should you do?', opts: ['Treat it like an overdose: call 911 and give naloxone', 'Wait an hour to see', 'Let them sleep', 'Ask them questions until they answer'], a: 0 },
        { t: 'mc', q: 'Can naloxone hurt someone who didn’t take opioids?', opts: ['No, it won’t harm them', 'Yes, it’s very dangerous', 'Only adults can receive it'], a: 0 }
      ] },
    { name: 'Simulation: Emergency Response', icon: '🚑', mins: 14, tn: 'Choices in the simulator cost “time” when they are myths (cold showers, making someone vomit, letting them sleep it off).',
      run: (z, done) => {
        const S = [
          { s: 'At a friend’s house, you find <b>Jordan</b> slumped on the couch. Jordan doesn’t answer when you say their name.', o: [['Shout their name and firmly rub your knuckles on their breastbone', 1, 'Good. You’re checking if they respond.'], ['Let them sleep it off', 0, 'Myth. If someone can’t be woken, it may be an overdose. Every minute counts.'], ['Put them in a cold shower', 0, 'Myth. Cold water doesn’t reverse an overdose and can cause shock or drowning.'], ['Post on your story asking what to do', 0, 'Not helpful. Act first.']], vit: 'Unresponsive' },
          { s: 'Still no response. Jordan’s breathing is very slow, and their lips look <b>bluish</b>.', o: [['Call 911 (or point at someone: “YOU, call 911!”)', 1, 'Yes. Say: “My friend isn’t breathing well. I think it’s an overdose.” Give the address.'], ['Wait 10 minutes to see if they wake up', 0, 'Waiting wastes the most important minutes.'], ['Try to make them throw up', 0, 'Myth. This can cause choking.'], ['Give them coffee or another drug to “wake them up”', 0, 'Myth. Other drugs can make things worse.']], vit: 'Breathing very slow · lips blue' },
          { s: 'The 911 dispatcher is on speaker. Someone says, “There’s Narcan in the first aid kit… but I’m scared the police will come.”', o: [['Get the naloxone and give it. California’s Good Samaritan law protects people who call for help.', 1, 'Right. Calling 911 for an overdose protects you from charges for personal-use possession or being under the influence.'], ['Hang up so no one gets in trouble', 0, 'Never hang up. Stay on the line until help arrives.'], ['Leave before the ambulance arrives', 0, 'Jordan needs you. The law protects people who call for help.']], vit: 'Breathing very slow' },
          { naloxone: true, s: 'Give the naloxone. Tap the steps <b>in the right order</b>.', vit: 'Breathing very slow' },
          { s: 'It’s been <b>2–3 minutes</b>. Jordan still isn’t responding, and breathing is still very slow.', o: [['Give a second dose in the other nostril', 1, 'Yes. Fentanyl is strong, and a second dose (or more) may be needed.'], ['Give up. It didn’t work', 0, 'Don’t give up. Give another dose and keep helping until EMS arrives.'], ['Wait 20 more minutes', 0, 'Too long. Give a second dose now.']], vit: 'Breathing weak' },
          { s: 'Breathing is still weak. The dispatcher asks if you can help Jordan breathe.', o: [['Tilt the head back and give rescue breaths, 1 every 5 seconds (follow the dispatcher)', 1, 'Yes. Rescue breaths get oxygen in until naloxone works.'], ['Put Jordan in a bath', 0, 'Myth, and dangerous.'], ['Shake Jordan hard', 0, 'That won’t restore breathing.']], vit: 'Breathing weak → improving' },
          { s: 'Jordan starts to breathe better and groans, but is very drowsy.', o: [['Put Jordan in the recovery position (on their side) and STAY', 1, 'Yes. Naloxone can wear off before the fentanyl does. Stay until help takes over.'], ['They’re awake, so leave', 0, 'The overdose can come back when naloxone wears off.'], ['Send them home to sleep', 0, 'They need medical care. Wait for EMS.']], vit: 'Breathing · drowsy' },
          { s: 'Paramedics arrive.', o: [['Tell them what happened, what Jordan may have taken, and that 2 doses of naloxone were given', 1, 'Perfect. That information helps them treat Jordan.'], ['Say nothing', 0, 'Paramedics need the facts to help.'], ['Hide the evidence first', 0, 'Focus on Jordan. Tell EMS the truth.']], vit: '🚑 EMS is here' }
        ];
        let i = 0, best = 0, mins = 0; const log = []; let tries = 0;
        const draw = () => {
          if (i >= S.length) {
            z.innerHTML = `<div class="scorebox"><div class="big">${best} / ${S.length}</div>best choices on the first try · simulated time: about ${Math.max(6, mins)} minutes</div><div class="fb ok">🚑 Jordan is on the way to the hospital. Because you acted fast, called 911, gave naloxone, and stayed, Jordan has the best chance to survive.</div><p class="cite">Simulation only. In a real emergency, follow the 911 dispatcher’s instructions.</p>`;
            done(best, S.length, log.join('\n')); return;
          }
          const s = S[i]; tries = 0;
          z.innerHTML = `<div class="ers"><div class="vitals"><span>⏱ ${mins} min</span><span>🫁 ${s.vit}</span><span>Step ${i + 1} / ${S.length}</span></div><div class="scn" style="margin-top:10px"><div class="bubble" style="max-width:none">${s.s}</div></div><div class="opts" style="margin-top:10px"></div><div class="o"></div></div>`;
          const box = $('.opts', z);
          if (s.naloxone) {
            const order = ['Peel open the package (don’t test it)', 'Lay them on their back and tilt the head back', 'Put the nozzle in one nostril', 'Press the plunger firmly'];
            let k = 0;
            box.innerHTML = FS.shuffle(order.map((_, j) => j)).map(j => `<button class="opt" type="button" data-j="${j}">${order[j]}</button>`).join('');
            $$('.opt', box).forEach(b => b.onclick = () => {
              const j = +b.dataset.j;
              if (j === k) { b.classList.add('right'); b.disabled = true; b.insertAdjacentHTML('afterbegin', `<b>${k + 1}. </b>`); k++; if (k === order.length) { const ok = tries === 0; if (ok) best++; mins += 1; log.push(`${i + 1}. Naloxone steps: ${ok ? 'perfect' : tries + ' mistakes'}`); $('.o', z).innerHTML = `<div class="fb ok">💨 Naloxone given! Now wait 2–3 minutes and watch for breathing.</div><div class="btnrow"><button class="btn" type="button">Continue →</button></div>`; $('.o .btn', z).onclick = () => { i++; draw(); }; } }
              else { tries++; mins += 1; b.classList.add('wrong'); setTimeout(() => b.classList.remove('wrong'), 600); $('.o', z).innerHTML = `<div class="fb no">Not yet. That’s not step ${k + 1}. (+1 minute)</div>`; $('.vitals span', z).textContent = '⏱ ' + mins + ' min'; }
            });
            return;
          }
          box.innerHTML = FS.shuffle(s.o.map((_, j) => j)).map(j => `<button class="opt" type="button" data-j="${j}">${s.o[j][0]}</button>`).join('');
          $$('.opt', box).forEach(b => b.onclick = () => {
            const o = s.o[+b.dataset.j];
            if (o[1]) { if (tries === 0) best++; mins += 1; log.push(`${i + 1}. ${o[0]} ${tries ? '(after ' + tries + ' wrong)' : '(first try)'}`); $$('.opt', box).forEach(x => x.disabled = true); b.classList.add('right'); $('.o', z).innerHTML = `<div class="fb ok">✅ ${o[2]}</div><div class="btnrow"><button class="btn" type="button">Continue →</button></div>`; $('.o .btn', z).onclick = () => { i++; draw(); }; }
            else { tries++; mins += 2; b.classList.add('wrong'); b.disabled = true; $('.o', z).innerHTML = `<div class="fb no">❌ ${o[2]} <b>(+2 minutes)</b> Try again.</div>`; $('.vitals span', z).textContent = '⏱ ' + mins + ' min'; }
          });
        };
        draw();
      } },
    { name: 'Check: The Law & Naloxone', icon: '⚖️', mins: 5,
      html: `<div class="note"><b>California’s 911 Good Samaritan law</b> (Health &amp; Safety Code §11376.5): If you call 911 in good faith for an overdose, you <b>and</b> the person who overdosed are protected from charges for <b>being under the influence</b> or <b>having a small amount of drugs for personal use</b>. It does <b>not</b> cover selling or giving drugs, or driving under the influence. The point: <b>call.</b></div>`,
      qs: [
        { t: 'mc', q: 'What does the Good Samaritan law protect?', opts: ['People who call 911 for an overdose, from charges for being under the influence or personal-use possession', 'People who sell drugs', 'Drunk drivers', 'Nothing'], a: 0 },
        { t: 'mc', q: 'Where can you get naloxone?', opts: ['Pharmacies and many stores, with no prescription needed', 'Only in hospitals', 'Only with a doctor’s note', 'Nowhere'], a: 0 },
        { t: 'mc', q: 'Why stay with someone after naloxone works?', opts: ['It can wear off before the fentanyl does', 'To take their phone', 'You don’t need to stay', 'So they can sleep'], a: 0 }
      ] },
    { name: 'Learn: Refusal Skills', icon: '🛑', mins: 4,
      html: `<div class="flipgrid">${[['🙅', 'Say no clearly', '“No thanks.” Short and strong.'], ['💬', 'Give a reason', '“I have a game tomorrow.” “My parents drug-test.”'], ['🔄', 'Suggest something else', '“Let’s go get tacos instead.”'], ['🚪', 'Leave', 'Walk away. Call or text for a ride.'], ['🔁', 'Broken record', 'Keep repeating “No, I’m good.”'], ['📱', 'Get backup', 'Have a code word with a parent or friend.']].map(([e, h, p]) => `<div class="flip on" style="cursor:default"><div style="font-size:28px">${e}</div><b>${h}</b><div style="font-weight:600">${p}</div></div>`).join('')}</div>` },
    { name: 'Scenarios: Hold Your Ground', icon: '🎭', mins: 10,
      scen: [
        { who: 'Best friend', s: '“Come on, it’s my birthday. Just one with me. Please?”', o: [['“Happy birthday! I’m not taking anything, but let’s go get cake.”', 2, 'You kept the friendship AND your no.'], ['“Fine, it’s your birthday.”', 0, 'A special day doesn’t make fake pills safer.'], ['“Maybe later.”', 1, 'Better to be clear.']] },
        { who: 'Older student', s: '“You’re such a baby. Everyone does this.”', o: [['“Not everyone. I’m good.” Then walk away.', 2, 'Most teens do NOT use drugs. Walking away is powerful.'], ['Take it to prove them wrong.', 0, 'That’s exactly what pressure is designed to do.'], ['Insult them back.', 1, 'Standing up is good, but insults can escalate things. Leaving is safer.']] },
        { who: 'Partner', s: '“If you really cared about me, you’d try it with me.”', o: [['“I do care, and that’s why I’m saying no. I don’t want either of us getting hurt.”', 2, 'Caring about someone includes keeping them safe. Guilt-tripping is a red flag.'], ['Try it to keep them happy.', 0, 'Pressure from a partner is still pressure.'], ['Ignore the message.', 1, 'Better to be clear, and talk to a trusted adult if it keeps happening.']] },
        { who: 'Group chat', s: '“who’s tryna get some percs for friday 👀”', o: [['Don’t join in, and text a parent your code word or talk to a trusted adult.', 2, 'You avoided the plan and got backup.'], ['Reply “lol maybe.”', 1, 'It may seem harmless, but it keeps you in the plan.'], ['Say “I’m in.”', 0, 'Fake “percs” are one of the most common sources of fentanyl.']] },
        { who: 'Cousin', s: '“It’s not even pills, it’s just weed.” (You’re not sure what it is.)', o: [['“I’m good. You don’t really know what’s in it.”', 2, 'Fentanyl has been found mixed into many drugs. Unknown = unsafe.'], ['Try a little.', 0, 'You can’t know what’s in it.'], ['Ask where it came from.', 1, 'The source can’t guarantee what’s in it.']] }
      ] },
    { name: 'Write: Have Each Other’s Backs', icon: '✍️', mins: 10,
      write: { prompt: 'Write a <b>group-chat message</b> to your friends (at least 60 words). Include: (1) what you’d want everyone to do if someone ever showed signs of an overdose, and (2) how you’ll have each other’s backs if someone offers pills. Write it the way you’d really text, but keep it school-appropriate.', min: 60, frames: ['Hey everyone, real talk…', 'If anyone ever…', 'And if someone offers…'], keys: ['911', 'narcan', 'naloxone', 'good samaritan', 'stay', 'breath', 'no'], checks: ['I included calling 911 and giving naloxone.', 'I included staying with the person.', 'I included at least one refusal strategy.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 5, label: 'Exit ticket',
      qs: [
        { t: 'order', q: 'Put the overdose response in order.', items: ['Check: try to wake them', 'Call 911', 'Give naloxone', 'Second dose after 2–3 minutes if needed', 'Rescue breaths', 'Recovery position and stay'] },
        { t: 'mc', q: 'Which is a sign of an opioid overdose?', opts: ['Blue or gray lips', 'Talking really fast', 'Very hyper', 'Sneezing'], a: 0 },
        { t: 'scale', q: 'NOW how ready do you feel to help someone who might be overdosing?', opts: ['1 · Not at all', '2 · A little', '3 · Pretty ready', '4 · Very ready'], why: 'Compare to your answer at the start!' },
        { t: 'short', q: 'Write the refusal line you would actually use:', min: 6 }
      ] }
  ]
});

FS.addModules(T, ['fen-m1', 'fen-m2']);
})();
