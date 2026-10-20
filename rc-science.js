/* =====================================================================
   ✏️ READING CHECKS: CHEMISTRY + BIOLOGY
   (See the top of rc-history.js for how questions work.)
   ===================================================================== */

/* ================================ CHEMISTRY ================================ */
const RC_MOLEMAP = `<svg class="dg" viewBox="0 0 660 190" role="img" aria-label="Mole map: grams of A, divide by the molar mass of A, to get moles of A. Multiply by the mole ratio from the balanced equation to get moles of B. Multiply by the molar mass of B to get grams of B.">
  <defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  <rect x="10" y="60" width="130" height="56" rx="12" class="c3"/><text x="75" y="94" text-anchor="middle" class="t">Grams of A</text>
  <rect x="180" y="60" width="130" height="56" rx="12" class="c1"/><text x="245" y="94" text-anchor="middle" class="t">Moles of A</text>
  <rect x="350" y="60" width="130" height="56" rx="12" class="c1"/><text x="415" y="94" text-anchor="middle" class="t">Moles of B</text>
  <rect x="520" y="60" width="130" height="56" rx="12" class="c3"/><text x="585" y="94" text-anchor="middle" class="t">Grams of B</text>
  <line x1="142" y1="88" x2="176" y2="88" class="ink" marker-end="url(#ar2)"/><line x1="312" y1="88" x2="346" y2="88" class="ink" marker-end="url(#ar2)"/><line x1="482" y1="88" x2="516" y2="88" class="ink" marker-end="url(#ar2)"/>
  <text x="159" y="26" text-anchor="middle" class="t">Step 1</text><text x="159" y="44" text-anchor="middle" class="tm">÷ molar mass of A</text><line x1="159" y1="50" x2="159" y2="80" class="ink" stroke-dasharray="3 3"/>
  <text x="329" y="142" text-anchor="middle" class="t">Step 2</text><text x="329" y="160" text-anchor="middle" class="tm">× mole ratio (B : A)</text><text x="329" y="176" text-anchor="middle" class="tm">from the balanced equation</text><line x1="329" y1="96" x2="329" y2="128" class="ink" stroke-dasharray="3 3"/>
  <text x="499" y="26" text-anchor="middle" class="t">Step 3</text><text x="499" y="44" text-anchor="middle" class="tm">× molar mass of B</text><line x1="499" y1="50" x2="499" y2="80" class="ink" stroke-dasharray="3 3"/>
</svg>`;

