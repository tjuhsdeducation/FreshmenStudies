/* =====================================================================
   ✏️ UNIT STUDY GUIDES: CHEMISTRY
   Three unit study guides (about 25 minutes each). Each has Key Ideas,
   a Visual tab, and a 🔬 Simulation tab, plus 10–12 graded questions.
   (See the top of rc-engine.js and rc-sims.js for the formats.)
   ===================================================================== */

/* ---------- Diagram: Bohr models of a sodium atom and a sodium ion ---------- */
const SGC_BOHR = (function () {
  const radii = [38, 66, 94];
  function atom(cx, cy, shells, label, sub) {
    let g = "";
    shells.forEach((cnt, i) => {
      g += `<circle cx="${cx}" cy="${cy}" r="${radii[i]}" class="ink" stroke-dasharray="4 4"/>`;
      for (let j = 0; j < cnt; j++) {
        const a = -Math.PI / 2 + j / cnt * 2 * Math.PI;
        g += `<circle cx="${(cx + radii[i] * Math.cos(a)).toFixed(1)}" cy="${(cy + radii[i] * Math.sin(a)).toFixed(1)}" r="6" class="f1"/>`;
      }
    });
    g += `<circle cx="${cx}" cy="${cy}" r="22" class="c2"/><text x="${cx}" y="${cy - 2}" text-anchor="middle" class="t">11 p⁺</text><text x="${cx}" y="${cy + 13}" text-anchor="middle" class="tm">12 n</text>`;
    g += `<text x="${cx}" y="${cy + 122}" text-anchor="middle" class="t">${label}</text><text x="${cx}" y="${cy + 140}" text-anchor="middle" class="tm">${sub}</text>`;
    return g;
  }
  return `<svg class="dg" viewBox="0 0 600 290" role="img" aria-label="Bohr models. Left: a neutral sodium atom with 11 protons and 12 neutrons in the nucleus and electrons arranged 2, 8, 1, so it has 1 valence electron. Right: a sodium ion, Na plus, with the same nucleus and electrons arranged 2, 8 after losing its one valence electron.">
  <defs><marker id="sgcar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  ${atom(130, 112, [2, 8, 1], "Sodium atom (Na)", "11 e⁻: shells 2, 8, 1 · 1 valence e⁻ · charge 0")}
  ${atom(470, 112, [2, 8], "Sodium ion (Na⁺)", "10 e⁻: shells 2, 8 · charge +1")}
  <line x1="245" y1="112" x2="355" y2="112" class="ink" marker-end="url(#sgcar1)"/>
  <text x="300" y="98" text-anchor="middle" class="t">loses 1 e⁻</text>
  <text x="300" y="134" text-anchor="middle" class="tm">(the valence electron)</text>
</svg>`;
})();

/* ---------- Diagram: methane combustion with atom models ---------- */
const SGC_METHANE = (function () {
  const cls = { C: "c4", H: "c3", O: "c2" }, rad = { C: 15, H: 10, O: 14 };
  const A = (x, y, e) => `<circle cx="${x}" cy="${y}" r="${rad[e]}" class="${cls[e]}"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="t">${e}</text>`;
  const ch4 = (x, y) => A(x, y - 24, "H") + A(x, y + 24, "H") + A(x - 24, y, "H") + A(x + 24, y, "H") + A(x, y, "C");
  const o2 = (x, y) => A(x - 12, y, "O") + A(x + 12, y, "O");
  const co2 = (x, y) => A(x - 24, y, "O") + A(x + 24, y, "O") + A(x, y, "C");
  const h2o = (x, y) => A(x - 17, y + 15, "H") + A(x + 17, y + 15, "H") + A(x, y, "O");
  return `<svg class="dg" viewBox="0 0 600 230" role="img" aria-label="Particle model of methane combustion. One CH4 molecule plus two O2 molecules react to form one CO2 molecule plus two H2O molecules. Reactants have 1 carbon, 4 hydrogen, and 4 oxygen atoms. Products also have 1 carbon, 4 hydrogen, and 4 oxygen atoms.">
  <defs><marker id="sgcar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  ${ch4(70, 90)}
  <text x="128" y="96" text-anchor="middle" class="t">+</text>
  ${o2(175, 62)}${o2(175, 118)}
  <line x1="222" y1="90" x2="292" y2="90" class="ink" marker-end="url(#sgcar2)"/>
  ${co2(345, 90)}
  <text x="402" y="96" text-anchor="middle" class="t">+</text>
  ${h2o(460, 50)}${h2o(460, 110)}
  <text x="70" y="150" text-anchor="middle" class="tm">1 CH₄</text><text x="175" y="150" text-anchor="middle" class="tm">2 O₂</text>
  <text x="345" y="150" text-anchor="middle" class="tm">1 CO₂</text><text x="460" y="150" text-anchor="middle" class="tm">2 H₂O</text>
  <rect x="20" y="166" width="260" height="50" rx="10" class="soft"/><text x="150" y="187" text-anchor="middle" class="t">Reactants</text><text x="150" y="206" text-anchor="middle" class="tm">1 C · 4 H · 4 O</text>
  <rect x="320" y="166" width="260" height="50" rx="10" class="soft"/><text x="450" y="187" text-anchor="middle" class="t">Products</text><text x="450" y="206" text-anchor="middle" class="tm">1 C · 4 H · (2 + 2) = 4 O</text>
</svg>`;
})();

