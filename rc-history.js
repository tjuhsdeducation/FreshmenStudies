/* =====================================================================
   ✏️ READING CHECKS: US HISTORY + WORLD HISTORY
   Each activity: RC["id"] = { subject, title, eq, target, sources, qs }.
   Link to one with:  reading-check.html?id=THE-ID
   Question types (points in parentheses):
     mc     one answer                                   (1)
     multi  select all / select N (need:2)               (2, 1 if one off)
     ebsr   Part A + Part B                              (1 + 1)
     inline drop-downs in a sentence, [[]] = a blank     (1 per blank)
     grid   table match, rows: [text, correct column]    (1 per row)
     num    type a number (tol = allowed error)          (1)
     order  put items in order (list them correctly)     (2, 1 if half right)
   Answers count from 0: a:0 = A, a:1 = B, a:2 = C ...
   ===================================================================== */

/* ---------- original cartoons (drawn for this site in period style) ---------- */
const RC_TOON = (function () {
  const tent = d => `<path d="${d}" stroke="#1b1a17" stroke-width="14" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#cfc3a3" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  const octopus = `<svg class="toon" viewBox="0 0 640 410" role="img" aria-label="Cartoon A: A giant octopus wearing a top hat with a dollar sign is labeled THE TRUST. Its tentacles wrap around the U.S. Capitol, a ballot box labeled VOTES, a steel mill, an oil derrick, and a railroad train. A tiny man labeled THE PUBLIC looks up at it.">
    <rect class="paperf" width="640" height="410"/>
    <text x="320" y="28" text-anchor="middle" font-size="22">“WHO REALLY RUNS THINGS?”</text>
    <path class="ink" d="M10 360 H630"/>
    <!-- steel mill -->
    <rect class="inks" x="35" y="238" width="16" height="62"/><rect class="inks" x="80" y="252" width="16" height="48"/>
    <circle class="inkp" cx="47" cy="222" r="11"/><circle class="inkp" cx="60" cy="206" r="14"/><circle class="inkp" cx="92" cy="236" r="9"/>
    <rect class="inks" x="22" y="298" width="112" height="62"/><text x="78" y="336" text-anchor="middle" font-size="17">STEEL</text>
    <!-- oil derrick -->
    <path class="ink" d="M150 360 L176 248 L202 360 M156 334 H196 M162 306 H190 M168 280 H184 M150 360 L190 306 M202 360 L162 306"/>
    <text x="176" y="384" text-anchor="middle" font-size="15">OIL</text>
    <!-- the public -->
    <circle class="inkp" cx="226" cy="322" r="7"/><path class="ink" d="M226 329 V346 M226 346 L218 360 M226 346 L234 360 M226 334 L216 326 M226 334 L236 326"/>
    <text x="226" y="402" text-anchor="middle" font-size="12">THE PUBLIC</text>
    <!-- ballot box -->
    <rect class="inkp" x="250" y="318" width="64" height="42"/><path class="ink" d="M266 330 H298"/><text x="282" y="353" text-anchor="middle" font-size="13">VOTES</text>
    <text x="282" y="384" text-anchor="middle" font-size="13">BALLOT BOX</text>
    <!-- railroad -->
    <rect class="inks" x="338" y="324" width="58" height="26"/><rect class="inkd" x="394" y="306" width="28" height="44"/><rect class="inkd" x="348" y="306" width="11" height="18"/>
    <circle class="inkp" cx="356" cy="356" r="8"/><circle class="inkp" cx="381" cy="356" r="8"/><circle class="inkp" cx="408" cy="356" r="8"/>
    <text x="382" y="384" text-anchor="middle" font-size="13">RAILROADS</text>
    <!-- Capitol -->
    <rect class="inkp" x="445" y="258" width="170" height="90"/><path class="inkp" d="M440 258 L530 228 L620 258 Z"/>
    <path class="ink" d="M462 266 V340 M482 266 V340 M502 266 V340 M522 266 V340 M542 266 V340 M562 266 V340 M582 266 V340 M600 266 V340"/>
    <rect class="inks" x="438" y="346" width="184" height="14"/>
    <rect class="inkp" x="488" y="196" width="84" height="32"/><path class="inkp" d="M488 196 A42 42 0 0 1 572 196 Z"/><rect class="inkp" x="523" y="140" width="14" height="16"/><path class="ink" d="M530 140 V126 M530 126 L544 131 L530 136"/>
    <text x="530" y="384" text-anchor="middle" font-size="15">U.S. CAPITOL</text>
    <!-- tentacles -->
    ${tent("M236 168 C170 168 118 196 96 240 C88 262 64 262 70 246")}
    ${tent("M250 198 C214 222 196 250 186 282 C178 302 164 298 168 286")}
    ${tent("M292 212 C284 258 300 292 292 312 C286 326 262 326 266 314")}
    ${tent("M322 210 C344 256 372 280 378 318 C382 336 406 338 400 322")}
    ${tent("M346 200 C402 238 432 276 472 296 C500 310 520 290 502 280")}
    ${tent("M352 172 C420 146 470 132 520 162 C560 182 574 206 540 214")}
    <!-- octopus head + hat -->
    <ellipse cx="300" cy="150" rx="80" ry="62" fill="#cfc3a3" stroke="#1b1a17" stroke-width="2.6"/>
    <rect class="inkf" x="248" y="86" width="104" height="9" rx="3"/><rect class="inkf" x="268" y="36" width="64" height="52" rx="3"/>
    <text x="300" y="74" text-anchor="middle" font-size="26" style="fill:#fbf6e9">$</text>
    <circle class="inkp" cx="276" cy="134" r="9"/><circle class="inkf" cx="279" cy="135" r="4"/><circle class="inkp" cx="324" cy="134" r="9"/><circle class="inkf" cx="321" cy="135" r="4"/>
    <path class="ink" d="M260 118 L288 127 M340 118 L312 127 M284 186 Q300 196 318 183"/>
    <text x="300" y="170" text-anchor="middle" font-size="19">THE TRUST</text>
  </svg>`;

  const flag = `<svg class="toon" viewBox="0 0 640 420" role="img" aria-label="Cartoon B: A giant Uncle Sam strides across the ocean and plants an American flag on an island labeled PHILIPPINES. Behind his back he hides a scroll labeled Declaration of Independence, consent of the governed. He says: We are here to help, whether you like it or not. Three small island residents say: Nobody asked us.">
    <rect class="paperf" width="640" height="420"/>
    <text x="320" y="28" text-anchor="middle" font-size="22">PLANTING THE FLAG</text>
    <path class="ink" d="M10 322 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 M30 352 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 M10 384 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0"/>
    <!-- island -->
    <path class="inks" d="M372 312 Q500 222 636 312 Z"/>
    <text x="520" y="302" text-anchor="middle" font-size="15">PHILIPPINES</text>
    <path class="ink" d="M598 290 Q602 252 610 214"/><path class="ink" d="M610 214 q-26 -6 -40 10 M610 214 q-20 -20 -44 -16 M610 214 q8 -24 28 -26 M610 214 q22 -6 30 12"/>
    <g>
      <circle class="inkp" cx="478" cy="236" r="6"/><path class="ink" d="M478 242 V256 M478 256 L472 266 M478 256 L484 266 M478 247 L470 254 M478 247 L486 254"/>
      <circle class="inkp" cx="502" cy="232" r="6"/><path class="ink" d="M502 238 V252 M502 252 L496 262 M502 252 L508 262 M502 243 L494 250 M502 243 L510 250"/>
      <circle class="inkp" cx="526" cy="236" r="6"/><path class="ink" d="M526 242 V256 M526 256 L520 266 M526 256 L532 266 M526 247 L518 254 M526 247 L534 254"/>
    </g>
    <ellipse class="inkp" cx="560" cy="168" rx="72" ry="24"/><path class="inkp" d="M520 186 L506 220 L540 190"/><text x="560" y="174" text-anchor="middle" font-size="15">“Nobody asked us.”</text>
    <!-- legs (striped) -->
    <path d="M282 222 L232 312" stroke="#1b1a17" stroke-width="16" stroke-linecap="round"/><path d="M282 222 L232 312" stroke="#fbf6e9" stroke-width="11" stroke-linecap="round"/><path d="M282 222 L232 312" stroke="#1b1a17" stroke-width="11" stroke-dasharray="5 6"/>
    <path d="M300 222 L398 290" stroke="#1b1a17" stroke-width="16" stroke-linecap="round"/><path d="M300 222 L398 290" stroke="#fbf6e9" stroke-width="11" stroke-linecap="round"/><path d="M300 222 L398 290" stroke="#1b1a17" stroke-width="11" stroke-dasharray="5 6"/>
    <ellipse class="inkf" cx="226" cy="316" rx="18" ry="8"/><ellipse class="inkf" cx="406" cy="292" rx="18" ry="8"/>
    <!-- coat -->
    <path class="inkd" d="M266 140 L314 140 L326 228 L304 216 L292 230 L280 216 L256 228 Z"/>
    <path class="ink" d="M290 142 V214"/>
    <!-- scroll behind back -->
    <path class="ink" d="M268 150 L236 190"/>
    <rect class="inkp" x="132" y="176" width="108" height="64" rx="4"/><circle class="inkp" cx="132" cy="208" r="8"/><circle class="inkp" cx="240" cy="208" r="8"/>
    <text x="186" y="194" text-anchor="middle" font-size="10">DECLARATION OF</text><text x="186" y="206" text-anchor="middle" font-size="10">INDEPENDENCE</text>
    <text x="186" y="222" text-anchor="middle" font-size="10" font-style="italic">“...consent of</text><text x="186" y="234" text-anchor="middle" font-size="10" font-style="italic">the governed”</text>
    <!-- arm + flag -->
    <path class="ink" d="M312 150 L408 132"/>
    <path class="ink" d="M404 96 L446 300" stroke-width="3.4"/>
    <path class="inkp" d="M404 96 L466 104 L462 142 L410 134 Z"/><path class="ink" d="M407 110 L464 117 M409 122 L463 129"/><rect class="inks" x="406" y="98" width="20" height="16"/>
    <!-- head + hat -->
    <circle class="inkp" cx="290" cy="120" r="20"/><circle class="inkf" cx="297" cy="116" r="2.5"/><path class="ink" d="M282 134 L290 160 L298 134"/>
    <rect class="inkp" x="266" y="44" width="48" height="56"/><rect class="inks" x="266" y="82" width="48" height="11"/><text x="290" y="92" text-anchor="middle" font-size="10">★ ★ ★</text>
    <rect class="inkf" x="254" y="98" width="72" height="7" rx="3"/>
    <!-- speech -->
    <ellipse class="inkp" cx="130" cy="92" rx="118" ry="40"/><path class="inkp" d="M222 112 L262 120 L230 98"/>
    <text x="130" y="88" text-anchor="middle" font-size="15">“We’re here to help—</text><text x="130" y="108" text-anchor="middle" font-size="15">whether you like it or not!”</text>
  </svg>`;

  const dominoes = (() => {
    const names = [["AUSTRIA-", "HUNGARY"], ["SERBIA"], ["RUSSIA"], ["GERMANY"], ["FRANCE"], ["BRITAIN"]], ang = [26, 18, 11, 6, 2, 0];
    let g = "";
    names.forEach((n, i) => {
      const x = 96 + i * 88, w = 68, h = 124, y = 300 - h;
      g += `<g transform="rotate(${ang[i]} ${x + w} 300)"><rect class="inkp" x="${x}" y="${y}" width="${w}" height="${h}" rx="7"/><path class="ink" d="M${x + 8} ${y + 62} H${x + w - 8}"/>
        ${n.map((t, j) => `<text x="${x + w / 2}" y="${y + 26 + j * 15 + (n.length === 1 ? 7 : 0)}" text-anchor="middle" font-size="${t.length > 6 ? 10 : 12}">${t}</text>`).join("")}
        <circle class="inkf" cx="${x + 20}" cy="${y + 84}" r="4"/><circle class="inkf" cx="${x + 44}" cy="${y + 84}" r="4"/><circle class="inkf" cx="${x + 32}" cy="${y + 102}" r="4"/></g>`;
    });
    return `<svg class="toon" viewBox="0 0 640 360" role="img" aria-label="Cartoon C: A row of dominoes labeled Austria-Hungary, Serbia, Russia, Germany, France, and Britain. A hand labeled Sarajevo, June 28, 1914 pushes the first domino, and the others begin to fall.">
      <rect class="paperf" width="640" height="360"/>
      <text x="320" y="30" text-anchor="middle" font-size="22">“ONE PUSH IS ALL IT TAKES”</text>
      <path class="ink" d="M10 300 H630"/>${g}
      <rect class="inks" x="0" y="196" width="76" height="30"/><path class="inkp" d="M76 200 h22 a6 6 0 0 1 0 12 h-22 z"/><path class="inkp" d="M76 212 h12 a6 6 0 0 1 0 12 h-12 z"/>
      <text x="6" y="244" font-size="11">SARAJEVO,</text><text x="6" y="258" font-size="11">JUNE 28, 1914</text>
      <text x="320" y="336" text-anchor="middle" font-size="15" font-style="italic">Europe, summer 1914</text>
    </svg>`;
  })();
  return { octopus, flag, dominoes };
})();

/* =============================== US HISTORY =============================== */
RC["us-cartoons"] = {
  subject: "US History", mins: 10,
  title: "Reading Political Cartoons: Trusts and Empire",
  blurb: "Decode symbols, labels, exaggeration, and irony in two Gilded Age cartoons.",
  eq: "How do cartoonists use images to make an argument?",
  target: "I can identify a cartoonist’s tools and explain the cartoon’s point of view using details as evidence.",
  sources: [
    { tab: "How to Read a Cartoon", title: "How to Read a Political Cartoon", numbered: true, blocks: [
      { p: "A political cartoon is an argument made with a picture. Cartoonists want to change your mind about an issue, so every detail is a choice. To read one, first <b>observe</b> what is in the picture, then <b>identify</b> the issue and the people or groups shown, and finally <b>interpret</b> the cartoonist’s opinion." },
      { p: "Cartoonists use a small set of tools. <b>Symbolism</b> means using an object to stand for a bigger idea, such as Uncle Sam for the United States. <b>Labeling</b> means writing words on objects so readers know what they represent. <b>Exaggeration</b> means drawing something much bigger, smaller, or more extreme than real life to make a point. <b>Irony</b> means showing a gap between what someone says or believes and what is really happening." },
      { p: "In the late 1800s, a few huge companies called <b>trusts</b> controlled entire industries such as oil, steel, and railroads. Critics said trusts crushed competition, raised prices, and used their money to influence lawmakers. In 1890 Congress passed the <b>Sherman Antitrust Act</b> to outlaw monopolies that blocked fair competition, and Progressive reformers later pushed the government to enforce it." },
      { p: "In 1898 the United States won the Spanish-American War and took control of Puerto Rico, Guam, and the Philippines. Many Filipinos wanted independence and fought against U.S. rule. At home, the <b>Anti-Imperialist League</b>, whose members included Mark Twain and Jane Addams, argued that ruling other people without their consent went against the Declaration of Independence." },
      { vocab: [["Trust", "a group of companies combined to control an industry"], ["Monopoly", "complete control of a product or industry by one company"], ["Imperialism", "a strong nation taking control of weaker lands"]] }
    ]},
    { tab: "Cartoon A", blocks: [
      { fig: RC_TOON.octopus, paper: true, cap: "Cartoon A. Original cartoon drawn for this activity in the style of early-1900s magazine cartoons about trusts." },
      { box: "📝 Tip: choose 📝 Note, then click on the cartoon to pin your own notes (for example, “symbol?” or “label!”)." }
    ]},
    { tab: "Cartoon B", blocks: [
      { fig: RC_TOON.flag, paper: true, cap: "Cartoon B. Original cartoon drawn for this activity in the style of 1899 newspaper cartoons about the Philippines." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "In Cartoon A, what does the octopus most likely <b>symbolize</b>?",
      opts: ["The U.S. Navy protecting the country", "Giant business trusts that control many industries", "Labor unions organizing factory workers", "Immigrants arriving in American cities"], a: 1,
      why: "The octopus is labeled “THE TRUST,” wears a top hat with a dollar sign, and grips steel, oil, and railroads, the industries trusts controlled." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> details from Cartoon A best show that the cartoonist thinks trusts have too much power over <b>government</b>?",
      opts: ["A tentacle wraps around the U.S. Capitol", "A tentacle grips the steel mill", "A tentacle holds the ballot box labeled VOTES", "The octopus wears a top hat", "Smoke rises from the factory"], a: [0, 2],
      why: "The Capitol (where Congress makes laws) and the ballot box (elections) both stand for government. The steel mill and top hat show business and wealth, not government." },
    { t: "grid", q: "Match each detail to the cartoonist’s tool it shows.", cols: ["Symbolism", "Labeling", "Exaggeration", "Irony"],
      rows: [["The words “THE TRUST” are written on the octopus.", 1], ["An octopus stands for a giant company.", 0], ["The octopus is drawn huge, towering over the U.S. Capitol.", 2], ["Uncle Sam hides “consent of the governed” while taking over an island.", 3]],
      why: "Labels are written words. A symbol stands for an idea. Exaggeration changes size or scale. Irony shows a gap between ideals and actions." },
    { t: "ebsr", ref: 3,
      A: { q: "What is the main point of Cartoon B?", opts: ["Americans all agreed that the U.S. should take the Philippines.", "Taking the Philippines went against America’s own ideals of self-government.", "The people of the Philippines asked the United States to rule them.", "The U.S. Navy was too weak to control islands far from home."], a: 1 },
      B: { q: "Which detail from Cartoon B <b>best</b> supports your answer to Part A?", opts: ["Uncle Sam’s hat has stars on it.", "Uncle Sam hides the Declaration of Independence, which says “consent of the governed,” behind his back.", "A palm tree grows on the island.", "Uncle Sam’s legs are striped."], a: 1 },
      why: "Hiding the Declaration (and its idea that government needs the people’s consent) while islanders say “Nobody asked us” shows the cartoonist thinks the U.S. is breaking its own principles." },
    { t: "mc", ref: 1, q: "Based on the reading, which group in 1899 would <b>most likely</b> agree with Cartoon B?",
      opts: ["The Anti-Imperialist League", "Owners of the largest trusts", "Supporters of a bigger overseas empire", "The Spanish government"], a: 0,
      why: "Paragraph 4: the Anti-Imperialist League argued that ruling people without their consent went against the Declaration of Independence." },
    { t: "inline", ref: 1, q: "Complete the sentence.",
      text: "The cartoonist of Cartoon A would most likely support [[]], such as the [[]].",
      blanks: [{ opts: ["laws that break up monopolies", "lower taxes on large companies", "ending all elections"], a: 0 }, { opts: ["Homestead Act", "Sherman Antitrust Act", "Chinese Exclusion Act"], a: 1 }],
      why: "A cartoonist who shows trusts strangling government wants them limited. The Sherman Antitrust Act (1890) outlawed monopolies that blocked competition." },
    { t: "mc", ref: 3, q: "Uncle Sam says, “We’re here to help—whether you like it or not!” Why is this an example of <b>irony</b>?",
      opts: ["Uncle Sam is drawn much larger than the islanders.", "Helping someone usually respects their wishes, but Uncle Sam ignores what the islanders want.", "The words are written inside a speech bubble.", "The flag has stars and stripes on it."], a: 1,
      why: "Irony is a gap between words and reality. He claims to help but ignores the people he says he is helping." }
  ]
};

RC["us-ww1"] = {
  subject: "US History", mins: 10,
  title: "World War I: Causes and Effects",
  blurb: "Use a text, a graph, and a cartoon to explain how one assassination became a world war.",
  eq: "How did a single assassination turn into a world war, and what did the war leave behind?",
  target: "I can explain the causes and effects of World War I using evidence from a text, a graph, and a cartoon.",
  sources: [
    { tab: "Text", title: "The Powder Keg of Europe", numbered: true, blocks: [
      { p: "By 1914, Europe was often called a “powder keg,” ready to explode. Historians remember four long-term causes with the letters <b>M.A.I.N.</b> <b>Militarism</b> was the build-up of large armies and navies, such as the race between Germany and Britain to build the biggest battleships. <b>Alliances</b> were promises to defend one another: France, Russia, and Britain formed the Triple Entente, while Germany and Austria-Hungary stood together. <b>Imperialism</b> was the competition for colonies in Africa and Asia. <b>Nationalism</b> was intense pride in one’s nation, including the wish of many Serbs to free Bosnia from Austria-Hungary." },
      { p: "The spark came on June 28, 1914, when a Bosnian Serb nationalist named Gavrilo Princip assassinated Archduke Franz Ferdinand, heir to the throne of Austria-Hungary, in the city of Sarajevo. Austria-Hungary blamed Serbia and declared war on July 28." },
      { p: "Because of the alliance system, the conflict spread in days. Russia mobilized to protect Serbia. Germany declared war on Russia on August 1 and on France on August 3, then invaded neutral Belgium. Britain declared war on Germany on August 4. A local conflict had become a world war." },
      { p: "The United States stayed neutral at first. German submarines sank the British passenger ship <i>Lusitania</i> in 1915, killing 128 Americans. In early 1917 Germany restarted <b>unrestricted submarine warfare</b>, attacking ships without warning, and the British revealed the <b>Zimmermann Telegram</b>, a secret German message asking Mexico to join the war against the U.S. in exchange for Texas, New Mexico, and Arizona. Congress declared war on Germany in April 1917." },
      { p: "The war ended in November 1918. The <b>Treaty of Versailles</b> (1919) forced Germany to accept blame for the war, pay huge <b>reparations</b>, give up land and colonies, and limit its army to 100,000 soldiers. The Austro-Hungarian, Ottoman, Russian, and German empires collapsed, and new nations such as Poland and Czechoslovakia appeared. Many Germans saw the treaty as deeply unfair, and that anger helped extremist leaders win support in the years ahead." }
    ]},
    { tab: "Graph", blocks: [
      { fig: RCG.bar({ title: "Defense Spending, 1870 vs. 1914", cats: ["Germany", "Britain", "France", "Russia"], values: true,
          legend: "right", series: [{ vals: [11, 23, 22, 22], cls: "s3", label: "1870" }, { vals: [111, 77, 57, 88], cls: "s1", label: "1914" }],
          y: { min: 0, max: 120, step: 20, label: "Millions of British pounds" }, alt: "Bar graph. Germany: 11 million pounds in 1870, 111 million in 1914. Britain: 23 to 77. France: 22 to 57. Russia: 22 to 88." }),
        cap: "Figure 1. Approximate yearly defense spending of four great powers (rounded). Source: A. J. P. Taylor, <i>The Struggle for Mastery in Europe</i> (1954)." }
    ]},
    { tab: "Cartoon C", blocks: [
      { fig: RC_TOON.dominoes, paper: true, cap: "Cartoon C. Original cartoon drawn for this activity in the style of 1914 cartoons about the alliance system." }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Match each example to the M.A.I.N. cause it shows.", cols: ["Militarism", "Alliances", "Imperialism", "Nationalism"],
      rows: [["Germany and Britain race to build the biggest battleships.", 0], ["Russia promises to protect Serbia.", 1], ["European nations compete for colonies in Africa.", 2], ["Serbs want Bosnia free from Austria-Hungary.", 3]],
      why: "See paragraph 1: each letter of M.A.I.N. is defined with an example." },
    { t: "mc", ref: 2, q: "According to Figure 1, which country’s defense spending grew the <b>most</b> between 1870 and 1914?",
      opts: ["Britain", "France", "Germany", "Russia"], a: 2, why: "Germany rose from about 11 to 111 million pounds, an increase of about 100 million and roughly 10 times larger." },
    { t: "ebsr",
      A: { q: "What does Cartoon C suggest about why the war spread so quickly?", opts: ["Each country carefully decided on its own whether to fight.", "Alliances linked countries, so one country’s war pulled in its partners one after another.", "Britain started the war by invading Germany.", "Only Austria-Hungary and Serbia ended up fighting."], a: 1 },
      B: { q: "Which sentence from the text <b>best</b> supports your answer to Part A?", opts: ["“Imperialism was the competition for colonies in Africa and Asia.”", "“Because of the alliance system, the conflict spread in days.”", "“The war ended in November 1918.”", "“The United States stayed neutral at first.”"], a: 1 },
      why: "Like falling dominoes, alliance promises pulled one country after another into the war (paragraph 3)." },
    { t: "order", ref: 1, q: "Put these events in the order they happened (first at the top).",
      items: ["Archduke Franz Ferdinand is assassinated in Sarajevo.", "Austria-Hungary declares war on Serbia.", "Germany declares war on Russia.", "Britain declares war on Germany.", "The Zimmermann Telegram is revealed.", "The United States declares war on Germany."],
      why: "June 28, 1914 → July 28 → August 1 → August 4 → early 1917 → April 1917." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> events pushed the United States to enter the war in 1917?",
      opts: ["Germany restarted unrestricted submarine warfare.", "The Treaty of Versailles was signed.", "Germany asked Mexico to attack the U.S. in the Zimmermann Telegram.", "Archduke Franz Ferdinand was assassinated.", "Poland became an independent nation."], a: [0, 2],
      why: "Paragraph 4: submarine attacks and the Zimmermann Telegram led Congress to declare war in April 1917." },
    { t: "inline", ref: 1, q: "Complete the summary of the Treaty of Versailles.",
      text: "The treaty forced Germany to accept [[]] and pay [[]]. Many Germans felt the treaty was [[]], which later helped [[]].",
      blanks: [{ opts: ["blame for the war", "a new king", "control of France"], a: 0 }, { opts: ["reparations", "tariffs to Austria", "nothing at all"], a: 0 }, { opts: ["fair", "unfair", "too weak"], a: 1 }, { opts: ["extremist leaders gain support", "the League of Nations grow stronger", "Germany add colonies"], a: 0 }],
      why: "Paragraph 5: war guilt, reparations, and resentment that extremists used later." },
    { t: "mc", ref: 1, q: "Which was an <b>effect</b> of World War I?",
      opts: ["The alliance system was created.", "Old empires collapsed and new nations such as Poland formed.", "Franz Ferdinand became emperor of Austria-Hungary.", "Germany built a larger navy than Britain."], a: 1,
      why: "Paragraph 5: the Austro-Hungarian, Ottoman, Russian, and German empires collapsed, and new nations appeared. The other choices are causes or did not happen." }
  ]
};

RC["us-ww2"] = {
  subject: "US History", mins: 10,
  title: "World War II: Causes and Effects",
  blurb: "Connect a graph, a data table, and a timeline to explain the road to war.",
  eq: "How did the problems left by World War I lead to an even bigger war?",
  target: "I can use data and a text to explain the causes and effects of World War II.",
  sources: [
    { tab: "Text", title: "From One War to the Next", numbered: true, blocks: [
      { p: "World War I did not bring lasting peace. Germans resented the Treaty of Versailles, and the League of Nations had no army to stop countries that broke the rules." },
      { p: "Then the <b>Great Depression</b> began in 1929. Banks failed and factories closed around the world. In Germany, millions lost their jobs. Desperate voters turned to leaders who promised to restore jobs and national pride. Adolf Hitler and his Nazi Party blamed Germany’s problems on the treaty and on Jewish people, and Hitler became chancellor in January 1933. He soon ended democracy in Germany." },
      { p: "Dictators in Germany, Italy, and Japan began to take land by force (see the timeline). Britain and France followed a policy of <b>appeasement</b>, giving in to an aggressor’s demands to avoid war. At the Munich Conference in 1938 they allowed Germany to take part of Czechoslovakia. Six months later Hitler took the rest. When Germany invaded Poland on September 1, 1939, Britain and France declared war." },
      { p: "The United States passed Neutrality Acts to stay out of the fighting, but in 1941 it began sending weapons and supplies to Britain through <b>Lend-Lease</b>. On December 7, 1941, Japan attacked the U.S. naval base at Pearl Harbor, Hawaii. The next day Congress declared war on Japan, and a few days later Germany and Italy declared war on the United States." },
      { p: "World War II was the deadliest war in history. In the Holocaust, Nazi Germany murdered six million Jewish people and millions of others. The war ended in 1945 after the United States dropped atomic bombs on Hiroshima and Nagasaki. Afterward, nations created the <b>United Nations</b> to keep the peace, and the U.S. and the Soviet Union became rival superpowers in the <b>Cold War</b>. At home, millions of women had joined the workforce, and the GI Bill helped returning soldiers go to college and buy homes." }
    ]},
    { tab: "Data", blocks: [
      { fig: RCG.line({ title: "Unemployment in Germany, 1928–1938", x: { min: 1928, max: 1938, step: 1, label: "Year", every: 2 }, y: { min: 0, max: 6, step: 1, label: "Unemployed (millions)" },
          series: [{ pts: [[1928, 1.4], [1929, 1.9], [1930, 3.1], [1931, 4.5], [1932, 5.6], [1933, 4.8], [1934, 2.7], [1935, 2.2], [1936, 1.6], [1937, 0.9], [1938, 0.4]], cls: "s2", dots: true }],
          alt: "Line graph of German unemployment. 1928: 1.4 million, 1929: 1.9, 1930: 3.1, 1931: 4.5, 1932: 5.6 (the peak), 1933: 4.8, 1934: 2.7, 1935: 2.2, 1936: 1.6, 1937: 0.9, 1938: 0.4." }),
        cap: "Figure 1. Yearly average number of unemployed workers in Germany (rounded)." },
      { table: { cap: "Table 1. Nazi Party share of the vote in national (Reichstag) elections.", head: ["Election", "Nazi Party vote"], rows: [["May 1928", "2.6%"], ["September 1930", "18.3%"], ["July 1932", "37.3%"], ["November 1932", "33.1%"], ["March 1933", "43.9%"]] } }
    ]},
    { tab: "Timeline", blocks: [
      { table: { cap: "Table 2. Acts of aggression in the 1930s.", head: ["Year", "Event"], rowHead: true, rows: [["1931", "Japan invades Manchuria in northern China."], ["1935", "Italy invades Ethiopia."], ["1936", "German troops march into the Rhineland, breaking the Treaty of Versailles."], ["1938", "Germany annexes Austria (March). Munich Agreement gives Germany the Sudetenland (September)."], ["1939", "Germany takes the rest of Czechoslovakia (March) and invades Poland (September 1)."], ["1941", "Japan attacks Pearl Harbor (December 7)."]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "According to Figure 1, in which year was unemployment in Germany the highest?", opts: ["1930", "1932", "1934", "1938"], a: 1, why: "The graph peaks at about 5.6 million unemployed in 1932." },
    { t: "ebsr", ref: 2,
      A: { q: "What relationship do Figure 1 and Table 1 suggest?", opts: ["As unemployment rose, support for the Nazi Party grew.", "As unemployment rose, support for the Nazi Party fell.", "The Nazi Party caused the Great Depression to start in 1929.", "Unemployment and Nazi votes had nothing in common."], a: 0 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Unemployment fell to about 0.4 million in 1938.", "From 1928 to July 1932, unemployment rose from about 1.4 to 5.6 million while the Nazi vote rose from 2.6% to 37.3%.", "The Nazi vote dipped to 33.1% in November 1932.", "Japan invaded Manchuria in 1931."], a: 1 },
      why: "Both numbers climbed together from 1928 to 1932, which matches paragraph 2: desperate voters turned to leaders who promised jobs." },
    { t: "mc", ref: 1, q: "Which is the <b>best</b> example of appeasement?",
      opts: ["Japan attacks Pearl Harbor.", "Britain and France let Germany take the Sudetenland at Munich.", "The U.S. sends supplies to Britain through Lend-Lease.", "Nations create the United Nations."], a: 1,
      why: "Appeasement means giving in to an aggressor’s demands to avoid war (paragraph 3)." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> were long-term causes of World War II?",
      opts: ["Anger over the Treaty of Versailles", "The founding of the United Nations", "The Great Depression", "The GI Bill", "The Cold War"], a: [0, 2],
      why: "Treaty resentment and the Depression came before the war. The UN, the GI Bill, and the Cold War are effects." },
    { t: "order", ref: 3, q: "Use the timeline. Put these events in order (first at the top).",
      items: ["Japan invades Manchuria.", "Italy invades Ethiopia.", "The Munich Agreement gives Germany the Sudetenland.", "Germany invades Poland.", "Japan attacks Pearl Harbor."], why: "1931 → 1935 → 1938 → 1939 → 1941." },
    { t: "grid", q: "Is each one a <b>cause</b> or an <b>effect</b> of World War II?", cols: ["Cause", "Effect"],
      rows: [["Treaty of Versailles", 0], ["Founding of the United Nations", 1], ["The Great Depression", 0], ["The Cold War between the U.S. and the Soviet Union", 1], ["Appeasement at Munich", 0]],
      why: "Causes happened before 1939. The UN (1945) and the Cold War came after the war." },
    { t: "inline", ref: 1, q: "Complete the sentences.",
      text: "Before 1941 the United States tried to stay [[]], but it sent supplies to Britain through [[]]. It entered the war after Japan attacked [[]].",
      blanks: [{ opts: ["neutral", "allied with Germany", "at war with Britain"], a: 0 }, { opts: ["the Marshall Plan", "Lend-Lease", "the GI Bill"], a: 1 }, { opts: ["Pearl Harbor", "Manchuria", "Poland"], a: 0 }],
      why: "Paragraph 4: Neutrality Acts, then Lend-Lease, then Pearl Harbor on December 7, 1941." }
  ]
};

/* ============================== WORLD HISTORY ============================== */
const RC_SPECTRUM = `<svg class="dg" viewBox="0 0 640 262" role="img" aria-label="A line from command economy on the left to market economy on the right. North Korea and Cuba are near the command end. China is left of center. Most countries, including the United States, Canada, Germany, and Sweden, are mixed economies right of center. No country is at the pure market end.">
  <defs><marker id="arw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  <rect x="330" y="88" width="230" height="30" rx="15" class="c4" opacity=".6"/>
  <text x="445" y="80" text-anchor="middle" class="tm">MIXED ECONOMIES (most countries)</text>
  <line x1="40" y1="103" x2="600" y2="103" class="ink" marker-start="url(#arw)" marker-end="url(#arw)"/>
  <text x="40" y="40" class="t">COMMAND</text><text x="40" y="57" class="tm">Government decides</text>
  <text x="600" y="40" class="t" text-anchor="end">MARKET</text><text x="600" y="57" class="tm" text-anchor="end">Individuals &amp; businesses decide</text>
  <circle cx="70" cy="103" r="7" class="f2"/><text x="70" y="135" text-anchor="middle" class="t">North Korea</text>
  <circle cx="135" cy="103" r="7" class="f2"/><text x="135" y="158" text-anchor="middle" class="t">Cuba</text>
  <circle cx="250" cy="103" r="7" class="f3"/><text x="250" y="135" text-anchor="middle" class="t">China</text><text x="250" y="151" text-anchor="middle" class="tm">(state + private businesses)</text>
  <circle cx="445" cy="103" r="7" class="f4"/><line x1="445" y1="112" x2="445" y2="168" class="ink" stroke-dasharray="3 3"/><text x="470" y="186" text-anchor="middle" class="t">United States, Canada, Germany, Sweden</text>
  <text x="470" y="203" text-anchor="middle" class="tm">(private businesses + government rules and programs)</text>
  <text x="320" y="232" text-anchor="middle" class="tm">No real country is purely “market” or purely “command.”</text>
  <text x="320" y="252" text-anchor="middle" class="tm">Positions are approximate and change over time.</text>
</svg>`;

RC["wh-econ"] = {
  subject: "World History", mins: 10,
  title: "Economic Systems: Who Decides?",
  blurb: "Compare capitalism, socialism, communism, and mixed economies with a text, a table, and a spectrum.",
  eq: "Who should decide what gets made, how, and for whom: individuals or the government?",
  target: "I can compare capitalism, socialism, communism, and mixed economies using a text, a table, and a diagram.",
  sources: [
    { tab: "Text", title: "Three Questions Every Economy Must Answer", numbered: true, blocks: [
      { p: "Every society has limited resources, so it must answer three questions: <b>What</b> will be produced? <b>How</b> will it be produced? <b>For whom</b> will it be produced? The way a country answers these questions is called its <b>economic system</b>." },
      { p: "In <b>capitalism</b>, also called a <b>market economy</b>, private individuals and businesses own most property and companies. People compete to earn a profit, and prices are set mainly by <b>supply and demand</b>. Supporters, following the Scottish thinker Adam Smith, argue that competition leads to better products and lower prices. Critics point out that capitalism can create large gaps between the rich and the poor." },
      { p: "In <b>socialism</b>, the government or the public owns or controls major industries such as energy, transportation, or health care, with the goal of sharing wealth more equally. Many socialists support democracy and want change through elections. Taxes are usually higher to pay for social programs." },
      { p: "<b>Communism</b> grew from the ideas of Karl Marx, who predicted that workers would overthrow factory owners and create a <b>classless society</b> where workers collectively own the means of production. In practice, communist countries of the 1900s, such as the Soviet Union, were ruled by a single party that ran a <b>command economy</b>: government planners decided what factories made and set prices, often through five-year plans. Critics note that these economies often suffered shortages and gave people little choice or freedom." },
      { p: "Today almost every country has a <b>mixed economy</b> that combines features of more than one system. Even the United States, known for free enterprise, has minimum wage laws, Social Security, and rules for food and workplace safety. The real debate is usually about <i>how much</i> the government should be involved." }
    ]},
    { tab: "Table", blocks: [
      { table: { cap: "Table 1. Comparing economic systems.", head: ["", "Capitalism", "Socialism", "Communism (as practiced)"], rowHead: true,
        rows: [["Who owns businesses?", "Private individuals", "Mix; government owns key industries", "The state (government)"], ["Who sets prices?", "Supply and demand", "Mostly markets, some government control", "Central planners"], ["Main goal", "Profit, growth, and choice", "Greater equality and security", "Equality and a classless society"], ["A common criticism", "Gaps between rich and poor", "High taxes, less incentive", "Shortages and loss of freedom"]] } }
    ]},
    { tab: "Spectrum", blocks: [ { fig: RC_SPECTRUM, cap: "Figure 1. The economic spectrum (simplified)." } ] }
  ],
  qs: [
    { t: "grid", q: "Which economic system does each example describe best?", cols: ["Capitalism", "Socialism", "Communism", "Mixed"],
      rows: [["Private companies compete for customers and profits with little government control.", 0], ["Voters elect a government that runs the railroads and health care to share wealth more equally.", 1], ["One party’s planners decide what every factory makes and set all prices.", 2], ["Businesses are mostly private, but the government sets a minimum wage and runs Social Security.", 3]],
      why: "Look at who owns and who decides: private (capitalism), public for key industries plus elections (socialism), one-party planners (communism), a combination (mixed)." },
    { t: "mc", ref: 1, q: "In a market economy, prices are set mainly by…", opts: ["government planners", "supply and demand", "a single political party", "the largest company in each industry"], a: 1, why: "Paragraph 2 and Table 1." },
    { t: "ebsr",
      A: { q: "Based on Figure 1, which statement is accurate?", opts: ["The United States is a pure market economy.", "Most countries are mixed economies between the two extremes.", "China is a pure command economy.", "Sweden is a command economy like North Korea."], a: 1 },
      B: { q: "Which sentence from the text <b>best</b> supports your answer to Part A?", opts: ["“Every society has limited resources, so it must answer three questions.”", "“Many socialists support democracy and want change through elections.”", "“Even the United States, known for free enterprise, has minimum wage laws, Social Security, and rules for food and workplace safety.”", "“Critics point out that capitalism can create large gaps between the rich and the poor.”"], a: 2 },
      why: "If even the U.S. mixes markets with government programs, it is a mixed economy, like most countries on the spectrum." },
    { t: "multi", ref: 1, q: "Select <b>all</b> the features of a command economy.", opts: ["Government planners decide what to produce.", "Central planners set prices.", "Private businesses compete for profit.", "Production goals are set in five-year plans.", "Prices rise and fall with supply and demand."], a: [0, 1, 3],
      why: "Paragraph 4 describes planners, set prices, and five-year plans. Competition and supply and demand belong to market economies." },
    { t: "mc", ref: 2, q: "According to Table 1, what is a common <b>criticism</b> of communism as practiced?", opts: ["Gaps between rich and poor", "Too much competition", "Shortages and loss of freedom", "Prices change too often"], a: 2, why: "Table 1, last row." },
    { t: "inline", ref: 1, q: "Complete the sentence about Karl Marx.",
      text: "Marx predicted that [[]] would overthrow factory owners and create a [[]] society.",
      blanks: [{ opts: ["workers", "kings", "bankers"], a: 0 }, { opts: ["classless", "capitalist", "royal"], a: 0 }], why: "Paragraph 4." }
  ]
};

RC["wh-smith-marx"] = {
  subject: "World History", mins: 10,
  title: "Ideas in Conflict: Adam Smith vs. Karl Marx",
  blurb: "Read short primary sources from Smith and Marx and connect them to factory reform laws.",
  eq: "How did the Industrial Revolution lead to new ideas about who should control the economy?",
  target: "I can compare the views of Adam Smith and Karl Marx using evidence from primary sources.",
  sources: [
    { tab: "Source A: Smith", title: "Source A: Adam Smith, <i>The Wealth of Nations</i> (1776)", blocks: [
      { box: "<b>About the author:</b> Adam Smith was a Scottish professor. He wrote at the very beginning of the Industrial Revolution, when most people still worked on farms or in small workshops." },
      { quote: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.", by: "Adam Smith, Book I" },
      { quote: "[Every individual] intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was no part of his intention.", by: "Adam Smith, Book IV" },
      { vocab: [["benevolence", "kindness, wanting to do good"], ["regard to their own interest", "caring about their own benefit"], ["promote an end", "help bring about a result"]] }
    ]},
    { tab: "Source B: Marx", title: "Source B: Karl Marx and Friedrich Engels, <i>The Communist Manifesto</i> (1848)", blocks: [
      { box: "<b>About the authors:</b> Marx and Engels were German writers. Engels had worked at his family’s cotton business in Manchester, England, and wrote about the terrible living conditions of workers there. By 1848, factories had spread across Britain for decades." },
      { quote: "The history of all hitherto existing society is the history of class struggles.", by: "Marx and Engels, Section I" },
      { quote: "The proletarians have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!", by: "Marx and Engels, Section IV" },
      { vocab: [["hitherto existing", "up until now"], ["class struggles", "conflicts between rich and poor groups"], ["proletarians", "industrial workers who own nothing but their labor"]] }
    ]},
    { tab: "Source C: Reform", title: "Source C: Factory Laws in Britain", blocks: [
      { p: "In the early 1800s, children as young as six worked in British textile mills, often for 12 to 14 hours a day. After government investigations reported these conditions, Parliament began to pass laws to limit working hours." },
      { table: { cap: "Table 1. Selected British factory laws.", head: ["Year", "Law", "What it did"], rowHead: true, rows: [["1833", "Factory Act", "Banned children under 9 from working in textile mills. Limited children ages 9–13 to 9 hours a day and inspectors checked factories."], ["1842", "Mines Act", "Banned women and children under 10 from working underground in mines."], ["1847", "Ten Hours Act", "Limited women and teenagers in textile mills to 10 hours a day."]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "According to Source A, why does the baker provide our dinner?", opts: ["Because he is kind and generous", "Because the government orders him to", "Because it is in his own interest to earn money", "Because workers own the bakery"], a: 2, why: "Smith says we depend on the baker’s “regard to their own interest,” not his benevolence (kindness)." },
    { t: "mc", ref: 1, q: "What does Smith mean by an “invisible hand”?", opts: ["Government secretly controls businesses.", "When people pursue their own gain in a free market, they end up helping society without meaning to.", "Factory owners hide their profits from workers.", "Workers should take control of the factories."], a: 1, why: "Each person “intends only his own gain” but promotes a good result that “was no part of his intention.”" },
    { t: "ebsr", ref: 2,
      A: { q: "How do Marx and Engels describe history in Source B?", opts: ["As a story of great kings and queens", "As a series of conflicts between social classes", "As steady progress that helps everyone equally", "As the history of new inventions"], a: 1 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?", opts: ["“The history of all hitherto existing society is the history of class struggles.”", "“It is not from the benevolence of the butcher…”", "“They have a world to win.”", "“…led by an invisible hand to promote an end…”"], a: 0 },
      why: "Marx and Engels say all history is “the history of class struggles.”" },
    { t: "grid", q: "Who would <b>most likely</b> agree with each statement?", cols: ["Adam Smith", "Karl Marx"],
      rows: [["Competition in a free market benefits society.", 0], ["Workers around the world should unite against factory owners.", 1], ["People working for their own interest can help everyone.", 0], ["Society is divided into groups whose interests conflict.", 1]],
      why: "Smith trusts self-interest and markets. Marx sees conflict between classes and calls workers to unite." },
    { t: "mc", ref: 3, q: "What does Source C show about how Britain responded to harsh factory conditions?", opts: ["Workers overthrew the government, as Marx predicted.", "Parliament passed laws that limited working hours, especially for children and women.", "The government took ownership of all factories.", "Nothing changed until the 1900s."], a: 1, why: "The Factory Act (1833), Mines Act (1842), and Ten Hours Act (1847) were reforms passed by Parliament." },
    { t: "multi", need: 2, q: "Which <b>two</b> statements are supported by the sources?", opts: ["Smith wrote before factories spread, while Marx wrote after decades of industrialization.", "Smith and Marx both said workers should own the factories.", "Britain’s factory laws show that some problems were addressed through reform, not revolution.", "Marx believed the invisible hand would protect workers.", "The Ten Hours Act came before Smith’s book."], a: [0, 2],
      why: "The dates (1776 vs. 1848) and the author notes show the first. Source C shows reform through laws. The others contradict the sources." }
  ]
};
