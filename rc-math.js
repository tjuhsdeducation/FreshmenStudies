/* =====================================================================
   ✏️ READING CHECKS: ALGEBRA 1 + ALGEBRA 2 (reading graphs)
   (See the top of rc-history.js for how questions work.)
   ===================================================================== */

RC["alg1-linear"] = {
  subject: "Algebra 1", mins: 10,
  title: "Reading Linear Graphs: Saving for a Car",
  blurb: "Interpret slope, y-intercept, and the intersection of two savings plans, then read a distance-time graph.",
  eq: "What can the slope, intercept, and intersection of a graph tell us about a real situation?",
  target: "I can interpret slope, y-intercept, and points of intersection in context.",
  sources: [
    { tab: "Savings Graph", title: "Two Savings Plans", blocks: [
      { p: "Maya and Jordan are each saving money for a used car. Maya already has some money saved from her summer job. Jordan is starting from zero but has a new job with more hours. Both save the same amount every week.", n: false },
      { fig: RCG.line({ title: "Total Savings Over Time", x: { min: 0, max: 10, step: 1, label: "Weeks" }, y: { min: 0, max: 1000, step: 100, label: "Total saved (dollars)", every: 2 },
          series: [{ fn: x => 200 + 50 * x, cls: "s1", label: "Maya" }, { fn: x => 90 * x, cls: "s2", label: "Jordan" }],
          marks: [{ x: 0, y: 200, text: "(0, 200)", cls: "s1", dy: -10 }, { x: 5, y: 450, text: "(5, 450)", cls: "s3", dx: -12, dy: -12, anchor: "end" }],
          alt: "Two lines. Maya's line starts at 200 dollars at week 0 and rises 50 dollars per week, reaching 700 at week 10. Jordan's line starts at 0 and rises 90 dollars per week, reaching 900 at week 10. The lines cross at week 5, 450 dollars." }),
        cap: "Figure 1. Each line shows total savings at the end of each week." },
      { box: "<b>Remember:</b> slope = rate of change = <sup>change in y</sup>⁄<sub>change in x</sub>. The y-intercept is the value when x = 0." }
    ]},
    { tab: "Bike Ride Graph", title: "Sam’s Bike Ride", blocks: [
      { p: "Sam rode his bike from home to a store, then to a park, and then back home. The graph shows his distance from home.", n: false },
      { fig: RCG.line({ title: "Sam’s Distance from Home", x: { min: 0, max: 60, step: 5, label: "Time (minutes)", every: 2 }, y: { min: 0, max: 5, step: 1, label: "Distance from home (miles)" },
          series: [{ pts: [[0, 0], [10, 2], [20, 2], [25, 4], [40, 4], [60, 0]], cls: "s4", dots: true }],
          alt: "Distance from home graph. From 0 to 10 minutes Sam goes from 0 to 2 miles. From 10 to 20 minutes he stays at 2 miles. From 20 to 25 minutes he goes from 2 to 4 miles. From 25 to 40 minutes he stays at 4 miles. From 40 to 60 minutes he returns from 4 miles to 0." }),
        cap: "Figure 2. Flat parts mean Sam is not moving away from or toward home." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What does the y-intercept of Maya’s line, (0, 200), mean?", opts: ["Maya saves $200 every week.", "Maya had $200 saved before week 1.", "Maya will have $200 after 5 weeks.", "Maya needs $200 for the car."], a: 1, why: "The y-intercept is the value when x = 0 weeks: her starting savings." },
    { t: "num", ref: 1, q: "What is the slope of Jordan’s line? (How many dollars does he save per week?)", a: 90, tol: 0.5, unit: "dollars per week", why: "Jordan goes from $0 to $450 in 5 weeks: 450 ÷ 5 = $90 per week." },
    { t: "inline", ref: 1, q: "Write the equation for Maya’s savings, where x is weeks and y is dollars.", text: "y = [[]] x + [[]]",
      blanks: [{ opts: ["50", "90", "200", "450"], a: 0 }, { opts: ["0", "50", "200", "450"], a: 2 }], why: "Maya’s line rises $50 per week (slope) and starts at $200 (y-intercept): y = 50x + 200." },
    { t: "num", ref: 1, q: "After how many weeks will Maya and Jordan have the <b>same</b> amount saved?", a: 5, tol: 0.01, unit: "weeks", why: "The lines intersect at (5, 450). Check: 200 + 50(5) = 450 and 90(5) = 450." },
    { t: "ebsr", ref: 1,
      A: { q: "Which statement is true at week 8?", opts: ["Maya has more money than Jordan.", "Jordan has more money than Maya.", "They have the same amount.", "Neither has saved any money."], a: 1 },
      B: { q: "Which values <b>best</b> support your answer to Part A?", opts: ["At week 8, Maya has $600 and Jordan has $720.", "At week 0, Maya has $200 and Jordan has $0.", "At week 5, both have $450.", "Maya saves $50 per week."], a: 0 },
      why: "Maya: 200 + 50(8) = $600. Jordan: 90(8) = $720. After the intersection, the steeper line is on top." },
    { t: "mc", ref: 2, q: "Use Figure 2. During which time was Sam stopped at the store?", opts: ["0 to 10 minutes", "10 to 20 minutes", "20 to 25 minutes", "40 to 60 minutes"], a: 1, why: "From 10 to 20 minutes the graph is flat at 2 miles, so his distance did not change." },
    { t: "mc", ref: 2, q: "During which interval was Sam riding the <b>fastest</b>?", opts: ["0 to 10 minutes", "20 to 25 minutes", "25 to 40 minutes", "40 to 60 minutes"], a: 1, why: "The steepest segment: 2 miles in 5 minutes = 0.4 mile per minute. The other moving parts are 0.2 mile per minute." },
    { t: "num", ref: 2, q: "What is the <b>total distance</b> Sam rode during the whole trip?", a: 8, tol: 0.01, unit: "miles", why: "Out 4 miles (2 + 2), then back 4 miles: 4 + 4 = 8 miles. The graph only reaches 4 because it shows distance from home, not total distance." }
  ]
};

RC["alg1-scatter"] = {
  subject: "Algebra 1", mins: 10,
  title: "Scatter Plots and Trend Lines: Study Time vs. Test Scores",
  blurb: "Describe a correlation, use a trend line to predict, and spot an outlier.",
  eq: "How can a trend line help us make predictions, and what are its limits?",
  target: "I can describe a correlation, interpret a trend line, and make a prediction from a scatter plot.",
  sources: [
    { tab: "Scatter Plot", title: "Does Studying Pay Off?", blocks: [
      { p: "A teacher asked 11 students how many hours they studied for a unit test and recorded their scores. The <b>trend line</b> (line of best fit) shows the general pattern.", n: false },
      { fig: (() => { const pts = [[1, 62], [2, 66], [2, 70], [3, 71], [4, 74], [4, 78], [5, 82], [6, 85], [6, 60], [7, 88], [8, 93]];
          return RCG.line({ title: "Hours Studied vs. Test Score", x: { min: 0, max: 9, step: 1, label: "Hours studied" }, y: { min: 50, max: 100, step: 10, label: "Test score (%)" },
            series: [{ fn: x => 58 + 4.25 * x, cls: "s2", label: "Trend line: y = 4.25x + 58", dash: true }],
            marks: pts.map(p => ({ x: p[0], y: p[1], cls: "s1" })).concat([{ x: 6, y: 60, cls: "s3", text: "Student K", dx: 10, dy: 4 }]),
            alt: "Scatter plot of hours studied versus test score. Points: 1 hour 62, 2 hours 66 and 70, 3 hours 71, 4 hours 74 and 78, 5 hours 82, 6 hours 85, 7 hours 88, 8 hours 93, plus Student K at 6 hours and 60. A dashed trend line y equals 4.25x plus 58 rises from 58 at 0 hours." }); })(),
        cap: "Figure 1. Each dot is one student. The dashed line is the trend line y = 4.25x + 58." },
      { box: "<b>Remember:</b> A <b>positive correlation</b> means both variables tend to increase together. An <b>outlier</b> is a point far away from the overall pattern. <b>Correlation does not prove causation</b>: other factors may also affect the results." }
    ]}
  ],
  qs: [
    { t: "mc", q: "What type of correlation does the scatter plot show?", opts: ["Strong negative correlation", "Positive correlation", "No correlation", "Negative correlation that becomes positive"], a: 1, why: "As hours studied increase, scores tend to increase." },
    { t: "mc", q: "What does the slope of the trend line, 4.25, mean in this situation?", opts: ["A student who studies 0 hours scores 4.25%.", "For each additional hour studied, scores tend to rise about 4.25 points.", "Every student studied 4.25 hours.", "Scores go up 4.25 hours for every point."], a: 1, why: "Slope is change in score per hour studied." },
    { t: "num", q: "Use the trend line equation to predict the score of a student who studies <b>5.5 hours</b>. (Round to the nearest whole percent.)", a: 81, tol: 1, unit: "%", why: "y = 4.25(5.5) + 58 = 23.375 + 58 ≈ 81%." },
    { t: "ebsr",
      A: { q: "Which student is an outlier?", opts: ["The student who studied 1 hour and scored 62%", "Student K, who studied 6 hours and scored 60%", "The student who studied 8 hours and scored 93%", "There are no outliers."], a: 1 },
      B: { q: "Which reason <b>best</b> supports your answer to Part A?", opts: ["The trend line predicts about 84% for 6 hours, but Student K scored 60%, far below the pattern.", "Student K studied more than 5 hours.", "Student K’s dot is orange.", "Every score above 90% is an outlier."], a: 0 },
      why: "4.25(6) + 58 = 83.5, about 84%. A score of 60% is far from the pattern." },
    { t: "mc", q: "What does the y-intercept of the trend line (58) suggest?", opts: ["Students who study 0 hours would score about 58%, according to the trend.", "The lowest score in the class was 58%.", "58 students took the test.", "Every hour of study adds 58 points."], a: 0, why: "The y-intercept is the predicted score when x = 0 hours." },
    { t: "multi", need: 2, q: "Which <b>two</b> statements are reasonable conclusions?", opts: ["Students who studied more tended to score higher.", "Studying 20 hours would guarantee a score of 143%.", "Other factors, like sleep or prior knowledge, could also affect scores.", "The data proves studying is the only cause of high scores.", "Student K did not take the test."], a: [0, 2],
      why: "The plot shows a trend, but correlation is not causation, and predicting far outside the data (20 hours → 143%) makes no sense." }
  ]
};

RC["alg2-quad-exp"] = {
  subject: "Algebra 2", mins: 12,
  title: "Reading Quadratic and Exponential Graphs",
  blurb: "Find the vertex, zeros, and domain of a launch, then model a medicine’s half-life.",
  eq: "How do the key features of a graph describe what is happening in a real situation?",
  target: "I can interpret key features of quadratic and exponential graphs in context.",
  sources: [
    { tab: "Quadratic", title: "Graph A: A Ball Launched from a Platform", blocks: [
      { p: "A ball is launched upward from the top of an 80-foot platform. Its height in feet after t seconds is modeled by <b>h(t) = −16t² + 64t + 80</b>.", n: false },
      { fig: RCG.line({ title: "Height of the Ball", x: { min: 0, max: 6, step: 1, label: "Time (seconds)" }, y: { min: 0, max: 160, step: 20, label: "Height (feet)" },
          series: [{ fn: t => -16 * t * t + 64 * t + 80, from: 0, to: 5, cls: "s1" }],
          marks: [{ x: 0, y: 80, text: "(0, 80)", cls: "s1", dx: 8, dy: 4 }, { x: 2, y: 144, text: "(2, 144)", cls: "s3", dy: -10 }, { x: 5, y: 0, text: "(5, 0)", cls: "s2", dy: -10 }],
          alt: "A downward parabola starting at 0 seconds and 80 feet, rising to a maximum at 2 seconds and 144 feet, and landing at 5 seconds and 0 feet." }),
        cap: "Figure 1. The graph stops when the ball hits the ground." },
      { box: "<b>Key features:</b> the <b>vertex</b> is the highest (or lowest) point; the <b>zeros</b> are where the graph crosses the x-axis; the <b>domain</b> is the set of reasonable x-values; the <b>range</b> is the set of reasonable y-values." }
    ]},
    { tab: "Exponential", title: "Graph B: Medicine in the Bloodstream", blocks: [
      { p: "A patient takes a 400 mg dose of a medicine. The body removes the medicine so that the amount left is cut in half every 4 hours. This time is called the medicine’s <b>half-life</b>.", n: false },
      { fig: RCG.line({ title: "Medicine Remaining in the Body", x: { min: 0, max: 16, step: 2, label: "Time (hours)" }, y: { min: 0, max: 400, step: 50, label: "Medicine left (mg)", every: 2 },
          series: [{ fn: t => 400 * Math.pow(0.5, t / 4), cls: "s2" }],
          marks: [{ x: 0, y: 400, text: "(0, 400)", cls: "s2", dx: 8, dy: 4 }, { x: 4, y: 200, text: "(4, 200)", cls: "s2" }, { x: 8, y: 100, text: "(8, 100)", cls: "s2" }, { x: 12, y: 50, text: "(12, 50)", cls: "s2" }, { x: 16, y: 25, text: "(16, 25)", cls: "s2", dx: -8, anchor: "end" }],
          alt: "A decreasing exponential curve: 400 mg at 0 hours, 200 at 4 hours, 100 at 8 hours, 50 at 12 hours, and 25 at 16 hours. It gets closer to 0 but never reaches it." }),
        cap: "Figure 2. The curve gets closer and closer to 0 but never reaches it." }
    ]}
  ],
  qs: [
    { t: "num", ref: 1, q: "Use Graph A. What is the <b>maximum height</b> of the ball?", a: 144, tol: 0.5, unit: "feet", why: "The vertex is (2, 144). Check: −16(4) + 64(2) + 80 = 144." },
    { t: "num", ref: 1, q: "After how many seconds does the ball hit the ground?", a: 5, tol: 0.01, unit: "seconds", why: "The zero is at t = 5. Check: −16(25) + 64(5) + 80 = 0." },
    { t: "mc", ref: 1, q: "What does the y-intercept, (0, 80), represent?", opts: ["The ball’s maximum height", "The ball’s starting height on the platform", "The time the ball is in the air", "The speed of the ball"], a: 1, why: "At t = 0 the ball is 80 feet up, the height of the platform." },
    { t: "mc", ref: 1, q: "On which interval is the ball’s height <b>increasing</b>?", opts: ["0 < t < 2", "2 < t < 5", "0 < t < 5", "80 < h < 144"], a: 0, why: "The ball rises until the vertex at t = 2, then falls." },
    { t: "inline", ref: 1, q: "Complete the sentence about Graph A.", text: "A reasonable domain is [[]] and a reasonable range is [[]].",
      blanks: [{ opts: ["0 ≤ t ≤ 5", "0 ≤ t ≤ 144", "all real numbers", "2 ≤ t ≤ 5"], a: 0 }, { opts: ["0 ≤ h ≤ 144", "80 ≤ h ≤ 144", "0 ≤ h ≤ 5", "all real numbers"], a: 0 }],
      why: "Time runs from launch (0) to landing (5). Height goes from 0 (the ground) up to the maximum, 144. It starts at 80 but falls all the way to 0." },
    { t: "num", ref: 2, q: "Use Graph B. How much medicine is left after <b>8 hours</b>?", a: 100, tol: 0.5, unit: "mg", why: "400 → 200 (4 hours) → 100 (8 hours)." },
    { t: "ebsr", ref: 2,
      A: { q: "Which equation models Graph B, where t is hours?", opts: ["A(t) = 400 − 50t", "A(t) = 400(½)<sup>t/4</sup>", "A(t) = 400(2)<sup>t/4</sup>", "A(t) = 4(400)<sup>t</sup>"], a: 1 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["The amount is cut in half every 4 hours: 400, 200, 100, 50.", "The amount decreases by 50 mg every hour.", "The graph starts at 400 mg.", "The amount doubles every 4 hours."], a: 0 },
      why: "Halving every 4 hours means multiplying by ½ once every 4 hours: 400(½)^(t/4)." },
    { t: "mc", ref: 2, q: "How is Graph B different from a linear decrease?", opts: ["It drops by the same <i>amount</i> every 4 hours.", "It drops by the same <i>percent</i> every 4 hours, so the drops get smaller over time.", "It never decreases.", "It reaches 0 after 16 hours."], a: 1, why: "Exponential decay loses 50% each half-life: 200 mg, then 100 mg, then 50 mg. A linear graph would lose the same amount each time." }
  ]
};