/* ======================= 1. ATOMIC STRUCTURE ======================= */
RC["sg-chem-atoms"] = {
  subject: "Chemistry", mins: 25,
  title: "Atomic Structure & the Periodic Table",
  blurb: "Review protons, neutrons, electrons, isotopes, ions, valence electrons, and the patterns of the periodic table, then build atoms in a simulation.",
  eq: "How does the structure of an atom explain where it sits on the periodic table and how it behaves?",
  target: "I can use the numbers of protons, neutrons, and electrons to identify an atom, isotope, or ion, and I can use the periodic table to predict valence electrons and trends.",
  sources: [
    { tab: "Key Ideas", title: "Inside the Atom", numbered: true, blocks: [
      { h: "The three subatomic particles" },
      { p: "Every atom has a tiny, dense center called the <b>nucleus</b>. The nucleus holds <b>protons</b> (positive charge, +1) and <b>neutrons</b> (no charge). Protons and neutrons each have a mass of about <b>1 atomic mass unit (amu)</b>. Moving around the nucleus are <b>electrons</b> (negative charge, −1). An electron is so light, about 1/1,836 of a proton, that we usually ignore its mass." },
      { vocab: [
        ["atomic number (Z)", "the number of protons in the nucleus. It tells you which element the atom is. Every carbon atom has 6 protons."],
        ["mass number (A)", "protons + neutrons. It is always a whole number."],
        ["isotopes", "atoms of the same element (same number of protons) with different numbers of neutrons, so they have different mass numbers"],
        ["ion", "an atom that has gained or lost electrons, so it has a charge"],
        ["cation", "a positive ion. It formed by <b>losing</b> electrons."],
        ["anion", "a negative ion. It formed by <b>gaining</b> electrons."],
        ["valence electrons", "the electrons in the outermost shell. They take part in chemical reactions and bonding."]
      ]},
      { h: "Isotopes" },
      { p: "We name an isotope with the element name and its mass number, like <b>carbon-12</b> and <b>carbon-14</b>. Both have 6 protons, so both are carbon. Carbon-12 has 6 neutrons, and carbon-14 has 8 neutrons. Changing the number of neutrons changes the mass, but it does <b>not</b> change the element. Some isotopes, like carbon-14, have unstable nuclei and are <b>radioactive</b>." },
      { box: "<b>Worked example 1: isotopes</b><br>An atom of chlorine-37 has atomic number 17.<br>Protons = atomic number = <b>17</b><br>Neutrons = mass number − protons = 37 − 17 = <b>20</b><br>Electrons (if neutral) = protons = <b>17</b>" },
      { h: "Ions" },
      { p: "In a neutral atom, the number of electrons equals the number of protons, so the charges cancel. If an atom loses or gains electrons, it becomes an ion. To find the charge, use <b>charge = protons − electrons</b>. Only electrons move when ions form. The number of protons never changes in a chemical reaction." },
      { box: "<b>Worked example 2: ions</b><br>A calcium ion has 20 protons and 18 electrons.<br>Charge = 20 − 18 = <b>+2</b>, written Ca<sup>2+</sup>.<br>It is a <b>cation</b> because it lost 2 electrons.<br><br>A fluoride ion has 9 protons and 10 electrons. Charge = 9 − 10 = <b>−1</b>, written F<sup>−</sup>, an <b>anion</b>." },
      { h: "Electron shells and valence electrons" },
      { p: "In the simple <b>Bohr model</b>, electrons are arranged in shells (energy levels) around the nucleus. For the first 20 elements, the first shell holds up to <b>2</b> electrons, the second holds up to <b>8</b>, and the third holds up to <b>8</b> before the fourth shell starts. Fill the shells from the inside out. For example, sodium has 11 electrons: <b>2, 8, 1</b>. Its one outer electron is its only valence electron." },
      { box: "<b>Worked example 3: shells</b><br>Sulfur has 16 electrons. Fill the shells: 2, then 8, then the remaining 6.<br>Arrangement: <b>2, 8, 6</b>. Sulfur has <b>6 valence electrons</b>." }
    ]},
    { tab: "Periodic Table", title: "Reading the Periodic Table", numbered: true, blocks: [
      { p: "The periodic table lists elements in order of increasing atomic number. A <b>period</b> is a horizontal row. All elements in the same period have their electrons in the same number of shells. A <b>group</b> (or family) is a vertical column. Elements in the same group have the same number of valence electrons, so they have <b>similar chemical properties</b>." },
      { table: { cap: "Table 1. Four important groups.", head: ["Group", "Family name", "Valence e⁻", "What they tend to do"], rowHead: true, rows: [
        ["1", "Alkali metals (Li, Na, K)", "1", "Lose 1 e⁻ to form +1 ions. Very reactive."],
        ["2", "Alkaline earth metals (Be, Mg, Ca)", "2", "Lose 2 e⁻ to form +2 ions."],
        ["17", "Halogens (F, Cl, Br)", "7", "Gain 1 e⁻ to form −1 ions. Very reactive."],
        ["18", "Noble gases (He, Ne, Ar)", "8 (He has 2)", "Full outer shell, so they almost never react."]
      ]}},
      { p: "Atoms tend to gain or lose electrons so that their outer shell becomes full, like a noble gas. Metals, on the left side of the table, usually <b>lose</b> electrons and form cations. Nonmetals, on the right side, usually <b>gain</b> electrons and form anions." },
      { h: "Periodic trends" },
      { p: "<b>Across a period</b> (left to right), each element has one more proton, but the new electrons go into the same shell. The stronger positive nucleus pulls the electrons closer, so <b>atomic radius decreases</b>. It also gets harder to remove an electron, so <b>ionization energy increases</b>." },
      { p: "<b>Down a group</b> (top to bottom), each element has one more shell of electrons. The outer electrons are farther from the nucleus, and the inner electrons <b>shield</b> them from the nucleus. So <b>atomic radius increases</b> and <b>ionization energy decreases</b>. This is why potassium reacts with water more violently than sodium does." },
      { vocab: [
        ["atomic radius", "the size of an atom, measured from the nucleus to the outer electrons, in picometers (pm)"],
        ["ionization energy", "the energy needed to remove one electron from an atom"],
        ["shielding", "inner electrons blocking outer electrons from the pull of the nucleus"]
      ]}
    ]},
    { tab: "Visual", title: "Models and Data", blocks: [
      { fig: SGC_BOHR, cap: "Figure 1. Bohr models of a sodium atom and a sodium ion. The nucleus does not change. Only the outer electron is lost." },
      { fig: RCG.bar({ title: "Atomic Radius Across Period 3", cats: ["Na", "Mg", "Al", "Si", "P", "S", "Cl"], values: true, w: 540, h: 320,
          series: [{ vals: [186, 160, 143, 118, 110, 103, 100], cls: "s1" }], y: { min: 0, max: 200, step: 50, label: "Atomic radius (pm)" },
          alt: "Bar graph of atomic radius in picometers across Period 3: sodium 186, magnesium 160, aluminum 143, silicon 118, phosphorus 110, sulfur 103, chlorine 100." }),
        cap: "Figure 2. Atomic radius gets smaller from left to right across Period 3." },
      { table: { cap: "Table 2. Atomic radius down Group 1.", head: ["Element", "Number of shells", "Atomic radius (pm)"], rowHead: true, rows: [["Lithium (Li)", "2", "152"], ["Sodium (Na)", "3", "186"], ["Potassium (K)", "4", "227"]] } },
      { src: "Data: approximate atomic radii, rounded, from common chemistry reference tables." }
    ]},
    { tab: "🔬 Simulation", title: "Build an Atom", blocks: [
      { box: "<b>Try this:</b> 1) Start with carbon (6 protons, 6 neutrons, 6 electrons). Add 2 neutrons. What isotope did you make? Is it stable? 2) Remove one electron. What is the charge now? Is it a cation or an anion? 3) Build sodium: 11 protons, 12 neutrons, 11 electrons. Count the valence electrons. 4) Now remove 1 electron from sodium. Look at the shells: which noble gas does Na<sup>+</sup> match? 5) Build a neutral atom with 15 protons and 16 neutrons, and write down its shells and valence electrons." },
      { sim: "atom", title: "Build an Atom", tip: "The number of protons decides the element. Neutrons change the isotope. Electrons change the charge.", p: 6, n: 6, e: 6 }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which particle decides what <b>element</b> an atom is?", opts: ["The neutron", "The electron", "The proton", "The valence electron"], a: 2,
      why: "The atomic number is the number of protons, and each element has its own atomic number. Changing neutrons makes a different isotope, and changing electrons makes an ion, but the element stays the same." },
    { t: "grid", ref: 1, q: "Match each description to the correct particle.", cols: ["Proton", "Neutron", "Electron"],
      rows: [["Has a charge of −1", 2], ["Has no charge", 1], ["Its number equals the atomic number", 0], ["Is found in shells outside the nucleus", 2]],
      why: "Protons (+1) and neutrons (no charge) are in the nucleus. The number of protons is the atomic number. Electrons (−1) move in shells around the nucleus." },
    { t: "num", ref: 1, q: "An atom has <b>17 protons</b> and <b>20 neutrons</b>. What is its mass number?", a: 37, tol: 0, pre: "A =",
      why: "Mass number = protons + neutrons = 17 + 20 = 37. This atom is chlorine-37." },
    { t: "num", ref: 1, q: "Carbon has atomic number 6. How many <b>neutrons</b> are in one atom of <b>carbon-14</b>?", a: 8, tol: 0, unit: "neutrons",
      why: "Neutrons = mass number − protons = 14 − 6 = 8." },
    { t: "inline", ref: 1, q: "Complete the sentence about isotopes.",
      text: "Isotopes of the same element have the same number of [[]] but a different number of [[]], so they have different [[]].",
      blanks: [{ opts: ["neutrons", "protons", "shells"], a: 1 }, { opts: ["neutrons", "electrons", "protons"], a: 0 }, { opts: ["atomic numbers", "charges", "mass numbers"], a: 2 }],
      why: "Same protons means same element. Different neutrons means a different mass number (protons + neutrons), like carbon-12 and carbon-14." },
    { t: "mc", ref: 1, q: "A magnesium particle has <b>12 protons</b> and <b>10 electrons</b>. Which describes it?", opts: ["Charge +2, a cation because it lost 2 electrons", "Charge −2, an anion because it gained 2 electrons", "Charge +2, an anion because it lost 2 electrons", "Charge 0, a neutral atom"], a: 0,
      why: "Charge = protons − electrons = 12 − 10 = +2. A positive ion is a cation, and it formed by losing electrons (a neutral Mg atom has 12)." },
    { t: "num", ref: 4, q: "<b>Use the simulation.</b> Build a neutral atom with <b>15 protons</b>, <b>16 neutrons</b>, and <b>15 electrons</b>. How many <b>valence electrons</b> does it have?", a: 5, tol: 0, unit: "valence e⁻",
      why: "15 electrons fill the shells as 2, 8, 5. The outer shell has 5 electrons. This atom is phosphorus-31, and phosphorus is in Group 15." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set <b>17 protons</b>, <b>18 neutrons</b>, and <b>18 electrons</b>. What does the simulation show?", opts: ["Argon-36, a neutral atom", "Chlorine-36, charge +1, a cation", "Chlorine-17, charge −1, an anion", "Chlorine-35, charge −1, an anion"], a: 3,
      why: "17 protons makes chlorine. Mass number = 17 + 18 = 35. Charge = 17 − 18 = −1, so it is an anion (chloride ion). Its shells are 2, 8, 8, the same as argon." },
    { t: "multi", ref: 2, q: "Which <b>two</b> elements have chemical properties most like <b>sodium (Na)</b>? Select two.", opts: ["Lithium (Li)", "Magnesium (Mg)", "Potassium (K)", "Chlorine (Cl)"], a: [0, 2], need: 2,
      why: "Lithium and potassium are in Group 1 with sodium, so they all have 1 valence electron. Magnesium is next to sodium in the same period, but it is in a different group with 2 valence electrons." },
    { t: "order", ref: 3, q: "Use Figure 2. Put these atoms in order from <b>smallest</b> atomic radius (top) to <b>largest</b> (bottom).", items: ["Chlorine (Cl)", "Silicon (Si)", "Magnesium (Mg)", "Sodium (Na)"],
      why: "From Figure 2: Cl 100 pm, Si 118 pm, Mg 160 pm, Na 186 pm. Across a period, radius decreases, so the elements farther right are smaller." },
    { t: "ebsr", ref: 3,
      A: { q: "Why is a chlorine atom <b>smaller</b> than a sodium atom, even though chlorine has more electrons?", opts: ["Chlorine has fewer shells than sodium.", "Chlorine has more protons pulling on electrons in the same number of shells.", "Chlorine's electrons have no charge.", "Chlorine has more shielding than sodium."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Table 2 shows potassium has 4 shells.", "Table 1 shows that halogens gain 1 electron.", "The text says that across a period, the new electrons go into the same shell and the stronger nucleus pulls them closer.", "Figure 1 shows that sodium loses its outer electron."], a: 2 },
      why: "Sodium and chlorine are both in Period 3, so their electrons are in 3 shells. Chlorine has 17 protons instead of 11, so its nucleus pulls the electrons closer (186 pm vs. 100 pm)." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Use Figure 1 to explain how a sodium atom becomes a sodium ion (Na<sup>+</sup>). Include the numbers of protons and electrons, and explain why the charge is +1.", min: 35,
      checks: [
        { label: "Says sodium loses (gives up) an electron", re: /los[et]|lose|gives? (up|away)|gave (up|away)|remov|takes? away/i },
        { label: "Uses the numbers of protons and electrons (11 and 10)", re: /\b11\b|\b10\b|\beleven\b|\bten\b/i, min: 2 },
        { label: "Explains the +1 charge (more protons than electrons / one more positive)", re: /more protons|one more (proton|positive)|protons? (minus|−|-) electrons?|11 ?(−|-|minus) ?10|positive/i },
        { label: "Mentions the valence or outer electron", re: /valence|outer|outermost|last shell|third shell/i }
      ],
      rubric: "2 points: explains that sodium loses its 1 valence electron, uses 11 protons and 10 electrons, and connects this to the +1 charge. 1 point: partly correct explanation. 0 points: no correct explanation.",
      model: "A neutral sodium atom has 11 protons and 11 electrons, arranged 2, 8, 1, so it has 1 valence electron in its outer shell. Sodium loses that one valence electron. The ion still has 11 protons but only 10 electrons, so the charge is 11 − 10 = +1. Now its shells are 2, 8, a full outer shell like neon.",
      why: "Only electrons move when ions form. Sodium keeps its 11 protons, loses its 1 outer electron, and has 10 electrons left, so it has one more positive charge than negative: +1." }
  ]
};

/* ======================= 2. CHEMICAL REACTIONS ======================= */
RC["sg-chem-reactions"] = {
  subject: "Chemistry", mins: 25,
  title: "Chemical Reactions & Balancing Equations",
  blurb: "Review conservation of mass, coefficients vs. subscripts, and the five reaction types, then balance equations in a simulation.",
  eq: "Why must a chemical equation be balanced, and how can we tell what kind of reaction is happening?",
  target: "I can balance a chemical equation using coefficients and classify a reaction as synthesis, decomposition, single replacement, double replacement, or combustion.",
  sources: [
    { tab: "Key Ideas", title: "Atoms Are Rearranged, Not Lost", numbered: true, blocks: [
      { h: "What is a chemical reaction?" },
      { p: "In a <b>chemical reaction</b>, the atoms in the starting substances, called <b>reactants</b>, break their bonds and rearrange to form new substances, called <b>products</b>. A chemical equation shows this with an arrow: reactants → products. Signs that a reaction happened include a color change, gas bubbles, a new solid forming (a <b>precipitate</b>), light, or a temperature change." },
      { h: "Conservation of mass" },
      { p: "In the late 1700s, the French chemist Antoine Lavoisier carefully weighed substances before and after reactions in closed containers. He found that the total mass did not change. This is the <b>law of conservation of mass</b>: matter is not created or destroyed in a chemical reaction. The atoms are only rearranged." },
      { p: "Sometimes mass seems to disappear. When wood burns in an open fire, the ash weighs much less than the wood. The missing mass did not vanish. It left as gases, mainly carbon dioxide and water vapor, that escaped into the air. If the same reaction happens in a sealed container, the total mass stays the same." },
      { h: "Coefficients vs. subscripts" },
      { vocab: [
        ["subscript", "the small number written after an atom in a formula. It tells how many of that atom are in <b>one</b> molecule. In H<sub>2</sub>O, the subscript 2 means 2 hydrogen atoms."],
        ["coefficient", "the big number written in front of a formula. It tells how many molecules (or moles) there are. 3H<sub>2</sub>O means 3 water molecules."],
        ["balanced equation", "an equation with the same number of each kind of atom on both sides of the arrow"]
      ]},
      { p: "To balance an equation, change <b>only the coefficients</b>. Never change a subscript, because that changes the substance itself. For example, H<sub>2</sub>O is water, but H<sub>2</sub>O<sub>2</sub> is hydrogen peroxide, a completely different chemical. To count atoms, multiply the coefficient by the subscript. In 3H<sub>2</sub>O there are 3 × 2 = 6 hydrogen atoms and 3 × 1 = 3 oxygen atoms." },
      { box: "<b>Steps to balance an equation</b><br>1) Write the correct formulas for all reactants and products.<br>2) Count the atoms of each element on each side.<br>3) Add coefficients, one element at a time. Save H and O for last if they appear in more than one compound.<br>4) Recount every element.<br>5) Make sure the coefficients are in the lowest whole-number ratio." },
      { box: "<b>Worked example: making water</b><br>Unbalanced: H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O. Left: 2 H, 2 O. Right: 2 H, 1 O. Oxygen is not balanced.<br>Put a 2 in front of H<sub>2</sub>O: H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. Now the right has 4 H and 2 O.<br>Put a 2 in front of H<sub>2</sub>: <b>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</b>. Left: 4 H, 2 O. Right: 4 H, 2 O. ✅" },
      { box: "<b>Worked example: making ammonia</b><br>N<sub>2</sub> + H<sub>2</sub> → NH<sub>3</sub>. Balance N first: put a 2 in front of NH<sub>3</sub>, giving 2 N and 6 H on the right. Then put a 3 in front of H<sub>2</sub> to get 6 H on the left.<br><b>N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub></b> (coefficients 1, 3, 2)." }
    ]},
    { tab: "Reaction Types", title: "Five Types of Reactions", numbered: true, blocks: [
      { p: "Chemists sort reactions into types by looking at the pattern of reactants and products. In the patterns below, the letters A, B, C, and D stand for elements or groups of atoms." },
      { table: { cap: "Table 1. The five reaction types.", head: ["Type", "Pattern", "Example (balanced)", "How to spot it"], rowHead: true, rows: [
        ["Synthesis", "A + B → AB", "2Na + Cl<sub>2</sub> → 2NaCl", "Two or more reactants combine into <b>one</b> product."],
        ["Decomposition", "AB → A + B", "2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>", "<b>One</b> reactant breaks into two or more products."],
        ["Single replacement", "A + BC → AC + B", "Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub>", "An element trades places with one part of a compound."],
        ["Double replacement", "AB + CD → AD + CB", "AgNO<sub>3</sub> + NaCl → AgCl + NaNO<sub>3</sub>", "Two compounds swap partners. Often forms a precipitate."],
        ["Combustion", "fuel + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O", "CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O", "A hydrocarbon burns in oxygen and releases energy."]
      ]}},
      { p: "A helpful trick: count the reactants and products. One product means synthesis. One reactant means decomposition. An element plus a compound on <b>both</b> sides means single replacement. Two compounds on both sides means double replacement. A fuel made of carbon and hydrogen reacting with O<sub>2</sub> to make CO<sub>2</sub> and H<sub>2</sub>O means combustion." },
      { box: "<b>Tip:</b> For complete combustion of any hydrocarbon (a compound of only C and H), the products are always <b>CO<sub>2</sub> and H<sub>2</sub>O</b>. Natural gas (methane, CH<sub>4</sub>) and propane (C<sub>3</sub>H<sub>8</sub>) are hydrocarbons." }
    ]},
    { tab: "Visual", title: "Counting Atoms in Methane Combustion", blocks: [
      { fig: SGC_METHANE, cap: "Figure 1. Particle model of CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O. Every atom on the left appears on the right." },
      { table: { cap: "Table 2. Atom tally for the balanced combustion of methane.", head: ["Element", "Reactants", "Products", "Balanced?"], rowHead: true, rows: [
        ["Carbon (C)", "1 (in CH<sub>4</sub>)", "1 (in CO<sub>2</sub>)", "✅"],
        ["Hydrogen (H)", "1 × 4 = 4 (in CH<sub>4</sub>)", "2 × 2 = 4 (in 2H<sub>2</sub>O)", "✅"],
        ["Oxygen (O)", "2 × 2 = 4 (in 2O<sub>2</sub>)", "2 (in CO<sub>2</sub>) + 2 (in 2H<sub>2</sub>O) = 4", "✅"]
      ]}}
    ]},
    { tab: "🔬 Simulation", title: "Balance the Equation", blocks: [
      { box: "<b>Try this:</b> 1) In the first simulation, look at the atom tally. Which element is not balanced at the start? 2) Change the coefficient in front of H<sub>2</sub>O to 2. Which element is now balanced? 3) Change the coefficient in front of O<sub>2</sub> until oxygen is balanced. 4) Try setting every coefficient to 2. What does the simulation say about lowest terms? 5) In the second simulation, balance the reaction of aluminum with oxygen. Hint: oxygen comes in 2s on the left and 3s on the right, so find a number both 2 and 3 go into." },
      { sim: "balance", title: "Combustion of Methane", tip: "Remember: change only the big numbers in front. The subscripts are part of each formula.",
        r: [{ f: "CH₄", a: { C: 1, H: 4 } }, { f: "O₂", a: { O: 2 } }], p: [{ f: "CO₂", a: { C: 1, O: 2 } }, { f: "H₂O", a: { H: 2, O: 1 } }], ans: [1, 2, 1, 2] },
      { sim: "balance", title: "Aluminum + Oxygen (Synthesis)", tip: "Balance oxygen first using the lowest common multiple of 2 and 3, then balance aluminum.",
        r: [{ f: "Al", a: { Al: 1 } }, { f: "O₂", a: { O: 2 } }], p: [{ f: "Al₂O₃", a: { Al: 2, O: 3 } }], ans: [4, 3, 2] }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What does the <b>law of conservation of mass</b> say about a chemical reaction?", opts: ["The products always weigh more than the reactants.", "Atoms are not created or destroyed; they are only rearranged.", "Only the mass of gases is conserved.", "Each reactant has the same mass as each product."], a: 1,
      why: "Lavoisier found that the total mass stays the same in a closed container, because every atom in the reactants is still there in the products, just arranged differently." },
    { t: "mc", ref: 1, q: "A student tries to balance H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O by changing the product to H<sub>2</sub>O<sub>2</sub>. Why is this <b>wrong</b>?", opts: ["H<sub>2</sub>O<sub>2</sub> has too few hydrogen atoms.", "Coefficients can only be odd numbers.", "Changing a subscript changes the substance, making hydrogen peroxide instead of water.", "Oxygen can never appear twice in a formula."], a: 2,
      why: "Subscripts are part of the formula, so changing them changes the identity of the chemical. To balance, add coefficients instead: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O." },
    { t: "num", ref: 1, q: "How many <b>oxygen atoms</b> are shown by <b>3Ca(NO<sub>3</sub>)<sub>2</sub></b>?", a: 18, tol: 0, unit: "O atoms",
      why: "One Ca(NO<sub>3</sub>)<sub>2</sub> has 2 nitrate groups with 3 O each: 2 × 3 = 6 O. The coefficient 3 means three of these units: 3 × 6 = 18 oxygen atoms." },
    { t: "inline", ref: 1, q: "Complete the sentence about <b>2H<sub>2</sub>O</b>.",
      text: "The large 2 in front is a [[]] that tells how many [[]] there are. The small 2 is a [[]] that tells how many hydrogen atoms are in each molecule.",
      blanks: [{ opts: ["subscript", "coefficient", "charge"], a: 1 }, { opts: ["atoms of oxygen", "water molecules", "elements"], a: 1 }, { opts: ["subscript", "coefficient", "product"], a: 0 }],
      why: "The coefficient counts molecules (2 water molecules). The subscript is part of the formula and counts atoms inside one molecule (2 H per water). In all, 2H<sub>2</sub>O has 4 H atoms and 2 O atoms." },
    { t: "num", ref: 4, q: "<b>Use the first simulation.</b> Balance CH<sub>4</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O. In the balanced equation, how many <b>oxygen atoms</b> are on the <b>products</b> side?", a: 4, tol: 0, unit: "O atoms",
      why: "Balanced: CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O. Products: CO<sub>2</sub> has 2 O and 2H<sub>2</sub>O has 2 × 1 = 2 O, so 4 O in all. The reactants also have 2 × 2 = 4 O." },
    { t: "num", ref: 4, q: "<b>Use the second simulation.</b> Balance Al + O<sub>2</sub> → Al<sub>2</sub>O<sub>3</sub> in lowest terms. What coefficient goes in front of <b>Al</b>?", a: 4, tol: 0, pre: "coefficient =",
      why: "Oxygen: 2 on the left and 3 on the right, so use 6 O: 3O<sub>2</sub> and 2Al<sub>2</sub>O<sub>3</sub>. Now the right has 2 × 2 = 4 Al, so put 4 in front of Al: 4Al + 3O<sub>2</sub> → 2Al<sub>2</sub>O<sub>3</sub>." },
    { t: "grid", ref: 2, q: "Classify each balanced reaction.", cols: ["Synthesis", "Decomposition", "Single replacement", "Double replacement", "Combustion"],
      rows: [
        ["CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>", 0],
        ["2KClO<sub>3</sub> → 2KCl + 3O<sub>2</sub>", 1],
        ["Cu + 2AgNO<sub>3</sub> → Cu(NO<sub>3</sub>)<sub>2</sub> + 2Ag", 2],
        ["Pb(NO<sub>3</sub>)<sub>2</sub> + 2KI → PbI<sub>2</sub> + 2KNO<sub>3</sub>", 3],
        ["C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> → 3CO<sub>2</sub> + 4H<sub>2</sub>O", 4]
      ],
      why: "Two reactants, one product = synthesis. One reactant breaking apart = decomposition. Copper (an element) replaces silver in a compound = single replacement. Two compounds swap partners = double replacement. A hydrocarbon (C<sub>3</sub>H<sub>8</sub>, propane) plus O<sub>2</sub> making CO<sub>2</sub> and H<sub>2</sub>O = combustion." },
    { t: "ebsr", ref: 1,
      A: { q: "A student burns 10 g of wood in an open fire pit. Only 1 g of ash is left. What is the best explanation?", opts: ["Most of the mass was destroyed by the fire.", "The fire turned most of the mass into energy and light only.", "Most of the atoms left as gases, such as carbon dioxide and water vapor, that escaped into the air.", "The scale was broken, because mass must always stay the same in an open fire."], a: 2 },
      B: { q: "Which sentence from the text <b>best</b> supports your answer to Part A?", opts: ["“Signs that a reaction happened include a color change, gas bubbles, a new solid forming (a precipitate), light, or a temperature change.”", "“It left as gases, mainly carbon dioxide and water vapor, that escaped into the air.”", "“To count atoms, multiply the coefficient by the subscript.”", "“Never change a subscript, because that changes the substance itself.”"], a: 1 },
      why: "Mass is conserved, but in an open system some products are gases that float away. If the wood burned in a sealed container, the total mass would stay the same." },
    { t: "hot", ref: 1, q: "A student explains how she balanced Na + Cl<sub>2</sub> → NaCl. Click the <b>one</b> step where she made a mistake.",
      text: ["Step 1: I counted 1 Na and 2 Cl on the left, and 1 Na and 1 Cl on the right.", "Step 2: Chlorine was not balanced, so I needed 2 Cl on the right.", "Step 3: I changed the product to NaCl<sub>2</sub> so it would have 2 chlorine atoms.", "Step 4: Then I recounted every element on both sides."], a: [2],
      why: "Changing NaCl to NaCl<sub>2</sub> changes a subscript, which makes a different (and wrong) formula. She should add coefficients: 2Na + Cl<sub>2</sub> → 2NaCl." },
    { t: "order", ref: 1, q: "Put the steps for balancing an equation in order (first at the top).", items: ["Write the correct formulas for the reactants and products.", "Count the atoms of each element on each side.", "Add coefficients one element at a time.", "Recount every element and check for the lowest whole-number ratio."],
      why: "You need correct formulas before counting. Then count, adjust coefficients, and finally recount to check that every element matches and the ratio is in lowest terms." },
    { t: "mc", ref: 2, q: "Ethane, C<sub>2</sub>H<sub>6</sub>, burns completely in oxygen. What are the products?", opts: ["C<sub>2</sub> and H<sub>6</sub>", "CH<sub>4</sub> and O<sub>2</sub>", "C and H<sub>2</sub>O only", "CO<sub>2</sub> and H<sub>2</sub>O"], a: 3,
      why: "Ethane is a hydrocarbon, so this is combustion. Complete combustion of any hydrocarbon makes carbon dioxide and water. (Balanced: 2C<sub>2</sub>H<sub>6</sub> + 7O<sub>2</sub> → 4CO<sub>2</sub> + 6H<sub>2</sub>O.)" },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain why you may change <b>coefficients</b> but never <b>subscripts</b> when balancing an equation. Use water (H<sub>2</sub>O) as an example, and connect your answer to the law of conservation of mass.", min: 40,
      checks: [
        { label: "Explains that changing a subscript changes the substance", re: /different (substance|chemical|compound|molecule)|chang\w* (the )?(substance|chemical|compound|identity|formula|what it is)|peroxide|H2O2|not water/i },
        { label: "Explains that a coefficient changes how many molecules", re: /how many|number of (molecules|particles|units)|more molecules|amount|multipl/i },
        { label: "Uses water as an example", re: /H2O|H₂O|water/i },
        { label: "Connects to conservation of mass (atoms are not created or destroyed)", re: /conserv|created|destroyed|same (number|amount) of atoms|rearrang|equal/i }
      ],
      rubric: "2 points: explains both coefficients and subscripts, uses the water example, and connects to conservation of mass. 1 point: partly correct. 0 points: no correct explanation.",
      model: "A subscript is part of the formula, so changing it changes the substance. If you change H2O to H2O2, you have hydrogen peroxide instead of water. A coefficient only changes how many molecules there are, so 2H2O is still water, just two molecules of it. We balance with coefficients because the law of conservation of mass says atoms are not created or destroyed, so we need the same number of each atom on both sides without changing what the substances are.",
      why: "Coefficients count molecules; subscripts define the molecule. Balancing makes the atom count match on both sides (conservation of mass) while keeping the real chemicals the same." }
  ]
};

/* ======================= 3. GAS LAWS ======================= */
RC["sg-chem-gas"] = {
  subject: "Chemistry", mins: 25,
  title: "Gas Laws & Kinetic Molecular Theory",
  blurb: "Review how moving gas particles create pressure, practice Boyle's, Charles's, Gay-Lussac's, and the ideal gas law, then test them in a particle simulation.",
  eq: "How does the motion of gas particles explain the relationships among pressure, volume, temperature, and amount of gas?",
  target: "I can use kinetic molecular theory to explain gas behavior and solve problems with Boyle's, Charles's, Gay-Lussac's, and the ideal gas law.",
  sources: [
    { tab: "Key Ideas", title: "Particles in Motion", numbered: true, blocks: [
      { h: "Kinetic molecular theory (KMT)" },
      { p: "<b>Kinetic molecular theory</b> is a model that explains how gases behave. <i>Kinetic</i> means \"related to motion.\" The model makes five main claims about an <b>ideal gas</b>:" },
      { p: "1) Gas particles are tiny, and the space between them is huge compared with their size. 2) Gas particles move in constant, random, straight-line motion. 3) When particles collide with each other or with the walls, the collisions are <b>elastic</b>, which means no energy is lost overall. 4) Gas particles do not attract or repel each other. 5) The <b>average kinetic energy</b> of the particles is directly proportional to the <b>Kelvin temperature</b>. Hotter gas means faster particles." },
      { h: "Pressure" },
      { p: "<b>Pressure</b> is force divided by area. A gas pushes on its container because billions of particles hit the walls every second. More collisions, or harder collisions, make higher pressure. Pressure is measured in atmospheres (atm), kilopascals (kPa), or millimeters of mercury (mmHg): <b>1 atm = 101.3 kPa = 760 mmHg</b>." },
      { h: "Temperature must be in Kelvin" },
      { p: "In gas law problems, always use the <b>Kelvin</b> scale. Zero kelvin (0 K), called <b>absolute zero</b>, is the temperature where particle motion would be at its minimum. Because Kelvin starts at that true zero, doubling the Kelvin temperature really does double the average kinetic energy. That is not true for degrees Celsius. To convert: <b>K = °C + 273</b>." },
      { box: "<b>Worked example: Kelvin</b><br>Room temperature is 25°C. K = 25 + 273 = <b>298 K</b>.<br>Water boils at 100°C. K = 100 + 273 = <b>373 K</b>.<br>A freezer at −18°C: K = −18 + 273 = <b>255 K</b>." },
      { vocab: [
        ["kinetic energy", "energy of motion. Faster particles have more kinetic energy."],
        ["pressure (P)", "force per area caused by particles colliding with the walls; units atm, kPa, mmHg"],
        ["volume (V)", "the space a gas takes up, which is the size of its container; unit liters (L)"],
        ["temperature (T)", "a measure of the average kinetic energy of the particles; use kelvins (K)"],
        ["amount (n)", "the number of moles of gas particles (mol)"],
        ["directly proportional", "when one variable goes up, the other goes up by the same factor"],
        ["inversely proportional", "when one variable goes up, the other goes down by the same factor"]
      ]}
    ]},
    { tab: "Gas Laws", title: "The Gas Laws", numbered: true, blocks: [
      { table: { cap: "Table 1. Summary of the gas laws.", head: ["Law", "Equation", "Held constant", "Relationship"], rowHead: true, rows: [
        ["Boyle's law", "P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>", "T and n", "P and V are <b>inversely</b> proportional"],
        ["Charles's law", "V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub>", "P and n", "V and T are <b>directly</b> proportional"],
        ["Gay-Lussac's law", "P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub>", "V and n", "P and T are <b>directly</b> proportional"],
        ["Ideal gas law", "PV = nRT", "(none)", "Connects all four variables"]
      ]}},
      { p: "<b>Boyle's law:</b> If you squeeze a gas into half the volume, the particles hit the walls twice as often, so the pressure doubles. Think of pushing in the plunger of a sealed syringe." },
      { box: "<b>Worked example: Boyle's law</b><br>A gas has a volume of 6.0 L at 2.0 atm. The pressure increases to 3.0 atm at the same temperature. Find V<sub>2</sub>.<br>P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> → (2.0)(6.0) = (3.0)V<sub>2</sub> → V<sub>2</sub> = 12 ÷ 3.0 = <b>4.0 L</b>. Pressure went up, so volume went down. ✅" },
      { p: "<b>Charles's law:</b> If you heat a gas, the particles move faster and push harder on the walls. If the walls can move (like a balloon), the gas expands until the pressure inside matches the pressure outside. That is why a balloon shrinks in a freezer." },
      { box: "<b>Worked example: Charles's law</b><br>A balloon holds 3.0 L at 27°C. It is heated to 127°C. Find V<sub>2</sub>.<br>Convert first: T<sub>1</sub> = 27 + 273 = 300 K, T<sub>2</sub> = 127 + 273 = 400 K.<br>V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub>/T<sub>1</sub> = 3.0 × 400/300 = <b>4.0 L</b>." },
      { p: "<b>Gay-Lussac's law:</b> If a gas is in a rigid container (fixed volume) and you heat it, the faster particles hit the walls more often and harder, so the pressure rises. This is why you should never heat a sealed aerosol can." },
      { box: "<b>Worked example: Gay-Lussac's law</b><br>A tire is at 2.0 atm at 300 K. After driving, the air inside is 330 K. Find P<sub>2</sub>.<br>P<sub>2</sub> = P<sub>1</sub> × T<sub>2</sub>/T<sub>1</sub> = 2.0 × 330/300 = <b>2.2 atm</b>." },
      { p: "<b>Ideal gas law:</b> PV = nRT, where <b>R = 0.0821 L·atm/(mol·K)</b>. To use this value of R, pressure must be in atm, volume in L, amount in mol, and temperature in K." },
      { box: "<b>Worked example: ideal gas law</b><br>What is the pressure of 1.00 mol of gas in 22.4 L at 273 K?<br>P = nRT ÷ V = (1.00)(0.0821)(273) ÷ 22.4 = 22.41 ÷ 22.4 ≈ <b>1.00 atm</b>." }
    ]},
    { tab: "Visual", title: "Graphing the Gas Laws", blocks: [
      { fig: RCG.line({ title: "Boyle's Law: Pressure vs. Volume", w: 540, h: 340, x: { min: 0, max: 12, step: 2, label: "Volume (L)" }, y: { min: 0, max: 8, step: 1, label: "Pressure (atm)" },
          series: [{ fn: v => 12 / v, from: 1.5, to: 12, cls: "s1" }],
          marks: [{ x: 2, y: 6, text: "(2, 6)", cls: "s1" }, { x: 3, y: 4, text: "(3, 4)", cls: "s1" }, { x: 4, y: 3, text: "(4, 3)", cls: "s1" }, { x: 6, y: 2, text: "(6, 2)", cls: "s1" }, { x: 12, y: 1, text: "(12, 1)", dx: -8, anchor: "end", cls: "s1" }],
          alt: "Curved line graph of pressure versus volume at constant temperature. As volume increases, pressure decreases. Points: 2 L at 6 atm, 3 L at 4 atm, 4 L at 3 atm, 6 L at 2 atm, 12 L at 1 atm. Pressure times volume is always 12." }),
        cap: "Figure 1. A sample of gas at constant temperature. For every point, P × V = 12 atm·L. This curve shows an <b>inverse</b> relationship." },
      { fig: RCG.line({ title: "Charles's Law: Volume vs. Temperature", w: 540, h: 320, x: { min: 0, max: 600, step: 100, label: "Temperature (K)" }, y: { min: 0, max: 6, step: 1, label: "Volume (L)" },
          series: [{ pts: [[0, 0], [150, 1.5]], cls: "s2", dash: true }, { pts: [[150, 1.5], [600, 6]], cls: "s2" }],
          marks: [{ x: 0, y: 0, text: "absolute zero (0 K)", cls: "s2", dx: 8, dy: -10 }, { x: 300, y: 3, text: "(300 K, 3 L)", cls: "s2", dx: 10, dy: 14 }, { x: 600, y: 6, text: "(600 K, 6 L)", cls: "s2", anchor: "end", dx: -8, dy: 4 }],
          alt: "Straight line graph of volume versus Kelvin temperature at constant pressure. The line passes through the origin at absolute zero. 300 K gives 3 liters and 600 K gives 6 liters. The part below 150 K is dashed because it is extended, not measured." }),
        cap: "Figure 2. At constant pressure, volume is <b>directly</b> proportional to Kelvin temperature. Doubling the temperature from 300 K to 600 K doubles the volume. The dashed part is extended to 0 K." }
    ]},
    { tab: "🔬 Simulation", title: "Gas Law Lab", blocks: [
      { box: "<b>Try this:</b> 1) Watch the particles. Slide the temperature up from 300 K to 600 K. What happens to their speed and to the number of wall hits per second? 2) <b>Boyle's law:</b> Set T = 300 K and n = 1 mol. Record the pressure at V = 10 L, then at V = 5 L. What happened to the pressure when the volume was cut in half? 3) <b>Gay-Lussac's law:</b> Keep V = 10 L and change T from 200 K to 400 K. Record both pressures. 4) Increase n from 1 to 2 mol at constant T and V. Use the particle picture to explain the pressure change. 5) Use 📌 Record data to build a table, and check that P × V stays the same when only V changes." },
      { sim: "gas", title: "Gas Law Lab", tip: "The gauge uses P = nRT ÷ V with R = 0.0821 L·atm/(mol·K).", T: 300, V: 12, n: 1, show: ["T", "V", "n"] }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "According to kinetic molecular theory, what happens to gas particles when the Kelvin temperature increases?", opts: ["They get larger.", "They attract each other more strongly.", "Their average kinetic energy increases, so they move faster.", "They stop colliding with the walls."], a: 2,
      why: "KMT says the average kinetic energy of the particles is directly proportional to the Kelvin temperature. Higher temperature means faster particles. The particles themselves do not grow." },
    { t: "num", ref: 1, q: "Convert <b>25°C</b> to kelvins.", a: 298, tol: 0.2, unit: "K",
      why: "K = °C + 273 = 25 + 273 = 298 K." },
    { t: "num", ref: 2, q: "<b>Boyle's law.</b> A gas fills <b>4.0 L</b> at <b>1.5 atm</b>. At constant temperature, it is compressed to <b>2.0 L</b>. What is the new pressure?", a: 3, tol: 0.05, pre: "P₂ =", unit: "atm",
      why: "P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> → (1.5)(4.0) = P<sub>2</sub>(2.0) → P<sub>2</sub> = 6.0 ÷ 2.0 = 3.0 atm. Half the volume gives double the pressure." },
    { t: "num", ref: 2, q: "<b>Charles's law.</b> A gas has a volume of <b>2.5 L</b> at <b>250 K</b>. At constant pressure, it is heated to <b>400 K</b>. What is the new volume?", a: 4, tol: 0.05, pre: "V₂ =", unit: "L",
      why: "V<sub>2</sub> = V<sub>1</sub> × T<sub>2</sub>/T<sub>1</sub> = 2.5 × 400/250 = 2.5 × 1.6 = 4.0 L. Higher temperature means larger volume." },
    { t: "num", ref: 2, q: "<b>Gay-Lussac's law.</b> A sealed rigid can holds gas at <b>1.2 atm</b> and <b>27°C</b>. It is heated to <b>77°C</b>. What is the new pressure? (Convert to kelvins first.)", a: 1.4, tol: 0.02, pre: "P₂ =", unit: "atm",
      why: "T<sub>1</sub> = 27 + 273 = 300 K and T<sub>2</sub> = 77 + 273 = 350 K. P<sub>2</sub> = 1.2 × 350/300 = 1.4 atm. If you forgot to convert, you would get 1.2 × 77/27 ≈ 3.4 atm, which is far too high." },
    { t: "num", ref: 2, q: "<b>Ideal gas law.</b> What is the pressure of <b>2.00 mol</b> of gas in a <b>24.6 L</b> container at <b>300 K</b>? Use R = 0.0821 L·atm/(mol·K).", a: 2, tol: 0.02, pre: "P =", unit: "atm",
      why: "P = nRT ÷ V = (2.00)(0.0821)(300) ÷ 24.6 = 49.26 ÷ 24.6 ≈ 2.00 atm." },
    { t: "num", ref: 4, q: "<b>Use the simulation.</b> Set T = <b>300 K</b> and n = <b>1 mol</b>. At V = 10 L the gauge reads about 2.46 atm. Now slide the volume to <b>5 L</b>. What does the gauge read?", a: 4.93, tol: 0.03, unit: "atm",
      why: "P = (1)(0.0821)(300) ÷ 5 = 24.63 ÷ 5 ≈ 4.93 atm. Cutting the volume in half doubled the pressure (2.46 × 2 ≈ 4.93), just as Boyle's law predicts." },
    { t: "mc", ref: 3, q: "Use Figure 1. What is the pressure of the gas when its volume is <b>4 L</b>?", opts: ["3 atm", "4 atm", "6 atm", "12 atm"], a: 0,
      why: "The point (4, 3) is on the curve, so P = 3 atm. Check: P × V = 3 × 4 = 12 atm·L, the same as every other point." },
    { t: "grid", ref: 2, q: "Is each relationship <b>direct</b> or <b>inverse</b>? (Assume the other variables are held constant.)", cols: ["Direct", "Inverse"],
      rows: [["Pressure and volume", 1], ["Volume and Kelvin temperature", 0], ["Pressure and Kelvin temperature", 0], ["Pressure and moles of gas", 0]],
      why: "Only pressure and volume are inverse (Boyle's law): one goes up, the other goes down. Heating raises V (Charles) or P (Gay-Lussac). Adding more moles means more particles hitting the walls, so P rises (PV = nRT)." },
    { t: "ebsr", ref: 1,
      A: { q: "A balloon is placed in a freezer and gets smaller. Which explanation is best?", opts: ["Cold air leaks into the balloon and pushes the gas out.", "The gas particles slow down, hit the inside walls less often and less hard, so the balloon shrinks.", "The gas particles shrink in size when they get cold.", "The number of gas particles decreases in the cold."], a: 1 },
      B: { q: "Which sentence from the text <b>best</b> supports your answer to Part A?", opts: ["“Gas particles do not attract or repel each other.”", "“Pressure is measured in atmospheres (atm), kilopascals (kPa), or millimeters of mercury (mmHg).”", "“The average kinetic energy of the particles is directly proportional to the Kelvin temperature.”", "“To convert: K = °C + 273.”"], a: 2 },
      why: "Lower temperature means lower average kinetic energy, so the particles move slower and push less on the walls. The balloon shrinks until the inside and outside pressures match (Charles's law). The particles do not shrink, and none are lost." },
    { t: "inline", ref: 2, q: "Complete the explanation of Boyle's law.",
      text: "At constant temperature, if the volume of a gas doubles, the pressure is [[]]. This happens because the particles hit the walls [[]].",
      blanks: [{ opts: ["doubled", "cut in half", "unchanged"], a: 1 }, { opts: ["more often", "less often", "with more energy"], a: 1 }],
      why: "P and V are inversely proportional. In a bigger container, the same particles at the same speed travel farther between wall hits, so they hit less often and the pressure drops to half." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Car owners often notice their tire pressure is higher after driving on a hot day. Use <b>kinetic molecular theory</b> and a gas law to explain why. Assume the tire's volume stays about the same.", min: 40,
      checks: [
        { label: "Says the temperature of the air in the tire increases", re: /temperature|hotter|heat|warm/i },
        { label: "Explains that particles move faster (more kinetic energy)", re: /faster|kinetic|speed|more energy|move (more|quick)/i },
        { label: "Explains more or harder collisions with the walls", re: /collid|collision|hit|strike|bump|push/i },
        { label: "Names the gas law or the direct P and T relationship", re: /gay.?lussac|P1\s*\/\s*T1|direct|PV\s*=\s*nRT|ideal gas|proportional/i }
      ],
      rubric: "2 points: explains that higher temperature makes particles move faster and collide with the walls more often and harder, and names Gay-Lussac's law or the direct P and T relationship. 1 point: partly correct. 0 points: no correct explanation.",
      model: "On a hot day and after driving, the temperature of the air inside the tire increases. According to kinetic molecular theory, the average kinetic energy of the particles goes up, so they move faster. Faster particles collide with the inside walls of the tire more often and with more force, which increases the pressure. Because the volume stays about the same, this is Gay-Lussac's law: pressure is directly proportional to Kelvin temperature.",
      why: "Temperature measures average kinetic energy. Faster particles cause more frequent and harder collisions, and in a nearly fixed volume that means higher pressure (P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub>)." }
  ]
};
