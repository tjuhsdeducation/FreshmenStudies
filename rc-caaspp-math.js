/* =====================================================================
   ✏️ CAASPP PRACTICE: MATH (Smarter Balanced style, high school)
   and SCIENCE (CAST style, high school)
   Opens at caaspp.html?id=THE-ID. (See rc-caaspp-ela.js for item types.)
   Number answers accept decimals or fractions (for example 3/4).
   ===================================================================== */
const CAM = { kind: "CAASPP Practice" };
const MATH_REF = { tab: "Reference Sheet", title: "Math Reference Sheet", blocks: [
  { table: { cap: "Formulas you may use.", head: ["Topic", "Formula"], rowHead: true, rows: [
    ["Slope", "m = (y<sub>2</sub> − y<sub>1</sub>) ÷ (x<sub>2</sub> − x<sub>1</sub>)"], ["Slope-intercept form", "y = mx + b"], ["Quadratic formula", "x = (−b ± √(b² − 4ac)) ÷ 2a"],
    ["Exponential growth", "y = a(1 + r)<sup>t</sup>"], ["Exponent rules", "(x<sup>a</sup>)<sup>b</sup> = x<sup>ab</sup> &nbsp;·&nbsp; x<sup>a</sup> · x<sup>b</sup> = x<sup>a+b</sup> &nbsp;·&nbsp; x<sup>−a</sup> = 1 ÷ x<sup>a</sup>"], ["Square of a sum", "(a + b)² = a² + 2ab + b²"]] } },
  { box: "✏️ Use scratch paper, or select 📝 Note and click anywhere on this sheet to jot your work." }
]};

