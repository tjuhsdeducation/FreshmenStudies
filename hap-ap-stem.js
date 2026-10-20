/* =====================================================================
   ✏️ AP-STYLE PRACTICE QUIZZES: STEM
   Five 15-minute, stimulus-based practice quizzes written for this site
   (AP-style practice; not official College Board exams).
   Each activity: RC["id"] = { subject, mins, title, blurb, eq, target, sources, qs }.
   Link to one with:  honors-ap.html?id=THE-ID
   Question types (points in parentheses):
     mc 4-option (1) · multi (2) · inline (1 per blank) · grid (1 per row)
     num (1) · write with rubric checks (0 to 2)
   Answers count from 0: a:0 = A, a:1 = B, a:2 = C, a:3 = D.
   ===================================================================== */

const HAP_NOTE = "<b>Note:</b> AP-style practice written for this site; not an official College Board exam.";

/* ============================== AP BIOLOGY ============================== */
const HAP_INHIBIT = (function () {
  const panel = (ox, title, kind) => {
    let site = kind === "non"
      ? `L${ox + 75} 90 L${ox + 90} 114 L${ox + 110} 114 L${ox + 125} 90`
      : `L${ox + 75} 90 L${ox + 75} 120 L${ox + 125} 120 L${ox + 125} 90`;
    let side = kind === "non" ? `L${ox + 180} 130 L${ox + 165} 145 L${ox + 180} 160 ` : "";
    let g = `<text x="${ox + 100}" y="22" text-anchor="middle" class="t">${title}</text>`;
    g += `<path class="c1" d="M${ox + 20} 200 L${ox + 20} 110 Q${ox + 20} 90 ${ox + 40} 90 ${site} L${ox + 160} 90 Q${ox + 180} 90 ${ox + 180} 110 ${side}L${ox + 180} 200 Z"/>`;
    g += `<text x="${ox + 100}" y="175" text-anchor="middle" class="t">Enzyme</text>`;
    if (kind === "normal") {
      g += `<rect class="c3" x="${ox + 77}" y="92" width="46" height="27" rx="3"/><text x="${ox + 100}" y="60" text-anchor="middle" class="tm">Substrate fits</text><text x="${ox + 100}" y="76" text-anchor="middle" class="tm">the active site</text>`;
    } else if (kind === "comp") {
      g += `<rect class="c2" x="${ox + 77}" y="92" width="46" height="27" rx="3"/><text x="${ox + 100}" y="140" text-anchor="middle" class="tm">Inhibitor blocks</text><text x="${ox + 100}" y="155" text-anchor="middle" class="tm">active site</text>`;
      g += `<rect class="c3" x="${ox + 130}" y="40" width="46" height="27" rx="3"/><text x="${ox + 70}" y="58" text-anchor="middle" class="tm">Substrate</text><text x="${ox + 70}" y="73" text-anchor="middle" class="tm">cannot enter</text>`;
    } else {
      g += `<polygon class="c2" points="${ox + 165},145 ${ox + 180},130 ${ox + 195},145 ${ox + 180},160"/><text x="${ox + 100}" y="218" text-anchor="middle" class="tm">Inhibitor binds the allosteric site</text>`;
      g += `<rect class="c3" x="${ox + 77}" y="40" width="46" height="27" rx="3"/><text x="${ox + 100}" y="140" text-anchor="middle" class="tm">Active site</text><text x="${ox + 100}" y="155" text-anchor="middle" class="tm">changes shape</text>`;
    }
    return g;
  };
  return `<svg class="dg" viewBox="0 0 660 225" role="img" aria-label="Three diagrams. A: normal binding, the rectangular substrate fits the rectangular active site of the enzyme. B: competitive inhibitor, an inhibitor shaped like the substrate sits in the active site, so the substrate cannot enter. C: noncompetitive inhibitor, the inhibitor binds a different spot called the allosteric site on the side of the enzyme, and the active site changes to a V shape that the substrate no longer fits.">`
    + panel(10, "A. Normal binding", "normal") + panel(230, "B. Competitive inhibitor", "comp") + panel(450, "C. Noncompetitive inhibitor", "non") + `</svg>`;
})();

