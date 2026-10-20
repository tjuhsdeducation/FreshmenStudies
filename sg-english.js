/* =====================================================================
   ✏️ UNIT STUDY GUIDES: ENGLISH 1 + ENGLISH 2
   Opens at study-guide.html?id=THE-ID
     sg-eng1-story     Short Story Elements: Plot, Conflict & Character
     sg-eng1-figlang   Figurative Language & Poetry
     sg-eng2-rhetoric  Rhetoric: Ethos, Pathos, Logos & the Rhetorical Situation
     sg-eng2-argument  Argument Writing: Claims, Evidence & Counterclaims
   Each guide: Key Ideas (vocab + examples), a Text tab to annotate, and a
   🔬 Simulation tab (plot mountain or sorting game). Not graded: the sims.
   Graded: the questions on the right (see rc-history.js and
   rc-caaspp-ela.js for the question formats).
   Passages: the short story, the poem "Tule Fog, Highway 99," and the
   argument essay were written for this site. The Dickinson (1891 printing),
   Hughes (1923), and Lincoln (Bliss copy, 1864) texts are public domain.
   The sources cited in the argument essay are SAMPLE sources made up for
   practice. They are not real.
   ===================================================================== */

/* ---------- diagrams (prefixed SGE_ so names never clash with other guide files) ---------- */
const SGE_PLOT = `<svg class="dg" viewBox="0 0 640 250" role="img" aria-label="Plot mountain. The line starts low at exposition, climbs through rising action to the climax at the peak, drops through falling action, and levels off at the resolution.">
  <path d="M20 210 L110 200 L320 46 L480 165 L620 175" class="ink" stroke-width="3"/>
  <circle cx="80" cy="203" r="8" class="f1"/><text x="80" y="232" text-anchor="middle" class="t">1. Exposition</text><text x="80" y="246" text-anchor="middle" class="tm">characters, setting, background</text>
  <circle cx="215" cy="123" r="8" class="f2"/><text x="170" y="112" text-anchor="end" class="t">2. Rising action</text><text x="170" y="128" text-anchor="end" class="tm">conflict builds, tension grows</text>
  <circle cx="320" cy="46" r="9" class="f3"/><text x="320" y="24" text-anchor="middle" class="t">3. Climax</text><text x="352" y="52" class="tm">turning point, highest tension</text>
  <circle cx="400" cy="106" r="8" class="f4"/><text x="430" y="100" class="t">4. Falling action</text><text x="430" y="116" class="tm">results of the climax</text>
  <circle cx="560" cy="171" r="8" class="f1"/><text x="560" y="200" text-anchor="middle" class="t">5. Resolution</text><text x="560" y="216" text-anchor="middle" class="tm">conflict settled, new normal</text>
</svg>`;

const SGE_TRIANGLE = `<svg class="dg" viewBox="0 0 640 300" role="img" aria-label="The rhetorical triangle. Top corner: Speaker, linked to ethos, or credibility. Bottom left: Audience, linked to pathos, or emotion. Bottom right: Message, linked to logos, or logic. The context, or occasion, surrounds the whole triangle.">
  <rect x="8" y="8" width="624" height="284" rx="16" class="soft"/>
  <text x="24" y="32" class="tm">CONTEXT / OCCASION: the time, place, and situation around the whole triangle</text>
  <polygon points="320,58 140,250 500,250" class="c1" opacity=".85"/>
  <circle cx="320" cy="58" r="10" class="f2"/><text x="340" y="56" class="t">SPEAKER</text><text x="340" y="73" class="tm">ETHOS: credibility, character</text>
  <circle cx="140" cy="250" r="10" class="f3"/><text x="140" y="280" text-anchor="middle" class="t">AUDIENCE</text><text x="64" y="232" text-anchor="middle" class="tm">PATHOS:</text><text x="64" y="247" text-anchor="middle" class="tm">emotion, values</text>
  <circle cx="500" cy="250" r="10" class="f4"/><text x="500" y="280" text-anchor="middle" class="t">MESSAGE</text><text x="574" y="232" text-anchor="middle" class="tm">LOGOS:</text><text x="574" y="247" text-anchor="middle" class="tm">logic, evidence</text>
  <text x="320" y="190" text-anchor="middle" class="t">PURPOSE</text><text x="320" y="207" text-anchor="middle" class="tm">What does the speaker want?</text>
</svg>`;

const SGE_ARG = `<svg class="dg" viewBox="0 0 640 260" role="img" aria-label="An argument drawn as a building. The roof is the claim. Two pillars hold it up: evidence and reasoning. A side wall is the counterclaim, answered by the rebuttal. Credible sources are the foundation.">
  <polygon points="80,80 320,16 560,80" class="c3"/><text x="320" y="62" text-anchor="middle" class="t">CLAIM: your position (the roof)</text>
  <rect x="110" y="88" width="140" height="120" rx="6" class="c1"/><text x="180" y="138" text-anchor="middle" class="t">EVIDENCE</text><text x="180" y="156" text-anchor="middle" class="tm">facts, data, quotes,</text><text x="180" y="171" text-anchor="middle" class="tm">examples</text>
  <rect x="270" y="88" width="140" height="120" rx="6" class="c2"/><text x="340" y="138" text-anchor="middle" class="t">REASONING</text><text x="340" y="156" text-anchor="middle" class="tm">explains HOW the</text><text x="340" y="171" text-anchor="middle" class="tm">evidence proves the claim</text>
  <rect x="430" y="88" width="120" height="120" rx="6" class="c4"/><text x="490" y="128" text-anchor="middle" class="t">COUNTER-</text><text x="490" y="144" text-anchor="middle" class="t">CLAIM +</text><text x="490" y="160" text-anchor="middle" class="t">REBUTTAL</text><text x="490" y="180" text-anchor="middle" class="tm">answer the</text><text x="490" y="195" text-anchor="middle" class="tm">other side</text>
  <rect x="70" y="214" width="500" height="34" rx="6" class="soft"/><text x="320" y="236" text-anchor="middle" class="t">FOUNDATION: credible, current, relevant sources</text>
</svg>`;

/* line-numbered poem helper: lines -> HTML with small line numbers */
const SGE_POEM = (lines, start) => lines.map((l, i) => l === "" ? "<br>" : `<span class="rc-noann" style="display:inline-block;width:2em;opacity:.55;font-size:.85em">${(start || 1) + lines.slice(0, i).filter(x => x !== "").length}</span>${l}<br>`).join("");

/* =========================== ENGLISH 1 =========================== */