RC["math-concepts"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Claim 1: Concepts and Procedures",
  blurb: "Equations, exponents, equivalent expressions, functions, systems, quadratics, and exponential growth.",
  eq: "How can I choose an efficient strategy and check that my answer makes sense?",
  target: "I can solve equations and inequalities, rewrite expressions, and interpret functions accurately.",
  sources: [ MATH_REF,
    { tab: "Graph", title: "Figure 1: The graph of h(x)", blocks: [
      { fig: RCG.line({ title: "h(x)", x: { min: -3, max: 5, step: 1, label: "x" }, y: { min: -5, max: 5, step: 1, label: "y" }, hlines: [{ y: 0 }],
          series: [{ fn: x => (x - 1) * (x - 1) - 4, from: -2.2, to: 4.2, cls: "s1" }], marks: [{ x: 1, y: -4, text: "(1, −4)", cls: "s1", dy: 18 }],
          alt: "An upward parabola with vertex at (1, −4). It crosses the x-axis at x = −1 and x = 3 and crosses the y-axis at −3." }),
        cap: "Use this graph for question 11." }
    ]}
  ],
  qs: [
    { t: "num", q: "Solve for x.<div class=\"eqn\">3(2x − 5) = 4x + 7</div>", a: 11, tol: 0.001, pre: "x =", why: "6x − 15 = 4x + 7 → 2x = 22 → x = 11." },
    { t: "mc", q: "Which expression is equivalent to (x<sup>3</sup>)<sup>2</sup> · x<sup>−4</sup> for x ≠ 0?", opts: ["x<sup>2</sup>", "x<sup>10</sup>", "x<sup>−24</sup>", "x<sup>1</sup>"], a: 0, why: "(x³)² = x⁶, and x⁶ · x⁻⁴ = x²." },
    { t: "multi", q: "Select <b>all</b> expressions that are equivalent to 2x² + 4x − 6.", opts: ["2(x + 3)(x − 1)", "(2x + 6)(x − 1)", "2(x − 3)(x + 1)", "(x + 3)(2x − 2)", "2x(x + 4) − 6"], a: [0, 1, 3],
      why: "2(x + 3)(x − 1) = 2(x² + 2x − 3) = 2x² + 4x − 6. Choices B and D move the factor of 2. Choice C gives 2x² − 4x − 6, and E gives 2x² + 8x − 6." },
    { t: "grid", q: "Does each relation represent <b>y as a function of x</b>?", cols: ["Function", "Not a function"],
      rows: [["{(1, 2), (2, 3), (3, 4)}", 0], ["{(1, 2), (1, 5), (2, 3)}", 1], ["y = x²", 0], ["x = y²", 1], ["The vertical line x = 4", 1]],
      why: "A function gives exactly one output for each input. In the second relation, x = 1 has two outputs. x = y² and x = 4 also pair one x with more than one y." },
    { t: "num", q: "If f(x) = 2x² − 3x + 1, what is f(−2)?", a: 15, tol: 0.001, why: "2(4) − 3(−2) + 1 = 8 + 6 + 1 = 15." },
    { t: "num", q: "Solve the system. What is the value of <b>y</b>?<div class=\"eqn\">y = 2x + 1<br>x + y = 10</div>", a: 7, tol: 0.001, pre: "y =", why: "Substitute: x + 2x + 1 = 10 → x = 3, so y = 2(3) + 1 = 7." },
    { t: "mc", q: "What is the slope of the line through (−2, 5) and (4, −7)?", opts: ["−2", "2", "−½", "−6"], a: 0, why: "(−7 − 5) ÷ (4 − (−2)) = −12 ÷ 6 = −2." },
    { t: "inline", q: "Solve by factoring.", text: "x² − 5x − 14 = 0 &nbsp;→&nbsp; (x − 7)(x + 2) = 0 &nbsp;→&nbsp; x = [[]] or x = [[]]",
      blanks: [{ opts: ["7", "−7", "2", "14"], a: 0 }, { opts: ["2", "−2", "−7", "5"], a: 1 }], why: "Set each factor to 0: x − 7 = 0 gives 7, and x + 2 = 0 gives −2." },
    { t: "num", q: "A town has 1,200 people and grows by 5% each year. How many people will live there after <b>2 years</b>?", a: 1323, tol: 0.6, unit: "people", why: "1,200(1.05)² = 1,200(1.1025) = 1,323." },
    { t: "mc", q: "Which inequality describes all solutions of −2x + 3 > 11?", opts: ["x > −4", "x < −4", "x > 4", "x < 7"], a: 1, why: "−2x > 8. Dividing by a negative flips the sign: x < −4." },
    { t: "mc", ref: 2, q: "Use Figure 1. What are the <b>zeros</b> of h(x)?", opts: ["x = 1 and x = −4", "x = −1 and x = 3", "x = −3 only", "x = 0 and x = 4"], a: 1, why: "The zeros are where the graph crosses the x-axis: at −1 and 3. (1, −4) is the vertex." }
  ]
});

