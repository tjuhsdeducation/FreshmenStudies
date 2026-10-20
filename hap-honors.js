/* =====================================================================
   ✏️ HONORS 15-MINUTE CHECK-INS
   Seven harder-than-grade-level check-ins (about 15 minutes each).
   Format: RC["id"] = { subject, mins, title, blurb, eq, target, sources, qs }
   (See the top of rc-history.js and rc-engine.js for question types.)
   Open one with:  honors-ap.html?id=THE-ID
   ===================================================================== */

/* ============================ HONORS ENGLISH 1 ============================ */
RC["hon-eng1-lit"] = {
  subject: "Honors English 1", mins: 15,
  title: "Check-In: Imagery, Irony, and Theme in “The Story of an Hour”",
  blurb: "Analyze tone, imagery, characterization, irony, and theme in Kate Chopin’s 1894 short story.",
  eq: "How can an author use setting details and an ironic ending to reveal what a character truly wants?",
  target: "I can analyze how imagery and characterization build tone and develop a theme, and I can explain the effect of irony.",
  sources: [
    { tab: "Story Excerpt", title: "from “The Story of an Hour” by Kate Chopin (1894)", numbered: true, blocks: [
      { box: "<b>Context:</b> Mrs. Louise Mallard has a weak heart. Her sister Josephine and her husband’s friend Richards have just learned that her husband, Brently, was killed in a railroad accident. The story first appeared in <i>Vogue</i> in 1894. Some paragraphs are skipped; […] marks a gap." },
      { p: "Knowing that Mrs. Mallard was afflicted with a heart trouble, great care was taken to break to her as gently as possible the news of her husband’s death." },
      { p: "She did not hear the story as many women have heard the same, with a paralyzed inability to accept its significance. She wept at once, with sudden, wild abandonment, in her sister’s arms. When the storm of grief had spent itself she went away to her room alone. She would have no one follow her." },
      { p: "There stood, facing the open window, a comfortable, roomy armchair. Into this she sank, pressed down by a physical exhaustion that haunted her body and seemed to reach into her soul." },
      { p: "She could see in the open square before her house the tops of trees that were all aquiver with the new spring life. The delicious breath of rain was in the air. In the street below a peddler was crying his wares. The notes of a distant song which some one was singing reached her faintly, and countless sparrows were twittering in the eaves." },
      { p: "There were patches of blue sky showing here and there through the clouds that had met and piled one above the other in the west facing her window." },
      { p: "[…] She said it over and over under her breath: “free, free, free!” […]" },
      { p: "There would be no one to live for during those coming years; she would live for herself. There would be no powerful will bending hers in that blind persistence with which men and women believe they have a right to impose a private will upon a fellow-creature. […]" },
      { p: "[…] Some one was opening the front door with a latchkey. It was Brently Mallard who entered, a little travel-stained, composedly carrying his grip-sack and umbrella. He had been far from the scene of the accident, and did not even know there had been one. […]" },
      { p: "When the doctors came they said she had died of heart disease—of the joy that kills." },
      { src: "Kate Chopin, “The Story of an Hour” (first published as “The Dream of an Hour,” <i>Vogue</i>, 1894). Public domain." }
    ]},
    { tab: "Key Terms", title: "Tools for Literary Analysis", blocks: [
      { vocab: [
        ["tone", "the author’s attitude toward the subject, shown through word choice (for example: hopeful, bitter, tense)"],
        ["imagery", "words that appeal to the senses (sight, sound, smell, touch, taste)"],
        ["characterization", "how an author reveals what a character is like: through actions, thoughts, words, and how others treat her"],
        ["situational irony", "when what happens is the opposite of what we expect"],
        ["dramatic irony", "when the reader knows something that the characters do not"],
        ["theme", "a message about life or people that the story develops. A theme is a full sentence, not one word."]
      ]},
      { box: "<b>Honors move:</b> A strong analysis does three things: names the <b>technique</b>, quotes the <b>evidence</b>, and explains the <b>effect</b> (what the detail makes the reader feel or understand)." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "In paragraph 2, Mrs. Mallard weeps “with sudden, wild abandonment.” As used here, <b>abandonment</b> most nearly means:", opts: ["being left behind by someone", "a complete lack of self-control or restraint", "a calm, quiet acceptance", "a refusal to believe the news"], a: 1,
      why: "“Sudden” and “wild” describe emotion that pours out with no holding back. Here abandonment means giving in completely to a feeling, not being deserted. The same sentence contrasts her with women who show “a paralyzed inability to accept” the news, so choice D is the opposite of what she does." },
    { t: "ebsr", ref: 1,
      A: { q: "How does the <b>tone</b> shift between paragraph 3 and paragraphs 4–5?", opts: ["From hopeful to fearful", "From heavy and exhausted to fresh and hopeful", "From angry to guilty", "From joyful to grieving"], a: 1 },
      B: { q: "Which phrase from paragraphs 4–5 <b>best</b> supports your answer to Part A?", opts: ["“pressed down by a physical exhaustion”", "“the news of her husband’s death”", "“all aquiver with the new spring life”", "“a paralyzed inability to accept its significance”"], a: 2 },
      why: "Paragraph 3 is weighed down (“sank,” “pressed down,” “exhaustion”). Paragraph 4 turns to spring, rain, song, and birds, images of new life and energy. “New spring life” shows the hopeful shift; the other phrases come from the grief before it." },
    { t: "hot", ref: 1, q: "Click the <b>one</b> sentence from paragraph 2 that <b>best</b> characterizes Mrs. Mallard as someone who wants to be independent, even in her grief.",
      text: ["She did not hear the story as many women have heard the same, with a paralyzed inability to accept its significance.", "She wept at once, with sudden, wild abandonment, in her sister’s arms.", "When the storm of grief had spent itself she went away to her room alone.", "She would have no one follow her."], a: [3],
      why: "“She would have no one follow her” is an action that shows her will: she insists on being alone. The other sentences show how she grieves, but this one hints at the self-ownership she later celebrates (“she would live for herself”)." },
    { t: "grid", ref: 1, q: "Which literary technique does each detail <b>mainly</b> show?", cols: ["Imagery", "Characterization", "Situational irony"],
      rows: [
        ["“The delicious breath of rain was in the air.”", 0],
        ["She whispers “free, free, free!” under her breath.", 1],
        ["Brently walks in, alive and calm, carrying his umbrella.", 2],
        ["“patches of blue sky showing here and there through the clouds”", 0],
        ["The doctors say she died “of the joy that kills.”", 2]
      ],
      why: "Rain and blue sky appeal to smell and sight (imagery). Her whispered words reveal her private feelings (characterization). Brently’s return and the doctors’ diagnosis are the opposite of what we expect: the “dead” man is alive, and the cause of death is not joy at all." },
    { t: "mc", ref: 1, q: "The doctors say Mrs. Mallard died “of the joy that kills.” Why is this ending an example of <b>dramatic</b> irony?", opts: ["The doctors know she was unhappy, but the reader thinks she was happy.", "Brently knows about the accident, but the doctors do not.", "Josephine predicted that her sister would die of joy.", "The reader knows she was celebrating her freedom, so the shock was likely losing it, while the doctors assume she was overjoyed to see her husband."], a: 3,
      why: "We saw her whisper “free, free, free!” and plan to “live for herself.” The doctors did not. They assume joy, but the reader understands the shock of losing her new freedom. A gap between what the reader knows and what characters believe is dramatic irony." },
    { t: "multi", ref: 1, need: 2, q: "Which <b>two</b> statements express themes that the excerpt develops? Choose two.",
      opts: ["A person’s true feelings may be hidden from the people closest to them.", "Train travel in the 1890s was dangerous and should be avoided.", "Freedom to live for oneself can matter deeply, even inside a marriage that is not cruel.", "Sisters should always stay together during hard times."], a: [0, 2],
      why: "No one in the house knows what she feels behind her closed door, and the doctors misread her death (hidden feelings). Paragraph 7 says no one would “impose a private will” on her: her joy is about self-ownership, not hatred of Brently. The other choices are topics or advice the story does not develop." },
    { t: "inline", ref: 1, q: "Complete the analysis.",
      text: "Chopin places Mrs. Mallard facing an [[]] window, so the spring images seem to come from outside her old life. This setting symbolizes the [[]] that is “approaching” her, which makes the ending more [[]].",
      blanks: [{ opts: ["closed", "open", "broken"], a: 1 }, { opts: ["illness", "freedom", "danger"], a: 1 }, { opts: ["tragic", "comic", "predictable"], a: 0 }],
      why: "Paragraph 3 says the chair faces “the open window.” The fresh air, song, and blue sky suggest a new, open future: freedom. Because we watch her discover that freedom, losing it in the final lines is tragic rather than comic or expected." },
    { t: "mc", ref: 1, q: "Brently enters “composedly carrying his grip-sack and umbrella.” What is the <b>main effect</b> of these calm, ordinary details?", opts: ["They show that Brently is secretly cruel to his wife.", "They prove the railroad company lied on purpose.", "They contrast sharply with the intense emotional hour the reader just lived through, which makes the twist hit harder.", "They show Brently is a wealthy businessman."], a: 2,
      why: "After an hour of grief and then joyful discovery, Brently walks in calm and unaware, like it is any other day. The contrast between his ordinary calm and her inner storm sharpens the irony. Nothing in the excerpt says he is cruel." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> How does Chopin use <b>imagery</b> in paragraphs 4–5 to develop a <b>theme</b> about freedom? Name the theme in a full sentence, quote <b>at least two</b> images, and explain their effect.", min: 50,
      checks: [
        { label: "States a theme about freedom, self-ownership, or independence", re: /free|freedom|independen|live for (her|one|your)self|own (life|self)|self.?(ownership|hood)|control (of|over)/i },
        { label: "Quotes or names at least two images from paragraphs 4–5", re: /spring|aquiver|tree|rain|peddler|song|sparrow|twitter|blue sky|cloud|window|eaves/i, min: 2 },
        { label: "Explains the effect (what the images suggest or make the reader feel)", re: /suggest|symboli|represent|show|reveal|create|hint|foreshadow|feel|mood|tone|new (life|beginning|start)|rebirth|hope/i }
      ],
      rubric: "2 = theme stated as a sentence + two images + an explanation of their effect. 1 = one of these is missing or thin. 0 = no clear theme or no evidence.",
      model: "Chopin suggests that the freedom to live for oneself can feel like being reborn. Right after Mrs. Mallard sinks into her chair, she sees trees “all aquiver with the new spring life” and smells “the delicious breath of rain.” Spring and rain are images of new growth, so they hint that a new life is opening for her. The “patches of blue sky” breaking through the clouds suggest hope appearing after grief. These images make the reader feel her freedom before she even names it, which makes losing it at the end more painful.",
      why: "Strong answers follow technique → evidence → effect. Spring, rain, song, and blue sky all signal renewal, which foreshadows her realization that she will “live for herself.”" }
  ]
};

/* ============================ HONORS ENGLISH 2 ============================ */
RC["hon-eng2-rhet"] = {
  subject: "Honors English 2", mins: 15,
  title: "Check-In: Rhetoric in Douglass’s “What to the Slave Is the Fourth of July?”",
  blurb: "Analyze purpose, audience, rhetorical questions, antithesis, parallelism, and tone in Frederick Douglass’s 1852 speech.",
  eq: "How does a speaker use rhetorical choices to challenge an audience that thinks it is on his side?",
  target: "I can analyze how a speaker’s rhetorical choices (questions, contrast, repetition, and diction) serve his purpose for a specific audience.",
  sources: [
    { tab: "Speech", title: "from “What to the Slave Is the Fourth of July?” by Frederick Douglass (1852)", numbered: true, blocks: [
      { box: "<b>Rhetorical situation:</b> Frederick Douglass escaped slavery in 1838 and became a famous abolitionist speaker and writer. On <b>July 5, 1852</b>, the Rochester Ladies’ Anti-Slavery Society invited him to speak at Corinthian Hall in Rochester, New York. His audience was mostly white Northerners who opposed slavery and had come to celebrate the nation’s independence. […] marks skipped text." },
      { p: "Fellow-citizens, pardon me, allow me to ask, why am I called upon to speak here to-day? What have I, or those I represent, to do with your national independence? Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us? […]" },
      { p: "I am not included within the pale of this glorious anniversary! Your high independence only reveals the immeasurable distance between us. The blessings in which you, this day, rejoice, are not enjoyed in common. The rich inheritance of justice, liberty, prosperity and independence, bequeathed by your fathers, is shared by you, not by me. The sunlight that brought life and healing to you, has brought stripes and death to me. This Fourth [of] July is yours, not mine. You may rejoice, I must mourn. […]" },
      { p: "At a time like this, scorching irony, not convincing argument, is needed. O! had I the ability, and could I reach the nation’s ear, I would, to-day, pour out a fiery stream of biting ridicule, blasting reproach, withering sarcasm, and stern rebuke. For it is not light that is needed, but fire; it is not the gentle shower, but thunder. We need the storm, the whirlwind, and the earthquake. […]" },
      { p: "What, to the American slave, is your 4th of July? I answer: a day that reveals to him, more than all other days in the year, the gross injustice and cruelty to which he is the constant victim. To him, your celebration is a sham; your boasted liberty, an unholy license; your national greatness, swelling vanity; your sounds of rejoicing are empty and heartless; […] There is not a nation on the earth guilty of practices more shocking and bloody than are the people of these United States, at this very hour." },
      { src: "Frederick Douglass, speech at Corinthian Hall, Rochester, New York, July 5, 1852. Public domain. “pale” = boundary or limits; “stripes” = marks left by whipping." }
    ]},
    { tab: "Rhetoric Toolkit", title: "Rhetorical Devices", blocks: [
      { vocab: [
        ["rhetorical question", "a question asked for effect, to make the audience think, not to get an answer"],
        ["antithesis", "placing opposite ideas side by side in a balanced sentence (“yours, not mine”)"],
        ["parallelism", "repeating the same grammatical pattern in a series (“biting ridicule, blasting reproach, withering sarcasm”)"],
        ["diction", "word choice, especially words with strong connotations (feelings attached to a word)"],
        ["purpose", "what the speaker wants the audience to think, feel, or do"]
      ]}
    ]},
    { tab: "🗂️ Simulation", title: "Sort the Devices", blocks: [
      { box: "<b>Try this:</b> 1) Read each line from the speech. 2) Tap the device it <b>mainly</b> uses. 3) Read the feedback, then press ↻ Start over and try to get all 6 right on the first try." },
      { sim: "classify", title: "Name That Device", tip: "Antithesis needs two opposite ideas. Parallelism needs a repeated grammar pattern.",
        cats: [{ n: "Rhetorical question", d: "asked for effect" }, { n: "Antithesis", d: "opposites side by side" }, { n: "Parallelism", d: "repeated pattern" }],
        items: [
          { t: "“Why am I called upon to speak here to-day?”", c: 0, why: "He does not expect an answer. The question makes the audience feel the awkwardness of inviting him.", hint: "Look at the punctuation and ask: does he want a real answer?" },
          { t: "“You may rejoice, I must mourn.”", c: 1, why: "Rejoice and mourn are opposites placed side by side.", hint: "Find two words that mean opposite things." },
          { t: "“biting ridicule, blasting reproach, withering sarcasm, and stern rebuke”", c: 2, why: "Four phrases with the same adjective + noun pattern.", hint: "Count the repeated adjective + noun pairs." },
          { t: "“This Fourth [of] July is yours, not mine.”", c: 1, why: "Yours versus mine: the holiday belongs to one group and not the other.", hint: "Which two words are opposites?" },
          { t: "“We need the storm, the whirlwind, and the earthquake.”", c: 2, why: "A series of three nouns with the same “the + noun” pattern, building in force.", hint: "Is this a list with a repeated pattern?" },
          { t: "“What, to the American slave, is your 4th of July?”", c: 0, why: "He asks it and then answers it himself to drive home his point.", hint: "Is he truly asking the audience for information?" }
        ] }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Why does Douglass open with a series of <b>rhetorical questions</b>?", opts: ["To show that he was confused about why he was invited", "To ask the audience to vote on whether he should speak", "To make the audience question whether the Declaration’s promises really apply to enslaved people", "To praise the founders for including everyone"], a: 2,
      why: "Questions like “Are the great principles … extended to us?” are not requests for information. They push a sympathetic audience to admit an uncomfortable truth: the nation’s promises of freedom exclude millions of people." },
    { t: "ebsr", ref: 1,
      A: { q: "Which statement <b>best</b> describes Douglass’s central claim in the excerpt?", opts: ["The Fourth of July should be canceled for everyone.", "The nation’s celebration of liberty is hypocritical while it keeps people enslaved.", "Enslaved people do not care about national holidays.", "The founders never meant to promise freedom to anyone."], a: 1 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?", opts: ["“O! had I the ability, and could I reach the nation’s ear”", "“To him, your celebration is a sham; your boasted liberty, an unholy license”", "“Fellow-citizens, pardon me, allow me to ask”", "“The rich inheritance of justice, liberty, prosperity and independence”"], a: 1,
        },
      why: "Calling the celebration a “sham” and liberty an “unholy license” directly accuses the nation of hypocrisy: it boasts of freedom while practicing slavery. Douglass does not ask to cancel the holiday; he exposes its contradiction." },
    { t: "hot", ref: 1, q: "Click the <b>one</b> sentence from paragraph 2 that uses <b>antithesis</b> most directly to express the speech’s central contrast.",
      text: ["I am not included within the pale of this glorious anniversary!", "Your high independence only reveals the immeasurable distance between us.", "The blessings in which you, this day, rejoice, are not enjoyed in common.", "You may rejoice, I must mourn."], a: [3],
      why: "“Rejoice” and “mourn” are exact opposites in a short, balanced sentence: you / I, may / must, rejoice / mourn. The other sentences describe the gap but do not set opposites side by side as sharply." },
    { t: "mc", ref: 3, q: "Use the simulation. Sort “We need the storm, the whirlwind, and the earthquake.” Which device does it <b>mainly</b> use, and what is the effect?", opts: ["Antithesis, to show storms and earthquakes are opposites", "Rhetorical question, to ask the audience about the weather", "Parallelism that builds in intensity, to show how forceful the nation’s wake-up call must be", "Understatement, to make slavery seem like a small problem"], a: 2,
      why: "The repeated “the + noun” pattern is parallelism, and each item is more destructive than the last (storm, whirlwind, earthquake). The building rhythm shows that gentle persuasion is not enough; the nation needs a shock." },
    { t: "inline", ref: 1, q: "Complete the analysis of paragraph 3.",
      text: "Douglass contrasts “light” with “fire” and “the gentle shower” with “thunder” to argue that the audience needs [[]] rather than calm explanation. This choice is surprising because his audience already [[]] slavery, so he is pushing allies to feel more [[]].",
      blanks: [{ opts: ["harsh, shocking criticism", "more historical facts", "a celebration"], a: 0 }, { opts: ["supported", "opposed", "ignored"], a: 1 }, { opts: ["comfortable", "urgency", "patriotic pride"], a: 1 }],
      why: "He says “scorching irony, not convincing argument, is needed.” Light and showers are gentle; fire and thunder are violent. Because the audience was anti-slavery, his goal is not to convert them but to shake them out of comfort and into urgent action." },
    { t: "mc", ref: 1, q: "Douglass addresses the crowd as “Fellow-citizens” and repeatedly says “<b>your</b>” independence and “<b>your</b> 4th of July.” What is the <b>effect</b> of this pronoun shift?", opts: ["It shows he is unsure of his audience’s names.", "It makes the speech sound more formal and polite throughout.", "It proves Douglass is not a U.S. citizen under the law.", "It first claims a shared bond, then separates “you” from “me,” forcing listeners to see the exclusion he lives with."], a: 3,
      why: "“Fellow-citizens” claims equality, but “your,” “yours, not mine,” and “you, not … me” draw a line. The tension between the greeting and the pronouns makes the audience feel the gap between the nation’s ideals and its reality." },
    { t: "multi", ref: 1, need: 2, q: "Which <b>two</b> words <b>best</b> describe Douglass’s tone in paragraph 4? Choose two.", opts: ["indignant (angry at injustice)", "nostalgic", "accusatory", "indifferent"], a: [0, 2],
      why: "Diction like “sham,” “unholy license,” “swelling vanity,” and “shocking and bloody” shows anger at injustice (indignant) and directly blames the nation (accusatory). He is not looking back fondly (nostalgic) or uncaring (indifferent)." },
    { t: "mc", ref: 1, q: "In paragraph 4, “your celebration is a <b>sham</b>” most nearly means the celebration is:", opts: ["fake, because it does not match reality", "too expensive", "loud and joyful", "old-fashioned"], a: 0,
      why: "A sham is something false that pretends to be real. Celebrating “liberty” while millions are enslaved is, in Douglass’s view, a performance that hides the truth." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Analyze how Douglass uses <b>one or two rhetorical choices</b> (for example: rhetorical questions, antithesis, parallelism, or diction) to achieve his purpose with <b>this specific audience</b>. Quote the speech at least twice.", min: 60,
      checks: [
        { label: "Names a rhetorical device or choice", re: /rhetorical question|antithesis|contrast|parallel|repetition|repeat|diction|word choice|metaphor|irony|pronoun|tone/i },
        { label: "Quotes the speech at least twice", re: /rejoice|mourn|yours,? not mine|sham|fire|thunder|storm|whirlwind|earthquake|fellow.citizens|pale|sunlight|stripes|biting|ridicule|independence|hypocri|unholy|vanity|“|"/i, min: 2 },
        { label: "Connects the choice to his purpose or audience", re: /audience|purpose|abolition|anti.?slavery|listener|northern|white|crowd|make (them|the)|wants|urg|wake|persuad|convince|hypocri/i }
      ],
      rubric: "2 = names a device, quotes the speech twice, and explains how it serves his purpose for this audience. 1 = device and evidence but weak purpose/audience link, or only one quotation. 0 = summary only.",
      model: "Douglass uses antithesis to make his anti-slavery audience feel the gap between the nation’s ideals and the lives of enslaved people. In lines like “This Fourth [of] July is yours, not mine” and “You may rejoice, I must mourn,” he places opposite ideas side by side. Because his listeners came to celebrate, these sharp contrasts turn their own holiday into evidence of injustice. He also uses fiery diction, calling the celebration a “sham.” His purpose is not to convert them but to move comfortable allies from agreement to urgent action.",
      why: "A rhetorical analysis explains the choice, the evidence, and why that choice works for <i>this</i> audience on <i>this</i> occasion: sympathetic Northerners celebrating the Fourth of July." }
  ]
};

/* =========================== HONORS CHEMISTRY =========================== */
RC["hon-chem-stoich"] = {
  subject: "Honors Chemistry", mins: 15,
  title: "Check-In: Limiting Reactant and Percent Yield",
  blurb: "Balance an equation, calculate molar mass, find the limiting reactant, and compute theoretical yield, percent yield, and leftover excess reactant.",
  eq: "When two reactants are mixed in any amounts, how can we predict which one runs out and how much product we can really make?",
  target: "I can use molar mass and mole ratios to identify the limiting reactant and calculate theoretical yield, percent yield, and excess reactant remaining.",
  sources: [
    { tab: "Key Ideas", title: "Who Runs Out First?", numbered: true, blocks: [
      { p: "When aluminum foil is dropped into chlorine gas, it reacts to form aluminum chloride: <b>2Al + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub></b>. The <b>coefficients</b> give the mole ratio: 2 mol Al react with 3 mol Cl<sub>2</sub> to form 2 mol AlCl<sub>3</sub>." },
      { p: "The <b>limiting reactant</b> is the reactant that runs out first, so it decides the maximum amount of product. The other reactant is the <b>excess reactant</b>; some of it is left over. You cannot find the limiting reactant by comparing grams. You must compare <b>moles</b>, using the mole ratio." },
      { p: "The <b>theoretical yield</b> is the most product that can form, calculated from the limiting reactant. The <b>actual yield</b> is what you really collect in the lab, which is usually less because of side reactions, spills, or incomplete reactions. <b>Percent yield</b> = (actual yield ÷ theoretical yield) × 100%." },
      { box: "<b>Worked example (different numbers):</b> 4.0 mol Al and 4.5 mol Cl<sub>2</sub>.<br>Cl<sub>2</sub> needed for all the Al: 4.0 mol Al × (3 mol Cl<sub>2</sub> / 2 mol Al) = 6.0 mol Cl<sub>2</sub>. Only 4.5 mol is available, so <b>Cl<sub>2</sub> is limiting</b>.<br>AlCl<sub>3</sub> formed: 4.5 mol Cl<sub>2</sub> × (2 mol AlCl<sub>3</sub> / 3 mol Cl<sub>2</sub>) = 3.0 mol AlCl<sub>3</sub>." },
      { table: { cap: "Table 1. Atomic and molar masses.", head: ["Substance", "Molar mass (g/mol)"], rowHead: true, rows: [["Al", "26.98"], ["Cl (atom)", "35.45"], ["Cl<sub>2</sub>", "70.90"], ["AlCl<sub>3</sub>", "? (you calculate it)"]] } }
    ]},
    { tab: "Lab Data", title: "A Student’s Lab Run", blocks: [
      { table: { cap: "Table 2. Data from one trial.", head: ["Measurement", "Value"], rowHead: true, rows: [["Mass of aluminum (Al) used", "10.0 g"], ["Mass of chlorine gas (Cl<sub>2</sub>) used", "35.0 g"], ["Mass of dry AlCl<sub>3</sub> collected (actual yield)", "39.5 g"]] } },
      { box: "<b>Tip:</b> Keep at least 4 significant figures in the middle of a calculation. Round only at the end, so rounding errors do not pile up." }
    ]},
    { tab: "⚖️ Simulation", title: "Balance It First", blocks: [
      { box: "<b>Try this:</b> 1) Press + and − to change the coefficients. 2) Watch the atom tally: every row needs a ✅. 3) Make sure your coefficients are in lowest terms. Mole ratios only work from a balanced equation." },
      { sim: "balance", title: "Aluminum + Chlorine", tip: "Chlorine comes in pairs on the left but in threes on the right. What is the least common multiple of 2 and 3?",
        r: [{ f: "Al", a: { Al: 1 } }, { f: "Cl₂", a: { Cl: 2 } }], p: [{ f: "AlCl₃", a: { Al: 1, Cl: 3 } }], ans: [2, 3, 2] }
    ]}
  ],
  qs: [
    { t: "mc", ref: 3, q: "Use the simulation. Start with all coefficients at 1 and balance Al + Cl<sub>2</sub> → AlCl<sub>3</sub>. Which coefficient goes in front of <b>Cl<sub>2</sub></b>?", opts: ["1", "2", "3", "6"], a: 2,
      why: "Cl is 2 per molecule on the left and 3 per formula unit on the right. The least common multiple of 2 and 3 is 6, so use 3 Cl<sub>2</sub> (6 Cl) and 2 AlCl<sub>3</sub> (6 Cl). Then 2 Al balances the aluminum: 2Al + 3Cl<sub>2</sub> → 2AlCl<sub>3</sub>." },
    { t: "num", ref: 1, q: "Use Table 1. What is the molar mass of AlCl<sub>3</sub>?", a: 133.33, tol: 0.05, unit: "g/mol",
      why: "One Al and three Cl: 26.98 + 3(35.45) = 26.98 + 106.35 = 133.33 g/mol." },
    { t: "num", ref: 2, q: "How many <b>moles of Cl<sub>2</sub></b> are in 35.0 g of Cl<sub>2</sub>? (Round to 3 decimal places.)", a: 0.494, tol: 0.002, unit: "mol",
      why: "Grams ÷ molar mass: 35.0 g ÷ 70.90 g/mol = 0.4937 ≈ 0.494 mol Cl<sub>2</sub>. (For aluminum: 10.0 g ÷ 26.98 g/mol = 0.3706 mol Al.)" },
    { t: "ebsr", ref: 2,
      A: { q: "In the student’s trial (10.0 g Al, 35.0 g Cl<sub>2</sub>), which reactant is <b>limiting</b>?", opts: ["Al, because 10.0 g is less than 35.0 g", "Cl<sub>2</sub>", "Al, because it is a solid", "Neither; they react exactly"], a: 1 },
      B: { q: "Which calculation <b>best</b> supports your answer to Part A?", opts: ["10.0 g < 35.0 g", "0.3706 mol Al × (3 mol Cl<sub>2</sub> / 2 mol Al) = 0.556 mol Cl<sub>2</sub> needed, but only 0.494 mol is available", "0.494 mol Cl<sub>2</sub> > 0.3706 mol Al", "26.98 g/mol < 70.90 g/mol"], a: 1 },
      why: "Compare what is needed with what you have, in moles, using the ratio. All the Al would need 0.556 mol Cl<sub>2</sub>, but only 0.494 mol is present, so Cl<sub>2</sub> runs out first. Comparing grams (choice A) or raw moles without the ratio (choice C in Part B) is a common trap." },
    { t: "num", ref: 2, q: "What is the <b>theoretical yield</b> of AlCl<sub>3</sub> in grams? (Round to 1 decimal place.)", a: 43.9, tol: 0.2, unit: "g AlCl<sub>3</sub>",
      why: "Start from the limiting reactant. 0.4937 mol Cl<sub>2</sub> × (2 mol AlCl<sub>3</sub> / 3 mol Cl<sub>2</sub>) = 0.3291 mol AlCl<sub>3</sub>. Then 0.3291 mol × 133.33 g/mol = 43.88 ≈ 43.9 g. (If you got 49.4 g, you used Al, the excess reactant.)" },
    { t: "num", ref: 2, q: "The student collected 39.5 g of AlCl<sub>3</sub>. What is the <b>percent yield</b>? (Round to the nearest tenth.)", a: 90.0, tol: 0.3, unit: "%",
      why: "Percent yield = actual ÷ theoretical × 100% = 39.5 g ÷ 43.88 g × 100% ≈ 90.0%." },
    { t: "num", ref: 2, q: "How many <b>grams of aluminum are left over</b> after the reaction stops? (Round to 2 decimal places.)", a: 1.12, tol: 0.03, unit: "g Al",
      why: "Al used = 0.4937 mol Cl<sub>2</sub> × (2 mol Al / 3 mol Cl<sub>2</sub>) = 0.3291 mol Al. 0.3291 mol × 26.98 g/mol = 8.88 g used. Left over: 10.0 g − 8.88 g = 1.12 g Al." },
    { t: "grid", ref: 1, q: "Suppose the student <b>doubles both</b> reactants (20.0 g Al and 70.0 g Cl<sub>2</sub>). What happens to each quantity?", cols: ["Doubles", "Stays the same", "Is cut in half"],
      rows: [["Theoretical yield of AlCl<sub>3</sub>", 0], ["Which reactant is limiting", 1], ["Molar mass of AlCl<sub>3</sub>", 1], ["Mass of excess Al left over", 0]],
      why: "Doubling both keeps the same mole ratio between them, so Cl<sub>2</sub> is still limiting, and every amount (product formed, Al used, Al left over) doubles. Molar mass is a property of the substance and never changes with the amount." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> A classmate says, “Aluminum is the limiting reactant because the student used only 10.0 g of it and 35.0 g of chlorine.” Explain the error and show how to correctly decide which reactant is limiting. Use numbers from this problem.", min: 40,
      checks: [
        { label: "Explains that you must compare moles, not grams", re: /mole|mol\b/i },
        { label: "Uses the mole ratio from the balanced equation", re: /ratio|3\s*(\/|:|to)\s*2|2\s*(\/|:|to)\s*3|coefficient|balanced/i },
        { label: "Uses numbers from the problem", re: /0\.37|0\.49|0\.55|0\.56|26\.98|70\.9|43\.9|1\.12/i },
        { label: "Concludes that Cl₂ (chlorine) is limiting", re: /chlorine|cl\s*2|cl₂|cl<sub>2/i }
      ],
      rubric: "2 = explains why grams cannot be compared, uses moles and the 3 : 2 ratio with numbers, and names Cl₂ as limiting. 1 = correct idea but missing numbers or the ratio. 0 = agrees with the classmate or no reasoning.",
      model: "The classmate compared grams, but reactions happen in moles, and the atoms have different masses. 10.0 g Al is 0.3706 mol and 35.0 g Cl₂ is 0.494 mol. The balanced equation needs 3 mol Cl₂ for every 2 mol Al, so all the Al would need 0.3706 × 3/2 = 0.556 mol Cl₂. There is only 0.494 mol, so chlorine runs out first and is the limiting reactant. Aluminum is in excess.",
      why: "Mass alone hides how many particles you have. Convert to moles, apply the mole ratio, then compare “needed” with “available.”" }
  ]
};

/* ============================ HONORS BIOLOGY ============================ */
RC["hon-bio-energy"] = {
  subject: "Honors Biology", mins: 15,
  title: "Check-In: Photosynthesis, Respiration, and Limiting Factors",
  blurb: "Connect photosynthesis and cellular respiration, analyze an Elodea experiment (independent and dependent variables, controls, limiting factors), and write a CER.",
  eq: "How do photosynthesis and cellular respiration work together in a plant, and what limits how fast a plant can make sugar?",
  target: "I can analyze experimental data to explain how light and carbon dioxide limit photosynthesis, and I can support a claim with evidence and reasoning.",
  sources: [
    { tab: "Key Ideas", title: "Two Processes, One Plant", numbered: true, blocks: [
      { p: "<b>Photosynthesis</b> happens in the <b>chloroplasts</b> of plant and algae cells. Light energy is used to build sugar: <b>6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></b>. In the light-dependent reactions, light splits water and releases oxygen gas. In the Calvin cycle, carbon dioxide is fixed into sugar." },
      { p: "<b>Cellular respiration</b> happens in the <b>mitochondria</b> of nearly all eukaryotic cells, including plant cells. It breaks down glucose to make ATP: <b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</b>. The products of one process are the reactants of the other." },
      { p: "Plants respire <b>all the time</b>, in light and in darkness. Photosynthesis happens only when there is light. So the oxygen a plant gives off is its <b>net</b> oxygen: oxygen made by photosynthesis minus oxygen used by respiration." },
      { p: "A <b>limiting factor</b> is the resource in shortest supply, which sets the maximum rate. If light is low, adding light speeds up photosynthesis. Once light is plentiful, something else, such as the CO<sub>2</sub> supply or temperature, becomes the limit, and the rate levels off (a <b>plateau</b>)." }
    ]},
    { tab: "Experiment", title: "Elodea Bubble Experiment", blocks: [
      { p: "A class placed sprigs of <i>Elodea</i>, a water plant, under a lamp and counted oxygen bubbles released from the cut stem in 5 minutes. They changed the lamp’s brightness from 0% to 100%. Every sprig was 8 cm long and sat in a 25 °C water bath for the same amount of time. Group 1 used plain tap water. Group 2 used tap water with 0.2% baking soda (sodium bicarbonate), which adds dissolved CO<sub>2</sub>. Each point is the average of 3 trials.", n: false },
      { fig: RCG.line({ title: "Oxygen Bubbles vs. Light Intensity", w: 560, h: 350,
          x: { min: 0, max: 100, step: 20, label: "Light intensity (% of full lamp)" }, y: { min: 0, max: 35, step: 5, label: "O₂ bubbles per 5 min" },
          series: [
            { pts: [[0, 0], [20, 8], [40, 17], [60, 25], [80, 29], [100, 30]], cls: "s1", dots: true, label: "Baking soda (extra CO₂)" },
            { pts: [[0, 0], [20, 7], [40, 12], [60, 14], [80, 15], [100, 15]], cls: "s3", dots: true, label: "Tap water only" }
          ],
          alt: "Line graph. Baking soda group: 0% light 0 bubbles, 20% 8, 40% 17, 60% 25, 80% 29, 100% 30. Tap water group: 0% 0, 20% 7, 40% 12, 60% 14, 80% 15, 100% 15." }),
        cap: "Figure 1. Average O₂ bubbles per 5 minutes (sample class data made up for practice)." }
    ]}
  ],
  qs: [
    { t: "inline", ref: 2, q: "Identify the parts of the experiment.",
      text: "The independent variable for each group is [[]]. The dependent variable is [[]].",
      blanks: [{ opts: ["the number of bubbles", "the light intensity", "the water temperature"], a: 1 }, { opts: ["the number of O₂ bubbles in 5 minutes", "the length of the sprig", "the type of plant"], a: 0 }],
      why: "The class changed the lamp brightness on purpose (independent variable) and measured the bubbles that resulted (dependent variable)." },
    { t: "multi", ref: 2, need: 2, q: "Which <b>two</b> are <b>controlled variables</b> (kept the same) in this experiment? Choose two.", opts: ["Light intensity", "Water temperature (25 °C)", "Number of O₂ bubbles", "Length of each Elodea sprig (8 cm)"], a: [1, 3],
      why: "Controls are kept the same so they cannot explain the results. Temperature and sprig length were held constant. Light intensity was changed (independent), and bubbles were measured (dependent)." },
    { t: "num", ref: 2, q: "Use Figure 1. At 60% light, how many <b>more</b> bubbles did the baking soda group release than the tap water group?", a: 11, tol: 0.5, unit: "bubbles",
      why: "Baking soda at 60%: 25 bubbles. Tap water at 60%: 14 bubbles. 25 − 14 = 11 more bubbles." },
    { t: "mc", ref: 1, q: "At 0% light, both groups released 0 bubbles even though the Elodea cells were alive. What is the <b>best</b> explanation?", opts: ["Elodea cells stop all chemical reactions in the dark.", "Without light there is no photosynthesis, but the cells keep respiring and use up oxygen, so there is no net O₂ to release.", "Baking soda blocks oxygen from leaving the plant.", "Respiration produces oxygen only when the light is on."], a: 1,
      why: "Paragraph 3: plants respire all the time. In darkness, photosynthesis stops, while respiration keeps consuming O<sub>2</sub>. Net oxygen is zero or negative, so no bubbles appear." },
    { t: "ebsr", ref: 2,
      A: { q: "Why did the tap water group level off at a <b>lower</b> rate than the baking soda group?", opts: ["Tap water has more dissolved CO₂, which slows photosynthesis.", "In tap water, light became the limiting factor.", "In tap water, CO₂ supply became the limiting factor once light was plentiful.", "The tap water sprigs were shorter."], a: 2 },
      B: { q: "Which evidence <b>best</b> supports your answer to Part A?", opts: ["Both groups had 0 bubbles at 0% light.", "At 20% light, the two groups were almost the same (8 and 7).", "Both groups used 8 cm sprigs at 25 °C.", "From 80% to 100% light, tap water stayed at 15 bubbles while the baking soda group reached 30."], a: 3 },
      why: "At low light the groups match, so light is the limit for both. At high light, adding more light no longer helps the tap water group (stuck at 15), but the group with extra CO<sub>2</sub> keeps rising to 30. That means CO<sub>2</sub>, not light, was limiting in plain tap water." },
    { t: "grid", ref: 1, q: "Classify each statement.", cols: ["Photosynthesis", "Cellular respiration", "Both"],
      rows: [["Uses CO₂ as a reactant", 0], ["Uses O₂ as a reactant", 1], ["Happens in Elodea cells in complete darkness", 1], ["Happens in Elodea cells under the lamp at 100%", 2], ["Takes place in mitochondria", 1]],
      why: "Photosynthesis uses CO<sub>2</sub> and needs light. Respiration uses O<sub>2</sub>, happens in mitochondria, and runs all the time. So under the lamp, both processes occur at once; in darkness, only respiration does." },
    { t: "mc", ref: 1, q: "A student repeats the baking soda trial at 100% light but heats the water to <b>55 °C</b>. What result is <b>most likely</b>?", opts: ["Many fewer bubbles, because high temperature damages (denatures) the enzymes of photosynthesis", "Exactly 30 bubbles, because light is the only factor that matters", "About 60 bubbles, because doubling the temperature doubles the rate", "No change, because temperature does not affect plants"], a: 0,
      why: "Paragraph 4 names temperature as a limiting factor. The Calvin cycle depends on enzymes. Moderate warming can speed them up, but very high temperatures change their shape (denature them), so the rate drops sharply." },
    { t: "order", ref: 1, q: "Put the path of an oxygen atom in order, starting from a water molecule that enters an Elodea leaf.", items: ["Water is split during the light-dependent reactions in the chloroplast.", "The oxygen is released as O₂ gas.", "The O₂ is used as a reactant in cellular respiration in a mitochondrion.", "The oxygen ends up in a new water molecule (H₂O), a product of respiration."],
      why: "In photosynthesis, the O<sub>2</sub> released comes from splitting water. That O<sub>2</sub> can then be used in respiration, where it accepts electrons and hydrogen to form water again. This shows the two processes form a cycle." },
    { t: "write", ref: 2, q: "<b>CER.</b> Write a claim about how light intensity affects the rate of photosynthesis in Elodea with extra CO₂. Give <b>specific evidence</b> from Figure 1 (numbers) and <b>reasoning</b> that uses science ideas (why light matters and why the curve levels off).", min: 60,
      checks: [
        { label: "Claim: more light increases the rate, up to a point", re: /increas|more light|faster|higher|rise|goes up|greater/i },
        { label: "Evidence: at least two numbers from the graph", re: /\b(0|8|17|25|29|30)\b|\b(20|40|60|80|100)\s*%/i, min: 2 },
        { label: "Reasoning: light provides energy for photosynthesis", re: /energy|light.dependent|split|chloroplast|chlorophyll|absorb/i },
        { label: "Explains the plateau (limiting factor)", re: /plateau|level|limit|another factor|co2|co₂|carbon dioxide|temperature|enzyme|max/i }
      ],
      rubric: "2 = clear claim + at least two data points + reasoning about light energy and the plateau/limiting factor. 1 = claim and evidence but weak or missing reasoning. 0 = no claim or no data.",
      model: "Claim: As light intensity increases, the rate of photosynthesis in Elodea increases until it levels off. Evidence: With extra CO₂, the sprigs released 8 bubbles at 20% light, 17 at 40%, and 25 at 60%, but only rose from 29 at 80% to 30 at 100%. Reasoning: Light provides the energy for the light-dependent reactions, which split water and release O₂, so more light means more O₂. At high light the rate plateaus because another factor, such as CO₂ supply, temperature, or enzyme speed, becomes the limiting factor.",
      why: "A CER needs a testable claim, specific numbers as evidence, and reasoning that links the data to a science idea: light powers the light reactions, and a plateau means something else is now limiting." }
  ]
};

/* ============================ HONORS GEOMETRY ============================ */
const HON_GEO_FIG = `<svg class="dg" viewBox="0 0 440 290" role="img" aria-label="Triangle ABC with A at the top, B at bottom left, C at bottom right. Point D is on side AB and point E is on side AC, with segment DE parallel to BC. AD = 6, DB = 4, DE = 9, EC = 5. AE and BC are unknown.">
  <polygon points="200,20 40,260 400,260" class="soft"/>
  <polygon points="200,20 104,164 320,164" class="c1"/>
  <line x1="104" y1="164" x2="320" y2="164" class="ink k2" stroke-width="3"/>
  <line x1="40" y1="260" x2="400" y2="260" class="ink k2" stroke-width="3"/>
  <path d="M206 160 l8 4 l-8 4 M214 160 l8 4 l-8 4" class="ink"/><path d="M206 256 l8 4 l-8 4 M214 256 l8 4 l-8 4" class="ink"/>
  <text x="200" y="14" text-anchor="middle" class="t">A</text><text x="28" y="272" class="t">B</text><text x="404" y="272" class="t">C</text>
  <text x="88" y="164" class="t">D</text><text x="326" y="164" class="t">E</text>
  <text x="140" y="92" text-anchor="end" class="tm">AD = 6</text><text x="60" y="216" text-anchor="end" class="tm">DB = 4</text>
  <text x="266" y="92" class="tm">AE = ?</text><text x="370" y="216" class="tm">EC = 5</text>
  <text x="212" y="156" text-anchor="middle" class="tm">DE = 9</text><text x="220" y="282" text-anchor="middle" class="tm">BC = ?</text>
</svg>`;

RC["hon-geo-similar"] = {
  subject: "Honors Geometry", mins: 15,
  title: "Check-In: Similar Triangles, Proportions, and Area",
  blurb: "Prove triangles similar with AA, SAS~, and SSS~, solve proportions, see how a scale factor changes area, and order a two-column proof.",
  eq: "How can we prove two triangles are similar, and how does a scale factor change lengths and areas differently?",
  target: "I can prove triangles similar using AA, SAS~, or SSS~, use proportions to find missing lengths, and explain why areas scale by k².",
  sources: [
    { tab: "Key Ideas", title: "Similarity Shortcuts", numbered: true, blocks: [
      { p: "Two figures are <b>similar</b> (~) if one is a dilation of the other: corresponding angles are congruent and corresponding sides are proportional. The constant ratio of corresponding sides is the <b>scale factor</b> <i>k</i>." },
      { p: "You do not need to check every part. Each shortcut is enough to prove two triangles similar: <b>AA~</b>: two pairs of congruent angles. <b>SAS~</b>: two pairs of proportional sides and the <i>included</i> angles (the angles between those sides) are congruent. <b>SSS~</b>: all three pairs of sides are proportional (same ratio)." },
      { p: "If triangles are similar with scale factor <i>k</i>, then perimeters (and every length) scale by <i>k</i>, but <b>areas scale by <i>k</i>²</b>, because area multiplies two lengths, and each length is multiplied by <i>k</i>." },
      { fig: HON_GEO_FIG, cap: "Figure 1. In △ABC, segment DE ∥ BC. Not drawn to scale." },
      { table: { cap: "Table 1. Four pairs of triangles.", head: ["Pair", "Triangle 1", "Triangle 2"], rowHead: true, rows: [
        ["P", "Angles 40° and 75°", "Angles 40° and 65°"],
        ["Q", "Sides 6 and 8, included angle 50°", "Sides 9 and 12, included angle 50°"],
        ["R", "Sides 4, 6, 8", "Sides 6, 9, 12"],
        ["S", "Sides 3, 4, 5", "Sides 6, 8, 11"]] } }
    ]},
    { tab: "🔬 Simulation", title: "Dilate and Compare", blocks: [
      { box: "<b>Try this:</b> 1) Choose the dilation ×2 about the origin and play it. 2) Read the new coordinates of A′, B′, and C′ in the table. 3) Find the base and height of the original triangle and of the image. How many times bigger is the area?" },
      { sim: "transform", title: "Dilation Lab", tip: "Original: A(1, 1), B(3, 1), C(1, 2). The base AB is horizontal and AC is vertical, so this is a right triangle.", shape: [[1, 1], [3, 1], [1, 2]] }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Use Table 1. Decide how each pair can be proven similar, or whether it is not similar.", cols: ["AA~", "SAS~", "SSS~", "Not similar"],
      rows: [["Pair P", 0], ["Pair Q", 1], ["Pair R", 2], ["Pair S", 3]],
      why: "P: the third angles are 180 − 40 − 75 = 65° and 180 − 40 − 65 = 75°, so both triangles have 40°, 65°, 75° (AA~). Q: 9/6 = 12/8 = 1.5 with congruent included angles (SAS~). R: 6/4 = 9/6 = 12/8 = 1.5 (SSS~). S: 6/3 = 8/4 = 2, but 11/5 = 2.2, so not similar." },
    { t: "num", ref: 1, q: "In Figure 1, DE ∥ BC, so △ADE ~ △ABC. Find <b>BC</b>.", a: 15, tol: 0.01, pre: "BC =",
      why: "Use whole sides, not pieces: AB = AD + DB = 6 + 4 = 10. The ratio AB/AD = 10/6 = BC/DE, so BC = 9 × 10/6 = 15. (A common error is 9 × 4/6 = 6, which compares DB to AD.)" },
    { t: "num", ref: 1, q: "In Figure 1, find <b>AE</b>.", a: 7.5, tol: 0.01, pre: "AE =",
      why: "A line parallel to one side divides the other two sides proportionally: AD/DB = AE/EC, so 6/4 = AE/5 and AE = 30/4 = 7.5." },
    { t: "order", ref: 1, q: "Put the two-column proof in order.<br><b>Given:</b> DE ∥ BC in Figure 1. <b>Prove:</b> AD · AC = AB · AE.",
      items: ["DE ∥ BC  |  Given", "∠ADE ≅ ∠ABC  |  Corresponding angles formed by parallel lines are congruent", "△ADE ~ △ABC  |  AA~ (using step 2 and ∠A ≅ ∠A by the reflexive property)", "AD/AB = AE/AC  |  Corresponding sides of similar triangles are proportional", "AD · AC = AB · AE  |  Cross-multiplication (multiplication property of equality)"],
      why: "Each statement depends on the one before: the parallel lines give the congruent angles, two angle pairs give similarity, similarity gives the proportion, and cross-multiplying the proportion gives the product." },
    { t: "num", ref: 1, q: "Two similar triangles have corresponding sides in the ratio <b>3 : 5</b>. The smaller triangle has an area of <b>36 cm²</b>. What is the area of the larger triangle?", a: 100, tol: 0.01, unit: "cm²",
      why: "Areas scale by k². Area ratio = 3² : 5² = 9 : 25. So 36 × 25/9 = 4 × 25 = 100 cm². (Using 5/3 instead of 25/9 gives 60, the common mistake.)" },
    { t: "mc", ref: 1, q: "The areas of two similar pentagons are 49 in² and 64 in². What is the ratio of their <b>perimeters</b>?", opts: ["49 : 64", "7 : 8", "2401 : 4096", "1 : 8"], a: 1,
      why: "Area ratio = k², so k = √(49/64) = 7/8. Perimeter is a length, so it scales by k: 7 : 8." },
    { t: "num", ref: 1, q: "At the same time of day, a 1.8 m tall student casts a 2.4 m shadow and a tree casts a 16 m shadow. The sun’s rays form similar right triangles (AA~). How tall is the tree?", a: 12, tol: 0.05, unit: "m",
      why: "Both triangles have a right angle and the same sun angle, so they are similar. height/shadow: 1.8/2.4 = h/16, so h = 16 × 0.75 = 12 m." },
    { t: "num", ref: 2, q: "Use the simulation. Dilate △ABC by <b>×2</b> about the origin. What is the <b>area</b> of the image △A′B′C′, in square units?", a: 4, tol: 0.01, unit: "square units",
      why: "The image is A′(2, 2), B′(6, 2), C′(2, 4). Base A′B′ = 4 and height A′C′ = 2, so area = ½ × 4 × 2 = 4. The original area was ½ × 2 × 1 = 1. Scale factor 2 gives area × 2² = 4." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> A classmate says, “If I triple every side of a triangle, its area triples too.” Explain why this is wrong. Use a specific numerical example <b>and</b> a general reason.", min: 40,
      checks: [
        { label: "States the area is multiplied by 9 (k²), not 3", re: /\b9\b|nine|squared|k\s*\^?\s*2|k²|3\s*\^\s*2|3²/i },
        { label: "Gives a specific example with numbers", re: /\d+\s*(x|×|\*|by|and)\s*\d+|base|height|area (is|=|of)/i },
        { label: "Explains why: area uses two lengths that each scale by k", re: /two (dimensions|lengths|sides)|both (the )?(base|length|dimensions)|base and (the )?height|length (and|times|×) width|each (dimension|length)/i }
      ],
      rubric: "2 = says area is multiplied by 9, gives a correct numerical example, and explains that area depends on two lengths that are each tripled. 1 = correct factor with only an example or only a reason. 0 = agrees with the classmate.",
      model: "The area is multiplied by 9, not 3. For example, a right triangle with base 4 and height 2 has area ½ × 4 × 2 = 4. Tripling the sides gives base 12 and height 6, so the area is ½ × 12 × 6 = 36, which is 9 times bigger. In general, area multiplies two lengths, the base and the height, and each one is multiplied by 3, so the area is multiplied by 3 × 3 = 3² = 9.",
      why: "Lengths scale by k, areas by k², and volumes by k³. Area depends on two dimensions, so the factor is applied twice." }
  ]
};

/* =========================== HONORS ALGEBRA 2 =========================== */
RC["hon-alg2-explog"] = {
  subject: "Honors Algebra 2", mins: 15,
  title: "Check-In: Exponential Models and Logarithms",
  blurb: "Model exponential growth and decay, use logarithm properties, solve exponential equations, and compare compound and continuous interest.",
  eq: "How can logarithms help us answer “how long?” and “how much?” questions about things that grow or shrink by a percent?",
  target: "I can write and interpret exponential models, use properties of logarithms to solve exponential equations, and compare compound interest options.",
  sources: [
    { tab: "Key Ideas", title: "Exponents and Their Inverse", numbered: true, blocks: [
      { p: "An <b>exponential model</b> has the form <b>y = a · b<sup>t</sup></b>, where <i>a</i> is the starting amount and <i>b</i> is the growth or decay factor. If <b>b &gt; 1</b> it is <b>growth</b> with rate r = b − 1. If <b>0 &lt; b &lt; 1</b> it is <b>decay</b> with rate r = 1 − b. Example: y = 500(1.04)<sup>t</sup> grows 4% per period; y = 500(0.96)<sup>t</sup> decays 4% per period. A model with <b>e</b> (about 2.718) such as y = a·e<sup>kt</sup> grows when k &gt; 0 and decays when k &lt; 0." },
      { p: "A <b>half-life</b> model is y = a(½)<sup>t/h</sup>, where h is the half-life: every h units of time, the amount is cut in half." },
      { p: "A <b>logarithm</b> answers the question “what exponent?” log<sub>b</sub>(x) = y means b<sup>y</sup> = x. Key properties: log<sub>b</sub>(MN) = log<sub>b</sub>M + log<sub>b</sub>N; log<sub>b</sub>(M/N) = log<sub>b</sub>M − log<sub>b</sub>N; log<sub>b</sub>(M<sup>p</sup>) = p·log<sub>b</sub>M. The <b>change of base</b> formula is log<sub>b</sub>x = ln x / ln b." },
      { box: "<b>Solving b<sup>x</sup> = c:</b> 1) Isolate the power. 2) Take a log of both sides. 3) Bring the exponent down. Example: 3 · 2<sup>x</sup> = 48 → 2<sup>x</sup> = 16 → x = log<sub>2</sub>16 = 4." },
      { p: "<b>Compound interest:</b> A = P(1 + r/n)<sup>nt</sup>, where P is the principal, r the annual rate as a decimal, n the number of compounding periods per year, and t the years. <b>Continuous</b> compounding: A = Pe<sup>rt</sup>." }
    ]},
    { tab: "Graph", title: "Caffeine in the Body", blocks: [
      { p: "Caffeine leaves the body at a roughly constant percent per hour. For a typical healthy adult, the half-life is about 5 hours, although it varies a lot from person to person. A student drinks a beverage with 200 mg of caffeine. The amount left is modeled by C(t) = 200(½)<sup>t/5</sup>, where t is hours after drinking it.", n: false },
      { fig: RCG.line({ title: "Caffeine Remaining, C(t) = 200(½)^(t/5)", w: 560, h: 340,
          x: { min: 0, max: 20, step: 5, label: "Hours after drinking (t)" }, y: { min: 0, max: 200, step: 50, label: "Caffeine (mg)" },
          series: [{ fn: t => 200 * Math.pow(0.5, t / 5), cls: "s1" }],
          marks: [{ x: 5, y: 100, text: "(5, 100)" }, { x: 10, y: 50, text: "(10, 50)" }, { x: 15, y: 25, text: "(15, 25)" }],
          alt: "Decreasing exponential curve starting at 200 mg at t = 0, passing through (5, 100), (10, 50), and (15, 25), and about 12.5 mg at t = 20." }),
        cap: "Figure 1. Model of caffeine remaining (a typical half-life of about 5 hours; real values vary)." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "A car’s value is modeled by V = 28,000(0.85)<sup>t</sup>, where t is years. Which statement is true?", opts: ["The value grows 85% per year.", "The value decays 85% per year.", "The value grows 15% per year.", "The value decays 15% per year, starting at $28,000."], a: 3,
      why: "b = 0.85 is between 0 and 1, so it is decay, with rate 1 − 0.85 = 0.15 = 15% per year. The initial value is a = 28,000. Each year the car keeps 85% of its value." },
    { t: "grid", ref: 1, q: "Classify each model.", cols: ["Growth", "Decay"],
      rows: [["y = 3(1.02)<sup>x</sup>", 0], ["y = 40(½)<sup>t/6</sup>", 1], ["y = 2e<sup>0.3t</sup>", 0], ["y = 10e<sup>−0.1t</sup>", 1], ["y = 500(0.97)<sup>t</sup>", 1]],
      why: "Base greater than 1 (1.02) or e<sup>kt</sup> with k &gt; 0 means growth. Base between 0 and 1 (½, 0.97) or e<sup>kt</sup> with k &lt; 0 means decay." },
    { t: "num", ref: 1, q: "Solve: 2 · 3<sup>x − 1</sup> = 162", a: 5, tol: 0.001, pre: "x =",
      why: "Divide by 2: 3<sup>x − 1</sup> = 81 = 3<sup>4</sup>. So x − 1 = 4 and x = 5." },
    { t: "num", ref: 1, q: "Solve 2<sup>x</sup> = 20. Round to the nearest hundredth.", a: 4.32, tol: 0.01, pre: "x ≈",
      why: "Take the log of both sides: x = log<sub>2</sub>20 = ln 20 / ln 2 ≈ 2.9957 / 0.6931 ≈ 4.32. Check: 2<sup>4</sup> = 16 and 2<sup>5</sup> = 32, so the answer must be between 4 and 5." },
    { t: "multi", ref: 1, need: 2, q: "Which <b>two</b> expressions are equal to the solution of 5<sup>x</sup> = 40? Choose two.", opts: ["log<sub>5</sub> 40", "40 ÷ 5", "ln 40 / ln 5", "log 40 − log 5"], a: [0, 2],
      why: "By definition, 5<sup>x</sup> = 40 means x = log<sub>5</sub>40, and change of base gives ln 40 / ln 5 ≈ 2.29. 40 ÷ 5 = 8 is wrong (that would solve 5x = 40). log 40 − log 5 = log 8 ≈ 0.90, a quotient-rule trap." },
    { t: "inline", ref: 1, q: "Expand log<sub>3</sub>(9x<sup>2</sup>) using the properties of logarithms.",
      text: "log<sub>3</sub>(9x<sup>2</sup>) = log<sub>3</sub>9 + log<sub>3</sub>(x<sup>2</sup>) by the [[]] rule, which equals [[]] + 2·log<sub>3</sub>x.",
      blanks: [{ opts: ["product", "quotient", "power"], a: 0 }, { opts: ["3", "2", "9"], a: 1 }],
      why: "A product inside the log becomes a sum of logs (product rule). log<sub>3</sub>9 = 2 because 3<sup>2</sup> = 9. The power rule then brings the 2 in x<sup>2</sup> to the front: 2·log<sub>3</sub>x. Result: 2 + 2·log<sub>3</sub>x." },
    { t: "num", ref: 2, q: "Use the model C(t) = 200(½)<sup>t/5</sup>. How much caffeine remains <b>12 hours</b> after drinking? Round to the nearest tenth of a mg.", a: 37.9, tol: 0.15, unit: "mg",
      why: "C(12) = 200(0.5)<sup>12/5</sup> = 200(0.5)<sup>2.4</sup> ≈ 200 × 0.18946 ≈ 37.9 mg. Check with Figure 1: 12 hours is between 10 h (50 mg) and 15 h (25 mg), and 37.9 fits." },
    { t: "num", ref: 1, q: "You deposit <b>$2,000</b> at <b>4.5%</b> annual interest, compounded <b>monthly</b>, for <b>10 years</b>. What is the balance? Round to the nearest cent.", a: 3133.99, tol: 0.5, pre: "$",
      why: "A = 2000(1 + 0.045/12)<sup>12·10</sup> = 2000(1.00375)<sup>120</sup> ≈ 2000 × 1.566993 ≈ $3,133.99. Use n = 12 for monthly; do not round 1.00375 early." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> You will invest <b>$5,000 for 20 years</b>. Account A pays <b>5%</b> compounded <b>annually</b>. Account B pays <b>4.9%</b> compounded <b>continuously</b>. Which account ends with more money? Show both calculations and explain why the account with the lower rate could win.", min: 40,
      checks: [
        { label: "Calculates Account A (about $13,266)", re: /13,?26\d|13,?27\d|1\.05\s*\^?\s*\(?20|1\.05\)?\^20|\(1\.05\)|1\.05²⁰/i },
        { label: "Calculates Account B (about $13,322)", re: /13,?32\d|13,?31\d|e\s*\^?\s*\(?0?\.98|e\^?\(?0\.049|e<sup>|2\.66/i },
        { label: "Chooses Account B (continuous)", re: /\bB\b|continuous/i },
        { label: "Explains why: continuous compounding earns interest on interest constantly", re: /continu|constantly|every (instant|moment)|more often|more frequent|effective|interest on (the )?interest|compound/i }
      ],
      rubric: "2 = both balances correct (about $13,266 and $13,322), chooses B, and explains continuous compounding. 1 = correct choice with one calculation missing or an error. 0 = no calculations.",
      model: "Account A: 5000(1.05)^20 ≈ $13,266.49. Account B: 5000e^(0.049 × 20) = 5000e^0.98 ≈ $13,322.28. Account B ends with about $56 more. Even though its rate is lower, B compounds continuously, so interest is added at every instant and starts earning interest right away. Its effective yearly rate is e^0.049 − 1 ≈ 5.02%, which is a little more than A’s 5%.",
      why: "Compare effective annual rates: A grows by 1.05 per year; B grows by e<sup>0.049</sup> ≈ 1.0502 per year. More frequent compounding can beat a slightly higher nominal rate." }
  ]
};

/* ========================= HONORS WORLD HISTORY ========================= */
RC["hon-wh-revolutions"] = {
  subject: "Honors World History", mins: 15,
  title: "Check-In: Enlightenment Ideas and the Age of Revolutions",
  blurb: "Trace how Locke, Montesquieu, and Rousseau shaped the Declaration of Independence and the Declaration of the Rights of Man, and compare the two documents.",
  eq: "How did Enlightenment ideas about natural rights and government turn into revolutionary documents in America and France?",
  target: "I can connect specific Enlightenment ideas to primary sources from the American and French Revolutions and evaluate their similarities and limits.",
  sources: [
    { tab: "Background", title: "Three Thinkers, Two Revolutions", numbered: true, blocks: [
      { p: "During the <b>Enlightenment</b> (about 1680s to 1780s), European writers used reason to question traditions such as the <b>divine right of kings</b>, the belief that monarchs get their power from God and answer only to God." },
      { p: "<b>John Locke</b> (England, <i>Two Treatises of Government</i>, 1689) argued that people have <b>natural rights</b> to life, liberty, and property. Governments are created by a <b>social contract</b> to protect those rights and rule by the <b>consent of the governed</b>. If a government violates those rights, the people may resist and replace it." },
      { p: "<b>Baron de Montesquieu</b> (France, <i>The Spirit of the Laws</i>, 1748) warned that when one person or group holds all power, liberty is lost. He called for <b>separation of powers</b> among legislative, executive, and judicial branches so that each can check the others." },
      { p: "<b>Jean-Jacques Rousseau</b> (Geneva, <i>The Social Contract</i>, 1762) opened with the line “Man is born free, and everywhere he is in chains.” He argued that legitimate power comes from the people as a whole, a principle called <b>popular sovereignty</b>, and that laws should express the <b>general will</b>, the shared good of the whole community." }
    ]},
    { tab: "Primary Sources", title: "Two Declarations", blocks: [
      { h: "Source A: Declaration of Independence (United States, July 4, 1776)" },
      { quote: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.—That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,—That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government […]", by: "Declaration of Independence, 1776" },
      { h: "Source B: Declaration of the Rights of Man and of the Citizen (France, August 26, 1789)" },
      { quote: "<b>Article 1.</b> Men are born and remain free and equal in rights. Social distinctions may be founded only upon the general good.<br><b>Article 2.</b> The aim of all political association is the preservation of the natural and imprescriptible rights of man. These rights are liberty, property, security, and resistance to oppression.<br><b>Article 3.</b> The principle of all sovereignty resides essentially in the nation. No body nor individual may exercise any authority which does not proceed directly from the nation.<br><b>Article 6.</b> Law is the expression of the general will. […]<br><b>Article 16.</b> A society in which the observance of the law is not assured, nor the separation of powers defined, has no constitution at all.", by: "National Assembly of France, 1789 (English translation)" },
      { src: "Sources: Declaration of Independence (U.S. National Archives transcription). Declaration of the Rights of Man and of the Citizen, public-domain English translation as reproduced by the Avalon Project, Yale Law School. “imprescriptible” = cannot be taken away." }
    ]},
    { tab: "⏳ Simulation", title: "From Ideas to Revolutions", blocks: [
      { box: "<b>Try this:</b> 1) Press play and watch the cards appear. 2) Click each dot to read the details. 3) Notice how many years pass between each book and the revolution that used its ideas." },
      { sim: "timeline", title: "Enlightenment to Revolution", from: 1680, to: 1800, events: [
        { y: 1689, t: "Locke’s Two Treatises", d: "Locke argues for natural rights and government by consent (published late 1689, with 1690 on the title page).", tag: "Thinker" },
        { y: 1748, t: "Montesquieu’s Spirit of the Laws", d: "Montesquieu argues for separation of powers to protect liberty.", tag: "Thinker" },
        { y: 1762, t: "Rousseau’s Social Contract", d: "Rousseau argues for popular sovereignty and the general will.", tag: "Thinker" },
        { y: 1776, t: "Declaration of Independence", d: "The Second Continental Congress declares independence from Great Britain, citing natural rights and consent of the governed.", tag: "Document" },
        { y: 1789, t: "Declaration of the Rights of Man", d: "France’s National Assembly adopts it on August 26, weeks after the storming of the Bastille on July 14.", tag: "Document" },
        { y: 1791, t: "U.S. Bill of Rights ratified", d: "The first ten amendments protect individual liberties from the new federal government.", tag: "Document" }
      ] }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Match each idea to the thinker most associated with it.", cols: ["Locke", "Montesquieu", "Rousseau"],
      rows: [["Natural rights to life, liberty, and property", 0], ["Legislative, executive, and judicial branches should check one another", 1], ["Laws should express the general will of the community", 2], ["People may replace a government that violates their rights", 0], ["“Man is born free, and everywhere he is in chains.”", 2]],
      why: "Locke: natural rights and the right to resist (paragraph 2). Montesquieu: separation of powers (paragraph 3). Rousseau: the general will, popular sovereignty, and the famous opening line of <i>The Social Contract</i> (paragraph 4)." },
    { t: "ebsr", ref: 2,
      A: { q: "Which Enlightenment idea does the Declaration of Independence rely on <b>most directly</b> to justify breaking from Britain?", opts: ["Divine right of kings", "Separation of powers", "Locke’s social contract: government exists to protect rights and rules by consent", "Mercantilism"], a: 2 },
      B: { q: "Which phrase from Source A <b>best</b> supports your answer to Part A?", opts: ["“all men are created equal”", "“it is the Right of the People to alter or to abolish it”", "“endowed by their Creator”", "“We hold these truths to be self-evident”"], a: 1 },
      why: "Locke argued that if a government fails to protect rights, people may resist and replace it. The Declaration turns that idea into a legal argument for revolution: “it is the Right of the People to alter or to abolish it.” Divine right is the idea the Declaration rejects." },
    { t: "mc", ref: 2, q: "Article 16 of Source B says a society without “the separation of powers defined, has no constitution at all.” This reflects the influence of:", opts: ["Montesquieu", "Rousseau", "Locke", "King Louis XVI"], a: 0,
      why: "Separation of powers is Montesquieu’s central idea (paragraph 3). Article 16 goes further and says that without it, a government is not legitimate at all." },
    { t: "hot", ref: 2, q: "Click the <b>one</b> sentence from Source B that <b>most directly</b> expresses Rousseau’s ideas of popular sovereignty and the general will.",
      text: ["Men are born and remain free and equal in rights.", "These rights are liberty, property, security, and resistance to oppression.", "A society in which the observance of the law is not assured, nor the separation of powers defined, has no constitution at all.", "Law is the expression of the general will."], a: [3],
      why: "“General will” is Rousseau’s own term (paragraph 4). Article 6 says laws must come from the people as a whole, not from a king. The rights in Articles 1 and 2 are closer to Locke, and Article 16 reflects Montesquieu." },
    { t: "inline", ref: 2, q: "Compare the lists of rights.",
      text: "Locke named life, liberty, and property. The Declaration of Independence replaced property with [[]], while the Declaration of the Rights of Man kept [[]] and added “resistance to [[]].”",
      blanks: [{ opts: ["security", "the pursuit of Happiness", "equality"], a: 1 }, { opts: ["property", "happiness", "religion"], a: 0 }, { opts: ["taxation", "oppression", "the king"], a: 1 }],
      why: "Source A lists “Life, Liberty and the pursuit of Happiness.” Source B, Article 2, lists “liberty, property, security, and resistance to oppression,” keeping Locke’s “property.”" },
    { t: "multi", ref: 2, need: 2, q: "Which <b>two</b> statements accurately describe <b>both</b> Source A and Source B? Choose two.", opts: ["Both claim that people have rights by nature, not as gifts from a ruler.", "Both explicitly abolish slavery.", "Both state that the purpose of government is to protect people’s rights.", "Both create a constitutional monarchy."], a: [0, 2],
      why: "Source A says rights are “unalienable” and governments exist “to secure these rights.” Source B says rights are “natural and imprescriptible” and the “aim of all political association” is to preserve them. Neither document abolished slavery, and the Declaration of Independence rejected monarchy." },
    { t: "num", ref: 3, q: "Use the timeline. How many years passed between Montesquieu’s <i>The Spirit of the Laws</i> and the Declaration of the Rights of Man?", a: 41, tol: 0, unit: "years",
      why: "1789 − 1748 = 41 years. Ideas spread through books, salons, and newspapers for decades before revolutionaries put them into founding documents." },
    { t: "mc", ref: 1, q: "Which statement <b>best</b> explains why both revolutions rejected the <b>divine right of kings</b>?", opts: ["Enlightenment thinkers argued that a ruler’s power comes from the people, not from God, so a ruler who abuses power can be removed.", "Both revolutions wanted to replace kings with church leaders.", "Kings in both countries had already given up their thrones before the revolutions.", "Enlightenment thinkers believed kings should have unlimited power if they were wise."], a: 0,
      why: "Divine right said kings answer only to God. Locke’s consent of the governed and Rousseau’s popular sovereignty both place the source of power in the people, which makes resisting an unjust ruler legitimate." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Choose <b>one</b> document (Source A or Source B). Explain how it applies the ideas of <b>at least two</b> Enlightenment thinkers, quoting the document. Then identify <b>one limitation</b>: a group that was not fully included in these rights at the time.", min: 60,
      checks: [
        { label: "Names at least two thinkers", re: /locke|montesquieu|rousseau/i, min: 2 },
        { label: "Quotes or closely references the document", re: /consent|unalienable|pursuit|alter or to abolish|created equal|general will|separation of powers|imprescriptible|born and remain free|sovereignty|resistance to oppression|“|"/i },
        { label: "Identifies a limitation (a group left out)", re: /women|enslaved|slave|african|black|native|indigenous|poor|property|men only|did not (apply|include)|excluded|left out/i }
      ],
      rubric: "2 = connects the document to two thinkers with quoted evidence and names a historically accurate limitation. 1 = one thinker or no limitation. 0 = no connection to the document.",
      model: "The Declaration of the Rights of Man applies several Enlightenment ideas. Article 2 says the aim of government is to preserve “liberty, property, security, and resistance to oppression,” which echoes Locke’s natural rights and his belief that people may resist tyranny. Article 6 says “Law is the expression of the general will,” Rousseau’s idea that power comes from the whole people, and Article 16 requires the “separation of powers,” which comes from Montesquieu. However, the rights of “man” did not fully include women. In 1791, Olympe de Gouges wrote a declaration of the rights of woman to protest this, and slavery continued in French colonies at the time.",
      why: "High-level answers connect specific words in the document to specific thinkers, then evaluate the gap between the ideals and reality. Examples: enslaved people in the U.S., women in both nations, and slavery in French colonies (abolished in 1794, restored in 1802)." }
  ]
};
