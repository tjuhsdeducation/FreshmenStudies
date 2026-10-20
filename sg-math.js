/* =====================================================================
   ✏️ UNIT STUDY GUIDES: ALGEBRA 1 + GEOMETRY
   About 25 minutes each. Key Ideas, a Visual tab, and a 🔬 Simulation
   tab on the left; 10–12 graded questions on the right.
   (See the top of rc-engine.js and rc-history.js for the formats.)
   ===================================================================== */

/* ---------- small helper: tick marks and angle arcs for triangle diagrams ---------- */
const SGM_TRI = (function () {
  const f = n => Math.round(n * 10) / 10;
  function tick(p, q, n) {
    const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, nx = -uy, ny = ux, mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    let s = "";
    for (let i = 0; i < n; i++) { const o = (i - (n - 1) / 2) * 6, cx = mx + ux * o, cy = my + uy * o;
      s += `<line x1="${f(cx - nx * 7)}" y1="${f(cy - ny * 7)}" x2="${f(cx + nx * 7)}" y2="${f(cy + ny * 7)}" class="ink k2"/>`; }
    return s;
  }
  function arc(v, p, q, n) {
    const u = w => { const dx = w[0] - v[0], dy = w[1] - v[1], L = Math.hypot(dx, dy); return [dx / L, dy / L]; };
    const a = u(p), b = u(q), sweep = a[0] * b[1] - a[1] * b[0] > 0 ? 1 : 0;
    let s = "";
    for (let i = 0; i < n; i++) { const r = 20 + i * 6;
      s += `<path d="M${f(v[0] + a[0] * r)} ${f(v[1] + a[1] * r)} A${r} ${r} 0 0 ${sweep} ${f(v[0] + b[0] * r)} ${f(v[1] + b[1] * r)}" class="ink k3"/>`; }
    return s;
  }
  /* one triangle panel: o = offset x, marks = {ticks:[[i,j,n]], arcs:[[vertex, n]]} */
  function panel(o, name, sub, marks) {
    const P = [[20 + o, 150], [180 + o, 150], [70 + o, 45]];
    let s = `<text x="${100 + o}" y="24" text-anchor="middle" class="t">${name}</text>`;
    s += `<polygon points="${P.map(p => p.join(",")).join(" ")}" class="c1"/>`;
    (marks.ticks || []).forEach(t => s += tick(P[t[0]], P[t[1]], t[2]));
    (marks.arcs || []).forEach(a => { const v = a[0], others = [0, 1, 2].filter(i => i !== v); s += arc(P[v], P[others[0]], P[others[1]], a[1]); });
    s += `<text x="${100 + o}" y="182" text-anchor="middle" class="tm">${sub}</text>`;
    return s;
  }
  return { panel };
})();

const SGM_CONGRUENCE = `<svg class="dg" viewBox="0 0 660 200" role="img" aria-label="Three triangles showing congruence shortcuts. SSS: all three sides are marked with tick marks, meaning three pairs of matching sides. SAS: two sides are marked and the angle between them is marked with an arc. ASA: two angles are marked with arcs and the side between them is marked with a tick.">
  ${SGM_TRI.panel(0, "SSS", "3 pairs of matching sides", { ticks: [[0, 1, 1], [1, 2, 2], [2, 0, 3]] })}
  ${SGM_TRI.panel(220, "SAS", "2 sides + the angle between them", { ticks: [[0, 1, 1], [0, 2, 2]], arcs: [[0, 1]] })}
  ${SGM_TRI.panel(440, "ASA", "2 angles + the side between them", { ticks: [[0, 1, 1]], arcs: [[0, 1], [1, 2]] })}
</svg>`;

const SGM_RIGHTTRI = `<svg class="dg" viewBox="0 0 660 210" role="img" aria-label="Left: a right triangle with angle theta at the bottom left. The side across from theta is labeled opposite, the side next to theta on the bottom is labeled adjacent, and the longest side across from the right angle is labeled hypotenuse. Right: a ladder leaning against a wall. The ladder is the hypotenuse, the height on the wall is the opposite side, the distance from the wall along the ground is the adjacent side, and the angle between the ladder and the ground is the angle of elevation theta.">
  <polygon points="40,170 260,170 260,50" class="c1"/>
  <path d="M248 170 V158 H260" class="ink"/>
  <path d="M70 170 A30 30 0 0 0 66.3 155.6" class="ink k3"/>
  <text x="80" y="164" class="t">θ</text>
  <text x="150" y="192" text-anchor="middle" class="t">adjacent (next to θ)</text>
  <text x="268" y="106" class="t">opposite</text><text x="268" y="122" class="tm">(across from θ)</text>
  <text x="140" y="96" text-anchor="middle" class="t" transform="rotate(-28.6 140 96)">hypotenuse (longest side)</text>
  <line x1="360" y1="170" x2="640" y2="170" class="ink"/>
  <rect x="560" y="30" width="20" height="140" class="soft"/>
  <line x1="480" y1="170" x2="560" y2="40" class="ink k1" stroke-width="5"/>
  <path d="M506 170 A26 26 0 0 0 493.6 147.9" class="ink k3"/>
  <text x="510" y="160" class="t">θ</text>
  <text x="498" y="96" text-anchor="middle" class="t" transform="rotate(-58.4 498 96)">ladder (hypotenuse)</text>
  <text x="586" y="100" class="t">height</text><text x="586" y="116" class="tm">(opposite)</text>
  <text x="520" y="192" text-anchor="middle" class="t">distance from wall (adjacent)</text>
  <text x="380" y="40" class="tm">θ = angle of elevation</text>
</svg>`;

/* =====================================================================
   1. ALGEBRA 1: LINEAR FUNCTIONS & SYSTEMS
   ===================================================================== */