RC["math-modeling"] = Object.assign({}, CAM, {
  subject: "Math", mins: 25,
  title: "Claims 2 & 4: Problem Solving and Modeling",
  blurb: "Plan a T-shirt fundraiser: compare vendors, find break-even points, and write an inequality.",
  eq: "How can equations and graphs help us make a real decision?",
  target: "I can write and use linear models to compare options and solve a multi-step real-world problem.",
  sources: [
    { tab: "The Task", title: "Class T-Shirt Fundraiser", numbered: true, blocks: [
      { p: "The junior class is selling T-shirts to raise money for prom. Each shirt will sell for <b>$15</b>. The class must choose one of two vendors to print the shirts." },
      { table: { cap: "Table 1. Vendor prices.", head: ["Vendor", "Setup fee (one time)", "Cost per shirt"], rowHead: true, rows: [["Vendor A", "$160", "$6"], ["Vendor B", "$0", "$10"]] } },
      { p: "Let <b>n</b> be the number of shirts. The total cost for Vendor A is <b>C<sub>A</sub> = 160 + 6n</b>. The total cost for Vendor B is <b>C<sub>B</sub> = 10n</b>. The money the class takes in (revenue) is <b>R = 15n</b>. Profit is revenue minus cost." },
      { fig: RCG.line({ title: "Costs and Revenue", x: { min: 0, max: 80, step: 10, label: "Number of shirts (n)" }, y: { min: 0, max: 1200, step: 200, label: "Dollars" },
          series: [{ fn: n => 160 + 6 * n, cls: "s1", label: "Vendor A cost" }, { fn: n => 10 * n, cls: "s2", label: "Vendor B cost" }, { fn: n => 15 * n, cls: "s4", label: "Revenue", dash: true, to: 80 }],
          alt: "Three lines. Vendor A cost starts at 160 and rises 6 per shirt. Vendor B cost starts at 0 and rises 10 per shirt. Revenue starts at 0 and rises 15 per shirt. Vendor A and B cross at 40 shirts and 400 dollars." }),
        cap: "Figure 1. Total cost for each vendor and the class’s revenue." }
    ]}
  ],
  qs: [
    { t: "num", q: "What is the total cost to buy <b>30 shirts</b> from Vendor A?", a: 340, tol: 0.01, unit: "dollars", why: "160 + 6(30) = 160 + 180 = $340." },
    { t: "mc", q: "For 30 shirts, which vendor costs less, and by how much?", opts: ["Vendor A, by $40", "Vendor B, by $40", "Vendor B, by $60", "They cost the same."], a: 1, why: "Vendor B: 10(30) = $300. Vendor A: $340. B is $40 cheaper." },
    { t: "num", q: "For how many shirts would the two vendors cost <b>exactly the same</b>?", a: 40, tol: 0.01, unit: "shirts", why: "160 + 6n = 10n → 160 = 4n → n = 40. On the graph, the two cost lines cross at (40, 400)." },
    { t: "inline", q: "Complete the statement.", text: "For fewer than 40 shirts, Vendor [[]] costs less. For more than 40 shirts, Vendor [[]] costs less.",
      blanks: [{ opts: ["A", "B"], a: 1 }, { opts: ["A", "B"], a: 0 }], why: "Before the lines cross, B’s line is lower. After 40, A’s line is lower because its cost per shirt is smaller." },
    { t: "num", q: "The class uses Vendor A and sells <b>60 shirts</b>. What is the class’s <b>profit</b>?", a: 380, tol: 0.01, unit: "dollars", why: "Revenue 15(60) = $900. Cost 160 + 6(60) = $520. Profit = 900 − 520 = $380." },
    { t: "mc", q: "The class wants a profit of <b>at least $500</b> using Vendor A. Which inequality models this?", opts: ["15n − (160 + 6n) ≥ 500", "15n + 160 + 6n ≥ 500", "15n − (160 + 6n) ≤ 500", "160 + 6n ≥ 500"], a: 0, why: "Profit = revenue − cost, and “at least” means ≥." },
    { t: "num", q: "What is the <b>least</b> number of shirts the class must sell with Vendor A to make at least $500 profit?", a: 74, tol: 0.001, unit: "shirts", why: "9n − 160 ≥ 500 → 9n ≥ 660 → n ≥ 73.3. You can’t sell part of a shirt, so round up to 74." },
    { t: "mc", q: "In Figure 1, what does the point where the Revenue line crosses the Vendor A cost line represent?", opts: ["The number of shirts where the class neither makes nor loses money with Vendor A", "The number of shirts where Vendor A and Vendor B cost the same", "The most shirts the class can sell", "The setup fee for Vendor A"], a: 0, why: "Where revenue equals cost, profit is $0: the break-even point (about 18 shirts)." }
  ]
});

