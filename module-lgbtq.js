/* =====================================================================
   🏳️‍🌈 LGBTQ+ & RESPECT: two full 60-minute lessons
     1) Boxes We’re Put In: Gender Stereotypes
     2) Identity, Respect & Healthy Relationships
   ===================================================================== */
(() => {
const T = 'lgbtq';
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const esc = FS.esc;

/* =================== MODULE 1: BOXES WE'RE PUT IN =================== */
FS.item('lg-m1', {
  kind: 'module', topic: T, mins: 60, icon: '📦', title: 'Lesson 1: Boxes We’re Put In (Gender Stereotypes)',
  desc: 'Hook → where stereotypes come from → Ad Detective simulation → Box Breaker sort → impact on well-being → upstander scenarios → letter writing → exit ticket.',
  info: { eq: 'Where do gender stereotypes come from, and how do they affect people’s choices and well-being?', lt: ['identify gender stereotypes in media and everyday life', 'explain how social expectations pressure people', 'describe how stereotypes can limit self-expression and well-being', 'respond respectfully when I hear a stereotype'] },
  tn: 'Ground rules apply: no names, no stories about others, right to pass. No student is asked to share their own identity.',
  steps: [
    { name: 'Hook: Who Is It For?', icon: '🎣', mins: 5,
      run: (z, done) => {
        const items = ['🍳 Toy kitchen set', '🔧 Tool kit', '🚲 Pink bike', '🔬 Science kit', '🩰 Dance class', '🏈 Football camp', '💅 Nail art kit', '🎮 Video game console'];
        const pick = {};
        z.innerHTML = `<p style="font-weight:700">Quick! Without overthinking: who is each item for?</p><div class="who4">${items.map((t, i) => `<div class="w4row"><span>${t}</span><span class="w4b">${['Boys', 'Girls', 'Anyone'].map(c => `<button class="seg" type="button" data-i="${i}" data-c="${c}">${c}</button>`).join('')}</span></div>`).join('')}</div><div class="btnrow"><button class="btn" type="button" id="rv" disabled>Reveal</button></div><div class="r"></div>`;
        $$('[data-c]', z).forEach(b => b.onclick = () => { pick[b.dataset.i] = b.dataset.c; $$(`[data-i="${b.dataset.i}"]`, z).forEach(x => x.classList.toggle('on', x === b)); $('#rv', z).disabled = Object.keys(pick).length < items.length; });
        $('#rv', z).onclick = () => {
          const any = Object.values(pick).filter(v => v === 'Anyone').length;
          $('#rv', z).remove(); $$('[data-c]', z).forEach(x => x.disabled = true);
          $('.r', z).innerHTML = `<div class="fb info">You picked “Anyone” for <b>${any} of ${items.length}</b>. The truth: <b>every item is for anyone.</b> If your brain sorted some of them fast, that’s normal. We all absorb messages about gender from ads, stores, family, and friends. Today we’ll look at where those messages come from.</div><div class="qcard"><div class="q">Where do you think those quick ideas come from?</div><textarea id="ta"></textarea><div class="btnrow"><button class="btn" type="button" id="sv" disabled>Save</button></div></div>`;
          const ta = $('#ta', z); ta.oninput = () => $('#sv', z).disabled = FS.words(ta.value) < 6;
          $('#sv', z).onclick = () => { ta.readOnly = true; $('#sv', z).remove(); done(1, 1, items.map((t, i) => `${t}: ${pick[i]}`).join(' | ') + `\nWhere ideas come from: ${ta.value.trim()}`); };
        };
      } },
    { name: 'Learn: Roles, Stereotypes & Expression', icon: '📖', mins: 7,
      html: `<div class="pgrid"><div class="pbox"><span class="lbl">Gender roles</span><p>Expectations a culture has about how people “should” act, dress, or what jobs they “should” have, based on gender.</p></div>
        <div class="pbox"><span class="lbl">Stereotype</span><p>An oversimplified belief about a whole group, like “boys don’t cry” or “girls are bad at math.”</p></div>
        <div class="pbox"><span class="lbl">Gender expression</span><p>How someone shows gender on the outside: clothes, hair, voice, name, interests.</p></div></div>
        <h3>Where do stereotypes come from?</h3><p>📺 Media and ads · 👨‍👩‍👧 Family traditions · 🧑‍🤝‍🧑 Friends and classmates · 🌎 Culture and community · 🛒 Stores (“boys’ aisle” / “girls’ aisle”)</p>
        <h3>Why do they matter?</h3><ul><li>They can <b>limit choices</b>: classes, sports, careers, hobbies.</li><li>They create <b>pressure</b>: “man up,” “be pretty,” “don’t be bossy.”</li><li>People who don’t fit the “box” are more likely to be <b>teased or bullied</b>. This often includes LGBTQ+ people, but it can happen to anyone.</li><li>Being told to hide feelings can make it harder to <b>ask for help</b>.</li></ul>`,
      qs: [
        { t: 'mc', q: 'Which is a gender STEREOTYPE?', opts: ['“Boys don’t cry.”', '“Everyone has feelings.”', '“People like different hobbies.”', '“Anyone can be a leader.”'], a: 0 },
        { t: 'mc', q: 'Gender expression means…', opts: ['How a person shows gender on the outside', 'Who someone is attracted to', 'A person’s grades', 'A law about gender'], a: 0 },
        { t: 'ms', q: 'Where can stereotypes come from? (Select all.)', opts: ['Ads and media', 'Family traditions', 'Friends and classmates', 'Store aisles labeled for boys or girls'], a: [0, 1, 2, 3] }
      ] },
    { name: 'Simulation: Ad Detective', icon: '🕵️', mins: 14,
      run: (z, done) => {
        const ADS = [
          { brand: 'TITAN Body Spray 💪', c: '#2b2f3a', seg: [['For ', 0], ['REAL men', 1], [' who ', 0], ['never cry', 1], [', never quit, and ', 0], ['never back down', 1], ['.', 0]], q: { q: 'What message does this ad send?', opts: ['Men must be tough and hide feelings', 'Everyone should smell nice', 'Quitting is always good'], a: 0 } },
          { brand: 'Glow Up Kit ✨', c: '#d94f8a', seg: [['Because ', 0], ['every girl', 1], [' needs to ', 0], ['look perfect', 1], [' ', 0], ['to be liked', 1], ['.', 0]], q: { q: 'What message does this ad send?', opts: ['Girls’ worth depends on looks', 'Skincare is healthy', 'Everyone is liked'], a: 0 } },
          { brand: 'BuildMaster Toolset 🔧', c: '#e08a00', seg: [['The perfect gift for ', 0], ['your son', 1], ['! (', 0], ['Daughters', 1], [': try our ', 0], ['Princess Kitchen', 1], [' 👑)', 0]], q: { q: 'What message does this ad send?', opts: ['Building is for boys, cooking is for girls', 'Tools are expensive', 'Kitchens are fun'], a: 0 } },
          { brand: 'Nurses Week Card 💐', c: '#14a37f', seg: [['Thank you to all the ', 0], ['ladies', 1], [' who care for us!', 0]], q: { q: 'What stereotype is hidden here?', opts: ['That all nurses are women', 'That nurses are kind', 'That flowers are nice'], a: 0 } }
        ];
        let a = 0, found = 0, total = 0, mcPts = 0; const log = [];
        const draw = () => {
          if (a >= ADS.length) { z.innerHTML = `<div class="scorebox"><div class="big">${found + mcPts} / ${total + ADS.length}</div>stereotype phrases found: ${found}/${total} · messages: ${mcPts}/${ADS.length}</div>`; done(found + mcPts, total + ADS.length, log.join('\n')); return; }
          const ad = ADS[a], need = ad.seg.filter(s => s[1]).length;
          z.innerHTML = `<div class="sorthelp">Ad ${a + 1} of ${ADS.length} · Tap every word or phrase that uses a gender stereotype, then press Check.</div>
            <div class="adcard" style="--ad:${ad.c}"><div class="adbrand">${ad.brand}</div><div class="adtext">${ad.seg.map((s, k) => s[1] || s[0].trim().length > 1 ? `<button class="tw" type="button" data-k="${k}">${esc(s[0])}</button>` : esc(s[0])).join('')}</div></div>
            <div class="btnrow"><button class="btn" type="button" id="ck">Check</button></div><div class="r"></div>`;
          $$('.tw', z).forEach(b => b.onclick = () => b.classList.toggle('on'));
          $('#ck', z).onclick = () => {
            let hit = 0, extra = 0;
            $$('.tw', z).forEach(b => { const t = ad.seg[+b.dataset.k][1], on = b.classList.contains('on'); b.disabled = true; if (t && on) { hit++; b.classList.add('hit'); } else if (t) b.classList.add('miss'); else if (on) extra++; });
            found += hit; total += need; $('#ck', z).remove();
            $('.r', z).innerHTML = `<div class="fb ${hit === need ? 'ok' : 'info'}">You found ${hit} of ${need} stereotype phrases${extra ? ` (and tapped ${extra} that weren’t)` : ''}. Missed phrases are outlined.</div><div id="mq"></div>`;
            FS.quiz($('#mq', z), [Object.assign({ t: 'mc' }, ad.q), { t: 'short', q: '✏️ <b>Remix it:</b> rewrite the tagline so it works for <b>anyone</b>.', min: 5 }], { label: 'Ad ' + (a + 1), onFinish: (p, m, arr) => {
              mcPts += arr[0].pts; log.push(`${ad.brand}: found ${hit}/${need}; message ${arr[0].pts ? '✓' : '✗'}; remix: "${arr[1].a}"`);
              $('#mq', z).insertAdjacentHTML('beforeend', `<div class="btnrow"><button class="btn" type="button" id="nx">${a < ADS.length - 1 ? 'Next ad →' : 'See my results'}</button></div>`);
              $('#nx', z).onclick = () => { a++; draw(); };
            } });
          };
        };
        draw();
      } },
    { name: 'Box Breaker', icon: '📦', mins: 8,
      html: '<p>In many cultures, people are handed an invisible “box” of rules about how to act. Sort each statement. Then think about what happens to people who step outside the box.</p>',
      qs: [
        { t: 'sort', q: 'Which box does each expectation come from?', bins: [['“Act like a man” box', '', '#2b7de9'], ['“Act like a lady” box', '', '#d94f8a'], ['🧑 Just human (anyone)', 'True for every person', '#14a37f']],
          cards: [['Don’t cry', 0], ['Be tough', 0], ['Always be the one who pays', 0], ['Be quiet and polite', 1], ['Always look pretty', 1], ['Take care of everyone else first', 1], ['Has feelings', 2], ['Can be strong', 2], ['Can be caring', 2], ['Can be a leader', 2]] },
        { t: 'short', q: 'What can happen to people who step outside these boxes? How might that affect their well-being?', min: 20, frames: ['People who step outside the box might…', 'This could affect their well-being because…'] }
      ] },
    { name: 'Learn: Why Acceptance Matters', icon: '💗', mins: 5,
      html: `<div class="pgrid"><div class="pbox"><span class="lbl">The impact</span><p>When people feel they must fit a box, they may hide who they are, avoid activities they love, or feel alone. LGBTQ+ young people are often targeted for not fitting gender expectations.</p></div>
        <div class="pbox"><span class="lbl">The good news</span><p>The Trevor Project’s 2024 national survey found that LGBTQ+ young people who felt their <b>school was affirming</b>, or who lived in <b>accepting communities</b>, reported <b>better mental health</b>. Respect makes a real difference.</p></div></div>
        <div class="note care">💗 If you or someone you know is struggling, talk to a counselor or trusted adult, call or text <b>988</b>, or contact The Trevor Project (call 1-866-488-7386, or text START to 678-678).</div>`,
      qs: [
        { t: 'mc', q: 'According to the Trevor Project survey, what helps LGBTQ+ young people’s mental health?', opts: ['Affirming schools and accepting communities', 'Hiding who they are', 'Ignoring bullying', 'Nothing helps'], a: 0 },
        { t: 'mc', q: 'Who is affected by gender stereotypes?', opts: ['Everyone: boys, girls, nonbinary, straight, and LGBTQ+ people', 'Only girls', 'Only boys', 'No one'], a: 0 }
      ] },
    { name: 'Scenarios: Be an Upstander', icon: '🦸', mins: 8,
      scen: [
        { who: 'In the locker room', s: 'Someone says to a classmate: “Dude, you dance? That’s so girly.”', o: [['“Dancing takes a ton of strength. Let him do his thing.”', 2, 'You named it calmly and supported your classmate.'], ['Laugh along.', 0, 'Laughing tells everyone the put-down is okay.'], ['Say nothing now, but check on your classmate later.', 1, 'Checking in is kind. Speaking up in the moment (when safe) helps even more.']] },
        { who: 'Group project', s: '“Let the girls take notes. Guys will do the presenting.”', o: [['“Let’s split roles by what people want to do, not by gender.”', 2, 'Fair and respectful, and it gets the best out of everyone.'], ['Go along with it.', 0, 'This limits everyone’s chances to grow.'], ['Complain to the teacher later.', 1, 'Okay, but you could also suggest a fair way right now.']] },
        { who: 'Online comments', s: 'Under a video of a guy wearing nail polish, people are posting mean comments.', o: [['Post something supportive or report the bullying comments.', 2, 'Upstanders online make a difference, too.'], ['Add a joke.', 0, 'Piling on hurts real people.'], ['Scroll past.', 1, 'Not adding to it is good. Reporting is even better.']] },
        { who: 'Hallway', s: 'A friend says, “That’s so gay,” about a boring assignment.', o: [['“Can we not use ‘gay’ to mean bad? It’s about real people.”', 2, 'Short and respectful. It helps your friend see the impact.'], ['“You’re so dumb.”', 0, 'Insults usually make people defensive.'], ['Ignore it.', 1, 'Easy, but speaking up changes what feels normal.']] }
      ] },
    { name: 'Write: Letter to a 6th Grader', icon: '✍️', mins: 8,
      write: { prompt: 'Write a short letter to a <b>6th grader</b> (real or imagined) about one gender stereotype they might hear. Explain why it isn’t true, how it can hurt people, and how they can handle it. <i>You do not have to share anything personal.</i>', min: 60, frames: ['Dear 6th grader,', 'You might hear people say…', 'That isn’t true because…', 'If you hear it, you can…'], keys: ['stereotype', 'box', 'pressure', 'respect', 'anyone', 'upstander', 'feelings'], checks: ['I named a specific stereotype.', 'I explained how it can hurt people.', 'I gave advice for handling it respectfully.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 5, label: 'Exit ticket',
      qs: [
        { t: 'mc', q: 'Which statement is a stereotype?', opts: ['“Girls aren’t good at sports.”', '“Practice builds skill.”', '“People have different interests.”'], a: 0 },
        { t: 'short', q: 'Explain ONE way a gender stereotype can affect a person’s choices or well-being.', min: 15 },
        { t: 'mc', q: 'The MOST respectful response to “Real men don’t cry” is…', opts: ['“Everyone has feelings. Crying is human.”', 'Laugh', '“Toughen up.”', 'Say it louder'], a: 0 }
      ] }
  ]
});

/* =================== MODULE 2: IDENTITY, RESPECT & RELATIONSHIPS =================== */
FS.item('lg-m2', {
  kind: 'module', topic: T, mins: 60, icon: '🤝', title: 'Lesson 2: Identity, Respect & Healthy Relationships',
  desc: 'Hook → the four layers of identity → Identity Layers Explorer → name & pronoun practice → relationship spectrum → helping a friend → respect pledge → exit ticket.',
  info: { eq: 'How can I show respect for every person’s identity and recognize healthy relationships for everyone?', lt: ['tell the difference between sex assigned at birth, gender identity, gender expression, and sexual orientation', 'use respectful language, including names and pronouns', 'recognize healthy, unhealthy, and abusive behaviors in any relationship', 'name ways to support a friend and get help'] },
  tn: 'Students build a FICTIONAL character in Step 3. No one should be asked about their own identity or orientation.',
  steps: [
    { name: 'Hook: What’s in a Name?', icon: '🎣', mins: 5,
      html: '<p>Your name is one of the first things people learn about you. Think about a time someone <b>said your name wrong</b>, used a <b>nickname you didn’t like</b>, or <b>remembered your name</b> when you didn’t expect it. (Or, if you’d rather, write about how anyone might feel.)</p>',
      qs: [{ t: 'short', q: 'How does it feel when people get your name right, or wrong? Why do names matter?', min: 15 }] },
    { name: 'Learn: Four Different Layers', icon: '🧅', mins: 8,
      html: `<p>These are four <b>separate</b> parts of who someone is. Knowing one doesn’t tell you the others.</p>
        <div class="layers"><div style="--lc:#ee7d1c"><b>🩺 Sex assigned at birth</b><span>The sex (female, male, or intersex) a doctor records at birth, usually based on a baby’s body.</span></div>
        <div style="--lc:#8a54e0"><b>🧠 Gender identity</b><span>A person’s inner sense of their gender, such as girl/woman, boy/man, or nonbinary. Only the person can know it. <i>Transgender</i> people have a gender identity different from their sex assigned at birth; <i>cisgender</i> people’s match.</span></div>
        <div style="--lc:#2b7de9"><b>👕 Gender expression</b><span>How someone shows gender on the outside: clothes, hair, voice, name, pronouns.</span></div>
        <div style="--lc:#14a37f"><b>❤️ Sexual orientation</b><span>Who someone is emotionally, romantically, and/or physically attracted to, such as straight, gay, lesbian, bisexual, or asexual.</span></div></div>`,
      qs: [
        { t: 'sort', q: 'Which layer does each example describe?', bins: [['🩺 Sex assigned at birth', '', '#ee7d1c'], ['🧠 Gender identity', '', '#8a54e0'], ['👕 Gender expression', '', '#2b7de9'], ['❤️ Sexual orientation', '', '#14a37f']],
          cards: [['“It’s a girl!” on a birth announcement', 0], ['Born intersex', 0], ['Knowing inside that you’re a boy', 1], ['Being nonbinary', 1], ['Wearing a suit or a dress', 2], ['Using they/them pronouns', 2], ['Being bisexual', 3], ['Having a crush on someone of the same gender', 3]] }
      ] },
    { name: 'Simulation: Identity Layers Explorer', icon: '🧩', mins: 8,
      run: (z, done) => {
        const L = [['sab', '🩺 Sex assigned at birth', ['Female', 'Male', 'Intersex']], ['gi', '🧠 Gender identity', ['Girl / woman', 'Boy / man', 'Nonbinary', 'Still figuring it out']], ['ge', '👕 Gender expression (pick any)', ['Hoodie', 'Dress', 'Makeup', 'Buzz cut', 'Long hair', 'Nail polish', 'Sports jersey', 'Earrings'], true], ['so', '❤️ Sexual orientation', ['Attracted to girls/women', 'Attracted to boys/men', 'Attracted to more than one gender', 'Not attracted to anyone (asexual)', 'Not sure yet']]];
        const v = { ge: new Set() };
        z.innerHTML = `<p style="font-weight:700">Build a <b>fictional</b> character. Each layer is chosen separately. Try mixing them in different ways!</p>
          <label class="pbox" style="display:block;margin-bottom:10px"><span class="lbl">Character’s name</span><input class="txt" id="cn" maxlength="20" placeholder="e.g. Jordan"></label>
          ${L.map(([k, t, o, multi]) => `<div class="pbox" style="margin-bottom:8px"><span class="lbl">${t}</span><div class="mapctl" style="margin:0">${o.map(x => `<button class="seg" type="button" data-l="${k}" data-v="${esc(x)}" ${multi ? 'aria-pressed="false"' : ''}>${x}</button>`).join('')}</div></div>`).join('')}
          <div id="card"></div><div id="qz"></div>`;
        const render = () => {
          const ok = v.sab && v.gi && v.ge.size && v.so && $('#cn', z).value.trim();
          $('#card', z).innerHTML = `<div class="ccard"><h3>${esc($('#cn', z).value.trim() || 'Your character')}</h3>${L.map(([k, t]) => `<div><span>${t.split(' (')[0]}</span><b>${k === 'ge' ? [...v.ge].join(', ') || '…' : v[k] || '…'}</b></div>`).join('')}</div>${ok ? '<div class="fb ok">🎉 Notice: you chose every layer <b>separately</b>. Knowing how someone dresses doesn’t tell you their identity or who they like. Real people are the same way.</div>' : ''}`;
          if (ok && !$('#qz', z).innerHTML) FS.quiz($('#qz', z), [
            { t: 'mc', q: 'Riley wears makeup and dresses. What can you tell about Riley’s sexual orientation?', opts: ['Nothing. Expression doesn’t tell you orientation', 'Riley likes boys', 'Riley likes girls'], a: 0 },
            { t: 'mc', q: 'Marcus is the football captain. Can you tell his gender identity or sexual orientation from that?', opts: ['No. Interests don’t tell you either one', 'Yes, he must be straight', 'Yes, he must be cisgender'], a: 0 },
            { t: 'mc', q: 'Sam is nonbinary. Does that tell you who Sam is attracted to?', opts: ['No. Gender identity and sexual orientation are separate', 'Yes'], a: 0, keep: true }
          ], { label: 'Explorer', onFinish: (p, m, arr) => done(p, m, `Character: ${$('#cn', z).value} | ${v.sab} | ${v.gi} | ${[...v.ge].join(', ')} | ${v.so}\n` + arr.map((x, i) => `${i + 1}. ${x.a}`).join('\n')) });
        };
        $$('[data-l]', z).forEach(b => b.onclick = () => {
          const k = b.dataset.l;
          if (k === 'ge') { v.ge.has(b.dataset.v) ? v.ge.delete(b.dataset.v) : v.ge.add(b.dataset.v); b.classList.toggle('on'); b.setAttribute('aria-pressed', b.classList.contains('on')); }
          else { v[k] = b.dataset.v; $$(`[data-l="${k}"]`, z).forEach(x => x.classList.toggle('on', x === b)); }
          render();
        });
        $('#cn', z).oninput = render; render();
      } },
    { name: 'Practice: Names & Pronouns', icon: '🗣️', mins: 6,
      html: '<p>Using someone’s name and pronouns is basic respect, like pronouncing their name correctly. Mistakes happen. What matters is how you respond.</p>',
      qs: [
        { t: 'mc', q: 'Alex uses <b>they/them</b>. “Alex left ___ backpack in the gym, so I texted ___.”', opts: ['their / them', 'his / him', 'her / her', 'its / it'], a: 0 },
        { t: 'mc', q: 'Mia uses <b>she/her</b>. “___ is running for class president.”', opts: ['She', 'They', 'He'], a: 0 },
        { t: 'mc', q: 'Jordan uses <b>he/him</b>. “I’m going to ask ___ to join our team.”', opts: ['him', 'her', 'them'], a: 0 },
        { t: 'mc', q: 'You accidentally use the wrong pronoun for a classmate. What’s the BEST response?', opts: ['Quickly correct yourself (“sorry, they”) and keep going', 'Make a big deal and apologize ten times', 'Pretend it didn’t happen and keep using the wrong one', 'Argue that it doesn’t matter'], a: 0, why: 'A quick correction shows respect without making the moment awkward.' },
        { t: 'mc', q: 'You’re not sure what pronouns someone uses. What can you do?', opts: ['Use their name, or politely ask in private', 'Guess based on their clothes', 'Ask in front of the whole class'], a: 0 }
      ] },
    { name: 'Relationship Spectrum', icon: '🚦', mins: 12,
      html: `<p>Every relationship (friendship or dating, any genders) falls somewhere on a spectrum:</p><div class="spectrum"><div style="--sc:#2e9b4a"><b>✅ Healthy</b><span>Respect, trust, honesty, equality, privacy, space to be yourself</span></div><div style="--sc:#e08a00"><b>⚠️ Unhealthy</b><span>Poor communication, jealousy, pressure, one person making most decisions</span></div><div style="--sc:#d93a2b"><b>🛑 Abusive</b><span>Control, threats, isolation, put-downs, violence, forcing anything</span></div></div><p class="cite">Framework: love is respect (National Domestic Violence Hotline). Signs are the same for every couple.</p>`,
      qs: [
        { t: 'sort', q: 'Place each behavior on the spectrum.', bins: [['✅ Healthy', '', '#2e9b4a'], ['⚠️ Unhealthy', '', '#e08a00'], ['🛑 Abusive', '', '#d93a2b']],
          cards: [['Maya and her girlfriend Jordan support each other’s goals', 0], ['Alex respects his boyfriend Sam saying “not yet”', 0], ['Kai and Ren talk calmly after an argument', 0], ['Chris sulks every time his girlfriend hangs out with friends', 1], ['Taylor’s partner sends 30 “where are you?” texts a day', 1], ['Dev always decides what the couple does', 1], ['Riley threatens to “out” their partner if they break up', 2], ['Jasmine’s partner checks her phone and controls who she talks to', 2], ['Nico’s partner shoves him when angry', 2]] },
        { t: 'mc', q: 'True or false: the signs of a healthy relationship are the same for same-sex and different-sex couples.', opts: ['True', 'False'], a: 0, keep: true },
        { t: 'mc', q: 'Where can teens get confidential help with a relationship?', opts: ['love is respect: text LOVEIS to 22522 or call 1-866-331-9474, or a trusted adult', 'Nowhere', 'Only the police', 'Social media'], a: 0 }
      ] },
    { name: 'Scenarios: Support a Friend', icon: '🤝', mins: 7,
      scen: [
        { who: 'Your best friend', s: '“I need to tell you something… I’m gay. You’re the first person I’ve told.”', o: [['“Thank you for trusting me. I’m here for you. Who else knows, so I don’t accidentally share?”', 2, 'You showed support AND respected their privacy. Coming out is their story to tell.'], ['Tell your other friends so they can be supportive too.', 0, 'Sharing someone’s identity without permission (“outing”) can hurt and even endanger them.'], ['“Are you sure?”', 1, 'It may come from curiosity, but it can feel like doubt. Lead with support.']] },
        { who: 'Your friend', s: '“My partner gets really mad if I don’t answer right away. They say it’s because they love me.”', o: [['“That sounds controlling, not loving. You deserve respect. Want to talk to a counselor or text love is respect?”', 2, 'Constant checking is a warning sign. You named it kindly and offered help.'], ['“That’s just how relationships are.”', 0, 'Healthy relationships include trust and space.'], ['“Break up with them right now!”', 1, 'Your concern is valid, but pushing can make friends pull away. Offer support and resources.']] },
        { who: 'Class discussion', s: 'A classmate says, “Same-sex couples aren’t real relationships.”', o: [['“The signs of a healthy relationship are the same for every couple. Respect is respect.”', 2, 'Calm, factual, and respectful.'], ['Yell at them.', 0, 'That usually shuts down learning.'], ['Stay silent.', 1, 'Sometimes that feels safest. You could also talk to the teacher after class.']] }
      ] },
    { name: 'Write: Our Respect Pledge', icon: '✍️', mins: 10,
      write: { prompt: 'Write a <b>Respect Pledge</b> for our school. Include <b>3 specific commitments</b> (things you will do or say) that help everyone, including LGBTQ+ students, feel respected and safe. Then explain why it matters.', min: 50, frames: ['I commit to…', 'I will also…', 'When I hear…, I will…', 'This matters because…'], keys: ['respect', 'name', 'pronoun', 'upstander', 'healthy', 'privacy', 'kind'], checks: ['I wrote 3 specific commitments.', 'At least one is about names, pronouns, or language.', 'I explained why respect matters.'] } },
    { name: 'Exit Ticket', icon: '🎟️', mins: 4, label: 'Exit ticket',
      qs: [
        { t: 'mc', q: 'Who someone is attracted to is their…', opts: ['Sexual orientation', 'Gender expression', 'Gender identity', 'Sex assigned at birth'], a: 0 },
        { t: 'mc', q: 'Which is a sign of an ABUSIVE relationship?', opts: ['Threatening to share someone’s secrets', 'Talking calmly after an argument', 'Having separate friends', 'Asking before posting a photo'], a: 0 },
        { t: 'short', q: 'A friend tells you something private about their identity. What will you do?', min: 10 }
      ] }
  ]
});

FS.addModules(T, ['lg-m1', 'lg-m2']);
})();
