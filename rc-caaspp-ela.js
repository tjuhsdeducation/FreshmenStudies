/* =====================================================================
   ✏️ CAASPP PRACTICE: ELA (Smarter Balanced style, grades 9–12)
   Opens at caaspp.html?id=THE-ID. Same question types as the Reading
   Checks (see rc-history.js), plus:
     hot    hot text: click sentences, text:[...], a:[indexes]   (1, or 2 if 2+ answers)
     write  brief write, scored 0–2 by a rubric checklist:
            min (words), checks:[{label, re:/words/i, min:1, not:false}],
            model (sample answer), rubric (short scoring guide)
   Listening passage block: { listen:["paragraph", ...], title:"..." }
   All passages and sources were written for this site.
   ===================================================================== */
const CA = { kind: "CAASPP Practice" };
const draftHTML = sents => `<div class="draft">${sents.map((t, i) => `<span class="sn rc-noann">${i + 1}</span>${t}`).join(" ")}</div>`;

RC["ela-literary"] = Object.assign({}, CA, {
  subject: "ELA", mins: 20,
  title: "Claim 1 Reading: Literary Text",
  blurb: "A short story with theme, word meaning, character, hot text, a two-part question, and a brief write.",
  eq: "How do authors use details and symbols to develop a theme?",
  target: "I can determine a theme, analyze how a character changes, and support my answers with evidence from a literary text.",
  sources: [
    { tab: "Story", title: "The Bell Over the Door", numbered: true, blocks: [
      { p: "For eleven years, the brass bell over the door of Delgado’s Panadería had announced every customer with the same bright, cheerful jangle. Marisol had grown to hate it. At fifteen, she heard it in her sleep: the bell, then the shuffle of feet, then her father’s voice booming, “¡Buenos días! What can we get you?”" },
      { p: "“Two more weeks,” she muttered on Saturday morning, tying the flour-stiff apron behind her back. The bakery was closing at the end of the month. The rent on Mill Street had doubled, and the new coffee chain across the road sold muffins for a dollar. Marisol told herself she was relieved. No more 5 a.m. alarms. No more smelling like sugar and yeast in Algebra class." },
      { p: "Her father did not seem relieved. He moved more slowly now, wiping the same clean counter twice. When old Mrs. Ochoa came in for her usual three conchas, he wrapped them in wax paper with unusual care, folding each corner into a sharp point. “On the house,” he said. Mrs. Ochoa pressed a hand to her heart and said nothing at all." },
      { p: "“Papá, we can’t keep giving things away,” Marisol said after the bell jangled shut behind her. Her voice came out more brusque than she meant it to, sharp and short, like a door slammed by the wind." },
      { p: "He didn’t answer. Instead, he pulled a grease-spotted index card from the drawer under the register and slid it across the counter. The handwriting was faded and slanted: Abuela’s recipe for pan de elote, the sweet corn bread that had first made the bakery famous on Mill Street. “You’ve never made it alone,” he said." },
      { p: "“Why would I need to? We’re closing.”" },
      { p: "“That’s exactly why.”" },
      { p: "So Marisol made it. She measured the cornmeal twice, cracked the eggs the way her grandmother had shown her when she was six and could barely see over the counter, and folded the batter slowly so it would not turn tough. While it baked, the kitchen filled with a smell she had forgotten she knew: warm, golden, a little like burnt honey. She remembered Abuela humming in this exact spot, flour on her cheek, telling her that bread was “a way of saying you were here.”" },
      { p: "When the pan came out, her father cut a square and tasted it. For a long moment he chewed without speaking. Then he laughed, an actual laugh, the first one she had heard in weeks. “Too much sugar,” he said. “Exactly like hers.”" },
      { p: "That afternoon, the bell rang forty-three times. Marisol counted. Neighbors came to say goodbye, and many of them asked for pan de elote. She stood at the register and wrapped each square herself, folding the corners of the wax paper into sharp points." },
      { p: "On the last day, after the lights were off, her father climbed the stepladder and unscrewed the bell from its bracket. He held it out to her. Marisol turned it over in her palm. It was smaller than she had imagined, and heavier." },
      { p: "“For your kitchen someday,” he said." },
      { p: "She shook it once, gently, and the bright sound filled the empty room. This time, she didn’t mind it at all." },
      { src: "Story written for this practice set." }
    ]}
  ],
  qs: [
    { t: "mc", q: "Read this sentence from paragraph 4.<blockquote>Her voice came out more <b>brusque</b> than she meant it to, sharp and short, like a door slammed by the wind.</blockquote>What does <b>brusque</b> most likely mean?", opts: ["Gentle and quiet", "Rude and abrupt", "Confused and unsure", "Loud and joyful"], a: 1,
      why: "The context clues “sharp and short” and “like a door slammed” show the word means rude and abrupt." },
    { t: "ebsr",
      A: { q: "Which statement <b>best</b> expresses a theme of the story?", opts: ["Hard work always leads to success.", "Traditions and memories can stay with us even when places change.", "Large businesses are always harmful to neighborhoods.", "Teenagers should not have to work at family businesses."], a: 1 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?", opts: ["“The rent on Mill Street had doubled…” (paragraph 2)", "“No more 5 a.m. alarms.” (paragraph 2)", "“…telling her that bread was ‘a way of saying you were here.’” (paragraph 8)", "“That afternoon, the bell rang forty-three times.” (paragraph 10)"], a: 2 },
      why: "The bakery is closing, but the recipe and the bell carry the family’s memories forward. Abuela’s words show that what we make keeps our story alive." },
    { t: "hot", q: "Click the <b>two</b> sentences that <b>best</b> show that Marisol’s feelings about the bakery have changed by the end of the story.",
      text: ["Marisol had grown to hate it.", "Marisol told herself she was relieved.", "Her voice came out more brusque than she meant it to, sharp and short, like a door slammed by the wind.", "She stood at the register and wrapped each square herself, folding the corners of the wax paper into sharp points.", "The rent on Mill Street had doubled, and the new coffee chain across the road sold muffins for a dollar.", "This time, she didn’t mind it at all."], a: [3, 5],
      why: "At the end, Marisol copies her father’s careful wrapping and no longer minds the bell. The other sentences show her early feelings or the setting." },
    { t: "mc", q: "In paragraph 3, the father folds the wax paper “into a sharp point.” In paragraph 10, Marisol does the same thing. What is the <b>most likely</b> reason the author repeats this detail?", opts: ["To show that the bakery is running out of supplies", "To show that Marisol has started to share her father’s care and pride in the bakery", "To show that Mrs. Ochoa is a picky customer", "To explain how to wrap bread correctly"], a: 1,
      why: "Repeating the detail connects Marisol to her father: she is now doing the work with the same care." },
    { t: "multi", need: 2, q: "Which <b>two</b> character traits of the father are <b>best</b> supported by the story?", opts: ["Generous", "Careless", "Devoted to his family’s traditions", "Impatient", "Greedy"], a: [0, 2],
      why: "He gives Mrs. Ochoa her bread “on the house” (generous) and makes sure Marisol learns Abuela’s recipe (devoted to tradition)." },
    { t: "mc", q: "How does the memory in paragraph 8 contribute to the story?", opts: ["It explains why the rent increased.", "It shows why the recipe matters so much to the family.", "It introduces a new conflict between Marisol and Mrs. Ochoa.", "It reveals that the bakery will stay open."], a: 1,
      why: "The flashback to Abuela gives the recipe emotional meaning, which helps explain the father’s request and Marisol’s change." },
    { t: "mc", q: "By the end of the story, what does the bell <b>most likely</b> symbolize?", opts: ["The noise Marisol is glad to escape", "The family’s history and connection to the community, which Marisol will carry forward", "The coffee chain that replaced the bakery", "Her father’s anger about the closing"], a: 1,
      why: "The bell announced every neighbor for eleven years. Her father gives it to her “for your kitchen someday,” so it stands for the family’s story continuing." },
    { t: "write", q: "<b>Brief write.</b> Explain how Marisol’s feelings about the bakery change from the beginning to the end of the story. Use <b>at least two details</b> from the story to support your answer.", min: 40,
      checks: [
        { label: "Describes how Marisol feels at the beginning", re: /hate|hated|annoy|relieved|didn.?t (like|care|want)|embarrass|tired of|glad (it|the bakery) (was )?clos|wanted (it )?to (close|leave)/i },
        { label: "Describes how she feels at the end", re: /proud|grateful|appreciat|didn.?t mind|cares?|cared|love|understand|miss|value|connect|sad|special|meaning/i },
        { label: "Uses at least two specific details from the story", re: /bell|recipe|pan de elote|abuela|grandmother|wax paper|sharp point|apron|ochoa|forty.three|43|kitchen|conchas|laugh|index card|“|"/i, min: 2 }
      ],
      rubric: "2 points: explains the change and supports it with two text details. 1 point: explains the change with little or no support. 0 points: does not explain the change.",
      model: "At the beginning, Marisol hates the bell and tells herself she is relieved the bakery is closing. After she bakes Abuela’s pan de elote and remembers her grandmother saying bread is “a way of saying you were here,” she starts to value the bakery. By the end she wraps each square with sharp corners like her father, and when she shakes the bell she “didn’t mind it at all.”" }
  ]
});

RC["ela-informational"] = Object.assign({}, CA, {
  subject: "ELA", mins: 20,
  title: "Claim 1 Reading: Informational Text",
  blurb: "An article about teen sleep and school start times with central idea, structure, a chart, hot text, and a brief write.",
  eq: "How do authors use evidence and structure to support a central idea?",
  target: "I can determine a central idea, analyze an author’s use of evidence and counterclaims, and support my answers with details.",
  sources: [
    { tab: "Article", title: "Why Teens Can’t Just “Go to Bed Earlier”", numbered: true, blocks: [
      { p: "Every school morning, millions of teenagers drag themselves out of bed before sunrise. Adults often tell them the solution is simple: go to bed earlier. Sleep scientists say it is not that simple. Teen bodies run on a different clock." },
      { p: "Everyone has a <b>circadian rhythm</b>, an internal 24-hour clock that tells the body when to feel sleepy and when to feel alert. During puberty, this clock shifts later. The brain begins releasing melatonin, the hormone that signals sleep, as much as two hours later than it did in childhood. A teen who lies down at 9:30 p.m. may simply stare at the ceiling until 11:00." },
      { p: "At the same time, teens still need plenty of rest. The American Academy of Sleep Medicine recommends that teenagers get 8 to 10 hours of sleep each night. When school starts at 7:30 a.m., a student who falls asleep at 11:00 p.m. and wakes at 6:00 a.m. gets only seven hours. Over a week, the missing hours add up. Lack of sleep is linked to trouble concentrating, car crashes, and mood problems." },
      { p: "Some communities have tested a solution: starting school later. In 2016, high schools in Seattle moved their start time from 7:50 a.m. to 8:45 a.m. Researchers who tracked students found that the students’ median sleep increased by 34 minutes a night. Students did not just stay up later; they actually slept more. Based on findings like these, the American Academy of Pediatrics recommended in 2014 that middle and high schools start no earlier than 8:30 a.m. In 2019, California became the first state to pass a law requiring most public high schools to start at 8:30 a.m. or later, beginning in the 2022–23 school year." },
      { p: "Not everyone supports the change. Later start times can mean later dismissal, which pushes sports practices and after-school jobs into the evening. Some districts must rearrange bus routes, which can cost money. Parents who leave early for work may struggle to get younger children to school. These are real challenges, but supporters argue that they can be solved with planning, while a teenager’s biology cannot be rescheduled." },
      { p: "The next time a teen seems “lazy” in the morning, consider the science. That student may be fighting a clock built into the human body." },
      { fig: RCG.bar({ title: "Median Nightly Sleep, Seattle High School Students", cats: ["Before (7:50 a.m. start)", "After (8:45 a.m. start)"], values: true, w: 520, h: 300,
          series: [{ vals: [410, 444], cls: "s1" }], y: { min: 0, max: 480, step: 60, label: "Minutes of sleep", fmt: v => v }, alt: "Bar graph. Before the change, median sleep was 410 minutes (6 hours 50 minutes). After the change, it was 444 minutes (7 hours 24 minutes)." }),
        cap: "Figure 1. Median sleep before and after the later start time (410 minutes = 6 hours 50 minutes; 444 minutes = 7 hours 24 minutes). Source: Dunster et al., <i>Science Advances</i> (2018)." },
      { src: "Article written for this practice set." }
    ]}
  ],
  qs: [
    { t: "mc", q: "Which statement <b>best</b> describes the central idea of the article?", opts: ["Teenagers are tired because they use their phones at night.", "A natural shift in teens’ body clocks makes early start times a problem, and later start times can help them sleep more.", "Seattle has the best high schools in the country.", "School buses are too expensive for most districts."], a: 1,
      why: "Paragraphs 2–4 explain the body-clock shift and how later start times increased sleep. Paragraph 6 sums it up." },
    { t: "mc", q: "As it is used in paragraph 2, what does <b>circadian rhythm</b> mean?", opts: ["A type of music that helps people sleep", "An internal 24-hour clock that controls sleepiness and alertness", "A school schedule", "A hormone released during puberty"], a: 1, why: "The author defines it right after the term: “an internal 24-hour clock…” Melatonin is the hormone." },
    { t: "num", q: "Use Figure 1. By how many <b>minutes</b> did the median nightly sleep increase after the start time changed?", a: 34, tol: 0.5, unit: "minutes", why: "444 − 410 = 34 minutes, which matches paragraph 4." },
    { t: "hot", q: "Click the sentence from paragraph 4 that <b>best</b> supports the claim that later start times help students get more sleep, not just stay up later.",
      text: ["Some communities have tested a solution: starting school later.", "In 2016, high schools in Seattle moved their start time from 7:50 a.m. to 8:45 a.m.", "Students did not just stay up later; they actually slept more.", "In 2019, California became the first state to pass a law requiring most public high schools to start at 8:30 a.m. or later."], a: [2],
      why: "This sentence directly addresses the worry that students would just stay up later." },
    { t: "ebsr",
      A: { q: "Why does the author include paragraph 5?", opts: ["To prove that later start times never work", "To acknowledge counterclaims about later start times and then respond to them", "To describe how melatonin works", "To tell a story about one family"], a: 1 },
      B: { q: "Which sentence from paragraph 5 <b>best</b> supports your answer to Part A?", opts: ["“Not everyone supports the change.”", "“Some districts must rearrange bus routes, which can cost money.”", "“These are real challenges, but supporters argue that they can be solved with planning, while a teenager’s biology cannot be rescheduled.”", "“Parents who leave early for work may struggle to get younger children to school.”"], a: 2 },
      why: "The author lists the challenges, then responds with a rebuttal: problems can be planned around, but biology cannot." },
    { t: "multi", need: 2, q: "Which <b>two</b> challenges of later start times does the author mention?", opts: ["Sports practices and jobs move into the evening.", "Students sleep too much.", "Bus routes may need to change, which can cost money.", "Teachers refuse to teach later.", "Melatonin stops being released."], a: [0, 2], why: "Both appear in paragraph 5." },
    { t: "mc", q: "Which <b>best</b> describes how the article is organized?", opts: ["Problem and solution, with a response to objections", "Chronological order of one student’s day", "Compare and contrast of two cities", "A list of unrelated facts"], a: 0, why: "The author explains a problem (the teen clock vs. early starts), a solution (later starts), and objections with a response." },
    { t: "write", q: "<b>Brief write.</b> What is the author’s claim about school start times, and how does the author support it? Use <b>at least two pieces of evidence</b> from the article.", min: 40,
      checks: [
        { label: "States the author’s claim (schools should start later / later starts help teens)", re: /start (school )?later|later start|start times? (should|help|are better)|8:30|later school/i },
        { label: "Uses at least two pieces of evidence (science, data, or laws)", re: /circadian|melatonin|two hours|8 to 10|8-10|eight to ten|seven hours|seattle|34|thirty.four|academy|pediatrics|california|law|2019|2016|median|figure/i, min: 2 },
        { label: "Explains how the evidence supports the claim", re: /because|shows|proves|this means|which|so that|since|supports|as a result/i }
      ],
      rubric: "2 points: states the claim and explains how two pieces of evidence support it. 1 point: states the claim with weak or general support. 0 points: no clear claim.",
      model: "The author claims that high schools should start later because teens’ body clocks shift during puberty. The article explains that teens release melatonin up to two hours later, so they cannot easily fall asleep early. The author also uses Seattle’s results: after start times moved to 8:45, students slept 34 more minutes a night. This evidence shows that later starts help teens get the sleep they need." }
  ]
});

RC["ela-revise"] = Object.assign({}, CA, {
  subject: "ELA", mins: 15,
  title: "Claim 2 Writing: Revise and Edit",
  blurb: "Improve a student’s argument draft: transitions, irrelevant sentences, grammar, punctuation, formal style, and a conclusion.",
  eq: "How do strong writers revise for clarity, organization, and formal style?",
  target: "I can revise a draft for organization, evidence, formal style, and correct grammar and punctuation.",
  sources: [
    { tab: "Student Draft", title: "Student Draft: Every High School Needs a Garden", blocks: [
      { box: "A student wrote this argument for the school newspaper. Read it and help revise it. Sentences are numbered.", n: false },
      { html: draftHTML(["Every high school in California should have a community garden.", "A garden gives students a place to learn science outside of the classroom.", "For example, students can test soil, measure plant growth, and study how insects pollinate crops.", "Gardens also improve students’ health.", "According to a survey by our school nutrition team, students who grew vegetables were more likely to eat vegetables at lunch."]) },
      { html: draftHTML(["My cousin hates broccoli, but she will eat pizza any day of the week.", "A garden can bring people together.", "Parents, teachers, and neighbors can work side by side on weekends.", "Some people say a garden costs too much money.", "However, many local businesses donate seeds and tools, and the produce can be sold to raise money."].map((t, i) => t)).replace(/<span class="sn rc-noann">(\d+)<\/span>/g, (m, n) => `<span class="sn rc-noann">${+n + 5}</span>`) },
      { html: draftHTML(["Each of the students in our garden club have a job, and the club keeps their tools in a locked shed.", "The club grew three crops tomatoes, peppers, and lettuce.", "Gardens are super cool and everyone should totally do it."]).replace(/<span class="sn rc-noann">(\d+)<\/span>/g, (m, n) => `<span class="sn rc-noann">${+n + 10}</span>`) }
    ]}
  ],
  qs: [
    { t: "mc", q: "The writer wants to add a transition to the beginning of sentence 7 to connect it to the ideas before it. Which is the <b>best</b> choice?", opts: ["However,", "In addition,", "As a result,", "For instance,"], a: 1, why: "Sentence 7 adds another benefit (bringing people together), so “In addition” fits. “However” signals a contrast." },
    { t: "hot", q: "Click the sentence that does <b>not</b> support the writer’s claim and should be deleted.",
      text: ["(4) Gardens also improve students’ health.", "(5) According to a survey by our school nutrition team, students who grew vegetables were more likely to eat vegetables at lunch.", "(6) My cousin hates broccoli, but she will eat pizza any day of the week.", "(8) Parents, teachers, and neighbors can work side by side on weekends."], a: [2],
      why: "Sentence 6 is an off-topic personal detail that does not support the argument for gardens." },
    { t: "inline", q: "Choose the correct words to fix sentence 11.", text: "Each of the students in our garden club [[]] a job, and the club keeps [[]] tools in a locked shed.",
      blanks: [{ opts: ["have", "has", "having"], a: 1 }, { opts: ["their", "its", "it’s"], a: 1 }],
      why: "“Each” is singular, so it takes “has.” “The club” is singular, so it takes “its” (no apostrophe; “it’s” means “it is”)." },
    { t: "inline", q: "Choose the punctuation that correctly completes sentence 12.", text: "The club grew three crops[[]] tomatoes, peppers, and lettuce.",
      blanks: [{ opts: [": (colon)", "; (semicolon)", ", (comma)", "no punctuation"], a: 0 }], why: "A colon introduces a list after a complete sentence." },
    { t: "mc", q: "Which revision of sentence 13 <b>best</b> maintains a formal style?", opts: ["Gardens are super cool, and everyone should totally do it!", "For these reasons, a community garden would be a valuable addition to every high school.", "I think gardens are kind of awesome, honestly.", "So yeah, get a garden."], a: 1, why: "It avoids slang (“super cool,” “totally”) and restates the claim clearly." },
    { t: "mc", q: "What is the <b>best</b> way to combine sentences 7 and 8?", opts: ["A garden can bring people together, parents, teachers, and neighbors can work side by side on weekends.", "A garden can bring people together as parents, teachers, and neighbors work side by side on weekends.", "A garden can bring people together and parents and teachers and neighbors work side by side.", "Bringing people together, weekends are when parents work."], a: 1,
      why: "Choice B joins the ideas correctly. Choice A is a comma splice, C is wordy, and D changes the meaning." },
    { t: "mc", q: "What is the purpose of sentences 9 and 10?", opts: ["To introduce the writer’s claim", "To address a counterclaim and respond to it", "To give an example of a science lesson", "To summarize the whole essay"], a: 1, why: "Sentence 9 gives an opposing view (cost), and sentence 10 rebuts it (donations and sales)." },
    { t: "write", q: "<b>Brief write.</b> Write a new conclusion (2–3 sentences) for the essay. Restate the claim in formal language and leave the reader with a final thought.", min: 20,
      checks: [
        { label: "Restates the claim about school gardens", re: /garden/i },
        { label: "Connects to a reason from the essay (learning, health, community, or cost)", re: /science|learn|health|eat|vegetable|communit|together|neighbor|parent|cost|money|donat/i },
        { label: "Uses formal language (no slang like “super,” “totally,” “cool,” “yeah”)", re: /\b(super|totally|cool|yeah|awesome|kinda|gonna|stuff)\b/i, not: true },
        { label: "Has at least two sentences", re: /[.!?](\s|$)/, min: 1 }
      ],
      rubric: "2 points: restates the claim formally, connects to the reasons, and ends with a final thought. 1 point: restates the claim but is informal or underdeveloped. 0 points: off topic.",
      model: "A community garden would help students learn science, eat healthier food, and connect with their neighbors. Because local businesses can donate supplies, the cost is manageable. Every high school should plant a garden and give students the chance to grow both food and knowledge." }
  ]
});

RC["ela-research"] = Object.assign({}, CA, {
  subject: "ELA", mins: 15,
  title: "Claim 4 Research: Evaluating Sources",
  blurb: "Judge credibility, match information to sources, separate fact from opinion, and explain which source is most useful.",
  eq: "How do researchers decide which sources to trust and use?",
  target: "I can evaluate the credibility and relevance of sources and select evidence that supports a claim.",
  sources: [
    { tab: "Source 1", title: "Source 1: Blog Post, “Why Our Family Loves the Four-Day Week”", numbered: true, blocks: [
      { box: "A parent wrote this post on a personal blog. (Written for this practice set; the people are fictional.)" },
      { p: "Our district switched to a four-day school week last year, and honestly, it is the best decision the school board has ever made. My son finally has time for doctor appointments without missing class." },
      { p: "On Fridays, he volunteers at the animal shelter, and my daughter works extra shifts at her job. Everyone in our neighborhood seems happier. I think every district in the state should copy us." },
      { p: "Of course, I have to pay a babysitter for my youngest on Fridays, which costs about $60 a week. But it is worth it." }
    ]},
    { tab: "Source 2", title: "Source 2: Research Summary from a State Education Research Center", numbered: true, blocks: [
      { box: "This summary compares districts that use four-day weeks with similar districts that use five-day weeks. (Written for this practice set; the data are simplified.)" },
      { p: "Researchers studied 40 rural school districts over five years. Twenty districts used a four-day week and twenty similar districts used a traditional five-day week." },
      { table: { cap: "Table 1. Average results over five years.", head: ["Measure", "Four-day districts", "Five-day districts"], rowHead: true, rows: [["Student attendance rate", "94%", "94%"], ["Teacher job applications per opening", "12", "9"], ["Change in math test scores", "−2 percentile points", "0 (no change)"], ["Change in reading test scores", "−1 percentile point", "0 (no change)"]] } },
      { p: "The four-day districts attracted more teacher applicants, which may help small districts fill jobs. However, students in these districts showed slightly lower growth in math and reading. The researchers recommend that districts considering a four-day week plan extra learning time on the fifth day." }
    ]},
    { tab: "Source 3", title: "Source 3: District FAQ, “Planning for a Four-Day Week”", numbered: true, blocks: [
      { box: "A school district posted this page for families. (Written for this practice set.)" },
      { p: "<b>What will students do on Fridays?</b> The district will offer optional Friday tutoring and enrichment programs from 8:00 a.m. to 12:00 p.m. Space is limited." },
      { p: "<b>What about child care?</b> Families with younger children may need to arrange child care on Fridays. The district is partnering with the city recreation department to offer a low-cost program." },
      { p: "<b>Will the school day be longer?</b> Yes. Monday through Thursday, the school day will be about 70 minutes longer to meet state instructional time requirements." }
    ]}
  ],
  qs: [
    { t: "mc", q: "A student is writing a report about how four-day school weeks affect <b>student achievement</b>. Which source is the <b>most credible</b> for this topic?", opts: ["Source 1, because the author is a parent with children in school", "Source 2, because it compares data from many districts over several years", "Source 3, because it is posted by a school district", "All three sources are equally credible on this topic"], a: 1,
      why: "Source 2 uses data from 40 districts over five years and compares four-day and five-day districts. Source 1 is a personal opinion, and Source 3 is about logistics, not achievement." },
    { t: "grid", q: "Which source gives each piece of information?", cols: ["Source 1", "Source 2", "Source 3"],
      rows: [["One family’s personal experience", 0], ["A comparison of test score changes", 1], ["The length of the school day Monday–Thursday", 2], ["Teacher job applications per opening", 1], ["Plans for Friday tutoring", 2]],
      why: "Source 1 is a personal blog, Source 2 has the research data, and Source 3 explains the district’s plans." },
    { t: "mc", q: "Which claim is <b>best</b> supported by Source 2?", opts: ["Four-day weeks greatly improve test scores.", "Four-day weeks may help districts hire teachers but can slightly lower test score growth.", "Four-day weeks make students attend school less often.", "Every district should switch to a four-day week."], a: 1, why: "Table 1: more applicants (12 vs. 9) but lower math (−2) and reading (−1) growth, with the same attendance." },
    { t: "hot", q: "Click the <b>two</b> sentences from Source 1 that are <b>opinions</b> rather than facts.",
      text: ["Our district switched to a four-day school week last year.", "It is the best decision the school board has ever made.", "On Fridays, he volunteers at the animal shelter.", "Everyone in our neighborhood seems happier.", "I have to pay a babysitter for my youngest on Fridays, which costs about $60 a week."], a: [1, 3],
      why: "“The best decision” and “everyone seems happier” are judgments that cannot be proven. The others can be checked." },
    { t: "multi", need: 2, q: "A student’s claim is: <i>“Four-day weeks can create challenges for some families.”</i> Which <b>two</b> pieces of evidence <b>best</b> support this claim?", opts: ["A parent pays about $60 a week for a Friday babysitter (Source 1).", "Teacher applications rose from 9 to 12 per opening (Source 2).", "Families with younger children may need to arrange child care on Fridays (Source 3).", "Attendance stayed at 94% (Source 2).", "Students volunteer at an animal shelter on Fridays (Source 1)."], a: [0, 2],
      why: "Both describe a cost or burden for families. The other choices are neutral or positive." },
    { t: "mc", q: "The student wants to find more information about student achievement. Which search is <b>most</b> likely to find useful, credible sources?", opts: ["four day week fun", "why I love four day school weeks blog", "four-day school week effects on student achievement study", "best babysitters near me"], a: 2, why: "Specific key words like “effects,” “student achievement,” and “study” point to research." },
    { t: "write", q: "<b>Brief write.</b> Which source, Source 1 or Source 2, is more useful for a research report about student achievement? Give <b>two reasons</b> and refer to the sources.", min: 35,
      checks: [
        { label: "Chooses a source (Source 2 is the strongest choice)", re: /source 2|second source|research (summary|center)|study/i },
        { label: "Gives at least two reasons (data, many districts, comparison, opinion, bias)", re: /data|evidence|40|forty|districts|five years|compar|test scores?|percent|opinion|bias|personal|one family|not proven|research/i, min: 2 },
        { label: "Explains why the reasons matter", re: /because|so|which|this means|shows|while|whereas|instead/i }
      ],
      rubric: "2 points: chooses a source and supports the choice with two clear reasons tied to the sources. 1 point: chooses a source with one reason or vague reasons. 0 points: no reasoning.",
      model: "Source 2 is more useful because it uses data from 40 districts over five years and compares four-day and five-day schools, so it shows real effects on test scores. Source 1 is one parent’s opinion, and it does not include any achievement data, so it may be biased." }
  ]
});

RC["ela-listening"] = Object.assign({}, CA, {
  subject: "ELA", mins: 15,
  title: "Claim 3 Listening: A Talk About Urban Heat",
  blurb: "Listen to a short presentation (read aloud by the computer), then answer questions about main idea, details, and reasoning.",
  eq: "How do speakers use evidence and reasoning to persuade an audience?",
  target: "I can determine a speaker’s main idea, purpose, and supporting evidence from a presentation.",
  sources: [
    { tab: "Listen", title: "Presentation: Cool Streets", blocks: [
      { box: "A city planner gives this presentation at a city council meeting. Press <b>▶ Play</b> to listen. You may take notes on the side or in the transcript." },
      { listen: [
        "Good evening, council members. Tonight I want to talk about something you have all felt but might not have noticed: some neighborhoods in our city are hotter than others.",
        "Scientists call this the urban heat island effect. Roads, roofs, and parking lots absorb the sun’s heat during the day and release it slowly at night. According to the Environmental Protection Agency, daytime temperatures in cities can be about one to seven degrees Fahrenheit higher than in nearby rural areas. At night, the difference can be two to five degrees.",
        "That may not sound like much, but on a 105-degree day, a few degrees can mean the difference between an uncomfortable afternoon and a trip to the emergency room. Heat is one of the deadliest kinds of weather in the United States.",
        "Fortunately, there is a simple tool that fights heat: trees. Trees cool streets in two ways. First, they provide shade. The EPA reports that shaded surfaces can be 20 to 45 degrees cooler than the peak temperatures of unshaded surfaces. Second, trees release water vapor through their leaves, a process called evapotranspiration, which cools the air around them.",
        "Here is the problem. When our department mapped the city’s tree cover, we found that neighborhoods with lower incomes have far fewer trees than wealthier neighborhoods. The people with the fewest trees are often the ones least able to afford air conditioning.",
        "That is why I am asking the council to fund the Cool Streets Program, which would plant 5,000 trees over five years, starting in the neighborhoods with the least shade. Trees take time to grow, so the best time to start is now. Thank you."
      ], title: "Cool Streets (about 2 minutes)" },
      { src: "Presentation written for this practice set. Temperature figures are from the U.S. Environmental Protection Agency’s heat island resources." }
    ]}
  ],
  qs: [
    { t: "mc", q: "What is the speaker’s <b>main</b> purpose?", opts: ["To explain how air conditioners work", "To persuade the city council to fund tree planting in neighborhoods with the least shade", "To describe the history of the city", "To complain about the weather"], a: 1, why: "The speaker ends by asking the council to fund the Cool Streets Program." },
    { t: "mc", q: "According to the speaker, what causes the urban heat island effect?", opts: ["Too many trees in the city", "Roads, roofs, and parking lots absorbing heat and releasing it slowly", "Wind blowing hot air from the desert", "People using too much air conditioning"], a: 1, why: "The speaker explains that paved surfaces and roofs absorb heat during the day." },
    { t: "multi", need: 2, q: "Which <b>two</b> ways do trees cool streets, according to the presentation?", opts: ["They provide shade.", "They block the wind.", "They release water vapor through their leaves.", "They absorb car exhaust.", "They reflect sunlight off their bark."], a: [0, 2], why: "Shade and evapotranspiration are the two ways the speaker names." },
    { t: "mc", q: "According to the EPA figures in the talk, how much cooler can shaded surfaces be than unshaded surfaces at their peak?", opts: ["1 to 7 degrees", "2 to 5 degrees", "20 to 45 degrees", "105 degrees"], a: 2, why: "1–7 and 2–5 degrees describe city vs. rural air temperatures, not shaded surfaces." },
    { t: "ebsr",
      A: { q: "Why does the speaker want to start planting in neighborhoods with the least shade?", opts: ["Those neighborhoods asked first.", "Residents there have fewer trees and are often less able to afford air conditioning.", "Trees grow faster in those neighborhoods.", "Those neighborhoods are the coolest."], a: 1 },
      B: { q: "Which statement from the presentation <b>best</b> supports your answer to Part A?", opts: ["“Heat is one of the deadliest kinds of weather in the United States.”", "“The people with the fewest trees are often the ones least able to afford air conditioning.”", "“Trees take time to grow, so the best time to start is now.”", "“Roads, roofs, and parking lots absorb the sun’s heat during the day.”"], a: 1 },
      why: "The speaker connects tree cover to income and the ability to afford air conditioning." },
    { t: "mc", q: "Why does the speaker mention a “105-degree day”?", opts: ["To show that a few degrees of extra heat can be dangerous", "To predict tomorrow’s weather", "To prove that trees grow best in heat", "To compare the city to a desert"], a: 0, why: "The example shows why a difference of a few degrees matters for health." },
    { t: "grid", q: "Is each statement supported by the presentation?", cols: ["Supported", "Not supported"],
      rows: [["Cities can be warmer than nearby rural areas.", 0], ["Every neighborhood in the city has the same number of trees.", 1], ["The program would plant 5,000 trees over five years.", 0], ["Trees cool the air only at night.", 1]],
      why: "The speaker says lower-income neighborhoods have fewer trees and that trees cool through shade and water vapor, not only at night." }
  ]
});