RC["math-reasoning"] = Object.assign({}, CAM, {
  subject: "Math", mins: 20,
  title: "Claim 3: Communicating Reasoning",
  blurb: "Find errors in student work, test claims with counterexamples, and explain your reasoning in writing.",
  eq: "How do mathematicians prove or disprove a claim?",
  target: "I can find and explain errors, use counterexamples, and justify whether a statement is always, sometimes, or never true.",
  sources: [
    { tab: "Student Work", title: "Three Students’ Thinking", blocks: [
      { h: "A. Kai solved an equation" },
      { table: { head: ["Step", "Kai’s work"], rowHead: true, rows: [["Start", "2(x + 4) = 18"], ["Step 1", "2x + 4 = 18"], ["Step 2", "2x = 14"], ["Step 3", "x = 7"]] } },
      { h: "B. Jamal made a claim" },
      { quote: "For all numbers a and b, (a + b)² = a² + b².", by: "Jamal" },
      { h: "C. Priya compared two money plans" },
      { p: "<b>Plan 1:</b> You get $1 on day 1, and the amount doubles every day ($1, $2, $4, $8, …). <b>Plan 2:</b> You get $100 every day.", n: false },
      { table: { cap: "Table 1. Total money received.", head: ["Days", "Plan 1 total", "Plan 2 total"], rowHead: true, rows: [["5", "$31", "$500"], ["8", "$255", "$800"], ["9", "$511", "$900"], ["10", "?", "$1,000"]] } },
      { quote: "After 9 days, Plan 2 has way more money, so Plan 2 will always be the better plan.", by: "Priya" },
      { box: "Hint: Plan 1’s total after n days is 2<sup>n</sup> − 1 dollars." }
    ]}
  ],
  qs: [
    { t: "mc", q: "Look at Kai’s work. In which step did Kai make his <b>first</b> error?", opts: ["Step 1", "Step 2", "Step 3", "Kai made no error."], a: 0, why: "In Step 1 Kai multiplied only x by 2. The 4 must also be multiplied: 2x + 8 = 18." },
    { t: "num", q: "What is the correct solution to 2(x + 4) = 18?", a: 5, tol: 0.001, pre: "x =", why: "2x + 8 = 18 → 2x = 10 → x = 5." },
    { t: "ebsr",
      A: { q: "Which values of a and b show that Jamal’s claim is <b>false</b>?", opts: ["a = 0, b = 3", "a = 1, b = 2", "a = 0, b = 0", "a = 5, b = 0"], a: 1 },
      B: { q: "Which statement <b>best</b> explains why Jamal’s claim does not always work?", opts: ["(a + b)² = a² + 2ab + b², so it equals a² + b² only when 2ab = 0.", "Squaring always makes numbers smaller.", "The claim works only for negative numbers.", "Parentheses do not matter when you square."], a: 0 },
      why: "With a = 1 and b = 2: (1 + 2)² = 9, but 1² + 2² = 5. The missing 2ab term is only 0 when a or b is 0, which is why the other choices do not disprove it." },
    { t: "grid", q: "Is each statement <b>always</b>, <b>sometimes</b>, or <b>never</b> true?", cols: ["Always", "Sometimes", "Never"],
      rows: [["The sum of two odd numbers is even.", 0], ["x² is greater than x.", 1], ["A negative number times a negative number is negative.", 2], ["(a + b)² = a² + b²", 1], ["If a < b, then a + 5 < b + 5.", 0]],
      why: "Odd + odd is always even. x² > x is false for x = ½ but true for x = 3. Negative × negative is positive. Jamal’s equation works only when a or b is 0. Adding the same number keeps an inequality true." },
    { t: "num", q: "Use the hint. What is Plan 1’s <b>total</b> after 10 days?", a: 1023, tol: 0.001, unit: "dollars", why: "2¹⁰ − 1 = 1,024 − 1 = $1,023." },
    { t: "mc", q: "Which statement <b>best</b> evaluates Priya’s claim?", opts: ["Priya is correct because $900 is more than $511.", "Priya is incorrect. By day 10, Plan 1 has $1,023 and Plan 2 has $1,000, and doubling keeps growing faster after that.", "Priya is correct because Plan 2 always adds $100.", "There is not enough information to decide."], a: 1, why: "Exponential growth eventually passes linear growth. A pattern from the first 9 days does not prove “always.”" },
    { t: "write", q: "<b>Brief write.</b> Explain Kai’s error to him and show how to solve 2(x + 4) = 18 correctly.", min: 15,
      checks: [
        { label: "Names the error (did not distribute / multiply the 4 by 2)", re: /distribut|multiply (the )?4|2 ?(×|x|\*|times) ?4|4 ?(×|x|\*|times) ?2|both terms|forgot|didn.?t multiply|only multiplied/i },
        { label: "Shows the correct step 2x + 8 = 18", re: /2x ?\+ ?8|8 ?= ?18|= ?10/i },
        { label: "Gives the correct answer x = 5", re: /x ?= ?5\b|\b5\b/i }
      ],
      rubric: "2 points: identifies the error and shows a correct solution. 1 point: identifies the error or solves correctly, but not both. 0 points: neither.",
      model: "Kai, in Step 1 you only multiplied the x by 2. You have to distribute the 2 to both terms, so 2(x + 4) becomes 2x + 8. Then 2x + 8 = 18, so 2x = 10, and x = 5. Check: 2(5 + 4) = 18." }
  ]
});