RC["ap-bio-enzymes"] = {
  subject: "AP Biology", mins: 15,
  title: "AP Practice Quiz: Enzyme Structure and Function",
  blurb: "Unit 3 (Cellular Energetics): read temperature and pH graphs, compare competitive and noncompetitive inhibition, and analyze an enzyme experiment.",
  eq: "How do an enzyme’s structure and its environment control how fast it speeds up a reaction?",
  target: "I can use data to explain how temperature, pH, and inhibitors affect enzyme activity, and I can evaluate an experimental design.",
  sources: [
    { tab: "Key Ideas", title: "How Enzymes Work", numbered: true, blocks: [
      { box: HAP_NOTE },
      { p: "<b>Enzymes</b> are proteins that act as biological <b>catalysts</b>: they speed up chemical reactions by <b>lowering the activation energy</b>, the energy needed to start a reaction. The enzyme is not used up, so one enzyme molecule can work again and again." },
      { p: "Each enzyme has an <b>active site</b>, a pocket whose shape and chemical properties match a specific <b>substrate</b> (the reactant the enzyme acts on). When the substrate binds, the active site shifts slightly to fit it more tightly. This is called <b>induced fit</b>." },
      { p: "An enzyme’s 3-D shape is held together by weak interactions between amino acid R groups, such as hydrogen bonds and ionic bonds. Each enzyme has an <b>optimal</b> temperature and pH. Raising the temperature toward the optimum increases collisions between enzyme and substrate, so the rate goes up. Past the optimum, heat breaks the weak bonds and the enzyme <b>denatures</b>: the active site loses its shape and the rate drops quickly. A pH far from the optimum changes the charges on R groups, which can also change the shape of the active site." },
      { p: "<b>Inhibitors</b> are molecules that reduce enzyme activity. A <b>competitive inhibitor</b> looks like the substrate and binds the active site, so it competes with the substrate. Adding a lot more substrate can out-compete the inhibitor, so the reaction can still get close to its normal maximum rate. A <b>noncompetitive inhibitor</b> binds a different place, an <b>allosteric site</b>, and changes the enzyme’s shape. Adding more substrate does not fix this, so the maximum rate stays lower." },
      { fig: HAP_INHIBIT, cap: "Figure 1. Normal binding compared with competitive and noncompetitive inhibition." },
      { vocab: [["activation energy", "the energy needed to start a chemical reaction"], ["active site", "the region of an enzyme where the substrate binds"], ["denature", "to lose the 3-D shape (and function) of a protein"], ["allosteric site", "a binding site on an enzyme that is not the active site"]] }
    ]},
    { tab: "Graphs", title: "Temperature and pH", blocks: [
      { fig: RCG.line({ title: "Effect of Temperature on Two Enzymes", w: 560, h: 340, x: { min: 0, max: 90, step: 10, label: "Temperature (°C)" }, y: { min: 0, max: 125, ticks: [0, 20, 40, 60, 80, 100], label: "Relative rate (% of max)" },
          series: [
            { pts: [[0, 5], [10, 12], [20, 28], [30, 60], [37, 100], [40, 95], [45, 60], [50, 20], [55, 5], [60, 0], [70, 0], [80, 0], [90, 0]], cls: "s1", dots: true, label: "Enzyme 1 (human)" },
            { pts: [[20, 5], [30, 12], [40, 22], [50, 38], [60, 60], [70, 88], [75, 100], [80, 85], [85, 40], [90, 10]], cls: "s2", dots: true, label: "Enzyme 2 (hot-spring bacterium)" }],
          alt: "Line graph. Enzyme 1 from humans rises from 5 percent at 0 degrees to a peak of 100 percent at 37 degrees, then falls to 20 percent at 50 degrees and 0 percent at 60 degrees and above. Enzyme 2 from a hot-spring bacterium rises from 5 percent at 20 degrees to 60 percent at 60 degrees, peaks at 100 percent at 75 degrees, then falls to 10 percent at 90 degrees." }),
        cap: "Figure 2. Relative reaction rate of two enzymes at different temperatures (pH kept at each enzyme’s optimum). Sample data for practice." },
      { fig: RCG.line({ title: "Effect of pH on Two Digestive Enzymes", w: 560, h: 330, x: { min: 0, max: 12, step: 1, label: "pH" }, y: { min: 0, max: 125, ticks: [0, 20, 40, 60, 80, 100], label: "Relative rate (% of max)" },
          series: [
            { pts: [[1, 60], [1.5, 85], [2, 100], [3, 75], [4, 40], [5, 15], [6, 3], [7, 0]], cls: "s3", dots: true, label: "Pepsin (stomach)" },
            { pts: [[5, 10], [6, 40], [7, 80], [8, 100], [9, 85], [10, 45], [11, 10]], cls: "s4", dots: true, label: "Trypsin (small intestine)" }],
          legend: "right",
          alt: "Line graph. Pepsin has a peak rate at pH 2, falls to 40 percent at pH 4 and 0 percent at pH 7. Trypsin rises from 10 percent at pH 5 to a peak of 100 percent at pH 8, then falls to 10 percent at pH 11." }),
        cap: "Figure 3. Relative reaction rate of pepsin and trypsin at different pH values (37 °C). Sample data for practice." }
    ]},
    { tab: "Experiment", title: "Catalase and Two Inhibitors", blocks: [
      { p: "The enzyme <b>catalase</b> speeds up the breakdown of hydrogen peroxide: 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub>. Students added the <b>same amount of catalase</b> to H<sub>2</sub>O<sub>2</sub> solutions of different concentrations. Every tube was kept in a pH 7 buffer at 25 °C. They measured the initial rate of O<sub>2</sub> production. Then they repeated every trial with <b>Inhibitor A</b> added, and again with <b>Inhibitor B</b> added. Each inhibitor was used at the same concentration in every tube.", n: false },
      { table: { cap: "Table 1. Initial rate of O<sub>2</sub> production (µmol/min). Hypothetical data for practice.", head: ["H<sub>2</sub>O<sub>2</sub> concentration (mM)", "No inhibitor", "With Inhibitor A", "With Inhibitor B"], rowHead: true,
        rows: [["0.5", "20", "8", "10"], ["1", "34", "14", "17"], ["2", "50", "25", "25"], ["5", "72", "46", "36"], ["10", "84", "63", "42"], ["20", "92", "77", "46"], ["40", "96", "87", "48"]] } },
      { fig: RCG.line({ title: "Rate vs. Substrate Concentration", w: 560, h: 330, x: { min: 0, max: 40, step: 5, label: "H₂O₂ concentration (mM)" }, y: { min: 0, max: 125, ticks: [0, 20, 40, 60, 80, 100], label: "Rate (µmol O₂/min)" },
          series: [
            { pts: [[0.5, 20], [1, 34], [2, 50], [5, 72], [10, 84], [20, 92], [40, 96]], cls: "s1", dots: true, label: "No inhibitor" },
            { pts: [[0.5, 8], [1, 14], [2, 25], [5, 46], [10, 63], [20, 77], [40, 87]], cls: "s2", dots: true, label: "Inhibitor A" },
            { pts: [[0.5, 10], [1, 17], [2, 25], [5, 36], [10, 42], [20, 46], [40, 48]], cls: "s3", dots: true, label: "Inhibitor B" }],
          legend: "right",
          alt: "Line graph of the data in Table 1. With no inhibitor the rate rises and levels off near 96. With Inhibitor A the rate starts lower but keeps rising to 87 at 40 millimolar. With Inhibitor B the rate levels off near 48, about half of the no-inhibitor rate." }),
        cap: "Figure 4. The data from Table 1." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Enzyme 2 in Figure 2 comes from a bacterium that lives in a hot spring. Which statement about the two enzymes at <b>60 °C</b> is best supported by the data?",
      opts: ["Both enzymes work at about the same rate.", "Enzyme 2 is still active, but Enzyme 1 has lost almost all of its activity.", "Enzyme 1 works faster because it is closer to its optimum.", "Neither enzyme is active at this temperature."], a: 1,
      why: "At 60 °C, Enzyme 2 is at about 60% of its maximum rate, while Enzyme 1 has dropped to 0%. Enzyme 1’s optimum is 37 °C, so 60 °C is far above it and the enzyme has denatured. Enzyme 2’s optimum is about 75 °C, which fits a hot-spring organism." },
    { t: "mc", ref: 2, q: "Which statement best explains why the rate of Enzyme 1 drops sharply between 40 °C and 55 °C?",
      opts: ["The enzyme runs out of substrate at high temperatures.", "High temperature lowers the activation energy so much that the reaction stops.", "Molecules move more slowly at high temperature, so there are fewer collisions.", "Heat breaks the weak bonds that hold the enzyme’s 3-D shape, so the active site changes and the substrate binds less often."], a: 3,
      why: "Above the optimum, heat disrupts hydrogen bonds and ionic bonds between R groups. The enzyme denatures, the active site no longer matches the substrate, and the rate falls. Molecules actually move faster at higher temperature, so choice C is backwards." },
    { t: "mc", ref: 2, q: "A researcher moves pepsin from a solution at pH 2 to a solution at pH 7. Based on Figure 3, which prediction and reasoning are best?",
      opts: ["The rate falls to nearly zero, because the change in H⁺ concentration changes the charges on R groups and alters the shape of the active site.", "The rate increases, because pH 7 is neutral and neutral pH is best for all enzymes.", "The rate stays the same, because pH does not affect the amino acid sequence of the enzyme.", "The rate increases, because there are more H⁺ ions at pH 7 than at pH 2."], a: 0,
      why: "Figure 3 shows pepsin at 100% at pH 2 and 0% at pH 7. Fewer H⁺ ions at pH 7 change the charges on R groups, which disrupts ionic and hydrogen bonds that shape the active site. Choice D is backwards: pH 7 has <i>fewer</i> H⁺ ions than pH 2. Trypsin shows that not every enzyme works best at neutral pH." },
    { t: "grid", ref: 1, q: "Classify each description as a feature of a <b>competitive</b> or a <b>noncompetitive</b> inhibitor.", cols: ["Competitive", "Noncompetitive"],
      rows: [["Binds to the active site of the enzyme", 0], ["Binds to an allosteric site and changes the enzyme’s shape", 1], ["Adding much more substrate brings the rate close to the normal maximum", 0], ["The maximum rate stays lower even at very high substrate concentration", 1]],
      why: "A competitive inhibitor competes with the substrate for the active site, so lots of substrate can win out. A noncompetitive inhibitor binds elsewhere (an allosteric site) and changes the enzyme’s shape, so extra substrate cannot restore the maximum rate (paragraph 4, Figure 1)." },
    { t: "mc", ref: 3, q: "Based on Table 1 and Figure 4, which type of inhibitor is <b>Inhibitor A</b> most likely to be, and why?",
      opts: ["Noncompetitive, because it lowers the rate at every substrate concentration.", "Noncompetitive, because the rate at 40 mM is still lower than the rate with no inhibitor.", "Competitive, because as substrate concentration increases, the rate gets close to the rate with no inhibitor.", "Competitive, because it cuts the maximum rate in half at every substrate concentration."], a: 2,
      why: "With Inhibitor A the rate keeps climbing (63 → 77 → 87) toward the no-inhibitor rate (96), so extra substrate is out-competing the inhibitor. That is the pattern of a competitive inhibitor. Choice D describes Inhibitor B, which levels off near half the normal rate." },
    { t: "num", ref: 3, q: "Use Table 1. Calculate the <b>percent decrease</b> in rate caused by Inhibitor B at an H<sub>2</sub>O<sub>2</sub> concentration of <b>20 mM</b>.", a: 50, tol: 1, unit: "%",
      why: "Percent decrease = (original − new) ÷ original × 100 = (92 − 46) ÷ 92 × 100 = 46 ÷ 92 × 100 = 50%. Inhibitor B cuts the rate about in half at every concentration, a sign of noncompetitive inhibition." },
    { t: "mc", ref: 3, q: "Which additional trial would be the best <b>negative control</b> to show that the O<sub>2</sub> is produced because of catalase?",
      opts: ["A tube with catalase and H₂O₂ at 37 °C instead of 25 °C", "A tube with H₂O₂ and buffer but no catalase", "A tube with twice as much catalase and H₂O₂", "A tube with catalase and Inhibitor A but no H₂O₂"], a: 1,
      why: "A negative control leaves out the factor being tested (catalase) and keeps everything else the same. If little or no O₂ forms without catalase, the O₂ in the other tubes must come from catalase speeding up the reaction. Choices A and C change other variables instead." },
    { t: "multi", ref: 3, need: 2, q: "In this experiment, the H<sub>2</sub>O<sub>2</sub> concentration was the independent variable. Which <b>two</b> variables had to be kept constant so the comparison is fair?",
      opts: ["The temperature of each tube", "The H₂O₂ concentration", "The pH of the buffer", "The rate of O₂ production"], a: [0, 2],
      why: "Temperature and pH both affect enzyme shape and rate (Figures 2 and 3), so they must stay the same in every tube. H₂O₂ concentration is the independent variable (it was changed on purpose), and the rate of O₂ production is the dependent variable (it was measured)." },
    { t: "write", ref: 3, min: 35, q: "<b>Short free response.</b> A student claims: “If we add enough H<sub>2</sub>O<sub>2</sub>, for example 100 mM, the rate with Inhibitor B will catch up to the rate with no inhibitor.” Evaluate this claim. Use data from Table 1 and explain your reasoning using enzyme structure.",
      checks: [
        { label: "States that the claim is not supported", re: /not (supported|correct|true|right|likely|accurate)|incorrect|disagree|wrong|won.?t|will not|would not|wouldn.?t|cannot|can.?t|unsupported|unlikely|is false/i },
        { label: "Uses data: Inhibitor B levels off near half the normal rate (about 46 to 48 vs. 92 to 96)", re: /48|46|half|50 ?%|level(s|ed)? off|plateau|max(imum)? (rate )?(is |stays |was )?(lower|reduced|limited)|stays? (low|lower|the same)/i },
        { label: "Explains with structure: allosteric site or shape change, not the active site", re: /allosteric|other site|different site|another site|shape|not (in|at|bind\w* to) the active site|noncompetitive|non-competitive/i }
      ],
      rubric: "2 points: says the claim is not supported, cites data showing Inhibitor B levels off near half the normal rate, and explains that B binds an allosteric site and changes the enzyme’s shape. 1 point: two of these three parts.",
      model: "The claim is not supported. In Table 1, the rate with Inhibitor B levels off near 46 to 48 µmol/min while the rate with no inhibitor reaches 92 to 96, so B keeps the rate at about half even at high substrate. Inhibitor B is noncompetitive. It binds an allosteric site, not the active site, and changes the enzyme’s shape, so adding more substrate cannot out-compete it.",
      why: "Adding more substrate only helps against a competitive inhibitor. Inhibitor B’s rate levels off at about half the normal rate (48 vs. 96 at 40 mM), which shows the inhibitor has changed the enzyme’s shape from an allosteric site. More substrate cannot undo that." }
  ]
};

/* ============================= AP CHEMISTRY ============================= */
RC["ap-chem-kinetics"] = {
  subject: "AP Chemistry", mins: 15,
  title: "AP Practice Quiz: Rate Laws and Half-Life",
  blurb: "Unit 5 (Kinetics): find reaction orders from initial-rate data, calculate the rate constant with units, and use half-life for a first-order reaction.",
  eq: "How can experimental data reveal how the speed of a reaction depends on the concentration of each reactant?",
  target: "I can determine a rate law and rate constant from initial-rate data, and I can use half-life and the integrated rate law for a first-order reaction.",
  sources: [
    { tab: "Key Ideas", title: "Rate Laws", numbered: true, blocks: [
      { box: HAP_NOTE },
      { p: "A <b>rate law</b> shows how the rate of a reaction depends on reactant concentrations: <b>rate = k[A]<sup>m</sup>[B]<sup>n</sup></b>. The exponents m and n are the <b>orders</b> with respect to each reactant, and their sum is the <b>overall order</b>. Orders must be found from <b>experimental data</b>. They are not simply read from the coefficients in the balanced equation." },
      { p: "In the <b>method of initial rates</b>, compare two trials in which only one concentration changes. If doubling [A] does not change the rate, the reaction is <b>zero order</b> in A. If the rate doubles (2<sup>1</sup>), it is <b>first order</b>. If the rate becomes four times as large (2<sup>2</sup>), it is <b>second order</b>." },
      { p: "The <b>rate constant, k</b>, is the same for every trial at a given temperature. It changes when the temperature changes, but not when concentrations change. Its units are whatever make the rate come out in M/s. For example, in a second-order reaction, rate = k[A]<sup>2</sup>, so k = rate ÷ [A]<sup>2</sup> has units of (M/s) ÷ M<sup>2</sup> = M<sup>−1</sup> s<sup>−1</sup>." },
      { p: "For a <b>first-order</b> reaction, the integrated rate law is <b>ln[A]<sub>t</sub> = −kt + ln[A]<sub>0</sub></b>. The <b>half-life</b> (t<sub>1/2</sub>), the time for half of the reactant to be used up, is constant and does not depend on the starting concentration: <b>t<sub>1/2</sub> = 0.693 ÷ k</b> (0.693 is ln 2)." },
      { vocab: [["order", "the exponent on a concentration in the rate law"], ["initial rate", "the rate at the very start of a trial, before concentrations change much"], ["half-life", "the time for a reactant’s concentration to fall to half its starting value"]] }
    ]},
    { tab: "Initial Rates", title: "Experiment 1: 2NO(g) + Br₂(g) → 2NOBr(g)", blocks: [
      { p: "A chemist measured the initial rate of formation of NOBr in four trials at the same temperature.", n: false },
      { table: { cap: "Table 1. Initial-rate data. Values are for practice.", head: ["Trial", "[NO]<sub>0</sub> (M)", "[Br<sub>2</sub>]<sub>0</sub> (M)", "Initial rate (M/s)"], rowHead: true,
        rows: [["1", "0.010", "0.010", "2.5 × 10<sup>−5</sup>"], ["2", "0.020", "0.010", "1.0 × 10<sup>−4</sup>"], ["3", "0.010", "0.020", "5.0 × 10<sup>−5</sup>"], ["4", "0.030", "0.020", "?"]] } },
      { box: "<b>Tip:</b> Divide one trial’s rate by another’s. The ratio of rates equals (ratio of concentrations)<sup>order</sup>. Example: if a concentration triples and the rate becomes 9 times as large, 3<sup>m</sup> = 9, so m = 2." }
    ]},
    { tab: "Decay Data", title: "Experiment 2: A First-Order Decomposition", blocks: [
      { p: "Compound A decomposes in a first-order reaction at constant temperature. A student measured [A] every 20 minutes.", n: false },
      { table: { cap: "Table 2. Concentration of A over time. Values are for practice.", head: ["Time (min)", "0", "20", "40", "60", "80"], rowHead: true, rows: [["[A] (M)", "0.800", "0.400", "0.200", "0.100", "0.050"]] } },
      { fig: RCG.line({ title: "[A] vs. Time", w: 540, h: 320, x: { min: 0, max: 80, step: 10, label: "Time (min)" }, y: { min: 0, max: 0.8, step: 0.1, label: "[A] (M)", fmt: v => v.toFixed(1) },
          series: [{ fn: t => 0.8 * Math.pow(0.5, t / 20), from: 0, to: 80, cls: "s1" }],
          marks: [{ x: 0, y: 0.8, cls: "s1" }, { x: 20, y: 0.4, cls: "s1" }, { x: 40, y: 0.2, cls: "s1" }, { x: 60, y: 0.1, cls: "s1" }, { x: 80, y: 0.05, cls: "s1" }],
          alt: "A curve that decreases quickly and then levels off: 0.800 molar at 0 minutes, 0.400 at 20, 0.200 at 40, 0.100 at 60, and 0.050 at 80 minutes." }),
        cap: "Figure 1. The concentration of A falls by half every equal time interval." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Based on Table 1, what is the order of the reaction with respect to <b>NO</b>?", opts: ["Zero order", "First order", "Second order", "Third order"], a: 2,
      why: "Compare Trials 1 and 2: [Br₂] stays 0.010 M while [NO] doubles from 0.010 to 0.020 M. The rate goes from 2.5 × 10⁻⁵ to 1.0 × 10⁻⁴ M/s, which is 4 times as large. 2<sup>m</sup> = 4, so m = 2: second order in NO." },
    { t: "mc", ref: 2, q: "Which rate law is consistent with the data in Table 1?", opts: ["rate = k[NO][Br₂]", "rate = k[NO]²[Br₂]", "rate = k[NO][Br₂]²", "rate = k[NO]²[Br₂]²"], a: 1,
      why: "NO is second order (Trials 1 and 2). For Br₂, compare Trials 1 and 3: [NO] stays 0.010 M, [Br₂] doubles, and the rate doubles from 2.5 × 10⁻⁵ to 5.0 × 10⁻⁵ M/s. 2<sup>n</sup> = 2, so n = 1. Rate = k[NO]²[Br₂]." },
    { t: "mc", ref: 1, q: "What are the units of the rate constant k for this reaction?", opts: ["s⁻¹", "M⁻¹ s⁻¹", "M s⁻¹", "M⁻² s⁻¹"], a: 3,
      why: "The overall order is 2 + 1 = 3. k = rate ÷ ([NO]²[Br₂]), so the units are (M/s) ÷ M³ = M⁻² s⁻¹." },
    { t: "num", ref: 2, q: "Use Trial 1 to calculate the value of the rate constant <b>k</b>. Enter the number only (the units are the ones from the previous question).", pre: "k =", a: 25, tol: 0.5,
      why: "k = rate ÷ ([NO]²[Br₂]) = (2.5 × 10⁻⁵) ÷ ((0.010)² × 0.010) = (2.5 × 10⁻⁵) ÷ (1.0 × 10⁻⁶) = 25 M⁻² s⁻¹. Check with Trial 2: 25 × (0.020)² × 0.010 = 1.0 × 10⁻⁴ M/s. ✓" },
    { t: "num", ref: 2, q: "Predict the initial rate for <b>Trial 4</b>. Enter your answer as a number times 10<sup>−4</sup> M/s. (For example, type 3.2 for 3.2 × 10<sup>−4</sup>.)", pre: "rate =", unit: "× 10⁻⁴ M/s", a: 4.5, tol: 0.05,
      why: "rate = k[NO]²[Br₂] = 25 × (0.030)² × 0.020 = 25 × (9.0 × 10⁻⁴) × 0.020 = 4.5 × 10⁻⁴ M/s. Another way: compared with Trial 1, [NO] triples (×3² = 9) and [Br₂] doubles (×2), so the rate is 18 × 2.5 × 10⁻⁵ = 4.5 × 10⁻⁴ M/s." },
    { t: "mc", ref: 3, q: "Based on Table 2, what is the half-life of compound A?", opts: ["10 min", "20 min", "40 min", "80 min"], a: 1,
      why: "[A] falls from 0.800 M to 0.400 M (half) in 20 minutes, and then halves again every 20 minutes (0.400 → 0.200 → 0.100 → 0.050). A constant half-life is a sign of a first-order reaction." },
    { t: "mc", ref: 1, q: "Which graph of the data in Table 2 would give a <b>straight line</b>, and what would its slope be?", opts: ["[A] versus time, with slope = −k", "1/[A] versus time, with slope = k", "ln[A] versus time, with slope = −k", "[A]² versus time, with slope = k"], a: 2,
      why: "The first-order integrated rate law, ln[A]ₜ = −kt + ln[A]₀, has the form y = mx + b with y = ln[A] and x = t. So ln[A] vs. time is linear with slope −k. A plot of 1/[A] vs. time is linear for second-order reactions." },
    { t: "mc", ref: 3, q: "What is the rate constant k for the decomposition of compound A?", opts: ["0.0347 min⁻¹", "0.0500 min⁻¹", "13.9 min⁻¹", "0.693 min⁻¹"], a: 0,
      why: "For a first-order reaction, k = 0.693 ÷ t<sub>1/2</sub> = 0.693 ÷ 20 min = 0.0347 min⁻¹. Choice B is 1 ÷ 20, and choice C is 0.693 × 20, both common slips. First-order k always has units of time⁻¹." },
    { t: "write", ref: 2, min: 30, q: "<b>Short free response.</b> Justify the order with respect to Br<sub>2</sub> using data from <b>two specific trials</b> in Table 1. Then predict what happens to the rate if [Br<sub>2</sub>] is tripled while [NO] is kept constant.",
      checks: [
        { label: "Names the two trials used (Trials 1 and 3)", re: /trials? ?(1|one)\b|trials? ?(3|three)\b|\b1 and 3\b|\bone and three\b/i },
        { label: "States that [Br₂] doubles and the rate doubles", re: /doubl|2 ?times|two times|twice|×\s?2|x\s?2|factor of (2|two)/i },
        { label: "Concludes first order with respect to Br₂", re: /first|1st|order (of )?(1|one)\b|\bn ?= ?1\b/i },
        { label: "Predicts the rate triples", re: /tripl|3 ?times|three times|×\s?3|x\s?3|factor of (3|three)/i }
      ],
      rubric: "2 points: names Trials 1 and 3, shows [Br₂] doubling causes the rate to double, concludes first order, and predicts the rate triples. 1 point: at least two of these parts.",
      model: "In Trials 1 and 3, [NO] stays at 0.010 M while [Br₂] doubles from 0.010 M to 0.020 M. The rate also doubles, from 2.5 × 10⁻⁵ to 5.0 × 10⁻⁵ M/s. Since 2ⁿ = 2, n = 1, so the reaction is first order in Br₂. If [Br₂] is tripled with [NO] constant, the rate will triple.",
      why: "Only Trials 1 and 3 change [Br₂] while holding [NO] constant. Doubling [Br₂] doubles the rate, so the order is 1. For a first-order reactant, rate is directly proportional to its concentration, so tripling [Br₂] triples the rate (3¹ = 3)." }
  ]
};

/* ============================ AP CALCULUS AB ============================ */
const HAP_FGRAPH = (function () {
  const X = x => 60 + (x + 1) * 60, Y = y => 220 - y * 50;
  let g = "";
  for (let x = -1; x <= 6; x++) g += `<line class="soft" x1="${X(x)}" x2="${X(x)}" y1="${Y(4)}" y2="${Y(-1)}"/>`;
  for (let y = -1; y <= 4; y++) g += `<line class="soft" y1="${Y(y)}" y2="${Y(y)}" x1="${X(-1)}" x2="${X(6)}"/>`;
  g += `<line class="ink" x1="${X(-1)}" x2="${X(6)}" y1="${Y(0)}" y2="${Y(0)}"/><line class="ink" x1="${X(0)}" x2="${X(0)}" y1="${Y(4)}" y2="${Y(-1)}"/>`;
  for (let x = -1; x <= 6; x++) if (x) g += `<text class="tm" x="${X(x)}" y="${Y(0) + 17}" text-anchor="middle">${x < 0 ? "−" + -x : x}</text>`;
  for (let y = -1; y <= 4; y++) if (y) g += `<text class="tm" x="${X(-1) - 8}" y="${Y(y) + 4}" text-anchor="end">${y < 0 ? "−" + -y : y}</text>`;
  g += `<text class="t" x="${X(6) + 8}" y="${Y(0) + 5}">x</text><text class="t" x="${X(0) + 8}" y="${Y(4) + 4}">y</text>`;
  const seg = (a, b, c, d) => `<line class="ink k1" style="stroke-width:3" x1="${X(a)}" y1="${Y(b)}" x2="${X(c)}" y2="${Y(d)}"/>`;
  g += seg(-1, 0, 2, 3) + seg(2, 3, 4, 3) + seg(4, 1, 6, 3);
  const open = (x, y) => `<circle class="soft k1" style="stroke-width:2.5" cx="${X(x)}" cy="${Y(y)}" r="6"/>`;
  const shut = (x, y) => `<circle class="f1" cx="${X(x)}" cy="${Y(y)}" r="6"/>`;
  g += shut(-1, 0) + open(2, 3) + shut(2, 1) + shut(4, 3) + open(4, 1) + shut(6, 3);
  g += `<text class="t" x="${X(0.6)}" y="${Y(2.6)}">y = f(x)</text>`;
  return `<svg class="dg" viewBox="0 0 520 290" role="img" aria-label="Graph of y equals f of x for x from negative 1 to 6. A line segment rises from a closed point at (negative 1, 0) to an open circle at (2, 3). There is a separate closed point at (2, 1). A horizontal segment runs from the open circle at (2, 3) to a closed point at (4, 3). Another segment starts at an open circle at (4, 1) and rises to a closed point at (6, 3).">${g}</svg>`;
})();

RC["ap-calc-deriv"] = {
  subject: "AP Calculus AB", mins: 15,
  title: "AP Practice Quiz: Limits and Derivatives",
  blurb: "Units 1 to 3: limits from graphs and tables, the derivative as a rate of change, estimating a derivative from a table, the power, product, and chain rules, and tangent lines.",
  eq: "How does the derivative describe how fast a quantity is changing at one instant?",
  target: "I can find limits from graphs and tables, estimate and interpret derivatives with units, and use the power, product, and chain rules to write a tangent line.",
  sources: [
    { tab: "Key Ideas", title: "Limits and Derivatives", numbered: true, blocks: [
      { box: HAP_NOTE },
      { p: "<b>lim<sub>x→c</sub> f(x) = L</b> means the outputs of f get close to L as x gets close to c from <b>both</b> sides. The limit exists only if the left-hand limit and the right-hand limit are equal. The value f(c) itself does not affect the limit." },
      { p: "A function is <b>continuous</b> at x = c when three things are true: f(c) is defined, lim<sub>x→c</sub> f(x) exists, and lim<sub>x→c</sub> f(x) = f(c)." },
      { p: "The <b>derivative</b> f′(a) is the instantaneous rate of change of f at x = a, which is the slope of the tangent line there. Its units are (units of the output) per (unit of the input). From a table, estimate f′(a) with the slope between the two closest data points on either side: (f(b) − f(c)) ÷ (b − c)." },
      { p: "<b>Rules:</b> Power rule: d/dx[x<sup>n</sup>] = nx<sup>n−1</sup>. Product rule: d/dx[f(x)g(x)] = f′(x)g(x) + f(x)g′(x). Chain rule: d/dx[f(g(x))] = f′(g(x)) · g′(x)." },
      { p: "The <b>tangent line</b> to y = f(x) at x = a is <b>y − f(a) = f′(a)(x − a)</b>. Near x = a, the tangent line gives a good approximation of f (a <b>local linear approximation</b>)." }
    ]},
    { tab: "Graph", title: "The Graph of f", blocks: [
      { fig: HAP_FGRAPH, cap: "Figure 1. The graph of f on −1 ≤ x ≤ 6. An open circle means the point is not included. A filled dot means it is included." }
    ]},
    { tab: "Tables", title: "Tables of Values", blocks: [
      { table: { cap: "Table 1. Values of g(x) = (x² − 9) ÷ (x − 3). Note: g(3) is undefined.", head: ["x", "2.9", "2.99", "2.999", "3.001", "3.01", "3.1"], rowHead: true, rows: [["g(x)", "5.9", "5.99", "5.999", "6.001", "6.01", "6.1"]] } },
      { p: "Water is pumped into a tank. The amount of water in the tank, W(t), in gallons, is recorded at selected times t, in minutes. W is differentiable.", n: false },
      { table: { cap: "Table 2. Water in the tank.", head: ["t (minutes)", "0", "2", "5", "9", "12"], rowHead: true, rows: [["W(t) (gallons)", "50", "62", "80", "98", "104"]] } },
      { p: "The functions f and g below are differentiable for all real numbers. (These are new functions, not the ones in Figure 1 or Table 1.)", n: false },
      { table: { cap: "Table 3. Values of differentiable functions f and g.", head: ["x", "f(x)", "f′(x)", "g(x)", "g′(x)"], rowHead: true, rows: [["1", "3", "−2", "2", "4"], ["2", "5", "7", "1", "−3"], ["3", "0", "1", "6", "5"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Use Figure 1. What is lim<sub>x→2</sub> f(x)?", opts: ["1", "2", "3", "The limit does not exist."], a: 2,
      why: "As x approaches 2 from the left, the graph approaches the open circle at height 3. From the right, the horizontal segment is also at height 3. Both sides agree, so the limit is 3. The filled dot at (2, 1) is f(2), which does not affect the limit." },
    { t: "grid", ref: 2, q: "Use Figure 1. Is each statement about x = 4 true or false?", cols: ["True", "False"],
      rows: [["f(4) = 3", 0], ["lim<sub>x→4⁻</sub> f(x) = 3", 0], ["lim<sub>x→4⁺</sub> f(x) = 3", 1], ["f is continuous at x = 4", 1]],
      why: "The filled dot at (4, 3) means f(4) = 3. From the left the graph is at height 3, but from the right it starts at the open circle (4, 1), so the right-hand limit is 1. The one-sided limits are different, so lim<sub>x→4</sub> f(x) does not exist and f is not continuous at x = 4 (a jump discontinuity)." },
    { t: "mc", ref: 3, q: "Use Table 1. What is the best estimate of lim<sub>x→3</sub> g(x)?", opts: ["0", "6", "The limit does not exist because g(3) is undefined.", "3"], a: 1,
      why: "From both sides, g(x) gets closer and closer to 6 (5.999 and 6.001). A limit describes what the outputs approach, so it can exist even when g(3) is undefined. Algebra confirms it: (x² − 9) ÷ (x − 3) = x + 3 for x ≠ 3, which approaches 6." },
    { t: "num", ref: 3, q: "Use the data in Table 2 to estimate W′(7).", pre: "W′(7) ≈", unit: "gallons per minute", a: 4.5, tol: 0.01,
      why: "Use the closest data points on either side of t = 7, which are t = 5 and t = 9: (W(9) − W(5)) ÷ (9 − 5) = (98 − 80) ÷ 4 = 18 ÷ 4 = 4.5 gallons per minute." },
    { t: "mc", ref: 3, q: "Which statement is the best interpretation of W′(7) ≈ 4.5 in context?",
      opts: ["At t = 7 minutes, the amount of water in the tank is increasing at a rate of about 4.5 gallons per minute.", "At t = 7 minutes, the tank holds about 4.5 gallons of water.", "Over the first 7 minutes, the amount of water increased by a total of 4.5 gallons.", "The water is increasing at an average rate of 4.5 gallons per minute from t = 0 to t = 7."], a: 0,
      why: "A derivative is an instantaneous rate of change, so the interpretation needs the time (t = 7), the rate (4.5), and the units (gallons per minute). Choice B confuses W′ with W, and choices C and D describe change over an interval, not at one instant." },
    { t: "mc", ref: 3, q: "Use Table 3. Let h(x) = f(g(x)). What is h′(1)?", opts: ["−8", "12", "20", "28"], a: 3,
      why: "Chain rule: h′(1) = f′(g(1)) · g′(1). Since g(1) = 2, this is f′(2) · g′(1) = 7 · 4 = 28. Choice A uses f′(1) · g′(1) = −2 · 4, which forgets to evaluate f′ at g(1)." },
    { t: "mc", ref: 3, q: "Use Table 3. Let P(x) = f(x) · g(x). What is P′(2)?", opts: ["5", "−21", "−8", "22"], a: 2,
      why: "Product rule: P′(2) = f′(2)g(2) + f(2)g′(2) = 7 · 1 + 5 · (−3) = 7 − 15 = −8. Choice B multiplies the derivatives (7 · −3), which is not the product rule." },
    { t: "inline", q: "Let k(x) = x³ − 2x. Complete the work for the tangent line at x = 2.",
      text: "Since k(2) = 4 and k′(x) = 3x² − 2, the slope of the tangent line at x = 2 is [[]]. The tangent line is [[]]. Using the tangent line, k(2.1) ≈ [[]].",
      blanks: [{ opts: ["4", "10", "12"], a: 1 }, { opts: ["y = 10x − 16", "y = 10x + 4", "y = 12x − 20"], a: 0 }, { opts: ["4.1", "5", "6"], a: 1 }],
      why: "Power rule: k′(x) = 3x² − 2, so k′(2) = 3(4) − 2 = 10. Point-slope: y − 4 = 10(x − 2), so y = 10x − 16. At x = 2.1: 10(2.1) − 16 = 21 − 16 = 5. (The actual value is k(2.1) = 9.261 − 4.2 = 5.061, so the approximation is close.)" },
    { t: "write", ref: 2, min: 25, q: "<b>Short free response.</b> Use Figure 1. Is f continuous at x = 2? Justify your answer using the definition of continuity, with values from the graph.",
      checks: [
        { label: "States that f is not continuous at x = 2", re: /not continuous|discontinu|isn.?t continuous|not cont|no,? (it|f) is not/i },
        { label: "Gives the limit as x approaches 2 (it is 3)", re: /\b3\b|three/i },
        { label: "Gives the value f(2) = 1", re: /\b1\b|\bone\b/i },
        { label: "Says the limit and f(2) are not equal", re: /not equal|≠|!=|(doesn.?t|does not|do not|don.?t) (equal|match)|different|unequal|isn.?t (equal|the same)|not the same|differ/i }
      ],
      rubric: "2 points: says f is not continuous, gives lim f(x) = 3 and f(2) = 1, and says they are not equal. 1 point: at least two of these parts.",
      model: "No, f is not continuous at x = 2. The limit of f(x) as x approaches 2 is 3, because the graph approaches height 3 from both sides. But f(2) = 1, shown by the filled dot. Since the limit does not equal f(2), the third condition of continuity fails, so f has a removable discontinuity at x = 2.",
      why: "f(2) is defined (it is 1) and the limit exists (it is 3), but the limit does not equal the function value. All three conditions must hold for continuity, so f is not continuous at x = 2. This kind of break is a removable discontinuity." }
  ]
};

/* ============================ AP STATISTICS ============================= */
const HAP_STUDY = [[1, 61], [2, 64], [2, 70], [3, 69], [4, 76], [5, 79], [6, 83], [8, 88]];

RC["ap-stats-regression"] = {
  subject: "AP Statistics", mins: 15,
  title: "AP Practice Quiz: Scatterplots and Linear Regression",
  blurb: "Unit 2 (Exploring Two-Variable Data): describe a scatterplot, interpret r, slope, intercept, residuals, and r² in context, and recognize extrapolation.",
  eq: "How can a least-squares regression line describe and predict a relationship between two quantitative variables, and when should we not trust it?",
  target: "I can interpret correlation, slope, y-intercept, residuals, and r² in context and explain the dangers of extrapolation and of claiming cause and effect.",
  sources: [
    { tab: "Key Ideas", title: "Describing Two-Variable Data", numbered: true, blocks: [
      { box: HAP_NOTE },
      { p: "To describe a scatterplot, give the <b>direction</b> (positive or negative), <b>form</b> (linear or curved), <b>strength</b> (strong, moderate, weak), and any <b>unusual features</b> such as outliers, all <b>in context</b>." },
      { p: "The <b>correlation r</b> (between −1 and 1) measures the direction and strength of a <b>linear</b> relationship. r has no units, and it does not change if you change the units of either variable." },
      { p: "The <b>least-squares regression line</b> is ŷ = a + bx, where ŷ (“y-hat”) is the <b>predicted</b> value. The <b>slope b</b> is the predicted change in y for each 1-unit increase in x. The <b>y-intercept a</b> is the predicted y when x = 0." },
      { p: "A <b>residual</b> = actual y − predicted y (y − ŷ). A positive residual means the point is above the line (the model underestimated). A negative residual means the point is below the line." },
      { p: "<b>r²</b>, the coefficient of determination, is the percent of the variation in y that is explained by the linear relationship with x. <b>Extrapolation</b> means predicting for x-values far outside the data’s range, which is often unreliable. Finally, a strong correlation in observational data does not prove that x <b>causes</b> y." }
    ]},
    { tab: "Data", title: "Study Time and Test Scores", blocks: [
      { p: "A teacher recorded how many hours 8 students studied during the week before a unit test (x) and their test scores out of 100 (y).", n: false },
      { table: { cap: "Table 1. Hours studied and test scores. Sample data for practice.", head: ["Student", "A", "B", "C", "D", "E", "F", "G", "H"], rowHead: true,
        rows: [["Hours studied (x)", "1", "2", "2", "3", "4", "5", "6", "8"], ["Test score (y)", "61", "64", "70", "69", "76", "79", "83", "88"]] } },
      { fig: RCG.line({ title: "Test Score vs. Hours Studied", w: 540, h: 340, x: { min: 0, max: 10, step: 1, label: "Hours studied" }, y: { min: 50, max: 100, step: 10, label: "Test score" },
          series: [{ fn: x => 58.72 + 3.88 * x, from: 0, to: 9, cls: "s2", dash: true, label: "Regression line" }]
            .concat(HAP_STUDY.map((p, i) => ({ pts: [p], dots: true, cls: "s1", label: i ? "" : "Students" }))),
          legend: "right",
          alt: "Scatterplot of 8 students. Points: (1, 61), (2, 64), (2, 70), (3, 69), (4, 76), (5, 79), (6, 83), (8, 88). The points rise from lower left to upper right close to a dashed regression line." }),
        cap: "Figure 1. Scatterplot with the least-squares regression line." },
      { box: "<b>Computer output:</b><br>Regression equation: <b>ŷ = 58.72 + 3.88x</b><br>r = 0.975 &nbsp;&nbsp; r² = 0.950<br>x = hours studied, ŷ = predicted test score" }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Which description of the association between hours studied and test score is best?", opts: ["Strong, positive, and linear", "Weak, positive, and linear", "Strong, negative, and linear", "Moderate, positive, and curved"], a: 0,
      why: "The points rise from left to right (positive), follow a straight-line pattern (linear), and stay close to the line. r = 0.975 is close to 1, which confirms a strong positive linear relationship." },
    { t: "mc", ref: 2, q: "Which is the correct interpretation of the slope of the regression line?",
      opts: ["Each student scored exactly 3.88 points higher for every hour studied.", "For each additional hour studied, the predicted test score increases by about 3.88 points.", "For each additional point on the test, students studied about 3.88 more hours.", "A student who studied 1 hour is predicted to score 3.88 points."], a: 1,
      why: "The slope is the <b>predicted</b> change in y for a 1-unit increase in x. Choice A is wrong because real scores vary around the line (they are not exact), and choice C reverses x and y." },
    { t: "mc", ref: 2, q: "Which is the correct interpretation of the y-intercept, 58.72?",
      opts: ["The predicted score increases by 58.72 points per hour studied.", "The average test score of the 8 students is 58.72.", "Every student scored at least 58.72 points.", "A student who studies 0 hours is predicted to score about 58.72 points."], a: 3,
      why: "The y-intercept is ŷ when x = 0. Note that no student in the data studied 0 hours, so this is a slight extrapolation. The mean score is actually 73.75, not 58.72." },
    { t: "num", ref: 2, q: "Student C studied 2 hours and scored 70. Use the regression equation to find Student C’s <b>residual</b>.", pre: "residual =", unit: "points", a: 3.52, tol: 0.05,
      why: "Predicted: ŷ = 58.72 + 3.88(2) = 58.72 + 7.76 = 66.48. Residual = actual − predicted = 70 − 66.48 = 3.52 points. It is positive, so Student C scored higher than the model predicted." },
    { t: "mc", ref: 2, q: "Student B’s residual is about −2.48. What does this mean?",
      opts: ["Student B studied about 2.48 fewer hours than predicted.", "Student B’s point is 2.48 units above the regression line.", "The linear model is not appropriate for Student B.", "Student B scored about 2.48 points lower than the model predicted."], a: 3,
      why: "Residual = actual − predicted. A negative residual means the actual score (64) was below the predicted score (66.48), so the point is below the line. Residuals are measured in y-units (test points), not hours." },
    { t: "mc", ref: 1, q: "Which is the correct interpretation of r² = 0.950?",
      opts: ["About 95% of students’ test scores are predicted exactly right.", "About 95% of the variation in test scores is explained by the linear relationship with hours studied.", "The correlation between hours studied and test score is 0.950.", "About 95% of the points lie on the regression line."], a: 1,
      why: "r² is the fraction of the variation in y explained by the linear model with x. It is not the correlation (r = 0.975), and it does not say anything about points lying exactly on the line." },
    { t: "mc", ref: 1, q: "Suppose the teacher recorded study time in <b>minutes</b> instead of hours. What would happen to the correlation r?", opts: ["It would be multiplied by 60.", "It would be divided by 60.", "It would stay the same, 0.975.", "It would change to 0.950."], a: 2,
      why: "r has no units. Changing the units of x (hours to minutes) stretches the scatterplot but does not change the direction or strength of the linear pattern, so r stays 0.975. (The slope would change, to 3.88 ÷ 60 points per minute.)" },
    { t: "mc", ref: 1, q: "The teacher concludes: “These data prove that studying more <b>causes</b> higher test scores.” Which response is best?",
      opts: ["This is not justified. The data are observational, so other variables, such as interest in the subject, could be related to both study time and scores.", "This is justified, because r is very close to 1.", "This is justified, because r² shows that 95% of a student’s score is caused by studying.", "This is not justified, because the slope is less than 5."], a: 0,
      why: "Only a randomized experiment can show cause and effect. These data come from observing students, so a lurking variable (like motivation or prior knowledge) could explain both. A strong r does not prove causation." },
    { t: "write", ref: 2, min: 30, q: "<b>Short free response.</b> A student plans to study <b>20 hours</b> for the next test. Should the teacher use this regression line to predict the student’s score? Calculate the prediction and explain.",
      checks: [
        { label: "Says the teacher should not trust this prediction", re: /\bno\b|\bnot\b|shouldn.?t|unreliable|wouldn.?t|untrustworthy|bad idea/i },
        { label: "Calls it extrapolation or notes 20 hours is outside the data (1 to 8 hours)", re: /extrapolat|outside|beyond|range|more than 8|past 8|over 8|only (went|goes|go) (up )?to 8|max(imum)? (of|was|is) 8|1 (to|-|–) ?8/i },
        { label: "Gives the prediction (about 136) and notes it is impossible or over 100", re: /136|over 100|above 100|more than 100|greater than 100|higher than 100|impossible|exceed|not possible|out of 100/i }
      ],
      rubric: "2 points: says no, identifies extrapolation (20 hours is far outside the 1 to 8 hours in the data), and computes ŷ ≈ 136 or notes it is impossible on a 100-point test. 1 point: two of these three parts.",
      model: "No. The data only include students who studied from 1 to 8 hours, so 20 hours is extrapolation. The model predicts ŷ = 58.72 + 3.88(20) = 136.32, which is impossible on a test scored out of 100. The linear pattern probably does not continue that far.",
      why: "ŷ = 58.72 + 3.88(20) = 58.72 + 77.6 = 136.32 points, which is impossible. The line only describes the data from 1 to 8 hours. Beyond that range, the relationship may level off, so predictions are unreliable (extrapolation)." }
  ]
};

/* ============================ AP PSYCHOLOGY ============================= */
RC["ap-psych-research"] = {
  subject: "AP Psychology", mins: 15,
  title: "AP Practice Quiz: Research Methods and Data",
  blurb: "Science Practices 2 and 3 (research methods and data interpretation), in the style of the Article Analysis Question: experiments vs. correlation, variables, sampling, ethics, and statistics.",
  eq: "How do psychologists design studies and use statistics so that their conclusions can be trusted?",
  target: "I can identify a study’s method, variables, and operational definitions, explain random assignment, sampling, and ethics, and interpret means, medians, standard deviations, and correlations.",
  sources: [
    { tab: "Key Ideas", title: "Research Methods Toolkit", numbered: true, blocks: [
      { box: HAP_NOTE },
      { p: "In an <b>experiment</b>, the researcher manipulates an <b>independent variable (IV)</b> and measures its effect on a <b>dependent variable (DV)</b>. Because participants are put into groups by <b>random assignment</b>, differences between people (like reading skill) are spread evenly across groups. That is why only experiments can support <b>cause-and-effect</b> conclusions." },
      { p: "A <b>confounding variable</b> is a factor other than the IV that differs between groups and could explain the results. Researchers <b>control</b> variables by keeping them the same for every group." },
      { p: "An <b>operational definition</b> states exactly how a variable is measured or manipulated, so another researcher could <b>replicate</b> (repeat) the study. For example, “stress” could be operationally defined as heart rate in beats per minute." },
      { p: "<b>Random sampling</b> is different from random assignment. Random sampling means every member of the population has an equal chance of being chosen for the study. It makes the sample <b>representative</b>, so results can be <b>generalized</b> to the population. A <b>convenience sample</b> (people who are easy to reach) is not representative." },
      { p: "In a <b>correlational study</b>, researchers measure two variables without manipulating either one. The <b>correlation coefficient r</b> ranges from −1 to +1. Correlation does not prove causation, because a third variable might explain both." },
      { p: "<b>Ethics:</b> Research with people must be approved by an institutional review board (IRB). Participants give <b>informed consent</b> (for minors, a parent consents and the minor gives assent), can leave at any time, have their data kept <b>confidential</b>, and are <b>debriefed</b> (told the true purpose) at the end, especially if any deception was used." },
      { p: "<b>Statistics:</b> The <b>mean</b> is the average, and the <b>median</b> is the middle score. Extreme scores pull the mean toward them, so in a <b>negatively skewed</b> distribution (a few very low scores), the mean is lower than the median. The <b>standard deviation (SD)</b> measures how spread out scores are around the mean." }
    ]},
    { tab: "Study", title: "Can a Silent Phone Still Distract You?", blocks: [
      { p: "<i>A fictional study summary written for practice, in the style of a journal article.</i>", n: false },
      { h: "Study 1: An experiment" },
      { p: "<b>Participants.</b> Sixty students, ages 15 to 18, volunteered from psychology classes at one high school. Parents signed consent forms and students signed assent forms. Participants were told the study was about “reading habits.”", n: false },
      { p: "<b>Method.</b> A computer randomly assigned each student to one of two conditions. In the <b>phone-on-desk</b> condition (n = 30), students placed their phone face-down and silent on the desk. In the <b>phone-away</b> condition (n = 30), students left their phone in another room. All students read the same 1,200-word article for 15 minutes in the same room on the same morning. Then they took a 20-question multiple-choice quiz about the article. Afterward, the researchers explained the true purpose of the study.", n: false },
      { table: { cap: "Table 1. Reading quiz scores (number correct out of 20).", head: ["Condition", "n", "Mean", "Median", "Standard deviation"], rowHead: true,
        rows: [["Phone on desk", "30", "12.4", "13", "3.1"], ["Phone away", "30", "15.1", "15", "2.2"]] } },
      { p: "<b>Results.</b> The phone-away group scored higher, and the difference was statistically significant (p &lt; .05), meaning it is unlikely to be due to chance alone.", n: false },
      { h: "Study 2: A follow-up survey" },
      { p: "The researchers also surveyed 200 students at the same school about their average daily screen time and average hours of sleep per night. They found a correlation of <b>r = −0.42</b> between screen time and sleep.", n: false }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Which research method was used in Study 1, and why?",
      opts: ["Correlational study, because the researchers measured two variables", "Experiment, because the researchers manipulated where the phone was and randomly assigned participants to conditions", "Case study, because the study focused on one high school", "Naturalistic observation, because students were in a normal classroom setting"], a: 1,
      why: "The researchers controlled the phone’s location (they manipulated a variable) and used a computer to randomly assign students to conditions. Those two features make it an experiment." },
    { t: "grid", ref: 2, q: "Classify each part of Study 1.", cols: ["Independent variable", "Dependent variable", "Controlled variable"],
      rows: [["Whether the phone was on the desk or in another room", 0], ["Score on the 20-question reading quiz", 1], ["The same 1,200-word article and 15-minute reading time", 2]],
      why: "The IV is what the researchers changed (phone location). The DV is what they measured to see the effect (quiz score). The article and time limit were kept the same for both groups, so they are controlled variables." },
    { t: "mc", ref: 2, q: "Which is the <b>operational definition</b> of reading comprehension in Study 1?",
      opts: ["How well students understood what they read", "Whether students’ phones were on the desk or in another room", "The number of correct answers out of 20 on a multiple-choice quiz about the article", "How distracted students said they felt while reading"], a: 2,
      why: "An operational definition tells exactly how a variable is measured. “How well students understood” (A) is the concept, not a measurement. The study measured comprehension as the number correct out of 20." },
    { t: "mc", ref: 1, q: "What was the main purpose of using <b>random assignment</b> in Study 1?",
      opts: ["To make sure the sample represents all high school students in the United States", "To make the two groups exactly the same size", "To let participants choose the condition they preferred", "To spread differences between participants, such as reading skill, evenly across the groups so they do not become confounding variables"], a: 3,
      why: "Random assignment makes the groups similar at the start, so a difference in quiz scores can be credited to the IV. Choice A describes random <b>sampling</b>, which is a different idea and was not used here." },
    { t: "mc", ref: 2, q: "Which statement about the <b>standard deviations</b> in Table 1 is most accurate?",
      opts: ["Scores in the phone-away group were clustered more closely around their mean than scores in the phone-on-desk group.", "Students in the phone-away group scored 2.2 points higher than students in the phone-on-desk group.", "The phone-on-desk group had more participants than the phone-away group.", "Because 3.1 is greater than 2.2, the phone-on-desk group scored higher on average."], a: 0,
      why: "Standard deviation measures spread. The phone-away SD (2.2) is smaller than the phone-on-desk SD (3.1), so phone-away scores were less spread out. SD does not tell you which group scored higher; the means do (15.1 vs. 12.4)." },
    { t: "mc", ref: 2, q: "In the phone-on-desk group, the mean (12.4) is lower than the median (13). What does this most likely suggest?",
      opts: ["The distribution is positively skewed, with a few very high scores pulling the mean up.", "The distribution is negatively skewed, with a few very low scores pulling the mean down.", "The distribution is perfectly normal, so the mean and median must be equal.", "The median was calculated incorrectly, because the median is always lower than the mean."], a: 1,
      why: "Extreme scores pull the mean toward them, but they do not move the median much. A mean below the median suggests a few unusually low scores, which is a negative (left) skew." },
    { t: "mc", ref: 2, q: "Which conclusion about Study 2 (r = −0.42) is best?",
      opts: ["More screen time causes students to sleep about 42% less.", "There is no relationship between screen time and sleep, because r is negative.", "Students who report more screen time tend to report less sleep, but the study cannot show that screen time causes less sleep.", "The relationship is very strong, because −0.42 is close to −1."], a: 2,
      why: "A negative r means that as one variable goes up, the other tends to go down. −0.42 is a moderate correlation, not very strong. Because Study 2 is correlational, a third variable (like homework load or stress) could affect both, so it cannot show causation." },
    { t: "mc", ref: 2, q: "Participants were told the study was about “reading habits” and were not told about the phones until the end. Which ethical practice does this make especially important?",
      opts: ["Paying participants for their time", "Using a double-blind procedure", "Using random sampling", "Debriefing participants by explaining the true purpose and why deception was needed"], a: 3,
      why: "When researchers use deception, ethical guidelines require debriefing at the end: telling participants the real purpose and answering questions. The study did this (“Afterward, the researchers explained the true purpose”)." },
    { t: "write", ref: 2, min: 30, q: "<b>Short free response (Article Analysis style).</b> Can the researchers generalize the results of Study 1 to all high school students in the United States? Explain your answer using the type of sample.",
      checks: [
        { label: "Says the results cannot be fully generalized", re: /\bno\b|\bnot\b|cannot|can.?t|limited|shouldn.?t|unable/i },
        { label: "Identifies the sample: volunteers from one school (a convenience sample, not random sampling)", re: /convenience|volunteer|not random(ly)? (sampl|select|chos)|random sampl|one (high )?school|single school|same school|psychology class/i },
        { label: "Explains that the sample may not represent the population", re: /represent|generaliz|population|all (u\.?s\.?|high school|students)|other (schools|students|places)|different (schools|students|areas)|every (student|high school)/i }
      ],
      rubric: "2 points: says no (or only with caution), identifies that the participants were volunteers from one school rather than a random sample, and explains that they may not represent all U.S. high school students. 1 point: two of these three parts.",
      model: "No. The participants were 60 volunteers from psychology classes at one high school, which is a convenience sample, not a random sample of U.S. high school students. Students at other schools or in other classes might use phones differently, so the sample may not represent the whole population. Random assignment supports cause and effect, but only random sampling allows generalizing.",
      why: "Random assignment lets the researchers say the phone caused the difference for these participants. But generalizing to a population requires a representative sample, usually from random sampling. Volunteers from psychology classes at one school are a convenience sample, so the results may not apply to all U.S. high school students." }
  ]
};
