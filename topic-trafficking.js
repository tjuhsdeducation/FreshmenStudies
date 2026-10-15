/* =====================================================================
   🌎 HUMAN TRAFFICKING PREVENTION
   California Healthy Youth Act, Education Code §51934 (human trafficking
   prevention added by AB 1227, 2017): what it is, how common it is, how to reduce
   risk and set boundaries, how social media and apps are used, and how to
   safely get help.
   ✏️ Data tables are near the top of this file so they are easy to update.
   ===================================================================== */
(() => {
const T = 'trafficking', C = '#2b7de9';
const I = (id, d) => FS.item(id, Object.assign({ topic: T }, d));
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const S = 'stroke="#2d2a3e" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"';
const fmt = n => Number(n).toLocaleString('en-US');

/* ---------- DATA ---------- */
/* ILO, Walk Free & IOM, Global Estimates of Modern Slavery (2022 report, 2021 data). People in thousands; rate = per 1,000 people */
const ILO = {
  af: { name: 'Africa', fl: [3819, 2.9], fm: [3189, 2.4], t: [7008, 5.2] },
  am: { name: 'Americas', fl: [3593, 3.5], fm: [1496, 1.5], t: [5089, 5.0] },
  ar: { name: 'Arab States', fl: [886, 5.3], fm: [814, 4.8], t: [1700, 10.1] },
  ap: { name: 'Asia & the Pacific', fl: [15142, 3.5], fm: [14207, 3.3], t: [29349, 6.8] },
  eu: { name: 'Europe & Central Asia', fl: [4137, 4.4], fm: [2287, 2.5], t: [6424, 6.9] }
};
const WORLD_T = { fl: [27577, 3.5], fm: [21993, 2.8], t: [49570, 6.4] };
/* Walk Free, Global Slavery Index 2023 (2021 estimate) */
const USA = { people: 1091000, rate: 3.3 };
/* National Human Trafficking Hotline (Polaris), 2025 */
const HOT = {
  us: { cases: 15085, victims: 21457, sex: 6201, labor: 2400, both: 1607, signals: 52664, allCases: 127938, allVictims: 268723 },
  ca: { cases: 1908, victims: 2841, sex: 974, labor: 296, both: 245, allCases: 18694, allVictims: 34614 },
  states: [['California', 1908, 39.4], ['Texas', 1487, 31.3], ['Florida', 904, 23.4], ['New York', 606, 19.9], ['Washington', 395, 8.0]]  // [state, cases, approx. population in millions]
};
const SRC = {
  ilo: 'ILO, Walk Free & IOM, <i>Global Estimates of Modern Slavery</i> (2022; 2021 data).',
  gsi: 'Walk Free, <i>Global Slavery Index</i> 2023, United States (2021 estimate).',
  unodc: 'UNODC, <i>Global Report on Trafficking in Persons</i> 2024.',
  hot: 'National Human Trafficking Hotline (Polaris), 2025 statistics. Hotline numbers show cases reported to the hotline, not the total amount of trafficking.'
};

FS.topic({
  id: T, name: 'Human Trafficking', short: 'Recognize · Resist · Report', color: C, law: 'CHYA · EC §51934',
  blurb: 'What trafficking is (and isn’t), how it shows up around the world and in California, the warning signs online and in job offers, and how to get help.',
  art: `<svg viewBox="0 0 120 120"><circle cx="58" cy="60" r="38" fill="#7ad7f0" ${S}/><path d="M30 40c10 2 12 10 22 8s6-14 16-16M24 66c8-2 14 4 20 10s4 14 12 16M70 70c6-6 16-4 22-10" fill="none" ${S}/><path d="M34 46c6 0 10 6 16 4M66 76c4 4 10 2 14 6" fill="#14a37f" ${S}/><path d="M86 88c8-6 18-4 22 4-6 8-18 8-22-4z" fill="#ffd166" ${S}/><path d="M92 18l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="#ffd166" ${S}/><circle cx="18" cy="96" r="4" fill="#2b7de9"/></svg>`,
  folders: [
    { name: 'Lesson Plan & Slides', icon: '📋', teacherOnly: true, sub: 'A complete 50-minute lesson with slides.', items: ['ht-plan'] },
    { name: 'Warm-Ups', icon: '☀️', items: ['ht-w1', 'ht-w2', 'ht-w3', 'ht-w4'] },
    { name: 'World Map & Data', icon: '🗺️', sub: 'Explore how trafficking and modern slavery affect the world, the U.S., and California.', items: ['ht-a1', 'ht-a2'] },
    { name: 'Interactive Activities', icon: '🎮', items: ['ht-a3', 'ht-a4', 'ht-a5'] },
    { name: 'Exit Tickets', icon: '🎟️', items: ['ht-e1', 'ht-e2', 'ht-e3'] },
    { name: 'Targets & Standards', icon: '🎯', items: ['ht-std'] },
    { name: 'Printables', icon: '🖨️', teacherOnly: true, items: ['ht-p1', 'ht-p2', 'ht-p3'] },
    { name: 'Links & Hotline', icon: '🔗', items: ['ht-l1', 'ht-l2', 'ht-l3'] }
  ]
});

const INFO = {
  eq: 'What is human trafficking, how does it affect our world and our community, and how can I recognize warning signs and get help?',
  lt: ['define human trafficking using Action–Means–Purpose', 'compare data from the world, the U.S., and California', 'recognize red flags online and in job offers and know how to get help']
};
const STANDARDS = [
  ['EC §51934(a)', 'California Healthy Youth Act (human trafficking prevention added by AB 1227, 2017): information on the prevalence and nature of human trafficking, strategies to reduce risk, techniques to set healthy boundaries, how to safely seek assistance, and how social media and mobile apps are used for trafficking.'],
  ['NHES 2.12.6', 'Evaluate the impact of technology on personal, family, and community health.'],
  ['NHES 3.12.5', 'Determine when professional health services may be required.'],
  ['NHES 3.12.6', 'Access valid and reliable health products and services.'],
  ['NHES 4.12.2', 'Demonstrate refusal, negotiation, and collaboration skills to enhance health and avoid or reduce health risks.'],
  ['NHES 4.12.4', 'Demonstrate how to ask for and offer assistance to enhance the health of self and others.'],
  ['NHES 7.12.3', 'Demonstrate a variety of behaviors to avoid or reduce health risks to self and others.'],
  ['CA Health Framework', 'California Health Education Framework (2019), Grades 9–12: Growth, Development, and Sexual Health; Injury Prevention and Safety.']
];

/* ======================= MAP COMPONENT ======================= */
const RAMP = ['#dbe9fb', '#a9cbf5', '#6ea6ec', '#2b7de9', '#163f80'];
function mapExplorer(el, opts = {}) {
  let mode = 't', metric = 1, sel = null;
  el.innerHTML = `<div class="mapctl" role="group" aria-label="What to show">
     <button class="seg on" data-m="t" type="button">All modern slavery</button><button class="seg" data-m="fl" type="button">Forced labor</button><button class="seg" data-m="fm" type="button">Forced marriage</button>
     <span style="flex:1"></span><button class="seg on" data-x="1" type="button">Per 1,000 people</button><button class="seg" data-x="0" type="button">Number of people</button></div>
   <div class="mapwrap"><svg viewBox="0 0 960 500" role="img" aria-label="World map colored by region"><path class="sphere" d="${window.WORLD_SPHERE}"/><g id="cs">${window.WORLD.map(([n, r, d, us], i) => `<path class="cty${us ? ' us' : ''}" data-r="${r}" data-n="${FS.esc(n)}" ${us ? 'data-us="1"' : ''} d="${d}"><title>${FS.esc(n)}</title></path>`).join('')}</g></svg><div class="maptip" id="tip"></div></div>
   <div class="legend" id="lg"></div>
   <div class="mapinfo"><div class="rinfo" id="ri"></div><div class="rinfo"><h3 style="font-size:1.05rem">Compare (per 1,000 people)</h3><div id="cmp"></div></div></div>
   <p class="cite">Regions: ${SRC.ilo} The ILO reports by region, so every country in a region shares the regional color. United States outline: ${SRC.gsi} The two studies use different methods, so compare carefully.</p>`;
  const paths = $$('path.cty', el), tip = $('#tip', el), wrap = $('.mapwrap', el);
  const val = r => ILO[r][mode][metric];
  const color = () => {
    const order = Object.keys(ILO).sort((x, y) => val(x) - val(y)), shade = {};
    order.forEach((r, i) => shade[r] = RAMP[i]);                       // 5 regions → 5 shades, lowest to highest
    paths.forEach(p => { p.style.fill = shade[p.dataset.r]; p.classList.toggle('on', sel && sel !== 'us' && p.dataset.r === sel); });
    $('#lg', el).innerHTML = `<span>Lowest</span>${order.map(r => `<span style="display:inline-flex;align-items:center;gap:4px;margin-right:6px"><i style="background:${shade[r]}"></i>${ILO[r].name}: ${metric ? val(r) : (val(r) / 1000).toFixed(1) + 'M'}</span>`).join('')}<span>Highest</span><span style="margin-left:6px">· <b style="color:#e0503a">red outline</b> = United States</span>`;
    const rows = Object.entries(ILO).map(([k, v]) => [v.name, v[mode][1], C]).concat([['World', WORLD_T[mode][1], '#5d6577']]);
    if (mode === 't') rows.push(['United States*', USA.rate, '#e0503a']);
    const mx = Math.max(...rows.map(r => r[1]));
    $('#cmp', el).innerHTML = rows.sort((a, b) => b[1] - a[1]).map(([n, v, c]) => `<div class="hbar"><span>${n}</span><span class="tr"><i style="width:${v / mx * 100}%;--bc:${c}"></i><em>${v}</em></span></div>`).join('') + (mode === 't' ? '<p class="cite">*U.S. estimate from the Global Slavery Index, which uses a different method than the ILO regions.</p>' : '');
    info();
  };
  const info = () => {
    const ri = $('#ri', el);
    if (sel === 'us') { ri.innerHTML = `<h3>🇺🇸 United States</h3><div class="nums"><div><b>${fmt(USA.people)}</b><small>people estimated in modern slavery</small></div><div><b>${USA.rate}</b><small>per 1,000 people</small></div><div><b>${fmt(HOT.us.cases)}</b><small>hotline cases (2025)</small></div></div><p style="margin:10px 0 0">The U.S. rate is <b>lower than the world average (${WORLD_T.t[1]})</b>, but with about 335 million people, that’s still more than a million people. Trafficking happens in every state, including California.</p><p class="cite">${SRC.gsi} ${SRC.hot}</p>`; return; }
    if (!sel) { ri.innerHTML = `<h3>🌎 The whole world</h3><div class="nums"><div><b>${(WORLD_T.t[0] / 1000).toFixed(1)}M</b><small>people in modern slavery</small></div><div><b>${(WORLD_T.fl[0] / 1000).toFixed(1)}M</b><small>forced labor</small></div><div><b>${(WORLD_T.fm[0] / 1000).toFixed(1)}M</b><small>forced marriage</small></div></div><p style="margin:10px 0 0"><b>Tap a region</b> (or the U.S.) on the map to see its numbers. About <b>1 in 8</b> people in forced labor are children.</p>`; return; }
    const r = ILO[sel];
    ri.innerHTML = `<h3>${r.name}</h3><div class="nums"><div><b>${(r.t[0] / 1000).toFixed(1)}M</b><small>people total · ${r.t[1]} per 1,000</small></div><div><b>${(r.fl[0] / 1000).toFixed(1)}M</b><small>forced labor · ${r.fl[1]} per 1,000</small></div><div><b>${(r.fm[0] / 1000).toFixed(1)}M</b><small>forced marriage · ${r.fm[1]} per 1,000</small></div></div><p style="margin:10px 0 0">${({ af: 'Africa has the second-highest rate of forced marriage.', am: 'The Americas include the U.S., Canada, Mexico, Central and South America, and the Caribbean.', ar: 'The Arab States have the <b>highest rate</b> (10.1 per 1,000), even though fewer people live there.', ap: 'Asia & the Pacific has the <b>most people</b> in modern slavery: more than half of the world total.', eu: 'Europe & Central Asia has the second-highest rate of forced labor.' })[sel]}</p>`;
  };
  $$('[data-m]', el).forEach(b => b.onclick = () => { mode = b.dataset.m; $$('[data-m]', el).forEach(x => x.classList.toggle('on', x === b)); color(); });
  $$('[data-x]', el).forEach(b => b.onclick = () => { metric = +b.dataset.x; $$('[data-x]', el).forEach(x => x.classList.toggle('on', x === b)); color(); });
  paths.forEach(p => {
    p.onclick = () => { sel = p.dataset.us ? 'us' : p.dataset.r; color(); if (opts.onPick) opts.onPick(sel); };
    p.onmousemove = e => { const b = wrap.getBoundingClientRect(); tip.style.display = 'block'; tip.style.left = (e.clientX - b.left) + 'px'; tip.style.top = (e.clientY - b.top) + 'px'; tip.textContent = p.dataset.n + ' · ' + (p.dataset.us ? 'United States: ' + USA.rate + ' per 1,000*' : ILO[p.dataset.r].name + ': ' + (metric ? val(p.dataset.r) + ' per 1,000' : fmt(val(p.dataset.r) * 1000) + ' people')); };
    p.onmouseleave = () => tip.style.display = 'none';
  });
  color();
}
FS.mapExplorer = mapExplorer;

function bars(rows, color, unit = '') { const mx = Math.max(...rows.map(r => r[1])); return rows.map(([n, v, c]) => `<div class="hbar"><span>${n}</span><span class="tr"><i style="width:${Math.max(3, v / mx * 100)}%;--bc:${c || color}"></i><em>${typeof v === 'number' ? fmt(v) : v}${unit}</em></span></div>`).join(''); }
function dashboard(el) {
  const tabs = {
    world: `<h3>🌎 The world</h3><div class="statgrid"><div class="stat"><b>50 million</b><span>people in modern slavery on any given day (2021)</span></div><div class="stat"><b>28 million</b><span>in forced labor</span></div><div class="stat"><b>22 million</b><span>in forced marriage</span></div><div class="stat"><b>1 in 8</b><span>people in forced labor are children</span></div></div>
      <h4 style="margin-top:12px">Victims <i>detected</i> by authorities (UNODC)</h4><div class="statgrid"><div class="stat"><b>+25%</b><span>more victims detected in 2022 than in 2019</span></div><div class="stat"><b>38%</b><span>of detected victims were children</span></div><div class="stat"><b>+31%</b><span>more child victims detected than in 2019</span></div><div class="stat"><b>156</b><span>countries in the report</span></div></div>
      <p class="cite">${SRC.ilo} ${SRC.unodc}</p>`,
    us: `<h3>🇺🇸 United States</h3><div class="statgrid"><div class="stat"><b>${fmt(USA.people)}</b><span>people estimated in modern slavery (${USA.rate} per 1,000)</span></div><div class="stat"><b>${fmt(HOT.us.cases)}</b><span>hotline cases in 2025</span></div><div class="stat"><b>${fmt(HOT.us.victims)}</b><span>victims involved in those cases</span></div><div class="stat"><b>${fmt(HOT.us.signals)}</b><span>calls, texts, chats & emails to the hotline</span></div></div>
      <h4 style="margin-top:12px">2025 hotline cases by type</h4>${bars([['Sex trafficking', HOT.us.sex], ['Labor trafficking', HOT.us.labor], ['Sex & labor', HOT.us.both]], C)}<p class="cite">Some cases did not list a type. ${SRC.gsi} ${SRC.hot}</p>
      <h4 style="margin-top:12px">States with the most hotline cases (2025)</h4>${bars(HOT.states.map(([s, n]) => [s, n, s === 'California' ? '#e0503a' : C]), C)}`,
    ca: `<h3>🐻 California</h3><div class="statgrid"><div class="stat"><b>#1</b><span>state for hotline cases in 2025</span></div><div class="stat"><b>${fmt(HOT.ca.cases)}</b><span>cases in 2025</span></div><div class="stat"><b>${fmt(HOT.ca.victims)}</b><span>victims involved</span></div><div class="stat"><b>${fmt(HOT.ca.allCases)}</b><span>cases since 2007</span></div></div>
      <h4 style="margin-top:12px">2025 California cases by type</h4>${bars([['Sex trafficking', HOT.ca.sex], ['Labor trafficking', HOT.ca.labor], ['Sex & labor', HOT.ca.both]], '#e0503a')}
      <h4 style="margin-top:12px">Hotline cases per 1 million people (2025)</h4>${bars(HOT.states.map(([s, n, p]) => [s, Math.round(n / p), s === 'California' ? '#e0503a' : C]), C)}
      <p class="note" style="margin-top:10px">🤔 California has the <b>most</b> cases, but it also has the <b>most people</b>. Per million people, several states are close. More cases can also mean more people know to call the hotline.</p><p class="cite">${SRC.hot} Populations are approximate (U.S. Census estimates, millions).</p>`
  };
  el.innerHTML = `<div class="dtabs">${[['world', '🌎 World'], ['us', '🇺🇸 United States'], ['ca', '🐻 California']].map(([k, n], i) => `<button class="seg ${i ? '' : 'on'}" type="button" data-t="${k}">${n}</button>`).join('')}</div><div id="tb"></div>`;
  const show = k => { $('#tb', el).innerHTML = tabs[k]; $$('[data-t]', el).forEach(b => b.classList.toggle('on', b.dataset.t === k)); };
  $$('[data-t]', el).forEach(b => b.onclick = () => show(b.dataset.t)); show('world');
}

/* ======================= LESSON PLAN ======================= */
I('ht-plan', {
  kind: 'plan', title: 'Human Trafficking: Recognize, Resist, Report', mins: 50, icon: '🌎',
  desc: 'Myth vs fact, the Action–Means–Purpose definition, the world map data jigsaw, online red flags, and how to get help. 13 slides.',
  eq: INFO.eq,
  targets: ['I can define human trafficking using Action, Means, and Purpose.', 'I can compare trafficking data for the world, the U.S., and California.', 'I can recognize red flags in online messages and job offers.', 'I can name safe ways to get help for myself or a friend.'],
  criteria: ['I can explain why any minor in commercial sex is a trafficking victim, even without force.', 'I can use one number from the map or dashboard to support a claim.', 'I can sort red flags vs. healthy behavior and name the hotline.'],
  materials: ['Projector + this site (World Map & Data folder)', 'Student devices (1 per pair is fine)', 'Data Detective worksheet (Printables) if devices are limited', 'Hotline wallet cards (Printables)'],
  before: 'Keep it non-graphic: focus on recognizing patterns and getting help, not on stories of abuse. A student in your class could be affected. Review mandated reporting and your counselor referral process. Avoid stereotypes about who traffickers or victims are (any gender, age, race, or background).',
  standards: STANDARDS,
  steps: [
    { tm: '0–5 min', name: 'Warm-up: Myth or Fact?', do: '<p>Students vote, then you flip the cards. Ask: “Where did you learn the myths?” (movies, TV, social media).</p>', use: ['ht-w1'] },
    { tm: '5–15', name: 'What is it? Action–Means–Purpose', do: '<p>Slides 3–6. <b>Human trafficking</b> = using <b>force, fraud, or coercion</b> to make someone work or perform commercial sex. Teach A–M–P: <b>Action</b> (recruit, transport, hide, or obtain a person), <b>Means</b> (force, fraud, coercion), <b>Purpose</b> (labor or commercial sex).</p><p><b>Key exception:</b> under U.S. law, anyone under 18 involved in commercial sex is a victim of trafficking. Force, fraud, or coercion do <b>not</b> have to be proven.</p><p>Smuggling ≠ trafficking: smuggling is about crossing a border; trafficking is about exploitation and can happen without moving anyone.</p>', say: 'Most people are not kidnapped. Most are tricked or pressured by someone they know or trust.' },
    { tm: '15–27', name: 'Data jigsaw: world vs U.S. vs California', do: '<p>Groups of 3: one explores the <b>World Map</b>, one the <b>U.S.</b> tab, one the <b>California</b> tab of the dashboard. Each finds 2 facts and 1 question, then teaches the group. Whole class: “Why does California have the most hotline cases?”</p>', use: ['ht-a1', 'ht-a2'] },
    { tm: '27–38', name: 'Red flags online & in job offers', do: '<p>Slides 9–10. Common recruitment patterns: a new online “friend” or partner who moves too fast, gifts and promises, asks for secrecy, isolates you from family, or asks for photos. Job offers that are too good to be true, pay in cash, or take your ID or phone. Students complete the red flag sort.</p>', use: ['ht-a4', 'ht-w2'] },
    { tm: '38–45', name: 'What would you do? + getting help', do: '<p>Scenarios in pairs. Emphasize: tell a trusted adult; call or text the hotline (<b>1-888-373-7888</b> or text <b>233733</b>); call <b>911</b> for immediate danger. Hand out wallet cards.</p>', use: ['ht-a5', 'ht-p3'] },
    { tm: '45–50', name: 'Exit ticket', do: '<p>Students complete an exit ticket. Remind them about the anonymous question box.</p>', use: ['ht-e1', 'ht-e2'] }
  ],
  slides: [
    { k: 'Freshmen Studies · Health', h: 'Human Trafficking: Recognize, Resist, Report', b: `<p>Essential Question: <b>${INFO.eq}</b></p>` },
    { k: 'Ground rules', h: 'How we talk today', b: '<ul><li>Respect: this could affect people in this room</li><li>No names or stories about other people</li><li>You can pass</li><li>Questions? Use the anonymous question box</li></ul>', tn: 'Remind students where to get support: counselor, trusted adult, 988.' },
    { k: 'Definition', h: 'What is human trafficking?', b: '<p>Using <b>force, fraud, or coercion</b> to make a person work or perform commercial sex.</p><p>It’s about <b>control and exploitation</b>. It does <b>not</b> require moving someone across a border.</p>' },
    { k: 'A · M · P', h: 'Action + Means + Purpose', b: '<div class="twoc"><div><ul><li><b>Action:</b> recruits, transports, hides, or obtains a person</li><li><b>Means:</b> force, fraud (lies), or coercion (threats, debts, control)</li><li><b>Purpose:</b> labor/services or commercial sex</li></ul></div><div><p><b>Under 18?</b> Any minor in commercial sex is a trafficking victim. No force, fraud, or coercion has to be proven.</p></div></div>' },
    { k: 'Two types', h: 'Sex trafficking & labor trafficking', b: '<div class="twoc"><div><b>Labor trafficking</b><ul><li>Farms, factories, restaurants, cleaning, domestic work, construction</li><li>Debts that can never be paid off, IDs taken away</li></ul></div><div><b>Sex trafficking</b><ul><li>Often starts online or with a “boyfriend/girlfriend”</li><li>Gifts, then pressure, then control</li></ul></div></div>' },
    { k: 'Myth vs Fact', h: 'Who is affected?', b: '<ul><li>Any gender, age, race, or background</li><li>Traffickers are often <b>someone the person knows</b>: a partner, friend, family member, or employer</li><li>Many victims are <b>not</b> locked up; they are controlled by fear, debt, or shame</li></ul>' },
    { k: 'The world', h: '50 million people', b: '<div class="twoc"><div><div class="bigstat">50M</div><p>people in modern slavery (forced labor + forced marriage), 2021</p></div><div><ul><li>28 million in forced labor</li><li>22 million in forced marriage</li><li>1 in 8 in forced labor are children</li></ul><p style="opacity:.8">ILO, Walk Free & IOM (2022)</p></div></div>', tn: 'Now open the World Map in the Map & Data folder.' },
    { k: 'U.S. & California', h: 'It happens here too', b: '<ul><li>U.S.: about <b>1.1 million</b> people estimated in modern slavery (Global Slavery Index 2023)</li><li>2025: <b>15,085</b> cases reported to the National Human Trafficking Hotline</li><li><b>California had the most cases</b> of any state: 1,908</li></ul><p style="opacity:.8">Hotline cases are only the cases people reported, not every case.</p>' },
    { k: 'Red flags', h: 'Online red flags', b: '<ul><li>Someone you just met says “I love you” fast or showers you with gifts</li><li>Asks you to keep the relationship <b>secret</b></li><li>Pressures you for photos, or to meet in person alone</li><li>Tries to cut you off from friends and family</li><li>Offers money, a place to stay, or a “modeling” gig</li></ul>' },
    { k: 'Red flags', h: 'Job offer red flags', b: '<ul><li>Too much money for too little work</li><li>No interview, no paperwork, “pay in cash only”</li><li>Employer keeps your <b>ID, passport, or phone</b></li><li>You owe a “debt” for travel or housing that keeps growing</li><li>You can’t quit or leave</li></ul>' },
    { k: 'Healthy boundaries', h: 'Protect yourself', b: '<ul><li>Keep accounts private; don’t share location</li><li>Don’t meet online contacts alone; tell someone where you’ll be</li><li>Trust your gut. “No” is a full sentence</li><li>Never give anyone your ID or passwords</li></ul>' },
    { k: 'Get help', h: 'Who can I tell?', b: '<ul><li>A trusted adult: parent, counselor, teacher, coach</li><li><b>National Human Trafficking Hotline: 1-888-373-7888</b> · text <b>233733</b> · 24/7, many languages</li><li><b>911</b> if someone is in immediate danger</li></ul>' },
    { k: 'Exit ticket', h: 'Show what you know', b: '<p>Open <b>Exit Tickets</b> on the site. Questions? Use the anonymous question box.</p>' }
  ]
});

/* ======================= WARM-UPS ======================= */
I('ht-w1', {
  kind: 'warm', title: 'Myth or Fact? Human Trafficking', mins: 5, icon: '🤔', desc: 'Six flip cards to challenge movie-style ideas about trafficking.',
  run: el => FS.flipWarm(el, {
    big: 'Myth or fact? 👍 = FACT, 👎 = MYTH', cards: [
      { front: 'Most trafficking victims are kidnapped by strangers.', tag: 'myth', back: 'Most are recruited by someone they know or trust (a partner, friend, family member, or employer) through lies and pressure.' },
      { front: 'Trafficking only happens in other countries.', tag: 'myth', back: 'It happens in all 50 states. California had the most cases reported to the national hotline in 2025.' },
      { front: 'Boys and men can be trafficked.', tag: 'fact', back: 'Anyone can be trafficked, of any gender, age, or background.' },
      { front: 'Trafficking requires moving someone across a border.', tag: 'myth', back: 'That’s smuggling. Trafficking is about exploitation and can happen in a person’s own hometown.' },
      { front: 'A job on a farm or in a restaurant can be trafficking.', tag: 'fact', back: 'Labor trafficking happens in agriculture, restaurants, cleaning, construction, domestic work, and more.' },
      { front: 'Traffickers use social media and apps to find teens.', tag: 'fact', back: 'Recruiters use DMs, games, and dating apps to build trust, then pressure or trick. California law requires this to be taught.' }
    ]
  })
});
I('ht-w2', {
  kind: 'warm', title: 'Too Good to Be True? Job Ad', mins: 5, icon: '💼', desc: 'Students find the red flags in a fake job post.',
  run: el => {
    el.innerHTML = `<div class="warm"><div class="kick">Warm-up · Spot the red flags</div><div class="big">Would you apply? Find at least 3 red flags.</div>
     <div class="scn" style="max-width:560px;margin:0 auto;text-align:left"><div class="who">📱 Posted 2 hours ago · @dreamjobs_LA</div><div class="bubble" style="max-width:none">🌟 HIRING TEENS 15+ 🌟 Travel & “promo model” work! Make <b data-f="1">$2,000 a WEEK</b> 💰 <b data-f="2">No experience, no interview</b>. We cover <b data-f="3">travel & housing</b> (you pay us back later). <b data-f="4">Paid in cash only.</b> <b data-f="5">Don’t tell your parents yet</b>, it’s a surprise opportunity! <b data-f="6">DM me a photo</b> to apply 📸</div></div>
     <div class="btnrow" style="justify-content:center"><button class="btn" type="button" id="rv">Reveal the red flags</button></div>
     <div class="reveal note" id="rvb"><ol><li><b>Way too much money</b> for no experience.</li><li><b>No interview or paperwork</b>: real employers check age and work permits.</li><li><b>“Pay us back later”</b>: a debt that can be used for control.</li><li><b>Cash only</b>: no records, no protections.</li><li><b>Secrecy</b> from parents is a major red flag.</li><li><b>Asking a teen for photos</b>.</li></ol></div></div>`;
    $('#rv', el).onclick = () => { $('#rvb', el).classList.add('on'); $$('[data-f]', el).forEach(b => { b.style.background = '#ffd6d0'; b.style.color = '#7a1b0c'; b.style.borderRadius = '4px'; b.style.padding = '0 3px'; }); };
  }
});
I('ht-w3', {
  kind: 'warm', title: 'Agree or Disagree: Who Gets Trafficked?', mins: 5, icon: '↔️', desc: 'Four statements with class tallies and fact reveals.',
  run: el => FS.tallyWarm(el, {
    kick: 'Agree or Disagree', rounds: [
      { s: 'It couldn’t happen to anyone I know.', fact: 'Traffickers target people who need something: money, a place to stay, love, or belonging. That can be anyone, anywhere.' },
      { s: 'If someone could leave, it isn’t trafficking.', fact: 'Many victims aren’t locked up. They’re controlled by <b>threats, debt, shame, fear of police or immigration, or love</b> for the trafficker.' },
      { s: 'A 16-year-old who “agrees” to trade sex for money is not a trafficking victim.', fact: 'Under U.S. law, <b>any minor</b> involved in commercial sex is a trafficking victim. No force has to be proven.' },
      { s: 'Being in the U.S. makes trafficking less likely than in most of the world.', fact: 'On average, yes: the U.S. estimate is <b>3.3 per 1,000</b> people vs. <b>6.4</b> worldwide. But that’s still about <b>1.1 million people</b> in the U.S.' }
    ]
  })
});
I('ht-w4', {
  kind: 'warm', title: 'Notice & Wonder: The World Map', mins: 5, icon: '🗺️', desc: 'Project the interactive map. Students share one thing they notice and one they wonder.',
  run: el => { el.innerHTML = `<div class="warm"><div class="kick">Warm-up · Notice & Wonder</div><div class="big">What do you <b>notice</b>? What do you <b>wonder</b>?</div><div id="mp"></div><div class="note" style="text-align:left;margin-top:12px"><b>Sentence starters:</b> “I notice that ___ has the highest…” · “I wonder why…” · “I’m surprised that…”</div></div>`; mapExplorer($('#mp', el)); }
});

/* ======================= MAP & DATA ======================= */
I('ht-a1', {
  kind: 'act', title: 'World Map Explorer: Global vs U.S.', mins: 15, icon: '🗺️', wide: true, info: { eq: INFO.eq, lt: ['read a map and data to compare regions of the world', 'compare the U.S. to the world using numbers'] },
  desc: 'An interactive world map. Switch between forced labor and forced marriage, rate vs. number of people, and compare to the U.S.',
  run: (el, ctx) => {
    el.innerHTML = `<div id="mp"></div><h3 style="margin:18px 0 8px">🔎 Data Detective</h3><div id="qz"></div>`;
    mapExplorer($('#mp', el));
    FS.quiz($('#qz', el), [
      { t: 'mc', q: 'Use “Per 1,000 people.” Which region has the <b>highest rate</b> of modern slavery?', opts: ['Arab States', 'Asia & the Pacific', 'Americas', 'Africa'], a: 0, why: 'Arab States: 10.1 per 1,000.' },
      { t: 'mc', q: 'Switch to “Number of people.” Which region has the <b>most people</b> in modern slavery?', opts: ['Asia & the Pacific', 'Arab States', 'Europe & Central Asia', 'Americas'], a: 0, why: 'About 29.3 million people, over half the world total.' },
      { t: 'short', q: 'Why can a region have the <b>highest rate</b> but not the <b>most people</b>? Use numbers from the map.', min: 20, frames: ['The rate is…', 'but the number of people is…', 'This is because…'] },
      { t: 'mc', q: 'Tap the United States. How does its rate compare to the world?', opts: ['Lower than the world (3.3 vs 6.4 per 1,000)', 'Higher than every region', 'Exactly the same', 'There is no trafficking in the U.S.'], a: 0, why: 'Lower, but still about 1.1 million people.' },
      { t: 'short', q: 'One thing that surprised you, and one question you still have:', min: 15 }
    ], { topic: T, type: 'Interactive', title: ctx.title, label: 'Question' });
  }
});
I('ht-a2', {
  kind: 'act', title: 'Data Dashboard: World · U.S. · California', mins: 15, icon: '📊', info: { eq: INFO.eq, lt: ['compare trafficking data for the world, U.S., and California', 'explain what hotline data can and can’t tell us'] },
  desc: 'Three tabs of charts (UNODC, Global Slavery Index, National Hotline) plus data questions.',
  run: (el, ctx) => {
    el.innerHTML = `<div id="db2"></div><h3 style="margin:18px 0 8px">🔎 Read the data</h3><div id="qz"></div>`;
    dashboard($('#db2', el));
    FS.quiz($('#qz', el), [
      { t: 'mc', q: 'World tab: what percent of victims detected by authorities were children?', opts: ['38%', '8%', '75%', '100%'], a: 0 },
      { t: 'mc', q: 'U.S. tab: which type of trafficking had the most hotline cases in 2025?', opts: ['Sex trafficking', 'Labor trafficking', 'They were exactly equal'], a: 0, keep: true, why: '6,201 sex trafficking vs 2,400 labor trafficking cases. Labor trafficking is often under-reported.' },
      { t: 'mc', q: 'California tab: which statement is MOST accurate?', opts: ['California had the most hotline cases, but it also has the most people, so its rate per million is close to other states', 'California has the most trafficking per person of any state', 'California has fewer cases than New York', 'Hotline cases count every trafficking victim'], a: 0 },
      { t: 'short', q: 'The hotline says its numbers “do not reflect prevalence.” What does that mean, and why might some cases never get reported?', min: 20, frames: ['This means…', 'Some cases are not reported because…'] }
    ], { topic: T, type: 'Interactive', title: ctx.title });
  }
});

/* ======================= INTERACTIVE ======================= */
I('ht-a3', {
  kind: 'act', title: 'Is It Trafficking? (A–M–P Check)', mins: 10, icon: '🧩', info: { eq: INFO.eq, lt: ['use Action–Means–Purpose to decide if a situation is trafficking'] },
  desc: 'Students sort 8 short situations into Trafficking or Not trafficking (but still unsafe/unfair) using A–M–P.',
  run: (el, ctx) => {
    el.innerHTML = `<div class="note"><b>A–M–P:</b> <b>Action</b> (recruit, move, hide, obtain) + <b>Means</b> (force, fraud, coercion) + <b>Purpose</b> (labor or commercial sex). <b>Under 18 + commercial sex = trafficking</b>, no force needed.</div><div id="qz"></div>`;
    FS.quiz($('#qz', el), [{
      t: 'sort', q: 'Sort each situation.', bins: [['🚨 Trafficking', 'A + M + P are present (or a minor in commercial sex)', '#e0503a'], ['⚠️ Not trafficking', 'Could still be unfair, unsafe, or illegal', '#2b7de9']],
      cards: [['A boss takes workers’ passports and says they can’t leave until they pay off a travel “debt.”', 0], ['A 15-year-old’s “boyfriend” arranges for her to trade sex for money.', 0], ['A farm worker is threatened with being reported to immigration if he quits.', 0], ['A recruiter promises a hotel job, then forces the person to work for no pay.', 0], ['A manager pays a teen less than minimum wage, but the teen can quit any time.', 1], ['Someone pays a smuggler to cross a border and then goes their own way.', 1], ['A friend pressures you to skip class.', 1], ['A teen works long hours at a family restaurant and gets paid fairly.', 1]]
    }, { t: 'short', q: 'Pick one card you put in “Trafficking.” Name the Action, the Means, and the Purpose.', min: 15, frames: ['Action:', 'Means:', 'Purpose:'] }], { topic: T, type: 'Interactive', title: ctx.title });
  }
});
I('ht-a4', {
  kind: 'act', title: 'Red Flag or Green Flag? Online & Job Offers', mins: 10, icon: '🚩', info: { eq: INFO.eq, lt: ['recognize recruitment red flags online and in job offers'] },
  desc: 'Students sort 10 DMs and job situations into red flags or green flags.',
  run: (el, ctx) => FS.quiz(el, [{
    t: 'sort', q: 'Sort each message or situation.', bins: [['🚩 Red flag', 'Pressure, secrets, isolation, too good to be true', '#d93a2b'], ['✅ Green flag', 'Safe, respectful, transparent', '#2e9b4a']],
    cards: [['“You’re so mature for your age. Don’t tell your parents about us.”', 0], ['“Send me a pic, I’ll make you famous.”', 0], ['An employer says they’ll hold your ID “for safekeeping.”', 0], ['“I’ll pay for your bus ticket. You can pay me back by working.”', 0], ['Someone you met in a game buys you gifts and wants to meet alone.', 0], ['“You don’t need your friends. I’m the only one who gets you.”', 0], ['A job asks for a work permit and has your parent sign forms.', 1], ['A friend online says “No pressure, we can just keep gaming.”', 1], ['A manager gives you a pay stub every two weeks.', 1], ['Your partner is fine with you hanging out with your friends.', 1]]
  }, { t: 'short', q: 'A friend shows you a DM like the red flags above. What would you say to your friend?', min: 15 }], { topic: T, type: 'Interactive', title: ctx.title })
});
I('ht-a5', {
  kind: 'act', title: 'What Would You Do? Scenarios + Safety Plan', mins: 12, icon: '🧭', info: { eq: INFO.eq, lt: ['choose safe ways to respond and get help', 'make a personal safety plan'] },
  desc: 'Four scenarios with feedback, then students write their own safety plan.',
  run: (el, ctx) => {
    const sc = [
      { s: 'Your friend’s new 22-year-old “boyfriend” buys her expensive gifts, picks her up from school, and told her to stop talking to you.', o: [['Tell a trusted adult (a counselor or parent) that you’re worried.', 3, 'Yes. Gifts + isolation + an older partner are warning signs. You don’t have to be sure to ask for help.'], ['Mind your own business.', 0, 'Isolation is how control starts. Your friend may need someone to notice.'], ['Post about it online.', 0, 'That could put your friend in danger. Talk to an adult privately.']] },
      { s: 'An account DMs you a “modeling contract” and asks you to come to an address alone this weekend.', o: [['Don’t go. Block, screenshot, report, and tell an adult.', 3, 'Exactly. Real agencies work with parents and don’t ask teens to meet alone.'], ['Go, but bring a friend.', 1, 'Better than alone, but you still don’t know who this is. Check with an adult first.'], ['Send more photos first.', 0, 'Never send photos to someone you don’t know.']] },
      { s: 'Your cousin works at a farm. The boss keeps his ID and says he owes money for housing that he can never pay off.', o: [['Call or text the National Human Trafficking Hotline with your family.', 3, 'Yes: 1-888-373-7888 or text 233733. It’s confidential and has interpreters.'], ['It’s just a strict boss.', 0, 'Taking IDs and using an unpayable debt are signs of labor trafficking.'], ['Confront the boss yourself.', 0, 'That could be dangerous. Get help from the hotline or police.']] },
      { s: 'You see someone who looks scared, and an adult is answering every question for them and won’t let them talk alone.', o: [['If there’s immediate danger, call 911. Otherwise, call the hotline and describe what you saw.', 3, 'You don’t have to be sure. Trained people will decide next steps.'], ['Walk up and ask “Are you being trafficked?”', 0, 'That could put the person in danger. Report it instead.'], ['Do nothing.', 0, 'Reporting what you noticed can help, even if it turns out to be nothing.']] }
    ];
    let i = 0, pts = 0; const log = [];
    const draw = () => {
      if (i >= sc.length) return plan();
      const s = sc[i];
      el.innerHTML = `<div class="prog"><i style="width:${i / sc.length * 100}%"></i></div><div class="scn"><div class="who">📍 Scenario ${i + 1}</div><div class="bubble">${s.s}</div></div><h3 style="margin:14px 0 8px">What is the BEST response?</h3>
       <div class="opts">${FS.shuffle([0, 1, 2]).map(k => `<button class="opt" type="button" data-k="${k}">${s.o[k][0]}</button>`).join('')}</div><div id="o"></div>`;
      $$('.opt', el).forEach(b => b.onclick = () => {
        const o = s.o[+b.dataset.k]; pts += o[1]; log.push(`S${i + 1}: ${o[0]} (${o[1]}/3)`);
        $$('.opt', el).forEach(x => { x.disabled = true; if (s.o[+x.dataset.k][1] === 3) x.classList.add('right'); }); if (o[1] < 3) b.classList.add('wrong');
        $('#o', el).innerHTML = `<div class="fb ${o[1] === 3 ? 'ok' : 'no'}">${o[2]}</div><div class="btnrow"><button class="btn" id="nx" type="button">${i < sc.length - 1 ? 'Next →' : 'Make my safety plan →'}</button></div>`;
        $('#nx', el).onclick = () => { i++; draw(); };
      });
    };
    const plan = () => {
      el.innerHTML = `<div class="scorebox"><div class="big">${pts} / ${sc.length * 3}</div>safe-choice points</div><h3 style="margin-top:14px">My Safety Plan</h3>
       <div class="qcard"><div class="q">Two trusted adults I could talk to (a role or first name is fine):</div><input class="txt" id="p1"></div>
       <div class="qcard"><div class="q">One thing I will do to stay safe online:</div><input class="txt" id="p2"></div>
       <div class="qcard"><div class="q">The National Human Trafficking Hotline number (type it to remember it):</div><input class="txt" id="p3" placeholder="1-888-…"><div id="p3o"></div></div><div id="fin"></div>`;
      $('#p3', el).oninput = () => { const ok = $('#p3', el).value.replace(/\D/g, '').endsWith('8883737888'); $('#p3o', el).innerHTML = ok ? '<div class="fb ok">✅ That’s it! Or text 233733.</div>' : ''; };
      FS.saveBox($('#fin', el), T, 'Interactive', ctx.title, pts, sc.length * 3, () => log.join('\n') + `\nPLAN: adults: ${$('#p1', el).value} | online: ${$('#p2', el).value} | hotline typed: ${$('#p3', el).value}`);
    };
    draw();
  }
});

/* ======================= EXIT TICKETS ======================= */
I('ht-e1', {
  kind: 'exit', title: 'Exit Ticket: What Is Trafficking?', mins: 5, icon: '🎟️', info: INFO, desc: 'Definition, A–M–P, minors, and smuggling vs trafficking.',
  qs: [
    { t: 'mc', q: 'Which BEST defines human trafficking?', opts: ['Using force, fraud, or coercion to make someone work or perform commercial sex', 'Moving people across a border illegally', 'Any job that pays less than minimum wage', 'Running away from home'], a: 0 },
    { t: 'order', q: 'Put the A–M–P model in order.', items: ['Action: recruit, move, hide, or obtain a person', 'Means: force, fraud, or coercion', 'Purpose: labor or commercial sex'] },
    { t: 'mc', q: 'True or false: if someone under 18 is involved in commercial sex, it is trafficking even if no force was used.', opts: ['True', 'False'], a: 0, keep: true },
    { t: 'short', q: 'Explain one myth about trafficking and the fact that corrects it.', min: 15, frames: ['A myth is…', 'The fact is…'] }
  ]
});
I('ht-e2', {
  kind: 'exit', title: 'Exit Ticket: Red Flags & Getting Help', mins: 5, icon: '🚩', info: INFO, desc: 'Red flags, healthy boundaries, and the hotline.',
  qs: [
    { t: 'ms', q: 'Select ALL the red flags.', opts: ['Asks you to keep the relationship secret', 'Takes your ID “for safekeeping”', 'A job that’s too good to be true', 'Tries to isolate you from friends', 'Respects when you say no'], a: [0, 1, 2, 3] },
    { t: 'mc', q: 'What is the National Human Trafficking Hotline number?', opts: ['1-888-373-7888 (or text 233733)', '1-800-273-8255', '411', '1-800-222-1222'], a: 0, why: '1-800-222-1222 is Poison Control.' },
    { t: 'mc', q: 'Someone is in immediate danger. What should you do?', opts: ['Call 911', 'Post about it', 'Wait and see', 'Confront the person yourself'], a: 0 },
    { t: 'short', q: 'Name one healthy boundary you can set online to protect yourself.', min: 10 }
  ]
});
I('ht-e3', {
  kind: 'exit', title: 'Exit Ticket: Global vs U.S. Data', mins: 6, icon: '🌎', info: INFO, desc: 'A claim-evidence check using the map and dashboard.',
  qs: [
    { t: 'mc', q: 'About how many people worldwide are in modern slavery (forced labor + forced marriage)?', opts: ['50 million', '50 thousand', '5 billion', '500'], a: 0 },
    { t: 'mc', q: 'Compared to the world average, the U.S. estimated rate is…', opts: ['Lower (3.3 vs 6.4 per 1,000)', 'Higher', 'Zero'], a: 0, keep: true },
    { t: 'short', q: '<b>Claim + evidence:</b> “Human trafficking is a problem in California.” Agree or disagree, and support it with at least one number.', min: 25, frames: ['I agree/disagree because…', 'The data shows…', 'This matters because…'] }
  ]
});

/* ======================= TARGETS & STANDARDS ======================= */
I('ht-std', {
  kind: 'info', title: 'Learning Targets & Standards: Human Trafficking', icon: '🎯', desc: 'Essential question, targets, success criteria, NHES standards, and EC §51934.',
  html: `<div class="eqbox"><span class="lbl">Essential Question</span><p>${INFO.eq}</p></div>
   <div class="pgrid"><div class="pbox"><span class="lbl">Learning targets</span><ul><li>I can define human trafficking using Action–Means–Purpose.</li><li>I can compare data for the world, the U.S., and California.</li><li>I can recognize red flags online and in job offers.</li><li>I can name safe ways to get help.</li></ul></div>
   <div class="pbox"><span class="lbl">Success criteria</span><ul><li>I can explain why any minor in commercial sex is a trafficking victim.</li><li>I can support a claim with a number from the data.</li><li>I can name the hotline: 1-888-373-7888 / text 233733.</li></ul></div></div>
   <div class="tablewrap"><table class="std"><tr><th>Code</th><th>Standard</th></tr>${STANDARDS.map(([c, s]) => `<tr><td><b>${c}</b></td><td>${s}</td></tr>`).join('')}</table></div>`
});

/* ======================= PRINTABLES ======================= */
I('ht-p1', {
  kind: 'print', title: 'Data Detective Worksheet', icon: '🔎', desc: 'Paper version of the map and data jigsaw (works with a projected map).',
  html: `<h2>🔎 Data Detective: Global vs U.S. vs California</h2><div class="row"><span class="fill">Name</span><span class="fill">Teacher</span><span class="fill" style="max-width:120px">Date</span></div>
   <table><tr><th style="width:22%">Region</th><th>2 facts (with numbers)</th><th style="width:30%">1 question I have</th></tr>${['🌎 World', '🇺🇸 United States', '🐻 California'].map(r => `<tr><td><b>${r}</b></td><td style="height:110px"></td><td></td></tr>`).join('')}</table>
   <div class="wbox"><h4>Highest RATE vs. MOST PEOPLE: why can those be different regions?</h4><div class="lines"></div></div>
   <div class="wbox"><h4>Why might California have the most hotline cases? (Think: population, awareness, location)</h4><div class="lines"></div></div>
   <div class="wbox"><h4>Claim: “Human trafficking affects my community.” Evidence + reasoning:</h4><div class="lines" style="--h:112px"></div></div>`
});
I('ht-p2', {
  kind: 'print', title: 'Red Flag Sort Cards', icon: '🚩', desc: '12 cut-apart cards for a table sort (Red flag / Green flag).',
  html: `<h2>🚩 Red Flag / ✅ Green Flag Cards</h2><p>Cut apart. Groups sort into two piles, then discuss the hardest card.</p><div class="cards6">${['“Don’t tell your parents about us.”', '“Send me a pic, I’ll make you famous.”', 'Employer keeps your ID', '“You owe me for the bus ticket.”', 'Gifts from someone you just met online', '“I’m the only one who understands you.”', '$2,000/week, no experience, cash only', 'Wants to meet alone, far from home', 'Job asks for a work permit + parent signature', 'Partner is fine with you seeing friends', 'You get a pay stub', '“No pressure. Take your time.”'].map(s => `<div class="pc" style="min-height:110px">${s}</div>`).join('')}</div><p><small>Answer key: first 8 = red flags; last 4 = green flags.</small></p>`
});
I('ht-p3', {
  kind: 'print', title: 'Hotline Wallet Cards', icon: '💳', desc: '10 small cards with the hotline, text line, 911, and 988.',
  html: `<h2>Help Cards</h2><div class="cards6" style="grid-template-columns:repeat(2,1fr)">${Array(10).fill(`<div class="pc" style="min-height:130px;text-align:left;place-items:start"><div><b style="font-size:1.05rem">Need help? You’re not alone.</b><br>National Human Trafficking Hotline<br><b style="font-size:1.2rem">1-888-373-7888</b> · Text <b>233733</b><br>24/7 · confidential · many languages<br>Emergency: <b>911</b> · Talk to someone: <b>988</b></div></div>`).join('')}</div>`
});

/* ======================= LINKS ======================= */
I('ht-l1', { kind: 'link', title: 'National Human Trafficking Hotline', icon: '☎️', url: 'https://humantraffickinghotline.org/', desc: '1-888-373-7888 · text 233733 · live chat. Signs, statistics, and state data.' });
I('ht-l2', { kind: 'link', title: 'UNODC Global Report on Trafficking in Persons', icon: '🌐', url: 'https://www.unodc.org/unodc/data-and-analysis/glotip.html', desc: 'The United Nations report on detected victims worldwide.', teacherOnly: true });
I('ht-l3', { kind: 'link', title: 'Walk Free: Global Slavery Index', icon: '🗺️', url: 'https://www.walkfree.org/global-slavery-index/', desc: 'Country-by-country estimates, including the U.S. study.', teacherOnly: true });
})();