RC["cast-coral"] = Object.assign({}, CAM, {
  subject: "Science (CAST)", mins: 20,
  title: "CAST: Why Are Coral Reefs Turning White?",
  blurb: "A phenomenon-based science set: read about coral bleaching, analyze temperature and bleaching data, and write a CER.",
  eq: "How does a change in ocean temperature affect the relationship between corals and algae?",
  target: "I can analyze data to explain how a change in the environment affects organisms in an ecosystem.",
  sources: [
    { tab: "Phenomenon", title: "The Phenomenon: Ghost-White Reefs", numbered: true, blocks: [
      { p: "Divers sometimes discover that a reef that was bright orange, purple, and green just weeks before has turned a ghostly white. The corals have not been painted or covered in sand. Something inside them has changed." },
      { p: "Corals are animals. Many reef-building corals have tiny algae called <b>zooxanthellae</b> (zoh-zan-THEL-ee) living inside their tissues. The algae use sunlight to make food through photosynthesis and share it with the coral, providing up to 90% of the coral’s energy. In return, the coral gives the algae shelter and nutrients. The algae also give corals much of their color." },
      { p: "When ocean water stays warmer than normal for several weeks, the relationship breaks down. Heat-stressed corals expel the algae from their tissues. Without the colorful algae, the coral’s white skeleton shows through its clear tissue. This is called <b>coral bleaching</b>." },
      { p: "A bleached coral is not dead yet, but it has lost its main food source. If the water cools quickly, the algae can return and the coral may recover. If the heat lasts too long, the coral can starve and die. Scientists measure heat stress in <b>degree heating weeks (DHW)</b>, which combine how much warmer the water is than normal with how long it stays warm. NOAA reports that significant bleaching is likely at about 4 DHW, and severe bleaching with coral death is likely at about 8 DHW or more." },
      { p: "The world’s oceans have absorbed most of the extra heat trapped by greenhouse gases, and marine heat waves have become more frequent. Reef scientists are studying which corals are most heat-tolerant and how to protect reefs." }
    ]},
    { tab: "Data", blocks: [
      { fig: RCG.line({ title: "Monthly Water Temperature at Reef Site X", x: { min: 1, max: 12, step: 1, label: "Month (1 = January)" }, y: { min: 25, max: 31, step: 1, label: "Water temperature (°C)" },
          hlines: [{ y: 29.5, label: "bleaching threshold (29.5 °C)" }],
          series: [{ pts: [[1, 26], [2, 26.3], [3, 26.8], [4, 27.5], [5, 28.2], [6, 29], [7, 29.6], [8, 30.1], [9, 29.8], [10, 28.9], [11, 27.8], [12, 26.8]], cls: "s3", dots: true }],
          alt: "Line graph of monthly water temperature: January 26, February 26.3, March 26.8, April 27.5, May 28.2, June 29.0, July 29.6, August 30.1, September 29.8, October 28.9, November 27.8, December 26.8 degrees Celsius. A dashed line marks the bleaching threshold at 29.5." }),
        cap: "Figure 1. Sample data for one year (made up for practice)." },
      { table: { cap: "Table 1. Heat stress and bleaching at four reef sites (sample data).", head: ["Reef site", "Heat stress (DHW)", "Coral bleached (%)"], rowHead: true, rows: [["A", "1", "5%"], ["B", "4", "35%"], ["C", "8", "70%"], ["D", "12", "90%"]] } }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What type of relationship do corals and zooxanthellae have when conditions are normal?", opts: ["Parasitism", "Mutualism", "Predation", "Competition"], a: 1, why: "Both benefit: the algae get shelter and nutrients, and the coral gets food (paragraph 2)." },
    { t: "ebsr", ref: 1,
      A: { q: "Why do bleached corals turn white?", opts: ["Sand covers the coral.", "The corals expel the colorful algae, so the white skeleton shows through.", "The water becomes too salty.", "The corals grow a new white shell."], a: 1 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“Corals are animals.”", "“Without the colorful algae, the coral’s white skeleton shows through its clear tissue.”", "“Reef scientists are studying which corals are most heat-tolerant.”", "“The world’s oceans have absorbed most of the extra heat.”"], a: 1 },
      why: "Paragraph 3 explains that losing the algae reveals the white skeleton." },
    { t: "num", ref: 2, q: "Use Figure 1. In how many months was the water temperature <b>above</b> the bleaching threshold?", a: 3, tol: 0.001, unit: "months", why: "July (29.6), August (30.1), and September (29.8) are above 29.5 °C." },
    { t: "num", ref: 2, q: "Use Table 1. What percent of coral bleached at the site with <b>8 DHW</b>?", a: 70, tol: 0.001, unit: "%", why: "Site C: 8 DHW, 70% bleached." },
    { t: "mc", ref: 2, q: "Which conclusion is <b>best</b> supported by Table 1?", opts: ["Heat stress has no effect on bleaching.", "As heat stress increases, the percent of coral that bleaches increases.", "Site A had the most bleaching.", "Bleaching decreases when DHW increases."], a: 1, why: "Bleaching rises from 5% to 90% as DHW rises from 1 to 12." },
    { t: "order", ref: 1, q: "Put the events in the order that leads to coral death (first at the top).", items: ["Ocean water stays warmer than normal for weeks.", "The corals become heat-stressed.", "The corals expel their algae.", "The corals turn white and lose their main food source.", "If the heat continues, the corals starve and may die."], why: "This cause-and-effect chain follows paragraphs 3 and 4." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> observations would suggest a bleached reef is <b>recovering</b>?", opts: ["Water temperatures drop back to normal soon after bleaching.", "The corals stay white for a full year.", "Algae return to the coral tissues and color returns.", "Heat stress rises to 12 DHW.", "More of the reef turns white."], a: [0, 2], why: "Paragraph 4: if the water cools quickly, the algae can return and the coral may recover." },
    { t: "grid", q: "Sort each statement into a part of a scientific explanation.", cols: ["Claim", "Evidence", "Reasoning"],
      rows: [["Rising ocean temperatures cause coral bleaching.", 0], ["At Site D (12 DHW), 90% of the coral bleached.", 1], ["Without algae, corals lose up to 90% of their energy source and can starve.", 2]],
      why: "The claim answers the question, the evidence is data, and the reasoning uses science ideas to connect them." },
    { t: "write", q: "<b>Brief write (CER).</b> Use the data to explain how heat stress affects coral reefs. Include a claim, evidence from Figure 1 or Table 1, and reasoning about the algae.", min: 40,
      checks: [
        { label: "Claim: more heat (or higher temperature / DHW) causes more bleaching", re: /(more|higher|increas|warm|hot|heat).{0,60}(bleach|white|die)|(bleach|white).{0,60}(heat|warm|temperature|dhw)/i },
        { label: "Evidence: uses a number from the data", re: /\b(5|35|70|90|29\.5|30\.1|29\.6|29\.8|12|8|4)\b ?(%|percent|dhw|°|degrees|months?)?/i },
        { label: "Reasoning: explains the role of the algae or energy loss", re: /alga|zooxanth|food|energy|photosynth|starv|expel|symbio|mutual/i }
      ],
      rubric: "2 points: a clear claim, relevant data, and reasoning about the algae. 1 point: two of the three parts. 0 points: one part or none.",
      model: "Heat stress causes coral bleaching, and more heat causes more bleaching. In Table 1, only 5% of coral bleached at 1 DHW, but 90% bleached at 12 DHW. This happens because warm water makes corals expel their zooxanthellae, and those algae provide up to 90% of the coral’s energy, so long heat waves can make corals starve and die." }
  ]
});