RC["chem-stoich"] = {
  subject: "Chemistry", mins: 10,
  title: "Stoichiometry: Reading a Chemical Recipe",
  blurb: "Use a balanced equation like a recipe to predict how much product forms.",
  eq: "How can a balanced equation tell us how much product a reaction will make?",
  target: "I can use mole ratios and molar masses from a balanced equation to convert between moles and grams.",
  sources: [
    { tab: "Text", title: "A Balanced Equation Is a Recipe", numbered: true, blocks: [
      { p: "A recipe for 12 cookies might call for 2 cups of flour and 1 egg. If you want 24 cookies, you double everything. <b>Stoichiometry</b> (stoy-key-AH-meh-tree) uses the same idea for chemical reactions: the coefficients in a balanced equation tell you the <b>ratio</b> of particles that react and form." },
      { p: "Consider the reaction that forms water: <b>2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</b>. The coefficients mean that 2 moles of hydrogen gas react with 1 mole of oxygen gas to make 2 moles of water. This is called the <b>mole ratio</b>. The ratio of H<sub>2</sub> to O<sub>2</sub> is 2 : 1, and the ratio of H<sub>2</sub> to H<sub>2</sub>O is 2 : 2, which is the same as 1 : 1." },
      { p: "The equation must be balanced first because of the <b>law of conservation of mass</b>: atoms are not created or destroyed in a chemical reaction, they are only rearranged. Only a balanced equation shows the true number of each kind of particle." },
      { p: "In the lab, we measure substances in grams, not moles. To convert, we use <b>molar mass</b>, the mass of one mole of a substance in grams (g/mol). To go from grams to moles, divide by the molar mass. To go from moles to grams, multiply by the molar mass. The mole map shows the three steps for solving a grams-to-grams problem." },
      { p: "Sometimes one reactant runs out first. It is called the <b>limiting reactant</b> because it limits how much product can form, just as running out of eggs stops you from making more cookies even if you still have flour." },
      { fig: RC_MOLEMAP, cap: "Figure 1. The mole map for a grams-to-grams problem." }
    ]},
    { tab: "Data", blocks: [
      { table: { cap: "Table 1. Molar masses.", head: ["Substance", "Formula", "Molar mass (g/mol)"], rowHead: true, rows: [["Hydrogen gas", "H<sub>2</sub>", "2.02"], ["Oxygen gas", "O<sub>2</sub>", "32.00"], ["Water", "H<sub>2</sub>O", "18.02"], ["Methane", "CH<sub>4</sub>", "16.05"], ["Carbon dioxide", "CO<sub>2</sub>", "44.01"], ["Nitrogen gas", "N<sub>2</sub>", "28.02"], ["Ammonia", "NH<sub>3</sub>", "17.04"]] } },
      { table: { cap: "Table 2. Three balanced reactions.", head: ["Reaction", "Balanced equation"], rowHead: true, rows: [["Making water", "2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O"], ["Burning methane (natural gas)", "CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O"], ["Making ammonia (Haber process)", "N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "In the reaction 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O, what is the mole ratio of H<sub>2</sub> to H<sub>2</sub>O?", opts: ["1 : 2", "1 : 1", "2 : 1", "4 : 2"], a: 1, why: "2 : 2 simplifies to 1 : 1 (paragraph 2)." },
    { t: "num", ref: 1, q: "How many moles of O<sub>2</sub> are needed to react completely with <b>6.0 moles</b> of H<sub>2</sub>?", a: 3, tol: 0.05, unit: "mol O<sub>2</sub>", why: "The ratio of H<sub>2</sub> to O<sub>2</sub> is 2 : 1, so 6.0 mol H<sub>2</sub> × (1 mol O<sub>2</sub> / 2 mol H<sub>2</sub>) = 3.0 mol O<sub>2</sub>." },
    { t: "num", ref: 2, q: "Use Table 1. How many moles are in <b>64.0 g</b> of O<sub>2</sub>?", a: 2, tol: 0.02, unit: "mol", why: "Grams to moles: divide by molar mass. 64.0 g ÷ 32.00 g/mol = 2.00 mol." },
    { t: "num", ref: 2, q: "Methane burns: CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O. If <b>2.0 moles</b> of CH<sub>4</sub> burn completely, how many <b>grams</b> of CO<sub>2</sub> form? (Round to the nearest gram.)", a: 88, tol: 0.6, unit: "g CO<sub>2</sub>", why: "The ratio of CH<sub>4</sub> to CO<sub>2</sub> is 1 : 1, so 2.0 mol CO<sub>2</sub> form. 2.0 mol × 44.01 g/mol ≈ 88 g." },
    { t: "order", ref: 1, q: "Put the steps for a grams-to-grams problem in order (first at the top).", items: ["Write and balance the chemical equation.", "Divide the grams of A by the molar mass of A to get moles of A.", "Multiply by the mole ratio to get moles of B.", "Multiply by the molar mass of B to get grams of B."], why: "Balance first, then follow the mole map: grams A → moles A → moles B → grams B." },
    { t: "ebsr", ref: 1,
      A: { q: "Why must a chemical equation be balanced before you use its mole ratios?", opts: ["Balancing makes the reaction happen faster.", "Atoms are not created or destroyed, so only a balanced equation shows the true ratio of particles.", "Balancing changes the molar masses of the substances.", "Unbalanced equations always have a limiting reactant."], a: 1 },
      B: { q: "Which sentence from the text <b>best</b> supports your answer to Part A?", opts: ["“A recipe for 12 cookies might call for 2 cups of flour and 1 egg.”", "“In the lab, we measure substances in grams, not moles.”", "“Atoms are not created or destroyed in a chemical reaction, they are only rearranged.”", "“Sometimes one reactant runs out first.”"], a: 2 },
      why: "The law of conservation of mass (paragraph 3) is why coefficients must be balanced." },
    { t: "mc", ref: 2, q: "For N<sub>2</sub> + 3H<sub>2</sub> → 2NH<sub>3</sub>, a chemist mixes <b>2 moles of N<sub>2</sub></b> with <b>3 moles of H<sub>2</sub></b>. Which is the limiting reactant?",
      opts: ["N<sub>2</sub>, because there is less of it", "H<sub>2</sub>, because 2 mol N<sub>2</sub> would need 6 mol H<sub>2</sub>", "NH<sub>3</sub>, because it is the product", "Neither; they react exactly"], a: 1,
      why: "Each mole of N<sub>2</sub> needs 3 mol H<sub>2</sub>. 2 mol N<sub>2</sub> needs 6 mol H<sub>2</sub>, but only 3 mol is available, so H<sub>2</sub> runs out first." }
  ]
};

RC["chem-periodic"] = {
  subject: "Chemistry", mins: 10,
  title: "Periodic Trends: Size and Ionization Energy",
  blurb: "Read a graph and a table to explain why atoms get bigger or smaller across the periodic table.",
  eq: "Why do the properties of elements follow patterns on the periodic table?",
  target: "I can use data and Coulomb’s law to explain trends in atomic radius and ionization energy.",
  sources: [
    { tab: "Text", title: "Why the Periodic Table Has Patterns", numbered: true, blocks: [
      { p: "The modern periodic table arranges elements in order of increasing <b>atomic number</b>, the number of protons in the nucleus. Elements in the same column, or <b>group</b>, have the same number of <b>valence electrons</b> (outer electrons), so they have similar chemical properties. Each row is a <b>period</b>, and each new period adds a new energy level of electrons." },
      { p: "These patterns, called <b>periodic trends</b>, come from one idea: <b>Coulomb’s law</b>. Positive and negative charges attract. The attraction is stronger when the charges are larger and when they are closer together. In an atom, the positive nucleus attracts the negative electrons." },
      { p: "<b>Across a period</b> (left to right), each element has one more proton, but the new electrons are added to the same energy level. The greater positive charge pulls the electrons in more tightly. As a result, <b>atomic radius decreases</b> and <b>ionization energy</b>, the energy needed to remove an electron, <b>increases</b>." },
      { p: "<b>Down a group</b> (top to bottom), each element has another energy level, so the outer electrons are farther from the nucleus. Inner electrons also block, or <b>shield</b>, the outer electrons from the nucleus’s pull. As a result, <b>atomic radius increases</b> and <b>ionization energy decreases</b>. This is why the alkali metals become more reactive as you go down Group 1: their single outer electron is easier to remove." }
    ]},
    { tab: "Graph", blocks: [
      { fig: RCG.line({ title: "First Ionization Energy, Elements 1–20", w: 560, h: 360, x: { min: 1, max: 20, step: 1, label: "Atomic number", every: 1 }, y: { min: 0, max: 2500, step: 500, label: "Ionization energy (kJ/mol)" },
          series: [{ pts: [[1, 1312], [2, 2372], [3, 520], [4, 900], [5, 801], [6, 1086], [7, 1402], [8, 1314], [9, 1681], [10, 2081], [11, 496], [12, 738], [13, 578], [14, 787], [15, 1012], [16, 1000], [17, 1251], [18, 1521], [19, 419], [20, 590]], cls: "s1", dots: true }],
          marks: [{ x: 2, y: 2372, text: "He", cls: "s1" }, { x: 10, y: 2081, text: "Ne", cls: "s1" }, { x: 18, y: 1521, text: "Ar", cls: "s1" }, { x: 3, y: 520, text: "Li", dy: 18, cls: "s1" }, { x: 11, y: 496, text: "Na", dy: 18, cls: "s1" }, { x: 19, y: 419, text: "K", dy: 18, cls: "s1" }],
          alt: "Line graph of first ionization energy for atomic numbers 1 to 20. Values in kJ per mol: H 1312, He 2372, Li 520, Be 900, B 801, C 1086, N 1402, O 1314, F 1681, Ne 2081, Na 496, Mg 738, Al 578, Si 787, P 1012, S 1000, Cl 1251, Ar 1521, K 419, Ca 590." }),
        cap: "Figure 1. First ionization energy for the first 20 elements. Peaks are noble gases; low points are alkali metals." }
    ]},
    { tab: "Table", blocks: [
      { table: { cap: "Table 1. Atomic radius in picometers (pm) for Periods 2 and 3.", head: ["Period", "Group 1", "Group 2", "Group 13", "Group 14", "Group 15", "Group 16", "Group 17"], rowHead: true,
        rows: [["2", "Li 152", "Be 112", "B 85", "C 77", "N 75", "O 73", "F 72"], ["3", "Na 186", "Mg 160", "Al 143", "Si 118", "P 110", "S 103", "Cl 100"]] } },
      { table: { cap: "Table 2. Group 1 (alkali metals) going down the group.", head: ["Element", "Energy levels", "Atomic radius (pm)", "Reaction with water"], rowHead: true,
        rows: [["Lithium (Li)", "2", "152", "Fizzes steadily"], ["Sodium (Na)", "3", "186", "Fizzes quickly, may melt"], ["Potassium (K)", "4", "227", "Bursts into flame"], ["Rubidium (Rb)", "5", "248", "Reacts violently"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "According to Figure 1, which element has the <b>highest</b> first ionization energy?", opts: ["Hydrogen (H)", "Helium (He)", "Neon (Ne)", "Potassium (K)"], a: 1, why: "Helium peaks at 2,372 kJ/mol, the highest point on the graph." },
    { t: "num", ref: 2, q: "Use Figure 1. About how much energy is needed to remove one electron from <b>sodium (Na, atomic number 11)</b>?", a: 496, tol: 30, unit: "kJ/mol", why: "The point for atomic number 11 is about 496 kJ/mol, one of the lowest on the graph." },
    { t: "mc", ref: 2, q: "What general pattern does Figure 1 show from lithium (3) to neon (10)?", opts: ["Ionization energy generally increases.", "Ionization energy generally decreases.", "Ionization energy stays the same.", "Ionization energy changes randomly."], a: 0, why: "Across Period 2 the graph climbs from 520 to 2,081 kJ/mol, with small dips, which matches paragraph 3." },
    { t: "ebsr",
      A: { q: "Why does atomic radius <b>decrease</b> from sodium to chlorine?", opts: ["Chlorine has more energy levels than sodium.", "More protons pull electrons in the same energy level closer to the nucleus.", "Chlorine has fewer electrons than sodium.", "Shielding increases a lot across a period."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Table 1: radius drops from 186 pm (Na) to 100 pm (Cl) while both are in Period 3.", "Table 2: potassium bursts into flame in water.", "Figure 1: helium has the highest ionization energy.", "Table 2: rubidium has 5 energy levels."], a: 0 },
      why: "Same period means the same energy level, so the extra protons (Coulomb’s law) pull electrons closer: 186 → 100 pm." },
    { t: "grid", ref: 1, q: "What happens to each property as you move <b>down</b> a group?", cols: ["Increases", "Decreases"],
      rows: [["Atomic radius", 0], ["Ionization energy", 1], ["Number of energy levels", 0], ["Reactivity of alkali metals", 0]],
      why: "Paragraph 4 and Table 2: more energy levels and shielding make atoms bigger and their outer electron easier to remove, so alkali metals react more." },
    { t: "inline", ref: 1, q: "Complete the explanation.",
      text: "Potassium has a lower ionization energy than sodium because its outer electron is [[]] the nucleus and more [[]] by inner electrons.",
      blanks: [{ opts: ["closer to", "farther from", "inside"], a: 1 }, { opts: ["shielded", "attracted", "bonded"], a: 0 }], why: "Paragraph 4: extra energy levels and shielding weaken the pull on the outer electron." },
    { t: "mc", ref: 1, q: "Why do elements in the same group have similar chemical properties?", opts: ["They have the same atomic mass.", "They have the same number of valence electrons.", "They have the same number of protons.", "They were discovered at the same time."], a: 1, why: "Paragraph 1." }
  ]
};

/* ================================= BIOLOGY ================================= */
RC["bio-symbiosis"] = {
  subject: "Biology", mins: 10,
  title: "Symbiosis: Living Together",
  blurb: "Classify relationships as mutualism, commensalism, or parasitism, and read a pollination experiment.",
  eq: "How do close relationships between species help or harm the organisms involved?",
  target: "I can classify symbiotic relationships and support my answer with evidence from a text and data.",
  sources: [
    { tab: "Text", title: "Close Partners", numbered: true, blocks: [
      { p: "<b>Symbiosis</b> is a close, long-term relationship between two different species. Ecologists describe these relationships with symbols: <b>+</b> means a species is helped, <b>−</b> means it is harmed, and <b>0</b> means it is not affected." },
      { p: "In <b>mutualism</b> (+/+), both species benefit. A clownfish lives among the stinging tentacles of a sea anemone, which protect it from predators. In return, the clownfish chases away fish that eat anemones, and its waste provides nutrients. Bees and flowering plants are also partners: bees collect nectar for food, and as they move from flower to flower they carry pollen, which allows the plants to make seeds." },
      { p: "In <b>commensalism</b> (+/0), one species benefits and the other is not affected. A remora attaches to a shark and eats leftover scraps from the shark’s meals, but the shark is neither helped nor harmed. Barnacles riding on a whale get carried to new feeding areas without affecting the whale." },
      { p: "In <b>parasitism</b> (+/−), one species, the <b>parasite</b>, benefits while the other, the <b>host</b>, is harmed. A tick feeds on a dog’s blood and can spread disease. A tapeworm lives in a human’s intestine and absorbs nutrients from the person’s food. Parasites usually do not kill their hosts quickly, because they depend on them." },
      { p: "Not every interaction is symbiosis. When a lion hunts a zebra, the relationship is <b>predation</b>: it is a brief encounter in which one animal kills and eats the other, not a long-term partnership." }
    ]},
    { tab: "Experiment", blocks: [
      { p: "A class wanted to test whether flowers benefit from bee visits. They chose 20 similar plants. On 10 plants, they covered the flowers with mesh bags so bees could not reach them. The other 10 plants were left uncovered. After a month, they counted the seeds produced by each plant.", n: false },
      { fig: RCG.bar({ title: "Average Seeds per Plant", cats: ["Uncovered (bees could visit)", "Covered (bees blocked)"], values: true, w: 520, h: 320,
          series: [{ vals: [120, 15], cls: "s4" }], y: { min: 0, max: 140, step: 20, label: "Seeds per plant" }, alt: "Bar graph. Uncovered plants that bees could visit averaged 120 seeds. Covered plants averaged 15 seeds." }),
        cap: "Figure 1. Sample class data (made up for practice)." }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Classify each relationship.", cols: ["Mutualism", "Commensalism", "Parasitism"],
      rows: [["Clownfish and sea anemone", 0], ["Remora and shark", 1], ["Tapeworm and human", 2], ["Bee and flowering plant", 0], ["Barnacle and whale", 1]],
      why: "Both helped = mutualism. One helped, one unaffected = commensalism. One helped, one harmed = parasitism." },
    { t: "mc", ref: 1, q: "Which symbols describe parasitism?", opts: ["+ / +", "+ / 0", "+ / −", "− / −"], a: 2, why: "The parasite benefits (+) and the host is harmed (−), paragraph 4." },
    { t: "ebsr", ref: 2,
      A: { q: "What does the experiment suggest about the plants?", opts: ["The plants are harmed when bees visit them.", "The plants benefit from bee visits.", "Bees are not affected by the plants.", "Mesh bags help plants make more seeds."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["The class chose 20 similar plants.", "Plants bees could visit averaged about 120 seeds, but covered plants averaged about 15.", "The experiment lasted one month.", "Bees collect nectar for food."], a: 1 },
      why: "Blocking bees cut seed production from about 120 to 15, so bee visits help the plants." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> statements explain why bees and flowers are an example of <b>mutualism</b>?", opts: ["Bees get nectar as food.", "Flowers get their pollen carried to other flowers.", "Bees are harmed by the flowers.", "Flowers are not affected by bees.", "Bees kill the flowers."], a: [0, 1], why: "Both species benefit: food for bees, pollination for flowers." },
    { t: "mc", ref: 1, q: "Why is a lion hunting a zebra <b>not</b> an example of symbiosis?", opts: ["Both animals benefit.", "It is a brief encounter where one animal kills the other, not a long-term relationship.", "Lions and zebras are the same species.", "The zebra is not affected."], a: 1, why: "Paragraph 5: predation is brief; symbiosis is a close, long-term relationship." },
    { t: "inline", ref: 1, q: "Complete the sentences.",
      text: "A remora eats scraps from a shark’s meals. The remora is [[]] and the shark is [[]], so this is [[]].",
      blanks: [{ opts: ["helped", "harmed", "not affected"], a: 0 }, { opts: ["helped", "harmed", "not affected"], a: 2 }, { opts: ["mutualism", "commensalism", "parasitism"], a: 1 }],
      why: "Paragraph 3: +/0 is commensalism." }
  ]
};

RC["bio-protein"] = {
  subject: "Biology", mins: 12,
  title: "Protein Synthesis and Mutations",
  blurb: "Transcribe, translate with a codon chart, and classify four mutations.",
  eq: "How can a change in one DNA base change a protein, or not change it at all?",
  target: "I can use a codon chart to translate mRNA and explain how different mutations affect a protein.",
  sources: [
    { tab: "Text", title: "From DNA to Protein", numbered: true, blocks: [
      { p: "DNA holds the instructions for making proteins, but DNA stays inside the nucleus. To use the instructions, the cell makes a copy called <b>messenger RNA (mRNA)</b>. This first step is <b>transcription</b>. RNA bases pair with the DNA template strand: DNA <b>A</b> pairs with RNA <b>U</b> (uracil), <b>T</b> pairs with <b>A</b>, <b>G</b> pairs with <b>C</b>, and <b>C</b> pairs with <b>G</b>." },
      { p: "The mRNA travels to a <b>ribosome</b>, where <b>translation</b> happens. The ribosome reads the mRNA three bases at a time. Each set of three is a <b>codon</b>. Transfer RNA (tRNA) molecules bring the matching <b>amino acids</b>, which are linked into a chain that folds into a protein. The codon AUG means “start,” and the codons UAA, UAG, and UGA mean “stop.”" },
      { p: "A <b>mutation</b> is a change in the DNA sequence. In a <b>substitution</b>, one base is replaced by another. A substitution can be <b>silent</b> (the codon changes but still codes for the same amino acid), <b>missense</b> (a different amino acid is used), or <b>nonsense</b> (the codon becomes a stop codon and the protein is cut short)." },
      { p: "In an <b>insertion</b> or <b>deletion</b>, a base is added or removed. Because codons are read in groups of three, this shifts the <b>reading frame</b>, so every codon after the mutation changes. This is called a <b>frameshift</b> mutation, and it usually ruins the protein." },
      { p: "Even one base can matter. In sickle cell disease, a single substitution in the gene for hemoglobin changes one amino acid from glutamic acid (Glu) to valine (Val). This small change makes hemoglobin molecules stick together, bending red blood cells into a sickle shape." }
    ]},
    { tab: "Gene + Mutations", blocks: [
      { table: { cap: "Table 1. The original gene, read in codons.", head: ["", "Codon 1", "Codon 2", "Codon 3", "Codon 4", "Codon 5"], rowHead: true,
        rows: [["DNA template", "TAC", "AAA", "CCG", "CTC", "ATT"], ["mRNA", "AUG", "UUU", "GGC", "GAG", "UAA"], ["Amino acid", "Met (start)", "Phe", "Gly", "Glu", "STOP"]] } },
      { table: { cap: "Table 2. Four mutations of the gene (the changed base is in bold).", head: ["Mutation", "New DNA template", "New mRNA"], rowHead: true,
        rows: [["1", "TAC AAA CCG C<b>A</b>C ATT", "AUG UUU GGC G<b>U</b>G UAA"], ["2", "TAC AAA CC<b>T</b> CTC ATT", "AUG UUU GG<b>A</b> GAG UAA"], ["3", "TAC AAA CCG <b>A</b>TC ATT", "AUG UUU GGC <b>U</b>AG UAA"], ["4", "TAC <s>A</s>AA CCG CTC ATT → TAC AAC CGC TCA TT", "AUG UUG GCG AGU AA…"]] } },
      { table: { cap: "Table 3. Codon chart (only the codons you need).", head: ["mRNA codon", "Amino acid"], rowHead: true,
        rows: [["AUG", "Methionine (Met), START"], ["UUU", "Phenylalanine (Phe)"], ["UUG", "Leucine (Leu)"], ["GGC", "Glycine (Gly)"], ["GGA", "Glycine (Gly)"], ["GCG", "Alanine (Ala)"], ["GAG", "Glutamic acid (Glu)"], ["GUG", "Valine (Val)"], ["AGU", "Serine (Ser)"], ["UAA, UAG, UGA", "STOP"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Using the base-pairing rules, what mRNA codon is transcribed from the DNA template <b>TAC</b>?", opts: ["ATG", "AUG", "UAC", "TUG"], a: 1, why: "T→A, A→U, C→G, so TAC becomes AUG (paragraph 1)." },
    { t: "grid", ref: 1, q: "Which step of protein synthesis does each statement describe?", cols: ["Transcription", "Translation"],
      rows: [["The DNA template is used to build an mRNA strand.", 0], ["A ribosome reads mRNA codons.", 1], ["tRNA brings amino acids.", 1], ["It happens inside the nucleus.", 0]],
      why: "Transcription copies DNA into mRNA in the nucleus. Translation happens at the ribosome with tRNA." },
    { t: "mc", ref: 2, q: "Use Tables 1 and 3. What amino acid chain does the original mRNA code for?", opts: ["Met – Phe – Gly – Glu, then stop", "Met – Leu – Ala – Ser, then stop", "Met – Phe – Gly – Val, then stop", "Met, then stop"], a: 0, why: "AUG = Met, UUU = Phe, GGC = Gly, GAG = Glu, UAA = stop." },
    { t: "grid", ref: 2, q: "Use Tables 2 and 3. Classify each mutation.", cols: ["Silent", "Missense", "Nonsense", "Frameshift"],
      rows: [["Mutation 1 (GAG → GUG)", 1], ["Mutation 2 (GGC → GGA)", 0], ["Mutation 3 (GAG → UAG)", 2], ["Mutation 4 (one base deleted)", 3]],
      why: "GUG = Val instead of Glu (missense). GGA is still Gly (silent). UAG is a stop codon (nonsense). Deleting a base shifts every later codon (frameshift)." },
    { t: "ebsr", ref: 2,
      A: { q: "Mutation 2 changes the DNA but not the protein. Why?", opts: ["The ribosome skips mutated codons.", "More than one codon can code for the same amino acid.", "The mutation happened in the stop codon.", "tRNA fixes the mistake."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Table 3 shows that both GGC and GGA code for glycine.", "Table 1 shows that AUG is the start codon.", "Table 3 shows that UAA is a stop codon.", "Table 2 shows Mutation 4 is missing a base."], a: 0 },
      why: "GGC and GGA both mean glycine, so the protein stays the same: a silent mutation." },
    { t: "mc", ref: 1, q: "Which mutation in this activity is most like the one that causes sickle cell disease?", opts: ["Mutation 1", "Mutation 2", "Mutation 3", "Mutation 4"], a: 0, why: "Mutation 1 changes Glu to Val with one substitution, the same change described in paragraph 5." },
    { t: "mc", ref: 1, q: "Why does deleting one base usually cause more damage than substituting one base?", opts: ["Deletions only happen in stop codons.", "It shifts the reading frame, so every codon after it changes.", "Deletions change DNA into RNA.", "Substitutions never change the protein."], a: 1, why: "Paragraph 4: a frameshift changes every codon that follows." }
  ]
};

const RC_TONIC = `<svg class="dg" viewBox="0 0 660 230" role="img" aria-label="Three animal cells. In a hypotonic solution, water moves in and the cell swells and may burst. In an isotonic solution, water moves in and out equally and the cell stays the same. In a hypertonic solution, water moves out and the cell shrinks.">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="f1"/></marker></defs>
  <text x="110" y="24" text-anchor="middle" class="t">Hypotonic</text><text x="110" y="40" text-anchor="middle" class="tm">less solute outside</text>
  <circle cx="110" cy="122" r="56" class="c2"/>
  <line x1="18" y1="122" x2="50" y2="122" class="k1" stroke-width="3" marker-end="url(#ar3)"/><line x1="202" y1="122" x2="170" y2="122" class="k1" stroke-width="3" marker-end="url(#ar3)"/><line x1="110" y1="44" x2="110" y2="62" class="k1" stroke-width="3" marker-end="url(#ar3)"/>
  <text x="110" y="205" text-anchor="middle" class="t">Water moves IN: swells</text>
  <text x="330" y="24" text-anchor="middle" class="t">Isotonic</text><text x="330" y="40" text-anchor="middle" class="tm">equal solute</text>
  <circle cx="330" cy="122" r="42" class="c2"/>
  <line x1="262" y1="112" x2="286" y2="112" class="k1" stroke-width="3" marker-end="url(#ar3)"/><line x1="286" y1="132" x2="262" y2="132" class="k1" stroke-width="3" marker-end="url(#ar3)"/>
  <line x1="398" y1="112" x2="374" y2="112" class="k1" stroke-width="3" marker-end="url(#ar3)"/><line x1="374" y1="132" x2="398" y2="132" class="k1" stroke-width="3" marker-end="url(#ar3)"/>
  <text x="330" y="205" text-anchor="middle" class="t">In = out: no change</text>
  <text x="550" y="24" text-anchor="middle" class="t">Hypertonic</text><text x="550" y="40" text-anchor="middle" class="tm">more solute outside</text>
  <path d="M520 100 q30 -24 60 0 q16 22 0 44 q-30 24 -60 0 q-16 -22 0 -44 z" class="c2"/>
  <line x1="514" y1="122" x2="470" y2="122" class="k1" stroke-width="3" marker-end="url(#ar3)"/><line x1="586" y1="122" x2="630" y2="122" class="k1" stroke-width="3" marker-end="url(#ar3)"/>
  <text x="550" y="205" text-anchor="middle" class="t">Water moves OUT: shrinks</text>
</svg>`;

RC["bio-transport"] = {
  subject: "Biology", mins: 10,
  title: "Cellular Transport: The Potato Osmosis Lab",
  blurb: "Read about passive and active transport, then analyze potato cores in salt-sugar solutions.",
  eq: "How do cells move materials in and out to stay alive?",
  target: "I can explain passive and active transport and use lab data to predict how osmosis affects cells.",
  sources: [
    { tab: "Text", title: "Crossing the Cell Membrane", numbered: true, blocks: [
      { p: "Every cell is surrounded by a <b>cell membrane</b> that is <b>selectively permeable</b>: it lets some substances cross and blocks others. Cells move materials across the membrane in two main ways." },
      { p: "<b>Passive transport</b> does not use the cell’s energy. Particles move from an area of <b>high concentration</b> to an area of <b>low concentration</b>, “down” the concentration gradient. In <b>diffusion</b>, small molecules such as oxygen slip directly through the membrane. In <b>facilitated diffusion</b>, larger molecules such as glucose pass through protein channels, still moving from high to low." },
      { p: "<b>Osmosis</b> is the diffusion of water. Water moves toward the side with <b>more dissolved solute</b> (and therefore less water). If the solution outside a cell has less solute than the cell, it is <b>hypotonic</b>, and water moves in. If it has more solute, it is <b>hypertonic</b>, and water moves out. If the amounts are equal, the solution is <b>isotonic</b>, and water moves in and out at the same rate." },
      { p: "<b>Active transport</b> moves particles from low concentration to high concentration, “up” the gradient. Like pushing a ball uphill, this requires energy from <b>ATP</b>. The sodium-potassium pump in nerve cells is an example." },
      { p: "Osmosis can change a cell’s shape. A red blood cell placed in pure water swells and may burst. A plant cell in pure water swells too, but its strong cell wall keeps it from bursting, which keeps the plant firm. In salty water, both kinds of cells lose water and shrink." },
      { fig: RC_TONIC, cap: "Figure 1. What happens to an animal cell in three kinds of solutions." }
    ]},
    { tab: "Lab Data", blocks: [
      { p: "Students cut equal potato cores, weighed them, and soaked each one in a different concentration of sugar (sucrose) solution for 24 hours. Then they weighed the cores again and calculated the percent change in mass.", n: false },
      { fig: RCG.line({ title: "Potato Core Mass Change After 24 Hours", x: { min: 0, max: 1, step: 0.2, label: "Sucrose concentration (M)", fmt: v => v.toFixed(1) }, y: { min: -30, max: 30, step: 10, label: "Change in mass (%)" }, hlines: [{ y: 0, label: "no change" }],
          series: [{ pts: [[0, 20], [0.2, 8], [0.4, -2], [0.6, -10], [0.8, -17], [1, -22]], cls: "s1", dots: true }],
          alt: "Line graph. At 0.0 M the cores gained 20 percent mass. At 0.2 M, plus 8 percent. At 0.4 M, minus 2 percent. At 0.6 M, minus 10. At 0.8 M, minus 17. At 1.0 M, minus 22. The line crosses zero between 0.2 and 0.4 M." }),
        cap: "Figure 2. Sample class data. Points above 0 gained mass; points below 0 lost mass." },
      { table: { cap: "Table 1. The same data.", head: ["Sucrose (M)", "0.0", "0.2", "0.4", "0.6", "0.8", "1.0"], rowHead: true, rows: [["Change in mass (%)", "+20", "+8", "−2", "−10", "−17", "−22"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "In pure water (0.0 M), the potato core gained mass. Why?", opts: ["Sugar moved into the potato cells.", "The solution was hypotonic, so water moved into the cells by osmosis.", "The cells used ATP to pump water out.", "The solution was hypertonic, so water moved out."], a: 1, why: "Pure water has less solute than the potato cells, so water moves in (paragraph 3)." },
    { t: "num", ref: 2, q: "Use Figure 2. Estimate the sucrose concentration where the potato would have <b>no change</b> in mass (the isotonic point).", a: 0.35, tol: 0.06, unit: "M", why: "The line crosses 0% between 0.2 M (+8%) and 0.4 M (−2%), at about 0.35 M (answers from 0.30 to 0.40 count)." },
    { t: "ebsr", ref: 2,
      A: { q: "How would you describe the 1.0 M solution compared to the potato cells?", opts: ["Hypotonic", "Isotonic", "Hypertonic", "It has no solute"], a: 2 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["The core in 1.0 M lost about 22% of its mass, so water moved out.", "The core in 0.0 M gained 20% of its mass.", "All cores were soaked for 24 hours.", "The cores were cut to the same size."], a: 0 },
      why: "Losing mass means water left the cells, which happens in a hypertonic solution." },
    { t: "grid", ref: 1, q: "Is each example passive or active transport?", cols: ["Passive", "Active"],
      rows: [["Oxygen diffuses into a cell.", 0], ["The sodium-potassium pump moves ions using ATP.", 1], ["Water enters a cell by osmosis.", 0], ["Glucose moves through a protein channel from high to low concentration.", 0], ["A cell moves particles from low to high concentration.", 1]],
      why: "Passive moves high → low with no energy. Active moves low → high and uses ATP." },
    { t: "mc", ref: 1, q: "What happens to a red blood cell placed in pure water?", opts: ["It shrinks.", "It stays the same.", "It swells and may burst.", "It grows a cell wall."], a: 2, why: "Paragraph 5 and Figure 1: water moves in, and animal cells have no cell wall to stop them from bursting." },
    { t: "inline", ref: 1, q: "Complete the sentences.",
      text: "During osmosis, water moves toward the side with [[]] dissolved solute. Osmosis is a type of [[]] transport, so it [[]] energy from ATP.",
      blanks: [{ opts: ["more", "less", "no"], a: 0 }, { opts: ["passive", "active"], a: 0 }, { opts: ["requires", "does not require"], a: 1 }],
      why: "Paragraphs 2 and 3." }
  ]
};

const RC_LOOP = `<svg class="dg" viewBox="0 0 660 300" role="img" aria-label="Two feedback loops around a set point of about 70 to 100 milligrams per deciliter. Top loop: blood glucose rises after a meal, the pancreas releases insulin, body cells take in glucose and the liver stores it as glycogen, and blood glucose falls back to normal. Bottom loop: blood glucose falls, the pancreas releases glucagon, the liver breaks down glycogen and releases glucose, and blood glucose rises back to normal.">
  <defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  <rect x="245" y="122" width="170" height="56" rx="28" class="c4"/><text x="330" y="146" text-anchor="middle" class="t">Normal blood glucose</text><text x="330" y="164" text-anchor="middle" class="tm">about 70–100 mg/dL</text>
  <rect x="10" y="14" width="190" height="50" rx="10" class="c3"/><text x="105" y="36" text-anchor="middle" class="t">Glucose RISES</text><text x="105" y="53" text-anchor="middle" class="tm">(after a meal)</text>
  <rect x="235" y="14" width="190" height="50" rx="10" class="c1"/><text x="330" y="36" text-anchor="middle" class="t">Pancreas releases</text><text x="330" y="53" text-anchor="middle" class="t">INSULIN</text>
  <rect x="460" y="14" width="190" height="50" rx="10" class="c1"/><text x="555" y="34" text-anchor="middle" class="tm">Cells take in glucose;</text><text x="555" y="51" text-anchor="middle" class="tm">liver stores glycogen</text>
  <line x1="202" y1="39" x2="231" y2="39" class="ink" marker-end="url(#ar4)"/><line x1="427" y1="39" x2="456" y2="39" class="ink" marker-end="url(#ar4)"/>
  <path d="M555 66 Q555 140 419 146" class="ink" marker-end="url(#ar4)"/><text x="570" y="110" class="tm">glucose falls</text>
  <rect x="10" y="236" width="190" height="50" rx="10" class="c3"/><text x="105" y="258" text-anchor="middle" class="t">Glucose FALLS</text><text x="105" y="275" text-anchor="middle" class="tm">(between meals)</text>
  <rect x="235" y="236" width="190" height="50" rx="10" class="c2"/><text x="330" y="258" text-anchor="middle" class="t">Pancreas releases</text><text x="330" y="275" text-anchor="middle" class="t">GLUCAGON</text>
  <rect x="460" y="236" width="190" height="50" rx="10" class="c2"/><text x="555" y="256" text-anchor="middle" class="tm">Liver breaks down</text><text x="555" y="273" text-anchor="middle" class="tm">glycogen into glucose</text>
  <line x1="202" y1="261" x2="231" y2="261" class="ink" marker-end="url(#ar4)"/><line x1="427" y1="261" x2="456" y2="261" class="ink" marker-end="url(#ar4)"/>
  <path d="M555 234 Q555 160 419 156" class="ink" marker-end="url(#ar4)"/><text x="570" y="200" class="tm">glucose rises</text>
  <path d="M245 140 Q105 140 105 68" class="ink" stroke-dasharray="5 5" marker-end="url(#ar4)"/><path d="M245 162 Q105 162 105 232" class="ink" stroke-dasharray="5 5" marker-end="url(#ar4)"/>
</svg>`;

RC["bio-homeostasis"] = {
  subject: "Biology", mins: 10,
  title: "Homeostasis: Balancing Blood Sugar",
  blurb: "Read a feedback-loop diagram and a glucose graph to explain how the body stays balanced.",
  eq: "How does the body keep conditions stable when the outside world keeps changing?",
  target: "I can explain how a negative feedback loop maintains homeostasis using a diagram and a graph.",
  sources: [
    { tab: "Text", title: "Staying in Balance", numbered: true, blocks: [
      { p: "Your body works best when conditions such as temperature, water, and blood sugar stay within a narrow range. Keeping a stable internal environment is called <b>homeostasis</b>. When you get hot, you sweat; when you get cold, you shiver. Both responses bring your body temperature back toward its <b>set point</b>." },
      { p: "Most homeostasis is controlled by <b>negative feedback loops</b>. In a negative feedback loop, a change (the <b>stimulus</b>) is detected by a <b>sensor</b>, and the body responds in a way that <b>reverses</b> the change. A home thermostat works the same way: when the room gets too warm, the air conditioner turns on until the temperature drops back to the setting." },
      { p: "Blood glucose (sugar) is a good example. After a meal, glucose from food enters the blood and the level rises. The <b>pancreas</b> senses the rise and releases the hormone <b>insulin</b>. Insulin signals body cells to take in glucose and signals the liver to store extra glucose as <b>glycogen</b>. The blood glucose level falls back to normal." },
      { p: "Between meals, blood glucose drops. The pancreas then releases a different hormone, <b>glucagon</b>, which signals the liver to break down glycogen and release glucose into the blood. The level rises back to normal." },
      { p: "In <b>diabetes</b>, this loop does not work well. In type 1 diabetes, the pancreas makes little or no insulin. In type 2 diabetes, body cells do not respond well to insulin. Either way, glucose builds up in the blood, which can damage the heart, kidneys, eyes, and nerves over time." },
      { fig: RC_LOOP, cap: "Figure 1. Two negative feedback loops keep blood glucose in balance." }
    ]},
    { tab: "Graph", blocks: [
      { p: "Two adults drank the same sugary drink at time 0. Their blood glucose was measured every 30 minutes.", n: false },
      { fig: RCG.line({ title: "Blood Glucose After a Sugary Drink", x: { min: 0, max: 180, step: 30, label: "Time after drink (minutes)" }, y: { min: 0, max: 280, step: 40, label: "Blood glucose (mg/dL)" }, legend: "right",
          bands: [{ y1: 70, y2: 100, label: "normal fasting range" }],
          series: [{ pts: [[0, 85], [30, 140], [60, 120], [90, 100], [120, 90], [150, 85], [180, 85]], cls: "s4", dots: true, label: "Person A" }, { pts: [[0, 130], [30, 210], [60, 240], [90, 230], [120, 210], [150, 190], [180, 175]], cls: "s2", dots: true, label: "Person B" }],
          alt: "Line graph. Person A starts at 85, peaks at 140 at 30 minutes, and returns to 85 by 150 minutes. Person B starts at 130, peaks at 240 at 60 minutes, and is still 175 at 180 minutes. A shaded band marks the normal fasting range of 70 to 100." }),
        cap: "Figure 2. Sample data (made up for practice)." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "According to Figure 2, when did Person A’s blood glucose reach its highest level?", opts: ["0 minutes", "30 minutes", "90 minutes", "180 minutes"], a: 1, why: "Person A peaks at about 140 mg/dL at 30 minutes." },
    { t: "mc", ref: 1, q: "Which hormone most likely caused Person A’s glucose to drop after 30 minutes?", opts: ["Glucagon", "Insulin", "Adrenaline", "Glycogen"], a: 1, why: "Insulin helps cells take in glucose and the liver store it, lowering blood glucose (paragraph 3). Glycogen is stored sugar, not a hormone." },
    { t: "ebsr", ref: 2,
      A: { q: "Which conclusion about Person B is <b>best</b> supported?", opts: ["Person B’s body brings glucose back to normal faster than Person A’s.", "Person B’s feedback loop is not working well, as in diabetes.", "Person B did not drink the sugary drink.", "Person B’s pancreas makes too much glucagon after meals."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Person B started at 130 mg/dL and was still about 175 mg/dL after 180 minutes.", "Person A returned to 85 mg/dL by 150 minutes.", "Both people drank the same drink.", "Glucose was measured every 30 minutes."], a: 0 },
      why: "Person B stays far above the normal range for 3 hours, so insulin is not lowering glucose effectively." },
    { t: "order", ref: 1, q: "Put the steps of the high-glucose feedback loop in order (first at the top).", items: ["Blood glucose rises after a meal.", "The pancreas senses the high glucose.", "The pancreas releases insulin.", "Body cells take in glucose and the liver stores glycogen.", "Blood glucose returns to normal."], why: "Stimulus → sensor → hormone → response → back to the set point (Figure 1)." },
    { t: "grid", ref: 1, q: "Does each statement describe insulin or glucagon?", cols: ["Insulin", "Glucagon"],
      rows: [["Lowers blood glucose", 0], ["Released when blood glucose is low", 1], ["Tells the liver to break down glycogen", 1], ["Helps body cells take in glucose", 0]], why: "Paragraphs 3 and 4." },
    { t: "mc", ref: 1, q: "Why is the blood glucose loop called <b>negative</b> feedback?", opts: ["It always lowers blood glucose.", "It is bad for the body.", "The response reverses the change and returns the level to the set point.", "It only happens in people with diabetes."], a: 2, why: "Paragraph 2: negative feedback reverses a change, whether the level is too high or too low." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> are examples of homeostasis?", opts: ["Sweating when you are hot", "Growing taller during the teen years", "Shivering when you are cold", "Getting a sunburn", "Learning to ride a bike"], a: [0, 2], why: "Sweating and shivering return body temperature to its set point (paragraph 1)." }
  ]
};
