/* =====================================================================
   ✏️ UNIT STUDY GUIDES: BIOLOGY
   sg-bio-cells     Cells & Cellular Transport
   sg-bio-genetics  Genetics & Heredity
   (Format: see the top of rc-engine.js and rc-science.js.)
   ===================================================================== */

/* ---------- Diagram: the cell membrane and three ways across it ---------- */
const SGBIO_MEMBRANE = (function () {
  let lip = "";
  for (let x = 30; x <= 530; x += 20) {
    if ((x > 185 && x < 265) || (x > 365 && x < 445)) continue;
    lip += `<line x1="${x - 3}" y1="122" x2="${x - 3}" y2="152" class="ink"/><line x1="${x + 3}" y1="122" x2="${x + 3}" y2="152" class="ink"/><circle cx="${x}" cy="116" r="8" class="c1"/>`;
    lip += `<line x1="${x - 3}" y1="160" x2="${x - 3}" y2="190" class="ink"/><line x1="${x + 3}" y1="160" x2="${x + 3}" y2="190" class="ink"/><circle cx="${x}" cy="196" r="8" class="c1"/>`;
  }
  return `<svg class="dg" viewBox="0 0 700 310" role="img" aria-label="Cross section of the cell membrane. A phospholipid bilayer has hydrophilic heads facing the water outside and inside the cell, and hydrophobic tails facing each other in the middle. On the left, small molecules like oxygen and carbon dioxide pass straight through the bilayer by simple diffusion, from high to low concentration, with no energy. In the middle, a channel protein lets ions or water pass by facilitated diffusion, from high to low concentration, with no energy. On the right, a pump protein uses ATP to move sodium ions from low to high concentration by active transport.">
  <defs><marker id="sgbAr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" class="fillfg"/></marker></defs>
  <text x="20" y="22" class="t">OUTSIDE the cell (watery fluid)</text>
  ${lip}
  <rect x="196" y="96" width="20" height="120" rx="8" class="c2"/><rect x="234" y="96" width="20" height="120" rx="8" class="c2"/>
  <rect x="378" y="94" width="56" height="124" rx="16" class="c4"/>
  <line x1="100" y1="50" x2="100" y2="236" class="ink" marker-end="url(#sgbAr)"/><text x="108" y="58" class="t">O₂, CO₂</text>
  <line x1="225" y1="50" x2="225" y2="236" class="ink" marker-end="url(#sgbAr)"/><text x="233" y="58" class="t">ions, water</text>
  <line x1="406" y1="236" x2="406" y2="50" class="ink" marker-end="url(#sgbAr)"/><text x="414" y="58" class="t">Na⁺</text>
  <text x="440" y="232" class="t">ATP</text>
  <line x1="542" y1="116" x2="555" y2="116" class="ink"/><text x="560" y="114" class="t">Hydrophilic head</text><text x="560" y="129" class="tm">(attracted to water)</text>
  <line x1="542" y1="156" x2="555" y2="156" class="ink"/><text x="560" y="154" class="t">Hydrophobic tails</text><text x="560" y="169" class="tm">(avoid water)</text>
  <line x1="542" y1="196" x2="555" y2="196" class="ink"/><text x="560" y="200" class="t">Hydrophilic head</text>
  <text x="100" y="258" text-anchor="middle" class="t">Simple diffusion</text><text x="100" y="274" text-anchor="middle" class="tm">high → low, no energy</text>
  <text x="225" y="258" text-anchor="middle" class="t">Facilitated diffusion</text><text x="225" y="274" text-anchor="middle" class="tm">channel protein, no energy</text>
  <text x="406" y="258" text-anchor="middle" class="t">Active transport</text><text x="406" y="274" text-anchor="middle" class="tm">pump uses ATP, low → high</text>
  <text x="20" y="300" class="t">INSIDE the cell (cytoplasm)</text>
</svg>`;
})();

/* ---------- Diagram: a labeled monohybrid Punnett square ---------- */
const SGBIO_PUNNETT = `<svg class="dg" viewBox="0 0 660 280" role="img" aria-label="Punnett square for two heterozygous parents, Bb times Bb, where B is brown fur and b is white fur. Parent 1's gametes, B and b, go across the top. Parent 2's gametes, B and b, go down the side. The four boxes are BB, Bb, Bb, and bb. Genotype ratio 1 BB to 2 Bb to 1 bb. Phenotype ratio 3 brown to 1 white. The probability of a white offspring is 1 out of 4, or 25 percent.">
  <text x="240" y="24" text-anchor="middle" class="t">Parent 1: Bb → gametes B or b</text>
  <text transform="translate(92 160) rotate(-90)" text-anchor="middle" class="t">Parent 2: Bb → gametes B or b</text>
  <text x="195" y="60" text-anchor="middle" class="t">B</text><text x="285" y="60" text-anchor="middle" class="t">b</text>
  <text x="132" y="125" text-anchor="middle" class="t">B</text><text x="132" y="215" text-anchor="middle" class="t">b</text>
  <rect x="150" y="70" width="90" height="90" class="c3"/><text x="195" y="112" text-anchor="middle" class="t">BB</text><text x="195" y="130" text-anchor="middle" class="tm">brown</text>
  <rect x="240" y="70" width="90" height="90" class="c3"/><text x="285" y="112" text-anchor="middle" class="t">Bb</text><text x="285" y="130" text-anchor="middle" class="tm">brown</text>
  <rect x="150" y="160" width="90" height="90" class="c3"/><text x="195" y="202" text-anchor="middle" class="t">Bb</text><text x="195" y="220" text-anchor="middle" class="tm">brown</text>
  <rect x="240" y="160" width="90" height="90" class="c1"/><text x="285" y="202" text-anchor="middle" class="t">bb</text><text x="285" y="220" text-anchor="middle" class="tm">white</text>
  <text x="370" y="90" class="t">Key: B = brown fur (dominant)</text><text x="408" y="108" class="t">b = white fur (recessive)</text>
  <text x="370" y="150" class="t">Genotype ratio:</text><text x="370" y="168" class="tm">1 BB : 2 Bb : 1 bb</text>
  <text x="370" y="200" class="t">Phenotype ratio:</text><text x="370" y="218" class="tm">3 brown : 1 white</text>
  <text x="370" y="250" class="t">P(white) = 1/4 = 25%</text>
</svg>`;