RC["sg-eng1-story"] = {
  subject: "English 1", mins: 25,
  title: "Short Story Elements: Plot, Conflict & Character",
  blurb: "Map the plot of a Central Valley short story, name its conflicts, read its characters, and state its theme.",
  eq: "How do plot, conflict, and character work together to reveal a story’s theme?",
  target: "I can identify plot stages, types of conflict, direct and indirect characterization, point of view, and theme in a short story, and support my answers with text evidence.",
  sources: [
    { tab: "Key Ideas", title: "The Building Blocks of a Short Story", numbered: true, blocks: [
      { p: "Every short story is built from the same parts. When you can name the parts, you can explain <i>how</i> a story works, not just <i>what</i> happens." },
      { h: "Plot: the order of events" },
      { p: "<b>Plot</b> is the sequence of events in a story. Many stories follow a shape called the <b>plot mountain</b> (also called Freytag’s pyramid). The tension climbs, reaches a peak, and then comes down." },
      { fig: SGE_PLOT, cap: "Figure 1. The plot mountain. The <b>inciting incident</b> is the event that starts the main conflict, at the beginning of the rising action." },
      { vocab: [
        ["exposition", "The beginning. Introduces the characters, the setting (time and place), and background information."],
        ["inciting incident", "The event that starts the main conflict and kicks off the rising action."],
        ["rising action", "Events that build tension as the character tries to deal with the conflict."],
        ["climax", "The turning point: the moment of highest tension, when the character makes a key choice or the conflict is faced head-on."],
        ["falling action", "Events that show the results of the climax. Tension goes down."],
        ["resolution", "The ending. The conflict is settled and loose ends are tied up."]
      ]},
      { h: "Conflict: the struggle" },
      { p: "<b>Conflict</b> is a struggle between opposing forces. Without conflict, there is no story. An <b>internal conflict</b> happens inside a character’s mind (person vs. self). An <b>external conflict</b> is a struggle with an outside force." },
      { table: { cap: "Table 1. Types of conflict.", head: ["Type", "Internal or external?", "Example"], rowHead: true, rows: [
        ["Person vs. self", "Internal", "A student wants to join the soccer team but is afraid of failing."],
        ["Person vs. person", "External", "Two friends compete for the same job at the fruit stand."],
        ["Person vs. nature", "External", "A family fights to save its crops from a freeze."],
        ["Person vs. society", "External", "A teen protests a school rule she believes is unfair."],
        ["Person vs. technology", "External", "A student’s laptop crashes the night before a project is due."]
      ]}},
      { h: "Characterization: how we learn about characters" },
      { p: "<b>Direct characterization</b> is when the narrator <i>tells</i> you a trait: “Ana was generous.” <b>Indirect characterization</b> is when the writer <i>shows</i> a trait and lets you figure it out. Use <b>STEAL</b> to find indirect characterization:" },
      { table: { cap: "Table 2. STEAL: five ways writers show character.", head: ["Letter", "Look at the character’s…", "Example"], rowHead: true, rows: [
        ["S", "Speech: what the character says and how", "“Leave it. I’ll fix it myself.” (stubborn, independent)"],
        ["T", "Thoughts and feelings", "She hoped no one would notice her shaking hands. (nervous)"],
        ["E", "Effect on others", "The little kids ran to hug him when he arrived. (kind, loved)"],
        ["A", "Actions", "He gave his last dollar to the man at the bus stop. (generous)"],
        ["L", "Looks: appearance", "Her backpack was covered in neatly labeled folders. (organized)"]
      ]}},
      { h: "Point of view: who tells the story" },
      { vocab: [
        ["first person", "The narrator is a character in the story and uses “I” and “we.”"],
        ["third-person limited", "An outside narrator uses “he,” “she,” and “they” and shares the thoughts of only <b>one</b> character."],
        ["third-person omniscient", "An all-knowing outside narrator shares the thoughts of <b>many</b> characters."]
      ]},
      { h: "Theme vs. topic" },
      { p: "A <b>topic</b> is a word or phrase that names what a story is about, such as “family” or “courage.” A <b>theme</b> is the message or lesson about life that the story shows. A theme is a <b>complete sentence</b>, and it applies to people in general, not just the characters." },
      { box: "<b>Worked example:</b> Topic: <i>family</i>. ❌ Not a theme: “Family.” ❌ Not a theme: “Lupe helps her family.” (That is a plot summary.) ✅ Theme: “Taking care of family sometimes means letting family take care of you.”<br><b>Tip:</b> To find a theme, ask: <i>How does the main character change, and what lesson does that change teach?</i>" }
    ]},
    { tab: "Text", title: "The Frost Shift", numbered: true, blocks: [
      { p: "The frost warning came at 6:14 p.m., a red banner across Lupe Arriaga’s phone: <i>Tulare County: temperatures near 27 degrees overnight.</i> Lupe was fifteen, and she was a planner, the kind of person who made lists for her lists. Tonight’s list had one item on it: <i>Sleep. Science fair, 8 a.m., Fresno.</i>" },
      { p: "Outside the kitchen window, her family’s twenty acres of navel oranges stood in dark, tidy rows below the Sierra foothills. The fruit was almost ready to pick. One hard freeze could turn a whole year of work into mush." },
      { p: "“Wind machine at midnight, water at one,” Grandpa Tito said, lowering himself into his chair with a wince. He had hurt his back moving irrigation pipe the week before. “I’ll take the first shift.”" },
      { p: "“You can’t even bend over,” Lupe said. “I’ll do it.” She did not mention the science fair. Her project, a homemade frost alarm built from a cheap sensor and a borrowed circuit board, was already packed in a shoebox by the door. If she told them, Grandpa would insist on staying up himself, and that was the last thing his back needed." },
      { p: "Her older brother, Marco, only shrugged from the couch. Since he had dropped out of community college, he and Lupe barely talked. Last spring she had called him lazy, and he had never forgotten it." },
      { p: "By one o’clock the air was so cold it hurt her teeth. Lupe walked the rows with a flashlight, checking the thermometer nailed to a post: 31 degrees. The giant fan of the wind machine thumped overhead, pulling down the slightly warmer air that floated above the trees. Water hissed from the sprinklers, because wet ground holds and releases more heat than dry ground." },
      { p: "At 2:40 the thermometer read 29. At 3:05 the hissing stopped." },
      { p: "Lupe ran to the pump. The motor was silent, and a red light blinked on the control box. She pressed the reset button. Nothing. She pressed it again. Her hands were shaking, partly from the cold and partly from the thought of telling Grandpa that she had lost the crop. <i>I can fix this myself,</i> she thought. <i>I have to.</i>" },
      { p: "She couldn’t. After ten minutes she stood in the dark, breathing clouds of fog, and finally did the thing she hated most. She went inside and shook her brother awake." },
      { p: "Marco didn’t say a word. He pulled on his boots, grabbed a wrench, and followed her out. He knelt by the pump, cleared a clump of wet leaves from the intake screen, and flipped a breaker she hadn’t even known was there. The motor coughed and roared. Water hissed back into the rows." },
      { p: "“Why are you out here alone?” he asked." },
      { p: "So she told him about the fair, the shoebox, the 8 a.m. check-in. Marco stared at her. “You were going to skip it? For this?” He shook his head. “Go to sleep. I’ve got the rest of the night.”" },
      { p: "When the sun rose over the foothills, the thermometer read 34 degrees, and the oranges hung heavy and whole. Marco drove her to Fresno himself, the shoebox balanced on her lap." },
      { p: "At her table, a judge tapped the little frost alarm. “Have you tested it in real conditions?”" },
      { p: "Lupe smiled for the first time in two days. “Last night,” she said. “With some help.”" },
      { src: "Original story written for this study guide." }
    ]},
    { tab: "🔬 Simulation", title: "Map “The Frost Shift” on the Plot Mountain", blocks: [
      { box: "<b>Try this:</b> 1) Tap an event card from “The Frost Shift.” 2) Tap the stage of the plot mountain where it belongs. If you miss, read the hint and try again. 3) Find the <b>climax</b> first: which moment is Lupe’s big turning point? 4) When every card is placed, press <b>🥾 Hike the story</b> and watch the tension rise and fall. 5) Answer Question 6 on the right." },
      { sim: "plot", title: "Plot Mountain: The Frost Shift", tip: "The climax is the turning point, not just the scariest moment. Ask: when does Lupe make the choice that changes everything?",
        events: [
          { t: "Lupe, 15, lives on her family’s orange grove below the Sierra foothills.", s: 0, why: "This introduces the main character and the setting.", hint: "Does this event build tension, or does it set the scene?" },
          { t: "Grandpa Tito hurt his back moving irrigation pipe the week before.", s: 0, why: "This is background information we need to understand the problem.", hint: "This happened before the story begins. It is background." },
          { t: "Lupe and Marco barely talk since she called him lazy last spring.", s: 0, why: "This background sets up the tension between the siblings.", hint: "This describes a relationship that already exists when the story opens." },
          { t: "A frost warning arrives, and Lupe volunteers to guard the grove all night without mentioning the science fair.", s: 1, why: "This inciting incident starts the conflict: the frost, plus Lupe’s secret.", hint: "This starts the problem. Tension is beginning to climb." },
          { t: "At 2:40 a.m. the thermometer drops to 29 degrees.", s: 1, why: "The danger grows, so tension keeps rising.", hint: "The problem is getting worse, but nothing has turned yet." },
          { t: "The pump stops, and pressing the reset button does nothing.", s: 1, why: "A new complication pushes the tension even higher.", hint: "This is a complication that builds toward the turning point." },
          { t: "Lupe gives up doing it alone and wakes Marco, who gets the pump running again.", s: 2, why: "This is the turning point: Lupe asks for help, and the crisis is solved.", hint: "This is the moment everything turns. Is it the peak?" },
          { t: "Lupe tells Marco about the fair, and he takes the rest of the night shift.", s: 3, why: "This shows a result of the climax. The tension between them eases.", hint: "The big turning point already happened. This is a result of it." },
          { t: "At sunrise the thermometer reads 34 degrees, and the oranges are safe.", s: 3, why: "We see the outcome of the night. The danger is over.", hint: "The tension is coming down. This is an outcome, not the peak." },
          { t: "Lupe tells the judge she tested her alarm “last night, with some help.”", s: 4, why: "This ending ties up the story and shows how Lupe has changed.", hint: "This is the very end. The conflict is settled." }
        ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "The frost threatens to destroy the family’s orange crop. Which type of conflict is this?", opts: ["Person vs. self", "Person vs. society", "Person vs. nature", "Person vs. technology"], a: 2,
      why: "The freezing temperature is a force of nature, so this is an external conflict: person vs. nature. Person vs. self would be a struggle inside Lupe’s mind." },
    { t: "grid", ref: 2, q: "Is each conflict from “The Frost Shift” <b>internal</b> or <b>external</b>?", cols: ["Internal", "External"], rows: [
      ["Lupe struggles with whether to admit she needs help.", 0],
      ["Lupe fights to keep the oranges from freezing.", 1],
      ["Lupe and Marco have been in a cold standoff since she called him lazy.", 1],
      ["Lupe feels torn between her science fair and her duty to her family.", 0]
    ], why: "Internal conflicts happen inside a character’s mind (doubts, fears, hard choices). External conflicts are struggles with something outside the character, such as the weather or another person." },
    { t: "hot", ref: 2, q: "Click the sentence that uses <b>direct characterization</b> to describe Lupe.", text: [
      "The frost warning came at 6:14 p.m., a red banner across Lupe Arriaga’s phone.",
      "Lupe was fifteen, and she was a planner, the kind of person who made lists for her lists.",
      "She did not mention the science fair.",
      "Lupe walked the rows with a flashlight, checking the thermometer nailed to a post.",
      "Her hands were shaking, partly from the cold and partly from the thought of telling Grandpa that she had lost the crop."
    ], a: [1],
      why: "Direct characterization <i>tells</i> you a trait. The narrator states outright that Lupe is “a planner.” The other sentences show her actions or feelings, which is indirect characterization (or, in the first sentence, just plot information)." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> details are <b>indirect characterization</b> that show Lupe tries to handle everything by herself?", opts: [
      "She keeps the science fair a secret so Grandpa won’t stay up.",
      "The giant fan of the wind machine thumped overhead.",
      "She thinks, “I can fix this myself. I have to.”",
      "The oranges hung heavy and whole.",
      "Marco drove her to Fresno himself."
    ], a: [0, 2],
      why: "Her action (keeping the secret) and her thoughts (“I can fix this myself”) show, without saying it directly, that she tries to carry every burden alone. The other details describe the setting or other characters." },
    { t: "order", ref: 2, q: "Put these events from the story in the order they happen (first at the top).", items: [
      "Grandpa Tito says he will take the first shift.",
      "The thermometer drops to 29 degrees.",
      "The pump stops working.",
      "Marco clears the leaves and flips the breaker.",
      "Marco drives Lupe to Fresno."
    ], why: "Follow the story’s clock: the evening plan, the falling temperature at 2:40, the pump failure at 3:05, Marco’s repair, and the drive to Fresno the next morning." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Place the event “Lupe gives up doing it alone and wakes Marco, who gets the pump running again.” Which stage of the plot is it?", opts: ["Rising action", "Exposition", "Falling action", "Climax"], a: 3,
      why: "This is the turning point of the story. Lupe makes the key choice to ask for help, and the main crisis (the broken pump) is solved. After this, the tension goes down." },
    { t: "mc", ref: 2, q: "From what <b>point of view</b> is “The Frost Shift” told?", opts: ["First person, because Lupe says “I” in her thoughts", "Third-person limited, because the narrator shares only Lupe’s thoughts", "Third-person omniscient, because the narrator shares every character’s thoughts", "Second person, because the narrator speaks to “you”"], a: 1,
      why: "The narrator uses “she” and “he,” so it is third person. We hear only Lupe’s thoughts (“I can fix this myself”), never Marco’s or Grandpa’s, so it is limited. The italic thought is Lupe’s, but the narrator is not Lupe." },
    { t: "mc", ref: 2, q: "Why does the author include the detail that Lupe once called Marco lazy (paragraph 5)?", opts: ["It makes asking Marco for help harder for Lupe, which raises the tension.", "It explains how the wind machine works.", "It proves that Marco really is lazy.", "It shows that the story takes place in the spring."], a: 0,
      why: "Because of their past fight, waking Marco is “the thing she hated most.” This background makes Lupe’s choice more difficult and more meaningful. Marco’s actions later prove he is not lazy." },
    { t: "inline", ref: 1, q: "Complete the sentences about theme and topic.", text: "“Family” is a [[]] of the story. A theme must be written as [[]]. One theme of “The Frost Shift” is that [[]].", blanks: [
      { opts: ["theme", "topic", "climax"], a: 1 },
      { opts: ["a single word", "a complete sentence about life", "a summary of the plot"], a: 1 },
      { opts: ["oranges need water", "asking for help can be a sign of strength", "science fairs are stressful"], a: 1 }
    ], why: "A topic is just a word or phrase (family). A theme is a complete sentence that gives a lesson about life. Lupe learns that she does not have to do everything alone, so the theme is about the strength in asking for help." },
    { t: "ebsr", ref: 2,
      A: { q: "Which statement <b>best</b> expresses how Lupe changes by the end of the story?", opts: ["She decides that science fairs are not important.", "She becomes angry at her grandfather for getting hurt.", "She learns that accepting help does not make her weak.", "She realizes that she wants to become a farmer."], a: 2 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?", opts: ["“One hard freeze could turn a whole year of work into mush.”", "“Lupe smiled for the first time in two days. ‘Last night,’ she said. ‘With some help.’”", "“The motor coughed and roared.”", "“By one o’clock the air was so cold it hurt her teeth.”"], a: 1 },
      why: "At the start, Lupe hides her problem and tries to do everything alone. At the end she smiles and openly says she had “some help,” which shows she now sees accepting help as something to be proud of." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> State a theme of “The Frost Shift” as a complete sentence. Then explain how Lupe’s conflict and her change reveal that theme. Use <b>at least two details</b> from the story.", min: 45,
      checks: [
        { label: "States a theme about life (for example, about help, pride, family, or doing things alone)", re: /help|alone|ask(ing)?|pride|proud|depend|rely|together|trust|family|strength|strong|weak/i },
        { label: "Explains Lupe’s conflict or change", re: /conflict|change[sd]?|learn(s|ed)?|realiz|at first|in the beginning|at the end|by the end|before|after|decid/i },
        { label: "Uses at least two specific details from the story", re: /pump|marco|frost|freez|science fair|fair|thermometer|wrench|breaker|judge|shoebox|grandpa|tito|reset|oranges?|lazy|“|"/i, min: 2 }
      ],
      rubric: "2 points: states a theme as a complete sentence and explains it with Lupe’s conflict or change and two story details. 1 point: states a theme or explains the change, but with little support. 0 points: summarizes the plot only.",
      why: "A strong answer names a lesson about life (not just a topic like “family”), then traces Lupe’s change: she starts by hiding her problem and working alone, and ends by proudly admitting she had help. Specific details, like the broken pump and her words to the judge, prove the theme.",
      model: "A theme of the story is that asking for help can be a sign of strength, not weakness. At first, Lupe hides the science fair and tries to protect the oranges alone, even thinking, “I can fix this myself.” When the pump stops and the reset button fails, she finally wakes Marco, who fixes it with a wrench. By the end, she proudly tells the judge she tested her alarm “with some help,” which shows she has learned that accepting help made her stronger." }
  ]
};

RC["sg-eng1-figlang"] = {
  subject: "English 1", mins: 25,
  title: "Figurative Language & Poetry",
  blurb: "Spot similes, metaphors, personification, and more in poems by Dickinson, Hughes, and a Central Valley poet, then explain tone and mood.",
  eq: "How do poets use figurative language to create meaning, tone, and mood?",
  target: "I can identify figurative language and sound devices in poems and explain how they shape the poem’s meaning, tone, and mood.",
  sources: [
    { tab: "Key Ideas", title: "Saying More Than the Words Say", numbered: true, blocks: [
      { p: "<b>Literal language</b> means exactly what it says. <b>Figurative language</b> uses words in an unusual way to create a picture or a feeling. If someone says “My backpack weighs a ton,” they do not mean 2,000 pounds. They mean it is <i>very</i> heavy." },
      { h: "Comparisons and exaggerations" },
      { table: { cap: "Table 1. Four common types of figurative language.", head: ["Device", "What it does", "Clue", "Example"], rowHead: true, rows: [
        ["Simile", "Compares two unlike things", "Uses <b>like</b> or <b>as</b>", "The bus crawled up the hill <b>like</b> a tired turtle."],
        ["Metaphor", "Compares two unlike things by saying one <b>is</b> the other", "No “like” or “as”", "My little brother <b>is</b> a tornado in the kitchen."],
        ["Personification", "Gives human qualities or actions to something that is not human", "A non-human thing acts or feels like a person", "The old pickup truck <b>groaned</b> up the driveway."],
        ["Hyperbole", "Exaggerates on purpose for effect", "Impossible or extreme amounts", "I have told you <b>a million times</b>."]
      ]}},
      { p: "An <b>extended metaphor</b> is a metaphor that continues for several lines or a whole poem. Emily Dickinson compares hope to a bird for her entire poem." },
      { h: "Images, sounds, and symbols" },
      { vocab: [
        ["imagery", "Words that appeal to the five senses (sight, sound, smell, taste, touch). Example: “the sharp, sweet smell of orange blossoms.”"],
        ["alliteration", "Repeating the same beginning consonant sound in words close together. Example: “<b>s</b>oft, <b>s</b>ilver, <b>s</b>leepy, and <b>s</b>low.”"],
        ["symbolism", "Using an object, person, or event to stand for a bigger idea. Example: a sunrise often symbolizes hope or a new beginning."]
      ]},
      { h: "Tone vs. mood" },
      { p: "<b>Tone</b> is the <b>author’s or speaker’s attitude</b> toward the subject. <b>Mood</b> is the <b>feeling the reader gets</b> while reading. They are often similar, but they are not the same thing. Look at <b>diction</b> (word choice) and imagery to find both." },
      { table: { cap: "Table 2. Words for tone and mood.", head: ["Tone words (speaker’s attitude)", "Mood words (reader’s feeling)"], rows: [
        ["hopeful, serious, urgent, admiring, bitter, playful, sarcastic", "peaceful, gloomy, tense, joyful, eerie, lonely, inspired"]
      ]}},
      { box: "<b>Worked example:</b> “The fog rolls in like a slow gray tide.” <b>Device:</b> simile (uses “like”). <b>Meaning:</b> The fog moves slowly and covers everything, the way the ocean covers a beach. <b>Effect:</b> The words “slow” and “gray” create a heavy, gloomy mood.<br><b>Remember:</b> Naming the device is only step one. Always explain <i>what it suggests</i> and <i>how it makes the reader feel</i>." }
    ]},
    { tab: "Text", title: "Three Poems", blocks: [
      { h: "Poem 1: “Hope” by Emily Dickinson (first printed in 1891)" },
      { quote: "Hope is the thing with feathers<br>That perches in the soul,<br>And sings the tune without the words,<br>And never stops at all,<br><br>And sweetest in the gale is heard;<br>And sore must be the storm<br>That could abash the little bird<br>That kept so many warm.<br><br>I’ve heard it in the chillest land,<br>And on the strangest sea;<br>Yet, never, in extremity,<br>It asked a crumb of me.", by: "Emily Dickinson, <i>Poems: Second Series</i>, 1891" },
      { box: "<b>Words to know:</b> <b>gale</b> = a very strong wind. <b>sore</b> = severe, terrible. <b>abash</b> = to embarrass or make someone back down. <b>extremity</b> = a time of greatest danger or need." },
      { h: "Poem 2: “Dreams” by Langston Hughes (1923)" },
      { quote: "Hold fast to dreams<br>For if dreams die<br>Life is a broken-winged bird<br>That cannot fly.<br><br>Hold fast to dreams<br>For when dreams go<br>Life is a barren field<br>Frozen with snow.", by: "Langston Hughes, 1923" },
      { box: "<b>Words to know:</b> <b>hold fast</b> = hold on tightly. <b>barren</b> = empty; unable to grow anything." },
      { h: "Poem 3: “Tule Fog, Highway 99” (written for this study guide)" },
      { p: SGE_POEM([
        "The fog rolls in like a slow gray tide",
        "and swallows the orchards, row by row.",
        "The streetlights shiver on Highway 99,",
        "soft, silver, sleepy, and slow.",
        "",
        "My school bus is a whale in the milky deep,",
        "its headlights hunting through the white.",
        "I’ve stood at this corner a million years",
        "just waiting for one square of yellow light.",
        "",
        "Then the sun breaks through like a ringing bell,",
        "and the valley wakes up, gold and wide,",
        "and the fog lets go of everything",
        "it tried so hard to hide."
      ]), n: false },
      { box: "<b>Words to know:</b> <b>tule fog</b> (TOO-lee) = a thick ground fog that forms in California’s Central Valley in late fall and winter. It can make it hard to see more than a few feet." },
      { src: "Public-domain texts: Emily Dickinson (1891) and Langston Hughes (1923). “Tule Fog, Highway 99” is an original poem written for this site." }
    ]},
    { tab: "🔬 Simulation", title: "Sort the Figurative Language", blocks: [
      { box: "<b>Try this:</b> 1) Read the sentence on the card. 2) Look for the clue first: Is there a <b>like</b> or <b>as</b>? Does a non-human thing <b>act like a person</b>? Is something <b>impossibly extreme</b>? Does it say one thing <b>is</b> another? 3) Tap the bin. If you miss, read the hint. 4) Try to get all 12 right on the first try. 5) Answer Question 11 on the right." },
      { sim: "classify", title: "Simile, Metaphor, Personification, or Hyperbole?", tip: "Check for “like” or “as” first. If it’s there, it is probably a simile. If not, ask: is one thing called another thing (metaphor), or is a thing acting human (personification)?",
        cats: [
          { n: "Simile", d: "compares with like or as" },
          { n: "Metaphor", d: "says one thing IS another" },
          { n: "Personification", d: "a thing acts human" },
          { n: "Hyperbole", d: "extreme exaggeration" }
        ],
        items: [
          { t: "Her smile was as bright as the Fresno sun in July.", c: 0, why: "It compares a smile to the sun using “as.”", hint: "Look for the word “as.”" },
          { t: "The bus crawled up the hill like a tired turtle.", c: 0, why: "It compares the bus to a turtle using “like.”", hint: "Look for the word “like.”" },
          { t: "After the mile run, my legs felt like wet noodles.", c: 0, why: "It compares legs to noodles using “like.”", hint: "Is there a comparison word?" },
          { t: "My little brother is a tornado in the kitchen.", c: 1, why: "It says the brother IS a tornado, with no “like” or “as.”", hint: "There is no “like” or “as,” but two things are compared." },
          { t: "The classroom was a zoo after the fire drill.", c: 1, why: "It says the classroom WAS a zoo. That is a direct comparison.", hint: "The classroom is not literally a zoo. How is it being compared?" },
          { t: "Hope is a candle in a dark window.", c: 1, why: "It says hope IS a candle, a direct comparison without “like.”", hint: "Hope is being called something else." },
          { t: "The old pickup truck groaned up the driveway.", c: 2, why: "Trucks can’t groan like a tired person. The truck is given a human action.", hint: "Who usually groans?" },
          { t: "The wind whispered through the walnut trees.", c: 2, why: "Wind can’t whisper. Whispering is a human action.", hint: "Can wind really whisper?" },
          { t: "The cornfield waved at the cars on Highway 198.", c: 2, why: "Waving hello is a human action given to a field.", hint: "What does the cornfield do that a person does?" },
          { t: "I have told you a million times to clean your room.", c: 3, why: "No one has said something a million times. It is an exaggeration for effect.", hint: "Is this number realistic?" },
          { t: "This backpack weighs a ton.", c: 3, why: "A backpack can’t weigh 2,000 pounds. It is an exaggeration.", hint: "Could a backpack really weigh that much?" },
          { t: "I’m so tired I could sleep for a year.", c: 3, why: "Sleeping for a year is impossible. It exaggerates how tired the speaker is.", hint: "Is this possible, or extreme on purpose?" }
        ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "In “Hope,” Emily Dickinson compares hope to a bird throughout the <b>whole poem</b>. What is this device called?", opts: ["Simile", "Extended metaphor", "Hyperbole", "Alliteration"], a: 1,
      why: "She never uses “like” or “as.” She says hope IS “the thing with feathers” and keeps the comparison going (it perches, sings, keeps people warm) for all three stanzas, so it is an extended metaphor." },
    { t: "ebsr", ref: 2,
      A: { q: "What does Dickinson suggest about hope in the last stanza?", opts: ["Hope disappears when life gets difficult.", "Hope only lives in cold places.", "Hope is something you have to pay for.", "Hope stays with people in hard times and asks for nothing in return."], a: 3 },
      B: { q: "Which lines <b>best</b> support your answer to Part A?", opts: ["“And sings the tune without the words,”", "“I’ve heard it in the chillest land, / And on the strangest sea;”", "“Yet, never, in extremity, / It asked a crumb of me.”", "“That perches in the soul,”"], a: 2 },
      why: "Even in “extremity” (the worst times), the bird never asked for even “a crumb.” Hope gives comfort without taking anything. The “chillest land” lines show where hope is found, but not that it asks for nothing." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> lines from “Hope” suggest that hope is <b>strongest during hard times</b>?", opts: ["“And sweetest in the gale is heard;”", "“That perches in the soul,”", "“And sore must be the storm / That could abash the little bird”", "“And never stops at all,”", "“It asked a crumb of me.”"], a: [0, 2],
      why: "A “gale” is a fierce wind, yet hope sounds “sweetest” then. It would take a terrible (“sore”) storm to make the bird back down. Both lines show hope is strongest when life is stormy." },
    { t: "mc", ref: 2, q: "In “Dreams,” Hughes writes, “Life is a broken-winged bird / That cannot fly.” Which device is this?", opts: ["Simile", "Personification", "Metaphor", "Hyperbole"], a: 2,
      why: "It says life IS a broken-winged bird, without “like” or “as.” That is a metaphor. Notice that Hughes and Dickinson both use a bird, but Hughes’s bird is broken, showing what happens when dreams die." },
    { t: "mc", ref: 2, q: "Which word <b>best</b> describes the <b>tone</b> of “Dreams”?", opts: ["Playful and silly", "Angry and bitter", "Bored and uninterested", "Urgent and serious"], a: 3,
      why: "The speaker gives a command twice (“Hold fast to dreams”) and warns of serious losses (a bird that “cannot fly,” a field “frozen with snow”). That is an urgent, serious attitude, not a playful one." },
    { t: "grid", ref: 2, q: "Identify the device in each line from “Tule Fog, Highway 99.”", cols: ["Simile", "Metaphor", "Personification", "Hyperbole"], rows: [
      ["“The fog rolls in like a slow gray tide” (line 1)", 0],
      ["“My school bus is a whale in the milky deep” (line 5)", 1],
      ["“The streetlights shiver on Highway 99” (line 3)", 2],
      ["“I’ve stood at this corner a million years” (line 7)", 3]
    ], why: "Line 1 uses “like” (simile). Line 5 says the bus IS a whale (metaphor). Streetlights can’t shiver, a human action (personification). No one waits a million years (hyperbole)." },
    { t: "hot", ref: 2, q: "Click the <b>two</b> lines from “Tule Fog, Highway 99” that use <b>alliteration</b> most clearly.", text: [
      "The fog rolls in like a slow gray tide",
      "soft, silver, sleepy, and slow.",
      "I’ve stood at this corner a million years",
      "its headlights hunting through the white.",
      "just waiting for one square of yellow light.",
      "and the fog lets go of everything"
    ], a: [1, 3],
      why: "“Soft, silver, sleepy … slow” repeats the s sound four times, and “headlights hunting” repeats the h sound at the start of words next to each other. Repeating a beginning consonant sound is alliteration." },
    { t: "inline", ref: 1, q: "Complete the sentences about tone and mood.", text: "Tone is [[]]. Mood is [[]]. In the first two stanzas of “Tule Fog,” words like “gray,” “shiver,” and “waiting” create a [[]] mood.", blanks: [
      { opts: ["the feeling the reader gets", "the speaker’s attitude toward the subject", "the rhythm of the poem"], a: 1 },
      { opts: ["the feeling the reader gets", "the speaker’s attitude toward the subject", "the main lesson of the poem"], a: 0 },
      { opts: ["joyful and exciting", "gloomy and restless", "angry and violent"], a: 1 }
    ], why: "Tone belongs to the speaker (attitude). Mood belongs to the reader (feeling). Gray fog, shivering lights, and a long wait make the reader feel gloomy and restless, until the sun breaks through in the last stanza." },
    { t: "mc", ref: 2, q: "In the last stanza of “Tule Fog,” the sun breaks through and the valley “wakes up, gold and wide.” What does the sunlight most likely <b>symbolize</b>?", opts: ["Hope and a fresh start after a hard, uncertain time", "The danger of driving on Highway 99", "The speaker’s anger at the bus driver", "The end of the school year"], a: 0,
      why: "The fog stands for confusion and waiting, and the light ends both. Sunlight is a common symbol of hope and new beginnings, and the mood shifts from gloomy to bright." },
    { t: "hot", ref: 2, q: "Click the line from “Dreams” that shows what life becomes when dreams <b>go</b>, using an image of something that <b>cannot grow</b>.", text: [
      "Hold fast to dreams",
      "For if dreams die",
      "Life is a broken-winged bird",
      "That cannot fly.",
      "For when dreams go",
      "Life is a barren field"
    ], a: [5],
      why: "A “barren” field cannot grow anything. Hughes uses this image (and “Frozen with snow” in the next line) to show that life without dreams is empty and cold. The bird image belongs to the first stanza, when dreams “die.”" },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Sort the card “The wind whispered through the walnut trees.” Which bin is correct?", opts: ["Simile", "Personification", "Hyperbole", "Metaphor"], a: 1,
      why: "Wind cannot whisper. Whispering is a human action, so the sentence gives human qualities to the wind. There is no “like” or “as,” and it does not say the wind IS something else." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Choose <b>one</b> of the three poems. Identify <b>one</b> example of figurative language in it, quote it, and explain how it helps create the poem’s meaning, tone, or mood.", min: 40,
      checks: [
        { label: "Names a device (simile, metaphor, personification, hyperbole, imagery, alliteration, or symbol)", re: /simile|metaphor|personif|hyperbole|exaggerat|imagery|image|alliteration|symbol/i },
        { label: "Quotes or points to specific words from the poem", re: /“|"|feathers|bird|gale|storm|dream|barren|broken|fog|whale|tide|shiver|million|sun|line \d/i },
        { label: "Explains the effect on meaning, tone, or mood", re: /mood|tone|feel|shows?|suggests?|means?|meaning|creates?|helps?|emphasiz|reveals?/i }
      ],
      rubric: "2 points: names a device, quotes it, and explains how it creates meaning, tone, or mood. 1 point: names and quotes a device but explains its effect weakly. 0 points: no device or no explanation.",
      why: "Naming a device is only the first step. Full credit explains what the comparison suggests (for example, a barren field means an empty life) and how it makes the reader feel or shows the speaker’s attitude.",
      model: "In “Dreams,” Langston Hughes uses a metaphor when he says “Life is a barren field / Frozen with snow.” A barren field cannot grow anything, so the metaphor shows that life without dreams feels empty and cold. This image creates a serious, almost lonely mood and supports the speaker’s urgent tone when he repeats “Hold fast to dreams.”" }
  ]
};

/* =========================== ENGLISH 2 =========================== */

RC["sg-eng2-rhetoric"] = {
  subject: "English 2", mins: 25,
  title: "Rhetoric: Ethos, Pathos, Logos & the Rhetorical Situation",
  blurb: "Use SOAPSTone, the three appeals, and rhetorical devices to analyze Lincoln’s Gettysburg Address.",
  eq: "How do speakers use the rhetorical situation, appeals, and devices to move an audience?",
  target: "I can analyze a speech’s rhetorical situation, identify ethos, pathos, and logos, and explain how devices, diction, and tone help the speaker achieve a purpose.",
  sources: [
    { tab: "Key Ideas", title: "The Art of Persuasion", numbered: true, blocks: [
      { p: "<b>Rhetoric</b> is the art of using language to persuade or move an audience. Every speech, ad, and essay is created in a specific <b>rhetorical situation</b>: a certain speaker, talking to a certain audience, at a certain time, for a certain purpose. To analyze rhetoric, ask: <i>Who is speaking, to whom, why, and how?</i>" },
      { h: "SOAPSTone: map the rhetorical situation" },
      { table: { cap: "Table 1. SOAPSTone, a tool for analyzing any text.", head: ["Letter", "Stands for", "Ask yourself"], rowHead: true, rows: [
        ["S", "Speaker", "Who is speaking? What do we know about this person that matters?"],
        ["O", "Occasion", "What event or situation caused the text? When and where?"],
        ["A", "Audience", "Who is the text for? What do they already believe or care about?"],
        ["P", "Purpose", "What does the speaker want the audience to think, feel, or do?"],
        ["S", "Subject", "What is the general topic?"],
        ["Tone", "Tone", "What is the speaker’s attitude? (serious, hopeful, angry, sarcastic…)"]
      ]}},
      { fig: SGE_TRIANGLE, cap: "Figure 1. The rhetorical triangle. Each appeal connects to one corner." },
      { h: "The three appeals" },
      { vocab: [
        ["ethos", "An appeal to <b>credibility</b> or character. The speaker shows why we should trust them: experience, expertise, fairness, or shared values. Example: “As a nurse for twenty years, I have seen…”"],
        ["pathos", "An appeal to <b>emotion</b> or values. The speaker makes the audience feel something: pride, fear, sadness, hope. Example: “Imagine your little sister waiting alone at a dark bus stop.”"],
        ["logos", "An appeal to <b>logic</b>. The speaker uses facts, statistics, reasons, and cause and effect. Example: “Attendance rose from 89% to 94% after the change.”"]
      ]},
      { h: "Rhetorical devices" },
      { table: { cap: "Table 2. Devices that make language memorable.", head: ["Device", "Definition", "Example"], rowHead: true, rows: [
        ["Repetition", "Repeating a word or idea for emphasis", "“Never give up. Never back down.”"],
        ["Anaphora", "Repeating the <b>same words at the beginning</b> of nearby phrases or sentences", "“We will practice. We will improve. We will win.”"],
        ["Rhetorical question", "A question asked for effect, not to get an answer", "“How many more students must fall asleep in class before we act?”"],
        ["Parallelism", "Using the <b>same grammatical pattern</b> in a series", "“to learn, to grow, to lead”"],
        ["Antithesis", "Putting <b>opposite ideas</b> side by side in a balanced sentence", "“Ask not what your school can give you; ask what you can give your school.”"]
      ]}},
      { h: "Diction and tone" },
      { p: "<b>Diction</b> is a writer’s word choice. Words have a <b>denotation</b> (dictionary meaning) and a <b>connotation</b> (the feeling attached to them). “Thrifty” and “cheap” mean almost the same thing, but “thrifty” sounds positive and “cheap” sounds negative. Formal, carefully chosen diction often creates a serious <b>tone</b>." },
      { box: "<b>How to write a rhetorical analysis sentence:</b> <i>[Speaker] uses [appeal or device] when he/she says “[quotation]” in order to [purpose], which makes the audience [feel/think/do].</i><br><b>Example:</b> The coach uses pathos when she says, “This is for every senior playing their last home game,” in order to inspire the team, which makes the players feel proud and determined." }
    ]},
    { tab: "Text", title: "The Gettysburg Address (1863)", numbered: true, blocks: [
      { box: "<b>Context:</b> In July 1863, the Union and Confederate armies fought the Battle of Gettysburg in Pennsylvania, one of the bloodiest battles of the Civil War. On <b>November 19, 1863</b>, President <b>Abraham Lincoln</b> spoke at the dedication of a national cemetery for the Union soldiers who died there. The main speaker, Edward Everett, talked for about two hours. Lincoln spoke for only about two minutes. Lincoln wrote out five known copies of the speech. The version below is the <b>Bliss copy</b>, written in 1864, the only copy he signed and dated." },
      { p: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal." },
      { p: "Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this." },
      { p: "But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth." },
      { p: "Abraham Lincoln.<br>November 19, 1863.", n: false },
      { vocab: [
        ["four score", "A score is 20, so four score is 80. “Four score and seven” is 87."],
        ["proposition", "An idea that is offered to be proven or accepted."],
        ["consecrate / hallow", "To make holy or sacred."],
        ["detract", "To take away from."],
        ["in vain", "For nothing; without any result."],
        ["resolve", "To decide firmly."]
      ]},
      { src: "Text: Abraham Lincoln, Gettysburg Address, Bliss copy (public domain U.S. government text)." }
    ]},
    { tab: "🔬 Simulation", title: "The Appeals Triangle", blocks: [
      { box: "<b>Try this:</b> 1) Read each persuasive sentence on the card. 2) Ask three questions: Does it make me <b>trust the speaker</b> (ethos)? Does it make me <b>feel</b> something (pathos)? Does it give <b>facts, numbers, or logical reasons</b> (logos)? 3) Tap the bin. Watch the dot move toward that corner of the triangle. 4) After all 12, the dot should land near the center because the cards are balanced. 5) Answer Question 10 on the right." },
      { sim: "classify", viz: "triangle", title: "Ethos, Pathos, or Logos?", tip: "Many real arguments mix appeals. Pick the one that is strongest in each sentence. Numbers and if-then reasoning point to logos. Titles and experience point to ethos. Vivid pictures and feelings point to pathos.",
        cats: [
          { n: "Ethos", d: "credibility" },
          { n: "Pathos", d: "emotion" },
          { n: "Logos", d: "logic" }
        ],
        items: [
          { t: "As an ER nurse for twenty years, I have seen what texting while driving does to teenagers.", c: 0, why: "The speaker builds trust by naming her job and experience.", hint: "Why should you believe this speaker?" },
          { t: "Dr. Ramos, a pediatrician who has studied teen sleep for fifteen years, recommends a later start time.", c: 0, why: "It relies on the credibility of an expert.", hint: "Who is giving the advice, and why are they trustworthy?" },
          { t: "I have coached this team for fifteen seasons, and I have never seen a group work harder.", c: 0, why: "The coach’s long experience makes the praise believable.", hint: "Focus on what gives the speaker authority." },
          { t: "Like you, I grew up in this valley, and I want the same safe streets for our kids that you do.", c: 0, why: "Sharing values and background with the audience builds the speaker’s credibility.", hint: "The speaker is showing they are one of us. Which appeal is about trust?" },
          { t: "Imagine your little sister waiting alone at a dark bus stop at 6 a.m. in the tule fog.", c: 1, why: "It creates a vivid, scary picture to make you feel worry.", hint: "What feeling does this picture create?" },
          { t: "Picture the shelter dogs shivering in their cages tonight, waiting for someone to love them.", c: 1, why: "It aims for sympathy and sadness.", hint: "Is this about facts, or about feelings?" },
          { t: "Don’t let your grandparents’ sacrifices be for nothing.", c: 1, why: "It appeals to family pride and guilt.", hint: "What emotion is the speaker trying to stir up?" },
          { t: "Every empty seat at graduation is a story that ended too soon.", c: 1, why: "It uses an emotional image of loss.", hint: "How does this make you feel?" },
          { t: "In our survey, 68 out of 100 students said they skip breakfast on school days.", c: 2, why: "It uses a statistic as evidence.", hint: "Look for numbers and data." },
          { t: "If the bus ride takes 40 minutes and school starts at 7:30, students must leave home by 6:50.", c: 2, why: "It uses if-then reasoning and simple math.", hint: "Is this a logical step-by-step reason?" },
          { t: "The crosswalk costs $12,000, but a single hospital stay can cost more, so the crosswalk could save money.", c: 2, why: "It compares costs and draws a logical conclusion.", hint: "It is weighing numbers. Which appeal uses reasoning?" },
          { t: "Attendance rose from 89% to 94% after the schedule change.", c: 2, why: "It presents data that shows a result.", hint: "Facts and percentages point to which appeal?" }
        ]}
    ]}
  ],
  qs: [
    { t: "num", ref: 2, q: "“Four score and seven years ago” means 87 years before 1863. In what <b>year</b> did “our fathers” bring forth the new nation?", a: 1776, tol: 0, pre: "Year:", why: "1863 − 87 = 1776, the year of the Declaration of Independence. Lincoln is pointing back to its promise that “all men are created equal.”" },
    { t: "grid", ref: 2, q: "Match each detail to the part of <b>SOAPSTone</b> it describes.", cols: ["Speaker", "Occasion", "Audience", "Purpose"], rows: [
      ["Abraham Lincoln, President of the United States during the Civil War", 0],
      ["The dedication of a soldiers’ cemetery at Gettysburg, November 19, 1863", 1],
      ["The crowd at the ceremony, plus Americans who would read the speech in newspapers", 2],
      ["To honor the dead and urge the living to finish the work of saving the nation", 3]
    ], why: "Speaker = who. Occasion = the event, time, and place. Audience = who hears or reads it. Purpose = what the speaker wants the audience to think, feel, or do." },
    { t: "hot", ref: 2, q: "Click the sentence that uses <b>anaphora</b> (the same words repeated at the beginning of phrases).", text: [
      "Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.",
      "We are met on a great battle-field of that war.",
      "It is altogether fitting and proper that we should do this.",
      "But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground.",
      "The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract."
    ], a: [3],
      why: "“we can not dedicate—we can not consecrate—we can not hallow” starts three phrases with the same words, “we can not.” The repetition builds rhythm and stresses that the soldiers, not the speakers, made the ground sacred." },
    { t: "mc", ref: 2, q: "“…government of the people, by the people, for the people, shall not perish from the earth.” Which device does this phrase <b>most</b> clearly use?", opts: ["Rhetorical question", "Hyperbole", "Parallelism", "Antithesis"], a: 2,
      why: "The phrase repeats the same grammatical pattern three times: preposition + “the people.” That balanced pattern is parallelism, and it makes the ending memorable." },
    { t: "mc", ref: 2, q: "“The brave men, living and dead, who struggled here, have consecrated it…” Which appeal is <b>strongest</b> in this sentence?", opts: ["Pathos, because it stirs feelings of respect and grief for the soldiers", "Logos, because it gives statistics about the battle", "Ethos, because Lincoln lists his own military experience", "Logos, because it explains the causes of the war"], a: 0,
      why: "There are no numbers or reasons here, and Lincoln does not talk about himself. Words like “brave” and “living and dead” stir emotion, honor, and grief in an audience standing in a cemetery." },
    { t: "ebsr", ref: 2,
      A: { q: "What is Lincoln’s <b>main purpose</b> in the final paragraph?", opts: ["To describe the events of the battle in detail", "To blame the Confederate army for the war", "To persuade listeners to commit themselves to finishing the work the soldiers began", "To explain why the cemetery should be moved"], a: 2 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?", opts: ["“We are met on a great battle-field of that war.”", "“It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced.”", "“It is altogether fitting and proper that we should do this.”", "“Four score and seven years ago our fathers brought forth on this continent, a new nation…”"], a: 1 },
      why: "Lincoln shifts from dedicating the ground to dedicating the people. He calls on “us the living” to take up “the unfinished work,” a call to action, not a battle report." },
    { t: "inline", ref: 2, q: "Complete the analysis of Lincoln’s diction and tone.", text: "Words like “consecrate,” “hallow,” and “devotion” are [[]] diction. This word choice creates a [[]] tone that fits the occasion of [[]].", blanks: [
      { opts: ["slang and casual", "formal and sacred", "technical and scientific"], a: 1 },
      { opts: ["solemn and reverent", "humorous and light", "bitter and sarcastic"], a: 0 },
      { opts: ["a victory parade", "a cemetery dedication", "an election debate"], a: 1 }
    ], why: "These words come from religious and formal language. They give the speech a solemn, respectful tone that fits a ceremony honoring the dead." },
    { t: "mc", ref: 2, q: "Lincoln says, “The world will little note, nor long remember what we say here, but it can never forget what they did here.” What is the <b>effect</b> of this sentence?", opts: ["It proves the speech was too short to matter.", "It shows Lincoln was angry that no one was listening.", "It argues that words are more powerful than actions.", "It uses humility and contrast to turn the focus from the speakers to the soldiers."], a: 3,
      why: "Lincoln sets “what we say” against “what they did” (antithesis). By playing down his own words, he honors the soldiers’ actions. This humility also builds his ethos. (Ironically, the world did remember his words.)" },
    { t: "order", ref: 2, q: "Lincoln’s speech moves through time. Put these parts in the order they appear (first at the top).", items: [
      "The past: the nation’s founding on the idea that all men are created equal",
      "The present: a civil war testing whether such a nation can survive",
      "The future: a “new birth of freedom” and a government that “shall not perish”"
    ], why: "The speech moves from past (“Four score and seven years ago”) to present (“Now we are engaged”) to future (“shall have a new birth of freedom”). This structure connects the soldiers’ sacrifice to the nation’s future." },
    { t: "mc", ref: 3, q: "<b>Use the simulation.</b> Sort the card “If the bus ride takes 40 minutes and school starts at 7:30, students must leave home by 6:50.” Which appeal is it?", opts: ["Ethos", "Pathos", "Logos", "None of these"], a: 2,
      why: "It uses if-then reasoning and math (7:30 minus 40 minutes = 6:50). That is an appeal to logic, or logos. It does not rely on the speaker’s credibility or on emotion." },
    { t: "multi", need: 2, ref: 1, q: "A student gives a speech asking for more water refill stations on campus. Which <b>two</b> sentences are <b>rhetorical questions</b>?", opts: [
      "“Have you ever tried to focus on a math test when it’s 104 degrees outside?”",
      "“The front office closes at 4:00 p.m.”",
      "“How many students have to get heat exhaustion before we fix this?”",
      "“Please sign our petition after class.”",
      "“Last year, the nurse treated 23 students for dehydration.”"
    ], a: [0, 2],
      why: "Both questions are asked for effect. The speaker does not expect an answer; the questions make the audience feel the problem. The other options are statements or a request." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Explain how Lincoln uses <b>one</b> appeal (ethos, pathos, or logos) <b>or one</b> rhetorical device to achieve his purpose in the Gettysburg Address. Quote the speech.", min: 45,
      checks: [
        { label: "Names an appeal or device", re: /ethos|pathos|logos|anaphora|repetition|repeat|parallel|antithesis|contrast|diction|rhetorical question/i },
        { label: "Quotes or refers to specific words from the speech", re: /“|"|four score|dedicate|consecrate|hallow|brave men|living and dead|unfinished work|of the people|new birth|in vain|little note|honored dead/i },
        { label: "Explains Lincoln’s purpose or the effect on the audience", re: /purpose|in order to|so that|audience|listeners|persuad|inspire|honor|motivat|convince|urge|feel|effect|makes/i }
      ],
      rubric: "2 points: names an appeal or device, quotes the speech, and explains how it serves Lincoln’s purpose or affects the audience. 1 point: names and quotes, but the explanation is weak or missing. 0 points: summary only.",
      why: "A rhetorical analysis connects three things: the tool (appeal or device), the exact words, and the purpose. Lincoln’s purpose is to honor the dead and inspire the living to keep fighting for the nation, so explain how your example helps do that.",
      model: "Lincoln uses anaphora when he says, “we can not dedicate—we can not consecrate—we can not hallow—this ground.” Repeating “we can not” builds a strong rhythm and stresses that the soldiers, not the speakers, made the ground sacred. This honors the dead and prepares the audience for his purpose: to inspire them to finish “the unfinished work” so the soldiers did not die in vain." }
  ]
};

RC["sg-eng2-argument"] = {
  subject: "English 2", mins: 25,
  title: "Argument Writing: Claims, Evidence & Counterclaims",
  blurb: "Take apart a sample argument essay on later school start times, judge its evidence, and catch logical fallacies.",
  eq: "What makes an argument convincing, and how can writers answer the other side fairly?",
  target: "I can identify a claim, evidence, reasoning, counterclaim, and rebuttal, judge the credibility of sources, and recognize common logical fallacies.",
  sources: [
    { tab: "Key Ideas", title: "How an Argument Is Built", numbered: true, blocks: [
      { p: "An <b>argument</b> is not a fight. In writing, it means taking a position on a debatable issue and supporting it with evidence and reasons. A strong argument also deals fairly with the other side." },
      { fig: SGE_ARG, cap: "Figure 1. The parts of an argument work together like a building." },
      { vocab: [
        ["claim", "The writer’s main position on a debatable issue. It should be arguable (someone could disagree) and specific. Example: “Our school should plant shade trees in the quad.”"],
        ["evidence", "Facts, statistics, examples, expert opinions, or quotations that support the claim."],
        ["reasoning (warrant)", "The explanation of <b>how</b> or <b>why</b> the evidence proves the claim. It connects the dots. Clue words: “This shows…,” “This matters because…,” “Therefore…”"],
        ["counterclaim", "An opposing position: what someone who disagrees would say. Clue words: “Some people argue…,” “Critics say…,” “It is true that…”"],
        ["rebuttal", "The writer’s response that shows why the counterclaim is weaker or can be solved. Clue words: “However…,” “Yet…,” “But this ignores…”"]
      ]},
      { h: "Types of evidence" },
      { table: { cap: "Table 1. Common kinds of evidence.", head: ["Type", "Example", "Strength or caution"], rowHead: true, rows: [
        ["Statistics / data", "“Tardies dropped by 30 percent.”", "Strong when the source is reliable and the numbers are recent."],
        ["Expert testimony", "A sleep scientist’s statement", "Strong when the expert works in that exact field."],
        ["Example / anecdote", "One student’s personal story", "Makes the issue real, but one story does not prove a trend."],
        ["Facts", "“California passed a law about start times.”", "Strong when they can be checked in more than one source."]
      ]}},
      { h: "Is the source credible?" },
      { p: "A <b>credible</b> source is one you can trust. Check: <b>Who</b> wrote it, and are they an expert? <b>When</b> was it published? Is it recent? <b>Why</b> was it written: to inform, or to sell something? Can you <b>find the same facts</b> in other reliable sources? Government (.gov) and education (.edu) sites, research studies, and established news organizations are usually more credible than anonymous posts or ads." },
      { box: "<b>Worked example:</b> <b>Claim:</b> Our school should plant shade trees in the quad. <b>Evidence:</b> In a campus survey, 82% of students said they avoid eating outside in August. <b>Reasoning:</b> This shows the heat, not a dislike of the outdoors, is keeping students inside, so shade would make the quad usable again. <b>Counterclaim:</b> Some people argue trees cost too much to water. <b>Rebuttal:</b> However, drip irrigation uses far less water than lawn sprinklers." }
    ]},
    { tab: "Fallacies", title: "Logical Fallacies: Arguments That Cheat", numbered: true, blocks: [
      { p: "A <b>logical fallacy</b> is a mistake in reasoning. Fallacies can sound convincing, which is why ads, social media posts, and political speeches use them. Learning to spot them makes you a stronger writer and a harder person to fool." },
      { table: { cap: "Table 2. Five common fallacies.", head: ["Fallacy", "What it does", "Example"], rowHead: true, rows: [
        ["Ad hominem", "Attacks the <b>person</b> instead of their argument", "“Why listen to Marco’s budget idea? He failed algebra.”"],
        ["Bandwagon", "Says something is right because <b>everyone</b> is doing it", "“Everyone is getting the new phone, so you need it too.”"],
        ["Straw man", "<b>Twists</b> the other side’s argument into a weaker, silly version, then attacks that", "“You want less homework? So you think students shouldn’t have to learn anything.”"],
        ["False dilemma", "Pretends there are only <b>two choices</b> when there are more", "“Either we ban all phones, or students will never learn anything.”"],
        ["Hasty generalization", "Draws a big conclusion from <b>too little evidence</b>", "“The first two episodes were boring, so the whole series is terrible.”"]
      ]}},
      { box: "<b>Quick test:</b> Ask yourself: Does it attack a person? (ad hominem) Does it point to the crowd? (bandwagon) Does it change what the other side said? (straw man) Does it leave out other options? (false dilemma) Is the proof too small? (hasty generalization)" }
    ]},
    { tab: "Text", title: "Let Teens Sleep: Why High Schools Should Start at 8:30 or Later", numbered: true, blocks: [
      { box: "<b>About this text:</b> This is a <b>sample student essay</b> written for this study guide. The sources it cites (Sample Sources A, B, and C) are <b>made up for practice and are not real</b>. In your own essays, always use real, credible sources." },
      { p: "Picture a typical first period at 7:30 a.m.: heads down on desks, hoods up, and a teacher asking a question to a silent room. Most people blame phones or laziness, but the real problem is the clock. High schools across the country should start no earlier than 8:30 a.m., because later start times help teenagers get the sleep their bodies need, which leads to better health and better learning." },
      { p: "First, teenagers are not simply choosing to stay up late. During the teen years, the body’s internal clock shifts later, so many teens do not feel sleepy until around 11 p.m. Health experts recommend that teenagers sleep 8 to 10 hours a night. A student who falls asleep at 11 and wakes up at 6 gets only 7 hours, at most. According to the Valley Sleep Health Institute (Sample Source A), 7 out of 10 high school students in its 2024 survey reported sleeping less than 8 hours on school nights. This matters because a tired brain has trouble focusing and remembering, so early schedules work against the very learning schools are trying to create." },
      { p: "Second, later start times lead to real results. When Riverbend Unified School District moved its high school start time from 7:45 to 8:30, first-period tardies dropped by 30 percent, and average attendance rose from 91 percent to 94 percent in one year (Sample Source B). These numbers show that students are not just sleeping in; they are showing up on time and ready to learn. Maya Torres, a senior at Riverbend, told her school newspaper, “I used to fall asleep in chemistry. Now I actually ask questions” (Sample Source C)." },
      { p: "Some people argue that later start times push sports and after-school jobs later into the evening, leaving students less time for homework. This is a real concern, especially for athletes who travel to away games. However, a 45-minute schedule change does not have to mean losing 45 minutes of anything. Schools can adjust game times, use lighted fields for practice, or add a study period during the day. In the Riverbend report, most coaches said their teams adjusted within the first month (Sample Source B). A well-rested student may also finish homework faster than an exhausted one." },
      { p: "Starting school later is not a magic fix, but it is a simple change backed by science. Students would still have the same number of class minutes; they would simply have them at a time when their brains are awake. California already requires most public high schools to start at 8:30 a.m. or later, and the rest of the country should follow. If we want students who are healthy and ready to learn, we have to let them wake up first." },
      { h: "Works Cited (SAMPLE SOURCES: invented for practice, not real)" },
      { p: "<b>Sample Source A.</b> Valley Sleep Health Institute. “Teen Sleep Survey.” 2024. <i>(sample source)</i>", n: false },
      { p: "<b>Sample Source B.</b> Riverbend Unified School District. “Start Time Change: One-Year Report.” 2023. <i>(sample source)</i>", n: false },
      { p: "<b>Sample Source C.</b> Torres, Maya. Interview. <i>The Riverbend Review</i> (student newspaper), 2023. <i>(sample source)</i>", n: false },
      { src: "Sample essay written for this study guide. Background facts: health experts generally recommend 8 to 10 hours of sleep for teens; California’s Senate Bill 328 (2019) requires most public high schools to begin no earlier than 8:30 a.m. starting in the 2022–23 school year." }
    ]},
    { tab: "🔬 Simulation", title: "Sort the Parts of an Argument", blocks: [
      { box: "<b>Try this:</b> 1) In Game 1, every card comes from an argument about planting <b>shade trees</b> on a hot Central Valley campus. Sort each sentence into Claim, Evidence, Reasoning, Counterclaim, or Rebuttal. 2) Use the clue words: “should” often signals a claim; numbers signal evidence; “This shows” or “because” signals reasoning; “Some people argue” signals a counterclaim; “However” signals a rebuttal. 3) In Game 2, sort each sentence by the logical fallacy it commits. 4) Answer Questions 10 and 11 on the right." },
      { sim: "classify", title: "Game 1: Claim, Evidence, Reasoning, Counterclaim, or Rebuttal?", tip: "Reasoning explains evidence. If a sentence starts with “This shows” or “because” and connects a fact to the claim, it is reasoning, not evidence.",
        cats: [
          { n: "Claim", d: "the position" },
          { n: "Evidence", d: "facts, data, quotes" },
          { n: "Reasoning", d: "explains the evidence" },
          { n: "Counterclaim", d: "the other side" },
          { n: "Rebuttal", d: "answers the other side" }
        ],
        items: [
          { t: "Our school should plant shade trees along the quad and the bus loop.", c: 0, why: "It states a debatable position using “should.”", hint: "Is this the writer’s main position?" },
          { t: "Planting shade trees is the best way to make our campus safer during heat waves.", c: 0, why: "It takes a position someone could disagree with.", hint: "Could someone argue against this sentence? Then it may be the main position." },
          { t: "A sample campus heat check found the blacktop in the quad reached 140°F on a September afternoon.", c: 1, why: "It gives a measured fact as support.", hint: "Look for a number or measurement." },
          { t: "In a sample student survey, 82% of students said they avoid eating outside in August.", c: 1, why: "It reports survey data.", hint: "Is this a fact or a statistic?" },
          { t: "Because shaded pavement stays much cooler, trees would make the quad safe to use at lunch.", c: 2, why: "It explains how the heat evidence connects to the claim.", hint: "This sentence explains WHY. Which part does that?" },
          { t: "This shows that the heat, not a dislike of the outdoors, is keeping students inside.", c: 2, why: "“This shows” signals the writer is explaining what the evidence means.", hint: "“This shows…” is a clue." },
          { t: "Some people argue that trees cost too much to plant and water.", c: 3, why: "It presents the opposing side’s view.", hint: "“Some people argue” is a clue." },
          { t: "Critics say that tree roots could crack the sidewalks.", c: 3, why: "It gives a reason someone might disagree.", hint: "Who is speaking here: the writer or the other side?" },
          { t: "However, drip irrigation uses far less water than lawn sprinklers, and the district can apply for tree-planting grants.", c: 4, why: "“However” signals the writer answering the cost concern.", hint: "This answers an objection." },
          { t: "Yet planting deep-rooted trees away from walkways prevents most sidewalk damage.", c: 4, why: "It responds to the sidewalk concern with a solution.", hint: "Is this answering a concern from the other side?" }
        ]},
      { sim: "classify", title: "Game 2: Name That Fallacy", tip: "Ask what the sentence is doing wrong: attacking a person, following the crowd, twisting an argument, offering only two choices, or jumping to a conclusion.",
        cats: [
          { n: "Ad hominem", d: "attacks the person" },
          { n: "Bandwagon", d: "everyone’s doing it" },
          { n: "Straw man", d: "twists the argument" },
          { n: "False dilemma", d: "only two choices" },
          { n: "Hasty generalization", d: "too little evidence" }
        ],
        items: [
          { t: "Why should we listen to Jasmine’s idea for the club budget? She’s always late to meetings.", c: 0, why: "It attacks Jasmine instead of her idea.", hint: "Is the sentence about the idea or the person?" },
          { t: "The council member’s water plan is ridiculous. Have you seen how she dresses?", c: 0, why: "Her clothing has nothing to do with the plan.", hint: "What is being criticized?" },
          { t: "Millions of people follow this diet, so it must work.", c: 1, why: "Popularity does not prove something works.", hint: "Does it rely on the crowd?" },
          { t: "Everyone in our class is going to the party, so you should go too.", c: 1, why: "It argues from what everyone else is doing.", hint: "Is “everyone” the reason?" },
          { t: "My opponent wants a later start time, so he must think students should never have to wake up early for anything.", c: 2, why: "It exaggerates the opponent’s real position into an extreme one.", hint: "Did the opponent really say that?" },
          { t: "You think we need a dress code? So you want everyone to wear the exact same uniform every day.", c: 2, why: "It twists a mild idea into an extreme one that is easier to attack.", hint: "Is this a fair version of the other side?" },
          { t: "Either we cancel the whole football season, or we will keep having heat injuries.", c: 3, why: "It ignores other options, like moving practice to cooler hours.", hint: "Are these really the only two choices?" },
          { t: "You’re either with our team, or you’re against us.", c: 3, why: "People can also be neutral or partly agree.", hint: "Count the choices offered." },
          { t: "My cousin’s electric car broke down twice, so electric cars are unreliable.", c: 4, why: "One car is not enough evidence about all electric cars.", hint: "How much evidence is behind the conclusion?" },
          { t: "The first two episodes were boring, so the whole series must be terrible.", c: 4, why: "Two episodes are too small a sample to judge a whole series.", hint: "Is the evidence big enough for the conclusion?" }
        ]}
    ]}
  ],
  qs: [
    { t: "hot", ref: 3, q: "Click the sentence from paragraph 1 that states the writer’s <b>claim</b>.", text: [
      "Picture a typical first period at 7:30 a.m.: heads down on desks, hoods up, and a teacher asking a question to a silent room.",
      "Most people blame phones or laziness, but the real problem is the clock.",
      "High schools across the country should start no earlier than 8:30 a.m., because later start times help teenagers get the sleep their bodies need, which leads to better health and better learning."
    ], a: [2],
      why: "The claim is the writer’s arguable position. The third sentence says what schools “should” do and previews the reasons (sleep, health, learning). The first two sentences are a hook that sets up the problem." },
    { t: "grid", ref: 3, q: "Label each sentence from the essay with its role in the argument.", cols: ["Evidence", "Reasoning", "Counterclaim", "Rebuttal"], rows: [
      ["“…7 out of 10 high school students in its 2024 survey reported sleeping less than 8 hours on school nights.”", 0],
      ["“These numbers show that students are not just sleeping in; they are showing up on time and ready to learn.”", 1],
      ["“Some people argue that later start times push sports and after-school jobs later into the evening…”", 2],
      ["“However, a 45-minute schedule change does not have to mean losing 45 minutes of anything.”", 3]
    ], why: "The survey result is data (evidence). “These numbers show” explains what the data means (reasoning). “Some people argue” introduces the other side (counterclaim). “However” begins the writer’s answer (rebuttal)." },
    { t: "mc", ref: 3, q: "Maya Torres says, “I used to fall asleep in chemistry. Now I actually ask questions.” What <b>type</b> of evidence is this?", opts: ["A statistic", "Expert testimony", "An anecdote (personal example)", "A logical fallacy"], a: 2,
      why: "It is one student’s personal story. Anecdotes make the issue feel real, but they are weaker than data on their own, so the writer pairs it with the attendance and tardy numbers." },
    { t: "mc", ref: 3, q: "Which piece of evidence <b>most</b> strongly supports the claim that later start times lead to better attendance?", opts: ["“Picture a typical first period at 7:30 a.m.”", "Attendance at Riverbend rose from 91 percent to 94 percent after the start time moved to 8:30.", "Maya Torres now asks questions in chemistry.", "“Starting school later is not a magic fix.”"], a: 1,
      why: "The Riverbend data directly measures attendance before and after the change. Maya’s story is about one student, and the other two options are a hook and a concession, not evidence." },
    { t: "num", ref: 3, q: "Use paragraph 2. A student falls asleep at 11:00 p.m. and wakes up at 6:00 a.m. How many hours <b>short</b> of the <b>minimum</b> recommended amount of sleep is that student?", a: 1, tol: 0, unit: "hour(s)", why: "From 11:00 p.m. to 6:00 a.m. is 7 hours. The minimum recommended is 8 hours, so the student is 8 − 7 = 1 hour short." },
    { t: "ebsr", ref: 3,
      A: { q: "Why does the writer include the counterclaim about sports and jobs in paragraph 4?", opts: ["To show the writer has changed his or her mind", "To admit a fair concern and then show it can be solved, which makes the argument more convincing", "To prove that sports are more important than sleep", "To introduce a new claim about homework"], a: 1 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“This is a real concern, especially for athletes who travel to away games.”", "“Schools can adjust game times, use lighted fields for practice, or add a study period during the day.”", "“Picture a typical first period at 7:30 a.m.”", "“Health experts recommend that teenagers sleep 8 to 10 hours a night.”"], a: 1 },
      why: "Addressing the other side shows fairness (it builds ethos). The writer then offers specific solutions, which turns the objection into a problem that can be fixed. Option A in Part B admits the concern but does not answer it." },
    { t: "multi", need: 2, ref: 1, q: "A student is choosing sources for an essay on teen sleep. Which <b>two</b> would be the <b>most credible</b>?", opts: [
      "A 2023 research study by university sleep scientists",
      "An anonymous video comment that says “everyone knows teens are lazy”",
      "A government health agency’s fact sheet on teen sleep (.gov)",
      "An ad for an energy drink that says it “replaces sleep”",
      "A 1985 blog post with no author"
    ], a: [0, 2],
      why: "Credible sources have expert authors, are current, and are written to inform. The study and the government fact sheet meet all three. The comment and blog have no expert author, and the ad is trying to sell something." },
    { t: "inline", ref: 1, q: "Complete the sentences about how an argument works.", text: "Evidence is [[]]. Reasoning (the warrant) [[]]. A rebuttal [[]].", blanks: [
      { opts: ["the writer’s opinion", "facts, data, or examples that support the claim", "the opposing side’s view"], a: 1 },
      { opts: ["explains how the evidence proves the claim", "repeats the claim in new words", "lists the sources at the end"], a: 0 },
      { opts: ["agrees with the other side", "introduces the topic", "answers the counterclaim and shows why it is weaker"], a: 2 }
    ], why: "Evidence supplies the proof, reasoning connects that proof to the claim, and a rebuttal responds to the other side. Without reasoning, readers have to guess why the evidence matters." },
    { t: "grid", ref: 2, q: "Name the <b>logical fallacy</b> in each statement.", cols: ["Ad hominem", "Bandwagon", "Straw man", "False dilemma", "Hasty generalization"], rows: [
      ["“Don’t listen to the student council president about the dance. She can’t even parallel park.”", 0],
      ["“Every other school in the league has a later start, so we should too.”", 1],
      ["“You want a later start? So you think school should start at noon and end at 1.”", 2],
      ["“Either we start school at 9:00, or students will fail every class.”", 3],
      ["“I slept in once and felt worse, so later start times don’t help anyone.”", 4]
    ], why: "Parking skill has nothing to do with the dance (ad hominem). “Every other school” is following the crowd (bandwagon). Noon to 1 twists the real proposal (straw man). Only two extreme choices are offered (false dilemma). One morning is too little evidence (hasty generalization)." },
    { t: "mc", ref: 4, q: "<b>Use the simulation (Game 1).</b> Sort the card “This shows that the heat, not a dislike of the outdoors, is keeping students inside.” Which bin is correct?", opts: ["Evidence", "Claim", "Rebuttal", "Reasoning"], a: 3,
      why: "“This shows” is a clue that the writer is explaining what the survey evidence means and connecting it to the claim. That connection is reasoning, the warrant." },
    { t: "mc", ref: 4, q: "<b>Use the simulation (Game 2).</b> “Either we cancel the whole football season, or we will keep having heat injuries.” Which fallacy is this?", opts: ["Bandwagon", "Ad hominem", "False dilemma", "Hasty generalization"], a: 2,
      why: "It offers only two extreme choices and ignores others, such as moving practice to early morning or evening, adding water breaks, or using shade tents. That is a false dilemma." },
    { t: "write", ref: 3, q: "<b>Brief write.</b> Choose a side on this question: <i>Should our school ban phones during class?</i> Write a short paragraph that states your <b>claim</b>, presents a <b>counterclaim</b>, and then gives a <b>rebuttal</b> with a reason or evidence.", min: 50,
      checks: [
        { label: "States a claim using a clear position", re: /should|must|need(s)? to|ought to|I (believe|think|argue)|it is (better|important|necessary)/i },
        { label: "Presents a counterclaim (the other side)", re: /some (people|students|teachers|parents)?\s*(argue|say|believe|think|might|may|claim)|critics|opponents|others (argue|say|believe|might)|it is true that|on the other hand|admittedly|although|while some/i },
        { label: "Gives a rebuttal with a transition and a reason or evidence", re: /however|but|yet|nevertheless|even so|still|this ignores|because|for example|for instance|according to|study|survey|percent|%/i, min: 2 }
      ],
      rubric: "2 points: clear claim, a fair counterclaim, and a rebuttal that uses a reason or evidence. 1 point: claim and counterclaim, but the rebuttal is missing or unsupported. 0 points: no clear claim.",
      why: "A complete argument paragraph takes a clear side, states the other side fairly (counterclaim), and then answers it with a transition like “however” plus a reason or evidence (rebuttal). Addressing the other side makes your argument more convincing, not weaker.",
      model: "I believe our school should ban phones during class because students learn more when they are not distracted. Some people argue that students need phones in class to contact their families in an emergency. However, families can still call the front office, and students can check their phones at lunch and between classes. For example, a phone buzzing during a lesson can pull a student’s attention away even if they never pick it up, so a class-time ban protects learning while still keeping families connected." }
  ]
};
