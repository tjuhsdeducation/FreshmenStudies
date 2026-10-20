/* =====================================================================
   VOCABULARY PRACTICE: decks + lesson blocks (flash, match, spell)
   Used by vocab.html. Load this BEFORE cc-blocks2.js and cc-lesson.js.
   - window.VOCAB_DECKS = { id: { name, emoji, color, group, blurb, words:[{term, def, ex, pos, tip}] } }
   - window.VOCAB = helpers (seeded shuffle, quiz builder, term finder for the write block)
   - Registers block types flash, match, spell through window.CC_EXTS.
   Every example sentence (ex) contains its term exactly, so the quiz can
   build "which sentence uses the word correctly" questions from it.
   Optional field syn:[terms] marks near-synonyms that must never be used
   as wrong answers for each other; nosent:[terms] only keeps them out of
   the "which sentence" questions (their example sentences could swap).
   ===================================================================== */
(function () {
  const W = (term, pos, def, ex, tip, more) => Object.assign({ term, pos, def, ex }, tip ? { tip } : {}, more || {});

  window.VOCAB_DECKS = {
    /* ---------------------------------------------------------------- TEST WORDS */
    "test-directions": {
      name: "Test Vocabulary: Words in the Directions", emoji: "📝", color: "#2b7de9", group: "Test Words",
      blurb: "The words that tell you what to do on ELA and history tests, like analyze, infer, and cite.",
      words: [
        W("analyze", "verb", "to break something into parts and study how the parts work together", "Analyze the poem by looking at how each stanza builds the feeling of the whole thing.", "Think: take it apart, look closely, explain how it works."),
        W("infer", "verb", "to figure out something the text does not say directly, using clues plus what you already know", "From the slammed door and the silence, I can infer that Maya is upset.", "Clues + what I know = inference."),
        W("evaluate", "verb", "to judge how good, strong, or useful something is and give reasons for your judgment", "Evaluate the author’s argument and decide if the reasons are strong enough to convince you.", "Look for the word value inside evaluate: you decide what it is worth."),
        W("cite", "verb", "to give the exact words, page, or source where you found information", "Cite two lines from the article and put them in quotation marks.", "Cite = show where it came from."),
        W("justify", "verb", "to give reasons or evidence that show your answer or choice is right", "Justify your choice of the best title by explaining which details led you to it.", null, { syn: ["support", "explain"] }),
        W("synthesize", "verb", "to combine ideas from two or more sources to build one new understanding", "Synthesize the two articles to explain what both writers believe about school start times.", "syn- means together: put ideas together."),
        W("determine", "verb", "to figure out or decide something for sure, using the information you are given", "Determine the meaning of the unknown word by reading the sentences around it."),
        W("distinguish", "verb", "to tell the difference between two or more things", "Distinguish between the facts and the opinions in the speech."),
        W("summarize", "verb", "to retell only the most important ideas in a short way, using your own words", "Summarize the chapter in three sentences and leave out the small details.", "Summary = short. Paraphrase = same length."),
        W("paraphrase", "verb", "to restate one sentence or passage in your own words, keeping the same meaning and about the same length", "Paraphrase the quote so it sounds like your own voice but still means the same thing.", "para- means beside: your words beside the author’s words."),
        W("central idea", "noun", "the most important point that an informational text makes about its topic", "The central idea of the article is that sleep helps teenagers learn and remember.", "Topic = what it is about. Central idea = what it says about the topic."),
        W("theme", "noun", "a message or lesson about life that a story or poem shows", "One theme of the story is that true friends tell you the truth even when it is hard.", "A theme is a full sentence, not one word like “friendship.”"),
        W("supporting detail", "noun", "a fact, example, or reason that backs up the main idea", "The fact that students who sleep more get better grades is a supporting detail for the main idea."),
        W("author’s purpose", "noun", "the reason an author wrote a text, such as to inform, to persuade, or to entertain", "The author’s purpose in the shoe ad is to persuade you to buy the shoes.", "Remember PIE: Persuade, Inform, Entertain."),
        W("perspective", "noun", "the way a person sees a topic, shaped by their experiences and beliefs", "A farmer’s perspective on the drought is different from the perspective of a city swimmer.", "per- means through: what you see through your own eyes."),
        W("claim", "noun", "the main argument or position that a writer tries to prove", "My claim is that our school should have a longer lunch period."),
        W("counterclaim", "noun", "an argument from the other side that disagrees with the writer’s main argument", "A counterclaim to my essay is that a longer lunch would make the school day end later.", "counter- means against."),
        W("evidence", "noun", "facts, quotes, data, or examples that prove a claim", "Use evidence from the text, like a quote or a number, to prove your point."),
        W("interpret", "verb", "to explain what something means, based on your understanding of it", "Interpret the graph by explaining what the rising line shows about sales."),
        W("compare", "verb", "to show how two or more things are alike", "Compare the two characters by showing ways they are both brave.", "Compare = alike. Contrast = different."),
        W("contrast", "verb", "to show how two or more things are different", "Contrast city life and farm life by showing how a normal day is different in each place."),
        W("sequence", "noun", "the order in which events or steps happen", "Put the events of the story in the correct sequence, from first to last."),
        W("explain", "verb", "to make something clear by telling how or why it happens, with details", "Explain how a bill becomes a law, step by step.", null, { syn: ["justify", "support"] }),
        W("support", "verb", "to back up an idea with reasons, evidence, or examples", "Support your answer with two details from the passage.", null, { syn: ["justify", "explain"] }),
        W("trace", "verb", "to follow how something develops or changes from the beginning to the end", "Trace how the main character changes from the first chapter to the last chapter.")
      ]
    },
    "test-math": {
      name: "Test Vocabulary: Math Directions", emoji: "➗", color: "#8a54e0", group: "Test Words",
      blurb: "The words in math test directions, like simplify, evaluate, and justify, so you know exactly what to do.",
      words: [
        W("expression", "noun", "a math phrase made of numbers, variables, and operations, with no equal sign", "The expression 3x + 5 has no equal sign, so you can simplify it but not solve it."),
        W("equation", "noun", "a math sentence with an equal sign that says two expressions have the same value", "The equation 2x + 4 = 10 is true when x is 3.", "equa- means equal."),
        W("inequality", "noun", "a math sentence that compares two values using <, >, ≤, or ≥", "The inequality x > 7 means x can be any number greater than 7.", "in- means not: not equal."),
        W("simplify", "verb", "to rewrite an expression in a shorter, easier form by combining like terms and doing the operations", "Simplify 4x + 2x − 3 to get 6x − 3."),
        W("solve", "verb", "to find the value of the variable that makes an equation or inequality true", "Solve 3x = 12 by dividing both sides by 3."),
        W("evaluate", "verb", "to find the value of an expression by plugging in numbers for the variables", "Evaluate 2x + 1 when x = 4, and you get 9.", "Evaluate = find the value."),
        W("function", "noun", "a rule that gives exactly one output for each input", "In the function f(x) = 2x, an input of 5 always gives an output of 10."),
        W("rate of change", "noun", "how much one quantity changes compared to another quantity; on a line graph it is the slope", "The rate of change is $15 per hour, so you earn $15 more for every hour you work."),
        W("model", "verb", "to show a real situation with an equation, graph, table, or drawing", "Model the taxi cost with an equation, where m is the number of miles."),
        W("justify", "verb", "to explain why your answer or each step is correct, using math reasons", "Justify your answer by showing that it makes the equation true."),
        W("approximate", "verb", "to find a value that is close to the exact answer, but not exact", "Approximate the square root of 50 as about 7.1.", "Look for ≈, the “about equal” sign."),
        W("coordinate", "noun", "a number that tells a position on a graph; a point is written as (x, y)", "The first coordinate of the point (3, −2) tells you to move 3 units to the right."),
        W("integer", "noun", "a whole number or its opposite, like −3, 0, or 8, with no fraction or decimal part", "The temperature fell to −4 degrees, which is an integer."),
        W("rational number", "noun", "any number that can be written as a fraction of two integers, like 1/2, −3, or 0.75", "0.75 is a rational number because it equals 3/4.", "Look for ratio inside rational: a fraction."),
        W("exponent", "noun", "a small raised number that tells how many times to multiply the base by itself", "In 2³, the exponent 3 means 2 × 2 × 2, which equals 8."),
        W("coefficient", "noun", "the number multiplied by a variable in a term", "In the term 7y, the coefficient is 7."),
        W("variable", "noun", "a letter or symbol that stands for an unknown or changing number", "In n + 4 = 9, the letter n is the variable.", "vary = change."),
        W("mean", "noun", "the average: add all the values, then divide by how many values there are", "The mean of 4, 6, and 8 is 6, because 18 ÷ 3 = 6."),
        W("median", "noun", "the middle value when the data are put in order from least to greatest", "For the data 2, 5, and 9, the median is 5 because it sits in the middle of the list.", "Median sounds like the median strip in the middle of a road."),
        W("interval", "noun", "all the numbers between two values, or an equal-sized step on a graph’s axis", "The graph goes up on the interval from x = 0 to x = 4.", "inter- means between.")
      ]
    },
    /* ---------------------------------------------------------------- CONTENT WORDS */
    alg1: {
      name: "Algebra 1", emoji: "📈", color: "#0e9f6e", group: "Content Words",
      blurb: "Variables, slope, functions, and the other key words of Algebra 1.",
      words: [
        W("variable", "noun", "a letter that stands for a number that is unknown or can change", "In 5 + x = 12, x is the variable we need to find."),
        W("constant", "noun", "a number by itself with no variable attached, so its value does not change", "In 3x + 7, the constant is 7."),
        W("coefficient", "noun", "the number in front of a variable that multiplies it", "In −4x, the coefficient is −4, not 4."),
        W("like terms", "noun", "terms that have the same variable raised to the same power, so they can be combined", "3x and 5x are like terms, so 3x + 5x = 8x."),
        W("distributive property", "noun", "the rule a(b + c) = ab + ac: multiply the outside number by each term inside the parentheses", "Use the distributive property to rewrite 2(x + 6) as 2x + 12."),
        W("linear equation", "noun", "an equation whose graph is a straight line, like y = 2x + 1", "The linear equation y = 3x − 2 makes a straight line on a graph.", "line → linear."),
        W("slope", "noun", "the steepness of a line: the change in y divided by the change in x (rise over run)", "A line that goes up 4 for every 2 to the right has a slope of 2.", "Rise over run."),
        W("y-intercept", "noun", "the point where a line crosses the y-axis, where x = 0", "In y = 2x + 5, the y-intercept is 5, so the line crosses the y-axis at (0, 5)."),
        W("slope-intercept form", "noun", "writing a line as y = mx + b, where m is the slope and b is the y-intercept", "In slope-intercept form, y = mx + b, you can read the steepness and starting point right away."),
        W("function", "noun", "a rule that matches each input with exactly one output", "The cost of tacos is a function of how many you buy, because each number of tacos has one price."),
        W("domain", "noun", "the set of all possible input values (x-values) of a function", "The domain of the ticket function is 0 to 300 people, because the theater only holds 300."),
        W("range", "noun", "the set of all possible output values (y-values) of a function", "The range of y = x² is every number 0 or greater, because a square is never negative."),
        W("system of equations", "noun", "two or more equations with the same variables that you solve together", "The solution to a system of equations is the point where the two lines cross."),
        W("inequality", "noun", "a math sentence that uses <, >, ≤, or ≥ to compare two values", "The inequality h ≥ 48 means a rider must be at least 48 inches tall."),
        W("absolute value", "noun", "a number’s distance from 0 on the number line, which is never negative", "The absolute value of −9 is 9, because −9 is 9 steps from 0."),
        W("exponent", "noun", "a raised number that tells how many times to multiply the base by itself", "In 5², the exponent 2 tells you to multiply 5 × 5."),
        W("polynomial", "noun", "an expression made of one or more terms with variables that have whole-number exponents", "x² + 3x − 4 is a polynomial with three terms.", "poly- means many."),
        W("quadratic function", "noun", "a function whose highest power of x is 2, like y = x² − 4", "The path of a basketball shot can be modeled by a quadratic function.", "quad- means square (x²)."),
        W("factor", "verb", "to rewrite an expression as a product of simpler expressions", "Factor x² + 5x + 6 as (x + 2)(x + 3)."),
        W("parabola", "noun", "the U-shaped graph of a quadratic function", "The parabola for y = x² opens upward and has its lowest point at (0, 0).")
      ]
    },
    geo: {
      name: "Geometry", emoji: "📐", color: "#e08a00", group: "Content Words",
      blurb: "Lines, angles, transformations, triangles, and circles.",
      words: [
        W("line segment", "noun", "a part of a line that has two endpoints", "Line segment AB starts at point A and stops at point B."),
        W("ray", "noun", "a part of a line that starts at one endpoint and goes on forever in one direction", "A flashlight beam is like a ray: it starts at the light and keeps going."),
        W("angle", "noun", "a figure made by two rays that share an endpoint, measured in degrees", "The corner of a sheet of paper makes a 90-degree angle."),
        W("vertex", "noun", "the point where two sides or rays meet, like the corner of a shape", "Each corner of a triangle is called a vertex.", "Plural: vertices."),
        W("parallel lines", "noun", "lines in the same plane that never meet and stay the same distance apart", "The two rails of a train track look like parallel lines.", "The two l’s in parallel look like parallel lines."),
        W("perpendicular lines", "noun", "lines that meet to form a right angle (90°)", "The x-axis and the y-axis are perpendicular lines because they cross at a right angle."),
        W("congruent", "adjective", "exactly the same size and the same shape", "The two triangles are congruent because all their matching sides and angles are equal.", "Symbol: ≅"),
        W("similar", "adjective", "the same shape but not always the same size; matching angles are equal and sides are proportional", "A photo and its larger poster print are similar: same shape, different size.", "Symbol: ~"),
        W("transformation", "noun", "a change in the position, direction, or size of a figure", "A transformation can slide, flip, turn, or resize a shape.", "trans- means across or change."),
        W("translation", "noun", "a slide that moves every point of a figure the same distance in the same direction", "Moving the triangle 3 units right and 2 units up is a translation."),
        W("reflection", "noun", "a flip of a figure over a line that makes a mirror image", "The reflection of the letter b over a vertical line looks like the letter d."),
        W("rotation", "noun", "a turn of a figure around a fixed point", "A 90-degree rotation turns the shape a quarter turn around the center point."),
        W("dilation", "noun", "a change in size by a scale factor that makes a figure bigger or smaller but keeps its shape", "A dilation with a scale factor of 2 makes every side twice as long.", "Your eyes dilate when your pupils get bigger."),
        W("hypotenuse", "noun", "the longest side of a right triangle, across from the right angle", "In a right triangle with legs of 3 and 4, the hypotenuse is 5."),
        W("Pythagorean theorem", "noun", "in a right triangle, a² + b² = c², where c is the longest side", "Use the Pythagorean theorem to find how long a ladder must be to reach a window."),
        W("complementary angles", "noun", "two angles whose measures add up to 90°", "Angles of 30° and 60° are complementary angles because they add up to 90°.", "C comes before S, and 90 comes before 180."),
        W("supplementary angles", "noun", "two angles whose measures add up to 180°", "Angles of 120° and 60° are supplementary angles because they add up to 180°."),
        W("radius", "noun", "the distance from the center of a circle to any point on the circle; half the diameter", "A pizza with a 6-inch radius is 12 inches across."),
        W("circumference", "noun", "the distance around a circle; C = 2πr", "To know how much ribbon will wrap around the round cake, find its circumference.", "circum- means around."),
        W("proof", "noun", "a step-by-step logical argument that shows a statement is true", "In a two-column proof, every statement has a reason written next to it.")
      ]
    },
    bio: {
      name: "Biology", emoji: "🧬", color: "#15803d", group: "Content Words",
      blurb: "Cells, DNA, genetics, evolution, and ecosystems.",
      words: [
        W("cell", "noun", "the smallest unit of life that can carry out all the functions of a living thing", "Every living thing, from bacteria to people, is made of at least one cell."),
        W("organism", "noun", "any single living thing, such as a plant, animal, fungus, or bacterium", "A mushroom, a dog, and a bacterium are each an organism.", "Look for organ inside: a body that is alive."),
        W("photosynthesis", "noun", "the process plants and algae use to turn light energy, carbon dioxide, and water into sugar and oxygen", "Photosynthesis happens in the chloroplasts of a leaf when sunlight shines on it.", "photo = light, synthesis = putting together."),
        W("cellular respiration", "noun", "the process cells use to break down sugar with oxygen to release energy, making carbon dioxide and water", "During a run, your muscle cells use cellular respiration to get the energy they need."),
        W("DNA", "noun", "the molecule that carries the genetic instructions for building and running a living thing", "Scientists compare DNA to see how closely two species are related.", "DNA = deoxyribonucleic acid."),
        W("gene", "noun", "a section of DNA that holds the code for making a protein, which affects a trait", "Each gene is a short section of a chromosome that holds the code for one protein."),
        W("chromosome", "noun", "a tightly coiled strand of DNA and protein; most human body cells have 46 of them", "Before a cell divides, each chromosome makes a copy of itself."),
        W("mitosis", "noun", "cell division that makes two identical body cells", "When you scrape your knee, mitosis makes new skin cells to heal the cut."),
        W("meiosis", "noun", "cell division that makes sex cells (eggs and sperm) with half the usual number of chromosomes", "In humans, meiosis makes sperm and egg cells that each have 23 chromosomes.", "Meiosis makes Me (a new person)."),
        W("protein", "noun", "a large molecule made of amino acids that builds body parts and does jobs in cells", "Your hair and nails are made mostly of a protein called keratin."),
        W("enzyme", "noun", "a protein that speeds up a chemical reaction in a living thing without being used up", "An enzyme in your saliva starts breaking down starch while you chew.", "Many enzyme names end in -ase, like lactase."),
        W("homeostasis", "noun", "keeping conditions inside the body stable, like temperature and water, even when the outside changes", "Sweating on a hot day is part of homeostasis because it cools your body down.", "homeo = same, stasis = staying."),
        W("natural selection", "noun", "the process in which living things with helpful traits survive and reproduce more, so those traits become more common", "Through natural selection, bacteria that resist an antibiotic can become more common over time."),
        W("evolution", "noun", "change in the inherited traits of a population over many generations", "Fossils show the evolution of whales from four-legged land animals over millions of years."),
        W("adaptation", "noun", "an inherited trait that helps a living thing survive and reproduce in its environment", "A cactus’s thick, waxy skin is an adaptation that saves water in the desert."),
        W("ecosystem", "noun", "all the living things in an area plus the nonliving parts, like water, soil, and climate, working together", "The Kaweah River ecosystem includes trout, insects, trees, rocks, and the water itself.", "eco = home."),
        W("producer", "noun", "a living thing that makes its own food, usually through photosynthesis", "Grass is a producer because it makes its own food from sunlight."),
        W("consumer", "noun", "a living thing that gets energy by eating other living things", "A cow is a consumer because it eats grass for energy.", "consume = eat."),
        W("decomposer", "noun", "a living thing, like a fungus or bacterium, that breaks down dead material and returns nutrients to the soil", "A mushroom growing on a fallen log is a decomposer.", "de- + compose: undo what was made."),
        W("mutation", "noun", "a change in the DNA sequence of a cell", "A mutation in the DNA of a rabbit caused it to be born with white fur instead of brown.", "mutate = change.")
      ]
    },
    chem: {
      name: "Chemistry", emoji: "⚗️", color: "#0e7490", group: "Content Words",
      blurb: "Atoms, the periodic table, reactions, acids, and bases.",
      words: [
        W("atom", "noun", "the smallest unit of an element that still has the properties of that element", "A single atom of gold is far too small to see, even with a school microscope."),
        W("element", "noun", "a pure substance made of only one kind of atom", "Oxygen is an element, so it is made of only oxygen atoms."),
        W("compound", "noun", "a substance made of two or more different elements chemically bonded in a fixed ratio", "Water is a compound because it is made of hydrogen and oxygen bonded together."),
        W("molecule", "noun", "two or more atoms bonded together; the smallest unit of many substances", "One molecule of water, H₂O, has two hydrogen atoms and one oxygen atom."),
        W("mixture", "noun", "two or more substances that are mixed but not chemically bonded, so they can be separated", "Trail mix is a mixture because you can pick out the nuts and raisins."),
        W("proton", "noun", "a positively charged particle in the nucleus of an atom", "If you add one proton to the nucleus of a carbon atom, it becomes nitrogen.", "proton = positive."),
        W("neutron", "noun", "a particle with no charge in the nucleus of an atom", "Adding a neutron to an atom changes its mass but not which element it is.", "neutron = neutral."),
        W("electron", "noun", "a tiny negatively charged particle that moves around the nucleus of an atom", "When a sodium atom loses an electron, it becomes a positive ion."),
        W("nucleus", "noun", "the dense center of an atom that holds the protons and neutrons", "Almost all of an atom’s mass is packed into its tiny nucleus."),
        W("atomic number", "noun", "the number of protons in an atom, which tells you which element it is", "Oxygen has an atomic number of 8, so every oxygen atom has 8 protons."),
        W("isotope", "noun", "atoms of the same element that have different numbers of neutrons", "Carbon-14 is an isotope of carbon that scientists use to find the age of old bones.", "iso = same: same element, different mass."),
        W("ion", "noun", "an atom or group of atoms that has a charge because it gained or lost electrons", "Table salt forms when a positive sodium ion is attracted to a negative chloride ion."),
        W("periodic table", "noun", "a chart of all the elements arranged by atomic number, where elements in the same column act alike", "On the periodic table, neon sits in the last column with the other noble gases."),
        W("chemical reaction", "noun", "a process in which substances change into new substances by breaking and forming bonds", "Baking soda and vinegar bubbling is a chemical reaction that makes carbon dioxide gas."),
        W("reactant", "noun", "a starting substance in a chemical reaction, written on the left side of the arrow", "In 2H₂ + O₂ → 2H₂O, hydrogen gas is a reactant."),
        W("product", "noun", "a new substance made by a chemical reaction, written on the right side of the arrow", "In 2H₂ + O₂ → 2H₂O, water is the product."),
        W("chemical bond", "noun", "the force that holds atoms together in a molecule or compound", "Energy from food is stored in each chemical bond of the sugar molecules you eat."),
        W("mole", "noun", "a counting unit for particles: about 6.02 × 10²³ atoms or molecules", "One mole of water has a mass of about 18 grams.", "Like a dozen means 12, a mole means 6.02 × 10²³."),
        W("acid", "noun", "a substance with a pH below 7 that releases hydrogen ions in water; many taste sour", "Lemon juice is an acid with a pH of about 2."),
        W("base", "noun", "a substance with a pH above 7; many feel slippery and taste bitter", "Soap is a base, so its pH is above 7."),
        W("catalyst", "noun", "a substance that speeds up a chemical reaction without being used up", "A platinum catalyst inside a car’s exhaust system helps change harmful gases into safer ones."),
        W("conservation of mass", "noun", "the law that mass is not created or destroyed in a chemical reaction", "Because of conservation of mass, the ashes and gases from a burned log weigh the same as the log plus the oxygen it used.")
      ]
    },
    wh: {
      name: "World History", emoji: "🌍", color: "#b45309", group: "Content Words",
      blurb: "Empires, revolutions, big ideas, and how to read historical sources.",
      words: [
        W("civilization", "noun", "a complex society with cities, a government, writing, and people doing different jobs", "Ancient Mesopotamia is called a civilization because it had cities, laws, and writing."),
        W("empire", "noun", "many lands and peoples ruled by one government or ruler", "At its largest, the Roman Empire stretched from Britain to Egypt."),
        W("feudalism", "noun", "a system in medieval Europe where lords gave land to knights in exchange for loyalty and military service, and peasants worked the land", "Under feudalism, a knight promised to fight for his lord in exchange for land."),
        W("Renaissance", "noun", "a “rebirth” of art, learning, and interest in ancient Greece and Rome that began in Italy in the 1300s", "Leonardo da Vinci painted the Mona Lisa during the Renaissance.", "re- = again, naissance = birth."),
        W("Reformation", "noun", "a 1500s movement to change the Catholic Church that led to new Protestant churches", "The Reformation began in 1517 when Martin Luther published his 95 Theses.", "re- + form: to form again."),
        W("Enlightenment", "noun", "a 1600s and 1700s movement that used reason to question old traditions and promoted ideas like natural rights", "Enlightenment thinkers like John Locke argued that all people have natural rights."),
        W("revolution", "noun", "a big, often sudden change, especially when people overthrow a government", "The French revolution that began in 1789 ended the rule of King Louis XVI.", "revolve = turn: things turn around."),
        W("Industrial Revolution", "noun", "the change from making goods by hand to using machines and factories, beginning in Britain in the late 1700s", "During the Industrial Revolution, many families left their farms to work in new steam-powered factories."),
        W("imperialism", "noun", "when a powerful country takes control of other lands, by force or by money and trade", "In the late 1800s, European imperialism divided most of Africa into colonies."),
        W("colonization", "noun", "settling in a land and taking control of it and its people", "Spanish colonization of the Americas brought new crops, a new religion, and deadly diseases."),
        W("nationalism", "noun", "strong pride and loyalty toward your nation or people, sometimes with the wish to have your own country", "Nationalism helped unite the separate kingdoms of Italy into one country in the 1800s."),
        W("monarchy", "noun", "a government ruled by a king or queen, where power is usually passed down in the family", "In a monarchy, the crown often passes from a parent to the oldest child.", "mono = one, -archy = rule."),
        W("democracy", "noun", "a government in which the people hold power, by voting on laws or electing leaders", "Ancient Athens was an early democracy where male citizens voted on laws.", "demo = people, -cracy = rule."),
        W("totalitarianism", "noun", "a government that controls almost every part of people’s lives and allows no opposition", "Under Stalin, the Soviet Union was an example of totalitarianism, where the government controlled newspapers, jobs, and schools.", "total = all."),
        W("Cold War", "noun", "the long period of tension (about 1947 to 1991) between the United States and the Soviet Union, without a direct war between them", "During the Cold War, the United States and the Soviet Union raced to build nuclear weapons and explore space."),
        W("genocide", "noun", "the deliberate killing of a large group of people because of their nationality, ethnicity, race, or religion", "The Holocaust was a genocide in which Nazi Germany murdered about six million Jews.", "geno = race or people, -cide = kill."),
        W("Silk Road", "noun", "a network of trade routes that connected China with the Middle East and Europe", "Silk, spices, and ideas like Buddhism traveled along the Silk Road."),
        W("primary source", "noun", "firsthand evidence made at the time of an event, like a letter, diary, photo, or speech", "A soldier’s diary from 1916 is a primary source about World War I.", "primary = first: first hand."),
        W("secondary source", "noun", "a source made later by someone who was not there, who studied primary sources", "Your history textbook is a secondary source because its authors wrote about events long after they happened."),
        W("globalization", "noun", "the growing connection of the world’s economies and cultures through trade, travel, and technology", "Because of globalization, a phone may be designed in California, built in Asia, and sold around the world.", "globe = the world.")
      ]
    },
    ush: {
      name: "US History", emoji: "🇺🇸", color: "#dc2626", group: "Content Words",
      blurb: "The Constitution, Reconstruction, civil rights, the Great Depression, and California’s story.",
      words: [
        W("Constitution", "noun", "the supreme law of the United States, written in 1787, that sets up the government", "The Constitution was written in Philadelphia in 1787."),
        W("Bill of Rights", "noun", "the first ten changes to the U.S. Constitution, added in 1791, which protect freedoms like speech and religion", "The Bill of Rights protects your freedom of speech and your freedom of religion."),
        W("amendment", "noun", "an official change or addition to the Constitution", "The 19th Amendment gave women the right to vote in 1920.", "amend = fix or change."),
        W("abolition", "noun", "the movement to end slavery", "Frederick Douglass spoke and wrote for the abolition of slavery.", "abolish = end."),
        W("Reconstruction", "noun", "the period after the Civil War (1865 to 1877) when the South was rebuilt and brought back into the Union", "During Reconstruction, the 14th Amendment made formerly enslaved people citizens.", "re- + construct: build again."),
        W("Jim Crow laws", "noun", "state and local laws, mostly in the South, that forced Black and white Americans apart from the late 1800s to the 1960s", "Jim Crow laws forced Black Americans to use separate schools, train cars, and water fountains."),
        W("segregation", "noun", "the separation of people by race, by law or by custom", "In Mendez v. Westminster (1947), a court ruled against the segregation of Mexican American children in California schools."),
        W("civil rights movement", "noun", "the 1950s and 1960s struggle to end racial discrimination and win equal rights for African Americans", "Rosa Parks and Dr. Martin Luther King Jr. were leaders of the civil rights movement."),
        W("suffrage", "noun", "the right to vote", "Women’s suffrage was finally won across the whole country in 1920."),
        W("Progressive Era", "noun", "the period from about the 1890s to 1920 when reformers worked to fix problems caused by factories, big cities, and corruption", "During the Progressive Era, reformers pushed for laws against child labor and unsafe food."),
        W("Great Depression", "noun", "the worst economic crisis in U.S. history, which began with the 1929 stock market crash and lasted through the 1930s", "During the Great Depression, about one out of every four American workers could not find a job."),
        W("New Deal", "noun", "President Franklin D. Roosevelt’s programs in the 1930s to give relief, help the economy recover, and reform banks and business", "The New Deal created Social Security in 1935."),
        W("Dust Bowl", "noun", "the 1930s drought and huge dust storms on the Great Plains that forced many farm families to leave", "Many families escaping the Dust Bowl drove to California’s Central Valley looking for farm work."),
        W("Great Migration", "noun", "the movement of about six million African Americans from the rural South to cities in the North, Midwest, and West, from about 1910 to 1970", "During the Great Migration, many Black families left Mississippi for Chicago to find jobs and escape Jim Crow laws."),
        W("Manifest Destiny", "noun", "the 1800s belief that the United States was meant to spread across North America to the Pacific Ocean", "Supporters of Manifest Destiny used the idea to justify taking land from Native nations and from Mexico."),
        W("Bracero Program", "noun", "agreements between the U.S. and Mexico (1942 to 1964) that brought Mexican workers to U.S. farms on short-term contracts", "Through the Bracero Program, many Mexican workers came to pick crops in the San Joaquin Valley.", "bracero comes from brazo, Spanish for arm."),
        W("labor union", "noun", "a group of workers who join together to bargain for better pay and safer working conditions", "Cesar Chavez and Dolores Huerta built a labor union for farmworkers that became the United Farm Workers."),
        W("isolationism", "noun", "a policy of staying out of other countries’ problems and wars", "Before the attack on Pearl Harbor in 1941, isolationism kept many Americans against joining World War II.", "isolate = keep apart."),
        W("containment", "noun", "the Cold War policy of stopping communism from spreading to more countries", "The United States fought in Korea as part of its policy of containment.", "contain = keep inside."),
        W("immigration", "noun", "moving to a new country to live there", "Ellis Island in New York handled the immigration of millions of newcomers from Europe.", "im- = into: moving into a country.")
      ]
    },
    govecon: {
      name: "Government & Economics", emoji: "🏛️", color: "#4f46e5", group: "Content Words",
      blurb: "How the U.S. government works, plus the big ideas of economics and money.",
      words: [
        W("federalism", "noun", "a system that divides power between the national government and the state governments", "Because of federalism, California can set its own minimum wage higher than the national one."),
        W("separation of powers", "noun", "dividing the government into three branches so that no one group has all the power", "Separation of powers means Congress makes laws, the President carries them out, and the courts interpret them."),
        W("checks and balances", "noun", "the system that lets each branch of government limit the power of the other branches", "As part of checks and balances, Congress can override a President’s veto with a two-thirds vote in both houses."),
        W("legislative branch", "noun", "the branch of government that makes laws; in the U.S. it is Congress (the Senate and the House of Representatives)", "The legislative branch votes on bills to make new laws.", "legislate = make laws."),
        W("executive branch", "noun", "the branch of government that carries out and enforces laws, led by the President", "The executive branch includes the President, the Vice President, and departments like Education."),
        W("judicial branch", "noun", "the branch of government made of courts that interpret laws and decide if they follow the Constitution", "The judicial branch, led by the Supreme Court, decides whether laws follow the Constitution.", "judicial sounds like judge."),
        W("veto", "noun", "the power of a president or governor to reject a bill so it does not become law", "The governor used a veto to reject the bill, so it did not become law.", "Latin: “I forbid.”"),
        W("due process", "noun", "the rule that the government must follow fair legal steps before taking away a person’s life, freedom, or property", "Because of due process, a person accused of a crime has the right to a fair trial."),
        W("civil liberties", "noun", "basic freedoms that the government cannot take away, like freedom of speech, religion, and the press", "Civil liberties such as freedom of the press let newspapers criticize the government."),
        W("popular sovereignty", "noun", "the idea that the government gets its power from the people", "The first words of the Constitution, “We the People,” show popular sovereignty.", "popular = people, sovereignty = supreme power."),
        W("scarcity", "noun", "the problem that resources are limited but wants are unlimited, so people must make choices", "Because of scarcity, the school cannot buy every club everything it wants.", "scarce = not enough."),
        W("opportunity cost", "noun", "the value of the next best choice you give up when you make a decision", "The opportunity cost of working on Saturday is missing the soccer game with your friends."),
        W("supply", "noun", "the amount of a product that sellers are willing and able to sell at each price", "After a freeze ruined many orange trees, the supply of oranges at the store dropped."),
        W("demand", "noun", "the amount of a product that buyers are willing and able to buy at each price", "When a popular singer announces a concert, demand for tickets goes way up."),
        W("inflation", "noun", "a general rise in prices over time, so the same money buys less", "Because of inflation, a dollar buys less today than it did twenty years ago.", "inflate = blow up, like a balloon."),
        W("GDP", "noun", "gross domestic product: the total value of all the final goods and services a country produces in a year", "A country’s GDP grows when its businesses produce more goods and services."),
        W("interest", "noun", "money paid for borrowing money, or money earned for saving it, usually a percent", "If you borrow $1,000 at 5% interest for one year, you pay back $1,050."),
        W("budget", "noun", "a plan for how you will spend and save your money", "Lena made a budget so her paycheck would cover her phone bill, gas, and savings."),
        W("tax", "noun", "money that people and businesses must pay to the government to pay for public services", "Sales tax is added to the price of many things you buy in California."),
        W("incentive", "noun", "something that motivates a person to act, like a reward or a penalty", "A free drink after ten visits is an incentive to keep coming back to the café.")
      ]
    },
    ela: {
      name: "Literary & Rhetorical Terms", emoji: "📚", color: "#db2777", group: "Content Words",
      blurb: "The terms English teachers use for stories, poems, speeches, and arguments.",
      words: [
        W("theme", "noun", "a message or lesson about life that a story or poem shows", "The theme of the fable is that slow and steady effort wins in the end."),
        W("symbolism", "noun", "using an object, person, or color to stand for a bigger idea", "The author uses symbolism when the broken clock in the house stands for the family’s frozen grief."),
        W("metaphor", "noun", "a comparison of two unlike things that does not use “like” or “as”", "“The classroom was a zoo” is a metaphor for a loud, wild room."),
        W("simile", "noun", "a comparison of two unlike things that uses “like” or “as”", "“Her smile was as bright as the sun” is a simile because it uses the word “as.”", "simile sounds like similar."),
        W("personification", "noun", "giving human actions or feelings to something that is not human", "“The wind whispered through the trees” uses personification, because wind cannot really whisper.", "person inside personification."),
        W("imagery", "noun", "descriptive language that appeals to the five senses", "The poet’s imagery of sizzling tortillas and warm cinnamon makes you smell the kitchen.", "image = picture in your mind."),
        W("irony", "noun", "a contrast between what is expected and what actually happens or is meant", "It is irony when the fire station burns down."),
        W("foreshadowing", "noun", "hints or clues about what will happen later in a story", "The dark clouds in chapter one are foreshadowing for the storm that later destroys the town.", "fore = before: a shadow before the event."),
        W("point of view", "noun", "the perspective from which a story is told, such as first person (“I”) or third person (“he,” “she,” “they”)", "The story is told from a first-person point of view, so the narrator says “I.”"),
        W("tone", "noun", "the author’s attitude toward the subject, shown through word choice", "The author’s tone is sarcastic when she calls the three-hour meeting “a real thrill.”", "Tone = the author’s attitude. Mood = the reader’s feeling.", { nosent: ["mood"] }),
        W("mood", "noun", "the feeling a reader gets from a text", "The creaking floors and dark hallways set a spooky mood for me as a reader.", null, { nosent: ["tone", "conflict"] }),
        W("characterization", "noun", "the ways an author shows what a character is like, through what they say, do, think, and how others react", "The author uses characterization when she shows that Marco is kind by having him share his lunch."),
        W("conflict", "noun", "a struggle between opposing forces in a story; it can be inside a character or between a character and something outside", "The main conflict is between Ana and the storm that threatens her family’s farm."),
        W("ethos", "noun", "an appeal to the speaker’s credibility, character, or expertise", "The doctor builds ethos by mentioning her 20 years of experience treating patients.", "ethos ≈ ethics: can I trust this speaker?"),
        W("pathos", "noun", "an appeal to the audience’s emotions", "The ad uses pathos by showing sad, hungry puppies to make viewers feel sorry for them.", "pathos ≈ sympathy: feelings."),
        W("logos", "noun", "an appeal to logic, facts, and reasoning", "The speaker uses logos by sharing data that students who sleep more earn higher grades.", "logos ≈ logic."),
        W("rhetorical question", "noun", "a question asked for effect, not to get an answer", "“Who doesn’t want to be happy?” is a rhetorical question because the speaker does not expect anyone to answer."),
        W("allusion", "noun", "a short reference to a well-known person, place, event, or story", "Calling a strong teammate “our Hercules” is an allusion to Greek mythology."),
        W("hyperbole", "noun", "an extreme exaggeration used for effect", "“I have a million things to do today” is a hyperbole.", "hyper = over the top."),
        W("alliteration", "noun", "the repetition of the same beginning sound in words that are close together", "“Peter Piper picked a peck of pickled peppers” is a famous example of alliteration.")
      ]
    },
    /* ---------------------------------------------------------------- AVID & COLLEGE */
    college: {
      name: "College Words", emoji: "🎓", color: "#e8368f", group: "AVID & College",
      blurb: "GPA, A–G, FAFSA, financial aid, and the words you need to plan for college.",
      words: [
        W("GPA", "noun", "grade point average: the average of your grades, usually on a scale where A = 4, B = 3, C = 2, D = 1, and F = 0", "Getting a B instead of a C in biology raised Ana’s GPA."),
        W("A–G requirements", "noun", "the list of high school courses, in seven subject areas labeled a through g, that you must pass with a C or better to be eligible for UC and CSU", "Taking two years of Spanish helps you meet the A–G requirements for a language other than English.", "UC and CSU ask for 15 year-long A–G courses. Check with your counselor for details."),
        W("transcript", "noun", "the official record of every class you took and the grade you earned", "The counselor printed my transcript so I could check that every class and grade was listed."),
        W("FAFSA", "noun", "the Free Application for Federal Student Aid, the form you use to apply for federal money for college", "Seniors fill out the FAFSA to apply for federal grants, work-study, and student loans.", "File it every year you are in college. Check the current deadline, because dates can change."),
        W("California Dream Act", "noun", "a state law that lets eligible undocumented students and some other students apply for California financial aid, using their own application instead of the FAFSA", "Because Luis is undocumented, he used the application for the California Dream Act instead of the FAFSA.", "The application is often called the CADAA."),
        W("Cal Grant", "noun", "money from the State of California for college that you do not have to pay back, based on financial need and other rules like GPA", "Maria’s Cal Grant helps pay her tuition at Fresno State.", "Rules and amounts change. Check the current requirements at csac.ca.gov."),
        W("prerequisite", "noun", "a class or requirement you must finish before you can take another class", "Algebra 1 is a prerequisite for Geometry at many high schools.", "pre- = before."),
        W("major", "noun", "the main subject you study in college", "Diego’s major is nursing, so most of his college classes are about health and patient care."),
        W("minor", "noun", "a second, smaller area of study in college that takes fewer classes than a major", "Along with her business major, Sara added a minor in Spanish, which takes just a few extra classes."),
        W("transfer", "verb", "to move from one college to another, often from a community college to a four-year university", "After two years at College of the Sequoias, Jasmine plans to transfer to UC Davis.", "trans- = across."),
        W("financial aid", "noun", "money to help pay for college, including grants, scholarships, work-study, and loans", "Ask the college’s financial aid office how much help you can get to pay for books and housing."),
        W("grant", "noun", "money for college that you usually do not have to pay back, often based on financial need", "Kevin received a grant from the government, so he will not have to pay that money back."),
        W("loan", "noun", "money you borrow and must pay back later, usually with interest", "Marcus took out a student loan, so he will make monthly payments after he graduates."),
        W("work-study", "noun", "a financial aid program that gives students part-time jobs, often on campus, to earn money for school", "Through work-study, Priya earns money for college by working at the campus library."),
        W("community college", "noun", "a public two-year college that offers associate degrees, career certificates, and classes that transfer to universities", "College of the Sequoias is a community college in Visalia where you can earn an associate degree or prepare to transfer."),
        W("CSU", "noun", "the California State University, a system of public universities across California that offers bachelor’s and master’s degrees", "Fresno State is the closest CSU campus to Tulare."),
        W("UC", "noun", "the University of California, a system of public research universities with nine campuses that offer bachelor’s degrees", "UC Merced is the newest campus in the UC system."),
        W("Personal Insight Questions", "noun", "the short-answer essay questions on the UC application; you choose 4 of 8 questions and answer each in 350 words or less", "For the Personal Insight Questions, Sofia wrote about helping her family run their taco truck.", "Check the UC website each year in case the questions change."),
        W("extracurricular", "adjective", "describing an activity outside of regular classes, like sports, clubs, music, a job, or volunteering", "Playing on the soccer team is an extracurricular activity that shows teamwork and commitment.", "extra- = outside, curricular = the class schedule."),
        W("letter of recommendation", "noun", "a letter from a teacher, counselor, coach, or boss that describes your strengths to a college or scholarship", "Ask a teacher who knows you well to write a letter of recommendation at least two weeks before it is due.", "UC does not ask for these, but many private colleges and scholarships do.")
      ]
    },
    avid: {
      name: "AVID Words", emoji: "🧠", color: "#f05a28", group: "AVID & College",
      blurb: "WICOR, focused notes, TRFs, tutorials, and the other words of the AVID classroom.",
      words: [
        W("WICOR", "noun", "AVID’s five learning strategies: Writing to learn, Inquiry, Collaboration, Organization, and Reading to learn", "Our teacher planned the lesson with WICOR, so we wrote, asked questions, worked in groups, organized our notes, and read.", "W-I-C-O-R: one letter for each strategy."),
        W("focused notes", "noun", "AVID’s note-taking system: you take notes, then process them, ask questions, write a summary, and use them to study", "In my focused notes, I wrote questions in the left column and a summary at the bottom.", "Based on Cornell notes."),
        W("TRF", "noun", "Tutorial Request Form: the form you fill out before tutorial to explain your point of confusion and what you already know", "Before tutorial on Tuesday, I filled out my TRF with my math problem and the steps I already tried."),
        W("point of confusion", "noun", "the exact step or question where you get stuck in your learning", "My point of confusion was how to find the slope when both points have negative numbers.", "Often shortened to POC."),
        W("tutorial", "noun", "a small-group session in AVID class where students present what they are stuck on and the group uses questions to work it out", "In tutorial, the tutor asked me questions until I figured out the problem myself.", "The tutor guides with questions. The tutor does not give the answer.", { syn: ["collaborative study group"] }),
        W("collaborative study group", "noun", "AVID’s name for a group of students who use questioning to help each other solve their points of confusion", "In our collaborative study group, I shared my chemistry problem, and my classmates asked questions until I solved it.", "Many schools now use this name for tutorial groups.", { syn: ["tutorial"] }),
        W("Costa’s levels of thinking", "noun", "three levels of questions: Level 1 gathers facts, Level 2 processes and connects them, and Level 3 applies them to new situations", "Using Costa’s levels of thinking, the question “What if the South had won the Civil War?” is Level 3.", "Level 1 = in the text. Level 2 = between texts. Level 3 = beyond the text."),
        W("binder check", "noun", "a regular check of your AVID binder for organized sections, a planner, and complete notes", "Before the binder check on Friday, I put my handouts into the right subject sections."),
        W("Socratic seminar", "noun", "a formal discussion about a text where students ask open-ended questions and build on each other’s ideas", "During the Socratic seminar, the inner circle discussed the poem while the outer circle took notes.", "Named after Socrates, a Greek teacher who taught by asking questions.", { nosent: ["collaborative study group", "tutorial"] }),
        W("philosophical chairs", "noun", "a structured discussion where students move to the agree, disagree, or neutral side of the room and can switch sides when someone changes their mind", "In philosophical chairs, I moved to the disagree side after hearing a strong argument."),
        W("essential question", "noun", "a big, open-ended question that guides a lesson or unit", "The essential question for our unit is “What makes a person a hero?”"),
        W("marking the text", "noun", "a reading strategy where you number the paragraphs, circle key terms, and underline important claims", "While marking the text, I circled key words and underlined the author’s claims."),
        W("learning log", "noun", "a notebook or journal where you write what you learned, what you still wonder, and how you learned it", "At the end of class, I wrote three new ideas and one question in my learning log.", null, { nosent: ["reflection", "focused notes", "summary"] }),
        W("one-pager", "noun", "a single page that shows your understanding of a text or topic using images, quotes, and your own words", "My one-pager on the novel had a drawing, two quotes, and my theme statement."),
        W("reflection", "noun", "thinking and writing about what you learned, how you learned it, and what you will do next", "In my reflection after the test, I wrote that studying a little each night worked better than cramming.", null, { nosent: ["learning log", "summary"] }),
        W("planner", "noun", "a calendar or notebook where you write down assignments, due dates, and plans", "I wrote the test date in my planner so I could study a little each night."),
        W("inquiry", "noun", "learning by asking questions and investigating to find the answers", "Our science lab used inquiry: we asked our own question about plant growth and designed a test to answer it.", "inquire = ask."),
        W("summary", "noun", "a short statement of the main ideas in your own words", "At the bottom of my notes, I wrote a three-sentence summary of the lesson.")
      ]
    }
  };

  /* ---------------- helpers ---------------- */
  const hash = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
  const rng = seed => { let a = hash(seed); return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
  const shuffle = (arr, r) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const escH = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[’']/g, "['’]").replace(/[–—-]/g, "[-–—]");
  const termRe = (t, flags) => new RegExp("\\b" + reEsc(t) + "\\b", flags || "i");
  const posKey = w => String(w.pos || "").split(" ")[0];
  const norm = s => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

  /* regex for the write block: finds any deck term (plus simple endings like -s, -ed, -ing) */
  function finder(id) {
    const d = window.VOCAB_DECKS[id]; if (!d) return /$^/;
    const alts = d.words.map(w => w.term).sort((a, b) => b.length - a.length).map(t => {
      const parts = t.split(" "), last = parts.pop(), e = reEsc(last);
      let end;
      if (/^[A-Z]{2,}$/.test(last)) end = e + "s?";
      else if (/e$/i.test(last)) end = e.slice(0, -1) + "(?:e|es|ed|ing)";
      else if (/[^aeiou]y$/i.test(last)) end = e.slice(0, -1) + "(?:y|ies|ied|ying)";
      else end = e + "(?:s|es|ed|ing)?";
      return parts.map(reEsc).concat(end).join("\\s+");
    });
    return new RegExp("\\b(?:" + alts.join("|") + ")\\b", "i");
  }

  /* put <b>term</b> into a sentence in place of another term, fixing a/an */
  function swapIn(ex, from, to) {
    let out = ex.replace(termRe(from, "gi"), (m, off) => "\u0001" + (off === 0 && /^[a-z]/.test(to) ? to[0].toUpperCase() + to.slice(1) : to) + "\u0002");
    out = out.replace(/\b([Aa])n? \u0001/g, (m, a) => { const an = /^[aeiou]/i.test(to) && !/^U[A-Z]/.test(to); return a + (an ? "n " : " ") + "\u0001"; });
    return escH(out).replace(/\u0001/g, "<b>").replace(/\u0002/g, "</b>");
  }
  const boldTerm = (ex, t) => escH(ex.replace(termRe(t, "gi"), m => "\u0001" + m + "\u0002")).replace(/\u0001/g, "<b>").replace(/\u0002/g, "</b>");

  /* 10 multiple-choice questions, the same for everyone (seeded by deck id) */
  function buildQuiz(id, n) {
    const d = window.VOCAB_DECKS[id], WD = d.words, r = rng("vocab-quiz:" + id); n = Math.min(n || 10, WD.length);
    const targets = shuffle(WD.map((_, i) => i), r).slice(0, n);
    const types = ["d2t", "t2d", "sent", "d2t", "sent", "t2d", "d2t", "sent", "t2d", "d2t"];
    const ansPos = shuffle([0, 1, 2, 3, 0, 1, 2, 3, 0, 1], r);
    const notSyn = (w, o) => o !== w && !(w.syn || []).includes(o.term) && !(o.syn || []).includes(w.term) && norm(o.term) !== norm(w.term);
    const pick = (pool, prefer, k) => { const a = shuffle(pool.filter(prefer), r), b = shuffle(pool.filter(x => !prefer(x)), r); return a.concat(b).slice(0, k); };
    return targets.map((ti, k) => {
      const w = WD[ti]; let type = types[k % types.length];
      const sentPool = WD.filter(o => notSyn(w, o) && !(w.nosent || []).includes(o.term) && !(o.nosent || []).includes(w.term) && !termRe(w.term).test(o.ex) && !termRe(o.term).test(w.term) && !termRe(w.term).test(o.term));
      if (type === "sent" && sentPool.length < 3) type = "d2t";
      let correct, wrong, q, why;
      if (type === "sent") {
        const src = pick(sentPool, o => posKey(o) !== posKey(w), 3);
        correct = boldTerm(w.ex, w.term); wrong = src.map(o => swapIn(o.ex, o.term, w.term));
        q = `Which sentence uses <b>${escH(w.term)}</b> correctly?`;
        why = `<b>${escH(w.term)}</b> means ${escH(w.def)}. The other sentences really need a different word.`;
      } else {
        const pool = WD.filter(o => notSyn(w, o)), src = pick(pool, o => posKey(o) === posKey(w), 3);
        if (type === "d2t") { correct = escH(w.term); wrong = src.map(o => escH(o.term)); q = `Which word or phrase means <i>“${escH(w.def)}”</i>?`; }
        else { correct = escH(w.def); wrong = src.map(o => escH(o.def)); q = `What does <b>${escH(w.term)}</b> mean?`; }
        why = `<b>${escH(w.term)}</b> (${escH(w.pos)}) means ${escH(w.def)}. Example: ${boldTerm(w.ex, w.term)}`;
      }
      const a = ansPos[k % ansPos.length], opts = wrong.slice(); opts.splice(a, 0, correct);
      return { q, opts, a, why, type, term: w.term };
    });
  }

  window.VOCAB = { rng, shuffle, hash, finder, buildQuiz, termRe, norm };

  /* ---------------- styles (injected once) ---------------- */
  function inject() {
    if (typeof document === "undefined" || document.getElementById("vx-css")) return;
    const s = document.createElement("style"); s.id = "vx-css"; s.textContent = `
.vx-b{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:2px solid var(--line);background:var(--surface);color:var(--fg);border-radius:999px;padding:9px 16px;font-weight:800;cursor:pointer;min-height:44px}
.vx-b:hover:not(:disabled){border-color:var(--lc)}.vx-b:disabled{opacity:.45;cursor:not-allowed}
.vx-b.vx-main{background:var(--lc);border-color:var(--lc);color:#fff}.vx-b.vx-ok{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 12%,var(--surface))}.vx-b.vx-no{border-color:var(--part);background:color-mix(in srgb,var(--part) 14%,var(--surface))}
.vx-b.vx-on{box-shadow:0 0 0 3px color-mix(in srgb,var(--lc) 35%,transparent)}
.vx-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:center;margin:10px 0}
.vx-top{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-weight:800;font-size:.92rem;color:var(--muted)}
.vx-bar{height:12px;border-radius:999px;background:var(--soft);overflow:hidden;margin:6px 0 12px;border:1px solid var(--line)}.vx-bar span{display:block;height:100%;background:var(--lc);border-radius:999px;transition:width .3s}
.vx-h{font:600 1.2rem var(--display);margin:0 0 4px}
.vx-help{color:var(--muted);font-weight:700;font-size:.9rem;margin:0 0 8px}
/* flashcards */
.vx-card{display:block;width:100%;max-width:620px;margin:0 auto;border:0;background:none;padding:0;cursor:pointer;perspective:1200px;color:var(--fg);text-align:center}
.vx-in{display:grid;transition:transform .55s cubic-bezier(.3,.7,.3,1);transform-style:preserve-3d;min-height:250px}
.vx-card.vx-flip .vx-in{transform:rotateY(180deg)}
.vx-face{grid-area:1/1;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:22px;padding:22px 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;border:3px solid color-mix(in srgb,var(--lc) 45%,var(--line));box-shadow:var(--shadow)}
.vx-front{background:color-mix(in srgb,var(--lc) 10%,var(--surface))}
.vx-back{background:var(--surface);transform:rotateY(180deg)}
.vx-term{font:600 clamp(1.7rem,6vw,2.6rem) var(--display);line-height:1.1;overflow-wrap:anywhere}
.vx-pos{font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;background:var(--soft);border-radius:999px;padding:2px 10px;color:var(--muted)}
.vx-tap{font-size:.85rem;font-weight:700;color:var(--muted)}
.vx-def{font-size:1.15rem;font-weight:800;line-height:1.35}
.vx-ex{font-style:italic;color:var(--muted);margin:0}
.vx-tip{font-size:.9rem;background:var(--soft);border-radius:12px;padding:6px 10px;margin:0}
.vx-mark{font-weight:900;font-size:.8rem;border-radius:999px;padding:2px 10px}.vx-mark.k{background:color-mix(in srgb,var(--ok) 18%,var(--surface));color:var(--ok)}.vx-mark.l{background:color-mix(in srgb,var(--part) 22%,var(--surface))}
.vx-piles{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:620px;margin:6px auto 0;text-align:center}
.vx-piles div{background:var(--soft);border-radius:14px;padding:6px}.vx-piles b{display:block;font:600 1.4rem var(--display)}.vx-piles span{font-size:.8rem;font-weight:800;color:var(--muted)}
/* match */
.vx-mhead{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:space-between}
.vx-clock{font:600 1.6rem var(--display);font-variant-numeric:tabular-nums;background:var(--soft);border-radius:14px;padding:2px 14px}
.vx-grid{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:10px;margin-top:10px}
.vx-col{display:grid;gap:8px;align-content:start}
.vx-tile{border:2px solid var(--line);background:var(--surface);color:var(--fg);border-radius:14px;padding:10px 12px;font-weight:700;text-align:left;cursor:pointer;min-height:48px;line-height:1.3;overflow-wrap:break-word;hyphens:auto;-webkit-hyphens:auto}
.vx-tile.vx-t{font:600 1.05rem var(--display)}.vx-tile.vx-d{font-size:.9rem}
.vx-tile.vx-sel{border-color:var(--lc);background:color-mix(in srgb,var(--lc) 12%,var(--surface));box-shadow:0 0 0 3px color-mix(in srgb,var(--lc) 30%,transparent)}
.vx-tile.vx-got{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 13%,var(--surface));opacity:.6;cursor:default}
.vx-tile.vx-bad{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 12%,var(--surface));animation:vx-shake .45s}
@keyframes vx-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
.vx-big{text-align:center;background:var(--soft);border-radius:18px;padding:18px}.vx-big b{font:600 2rem var(--display);display:block}
/* spell */
.vx-spell{max-width:640px;margin:0 auto}
.vx-defcard{border:3px solid color-mix(in srgb,var(--lc) 40%,var(--line));border-radius:20px;padding:16px 18px;background:color-mix(in srgb,var(--lc) 7%,var(--surface))}
.vx-pat{font:600 1.5rem var(--display);letter-spacing:.18em;margin:10px 0 0;overflow-wrap:anywhere;font-variant-numeric:tabular-nums}
.vx-form{display:grid;gap:6px;margin-top:12px}.vx-form label{font-weight:800}
.vx-form input{font-size:1.2rem;font-weight:700;padding:10px 14px;border-radius:14px;border:2px solid var(--line);background:var(--surface);width:100%;min-width:0}
.vx-fb{font-weight:800;min-height:1.5em;margin:6px 0 0}.vx-fb.ok{color:var(--ok)}.vx-fb.bad{color:var(--bad)}
.vx-res{list-style:none;padding:0;margin:10px 0;display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:6px}.vx-res li{background:var(--soft);border-radius:10px;padding:5px 10px;font-weight:700}
@media (prefers-reduced-motion:reduce){.vx-in{transition:none}.vx-tile.vx-bad{animation:none}.vx-bar span{transition:none}}
@media (max-width:520px){.vx-grid{grid-template-columns:minmax(0,1fr) minmax(0,1.35fr);gap:7px}.vx-tile{padding:8px 8px}.vx-tile.vx-d{font-size:.82rem}.vx-tile.vx-t{font-size:.88rem}.vx-in{min-height:230px}}`;
    document.head.appendChild(s);
  }

  /* ---------------- lesson blocks ---------------- */
  (window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
    const { $, $$, esc } = H;
    inject();
    const deckOf = b => (window.VOCAB_DECKS[b.deck] || { words: b.words || [] });
    const wordsOf = b => b.words || deckOf(b).words;
    const fmt = ms => { const s = ms / 1000, m = Math.floor(s / 60); return `${m}:${(s - m * 60).toFixed(1).padStart(4, "0")}`; };
    /* re-render one block in place; if its score changed, let the engine redraw the page so the station nav updates */
    const local = (type, root, b, st, save, redraw) => () => {
      const before = BT[type].score(b, st).pts; save();
      if (BT[type].score(b, st).pts !== before) { redraw(); return; }
      root.innerHTML = BT[type].html(b, st); BT[type].wire(root, b, st, save, redraw);
    };

    /* ===== FLASHCARDS ===== */
    BT.flash = {
      view(b, st) { const n = wordsOf(b).length; let ord = st.ord && st.ord.length === n ? st.ord : [...Array(n).keys()]; if (st.only) { const f = ord.filter(i => (st.pile || {})[i] === "l"); if (f.length) ord = f; } return ord; },
      html(b, st) {
        const WD = wordsOf(b), n = WD.length, ord = BT.flash.view(b, st), pos = Math.min(st.i || 0, ord.length - 1), wi = ord[pos], w = WD[wi];
        const seen = Object.keys(st.seen || {}).length, pile = st.pile || {}, know = Object.values(pile).filter(v => v === "k").length, learn = Object.values(pile).filter(v => v === "l").length;
        return `<div class="vx-flash"><h4 class="vx-h">🃏 Flashcards</h4><p class="vx-help">Read the word and say what you think it means. Then tap the card to flip it. Sort each card into a pile. Flip every card to earn the point.</p>
          <div class="vx-top"><span>Card ${pos + 1} of ${ord.length}${st.only ? " (Still learning only)" : ""}</span><span>Flipped ${seen} of ${n}</span></div>
          <div class="vx-bar" role="progressbar" aria-label="Cards flipped" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${seen}"><span style="width:${(100 * seen / n).toFixed(1)}%"></span></div>
          <button class="vx-card" type="button" data-vx="flip" aria-label="Flashcard: ${esc(w.term)}. Press to flip.">
            <span class="vx-in"><span class="vx-face vx-front"><span class="vx-pos">${esc(w.pos)}</span><span class="vx-term">${esc(w.term)}</span>${pile[wi] ? `<span class="vx-mark ${pile[wi]}">${pile[wi] === "k" ? "✅ I know it" : "🔁 Still learning"}</span>` : ""}<span class="vx-tap">👆 Tap to flip</span></span>
            <span class="vx-face vx-back" aria-hidden="true"><span class="vx-pos">${esc(w.term)}</span><span class="vx-def">${esc(w.def)}</span><span class="vx-ex">“${esc(w.ex)}”</span>${w.tip ? `<span class="vx-tip">💡 ${esc(w.tip)}</span>` : ""}</span></span></button>
          <div class="vx-row"><button class="vx-b" type="button" data-vx="back" aria-label="Previous card" ${pos ? "" : "disabled"}>◀</button><button class="vx-b" type="button" data-vx="shuffle">🔀 Shuffle</button><button class="vx-b" type="button" data-vx="fwd" aria-label="Next card" ${pos < ord.length - 1 ? "" : "disabled"}>▶</button></div>
          <div class="vx-row"><button class="vx-b vx-ok" type="button" data-vx="know">✅ I know it</button><button class="vx-b vx-no" type="button" data-vx="learn">🔁 Still learning</button></div>
          <div class="vx-piles"><div><b>${know}</b><span>I know it</span></div><div><b>${learn}</b><span>Still learning</span></div><div><b>${n - know - learn}</b><span>Not sorted</span></div></div>
          <div class="vx-row">${learn ? `<button class="vx-b${st.only ? " vx-on" : ""}" type="button" data-vx="only" aria-pressed="${!!st.only}">${st.only ? "📚 Show all cards" : `🎯 Practice only “Still learning” (${learn})`}</button>` : ""}</div></div>`;
      },
      wire(root, b, st, save, redraw) {
        const R = local("flash", root, b, st, save, redraw), ord = BT.flash.view(b, st), pos = Math.min(st.i || 0, ord.length - 1), n = wordsOf(b).length;
        const go = d => { st.i = Math.max(0, Math.min(ord.length - 1, pos + d)); R(); };
        const card = $('[data-vx="flip"]', root);
        card.onclick = () => {
          const on = card.classList.toggle("vx-flip"); $(".vx-back", card).setAttribute("aria-hidden", !on); $(".vx-front", card).setAttribute("aria-hidden", on);
          if (on && !(st.seen || {})[ord[pos]]) {
            const before = BT.flash.score(b, st).pts; (st.seen = st.seen || {})[ord[pos]] = 1; save();
            const k = Object.keys(st.seen).length; $(".vx-top span:last-child", root).textContent = `Flipped ${k} of ${n}`; $(".vx-bar span", root).style.width = (100 * k / n).toFixed(1) + "%"; $(".vx-bar", root).setAttribute("aria-valuenow", k);
            if (BT.flash.score(b, st).pts !== before) setTimeout(redraw, 650);
          }
        };
        $('[data-vx="back"]', root).onclick = () => go(-1);
        $('[data-vx="fwd"]', root).onclick = () => go(1);
        $('[data-vx="shuffle"]', root).onclick = () => { st.ord = VOCAB.shuffle([...Array(n).keys()], Math.random); st.i = 0; R(); };
        const mark = v => { (st.pile = st.pile || {})[ord[pos]] = v; if (st.only && !Object.values(st.pile).includes("l")) { st.only = false; st.i = 0; R(); return; } if (pos < ord.length - 1 && !(st.only && v === "k")) st.i = pos + 1; else if (st.only && v === "k") st.i = Math.min(pos, ord.length - 2); R(); };
        $('[data-vx="know"]', root).onclick = () => mark("k");
        $('[data-vx="learn"]', root).onclick = () => mark("l");
        const o = $('[data-vx="only"]', root); if (o) o.onclick = () => { st.only = !st.only; st.i = 0; R(); };
        root.onkeydown = e => { if (e.target.tagName === "INPUT") return; if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); } if (e.key === "ArrowRight") { e.preventDefault(); go(1); } };
      },
      score: (b, st) => ({ max: 1, pts: Object.keys(st.seen || {}).length >= wordsOf(b).length ? 1 : 0, label: "flashcards" }),
      text: (b, st) => { const WD = wordsOf(b), p = st.pile || {}; return `Flipped ${Object.keys(st.seen || {}).length}/${WD.length}. Still learning: ${Object.keys(p).filter(i => p[i] === "l").map(i => WD[i].term).join(", ") || "none"}`; }
    };

    /* ===== MATCHING GAME ===== */
    let matchTimer = null;
    BT.match = {
      rounds(b, st) {
        const n = wordsOf(b).length, seq = st.seq && st.seq.length === n ? st.seq : [...Array(n).keys()], R = Math.ceil(n / 6), out = [];
        for (let r = 0; r < R; r++) { const g = seq.slice(r * 6, r * 6 + 6); for (let k = 0; g.length < Math.min(6, n); k++) if (!g.includes(seq[k])) g.push(seq[k]); out.push(g); }
        return out;
      },
      html(b, st) {
        const WD = wordsOf(b), rounds = BT.match.rounds(b, st), g = st.game;
        const best = st.best ? `<span class="mu">🏆 Best time: <b>${fmt(st.best)}</b></span>` : `<span class="mu">🏆 Best time: none yet</span>`;
        if (!g) return `<div class="vx-match"><h4 class="vx-h">🧩 Match It</h4><p class="vx-help">Match each word with its meaning. Tap a word, then tap its meaning. There are ${rounds.length} rounds of 6. The clock runs until you finish all rounds, so go fast but careful!</p>
          ${st.last ? `<div class="vx-big">🎉 Finished all ${rounds.length} rounds!<b>${fmt(st.last.t)}</b><span class="mu">${st.last.miss} wrong ${st.last.miss === 1 ? "try" : "tries"}${st.last.t === st.best ? " · New best time!" : ""}</span></div>` : ""}
          <div class="vx-row">${best}</div><div class="vx-row"><button class="vx-b vx-main" type="button" data-vx="start">${st.last ? "🔁 Play again to beat your time" : "▶ Start the clock"}</button></div></div>`;
        const grp = rounds[g.r], m = g.m || {};
        const tile = (i, kind) => `<button type="button" class="vx-tile ${kind === "t" ? "vx-t" : "vx-d"}${m[i] ? " vx-got" : ""}${g.sel && g.sel[0] === kind && g.sel[1] === i ? " vx-sel" : ""}" data-vx-${kind}="${i}" ${m[i] ? "disabled" : ""}>${m[i] ? "✓ " : ""}${esc(kind === "t" ? WD[i].term : WD[i].def)}</button>`;
        return `<div class="vx-match"><div class="vx-mhead"><h4 class="vx-h">🧩 Round ${g.r + 1} of ${rounds.length}</h4><span class="vx-clock" aria-label="Time">${fmt(Date.now() - g.start)}</span></div>
          <div class="vx-top"><span>Matched ${Object.keys(m).length} of ${grp.length}</span>${best}<span>Wrong tries: ${g.miss || 0}</span></div>
          <div class="vx-bar" aria-hidden="true"><span style="width:${(100 * (g.r + Object.keys(m).length / grp.length) / rounds.length).toFixed(1)}%"></span></div>
          <div class="vx-grid"><div class="vx-col" aria-label="Words">${grp.map(i => tile(i, "t")).join("")}</div><div class="vx-col" aria-label="Meanings">${g.dord.map(i => tile(i, "d")).join("")}</div></div>
          <p class="vx-fb" aria-live="polite"></p><div class="vx-row"><button class="vx-b" type="button" data-vx="quit">✖ Stop this game</button></div></div>`;
      },
      wire(root, b, st, save, redraw) {
        clearInterval(matchTimer);
        const R = local("match", root, b, st, save, redraw), rounds = BT.match.rounds(b, st), n = wordsOf(b).length;
        const newRound = r => { st.game.r = r; st.game.m = {}; st.game.sel = null; st.game.dord = VOCAB.shuffle(rounds[r], Math.random); };
        const s = $('[data-vx="start"]', root);
        if (s) { s.onclick = () => { st.seq = VOCAB.shuffle([...Array(n).keys()], Math.random); st.game = { start: Date.now(), miss: 0 }; const rr = BT.match.rounds(b, st); st.game.r = 0; st.game.m = {}; st.game.dord = VOCAB.shuffle(rr[0], Math.random); R(); const f = $(".vx-tile", root); if (f) f.focus(); }; return; }
        const g = st.game; if (!g) return;
        const clock = $(".vx-clock", root);
        matchTimer = setInterval(() => { if (!root.isConnected || !st.game) { clearInterval(matchTimer); return; } clock.textContent = fmt(Date.now() - g.start); }, 100);
        $('[data-vx="quit"]', root).onclick = () => { clearInterval(matchTimer); st.game = null; R(); };
        let busy = false;
        const pickTile = (kind, i, el) => {
          if (busy || (g.m || {})[i]) return;
          if (!g.sel || g.sel[0] === kind) { g.sel = g.sel && g.sel[0] === kind && g.sel[1] === i ? null : [kind, i]; $$(".vx-tile", root).forEach(t => t.classList.remove("vx-sel")); if (g.sel) el.classList.add("vx-sel"); save(); return; }
          const other = g.sel, ti = kind === "t" ? i : other[1], di = kind === "d" ? i : other[1];
          const tEl = $(`[data-vx-t="${ti}"]`, root), dEl = $(`[data-vx-d="${di}"]`, root); g.sel = null;
          if (ti === di) {
            (g.m = g.m || {})[ti] = 1; save();
            [tEl, dEl].forEach(x => { x.classList.remove("vx-sel"); x.classList.add("vx-got"); x.disabled = true; x.textContent = "✓ " + x.textContent; });
            const fb = $(".vx-fb", root); fb.className = "vx-fb ok"; fb.textContent = `✅ ${wordsOf(b)[ti].term}: correct!`;
            const k = Object.keys(g.m).length; $(".vx-top span", root).textContent = `Matched ${k} of ${rounds[g.r].length}`;
            $(".vx-bar span", root).style.width = (100 * (g.r + k / rounds[g.r].length) / rounds.length).toFixed(1) + "%";
            if (k >= rounds[g.r].length) {
              busy = true;
              setTimeout(() => {
                if (g.r + 1 < rounds.length) { newRound(g.r + 1); R(); const f = $(".vx-tile", root); if (f) f.focus(); }
                else { clearInterval(matchTimer); const t = Date.now() - g.start; st.last = { t, miss: g.miss || 0 }; st.best = st.best ? Math.min(st.best, t) : t; st.finished = true; st.plays = (st.plays || 0) + 1; st.game = null; R(); }
              }, 450);
            }
          } else {
            g.miss = (g.miss || 0) + 1; save();
            $(".vx-top span:last-child", root).textContent = `Wrong tries: ${g.miss}`;
            const fb = $(".vx-fb", root); fb.className = "vx-fb bad"; fb.textContent = "❌ Not a match. Try again.";
            [tEl, dEl].forEach(x => { x.classList.remove("vx-sel", "vx-bad"); void x.offsetWidth; x.classList.add("vx-bad"); setTimeout(() => x.classList.remove("vx-bad"), 500); });
          }
        };
        $$("[data-vx-t]", root).forEach(el => el.onclick = () => pickTile("t", +el.dataset.vxT, el));
        $$("[data-vx-d]", root).forEach(el => el.onclick = () => pickTile("d", +el.dataset.vxD, el));
      },
      score: (b, st) => ({ max: 2, pts: st.finished ? 2 : 0, label: "matching game" }),
      text: (b, st) => st.finished ? `Matching: finished ${st.plays || 1} time(s), best ${fmt(st.best)}` : "Matching: not finished"
    };

    /* ===== SPELL IT ===== */
    BT.spell = {
      list(b, st) { const WD = wordsOf(b), n = Math.min(b.n || 10, WD.length); return VOCAB.shuffle(WD.map((_, i) => i), VOCAB.rng(`vocab-spell:${b.deck || ""}:${st.att || 0}`)).slice(0, n); },
      pattern(term, h) { let k = 0; return term.split(" ").map(wd => `<span style="white-space:nowrap">${[...wd].map(c => /[A-Za-z0-9]/.test(c) ? (k++ < h ? esc(c) : "_") : esc(c)).join(" ")}</span>`).join(" &nbsp; "); },
      letters: t => (t.match(/[A-Za-z0-9]/g) || []).length,
      html(b, st) {
        const WD = wordsOf(b), L = BT.spell.list(b, st), res = st.res || [], k = st.k || 0;
        const right = res.filter(r => r && r.ok).length;
        if (k >= L.length) {
          const pct = Math.round(100 * right / L.length), pts = BT.spell.pts(right, L.length);
          return `<div class="vx-spell"><h4 class="vx-h">✏️ Spell It: results</h4><div class="vx-big">First try, no hints<b>${right} of ${L.length} (${pct}%)</b><span class="mu">This round: ${pts} of 2 points · Best: ${st.best || 0} of 2</span></div>
            <ul class="vx-res">${L.map((wi, j) => `<li>${res[j] && res[j].ok ? "✅" : "🔁"} ${esc(WD[wi].term)}</li>`).join("")}</ul>
            <p class="vx-help">80% or more = 2 points. 50% or more = 1 point. Your best round counts.</p>
            <div class="vx-row"><button class="vx-b vx-main" type="button" data-vx="again">🔁 Try a new set of words</button></div></div>`;
        }
        const w = WD[L[k]], c = st.cur || {}, nL = BT.spell.letters(w.term);
        return `<div class="vx-spell"><h4 class="vx-h">✏️ Spell It</h4><p class="vx-help">Read the meaning and type the word. It counts as a first-try win if you get it right on your first check without a hint.</p>
          <div class="vx-top"><span>Word ${k + 1} of ${L.length}</span><span>First-try wins: ${right}</span></div>
          <div class="vx-bar" aria-hidden="true"><span style="width:${(100 * k / L.length).toFixed(1)}%"></span></div>
          <div class="vx-defcard"><span class="vx-pos">${esc(w.pos)}</span><p class="vx-def" style="margin:8px 0 0">${esc(w.def)}</p>
            <p class="vx-pat" aria-label="${nL} letters${c.h ? `, starts with ${esc(w.term.replace(/[^A-Za-z0-9]/g, "").slice(0, c.h))}` : ""}">${BT.spell.pattern(w.term, c.done ? 999 : c.h || 0)}</p><span class="vx-tap">${nL} letters</span></div>
          <form class="vx-form" autocomplete="off" novalidate><label for="vx-sp-in">Type the word</label>
            <input id="vx-sp-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" value="${esc(c.v || "")}" ${c.done ? "disabled" : ""}>
            <div class="vx-row" style="justify-content:flex-start">${c.done ? `<button class="vx-b vx-main" type="button" data-vx="nextw">${k + 1 < L.length ? "Next word ▶" : "See my results ▶"}</button>`
              : `<button class="vx-b vx-main" type="submit">Check</button><button class="vx-b" type="button" data-vx="hint" ${(c.h || 0) >= nL ? "disabled" : ""}>💡 Hint: show a letter</button>${(c.tries || 0) >= 2 ? `<button class="vx-b" type="button" data-vx="show">👀 Show the answer</button>` : ""}`}</div></form>
          <p class="vx-fb ${c.done ? (c.ok ? "ok" : "bad") : c.tries ? "bad" : ""}" aria-live="polite">${c.done ? (c.ok ? `✅ Correct on the first try! ${esc(w.ex)}` : c.shown ? `The word is <b>${esc(w.term)}</b>. ${esc(w.ex)}` : `✅ Correct! (Not a first-try win this time.) ${esc(w.ex)}`) : c.tries ? `❌ Not quite. Check your spelling and try again${c.tries >= 2 ? ", use a hint, or show the answer" : " or use a hint"}.` : ""}</p></div>`;
      },
      pts: (right, n) => { const p = right / n; return p >= 0.8 ? 2 : p >= 0.5 ? 1 : 0; },
      wire(root, b, st, save, redraw) {
        const R = local("spell", root, b, st, save, redraw), WD = wordsOf(b), L = BT.spell.list(b, st), k = st.k || 0;
        const again = $('[data-vx="again"]', root);
        if (again) { again.onclick = () => { st.att = (st.att || 0) + 1; st.k = 0; st.res = []; st.cur = {}; R(); }; return; }
        const w = WD[L[k]], c = st.cur = st.cur || {}, inp = $("#vx-sp-in", root);
        const finish = ok => { c.done = true; c.ok = ok; (st.res = st.res || [])[k] = { ok, term: w.term };
          if (k + 1 >= L.length) { const right = st.res.filter(r => r && r.ok).length; st.best = Math.max(st.best || 0, BT.spell.pts(right, L.length)); st.bestPct = Math.max(st.bestPct || 0, Math.round(100 * right / L.length)); }
          R(); const nb = $('[data-vx="nextw"]', root); if (nb) nb.focus(); };
        if (inp) inp.oninput = () => { c.v = inp.value; save(); };
        $(".vx-form", root).onsubmit = e => { e.preventDefault(); if (c.done) return; const v = inp.value;
          if (!VOCAB.norm(v)) { const fb = $(".vx-fb", root); fb.className = "vx-fb bad"; fb.textContent = "Type the word first."; return; }
          if (VOCAB.norm(v) === VOCAB.norm(w.term)) finish(!c.tries && !c.h && !c.shown);
          else { c.tries = (c.tries || 0) + 1; R(); const i2 = $("#vx-sp-in", root); if (i2) { i2.focus(); i2.select(); } } };
        const h = $('[data-vx="hint"]', root); if (h) h.onclick = () => { c.h = (c.h || 0) + 1; R(); const i2 = $("#vx-sp-in", root); if (i2) i2.focus(); };
        const sh = $('[data-vx="show"]', root); if (sh) sh.onclick = () => { c.shown = true; finish(false); };
        const nx = $('[data-vx="nextw"]', root); if (nx) nx.onclick = () => { st.k = k + 1; st.cur = {}; R(); const i2 = $("#vx-sp-in", root); if (i2) i2.focus(); else { const a = $('[data-vx="again"]', root); if (a) a.focus(); } };
      },
      score: (b, st) => ({ max: 2, pts: st.best || 0, label: "spelling" }),
      text: (b, st) => `Spelling best: ${st.bestPct || 0}% first try (${st.best || 0}/2). Missed: ${(st.res || []).filter(r => r && !r.ok).map(r => r.term).join(", ") || "none"}`
    };
  });
})();