/* ============================== CELLS & TRANSPORT ============================== */
RC["sg-bio-cells"] = {
  subject: "Biology", mins: 25,
  title: "Cells & Cellular Transport",
  blurb: "Review cell types, organelles, the cell membrane, and how water and other materials move in and out of cells.",
  eq: "How does a cell control what enters and leaves it, and why does that matter for staying alive?",
  target: "I can compare cell types, explain the structure of the cell membrane, and predict how cells respond to hypotonic, isotonic, and hypertonic solutions.",
  sources: [
    { tab: "Key Ideas", title: "Cells and Their Parts", numbered: true, blocks: [
      { h: "Two kinds of cells" },
      { p: "Every living thing is made of one or more <b>cells</b>, and every cell has a <b>cell membrane</b>, <b>cytoplasm</b> (the jelly-like fluid inside), <b>ribosomes</b>, and <b>DNA</b>. Scientists sort cells into two big groups based on one question: is the DNA inside a nucleus?" },
      { p: "<b>Prokaryotic cells</b> (bacteria and archaea) have <b>no nucleus</b> and no membrane-bound organelles. Their DNA is usually one circular chromosome that floats in a region called the <b>nucleoid</b>. They are small, usually about 1 to 10 micrometers across. <b>Eukaryotic cells</b> (plants, animals, fungi, and protists) keep their DNA inside a <b>nucleus</b> and have many <b>membrane-bound organelles</b>. They are usually 10 to 100 micrometers across." },
      { box: "<b>Memory trick:</b> <i>Pro</i>karyote sounds like “<i>no</i>,” as in <b>no</b> nucleus. <i>Eu</i>karyote sounds like “<i>do</i>,” as in it <b>do</b>es have a nucleus." },
      { h: "Organelles: the cell’s “organs”" },
      { vocab: [
        ["Nucleus", "Stores the cell’s DNA and controls the cell’s activities."],
        ["Ribosome", "Builds proteins. Found in ALL cells, both prokaryotic and eukaryotic."],
        ["Endoplasmic reticulum (ER)", "Folded membranes. Rough ER (with ribosomes) helps make proteins; smooth ER makes lipids."],
        ["Golgi apparatus", "Modifies, sorts, and packages proteins into vesicles to ship, like a post office."],
        ["Mitochondrion", "Releases energy from food by making ATP in cellular respiration. Found in BOTH plant and animal cells."],
        ["Chloroplast", "Captures light energy to make sugar in photosynthesis. Found in plant cells, not animal cells."],
        ["Lysosome", "Uses enzymes to break down wastes and worn-out parts. Common in animal cells."],
        ["Vacuole", "Stores water and materials. Plant cells have one large central vacuole that pushes on the cell wall."],
        ["Cell wall", "A stiff layer outside the membrane that supports and protects plant cells (also fungi and most bacteria)."]
      ]},
      { table: { cap: "Table 1. Plant cells vs. animal cells.", head: ["Structure", "Plant cell", "Animal cell"], rowHead: true, rows: [
        ["Cell membrane", "Yes", "Yes"], ["Nucleus", "Yes", "Yes"], ["Mitochondria", "Yes", "Yes"], ["Cell wall", "Yes", "No"], ["Chloroplasts", "Yes", "No"], ["Vacuole", "One large central vacuole", "Small or none"], ["Usual shape", "Boxy, fixed shape", "Round or flexible shape"]
      ]}},
      { box: "<b>Common mistake:</b> Plants have mitochondria too! Chloroplasts make sugar, but plant cells still need mitochondria to turn that sugar into usable energy (ATP)." }
    ]},
    { tab: "Transport", title: "The Cell Membrane and Moving Materials", numbered: true, blocks: [
      { h: "The phospholipid bilayer" },
      { p: "The cell membrane is made mostly of <b>phospholipids</b>. Each phospholipid has a <b>hydrophilic</b> (“water-loving”) head and two <b>hydrophobic</b> (“water-fearing”) tails. Because there is water both outside and inside the cell, the phospholipids form a double layer, called a <b>bilayer</b>: the heads face the water on each side, and the tails hide in the middle, away from water." },
      { p: "The membrane is <b>selectively permeable</b>: it lets some substances cross easily and blocks others. Small, nonpolar molecules such as O<sub>2</sub> and CO<sub>2</sub> slip right through the tails. Ions, large molecules like glucose, and most water molecules need help from <b>transport proteins</b> that span the membrane." },
      { h: "Passive transport: no energy needed" },
      { p: "In <b>passive transport</b>, substances move <b>down</b> their concentration gradient, from an area of <b>high</b> concentration to an area of <b>low</b> concentration. The cell spends no energy, just like a ball rolling downhill." },
      { vocab: [
        ["Diffusion", "Particles spread from high to low concentration. Example: O<sub>2</sub> moves from the lungs into the blood."],
        ["Facilitated diffusion", "Diffusion through a channel or carrier protein. Example: glucose enters a cell through a carrier protein."],
        ["Osmosis", "The diffusion of WATER across a selectively permeable membrane, often through channel proteins called aquaporins."],
        ["Concentration gradient", "A difference in concentration between two areas."]
      ]},
      { h: "Active transport: energy needed" },
      { p: "In <b>active transport</b>, the cell uses energy, usually <b>ATP</b>, to move substances <b>against</b> their gradient, from <b>low</b> to <b>high</b> concentration, like pushing a ball uphill." },
      { vocab: [
        ["Protein pump", "A transport protein that uses ATP. Example: the sodium-potassium pump moves 3 Na<sup>+</sup> out and 2 K<sup>+</sup> in for each ATP it uses."],
        ["Endocytosis", "The membrane folds around a large particle and pinches off to bring it IN inside a vesicle. Example: a white blood cell swallowing a bacterium."],
        ["Exocytosis", "A vesicle fuses with the membrane and releases its contents OUT. Example: a pancreas cell releasing insulin."]
      ]},
      { h: "Tonicity: which way will water move?" },
      { p: "<b>Tonicity</b> compares the solute (dissolved stuff, like salt or sugar) concentration outside a cell to the concentration inside. In osmosis, <b>water moves toward the side with MORE solute</b>, because that side has less free water." },
      { table: { cap: "Table 2. Three kinds of solutions (compared to the inside of the cell).", head: ["Solution outside", "Solute outside vs. inside", "Net water movement", "Animal cell", "Plant cell"], rowHead: true, rows: [
        ["Hypotonic", "Less solute outside", "Into the cell", "Swells, may burst (lysis)", "Firm and turgid (healthy)"],
        ["Isotonic", "Equal", "No net movement", "Normal", "Somewhat limp"],
        ["Hypertonic", "More solute outside", "Out of the cell", "Shrivels (crenation)", "Plasmolysis: membrane pulls away from the wall; plant wilts"]
      ]}},
      { box: "<b>Worked example:</b> A red blood cell has about 0.9% salt inside. It is placed in 3% salt water. The outside has MORE solute, so the solution is <b>hypertonic</b>. Water moves OUT of the cell by osmosis, and the cell shrivels." }
    ]},
    { tab: "Visual", title: "Diagram and Data", blocks: [
      { fig: SGBIO_MEMBRANE, cap: "Figure 1. The phospholipid bilayer and three ways materials cross it." },
      { p: "<b>Potato core lab.</b> A class cut potato cores of equal size, found each core’s mass, and soaked each core in a different sucrose (sugar) solution for 24 hours. Then they found each mass again and calculated the percent change in mass. A gain in mass means water moved in. A loss in mass means water moved out." },
      { fig: RCG.line({ title: "Potato Cores in Sucrose Solutions", w: 560, h: 360,
          x: { min: 0, max: 1, step: 0.2, label: "Sucrose concentration (M)", fmt: v => v.toFixed(1) },
          y: { min: -30, max: 30, step: 10, label: "Change in mass (%)" },
          hlines: [{ y: 0, label: "no change in mass" }],
          series: [{ pts: [[0, 21], [0.2, 8], [0.4, -3], [0.6, -12], [0.8, -19], [1.0, -24]], cls: "s1", dots: true }],
          notes: [{ x: 0.03, y: 26, text: "Gained water" }, { x: 0.97, y: -28, text: "Lost water", anchor: "end" }],
          alt: "Line graph of percent change in mass of potato cores versus sucrose concentration. 0.0 M: plus 21 percent. 0.2 M: plus 8 percent. 0.4 M: minus 3 percent. 0.6 M: minus 12 percent. 0.8 M: minus 19 percent. 1.0 M: minus 24 percent. The line crosses zero between 0.2 and 0.4 M, at about 0.35 M." }),
        cap: "Figure 2. Sample class data (made up for practice, but typical of real results)." },
      { box: "<b>How to read it:</b> Where the line crosses 0% (about 0.35 M), the solution is <b>isotonic</b> to the potato cells. Weaker solutions (to the left) are hypotonic, so the cores gained water. Stronger solutions (to the right) are hypertonic, so the cores lost water." }
    ]},
    { tab: "🔬 Simulation", title: "Osmosis Lab", blocks: [
      { box: "<b>Try this:</b> 1) Keep the 🩸 Animal cell. Slide the outside salt to <b>0.9%</b>. Notice there is no net water flow (isotonic). 2) Slide it down to <b>0.0%</b>. Watch water rush in until the cell bursts (lysis). 3) Slide it up to <b>3.0%</b> and watch the cell shrink. 4) Switch to 🌿 Plant cell and repeat steps 2 and 3. How does the cell wall change what happens?" },
      { sim: "osmosis", title: "Osmosis Lab", tip: "Small dots are water, which can cross the membrane. Larger dots are salt, which cannot.", out: 0.9 },
      { box: "<b>Think about it:</b> Hospitals give patients IV fluid that is about 0.9% salt (called normal saline). Using the simulation, explain why pure water would be dangerous to put straight into the blood." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which feature tells you that a cell is <b>prokaryotic</b>?",
      opts: ["It has a cell wall.", "It has ribosomes.", "Its DNA is in a nucleoid region, not inside a nucleus.", "It has a cell membrane."], a: 2,
      why: "Prokaryotes have no nucleus, so their DNA sits in the nucleoid. A cell wall is also found in plants and fungi, and every cell has ribosomes and a cell membrane, so those features cannot tell the two groups apart." },
    { t: "grid", ref: 1, q: "Is each feature found in prokaryotic cells only, eukaryotic cells only, or both?", cols: ["Prokaryotic only", "Eukaryotic only", "Both"],
      rows: [["Has a nucleus", 1], ["Has ribosomes", 2], ["Has a cell membrane", 2], ["Has mitochondria", 1], ["Bacteria such as <i>E. coli</i>", 0], ["DNA is a single circular chromosome in a nucleoid", 0]],
      why: "All cells share a membrane, cytoplasm, ribosomes, and DNA. Only eukaryotes have a nucleus and membrane-bound organelles like mitochondria. Bacteria are prokaryotes with a circular chromosome in the nucleoid." },
    { t: "inline", ref: 1, q: "Complete the sentences about organelles.",
      text: "The [[]] releases energy from food by making ATP. The [[]] builds proteins. The [[]] modifies, sorts, and packages proteins to ship out of the cell.",
      blanks: [{ opts: ["mitochondrion", "chloroplast", "nucleus"], a: 0 }, { opts: ["lysosome", "ribosome", "vacuole"], a: 1 }, { opts: ["cell wall", "vacuole", "Golgi apparatus"], a: 2 }],
      why: "Mitochondria make ATP in cellular respiration (chloroplasts capture light to make sugar). Ribosomes build proteins. The Golgi apparatus works like a post office that packages proteins into vesicles." },
    { t: "multi", need: 3, ref: 1, q: "Which <b>three</b> structures are found in plant cells but <b>not</b> in animal cells?",
      opts: ["Cell wall", "Mitochondria", "Chloroplasts", "Cell membrane", "Large central vacuole", "Ribosomes"], a: [0, 2, 4],
      why: "Table 1: only plant cells have a cell wall, chloroplasts, and one large central vacuole. Both plant and animal cells have mitochondria, a cell membrane, and ribosomes." },
    { t: "mc", ref: 2, q: "Why do phospholipids arrange themselves in a <b>double</b> layer with the tails in the middle?",
      opts: ["The tails are hydrophilic, so they need to touch water.", "The tails are hydrophobic, so they hide from the water outside and inside the cell.", "The heads are hydrophobic, so they hide in the middle.", "The tails are made of protein, which keeps them together."], a: 1,
      why: "There is water on both sides of the membrane. The water-loving (hydrophilic) heads face the water on each side, and the water-fearing (hydrophobic) tails point toward each other, away from water." },
    { t: "grid", ref: 2, q: "Classify each example as passive or active transport.", cols: ["Passive transport", "Active transport"],
      rows: [["O<sub>2</sub> diffuses from the lungs into the blood", 0], ["The sodium-potassium pump moves Na<sup>+</sup> out of a nerve cell", 1], ["Glucose moves into a cell through a carrier protein, from high to low concentration", 0], ["A white blood cell engulfs a bacterium (endocytosis)", 1], ["Water moves through aquaporins by osmosis", 0], ["A pancreas cell releases insulin in vesicles (exocytosis)", 1]],
      why: "Anything moving from high to low concentration on its own (diffusion, facilitated diffusion, osmosis) is passive. Pumps that move ions against their gradient, and endocytosis and exocytosis, which move whole vesicles, require energy, so they are active transport." },
    { t: "num", ref: 3, q: "Use Figure 2. Estimate the sucrose concentration that is <b>isotonic</b> to the potato cells (the concentration where the mass would not change).", a: 0.35, tol: 0.07, unit: "M sucrose",
      why: "Isotonic means no net water movement, so the change in mass is 0%. The line crosses 0% between 0.2 M (+8%) and 0.4 M (−3%), at about 0.35 M. Answers from 0.28 to 0.42 M are accepted." },
    { t: "ebsr", ref: 3,
      A: { q: "What happened to the potato core soaked in <b>1.0 M</b> sucrose?", opts: ["It gained water because the solution was hypotonic.", "It lost water by osmosis because the solution was hypertonic.", "It gained sucrose by active transport.", "Nothing happened because the solution was isotonic."], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["The core in distilled water (0.0 M) gained about 21% mass.", "The core in 1.0 M sucrose changed mass by about −24%.", "The x-axis of the graph shows sucrose concentration.", "All of the cores were cut to the same size."], a: 1 },
      why: "A 24% loss in mass means water left the core. Water moves toward more solute, so the 1.0 M solution had more solute than the potato cells: it was hypertonic. The 0.0 M data is true but is about a different solution." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Choose 🌿 <b>Plant cell</b> and set the outside salt to <b>3.0%</b>. What happens?",
      opts: ["Water moves out, and the membrane pulls away from the cell wall (plasmolysis).", "Water moves in, and the cell bursts (lysis).", "Water moves in, and the cell becomes firm (turgid).", "Nothing changes, because the solution is isotonic."], a: 0,
      why: "3.0% salt outside is more than the 0.9% inside, so the solution is hypertonic and water leaves. In a plant cell the wall stays in place while the membrane shrinks away from it. That is plasmolysis, and it is why a plant wilts." },
    { t: "num", ref: 4, q: "<b>Use the simulation.</b> With the 🩸 <b>Animal cell</b>, find the outside salt percent where there is <b>no net movement</b> of water.", a: 0.9, tol: 0.05, unit: "% salt",
      why: "The cell has 0.9% salt inside. When the outside is also 0.9%, the solution is isotonic: water moves in and out at the same rate, so the cell keeps its size." },
    { t: "order", ref: 2, q: "A red blood cell (0.9% salt inside) is placed in each solution. Order the solutions from the one where water rushes <b>IN</b> the most (top) to the one where water moves <b>OUT</b> the most (bottom).",
      items: ["Distilled water (0% salt)", "0.5% salt", "0.9% salt", "3% salt"],
      why: "The bigger the gap below 0.9%, the more hypotonic the solution and the faster water moves in. 0.9% is isotonic (no net movement). 3% is hypertonic, so water moves out." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Grocery stores spray lettuce with fresh water to keep it crisp, but lettuce sitting in salty dressing wilts within an hour. Explain <b>both</b> results using osmosis and tonicity.", min: 40,
      checks: [
        { label: "Uses the idea of osmosis (water moving across the membrane)", re: /osmosis|water (moves|moved|flows|goes|diffuses|enters|leaves|rushes|comes)/i },
        { label: "Explains fresh water: hypotonic, water moves in, cells get firm", re: /hypotonic|(moves|goes|flows|enters|rushes|comes|go) (in|into)|turgid|turgor|swell|firm|pushes? (on|against) the (cell )?wall/i },
        { label: "Explains salty dressing: hypertonic, water moves out, cells shrink", re: /hypertonic|(moves|goes|flows|leaves|rushes|comes|go) out|lose[sd]? water|losing water|plasmolysis|shrink|shrivel/i }
      ],
      rubric: "2 points: explains both results with osmosis and correct tonicity (fresh water is hypotonic so water moves in; salty dressing is hypertonic so water moves out). 1 point: explains only one result correctly. 0 points: no correct explanation.",
      model: "Fresh water is hypotonic to the lettuce cells because it has less solute than the cells. By osmosis, water moves into the cells, fills the central vacuoles, and pushes against the cell walls, so the lettuce stays firm and crisp. Salty dressing is hypertonic because it has more solute than the cells, so water moves out of the cells by osmosis. The membranes pull away from the cell walls (plasmolysis), and the lettuce wilts.",
      why: "Water always moves toward the side with more solute. Fresh water (less solute) sends water into the cells, making them turgid. Salty dressing (more solute) pulls water out, causing plasmolysis and wilting." }
  ]
};

/* ============================== GENETICS & HEREDITY ============================== */
RC["sg-bio-genetics"] = {
  subject: "Biology", mins: 25,
  title: "Genetics & Heredity",
  blurb: "Review genes and alleles, Mendel’s laws, Punnett squares, inheritance patterns like blood types, and how meiosis creates variation.",
  eq: "How are traits passed from parents to offspring, and why do offspring differ from their parents and from each other?",
  target: "I can use genotypes and Punnett squares to predict the probability of traits, including incomplete dominance and codominance, and explain how meiosis creates genetic variation.",
  sources: [
    { tab: "Key Ideas", title: "Genes, Alleles, and Mendel", numbered: true, blocks: [
      { h: "From DNA to traits" },
      { p: "<b>DNA</b> is the molecule that carries genetic instructions. It is packed into <b>chromosomes</b>. Humans have 46 chromosomes in 23 pairs: one chromosome of each pair comes from the mother and one from the father. A <b>gene</b> is a section of DNA that codes for a protein, and proteins help produce a <b>trait</b>, such as flower color or blood type." },
      { p: "Different versions of the same gene are called <b>alleles</b>. For example, a gene for fur color might have a brown allele and a white allele. Because chromosomes come in pairs, each organism has <b>two alleles</b> for each gene, one from each parent." },
      { h: "Gregor Mendel, the father of genetics" },
      { p: "In the 1850s and 1860s, Gregor Mendel, a monk in what is now the Czech Republic, bred thousands of pea plants. He crossed <b>true-breeding</b> purple-flowered plants with true-breeding white-flowered plants (the P, or parent, generation). All of the offspring (the F<sub>1</sub> generation) had purple flowers. When he let the F<sub>1</sub> plants self-pollinate, about 3/4 of the next generation (F<sub>2</sub>) had purple flowers and about 1/4 had white flowers. The white trait had been hidden, not lost." },
      { p: "From results like these, Mendel concluded that each parent passes on <b>one</b> of its two alleles to each offspring. This is the <b>law of segregation</b>: the two alleles separate when gametes (egg and sperm) form." },
      { vocab: [
        ["Dominant allele", "An allele that shows its trait whenever it is present. Written with a capital letter (B)."],
        ["Recessive allele", "An allele whose trait shows only when there is no dominant allele. Written with a lowercase letter (b)."],
        ["Genotype", "The alleles an organism has, written as letters. Example: Bb."],
        ["Phenotype", "The trait you can observe. Example: brown fur."],
        ["Homozygous", "Two SAME alleles (BB or bb). Also called purebred or true-breeding."],
        ["Heterozygous", "Two DIFFERENT alleles (Bb). Also called hybrid."]
      ]},
      { h: "Punnett squares and probability" },
      { p: "A <b>Punnett square</b> predicts the possible offspring of a cross. Put one parent’s alleles across the top and the other parent’s down the side, then fill each box with one allele from the top and one from the side. Each box is a 1 in 4 (25%) chance." },
      { box: "<b>Worked example:</b> In guinea pigs, black fur (B) is dominant to white fur (b). Cross <b>Bb × bb</b>.<br>Boxes: Bb, Bb, bb, bb.<br>Genotypes: 2 Bb : 2 bb, which is 50% Bb and 50% bb.<br>Phenotypes: 50% black, 50% white.<br>If the pair has 8 babies, you would <i>expect</i> about 4 white ones, but the real number may be a little different, just as flipping a coin 8 times does not always give exactly 4 heads." }
    ]},
    { tab: "Beyond Mendel", title: "Other Patterns and Where Variation Comes From", numbered: true, blocks: [
      { h: "When neither allele is fully dominant" },
      { p: "In <b>incomplete dominance</b>, the heterozygous offspring show a <b>blend</b>, a phenotype in between the two parents. When a red snapdragon (RR) is crossed with a white snapdragon (rr), all of the offspring (Rr) are <b>pink</b>. Crossing two pink snapdragons gives 1 red : 2 pink : 1 white. The alleles did not actually mix, because red and white flowers can show up again in the next generation." },
      { p: "In <b>codominance</b>, <b>both</b> alleles show fully and at the same time. In roan cattle, a calf with one red-hair allele and one white-hair allele has a coat with both red hairs and white hairs mixed together, not pink hairs." },
      { h: "ABO blood types: codominance and multiple alleles" },
      { p: "Human ABO blood type is controlled by one gene with <b>three</b> alleles: I<sup>A</sup>, I<sup>B</sup>, and i. Alleles I<sup>A</sup> and I<sup>B</sup> are <b>codominant</b>, so a person with both has type AB blood, with both A and B markers on their red blood cells. Allele i is <b>recessive</b> to both." },
      { table: { cap: "Table 1. ABO blood types.", head: ["Blood type (phenotype)", "Possible genotypes", "Markers on red blood cells"], rowHead: true, rows: [
        ["Type A", "I<sup>A</sup>I<sup>A</sup> or I<sup>A</sup>i", "A"], ["Type B", "I<sup>B</sup>I<sup>B</sup> or I<sup>B</sup>i", "B"], ["Type AB", "I<sup>A</sup>I<sup>B</sup>", "A and B"], ["Type O", "ii", "None"]
      ]}},
      { h: "How meiosis creates variation" },
      { p: "<b>Meiosis</b> is the type of cell division that makes gametes. It cuts the chromosome number in half, from 46 to 23 in humans, so each gamete carries only one allele for each gene." },
      { p: "During crossing over, homologous chromosomes swap matching pieces, creating new combinations of alleles on a single chromosome. During independent assortment, each pair of chromosomes lines up and separates randomly, so one person can make about 8.4 million (2<sup>23</sup>) different combinations of chromosomes in their gametes. Random fertilization means any sperm can join with any egg, which gives about 70 trillion possible chromosome combinations for one couple, even before crossing over." },
      { vocab: [
        ["Homologous chromosomes", "A matching pair of chromosomes, one from each parent, that carry the same genes."],
        ["Crossing over", "Homologous chromosomes trade matching pieces during meiosis."],
        ["Independent assortment", "Chromosome pairs separate randomly, so alleles of different genes (on different chromosomes) are sorted independently."],
        ["Gamete", "A sex cell (egg or sperm) with one set of chromosomes."]
      ]}
    ]},
    { tab: "Visual", title: "Punnett Square and Mendel’s Data", blocks: [
      { fig: SGBIO_PUNNETT, cap: "Figure 1. A monohybrid cross between two heterozygous parents (Bb × Bb)." },
      { table: { cap: "Table 2. Some of Mendel’s F2 results for pea plants (published in 1866).", head: ["Trait", "Dominant phenotype", "Recessive phenotype", "Ratio"], rowHead: true, rows: [
        ["Seed shape", "5,474 round", "1,850 wrinkled", "about 2.96 : 1"], ["Seed color", "6,022 yellow", "2,001 green", "about 3.01 : 1"], ["Flower color", "705 purple", "224 white", "about 3.15 : 1"]
      ]}},
      { src: "Data: from Gregor Mendel, “Experiments on Plant Hybridization” (1866)." },
      { box: "<b>Notice:</b> Each ratio is close to 3 : 1, the ratio a Bb × Bb Punnett square predicts. It is not exactly 3 : 1 because real offspring are random, like coin flips. The bigger the sample, the closer the results usually get to the prediction." }
    ]},
    { tab: "🔬 Simulation", title: "Punnett Square Breeder", blocks: [
      { box: "<b>Try this (pea flowers):</b> 1) Set both parents to <b>Pp</b>. Read the genotype and phenotype percents. 2) Press <b>Breed 100 offspring</b> and compare the real count of white flowers to the predicted 25%. Press it again. Do you get the same number? 3) Change Parent 2 to <b>PP</b>. Can any white flowers appear now? 4) Try <b>Pp × pp</b> and predict before you look." },
      { sim: "punnett", title: "Pea Flower Color (complete dominance)", tip: "P = purple (dominant), p = white (recessive).", letter: "P", dom: "Purple", rec: "White", mode: "complete", p1: "Pp", p2: "Pp" },
      { box: "<b>Try this (snapdragons):</b> In this model, R = red and r = white, and neither one is fully dominant, so the lowercase letter does <b>not</b> mean recessive here. 1) Cross <b>RR × rr</b>. What color are all the offspring? 2) Cross two pink plants, <b>Rr × Rr</b>. What percent are pink? 3) Breed 100 and check how close you get to 1 red : 2 pink : 1 white." },
      { sim: "punnett", title: "Snapdragon Color (incomplete dominance)", tip: "Heterozygous Rr plants are pink.", letter: "R", dom: "Red", rec: "White", mode: "incomplete", mid: "Pink", p1: "RR", p2: "rr" }
    ]}
  ],
  qs: [
    { t: "inline", ref: 1, q: "Complete the sentences.",
      text: "Different versions of the same gene are called [[]]. The letters for the alleles an organism has, such as Bb, are its [[]], and the trait you can see, such as brown fur, is its [[]].",
      blanks: [{ opts: ["chromosomes", "alleles", "gametes"], a: 1 }, { opts: ["genotype", "phenotype", "nucleus"], a: 0 }, { opts: ["genotype", "allele", "phenotype"], a: 2 }],
      why: "Alleles are versions of a gene. Genotype is the genetic makeup written as letters (geno = genes). Phenotype is the observable trait (pheno = to show)." },
    { t: "grid", ref: 1, q: "Classify each genotype.", cols: ["Homozygous dominant", "Heterozygous", "Homozygous recessive"],
      rows: [["BB", 0], ["Bb", 1], ["tt", 2], ["TT", 0], ["Rr", 1], ["aa", 2]],
      why: "Homozygous means two of the same allele: two capitals is homozygous dominant, two lowercase letters is homozygous recessive. Heterozygous means one of each." },
    { t: "mc", ref: 1, q: "In pea plants, purple flowers (P) are dominant to white flowers (p). What is the phenotype of a plant with genotype <b>Pp</b>?",
      opts: ["Purple flowers", "White flowers", "Pink flowers", "Half purple and half white flowers"], a: 0,
      why: "With complete dominance, one dominant allele is enough to show the dominant trait, so Pp looks purple. The recessive white allele is hidden. Pink would require incomplete dominance." },
    { t: "mc", ref: 1, q: "In guinea pigs, black fur (B) is dominant to white fur (b). A heterozygous black guinea pig is crossed with a white guinea pig (<b>Bb × bb</b>). What is the probability that an offspring has <b>white</b> fur?",
      opts: ["25%", "75%", "50%", "100%"], a: 2,
      why: "The Punnett square has Bb, Bb, bb, bb. Two of the four boxes (2/4) are bb, so the chance of white fur is 50%." },
    { t: "num", ref: 3, q: "In pea plants, tall (T) is dominant to short (t). Two <b>Tt</b> plants are crossed and produce <b>400</b> offspring. About how many offspring would you expect to be <b>short</b>?", a: 100, tol: 0, unit: "short plants",
      why: "Tt × Tt gives 1 TT : 2 Tt : 1 tt, like Figure 1. Only tt plants are short, so 1/4 of the offspring are short. 1/4 × 400 = 100." },
    { t: "mc", ref: 4, q: "<b>Use the pea flower simulation.</b> Set Parent 1 to <b>Pp</b> and Parent 2 to <b>PP</b>. What percent of the offspring are predicted to have <b>white</b> flowers?",
      opts: ["25%", "50%", "75%", "0%"], a: 3,
      why: "Parent 2 (PP) can only pass on P, so every offspring gets at least one dominant allele (PP or Pp). No offspring can be pp, so 0% are white." },
    { t: "num", ref: 4, q: "<b>Use the snapdragon simulation.</b> Cross two pink snapdragons (<b>Rr × Rr</b>). What percent of the offspring are predicted to be <b>pink</b>?", a: 50, tol: 0, unit: "%",
      why: "The boxes are RR, Rr, Rr, rr: 1 red : 2 pink : 1 white. With incomplete dominance only the heterozygous Rr plants are pink, and that is 2 of 4 boxes, or 50%." },
    { t: "grid", ref: 2, q: "Which inheritance pattern does each example show?", cols: ["Complete dominance", "Incomplete dominance", "Codominance"],
      rows: [["Red snapdragon × white snapdragon gives all pink offspring", 1], ["A person with alleles I<sup>A</sup> and I<sup>B</sup> has type AB blood", 2], ["A roan calf has both red hairs and white hairs", 2], ["Purple pea × white pea gives all purple offspring", 0], ["Two pink snapdragons have red, pink, and white offspring", 1]],
      why: "A blend (pink) is incomplete dominance. Both traits showing fully side by side (A and B markers, red and white hairs) is codominance. One trait completely hiding the other (all purple) is complete dominance." },
    { t: "multi", need: 2, ref: 2, q: "A parent with type <b>AB</b> blood (I<sup>A</sup>I<sup>B</sup>) has a child with a parent who has type <b>O</b> blood (ii). Which <b>two</b> blood types are possible for the child?",
      opts: ["Type A", "Type B", "Type AB", "Type O"], a: [0, 1],
      why: "The AB parent passes on I<sup>A</sup> or I<sup>B</sup>. The O parent can only pass on i. The children are I<sup>A</sup>i (type A) or I<sup>B</sup>i (type B), 50% each. Type AB would need an I<sup>B</sup> or I<sup>A</sup> from the second parent, and type O would need an i from both parents." },
    { t: "ebsr", ref: 2,
      A: { q: "Two brothers have the same parents but are not identical twins. Why are they genetically different?", opts: ["Each brother got all of his genes from only one parent.", "Brothers inherit different numbers of chromosomes.", "Meiosis shuffles alleles, so each egg and sperm carries a different combination of alleles.", "Genes change randomly every time a cell divides."], a: 2 },
      B: { q: "Which <b>two</b> sentences from “Beyond Mendel” <b>best</b> support your answer to Part A?", opts: ["“It cuts the chromosome number in half, from 46 to 23 in humans, so each gamete carries only one allele for each gene.”", "“During crossing over, homologous chromosomes swap matching pieces, creating new combinations of alleles on a single chromosome.”", "“During independent assortment, each pair of chromosomes lines up and separates randomly, so one person can make about 8.4 million (2<sup>23</sup>) different combinations of chromosomes in their gametes.”", "“Allele i is recessive to both.”"], a: [1, 2], need: 2 },
      why: "Crossing over and independent assortment both mix up alleles during meiosis, so no two gametes from the same parent are likely to be alike. Halving the chromosome number is true, but it does not explain why gametes differ from each other." },
    { t: "order", ref: 1, q: "Put Mendel’s flower-color experiment in order (first at the top).",
      items: ["He crossed true-breeding purple plants with true-breeding white plants (P generation).", "All of the F<sub>1</sub> offspring had purple flowers.", "He let the F<sub>1</sub> plants self-pollinate.", "About 3/4 of the F<sub>2</sub> plants were purple and about 1/4 were white."],
      why: "The P cross made an all-purple F<sub>1</sub> (all Pp). Self-pollinating the F<sub>1</sub> (Pp × Pp) brought back the hidden white trait in the F<sub>2</sub> in about a 3 : 1 ratio." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Two guinea pigs with <b>black</b> fur have a baby with <b>white</b> fur. Black (B) is dominant to white (b). Explain how this is possible. Include the parents’ genotypes and the probability that another baby will be white.", min: 40,
      checks: [
        { label: "Gives the parents’ genotypes as Bb (heterozygous)", re: /\bBb\b|[Hh]eterozygous|HETEROZYGOUS|[Hh]ybrid|[Cc]arr(y|ies|ier)/ },
        { label: "Explains the white baby is bb and got a recessive allele from each parent", re: /\bbb\b|recessive|(one|a|the) b (allele )?from each|from (both|each) parent/i },
        { label: "Gives the probability of white as 1/4 or 25%", re: /25|1\s*\/\s*4|one.(in|out of).four|1 (in|out of) 4|quarter/i }
      ],
      rubric: "2 points: both parents are Bb, the white baby is bb with one b from each parent, and the chance of white is 1/4 (25%). 1 point: partly correct explanation. 0 points: no correct explanation.",
      model: "Both parents must be heterozygous, Bb. They look black because the dominant B allele hides the recessive b allele, but each one still carries b. If each parent passes on its b allele, the baby is bb and has white fur. A Punnett square for Bb × Bb gives BB, Bb, Bb, and bb, so the probability that another baby is white is 1/4, or 25%.",
      why: "A recessive trait can only appear if the offspring is homozygous recessive (bb), so each black parent must have carried a hidden b allele. Bb × Bb gives 1 BB : 2 Bb : 1 bb, so each baby has a 1/4 chance of white fur." }
  ]
};