RC["sg-alg1-linear"] = {
  subject: "Algebra 1", mins: 25,
  title: "Linear Functions & Systems of Equations",
  blurb: "Review slope, intercepts, and writing equations, then solve systems by graphing, substitution, and elimination using two gym memberships.",
  eq: "How can slope, intercepts, and intersections help us compare two real-world plans and make a smart choice?",
  target: "I can write and interpret linear equations, and I can solve a system of equations by graphing, substitution, or elimination, including systems with no solution or infinitely many solutions.",
  sources: [
    { tab: "Key Ideas", title: "Linear Functions: Slope and Intercepts", numbered: true, blocks: [
      { vocab: [
        ["slope (m)", "The rate of change of a line: how much y changes when x increases by 1. Slope = rise ÷ run = (y<sub>2</sub> − y<sub>1</sub>) ÷ (x<sub>2</sub> − x<sub>1</sub>)."],
        ["y-intercept (b)", "The point where a line crosses the y-axis, (0, b). In a real situation it is often the starting amount."],
        ["x-intercept", "The point where a line crosses the x-axis. Find it by setting y = 0."],
        ["slope-intercept form", "y = mx + b, where m is the slope and b is the y-intercept."],
        ["system of equations", "Two or more equations that use the same variables. Its solution is every point that makes all the equations true."]
      ] },
      { p: "A <b>linear function</b> changes by the same amount every time x goes up by 1. That constant change is the <b>slope</b>, also called the <b>rate of change</b>. A positive slope means the line rises from left to right. A negative slope means it falls. A slope of 0 is a flat, horizontal line." },
      { p: "In <b>slope-intercept form</b>, y = mx + b, you can read the slope and the y-intercept right from the equation. For example, in y = −3x + 7 the slope is −3 and the line crosses the y-axis at (0, 7)." },
      { box: "<b>Worked example 1: Write an equation from two points.</b> Find the line through (2, 3) and (6, 11).<br>Step 1: slope m = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = <b>2</b>.<br>Step 2: substitute one point into y = mx + b: 3 = 2(2) + b, so 3 = 4 + b and <b>b = −1</b>.<br>Step 3: write the equation: <b>y = 2x − 1</b>.<br>Check with (6, 11): 2(6) − 1 = 11 ✓" },
      { box: "<b>Worked example 2: Find the intercepts.</b> For 3x + 2y = 12:<br>x-intercept: let y = 0, so 3x = 12 and x = 4. The point is <b>(4, 0)</b>.<br>y-intercept: let x = 0, so 2y = 12 and y = 6. The point is <b>(0, 6)</b>." },
      { p: "To write an equation from a <b>graph</b>, find where the line crosses the y-axis (that is b), then count the rise and run between two points that sit exactly on grid corners (that gives m)." }
    ] },
    { tab: "Systems", title: "Solving Systems of Equations", numbered: true, blocks: [
      { p: "Two gyms in town charge differently. <b>Gym A</b> charges a $50 joining fee plus $20 per month: y = 20x + 50. <b>Gym B</b> has no joining fee but charges $30 per month: y = 30x. Here x is the number of months and y is the total cost in dollars. When do the two gyms cost the same?" },
      { p: "<b>Method 1: Graphing.</b> Graph both lines. The point where they cross is the solution. The gym lines cross at (5, 150), so after 5 months both gyms have cost $150 (see the Visual tab)." },
      { p: "<b>Method 2: Substitution.</b> Solve one equation for a variable, then substitute that expression into the other equation. This works well when one equation already says “y = …”." },
      { box: "<b>Worked example 3: Substitution.</b> Solve y = 2x + 1 and 3x + y = 11.<br>Substitute 2x + 1 for y: 3x + (2x + 1) = 11, so 5x + 1 = 11, 5x = 10, and <b>x = 2</b>.<br>Then y = 2(2) + 1 = <b>5</b>. The solution is <b>(2, 5)</b>." },
      { p: "<b>Method 3: Elimination.</b> Add or subtract the equations so one variable cancels. You may need to multiply an equation by a number first so the coefficients are opposites." },
      { box: "<b>Worked example 4: Elimination.</b> Solve 2x + 3y = 12 and 4x − 3y = 6.<br>Add the equations: the +3y and −3y cancel, so 6x = 18 and <b>x = 3</b>.<br>Substitute: 2(3) + 3y = 12, so 3y = 6 and <b>y = 2</b>. The solution is <b>(3, 2)</b>." },
      { table: { cap: "How many solutions can a system of two linear equations have?", head: ["What the lines do", "Slopes and intercepts", "Number of solutions", "Example"], rows: [
        ["Cross at one point", "Different slopes", "Exactly one", "y = 2x + 1 and y = −x + 4 meet at (1, 3)"],
        ["Parallel (never meet)", "Same slope, different y-intercepts", "No solution", "y = 3x + 2 and y = 3x − 4"],
        ["Same line", "Same slope and same y-intercept", "Infinitely many", "y = 2x + 1 and 4x − 2y = −2"]
      ], rowHead: true } },
      { box: "<b>Tip:</b> When you solve with algebra, a false statement like 0 = 6 means <b>no solution</b>. A true statement like 0 = 0 means <b>infinitely many solutions</b>. In the last example, solving 4x − 2y = −2 for y gives y = 2x + 1, the exact same line." }
    ] },
    { tab: "Visual", title: "Graph: Comparing Two Gyms", blocks: [
      { fig: RCG.line({ title: "Total Cost of Two Gym Memberships", x: { min: 0, max: 10, step: 1, label: "Months (x)" }, y: { min: 0, max: 350, step: 50, label: "Total cost in dollars (y)" },
          series: [{ fn: x => 20 * x + 50, cls: "s1", label: "Gym A: y = 20x + 50" }, { fn: x => 30 * x, cls: "s2", label: "Gym B: y = 30x" }],
          marks: [{ x: 0, y: 50, text: "(0, 50)", cls: "s1", dy: -10 }, { x: 0, y: 0, text: "(0, 0)", cls: "s2", dx: 8, dy: -6 }, { x: 5, y: 150, text: "(5, 150)", cls: "s3", dx: -10, dy: -12, anchor: "end" }],
          alt: "Two lines. Gym A starts at 50 dollars at 0 months and rises 20 dollars per month, reaching 250 dollars at 10 months. Gym B starts at 0 dollars and rises 30 dollars per month, reaching 300 dollars at 10 months. The lines cross at 5 months and 150 dollars." }),
        cap: "Figure 1. Before 5 months, Gym B costs less. After 5 months, Gym A costs less." },
      { table: { cap: "Total cost after x months", head: ["Months (x)", "0", "2", "4", "5", "6", "8"], rows: [
        ["Gym A ($)", "50", "90", "130", "150", "170", "210"],
        ["Gym B ($)", "0", "60", "120", "150", "180", "240"]
      ], rowHead: true } },
      { box: "<b>Read the graph:</b> Gym B’s line is <b>steeper</b> (slope 30 is greater than slope 20), so it grows faster. Gym A starts higher because of its $50 fee. The <b>intersection</b> (5, 150) is the break-even point." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Slopes and Systems", blocks: [
      { box: "<b>Try this:</b> 1) Look at the two starting lines, y = 2x + 1 and y = −x + 4. Find the solution shown under the sliders. It should be (1, 3). 2) Change Line 2’s slope to <b>2</b>. The lines become parallel. What does the simulation say about the solution? 3) Now also set Line 2’s y-intercept to <b>1</b>. The lines are the same line. How many solutions are there now? 4) Set Line 1 to m = 0.5, b = −2 and Line 2 to m = −1, b = 4. Solve by substitution on paper, then check your answer in the simulation." },
      { sim: "slope", title: "Systems Explorer", tip: "Watch the rise/run triangle on Line 1 as you change its slope. Negative slopes fall from left to right.", lines: [{ m: 2, b: 1, label: "Line 1" }, { m: -1, b: 4, label: "Line 2" }] },
      { box: "<b>Remember:</b> same slope + different y-intercept = parallel = no solution. Same slope + same y-intercept = same line = infinitely many solutions." }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "What is the slope of the line that passes through (−1, 4) and (3, −4)?", opts: ["2", "−2", "−1/2", "1/2"], a: 1,
      why: "Slope = (y₂ − y₁) ÷ (x₂ − x₁) = (−4 − 4) ÷ (3 − (−1)) = −8 ÷ 4 = −2. The line falls 2 units for every 1 unit it moves right." },
    { t: "inline", ref: 1, q: "A line passes through (0, −3) and (4, 5). Complete its equation in slope-intercept form.", text: "y = [[]] x [[]]",
      blanks: [{ opts: ["1/2", "2", "4", "8"], a: 1 }, { opts: ["+ 3", "− 3", "+ 5", "− 5"], a: 1 }],
      why: "The slope is (5 − (−3)) ÷ (4 − 0) = 8 ÷ 4 = 2. The point (0, −3) is on the y-axis, so b = −3. The equation is y = 2x − 3." },
    { t: "grid", ref: 3, q: "Gym A: y = 20x + 50. Gym B: y = 30x. Match each part of the situation to what it represents on the graph.", cols: ["Slope", "y-intercept", "Intersection"],
      rows: [["Gym A’s $50 joining fee", 1], ["Gym B’s cost of $30 per month", 0], ["The month when both gyms have cost the same total", 2], ["Gym A’s cost of $20 per month", 0]],
      why: "A cost per month is a rate of change, so it is a slope. A one-time fee is the starting cost when x = 0, so it is the y-intercept. The point where the two totals are equal is the intersection of the lines." },
    { t: "num", ref: 2, q: "Solve the gym system algebraically: 20x + 50 = 30x. After how many months do the two gyms cost the same?", a: 5, tol: 0.01, pre: "x =", unit: "months",
      why: "Subtract 20x from both sides: 50 = 10x, so x = 5. Check: Gym A costs 20(5) + 50 = $150 and Gym B costs 30(5) = $150." },
    { t: "ebsr", ref: 3,
      A: { q: "Carlos plans to keep his gym membership for a full year (12 months). Which gym costs him less?", opts: ["Gym B, because it has no joining fee.", "Gym A", "Both gyms cost the same for 12 months.", "It is impossible to tell without more information."], a: 1 },
      B: { q: "Which calculation <b>best</b> supports your answer to Part A?", opts: ["After 12 months, Gym A costs $290 and Gym B costs $360.", "At 0 months, Gym A costs $50 and Gym B costs $0.", "After 5 months, both gyms cost $150.", "Gym B’s slope is 30 and Gym A’s slope is 20, so Gym B is always more expensive."], a: 0 },
      why: "Gym A: 20(12) + 50 = $290. Gym B: 30(12) = $360. After the break-even point at 5 months, the less steep line (Gym A) stays lower. Gym B is not ALWAYS more expensive: it is cheaper before 5 months." },
    { t: "num", ref: 2, q: "Solve the system by substitution: y = 3x − 5 and 2x + y = 15. What is the value of y?", a: 7, tol: 0.01, pre: "y =",
      why: "Substitute 3x − 5 for y: 2x + (3x − 5) = 15, so 5x − 5 = 15, 5x = 20, and x = 4. Then y = 3(4) − 5 = 7. The solution is (4, 7). Check: 2(4) + 7 = 15 ✓" },
    { t: "order", ref: 2, q: "Put the steps in order to solve this system by elimination: 3x + 2y = 16 and 5x − 2y = 16.", items: [
        "Add the two equations so the y-terms cancel: 8x = 32.",
        "Divide both sides by 8: x = 4.",
        "Substitute x = 4 into 3x + 2y = 16: 12 + 2y = 16.",
        "Solve for y: 2y = 4, so y = 2.",
        "Check (4, 2) in the other equation: 5(4) − 2(2) = 16 ✓"],
      why: "The +2y and −2y are opposites, so adding the equations eliminates y. Solve for x first, substitute to find y, and then check the solution in the equation you did not use." },
    { t: "grid", ref: 2, q: "How many solutions does each system have? (Hint: compare the slopes and y-intercepts. Rewrite in y = mx + b form first if needed.)", cols: ["Exactly one", "No solution", "Infinitely many"],
      rows: [["y = 4x − 1 and y = 4x + 3", 1], ["y = −2x + 5 and y = 3x + 5", 0], ["x + y = 6 and 2x + 2y = 12", 2], ["y = ½x + 2 and 2y − x = 10", 1]],
      why: "Same slope and different intercepts means parallel lines (no solution). Different slopes means one intersection: y = −2x + 5 and y = 3x + 5 meet at (0, 5). 2x + 2y = 12 divided by 2 is x + y = 6, the same line (infinitely many). 2y − x = 10 becomes y = ½x + 5: same slope as y = ½x + 2 but a different intercept, so no solution." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set Line 1 to m = 2, b = −3 and Line 2 to m = −1, b = 6. What is the solution of the system?", opts: ["(1, 5)", "(−3, 3)", "(3, 3)", "(3, 6)"], a: 2,
      why: "Set the equations equal: 2x − 3 = −x + 6, so 3x = 9 and x = 3. Then y = 2(3) − 3 = 3. Check in Line 2: −3 + 6 = 3 ✓ The simulation shows the intersection at (3, 3)." },
    { t: "mc", ref: 1, q: "What is the x-intercept of the line 3x − 4y = 12?", opts: ["(0, −3)", "(−4, 0)", "(0, 4)", "(4, 0)"], a: 3,
      why: "On the x-axis, y = 0. So 3x − 4(0) = 12, 3x = 12, and x = 4. The x-intercept is (4, 0). (The y-intercept is (0, −3), which is a different point.)" },
    { t: "multi", need: 2, ref: 1, q: "A line has a slope of −3 and a y-intercept of (0, 2). Which <b>two</b> statements are true?", opts: ["The line rises from left to right.", "Its equation is y = −3x + 2.", "It passes through the point (2, 0).", "When x increases by 1, y decreases by 3.", "It is parallel to y = 3x + 2."], a: [1, 3],
      why: "In y = mx + b, m = −3 and b = 2, so y = −3x + 2. A slope of −3 means y goes down 3 each time x goes up 1, so the line falls. At x = 2, y = −3(2) + 2 = −4, not 0. Parallel lines need the same slope, and 3 ≠ −3." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Your friend asks, “Which gym should I join?” Explain how the answer depends on how many months she plans to stay. Use the words <b>slope</b>, <b>y-intercept</b>, and <b>intersection</b> (or break-even point) in your answer.", min: 40,
      checks: [
        { label: "Explains the y-intercept or starting fee ($50 vs. $0)", re: /intercept|joining fee|sign.?up fee|\$?50|start(s|ing)? (cost|amount|higher|at)/i },
        { label: "Explains the slope or monthly rate ($20 vs. $30 per month)", re: /slope|rate|per month|each month|a month|\$?20|\$?30|steeper/i },
        { label: "Uses the intersection / break-even point at 5 months to decide", re: /intersect|break.?even|5 months|five months|same (cost|price|amount)|\(5, ?150\)|\$?150/i }
      ],
      rubric: "2 points: uses the intercept, the slope, and the intersection at 5 months to explain which gym is better for a short stay and for a long stay. 1 point: makes a correct choice but explains only part of the reasoning. 0 points: no clear reasoning.",
      model: "It depends on how long she stays. Gym A has a y-intercept of $50 because of its joining fee, but its slope is only $20 per month. Gym B starts at $0 but has a steeper slope of $30 per month. The lines intersect at (5, 150), the break-even point. If she stays less than 5 months, Gym B is cheaper. If she stays more than 5 months, like a full year, Gym A is cheaper ($290 vs. $360).",
      why: "A strong answer connects each part of the graph to the situation: the y-intercept is the joining fee, the slope is the monthly cost, and the intersection is where the totals are equal. Before the intersection the line that starts lower (Gym B) is cheaper; after it, the less steep line (Gym A) is cheaper." }
  ]
};

/* =====================================================================
   2. ALGEBRA 1: QUADRATIC FUNCTIONS
   ===================================================================== */
RC["sg-alg1-quad"] = {
  subject: "Algebra 1", mins: 25,
  title: "Quadratic Functions",
  blurb: "Review vertex and standard form, the axis of symmetry, zeros by factoring and the quadratic formula, the discriminant, and a launched ball.",
  eq: "How do the different forms of a quadratic function reveal its key features, and what do those features mean for a launched object?",
  target: "I can find the vertex, axis of symmetry, and zeros of a quadratic function, use the discriminant to count real solutions, and interpret these features in a projectile problem.",
  sources: [
    { tab: "Key Ideas", title: "Quadratic Functions and Their Forms", numbered: true, blocks: [
      { vocab: [
        ["quadratic function", "A function whose highest power of x is 2, such as y = x² − 6x + 5. Its graph is a U-shaped curve called a <b>parabola</b>."],
        ["vertex", "The turning point of a parabola. It is the <b>minimum</b> if the parabola opens up and the <b>maximum</b> if it opens down."],
        ["axis of symmetry", "The vertical line through the vertex, x = h. The parabola is a mirror image on each side of it."],
        ["zeros (roots, x-intercepts)", "The x-values where y = 0. These are the solutions of ax² + bx + c = 0."],
        ["discriminant", "The value b² − 4ac. It tells how many real solutions a quadratic equation has."]
      ] },
      { table: { cap: "Three forms of a quadratic function", head: ["Form", "Equation", "What it shows quickly"], rows: [
        ["Standard form", "y = ax² + bx + c", "The y-intercept is (0, c). The axis of symmetry is x = −b ÷ (2a)."],
        ["Vertex form", "y = a(x − h)² + k", "The vertex is (h, k). The axis of symmetry is x = h."],
        ["Factored form", "y = a(x − r)(x − s)", "The zeros are x = r and x = s."]
      ], rowHead: true } },
      { p: "In every form, the sign of <b>a</b> tells the direction. If a > 0, the parabola opens <b>up</b> and the vertex is a minimum. If a < 0, it opens <b>down</b> and the vertex is a maximum. If |a| is greater than 1, the parabola is narrower; if |a| is between 0 and 1, it is wider." },
      { p: "Watch the signs in vertex form. In y = −2(x + 3)² + 5, the expression x + 3 is the same as x − (−3), so h = −3 and the vertex is (−3, 5), not (3, 5)." },
      { box: "<b>Worked example 1: Standard form to vertex.</b> y = x² − 6x + 5, so a = 1, b = −6, c = 5.<br>Axis of symmetry: x = −(−6) ÷ (2 · 1) = <b>3</b>.<br>Vertex y-value: (3)² − 6(3) + 5 = 9 − 18 + 5 = <b>−4</b>. The vertex is <b>(3, −4)</b>, a minimum because a > 0.<br>Vertex form: <b>y = (x − 3)² − 4</b>. Check: (x − 3)² − 4 = x² − 6x + 9 − 4 = x² − 6x + 5 ✓" }
    ] },
    { tab: "Solving", title: "Finding Zeros: Factoring, the Formula, and the Discriminant", numbered: true, blocks: [
      { p: "<b>Factoring.</b> Write the quadratic as a product, then use the <b>zero product property</b>: if A · B = 0, then A = 0 or B = 0. For x² − 6x + 5 = 0, look for two numbers that multiply to 5 and add to −6. They are −1 and −5, so (x − 1)(x − 5) = 0 and x = 1 or x = 5." },
      { p: "<b>The quadratic formula</b> works for every quadratic equation ax² + bx + c = 0, even ones that do not factor nicely:" },
      { box: "<div style='text-align:center;font-size:1.15em'><b>x = (−b ± √(b² − 4ac)) ÷ (2a)</b></div>" },
      { box: "<b>Worked example 2: Quadratic formula.</b> Solve 2x² + 3x − 2 = 0, so a = 2, b = 3, c = −2.<br>Discriminant: b² − 4ac = 9 − 4(2)(−2) = 9 + 16 = <b>25</b>.<br>x = (−3 ± √25) ÷ 4 = (−3 ± 5) ÷ 4, so x = 2 ÷ 4 = <b>½</b> or x = −8 ÷ 4 = <b>−2</b>.<br>Check by factoring: (2x − 1)(x + 2) = 2x² + 4x − x − 2 = 2x² + 3x − 2 ✓" },
      { table: { cap: "What the discriminant b² − 4ac tells you", head: ["Discriminant", "Real solutions", "Graph", "Example"], rows: [
        ["Positive (> 0)", "Two", "Crosses the x-axis twice", "x² − 6x + 5: 36 − 20 = 16"],
        ["Zero (= 0)", "One", "Touches the x-axis at the vertex", "x² + 4x + 4: 16 − 16 = 0"],
        ["Negative (< 0)", "None", "Never touches the x-axis", "x² + 2x + 5: 4 − 20 = −16"]
      ], rowHead: true } },
      { box: "<b>Tip:</b> The discriminant is the part under the square root in the quadratic formula. You cannot take the square root of a negative number using real numbers, so a negative discriminant means no real solutions." }
    ] },
    { tab: "Visual", title: "Graph: A Ball Launched from a Rooftop", blocks: [
      { p: "A ball is thrown upward from the edge of a 48-foot-tall rooftop. Its height in feet after t seconds is <b>h(t) = −16t² + 32t + 48</b>. (In feet, gravity gives the −16t² term. The 32 is the starting upward speed in feet per second, and the 48 is the starting height.)", n: false },
      { fig: RCG.line({ title: "Height of the Ball", x: { min: 0, max: 3.5, step: 0.5, label: "Time t (seconds)" }, y: { min: 0, max: 80, step: 10, label: "Height h (feet)" },
          series: [{ fn: t => -16 * t * t + 32 * t + 48, from: 0, to: 3, cls: "s1" }],
          hlines: [], marks: [{ x: 0, y: 48, text: "(0, 48)", cls: "s1", dx: 8, dy: 4 }, { x: 1, y: 64, text: "vertex (1, 64)", cls: "s3", dy: -10 }, { x: 3, y: 0, text: "(3, 0)", cls: "s2", dx: -8, dy: -10, anchor: "end" }],
          alt: "A downward-opening parabola. It starts at 0 seconds and 48 feet, rises to a maximum at 1 second and 64 feet, and comes down to the ground at 3 seconds and 0 feet." }),
        cap: "Figure 1. The graph shows height over time. It does NOT show the path across the ground." },
      { box: "<b>Reading the key features:</b><br>• <b>y-intercept (0, 48):</b> the starting height, the rooftop.<br>• <b>Vertex (1, 64):</b> the maximum height, 64 feet, reached after 1 second. Axis of symmetry: t = −32 ÷ (2 · −16) = 1.<br>• <b>Zero t = 3:</b> the ball hits the ground. Factor: −16t² + 32t + 48 = −16(t² − 2t − 3) = −16(t − 3)(t + 1), so t = 3 or t = −1. Time cannot be negative, so we reject t = −1." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Parabola Lab", blocks: [
      { box: "<b>Try this:</b> 1) Start with a = −1, h = 2, k = 4. Read the vertex and zeros, then press <b>Launch</b> to watch the ball travel between the zeros. 2) Change a to <b>−0.25</b>. Does the parabola get wider or narrower? Where are the zeros now? 3) Keep a negative and drag k to <b>−2</b>. Why are there no zeros? (A maximum below the x-axis can never reach it.) 4) Make a positive. Which way does it open, and is the vertex now a minimum or a maximum? 5) Compare the standard form shown with the vertex form on the sliders." },
      { sim: "quadratic", title: "Parabola Lab", tip: "The vertex is (h, k). The number of zeros changes when the vertex crosses the x-axis.", a: -1, h: 2, k: 4 },
      { box: "<b>Connect it:</b> In vertex form, a parabola that opens down with its vertex above the x-axis has two zeros. If the vertex is exactly on the x-axis, it has one zero (discriminant = 0)." }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "What is the vertex of y = −2(x + 3)² + 5?", opts: ["(3, 5)", "(−3, 5)", "(5, −3)", "(−3, −5)"], a: 1,
      why: "Vertex form is y = a(x − h)² + k. Rewrite x + 3 as x − (−3), so h = −3 and k = 5. The vertex is (−3, 5). Because a = −2 is negative, it is a maximum." },
    { t: "num", ref: 1, q: "What is the axis of symmetry of y = 2x² − 12x + 7?", a: 3, tol: 0.01, pre: "x =",
      why: "Use x = −b ÷ (2a) with a = 2 and b = −12: x = −(−12) ÷ (2 · 2) = 12 ÷ 4 = 3." },
    { t: "inline", ref: 2, q: "Factor y = x² − 2x − 8 and find its zeros.", text: "y = (x [[]])(x [[]]), so the zeros are [[]].",
      blanks: [{ opts: ["+ 4", "− 4", "+ 8", "− 2"], a: 1 }, { opts: ["+ 2", "− 2", "+ 1", "− 8"], a: 0 }, { opts: ["x = −4 and x = 2", "x = 4 and x = −2", "x = 8 and x = −1", "x = 2 and x = 4"], a: 1 }],
      why: "Find two numbers that multiply to −8 and add to −2: −4 and 2. So y = (x − 4)(x + 2). Set each factor equal to 0: x − 4 = 0 gives x = 4, and x + 2 = 0 gives x = −2. Watch the signs: the zero is the opposite of the number in the factor." },
    { t: "grid", ref: 2, q: "Use the discriminant b² − 4ac to decide how many real solutions each equation has.", cols: ["Two real solutions", "One real solution", "No real solutions"],
      rows: [["x² − 6x + 9 = 0", 1], ["x² + x + 3 = 0", 2], ["2x² − 5x − 3 = 0", 0], ["3x² + 2x + 1 = 0", 2]],
      why: "x² − 6x + 9: 36 − 36 = 0, one solution. x² + x + 3: 1 − 12 = −11, none. 2x² − 5x − 3: 25 − 4(2)(−3) = 25 + 24 = 49, two. 3x² + 2x + 1: 4 − 12 = −8, none." },
    { t: "num", ref: 2, q: "Use the quadratic formula to solve 3x² − 5x − 2 = 0. Enter the <b>positive</b> solution.", a: 2, tol: 0.01, pre: "x =",
      why: "a = 3, b = −5, c = −2. Discriminant: 25 − 4(3)(−2) = 25 + 24 = 49. x = (5 ± 7) ÷ 6, so x = 12 ÷ 6 = 2 or x = −2 ÷ 6 = −1/3. The positive solution is 2." },
    { t: "ebsr", ref: 3,
      A: { q: "The rooftop ball follows h(t) = −16t² + 32t + 48. How many seconds after it is thrown does the ball hit the ground?", opts: ["1 second", "1.5 seconds", "3 seconds", "48 seconds"], a: 2 },
      B: { q: "Which work <b>best</b> supports your answer to Part A?", opts: ["h(0) = 48, so the ball starts 48 feet up.", "The axis of symmetry is t = 1, so the ball turns around at 1 second.", "−16t² + 32t + 48 = −16(t − 3)(t + 1), so h = 0 when t = 3 (t = −1 is rejected).", "The vertex is (1, 64), so the maximum height is 64 feet."], a: 2 },
      why: "The ball hits the ground when the height is 0, so we need the zeros. Factoring gives t = 3 or t = −1. Negative time does not make sense here, so the ball lands at t = 3 seconds. The other choices describe the start or the top of the flight, not the landing." },
    { t: "num", ref: 3, q: "What is the <b>maximum height</b> of the rooftop ball?", a: 64, tol: 0.01, unit: "feet",
      why: "The maximum is at the vertex. t = −b ÷ (2a) = −32 ÷ (2 · −16) = 1 second. h(1) = −16(1)² + 32(1) + 48 = −16 + 32 + 48 = 64 feet." },
    { t: "mc", ref: 3, q: "In h(t) = −16t² + 32t + 48, what does the 48 represent?", opts: ["The maximum height of the ball", "The time when the ball lands", "The speed of the ball when it lands", "The height of the ball when it is thrown, at t = 0"], a: 3,
      why: "48 is the constant term c, so h(0) = 48. It is the y-intercept: the ball’s height at time 0, which is the height of the rooftop. The maximum height is 64 feet, at the vertex." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Set a = 1, h = −2, and k = −4. What are the zeros of the parabola?", opts: ["x = 2 and x = −2", "x = −6 and x = 2", "x = −4 and x = 0", "x = 4 and x = 0"], a: 2,
      why: "The function is y = (x + 2)² − 4. Set y = 0: (x + 2)² = 4, so x + 2 = 2 or x + 2 = −2. That gives x = 0 or x = −4. The zeros are equally spaced 2 units on each side of the axis of symmetry, x = −2." },
    { t: "hot", ref: 2, q: "Marcus solved x² + 2x − 15 = 0 by factoring. Click the sentence where he made his <b>first mistake</b>.", text: [
        "Step 1: I need two numbers that multiply to −15 and add to 2.",
        "Step 2: The numbers 5 and −3 work, because 5 × (−3) = −15 and 5 + (−3) = 2.",
        "Step 3: So x² + 2x − 15 = (x + 5)(x − 3).",
        "Step 4: By the zero product property, x + 5 = 0 or x − 3 = 0.",
        "Step 5: So the solutions are x = 5 and x = −3."], a: [4],
      why: "Steps 1 to 4 are correct. In Step 5, Marcus forgot to solve each equation: x + 5 = 0 gives x = −5, and x − 3 = 0 gives x = 3. The correct solutions are x = −5 and x = 3. Check: (−5)² + 2(−5) − 15 = 25 − 10 − 15 = 0 ✓" },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> statements about y = −(x − 1)² + 9 are true?", opts: ["It opens upward.", "Its maximum value is 9.", "Its zeros are x = 4 and x = −2.", "Its y-intercept is (0, 9).", "Its axis of symmetry is x = −1."], a: [1, 2],
      why: "a = −1, so it opens down and the vertex (1, 9) is a maximum: the maximum value is 9. Zeros: (x − 1)² = 9, so x − 1 = ±3 and x = 4 or x = −2. The y-intercept is −(0 − 1)² + 9 = 8, so (0, 8). The axis is x = 1, not x = −1." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Explain how to find when the rooftop ball, h(t) = −16t² + 32t + 48, hits the ground. Show the key steps, give the answer, and explain why one of the two solutions does not make sense.", min: 40,
      checks: [
        { label: "Sets the height equal to 0 (finds the zeros)", re: /= ?0|equal(s)? (to )?(0|zero)|zeros?|x.?intercept|roots?|height (is|of) (0|zero)|ground/i },
        { label: "Uses factoring or the quadratic formula", re: /factor|\(t ?[−-] ?3\)|\(t ?\+ ?1\)|quadratic formula|formula|discriminant|t\^?2 ?[−-] ?2t/i },
        { label: "Gives t = 3 seconds and rejects t = −1 (negative time)", re: /(t ?= ?3|3 sec|three sec)|negative|[−-] ?1|before (it was )?thrown|can.?t be|does ?n.?t make sense|reject/i, min: 2 }
      ],
      rubric: "2 points: sets h(t) = 0, factors or uses the quadratic formula, gives t = 3 seconds, and explains why t = −1 is rejected. 1 point: finds t = 3 with incomplete reasoning, or explains the method without a correct answer. 0 points: no correct method.",
      model: "The ball hits the ground when its height is 0, so I set −16t² + 32t + 48 = 0. I factor out −16 to get −16(t² − 2t − 3) = 0, which is −16(t − 3)(t + 1) = 0. So t = 3 or t = −1. The ball hits the ground after 3 seconds. The solution t = −1 does not make sense because time cannot be negative; the ball was thrown at t = 0.",
      why: "Landing means height = 0, so you need the zeros. Factoring (or the quadratic formula with a = −16, b = 32, c = 48) gives t = 3 and t = −1. In context, only nonnegative times make sense, so the answer is 3 seconds." }
  ]
};

/* =====================================================================
   3. GEOMETRY: TRANSFORMATIONS & CONGRUENCE
   ===================================================================== */
RC["sg-geo-transform"] = {
  subject: "Geometry", mins: 25,
  title: "Transformations & Congruence",
  blurb: "Review translations, reflections, rotations, and dilations on the coordinate plane, then use rigid motions and SSS, SAS, and ASA to prove congruence.",
  eq: "How can moving a figure on the coordinate plane prove that two figures are congruent or similar?",
  target: "I can apply coordinate rules for transformations, explain why rigid motions produce congruent figures and dilations produce similar figures, and use SSS, SAS, and ASA to show triangles are congruent.",
  sources: [
    { tab: "Key Ideas", title: "Transformations on the Coordinate Plane", numbered: true, blocks: [
      { vocab: [
        ["transformation", "A rule that moves or changes a figure. The original figure is the <b>pre-image</b>; the result is the <b>image</b>."],
        ["prime notation", "Image points get a prime mark: point A moves to A′ (read “A prime”). After two moves, A″ (“A double prime”)."],
        ["rigid motion", "A transformation that keeps all side lengths and angle measures the same: translations, reflections, and rotations. Also called an <b>isometry</b>."],
        ["dilation", "A transformation that makes a figure larger or smaller by a <b>scale factor</b> k from a <b>center</b>. It keeps angles the same but multiplies every length by k."],
        ["congruent (≅)", "Same size and same shape. One figure can be mapped onto the other by a sequence of rigid motions."],
        ["similar (∼)", "Same shape, maybe a different size. One figure can be mapped onto the other by rigid motions and dilations."]
      ] },
      { table: { cap: "Coordinate rules (rotations are counterclockwise about the origin; dilations are centered at the origin)", head: ["Transformation", "Rule", "Example: (3, 1) →"], rows: [
        ["Translation a right, b up", "(x, y) → (x + a, y + b)", "with a = 2, b = −4: (5, −3)"],
        ["Reflection over the x-axis", "(x, y) → (x, −y)", "(3, −1)"],
        ["Reflection over the y-axis", "(x, y) → (−x, y)", "(−3, 1)"],
        ["Reflection over y = x", "(x, y) → (y, x)", "(1, 3)"],
        ["Rotation 90°", "(x, y) → (−y, x)", "(−1, 3)"],
        ["Rotation 180°", "(x, y) → (−x, −y)", "(−3, −1)"],
        ["Rotation 270° (same as 90° clockwise)", "(x, y) → (y, −x)", "(1, −3)"],
        ["Dilation by scale factor k", "(x, y) → (kx, ky)", "with k = 2: (6, 2)"]
      ], rowHead: true } },
      { box: "<b>Worked example 1: Rotate a triangle 90°.</b> Triangle ABC has A(1, 1), B(4, 1), C(1, 3). Use (x, y) → (−y, x).<br>A(1, 1) → <b>A′(−1, 1)</b> &nbsp; B(4, 1) → <b>B′(−1, 4)</b> &nbsp; C(1, 3) → <b>C′(−3, 1)</b>.<br>AB = 3 and A′B′ = 3. The side lengths did not change, so △A′B′C′ ≅ △ABC." },
      { box: "<b>Worked example 2: A sequence of moves.</b> Translate P(2, 5) by (x, y) → (x − 3, y + 1), then reflect over the x-axis.<br>Translate: P′(2 − 3, 5 + 1) = P′(−1, 6). Reflect: P″(−1, −6).<br><b>Order matters!</b> Doing these two moves in the other order gives a different point: reflecting first gives (2, −5), then translating gives (−1, −4)." }
    ] },
    { tab: "Congruence", title: "Rigid Motions, Congruence, and Similarity", numbered: true, blocks: [
      { p: "Two figures are <b>congruent</b> if a sequence of rigid motions (translations, reflections, rotations) maps one exactly onto the other. Because rigid motions keep every length and angle the same, all the <b>corresponding parts</b> of congruent figures are congruent." },
      { p: "A <b>dilation</b> is not a rigid motion. It keeps angle measures the same, but it multiplies every length by the scale factor k. If k > 1 the image is larger; if 0 < k < 1 it is smaller. Figures related by a dilation (plus any rigid motions) are <b>similar</b>: their corresponding angles are congruent and their corresponding sides are proportional." },
      { box: "<b>Worked example 3: Similar figures.</b> A 4 cm by 6 cm rectangle is dilated so its short side becomes 10 cm. The scale factor is 10 ÷ 4 = 2.5, so the long side becomes 6 × 2.5 = <b>15 cm</b>. The angles are still all 90°." },
      { p: "You do not have to check all six pairs of parts to prove two triangles are congruent. These <b>congruence criteria</b> are enough, because each one guarantees that a sequence of rigid motions maps one triangle onto the other:" },
      { fig: SGM_CONGRUENCE, cap: "Figure 1. Tick marks show matching sides; arcs show matching angles. If a second triangle has the same marked parts, the triangles are congruent." },
      { table: { cap: "Triangle congruence criteria", head: ["Criterion", "What must match", "Works?"], rows: [
        ["SSS", "All three pairs of sides", "Yes"],
        ["SAS", "Two pairs of sides and the angle <b>between</b> them (the included angle)", "Yes"],
        ["ASA", "Two pairs of angles and the side <b>between</b> them (the included side)", "Yes"],
        ["AAS", "Two pairs of angles and a side that is not between them", "Yes"],
        ["AAA", "All three pairs of angles", "<b>No</b>: proves similar, not congruent"],
        ["SSA", "Two sides and an angle that is not between them", "<b>No</b>: can make two different triangles"]
      ], rowHead: true } }
    ] },
    { tab: "Visual", title: "Graph: Rotating and Dilating Triangle ABC", blocks: [
      { fig: RCG.line({ title: "Triangle ABC and Two Images", x: { min: -4, max: 8, step: 1, label: "x" }, y: { min: -1, max: 8, step: 1, label: "y" }, legend: "right",
          series: [
            { pts: [[1, 1], [4, 1], [1, 3], [1, 1]], cls: "s1", label: "ABC (pre-image)" },
            { pts: [[-1, 1], [-1, 4], [-3, 1], [-1, 1]], cls: "s2", label: "Rotated 90°" },
            { pts: [[2, 2], [8, 2], [2, 6], [2, 2]], cls: "s3", dash: true, label: "Dilated ×2" }],
          marks: [{ x: 1, y: 1, text: "A", cls: "s1", dx: 4, dy: 16 }, { x: 4, y: 1, text: "B", cls: "s1", dy: 16 }, { x: 1, y: 3, text: "C", cls: "s1", dx: 8, dy: 0 },
            { x: -1, y: 1, text: "A′", cls: "s2", dx: 4, dy: 16 }, { x: -1, y: 4, text: "B′", cls: "s2" }, { x: -3, y: 1, text: "C′", cls: "s2", dx: -8, dy: 16, anchor: "end" },
            { x: 2, y: 2, text: "A″", cls: "s3", dx: -8, dy: -8, anchor: "end" }, { x: 8, y: 2, text: "B″", cls: "s3", dx: -8, dy: -8, anchor: "end" }, { x: 2, y: 6, text: "C″", cls: "s3" }],
          alt: "Triangle ABC with A at (1, 1), B at (4, 1), and C at (1, 3). Its image after a 90 degree rotation about the origin has A prime at (negative 1, 1), B prime at (negative 1, 4), and C prime at (negative 3, 1). Its image after a dilation by scale factor 2 about the origin has A double prime at (2, 2), B double prime at (8, 2), and C double prime at (2, 6)." }),
        cap: "Figure 2. The rotated image is congruent to ABC (same side lengths). The dilated image is similar: every side is twice as long." },
      { table: { cap: "Comparing the images", head: ["", "AB", "AC", "Angle at A", "Relationship to ABC"], rows: [
        ["△ABC", "3", "2", "90°", "pre-image"],
        ["Rotated 90°: △A′B′C′", "3", "2", "90°", "congruent (≅)"],
        ["Dilated ×2: △A″B″C″", "6", "4", "90°", "similar (∼), not congruent"]
      ], rowHead: true } }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Transformation Station", blocks: [
      { box: "<b>Try this:</b> 1) Press <b>Translate</b> with the sliders set to 3 right and 2 down. Check the coordinate table: did every x go up by 3 and every y go down by 2? 2) Press <b>Reset</b>, then <b>Reflect over the x-axis</b>. Which coordinate changed sign? 3) Press <b>Reset</b>, then <b>Rotate 90°</b> and compare each image point to the rule (x, y) → (−y, x). 4) Press <b>Rotate 90°</b> again. Two 90° rotations equal one 180° rotation: check that each point is now (−x, −y). 5) Press <b>Dilate ×2</b> and read the message. Why is the image no longer congruent?" },
      { sim: "transform", title: "Transformation Station", tip: "Watch the message under the table: rigid motions keep the image congruent; a dilation makes it similar.", shape: [[1, 1], [4, 1], [1, 3]] }
    ] }
  ],
  qs: [
    { t: "mc", ref: 1, q: "Point (3, −5) is reflected over the <b>y-axis</b>. What are the coordinates of its image?", opts: ["(3, 5)", "(−3, 5)", "(−3, −5)", "(−5, 3)"], a: 2,
      why: "Reflecting over the y-axis uses (x, y) → (−x, y): the x-coordinate changes sign and the y-coordinate stays the same. (3, −5) → (−3, −5). (3, 5) would be a reflection over the x-axis." },
    { t: "grid", ref: 1, q: "Match each coordinate rule to the type of transformation.", cols: ["Translation", "Reflection", "Rotation", "Dilation"],
      rows: [["(x, y) → (−x, −y)", 2], ["(x, y) → (x + 4, y − 1)", 0], ["(x, y) → (y, x)", 1], ["(x, y) → (3x, 3y)", 3], ["(x, y) → (x, −y)", 1]],
      why: "(−x, −y) is a 180° rotation about the origin. Adding numbers to x and y slides the figure: a translation. Swapping x and y reflects over y = x. Multiplying both coordinates by 3 is a dilation with scale factor 3. (x, −y) reflects over the x-axis." },
    { t: "mc", ref: 4, q: "<b>Use the simulation.</b> Press Reset, then press <b>Rotate 90°</b> one time. What are the coordinates of B′?", opts: ["(−1, 4)", "(−4, 1)", "(1, −4)", "(4, −1)"], a: 0,
      why: "B is at (4, 1). A 90° counterclockwise rotation about the origin uses (x, y) → (−y, x), so B′ = (−1, 4). The simulation’s coordinate table shows the same result." },
    { t: "num", ref: 4, q: "<b>Use the simulation.</b> Press Reset, then press <b>Dilate ×2</b>. Side AB was 3 units long. How long is side A′B′?", a: 6, tol: 0.01, unit: "units",
      why: "A(1, 1) → A′(2, 2) and B(4, 1) → B′(8, 2). The distance from x = 2 to x = 8 is 6 units. A dilation by scale factor 2 doubles every length: 3 × 2 = 6." },
    { t: "inline", ref: 2, q: "Complete the statement about rotations.", text: "A rotation of 180° about the origin maps (x, y) to [[]]. A rotation is a rigid motion, so it keeps [[]] and angle measures the same. That means the image is [[]] the pre-image.",
      blanks: [{ opts: ["(−x, −y)", "(−y, x)", "(y, −x)", "(x, −y)"], a: 0 }, { opts: ["coordinates", "side lengths", "location", "direction"], a: 1 }, { opts: ["similar to but larger than", "congruent to", "smaller than", "parallel to"], a: 1 }],
      why: "A 180° rotation changes the sign of both coordinates: (x, y) → (−x, −y). Rigid motions move a figure without stretching it, so lengths and angles stay the same, and the image is congruent to the pre-image. The coordinates and location DO change." },
    { t: "mc", ref: 2, q: "Which transformation does <b>NOT</b> always produce an image that is congruent to the pre-image?", opts: ["A translation 5 units left", "A reflection over the line y = x", "A rotation of 270° about the origin", "A dilation with scale factor 3"], a: 3,
      why: "Translations, reflections, and rotations are rigid motions, so they keep lengths the same. A dilation with scale factor 3 makes every side 3 times longer, so the image is similar, not congruent." },
    { t: "ebsr", ref: 2,
      A: { q: "In △ABC and △DEF, AB = DE = 7 cm, BC = EF = 10 cm, and ∠B = ∠E = 50°. Which criterion proves △ABC ≅ △DEF?", opts: ["SSS", "SAS", "ASA", "The triangles cannot be proven congruent."], a: 1 },
      B: { q: "Which fact <b>best</b> supports your answer to Part A?", opts: ["All three pairs of sides are known to be equal.", "Two pairs of angles are equal.", "In each triangle, the 50° angle is formed by the two given sides, so it is the included angle.", "The angle is not between the two given sides."], a: 2 },
      why: "Angle B is formed by sides AB and BC, and angle E is formed by sides DE and EF. So we have two pairs of sides and the included angle: SAS. We do not know the third sides, so SSS cannot be used." },
    { t: "multi", need: 3, ref: 2, q: "Which <b>three</b> sets of matching information are enough to prove two triangles are congruent?", opts: ["SSS: all three pairs of sides", "AAA: all three pairs of angles", "ASA: two pairs of angles and the included side", "SSA: two pairs of sides and a non-included angle", "SAS: two pairs of sides and the included angle"], a: [0, 2, 4],
      why: "SSS, ASA, and SAS each force a single triangle shape and size. AAA only proves the triangles have the same shape (similar); one could be a dilation of the other. SSA can produce two different triangles, so it does not prove congruence." },
    { t: "order", ref: 1, q: "Put the steps in order to find the final image of P(2, 5) after the translation (x, y) → (x − 3, y + 1) followed by a reflection over the x-axis.", items: [
        "Start with the pre-image P(2, 5).",
        "Apply the translation: (2 − 3, 5 + 1) = P′(−1, 6).",
        "Apply the reflection over the x-axis to P′: (x, y) → (x, −y).",
        "Write the final image: P″(−1, −6)."],
      why: "In a sequence, each move is applied to the result of the move before it. Translate first to get P′(−1, 6), then reflect P′ over the x-axis by changing the sign of the y-coordinate: P″(−1, −6)." },
    { t: "hot", ref: 2, q: "Dana wrote this explanation. Click the sentence that contains an <b>error</b>.", text: [
        "Triangle ABC was rotated 90° and then dilated by a scale factor of ½.",
        "The rotation is a rigid motion, so it keeps every side length the same.",
        "The dilation keeps every angle measure the same.",
        "Because all the angles still match, the final image is congruent to triangle ABC.",
        "Every side of the final image is half as long as the matching side of ABC."], a: [3],
      why: "Matching angles alone do not make triangles congruent (AAA is not a congruence criterion). The dilation by ½ made every side half as long, so the final image is similar to ABC, not congruent. All the other sentences are correct." },
    { t: "mc", ref: 2, q: "A 4 cm by 6 cm rectangle is similar to a rectangle whose short side is 10 cm. How long is the long side of the larger rectangle?", opts: ["12 cm", "15 cm", "16 cm", "20 cm"], a: 1,
      why: "Similar figures have proportional sides. The scale factor is 10 ÷ 4 = 2.5, so the long side is 6 × 2.5 = 15 cm. Adding 6 to each side (to get 16 cm) is a common mistake: similarity multiplies, it does not add." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Triangle ABC is reflected over the y-axis and then translated 4 units up to make △A″B″C″. Explain why △A″B″C″ is congruent to △ABC. Then explain what would change if the second step were a dilation by scale factor 2 instead.", min: 40,
      checks: [
        { label: "Says reflections and translations are rigid motions that keep lengths and angles the same", re: /rigid|isometr|same (size|length|side|shape|angle)|preserv|keeps? (the )?(side|length|angle|size)|does ?n.?t change (the )?(size|length|shape)/i },
        { label: "Concludes the triangles are congruent", re: /congruent|≅/i },
        { label: "Explains that a dilation changes the size (sides doubled), so the image is similar, not congruent", re: /similar|∼|twice|double|2 times|two times|bigger|larger|size change|changes? (the )?size|not congruent/i }
      ],
      rubric: "2 points: explains that the reflection and translation are rigid motions that preserve lengths and angles (so the triangles are congruent) and that a dilation by 2 doubles the side lengths (similar, not congruent). 1 point: correct about one part only. 0 points: no correct reasoning.",
      model: "A reflection and a translation are both rigid motions. They move the triangle but keep every side length and angle measure the same, so △A″B″C″ is congruent to △ABC. If the second step were a dilation by scale factor 2, every side would be twice as long but the angles would stay the same. Then the image would be similar to △ABC, not congruent.",
      why: "Congruence is defined by a sequence of rigid motions, which preserve both lengths and angles. A dilation preserves angles but multiplies lengths by the scale factor, which gives similar figures." }
  ]
};

/* =====================================================================
   4. GEOMETRY: RIGHT TRIANGLES
   ===================================================================== */
RC["sg-geo-righttri"] = {
  subject: "Geometry", mins: 25,
  title: "Right Triangles: Pythagorean Theorem & Trigonometry",
  blurb: "Review the Pythagorean theorem and its converse, triples, the distance formula, and SOH-CAH-TOA with ladder and ramp problems.",
  eq: "How can the relationships among the sides and angles of a right triangle help us measure things we cannot measure directly?",
  target: "I can use the Pythagorean theorem and its converse, find distances on the coordinate plane, and use sine, cosine, and tangent to find missing sides and angles in real-world problems.",
  sources: [
    { tab: "Key Ideas", title: "The Pythagorean Theorem", numbered: true, blocks: [
      { vocab: [
        ["right triangle", "A triangle with one 90° angle, shown with a small square in the corner."],
        ["legs (a and b)", "The two sides that form the right angle."],
        ["hypotenuse (c)", "The side across from the right angle. It is always the longest side."],
        ["converse", "A statement with the “if” and “then” parts switched."],
        ["Pythagorean triple", "Three whole numbers that make a² + b² = c² true, such as 3, 4, 5."]
      ] },
      { p: "<b>Pythagorean theorem:</b> In any right triangle, the squares of the legs add up to the square of the hypotenuse: <b>a² + b² = c²</b>. Picture a square built on each side. The areas of the two smaller squares add up to the area of the largest square (try it in the simulation)." },
      { box: "<b>Worked example 1: Find a missing side.</b><br>Hypotenuse: legs 9 and 12. c² = 9² + 12² = 81 + 144 = 225, so c = √225 = <b>15</b>.<br>Leg: hypotenuse 25 and one leg 7. 7² + b² = 25², so b² = 625 − 49 = 576 and b = <b>24</b>.<br><b>Careful:</b> the hypotenuse always goes alone on one side of the equation." },
      { p: "<b>Converse of the Pythagorean theorem:</b> If the sides of a triangle satisfy a² + b² = c² (with c the longest side), then the triangle is a <b>right</b> triangle. If c² is <b>less than</b> a² + b², the triangle is <b>acute</b>. If c² is <b>greater than</b> a² + b², the triangle is <b>obtuse</b>." },
      { table: { cap: "Common Pythagorean triples (any whole-number multiple also works, such as 6, 8, 10)", head: ["Triple", "Check"], rows: [
        ["3, 4, 5", "9 + 16 = 25"], ["5, 12, 13", "25 + 144 = 169"], ["8, 15, 17", "64 + 225 = 289"], ["7, 24, 25", "49 + 576 = 625"]
      ], rowHead: true } },
      { box: "<b>Worked example 2: Distance on the coordinate plane.</b> Find the distance from (−2, 1) to (4, 9).<br>The horizontal leg is 4 − (−2) = 6 and the vertical leg is 9 − 1 = 8.<br>d = √(6² + 8²) = √(36 + 64) = √100 = <b>10</b>.<br>This is the <b>distance formula</b>: d = √((x<sub>2</sub> − x<sub>1</sub>)² + (y<sub>2</sub> − y<sub>1</sub>)²)." }
    ] },
    { tab: "Trigonometry", title: "SOH-CAH-TOA: Sine, Cosine, and Tangent", numbered: true, blocks: [
      { vocab: [
        ["opposite side", "The leg across from the angle you are using (θ, the Greek letter theta)."],
        ["adjacent side", "The leg next to the angle θ (not the hypotenuse)."],
        ["angle of elevation", "The angle from the horizontal <b>up</b> to an object, like from the ground up to the top of a ladder or a kite."],
        ["angle of depression", "The angle from the horizontal <b>down</b> to an object, like looking down from a cliff."],
        ["inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)", "Calculator keys that take a ratio and give back the angle."]
      ] },
      { p: "In a right triangle, the ratios of the sides depend only on the angles. These ratios have names. Remember them with <b>SOH-CAH-TOA</b>:" },
      { box: "<b>S</b>ine = <b>O</b>pposite ÷ <b>H</b>ypotenuse &nbsp;&nbsp; <b>C</b>osine = <b>A</b>djacent ÷ <b>H</b>ypotenuse &nbsp;&nbsp; <b>T</b>angent = <b>O</b>pposite ÷ <b>A</b>djacent" },
      { p: "To use trig: (1) label the sides as opposite, adjacent, and hypotenuse <b>from the angle you are using</b>; (2) pick the ratio that uses the side you know and the side you want; (3) solve. To find a missing <b>angle</b>, use an inverse key such as sin⁻¹. Make sure your calculator is in <b>degree</b> mode." },
      { box: "<b>Worked example 3: Ladder.</b> A 20-foot ladder leans against a wall and makes a 70° angle with the ground. How high up the wall does it reach?<br>The height is <b>opposite</b> the 70° angle and the ladder is the <b>hypotenuse</b>, so use sine.<br>sin 70° = h ÷ 20, so h = 20 · sin 70° ≈ 20 · 0.9397 ≈ <b>18.8 feet</b>.<br>The base is adjacent: 20 · cos 70° ≈ 20 · 0.3420 ≈ 6.8 feet from the wall." },
      { box: "<b>Worked example 4: Ramp angle.</b> A ramp rises 2 feet over a horizontal distance of 24 feet. What is its angle of elevation?<br>You know the opposite (2) and the adjacent (24), so use tangent: tan θ = 2 ÷ 24 ≈ 0.0833.<br>θ = tan⁻¹(0.0833) ≈ <b>4.8°</b>. This is a 1 : 12 slope, the steepest slope generally allowed for wheelchair ramps under U.S. accessibility (ADA) guidelines." }
    ] },
    { tab: "Visual", title: "Diagram: Naming the Sides", blocks: [
      { fig: SGM_RIGHTTRI, cap: "Figure 1. Opposite and adjacent depend on which angle you are using. The hypotenuse is always across from the right angle." },
      { table: { cap: "Which ratio should I use?", head: ["You know…", "You want…", "Use"], rows: [
        ["the hypotenuse", "the opposite side", "sine"],
        ["the hypotenuse", "the adjacent side", "cosine"],
        ["the adjacent side", "the opposite side", "tangent"],
        ["two sides", "an angle", "sin⁻¹, cos⁻¹, or tan⁻¹"],
        ["two sides (no angle needed)", "the third side", "the Pythagorean theorem"]
      ] } },
      { box: "<b>Safety connection:</b> A common ladder safety guideline, the <b>4-to-1 rule</b>, says to place the base 1 foot out from the wall for every 4 feet of ladder length up to where it rests on the wall. Then cos θ = 1 ÷ 4, so the ladder makes an angle of about 75.5° with the ground." }
    ] },
    { tab: "🔬 Simulation", title: "Simulation: Pythagorean Pour", blocks: [
      { box: "<b>Try this:</b> 1) Start with a = 3 and b = 4. Press <b>Pour</b> and watch the water from a² = 9 and b² = 16 exactly fill c² = 25. 2) Set a = 5 and b = 12. Is it a Pythagorean triple? 3) Set a = 6 and b = 8. Compare sin θ with the 3-4-5 triangle. Why are they the same? (The triangles are similar.) 4) Set a = b. What is θ, and what is tan θ? 5) In this simulation, θ is the angle <b>across from leg a</b>, so leg a is opposite θ and leg b is adjacent to θ." },
      { sim: "pythag", title: "Pythagorean Pour", tip: "c is always the longest side. A triple badge appears when c is a whole number.", a: 3, b: 4 }
    ] }
  ],
  qs: [
    { t: "num", ref: 1, q: "A right triangle has legs of 9 cm and 12 cm. How long is the hypotenuse?", a: 15, tol: 0.01, pre: "c =", unit: "cm",
      why: "c² = 9² + 12² = 81 + 144 = 225, so c = √225 = 15 cm. (9, 12, 15 is the 3, 4, 5 triple multiplied by 3.)" },
    { t: "num", ref: 1, q: "A right triangle has a hypotenuse of 25 m and one leg of 7 m. How long is the other leg?", a: 24, tol: 0.01, pre: "b =", unit: "m",
      why: "The hypotenuse goes alone: 7² + b² = 25². So b² = 625 − 49 = 576 and b = 24 m. A common mistake is to add 7² + 25², which would make the leg longer than the hypotenuse." },
    { t: "grid", ref: 1, q: "Use the converse of the Pythagorean theorem. Classify each triangle by its side lengths.", cols: ["Right", "Acute", "Obtuse"],
      rows: [["6, 8, 10", 0], ["5, 6, 7", 1], ["4, 5, 8", 2], ["8, 15, 17", 0], ["7, 7, 10", 2]],
      why: "Compare c² (longest side) with a² + b². 36 + 64 = 100 = 10²: right. 25 + 36 = 61 > 49: acute. 16 + 25 = 41 < 64: obtuse. 64 + 225 = 289 = 17²: right. 49 + 49 = 98 < 100: obtuse." },
    { t: "mc", ref: 1, q: "What is the distance between the points (1, −2) and (7, 6)?", opts: ["8", "10", "14", "√52"], a: 1,
      why: "The horizontal change is 7 − 1 = 6 and the vertical change is 6 − (−2) = 8. d = √(6² + 8²) = √(36 + 64) = √100 = 10. Adding the changes (6 + 8 = 14) gives the walking distance along the grid, not the straight-line distance." },
    { t: "inline", ref: 2, q: "In a right triangle, the side opposite angle θ is 5, the side adjacent to θ is 12, and the hypotenuse is 13. Complete the ratios.", text: "sin θ = [[]], cos θ = [[]], tan θ = [[]]",
      blanks: [{ opts: ["5/13", "12/13", "5/12", "12/5"], a: 0 }, { opts: ["5/13", "12/13", "5/12", "13/12"], a: 1 }, { opts: ["5/13", "12/13", "5/12", "12/5"], a: 2 }],
      why: "SOH: sin θ = opposite ÷ hypotenuse = 5/13. CAH: cos θ = adjacent ÷ hypotenuse = 12/13. TOA: tan θ = opposite ÷ adjacent = 5/12." },
    { t: "num", ref: 4, q: "<b>Use the simulation.</b> Set leg a = 8 and leg b = 15. What is the length of the hypotenuse c?", a: 17, tol: 0.01, pre: "c =",
      why: "c = √(8² + 15²) = √(64 + 225) = √289 = 17. The simulation shows the Pythagorean triple badge because 17 is a whole number: 8, 15, 17 is a triple." },
    { t: "num", ref: 2, q: "A 16-foot ladder leans against a wall and makes a <b>75°</b> angle with the ground. How high up the wall does the top of the ladder reach? Round to the nearest hundredth.", a: 15.45, tol: 0.05, unit: "feet",
      why: "The height is opposite the 75° angle and the ladder is the hypotenuse, so use sine: h = 16 · sin 75° ≈ 16 · 0.9659 ≈ 15.45 feet. (If you got a negative or strange answer, check that your calculator is in degree mode.)" },
    { t: "ebsr", ref: 2,
      A: { q: "A ramp rises 3 feet over a horizontal distance of 30 feet. Accessibility guidelines allow an angle of elevation of about 4.8° at most (a 1 : 12 slope). Does this ramp meet the guideline?", opts: ["Yes, its angle is about 4.8°.", "No, its angle is about 5.7°, which is steeper than allowed.", "Yes, because 3 feet is less than 30 feet.", "No, its angle is about 84.3°."], a: 1 },
      B: { q: "Which work <b>best</b> supports your answer to Part A?", opts: ["3² + 30² = 909, so the ramp is about 30.15 feet long.", "tan θ = 3 ÷ 30 = 0.1, and tan⁻¹(0.1) ≈ 5.7°.", "sin θ = 30 ÷ 3 = 10.", "The ramp is a right triangle, so one angle is 90°."], a: 1 },
      why: "The rise (3) is opposite the angle and the horizontal run (30) is adjacent, so use tangent: tan θ = 0.1 and θ ≈ 5.7°. That is steeper than 4.8°. Another way to see it: 3 : 30 is a 1 : 10 slope, which is steeper than 1 : 12. 84.3° is the other acute angle, at the top of the ramp." },
    { t: "order", ref: 2, q: "A kite string is 50 feet long and the kite is 30 feet above the ground. Put the steps in order to find the angle of elevation of the string.", items: [
        "Draw a right triangle and label the 50-foot string as the hypotenuse.",
        "Label the 30-foot height as the side opposite the angle of elevation.",
        "Choose sine, because you know the opposite side and the hypotenuse.",
        "Write the equation sin θ = 30 ÷ 50 = 0.6.",
        "Use the inverse: θ = sin⁻¹(0.6) ≈ 36.9°."],
      why: "Always draw and label first, then pick the ratio that matches the sides you know. Since you want an angle, finish with the inverse key: sin⁻¹(0.6) ≈ 36.9°." },
    { t: "hot", ref: 1, q: "Jordan solved a ladder problem. Click the sentence where Jordan made the <b>first mistake</b>.", text: [
        "A 13-foot ladder leans against a wall, and its top is 12 feet up the wall.",
        "The ladder is the hypotenuse, so c = 13.",
        "I write the equation 12² + 13² = b².",
        "So b² = 313 and b ≈ 17.7 feet.",
        "The base of the ladder is about 17.7 feet from the wall."], a: [2],
      why: "The ladder (13) is the hypotenuse, so it must be alone on one side: 12² + b² = 13². Then b² = 169 − 144 = 25 and b = 5 feet. Jordan’s answer of 17.7 feet is longer than the ladder itself, which is a sign something went wrong." },
    { t: "multi", need: 3, ref: 1, q: "Which <b>three</b> sets of numbers are Pythagorean triples?", opts: ["9, 12, 15", "5, 12, 13", "6, 9, 12", "7, 24, 25", "10, 20, 30"], a: [0, 1, 3],
      why: "81 + 144 = 225 = 15² ✓. 25 + 144 = 169 = 13² ✓. 36 + 81 = 117, but 12² = 144 ✗. 49 + 576 = 625 = 25² ✓. 100 + 400 = 500, but 30² = 900 ✗ (10, 20, 30 cannot even form a triangle, because 10 + 20 is not greater than 30)." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> A 20-foot ladder has its base 5 feet from a wall. Explain how to find (1) how high up the wall it reaches and (2) the angle it makes with the ground. Name the method you use for each part and give both answers (round to the nearest tenth).", min: 40,
      checks: [
        { label: "Uses the Pythagorean theorem for the height", re: /pythag|a\^?2 ?\+ ?b\^?2|a² ?\+ ?b²|5\^?2|5²|20\^?2|20²|375|400 ?[−-] ?25/i },
        { label: "Gives the height ≈ 19.4 feet", re: /19\.3|19\.4|√ ?375|sqrt ?\(?375/i },
        { label: "Uses cosine (or another trig ratio / inverse) for the angle and gets about 75.5°", re: /cos|inverse|sin|tan|75\.5|75\.52|76/i, min: 2 }
      ],
      rubric: "2 points: uses the Pythagorean theorem to get about 19.4 feet and uses cosine (or another correct trig ratio) to get about 75.5°. 1 point: one part is correct and explained. 0 points: neither part is correct.",
      model: "For the height, the ladder is the hypotenuse and the 5 feet along the ground is a leg, so I use the Pythagorean theorem: 5² + h² = 20², so h² = 400 − 25 = 375 and h = √375 ≈ 19.4 feet. For the angle with the ground, the 5 feet is adjacent to the angle and 20 is the hypotenuse, so I use cosine: cos θ = 5 ÷ 20 = 0.25, so θ = cos⁻¹(0.25) ≈ 75.5°.",
      why: "When you know two sides and want the third, use the Pythagorean theorem: √(400 − 25) = √375 ≈ 19.4 feet. When you want an angle, use an inverse trig ratio: the base is adjacent and the ladder is the hypotenuse, so cos⁻¹(5/20) ≈ 75.5°. This matches the 4-to-1 ladder safety rule." }
  ]
};
