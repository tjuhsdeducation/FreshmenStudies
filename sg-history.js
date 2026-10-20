/* =====================================================================
   ✏️ UNIT STUDY GUIDES: WORLD HISTORY + US HISTORY
   Each guide: RC["id"] = { subject, mins, title, blurb, eq, target, sources, qs }.
   Link to one with:  study-guide.html?id=THE-ID
   Tabs: Key Ideas (vocab + cause and effect), Primary Sources, 🔬 Simulation.
   Question types and points are documented in rc-history.js and rc-engine.js.
   Answers count from 0: a:0 = A, a:1 = B, a:2 = C ...
   ===================================================================== */

/* ============================ WORLD HISTORY ============================ */
RC["sg-wh-industrial"] = {
  subject: "World History", mins: 25,
  title: "The Industrial Revolution",
  blurb: "Machines, factories, and fast-growing cities: why it started in Britain and how workers and reformers responded.",
  eq: "How did the Industrial Revolution change the way people lived and worked, and how did people respond?",
  target: "I can explain why industrialization began in Britain, describe its effects on workers and cities, and evaluate responses such as unions, reform laws, and socialism using primary sources and data.",
  sources: [
    { tab: "Key Ideas", title: "From Farms to Factories", numbered: true, blocks: [
      { p: "The <b>Industrial Revolution</b> was the shift from making goods by hand at home to making them with machines in factories. It began in Great Britain in the mid-1700s and spread to Western Europe, the United States, and Japan during the 1800s." },
      { h: "Why Britain was first" },
      { p: "Britain had several advantages at once. It had large supplies of <b>coal</b> (fuel) and <b>iron</b> (for machines). Rivers and many good harbors made it easy to move goods. An <b>agricultural revolution</b>, including the <b>enclosure</b> of common farmland and new methods such as crop rotation, produced more food with fewer farmers, so a growing population had workers ready for factory jobs. Wealthy merchants and banks had <b>capital</b> (money to invest), and a stable government protected property and inventions with patents. Britain’s colonies and navy supplied raw cotton and gave it markets around the world." },
      { h: "Key inventions" },
      { p: "Textiles (cloth) were the first industry to change. James Hargreaves’ <b>spinning jenny</b> (about 1764) let one worker spin many threads at once. Richard Arkwright’s water frame (1769) used water power and led to the first large mills. Edmund Cartwright’s <b>power loom</b> (1785) wove cloth by machine. Meanwhile, James Watt greatly improved the <b>steam engine</b> (patented 1769), making it efficient enough to power factories, and later railways and steamships. The Liverpool and Manchester Railway opened in 1830." },
      { h: "The factory system and the growth of cities" },
      { p: "In the <b>factory system</b>, workers came to one building, ran machines, and worked set hours for wages. Factories were built near coal and transportation, so people moved from the countryside to cities such as Manchester. This movement is called <b>urbanization</b>. Cities grew faster than housing, clean water, or sewers, so many workers lived in crowded, dirty <b>tenements</b> where diseases such as cholera spread." },
      { p: "Working conditions were harsh. Shifts of 12 to 16 hours were common, machines had no safety guards, and wages were low. Factory owners hired children because they were cheap and small enough to crawl under machines. In 1832 a committee of Parliament led by Michael Sadler collected testimony about child labor in textile mills. The next year Parliament passed the <b>Factory Act of 1833</b>." },
      { table: { cap: "The Factory Act of 1833 (textile mills)", head: ["Rule", "What it said"], rowHead: true, rows: [
        ["Minimum age", "No children under 9 could work in textile mills (silk mills were an exception)."],
        ["Ages 9 to 13", "No more than 9 hours a day (48 hours a week), plus 2 hours of school each day."],
        ["Ages 13 to 18", "No more than 12 hours a day (69 hours a week). No night work for anyone under 18."],
        ["Enforcement", "Government factory inspectors were hired to check that mills obeyed the law."]
      ]}},
      { h: "Responses: unions, reform, and socialism" },
      { p: "Workers formed <b>labor unions</b> to bargain together for better pay and hours, and sometimes went on <b>strike</b> (refused to work). Britain had banned unions, but it repealed that ban in 1824. Reformers pushed Parliament for more laws, including the Ten Hours Act of 1847, public health laws, and wider voting rights. Some thinkers went further. <b>Socialists</b> argued that society, not private owners, should control factories. In 1848 Karl Marx and Friedrich Engels published <i>The Communist Manifesto</i>, predicting that workers would overthrow the owners. Meanwhile, defenders of <b>capitalism</b> and <b>laissez-faire</b> (“let it be”) economics, following Adam Smith, argued that free markets with little government control would create the most wealth." },
      { vocab: [
        ["Industrialization", "the shift to producing goods with machines in factories"],
        ["Enclosure", "fencing off common land into private farms, which pushed many rural families toward cities"],
        ["Capital", "money or property used to start or grow a business"],
        ["Urbanization", "the growth of cities as people move from rural areas"],
        ["Labor union", "an organized group of workers who bargain together with employers"],
        ["Socialism", "an economic system in which the public or government owns the main industries"],
        ["Laissez-faire", "the idea that government should not interfere in the economy"]
      ]},
      { table: { cap: "Cause and effect", head: ["Cause", "Effect"], rows: [
        ["More food from the agricultural revolution", "Population grows; extra workers are available for factories"],
        ["Watt’s improved steam engine", "Factories no longer need to be next to rivers; railways spread"],
        ["Factories built in towns", "Rapid urbanization, crowded housing, disease"],
        ["Long hours and child labor", "Sadler Committee (1832), Factory Act (1833), unions"],
        ["Big gap between owners and workers", "Socialist ideas, including <i>The Communist Manifesto</i> (1848)"]
      ]}}
    ]},
    { tab: "Primary Sources", title: "Voices from the Industrial Age", blocks: [
      { h: "Source A: The Sadler Committee, 1832" },
      { p: "Elizabeth Bentley, age 23, worked in a flax mill in Leeds from the age of six. A <i>doffer</i> removed full bobbins of thread from spinning machines and replaced them with empty ones. “Thronged” means very busy. “Flagged” means slowed down. To “strap” means to beat with a leather strap. (... marks words left out.)", n: false },
      { quote: "<b>Q:</b> What age are you?<br><b>A:</b> Twenty-three.<br><b>Q:</b> What time did you begin to work at a factory?<br><b>A:</b> When I was six years old.<br>...<br><b>Q:</b> What was your business in that mill?<br><b>A:</b> I was a little doffer.<br><b>Q:</b> What were your hours of labour in that mill?<br><b>A:</b> From 5 in the morning till 9 at night, when they were thronged.<br>...<br><b>Q:</b> What were your usual hours of labour when you were not so thronged?<br><b>A:</b> From 6 in the morning till 7 at night.<br><b>Q:</b> What time was allowed for your meals?<br><b>A:</b> Forty minutes at noon.<br><b>Q:</b> Had you any time to get your breakfast or drinking?<br><b>A:</b> No, we got it as we could.<br>...<br><b>Q:</b> Suppose you flagged a little, or were too late, what would they do?<br><b>A:</b> Strap us.", by: "Testimony of Elizabeth Bentley, 1832" },
      { src: "Source: Report from the Committee on the Bill to Regulate the Labour of Children in the Mills and Factories (the Sadler Committee), British Parliamentary Papers, 1832. Public domain." },
      { h: "Source B: The Communist Manifesto, 1848" },
      { quote: "The history of all hitherto existing society is the history of class struggles.<br>...<br>The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!", by: "Karl Marx and Friedrich Engels, 1848" },
      { src: "Source: Marx and Engels, <i>Manifesto of the Communist Party</i>, English translation by Samuel Moore, 1888. Public domain. <i>Proletarians</i> = wage workers who own no factories or land." },
      { box: "<b>Source check:</b> The Sadler Committee was created by a reformer who wanted a law limiting child labor, and it mostly heard from witnesses who agreed. Historians still trust the testimony on hours and conditions, but they note its <b>purpose</b>: to persuade Parliament." }
    ]},
    { tab: "🔬 Simulation", title: "Data Race: Who Lived in Cities?", blocks: [
      { box: "<b>Try this:</b> 1) Press ▶ Play and watch both bars grow. 2) Drag the slider to 1850. Which country has about half its people in towns and cities? 3) Drag to 1900 and read the U.S. value. 4) Compare: about how many years behind England &amp; Wales was the United States?" },
      { sim: "datarace", title: "Share of people living in towns and cities, 1800–1900", tip: "Drag the slider to stop on any year.",
        years: [1800, 1825, 1850, 1875, 1900], unit: "%", max: 100,
        series: [
          { label: "England & Wales", vals: [25, 35, 50, 65, 77] },
          { label: "United States", vals: [6, 8, 15, 27, 40] }
        ],
        src: "Data: approximate and rounded. England &amp; Wales from British census reports (the 1851 census was the first to show about half the people in towns). United States from the U.S. Census Bureau (urban = places of 2,500 or more). The two countries defined “urban” differently, so compare trends, not exact numbers. 1825 and 1875 values are estimates between censuses." },
      { p: "Britain industrialized first, so its people moved to cities first. The United States industrialized later, mostly after 1850, and its urban share climbed quickly in the late 1800s.", n: false }
    ]},
    { tab: "⏳ Timeline", title: "Timeline of Key Inventions and Reforms", blocks: [
      { box: "<b>Try this:</b> 1) Press ▶ Play. 2) Notice the color for each kind of event. 3) Tap the 1785 dot. What did this invention do? 4) How many years after the spinning jenny did the first Factory Act pass?" },
      { sim: "timeline", title: "The Industrial Revolution", tip: "Tap any dot.", from: 1710, to: 1850, events: [
        { y: 1712, t: "Newcomen steam engine", d: "Thomas Newcomen’s engine pumps water out of coal mines. It works but wastes a lot of fuel.", tag: "Power" },
        { y: 1733, t: "Flying shuttle", d: "John Kay’s flying shuttle speeds up weaving, creating demand for more thread.", tag: "Textiles" },
        { y: 1764, t: "Spinning jenny", d: "James Hargreaves’ machine lets one worker spin many threads at once (about 1764).", tag: "Textiles" },
        { y: 1769, t: "Watt’s steam engine and the water frame", d: "James Watt patents a far more efficient steam engine. Richard Arkwright’s water-powered spinning frame leads to the first big mills.", tag: "Power" },
        { y: 1785, t: "Power loom", d: "Edmund Cartwright’s power loom weaves cloth by machine, moving weaving into factories.", tag: "Textiles" },
        { y: 1793, t: "Cotton gin", d: "In the U.S., Eli Whitney’s cotton gin cleans cotton quickly. Cotton production, and slavery in the South, expand.", tag: "Textiles" },
        { y: 1830, t: "Liverpool and Manchester Railway", d: "The first intercity railway powered by steam locomotives links a port to a factory city.", tag: "Transport" },
        { y: 1833, t: "Factory Act", d: "After the Sadler Committee, Parliament limits child labor in textile mills and hires inspectors.", tag: "Reform" },
        { y: 1848, t: "The Communist Manifesto", d: "Marx and Engels call on workers to unite against factory owners.", tag: "Reform" }
      ]}
    ]}
  ],
  qs: [
    { t: "multi", need: 3, ref: 1, q: "Which <b>three</b> factors helped Britain become the first country to industrialize?",
      opts: ["Large supplies of coal and iron", "A strict ban on all new inventions", "Rivers and harbors for moving goods", "A food shortage that shrank the population", "Bankers and merchants with capital to invest"], a: [0, 2, 4],
      why: "Paragraph 2 lists coal and iron, rivers and harbors, and capital. Britain protected inventions with patents (not a ban), and its population grew because the agricultural revolution produced more food." },
    { t: "grid", ref: 1, q: "Match each invention to what it did.", cols: ["Spinning jenny", "Power loom", "Watt’s steam engine", "Cotton gin"],
      rows: [["Wove thread into cloth by machine", 1], ["Spun many threads at once", 0], ["Provided efficient power for factories and trains", 2], ["Separated seeds from raw cotton quickly", 3]],
      why: "Spinning makes thread, weaving makes cloth. The jenny spun, the power loom wove, Watt’s engine supplied power, and the cotton gin cleaned raw cotton." },
    { t: "ebsr", ref: 2,
      A: { q: "What does Elizabeth Bentley’s testimony suggest about child workers in the 1830s?", opts: ["Children worked short shifts so they could attend school.", "Children worked very long days with little rest and could be punished physically.", "Most child workers were paid more than adults.", "Children could only work in mills during harvest season."], a: 1 },
      B: { q: "Which line <b>best</b> supports your answer to Part A?", opts: ["“What age are you? Twenty-three.”", "“I was a little doffer.”", "“From 5 in the morning till 9 at night, when they were thronged.”", "“What kind of mill is it?”"], a: 2 },
      why: "Her hours (5 a.m. to 9 p.m. when busy) show extremely long days. Her age today and her job title do not show conditions." },
    { t: "num", ref: 2, q: "When the mill was “thronged,” Elizabeth worked from 5 in the morning until 9 at night. How many hours is that from start to finish?", a: 16, tol: 0, unit: "hours",
      why: "5 a.m. to 5 p.m. is 12 hours, and 5 p.m. to 9 p.m. is 4 more: 12 + 4 = 16 hours, with only 40 minutes for a meal." },
    { t: "hot", ref: 2, q: "Click the answer from the testimony that shows workers were <b>physically punished</b>.",
      text: ["“When I was six years old.”", "“I was a little doffer.”", "“Forty minutes at noon.”", "“No, we got it as we could.”", "“Strap us.”"], a: [4],
      why: "To “strap” someone means to hit them with a leather strap. She says this happened if workers slowed down or were late." },
    { t: "num", ref: 3, q: "Use the simulation. Drag the slider to <b>1900</b>. About what percent of people in the <b>United States</b> lived in towns and cities?", a: 40, tol: 2, unit: "%",
      why: "At 1900 the U.S. bar reads about 40%. (The U.S. Census counted 39.6% urban in 1900.)" },
    { t: "mc", ref: 3, q: "Use the simulation. Which statement is <b>best</b> supported by the data?",
      opts: ["The United States became mostly urban before England and Wales did.", "Both countries had the same urban share in 1850.", "England and Wales urbanized earlier, and the U.S. followed later in the century.", "The urban share in both countries went down after 1850."], a: 2,
      why: "England and Wales reached about 50% by 1850, while the U.S. was only about 15%. The U.S. grew fast after 1850 but was still about 40% in 1900. Both bars rise; neither falls." },
    { t: "inline", ref: 1, q: "Complete the summary of the Factory Act of 1833.",
      text: "The Factory Act banned children under [[]] from working in textile mills, limited children ages 9 to 13 to [[]] hours a day, and hired [[]] to enforce the rules.",
      blanks: [{ opts: ["6", "9", "16"], a: 1 }, { opts: ["9", "12", "16"], a: 0 }, { opts: ["factory owners", "union leaders", "government inspectors"], a: 2 }],
      why: "See the Factory Act table: minimum age 9, a 9-hour limit for ages 9 to 13, and government inspectors to check the mills." },
    { t: "mc", ref: 2, q: "In Source B, what do Marx and Engels want workers to do?",
      opts: ["Unite across countries and take power from the owners", "Move back to farms in the countryside", "Ask Parliament politely for a ten-hour day", "Start their own small private businesses"], a: 0,
      why: "“Working Men of All Countries, Unite!” calls for workers everywhere to join together. They say workers have “nothing to lose but their chains,” meaning they expect a revolution, not just reform." },
    { t: "order", ref: 4, q: "Use the timeline. Put these events in order (first at the top).",
      items: ["Newcomen builds a steam engine to pump mines", "Hargreaves invents the spinning jenny", "Cartwright invents the power loom", "The Liverpool and Manchester Railway opens", "Parliament passes the Factory Act", "Marx and Engels publish <i>The Communist Manifesto</i>"],
      why: "1712, about 1764, 1785, 1830, 1833, 1848. Machines came first; reforms and new ideas came after people saw the effects." },
    { t: "mc", ref: 1, q: "How was a <b>labor union</b> different from <b>socialism</b>?",
      opts: ["Unions wanted the government to own all factories; socialists wanted no government.", "Unions and socialism are two names for the same thing.", "Socialists supported laissez-faire; unions opposed all strikes.", "Unions bargained with owners for better pay and hours; socialists wanted society to control the factories themselves."], a: 3,
      why: "A union works inside the existing system by bargaining together. Socialism changes the system so the public, not private owners, controls industry." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Explain <b>one cause</b> of the Industrial Revolution in Britain and <b>one effect</b> it had on workers or cities. Then describe <b>one response</b> to that effect. Use evidence from the sources.", min: 45,
      checks: [
        { label: "Names a cause (coal, iron, rivers, capital, food supply, colonies, inventions...)", re: /coal|iron|river|harbou?r|port|capital|bank|invest|colon|enclos|agricult|food|crop|population|patent|stable|steam|invent|machine/i },
        { label: "Names an effect (long hours, child labor, crowded cities, disease...)", re: /child|hour|long|danger|unsafe|accident|wage|pay|crowd|slum|tenement|disease|cholera|dirty|city|cities|urban|strap|punish/i },
        { label: "Names a response (Factory Act, union, strike, reform, socialism...)", re: /factory act|1833|union|strike|reform|law|socialis|marx|manifesto|inspector|ten hours|parliament|sadler/i },
        { label: "Connects ideas with cause-and-effect words", re: /because|so |as a result|led to|caused|therefore|since|which meant|this made|due to/i }
      ],
      rubric: "2 points: a correct cause, effect, and response, connected with evidence. 1 point: some correct parts but missing evidence or a link. 0 points: no accurate cause or effect.",
      why: "A strong answer links three things: a cause (such as coal, iron, capital, or extra workers from the agricultural revolution), an effect (such as 16-hour days or crowded cities), and a response (such as the Factory Act of 1833 or unions). Quoting the Sadler testimony makes the effect concrete.",
      model: "Britain had large supplies of coal and iron, so it could power steam engines and build machines. As a result, factories grew and children worked very long days. In the Sadler Committee, Elizabeth Bentley said she worked from 5 in the morning till 9 at night and was strapped if she slowed down. In response, Parliament passed the Factory Act of 1833, which banned children under 9 from textile mills and hired inspectors." }
  ]
};

RC["sg-wh-imperialism"] = {
  subject: "World History", mins: 25,
  title: "The Age of Imperialism",
  blurb: "Why industrial powers raced for colonies in Africa and Asia, and how people in China, India, Japan, and Ethiopia responded.",
  eq: "Why did industrial nations build empires in the 1800s, and how did colonized peoples resist or adapt?",
  target: "I can explain the motives for imperialism, describe its effects in Africa and Asia, and compare how different societies responded, using primary sources as evidence.",
  sources: [
    { tab: "Key Ideas", title: "Empires Around the World, 1800–1914", numbered: true, blocks: [
      { p: "<b>Imperialism</b> is a policy in which a strong nation takes political, economic, or military control of other lands. In the late 1800s, industrial nations such as Britain, France, Germany, Belgium, Italy, the United States, and Japan competed to build empires. This period is often called the <b>New Imperialism</b>." },
      { h: "Motives: why build an empire?" },
      { p: "<b>Economic:</b> Factories needed raw materials such as cotton, rubber, palm oil, and minerals, and they needed new markets to sell goods. <b>Political:</b> Colonies, naval bases, and coaling stations showed national power, and nations feared rivals would grab land first. <b>Religious and “civilizing”:</b> Missionaries wanted to spread Christianity, and many Europeans claimed they had a duty to “civilize” other peoples. <b>Social Darwinism:</b> Some writers misused Charles Darwin’s ideas about nature, using the phrase “survival of the fittest” to claim that some races and nations were superior. This idea is false and racist, but it was used to justify conquest." },
      { p: "Industrial technology made conquest easier. Steamships carried troops up rivers, the telegraph sped up communication, quinine helped Europeans survive malaria, and the <b>Maxim gun</b>, an early machine gun, gave European armies a huge advantage." },
      { h: "Africa: the Berlin Conference and the Scramble" },
      { p: "To avoid fighting each other over Africa, European powers met at the <b>Berlin Conference</b> (1884–85), hosted by German chancellor Otto von Bismarck. No Africans were invited. The powers agreed that a nation could claim land if it actually occupied and controlled it (“effective occupation”). The rush that followed is called the <b>Scramble for Africa</b>. Around 1870, Europeans controlled only about 10% of Africa, mostly along the coasts. By 1914 they controlled about 90%. Only <b>Ethiopia</b> and <b>Liberia</b> remained independent. New borders often split ethnic groups apart or forced rivals together, which caused conflicts that lasted long after independence." },
      { h: "India: from company rule to the British Raj" },
      { p: "The British East India Company gradually took control of much of India. In 1857, Indian soldiers in the Company’s army, called <b>sepoys</b>, rebelled. A key spark was a rumor that new rifle cartridges were greased with cow and pig fat, which offended both Hindus and Muslims. The rebellion spread across northern India before the British crushed it. In 1858 the British government took direct control, beginning the <b>British Raj</b>. Britain built railways and telegraph lines, but it also drained wealth from India and treated Indians as second-class subjects. In 1885 Indians founded the Indian National Congress, which later led the movement for independence." },
      { h: "China: the Opium Wars" },
      { p: "Britain bought large amounts of Chinese tea, silk, and porcelain, but China wanted few British goods. To balance trade, British merchants smuggled <b>opium</b> grown in India into China, causing widespread addiction. In 1839 Chinese official Lin Zexu seized and destroyed huge amounts of opium. Britain went to war and won the <b>First Opium War</b> (1839–42). The <b>Treaty of Nanjing</b> (1842) gave Hong Kong to Britain, opened five ports to British trade, and forced China to pay for the war. Chinese later called these <b>unequal treaties</b>. Later, foreign powers carved China into <b>spheres of influence</b>, areas where one foreign nation controlled trade. Anger at foreign control led to the Boxer Rebellion (1899–1901)." },
      { h: "Japan: the Meiji Restoration" },
      { p: "In 1853 U.S. Commodore Matthew Perry arrived with warships and pressured Japan to open its ports. Many Japanese saw what had happened to China. In 1868 reformers overthrew the shogun and restored power to the young emperor Meiji. During the <b>Meiji Restoration</b>, Japan rapidly <b>modernized</b>: it built railways and factories, created a national army with required military service, started public schools, and adopted a constitution in 1889. Japan then became an imperial power itself, defeating China (1894–95) and Russia (1904–05) and taking Taiwan and later Korea." },
      { h: "Resistance" },
      { p: "Colonized peoples resisted in many ways. At the <b>Battle of Adwa</b> on March 1, 1896, Emperor Menelik II of Ethiopia defeated an invading Italian army. Ethiopia had bought modern rifles and united its regions, and Italy was forced to recognize its independence. Other examples include the Zulu victory at Isandlwana (1879), the Sepoy Rebellion, the Boxer Rebellion, and the Maji Maji uprising in German East Africa (1905–07)." },
      { vocab: [
        ["Imperialism", "a strong nation taking control of other lands and peoples"],
        ["Colony", "a land ruled by another country"],
        ["Social Darwinism", "the false, racist idea that “survival of the fittest” applies to nations and races"],
        ["Sphere of influence", "an area where one foreign power has special control over trade"],
        ["Unequal treaty", "an agreement forced on a weaker country that gives a stronger country unfair advantages"],
        ["Sepoy", "an Indian soldier serving in the British East India Company’s army"],
        ["Modernize", "to adopt new technology, industry, and ways of organizing society"]
      ]},
      { table: { cap: "Cause and effect", head: ["Cause", "Effect"], rows: [
        ["Factories need raw materials and markets", "Industrial nations seek colonies in Africa and Asia"],
        ["European rivalry over Africa", "Berlin Conference (1884–85) and the Scramble for Africa"],
        ["Rumors about greased cartridges and British disrespect", "Sepoy Rebellion (1857), then direct British rule (1858)"],
        ["British opium smuggling and Chinese resistance", "Opium War and the unequal Treaty of Nanjing (1842)"],
        ["Japan sees China weakened by the West", "Meiji Restoration (1868) and rapid modernization"]
      ]}}
    ]},
    { tab: "Primary Sources", title: "Arguments for Empire", blocks: [
      { box: "<b>Read like a historian:</b> These sources show how supporters of empire <b>justified</b> it. Their racist language reflects their time and is shown here so you can analyze and challenge it, not agree with it." },
      { h: "Source A: “The White Man’s Burden,” 1899" },
      { p: "British poet Rudyard Kipling wrote this poem urging the United States to take control of the Philippines. These are the opening lines.", n: false },
      { quote: "Take up the White Man’s burden—<br>Send forth the best ye breed—<br>Go bind your sons to exile<br>To serve your captives’ need;", by: "Rudyard Kipling, 1899" },
      { src: "Source: Rudyard Kipling, “The White Man’s Burden,” <i>McClure’s Magazine</i>, February 1899. Public domain." },
      { h: "Source B: Jules Ferry, French Chamber of Deputies, 1885" },
      { p: "Jules Ferry, a former prime minister of France, defended French expansion in a speech to the French legislature on July 28, 1885.", n: false },
      { quote: "It must be said openly that the superior races have a right over the inferior races. ... I repeat that the superior races have a right, because they have a duty. They have the duty to civilize the inferior races.", by: "Jules Ferry, 1885 (translated from French)" },
      { src: "Source: Jules Ferry, speech to the Chamber of Deputies, July 28, 1885. Public domain. English translation written for this guide." },
      { box: "<b>Think about it:</b> Kipling calls the colonized people “captives” while claiming the colonizers “serve” them. Ferry calls conquest a “duty.” How do both writers make taking control sound like a sacrifice or a favor?" }
    ]},
    { tab: "🔬 Simulation", title: "Timeline and Data: Empire Builds", blocks: [
      { box: "<b>Try this:</b> 1) Press ▶ Play on the timeline. Each color is a region. 2) Tap the 1842 dot. What did China lose? 3) Tap the 1868 dot. How did Japan respond differently than China? 4) Below, press ▶ Play on the data race and watch how much of Africa changed hands between 1870 and 1914." },
      { sim: "timeline", title: "Imperialism in Asia and Africa", tip: "Tap any dot to read about it.", from: 1835, to: 1910, events: [
        { y: 1839, t: "First Opium War begins", d: "After Lin Zexu destroys smuggled opium, Britain attacks China.", tag: "China" },
        { y: 1842, t: "Treaty of Nanjing", d: "China gives Hong Kong to Britain, opens five ports, and pays for the war: the first unequal treaty.", tag: "China" },
        { y: 1853, t: "Perry arrives in Japan", d: "U.S. warships pressure Japan to open its ports to trade.", tag: "Japan" },
        { y: 1857, t: "Sepoy Rebellion", d: "Indian soldiers rebel against the East India Company. The British crush the revolt.", tag: "India" },
        { y: 1858, t: "British Raj begins", d: "The British government takes direct control of India from the East India Company.", tag: "India" },
        { y: 1868, t: "Meiji Restoration", d: "Reformers restore the emperor and begin rapid modernization so Japan can resist the West.", tag: "Japan" },
        { y: 1884, t: "Berlin Conference opens", d: "European powers set rules for claiming Africa. No Africans are invited.", tag: "Africa" },
        { y: 1896, t: "Battle of Adwa", d: "Ethiopia’s Menelik II defeats Italy, keeping Ethiopia independent.", tag: "Africa" },
        { y: 1899, t: "Boxer Rebellion begins", d: "Chinese fighters attack foreigners. An eight-nation force crushes the uprising by 1901.", tag: "China" },
        { y: 1905, t: "Japan defeats Russia", d: "Japan wins the Russo-Japanese War, the first modern victory of an Asian power over a European one.", tag: "Japan" }
      ]},
      { sim: "datarace", title: "How much of Africa was under European control?", tip: "Press Play to watch the change.",
        years: [1870, 1914], unit: "%", max: 100,
        series: [
          { label: "Ruled by Europeans", vals: [10, 90] },
          { label: "Ruled by Africans", vals: [90, 10] }
        ],
        src: "Data: approximate, rounded. Widely cited estimates from world history references (about 10% in 1870 and about 90% by 1914)." }
    ]}
  ],
  qs: [
    { t: "grid", ref: 1, q: "Match each example to the motive for imperialism it shows.", cols: ["Economic", "Political", "Religious / “civilizing”", "Social Darwinism"],
      rows: [["Britain wants rubber and palm oil for its factories.", 0], ["Germany grabs colonies so rivals cannot get them first.", 1], ["Missionaries travel to Africa to spread Christianity.", 2], ["A writer claims some races are “fitter” and should rule others.", 3]],
      why: "Raw materials and markets are economic. National power and rivalry are political. Spreading religion or “civilization” is the religious/civilizing motive. Applying “survival of the fittest” to races is Social Darwinism." },
    { t: "mc", ref: 1, q: "What was the main purpose of the Berlin Conference (1884–85)?",
      opts: ["To give African nations a voice in world trade", "To set rules so European powers could divide Africa without fighting each other", "To end the slave trade in Asia", "To create the Indian National Congress"], a: 1,
      why: "Paragraph 4: European powers met to avoid war with each other while claiming Africa. No Africans were invited." },
    { t: "num", ref: 3, q: "Use the data race. By about how many <b>percentage points</b> did the share of Africa ruled by Europeans increase from 1870 to 1914?", a: 80, tol: 2, unit: "points",
      why: "About 90% minus about 10% is about 80 percentage points, all in roughly 44 years." },
    { t: "ebsr", ref: 2,
      A: { q: "What is Kipling’s main argument in Source A?", opts: ["Colonies should be given independence right away.", "Empire is a costly duty that Western nations should accept to “serve” other peoples.", "The United States should stay out of world affairs.", "Colonized people should rule themselves without help."], a: 1 },
      B: { q: "Which line <b>best</b> supports your answer to Part A?", opts: ["“Send forth the best ye breed”", "“Rudyard Kipling, 1899”", "“To serve your captives’ need”", "“McClure’s Magazine”"], a: 2 },
      why: "Kipling presents empire as service (“To serve your captives’ need”), even while calling the people “captives.” The other choices are not his argument or are just citation details." },
    { t: "hot", ref: 2, q: "Click the sentence from Source B that <b>best</b> shows the “civilizing mission” idea.",
      text: ["It must be said openly that the superior races have a right over the inferior races.", "I repeat that the superior races have a right, because they have a duty.", "They have the duty to civilize the inferior races."], a: [2],
      why: "The “civilizing mission” was the claim that Europeans had a duty to “civilize” others. The third sentence says it directly. The first two sentences set up the racist claim of a “right.”" },
    { t: "mc", ref: 1, q: "Why is Social Darwinism considered a misuse of science?",
      opts: ["It used ideas about animals in nature to falsely claim that some human races were superior.", "It proved that industrial nations had stronger armies.", "It was a religion spread by missionaries.", "It argued that all nations should be equal."], a: 0,
      why: "Darwin studied how species change in nature. Social Darwinists stretched “survival of the fittest” to rank races and nations, a racist claim with no scientific basis." },
    { t: "inline", ref: 1, q: "Complete the summary of events in India.",
      text: "In 1857, Indian soldiers called [[]] rebelled, partly because of rumors about rifle cartridges greased with [[]]. After the rebellion, the [[]] took direct control of India.",
      blanks: [{ opts: ["samurai", "sepoys", "Boxers"], a: 1 }, { opts: ["cow and pig fat", "opium", "gunpowder"], a: 0 }, { opts: ["Indian National Congress", "Mughal emperor", "British government"], a: 2 }],
      why: "Paragraph 5: sepoys rebelled over cartridges said to use cow and pig fat (offensive to Hindus and Muslims), and in 1858 the British government replaced East India Company rule." },
    { t: "order", ref: 3, q: "Use the timeline. Put these events in order (first at the top).",
      items: ["Treaty of Nanjing", "Sepoy Rebellion", "Meiji Restoration", "Berlin Conference opens", "Battle of Adwa", "Russo-Japanese War ends with Japan’s victory"],
      why: "1842, 1857, 1868, 1884, 1896, 1905." },
    { t: "mc", ref: 1, q: "Which was a result of the Treaty of Nanjing (1842)?",
      opts: ["China gained control of Hong Kong.", "Britain agreed to stop all trade with China.", "Japan took control of Taiwan.", "Britain took Hong Kong and China opened five ports to British trade."], a: 3,
      why: "Paragraph 6: the treaty gave Hong Kong to Britain, opened five ports, and forced China to pay. It was the first of the “unequal treaties.”" },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> actions were part of Japan’s Meiji modernization?",
      opts: ["Building railways and factories", "Closing all ports to foreign trade forever", "Creating a national army with required service", "Giving power back to the shogun", "Refusing to adopt any Western technology"], a: [0, 2],
      why: "Paragraph 7: Meiji Japan built railways and factories and created a national army. Japan ended the shogun’s rule and adopted Western technology on purpose." },
    { t: "mc", ref: 1, q: "Why was the Battle of Adwa (1896) important?",
      opts: ["Ethiopia defeated Italy and remained independent during the Scramble for Africa.", "It started the Berlin Conference.", "Britain gained control of Ethiopia.", "It ended the Opium Wars."], a: 0,
      why: "Menelik II’s victory forced Italy to recognize Ethiopia’s independence. Ethiopia and Liberia were the only African states not under European control by 1914." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> China and Japan both faced pressure from Western powers in the 1800s. Compare how they responded and explain <b>why</b> the results were different. Use at least two specific facts.", min: 45,
      checks: [
        { label: "Describes China’s experience (Opium War, unequal treaties, spheres of influence, Boxers...)", re: /opium|nanjing|unequal|sphere|hong kong|boxer|lin zexu|treaty port/i },
        { label: "Describes Japan’s response (Meiji, modernized, railways, army, constitution...)", re: /meiji|moderni|railway|railroad|factor|army|constitution|industrial|perry|school/i },
        { label: "Explains why the results differed", re: /because|so |as a result|therefore|since|which|while|whereas|unlike|but|however/i }
      ],
      rubric: "2 points: accurately compares both countries with two specific facts and explains the difference. 1 point: describes one country well or compares without explaining. 0 points: inaccurate or off topic.",
      why: "The key difference is the response. China resisted but did not modernize fast enough, so it lost the Opium War and was forced into unequal treaties. Japan chose to modernize rapidly in the Meiji era, which let it stay independent and even build its own empire.",
      model: "China tried to stop the opium trade, but it lost the Opium War and had to sign the Treaty of Nanjing, which gave Hong Kong to Britain and opened ports. Later foreign powers carved China into spheres of influence. Japan saw what happened to China, so during the Meiji Restoration it modernized quickly by building railways, factories, and a national army. Because Japan industrialized, it could resist the West and even defeat Russia in 1905, while China stayed weak and divided." }
  ]
};

/* ============================== US HISTORY ============================== */
RC["sg-us-constitution"] = {
  subject: "US History", mins: 25,
  title: "The Constitution & Checks and Balances",
  blurb: "From the weak Articles of Confederation to a Constitution built so no branch gets too much power.",
  eq: "How does the Constitution create a government strong enough to govern but limited enough to protect liberty?",
  target: "I can explain why the Constitution replaced the Articles of Confederation, describe its key compromises and principles, and apply checks and balances to real scenarios.",
  sources: [
    { tab: "Key Ideas", title: "Building a New Government", numbered: true, blocks: [
      { h: "The Articles of Confederation" },
      { p: "The first plan of government for the United States, the <b>Articles of Confederation</b>, went into effect in 1781. Because Americans feared a powerful central government like the British king, the Articles created a weak national government. Congress could not collect taxes, could not regulate trade between states, and had no president to enforce laws and no national courts. Each state had one vote, passing a law took 9 of 13 states, and changing the Articles required all 13." },
      { p: "These weaknesses caused real problems. The national government could not pay its war debts, and states printed their own money and taxed each other’s goods. In 1786–87, farmers in Massachusetts led by Daniel Shays rebelled against debt and taxes. <b>Shays’ Rebellion</b> convinced many leaders that the nation needed a stronger government." },
      { h: "The Constitutional Convention, 1787" },
      { p: "In the summer of 1787, 55 delegates met in Philadelphia. They decided to write a new constitution instead of fixing the Articles. Large and small states disagreed about representation. The Virginia Plan gave more power to big states, and the New Jersey Plan gave each state an equal vote. The <b>Great Compromise</b> (or Connecticut Compromise) created a two-house Congress: the House of Representatives, based on population, and the Senate, where every state has two senators." },
      { p: "Delegates also argued about slavery. Southern states wanted enslaved people counted for representation but not for taxes, and Northern states wanted the opposite. The <b>Three-Fifths Compromise</b> counted three out of every five enslaved people for both representation and direct taxes. This gave slaveholding states extra power in Congress while denying enslaved people any rights. The Thirteenth Amendment (1865) ended slavery, and the Fourteenth Amendment (1868) ended the three-fifths rule." },
      { h: "Principles of the Constitution" },
      { p: "<b>Popular sovereignty:</b> power comes from the people. <b>Limited government:</b> the government can do only what the Constitution allows. <b>Federalism:</b> power is divided between the national government and the states. <b>Separation of powers:</b> the government is split into three branches. Congress (legislative) makes laws, the President (executive) carries them out, and the courts (judicial) interpret them. <b>Checks and balances:</b> each branch can limit the other two. For example, the President can veto a bill, and Congress can override a veto with a two-thirds vote of both houses." },
      { p: "<b>Judicial review</b> is the power of courts to strike down laws that violate the Constitution. It is not written directly in the Constitution. Chief Justice John Marshall established it in <b>Marbury v. Madison</b> (1803)." },
      { h: "Ratification and the Bill of Rights" },
      { p: "Nine of 13 states had to ratify (approve) the Constitution. <b>Federalists</b>, such as James Madison and Alexander Hamilton, supported it and explained it in a series of essays called <i>The Federalist Papers</i>. <b>Anti-Federalists</b> feared a strong national government and demanded a list of protected rights. The ninth state ratified in 1788, the new government began in 1789, and Federalists kept their promise to add rights. The first ten amendments, the <b>Bill of Rights</b>, were ratified in 1791." },
      { vocab: [
        ["Ratify", "to formally approve"],
        ["Popular sovereignty", "the idea that government’s power comes from the people"],
        ["Federalism", "dividing power between the national and state governments"],
        ["Separation of powers", "splitting government into legislative, executive, and judicial branches"],
        ["Checks and balances", "each branch’s ability to limit the power of the other branches"],
        ["Veto", "the President’s rejection of a bill passed by Congress"],
        ["Judicial review", "a court’s power to declare a law or action unconstitutional"]
      ]},
      { table: { cap: "Cause and effect: Articles vs. Constitution", head: ["Problem under the Articles", "Fix in the Constitution"], rows: [
        ["Congress could not tax", "Congress can lay and collect taxes"],
        ["No executive to enforce laws", "A President leads the executive branch"],
        ["No national courts", "A Supreme Court and federal courts"],
        ["States taxed each other’s trade", "Congress regulates trade between states"],
        ["Changes needed all 13 states", "Amendments need 3/4 of the states"]
      ]}}
    ]},
    { tab: "Primary Sources", title: "In Their Own Words", blocks: [
      { h: "Source A: The Preamble to the Constitution, 1787" },
      { quote: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.", by: "Preamble, U.S. Constitution" },
      { src: "Source: Constitution of the United States, 1787. Public domain. <i>Tranquility</i> = peace. <i>Posterity</i> = future generations. <i>Ordain</i> = officially create." },
      { h: "Source B: The Federalist No. 51, 1788" },
      { p: "James Madison, writing as “Publius,” explained why the Constitution separates powers and lets each branch check the others.", n: false },
      { quote: "Ambition must be made to counteract ambition. ... But what is government itself, but the greatest of all reflections on human nature? If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.", by: "James Madison, The Federalist No. 51, 1788" },
      { src: "Source: <i>The Federalist</i> No. 51, published in New York newspapers, February 1788. Public domain." },
      { h: "Source C: Marbury v. Madison, 1803" },
      { quote: "It is emphatically the province and duty of the judicial department to say what the law is.", by: "Chief Justice John Marshall, 1803" },
      { src: "Source: <i>Marbury v. Madison</i>, 5 U.S. 137 (1803). U.S. Supreme Court opinion, public domain." },
      { h: "Source D: The First Amendment, 1791" },
      { quote: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.", by: "Bill of Rights, Amendment I" },
      { src: "Source: Bill of Rights, ratified 1791. Public domain. <i>Abridging</i> = limiting. <i>Redress of grievances</i> = fixing complaints." }
    ]},
    { tab: "🔬 Simulation", title: "Checks and Balances in Action", blocks: [
      { box: "<b>Try this:</b> 1) Tap the <b>Legislative</b> branch and read the arrows: how does Congress check the President? 2) Tap the <b>Judicial</b> branch. What power did Marbury v. Madison give it? 3) Play the scenario quiz. For each one, ask: <b>who</b> is doing the checking, and <b>who</b> is being checked? 4) Aim for 6 out of 6 on the first try." },
      { sim: "branches", title: "Who Checks Whom?", tip: "Pick the arrow from the checker to the branch being checked.", scenarios: [
        { t: "The President vetoes a bill that Congress passed.", a: "E>L", why: "The executive (President) is checking the legislative branch (Congress) by rejecting its bill." },
        { t: "Congress overrides the President’s veto with a two-thirds vote in both houses.", a: "L>E", why: "Congress checks the President by making the bill a law anyway." },
        { t: "The Supreme Court rules that a law passed by Congress is unconstitutional.", a: "J>L", why: "This is judicial review, established in Marbury v. Madison (1803). The courts check Congress." },
        { t: "The President nominates a new justice to the Supreme Court.", a: "E>J", why: "By choosing who sits on the Court, the President influences the judicial branch." },
        { t: "A federal court rules that a President’s executive order is unconstitutional.", a: "J>E", why: "The courts can strike down actions of the executive branch that break the Constitution." },
        { t: "The House impeaches a federal judge, and the Senate holds the trial.", a: "L>J", why: "Congress can remove judges for serious wrongdoing. The House impeaches (charges) and the Senate tries the case." }
      ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which was a major weakness of the Articles of Confederation?",
      opts: ["The President had too much power.", "The Supreme Court struck down too many laws.", "Congress could not collect taxes.", "Large states controlled the whole Congress."], a: 2,
      why: "Paragraph 1: Congress could not tax, so it could not pay debts. There was no President or national court, and each state had one equal vote." },
    { t: "inline", ref: 1, q: "Complete the summary of the Great Compromise.",
      text: "The Great Compromise created a Congress with two houses. In the [[]], representation is based on population. In the [[]], each state has [[]] members.",
      blanks: [{ opts: ["Senate", "House of Representatives", "Supreme Court"], a: 1 }, { opts: ["Senate", "House of Representatives", "Cabinet"], a: 0 }, { opts: ["one", "two", "three"], a: 1 }],
      why: "The House pleased large states (population). The Senate pleased small states (two senators each, no matter the size)." },
    { t: "mc", ref: 1, q: "What did the Three-Fifths Compromise do?",
      opts: ["Gave every state three senators and five representatives", "Required three-fifths of states to ratify the Constitution", "Ended the slave trade after three to five years", "Counted three of every five enslaved people for representation and taxes, giving slaveholding states more power"], a: 3,
      why: "Paragraph 4: enslaved people were counted as three-fifths of a person for representation and direct taxes. This boosted Southern power in the House while enslaved people had no rights." },
    { t: "grid", ref: 1, q: "Match each example to the principle of the Constitution it shows.", cols: ["Popular sovereignty", "Federalism", "Separation of powers", "Checks and balances"],
      rows: [["“We the People ... do ordain and establish this Constitution”", 0], ["States run schools while the national government prints money.", 1], ["Congress makes laws, the President enforces them, and courts interpret them.", 2], ["The Senate can reject a treaty the President signed.", 3]],
      why: "Power from the people = popular sovereignty. Dividing power between nation and states = federalism. Three branches with different jobs = separation of powers. One branch limiting another = checks and balances." },
    { t: "hot", ref: 2, q: "In the Preamble, click the phrase that <b>best</b> shows <b>popular sovereignty</b>.",
      text: ["We the People of the United States,", "in Order to form a more perfect Union,", "establish Justice,", "insure domestic Tranquility,", "provide for the common defence,", "promote the general Welfare,", "and secure the Blessings of Liberty to ourselves and our Posterity,"], a: [0],
      why: "Popular sovereignty means power comes from the people. The Constitution opens with “We the People,” showing the people, not a king, create the government." },
    { t: "ebsr", ref: 2,
      A: { q: "In Federalist No. 51, why does Madison say a system of controls on government is needed?", opts: ["Because people are not angels, so those in power might abuse it", "Because angels should be chosen to run the government", "Because the states should have no power at all", "Because the President should control the other branches"], a: 0 },
      B: { q: "Which sentence <b>best</b> supports your answer to Part A?", opts: ["“We the People of the United States...”", "“If men were angels, no government would be necessary.”", "“It is emphatically the province and duty of the judicial department to say what the law is.”", "“Congress shall make no law respecting an establishment of religion...”"], a: 1 },
      why: "Madison argues that since humans are not perfect, government must be able to control the people and also “control itself.” Only the “angels” sentence is from Federalist 51." },
    { t: "mc", ref: 3, q: "Use the simulation. Tap the Judicial branch. Which check does it have on Congress?",
      opts: ["Veto bills", "Declare laws unconstitutional (judicial review)", "Confirm the President’s appointments", "Override a veto"], a: 1,
      why: "The judicial branch checks Congress with judicial review. Vetoing is a presidential power, and confirming appointments and overriding vetoes belong to Congress." },
    { t: "multi", need: 2, ref: 3, q: "Use the simulation. Tap the Legislative branch. Which <b>two</b> are ways Congress checks the President?",
      opts: ["Override a veto with a two-thirds vote", "Veto a bill", "Impeach the President", "Nominate Supreme Court justices", "Declare an executive order unconstitutional"], a: [0, 2],
      why: "Congress can override a veto and impeach the President. Vetoing and nominating justices are presidential powers. Ruling actions unconstitutional is a power of the courts." },
    { t: "num", ref: 1, q: "To override a veto, two-thirds of each house must vote yes. If all <b>435</b> members of the House vote, what is the <b>smallest</b> number of yes votes needed?", a: 290, tol: 0, unit: "votes",
      why: "2/3 × 435 = 290 exactly. So 290 yes votes are needed. (In the Senate, 2/3 of 100 is 66.67, so 67 votes are needed.)" },
    { t: "order", ref: 1, q: "Put these events in order (first at the top).",
      items: ["The Articles of Confederation take effect", "Shays’ Rebellion", "The Constitutional Convention meets in Philadelphia", "The Constitution is ratified by the ninth state", "The Bill of Rights is ratified", "Marbury v. Madison establishes judicial review"],
      why: "1781, 1786–87, 1787, 1788, 1791, 1803." },
    { t: "mc", ref: 2, q: "Why is Marbury v. Madison (1803) important?",
      opts: ["It established judicial review, the power of courts to strike down unconstitutional laws.", "It created the Senate.", "It ended the Articles of Confederation.", "It added the Bill of Rights to the Constitution."], a: 0,
      why: "Marshall wrote that it is the duty of the judicial department “to say what the law is.” Since then, courts can strike down laws that violate the Constitution." },
    { t: "write", ref: 2, q: "<b>Brief write.</b> Using Federalist No. 51 and at least <b>one</b> real check from the simulation, explain how checks and balances protect people’s liberty.", min: 45,
      checks: [
        { label: "Uses Federalist No. 51 (angels, ambition, control itself...)", re: /angel|ambition|madison|federalist|control itself|human nature|publius/i },
        { label: "Gives a specific check (veto, override, impeach, judicial review, confirm...)", re: /veto|overrid|impeach|judicial review|unconstitutional|confirm|nominat|appoint|treaty|pardon/i },
        { label: "Explains how this protects liberty or prevents abuse of power", re: /liberty|rights|freedom|abuse|tyran|too much power|too powerful|prevent|limit|protect|dictator|king/i }
      ],
      rubric: "2 points: uses Federalist 51 and a correct check, and explains how it protects liberty. 1 point: has a correct check or quote but a weak explanation. 0 points: inaccurate or no explanation.",
      why: "Madison’s point is that leaders are human, so power must be divided and each branch must be able to stop the others. Pairing his quote with a real check (veto, override, impeachment, or judicial review) shows how the idea works in practice.",
      model: "Madison wrote, “If men were angels, no government would be necessary,” meaning leaders are human and might abuse power. Checks and balances limit each branch. For example, if Congress passes a law that violates freedom of speech, the Supreme Court can use judicial review to strike it down. Because each branch can stop the others, no single group can take too much power and take away people’s rights." }
  ]
};

RC["sg-us-civilrights"] = {
  subject: "US History", mins: 25,
  title: "The Civil Rights Movement",
  blurb: "From Plessy to Brown to the Voting Rights Act, plus César Chávez and the Delano grape strike right here in the Central Valley.",
  eq: "How did ordinary people use courts, protests, and new laws to challenge segregation and discrimination?",
  target: "I can explain key events of the civil rights movement, compare strategies for change, and connect the movement to farm workers’ struggles in the Central Valley.",
  sources: [
    { tab: "Key Ideas", title: "The Struggle for Equal Rights", numbered: true, blocks: [
      { h: "Jim Crow and Plessy v. Ferguson" },
      { p: "After Reconstruction ended in 1877, Southern states passed <b>Jim Crow laws</b> that enforced <b>segregation</b>, the separation of people by race, in schools, trains, restaurants, and even drinking fountains. States also used poll taxes, literacy tests, and violence to keep Black citizens from voting. In <b>Plessy v. Ferguson</b> (1896), the Supreme Court ruled that segregation was legal as long as facilities were “<b>separate but equal</b>.” In reality, facilities for Black Americans were almost never equal." },
      { h: "Brown v. Board of Education (1954)" },
      { p: "The NAACP’s lawyers, led by Thurgood Marshall, challenged school segregation in court. In <b>Brown v. Board of Education</b> (1954), the Supreme Court ruled unanimously (9–0) that segregated public schools were unconstitutional, overturning “separate but equal” in education. California had already ended segregation of Mexican American students in its schools after <b>Mendez v. Westminster</b> (1947), a case that helped pave the way for Brown." },
      { h: "Protest and action" },
      { p: "<b>Montgomery Bus Boycott (1955–56):</b> After Rosa Parks was arrested on December 1, 1955, for refusing to give her bus seat to a white passenger, Black residents of Montgomery, Alabama, refused to ride city buses for 381 days. A young minister, Dr. Martin Luther King Jr., became a leader. In 1956 the Supreme Court ruled bus segregation unconstitutional." },
      { p: "<b>Little Rock Nine (1957):</b> Nine Black students tried to enter Central High School in Little Rock, Arkansas. The governor used the National Guard to block them, so President Eisenhower sent federal troops to protect the students and enforce Brown." },
      { p: "<b>Sit-ins (1960):</b> Four Black college students sat at a whites-only Woolworth’s lunch counter in Greensboro, North Carolina, and refused to leave. Sit-ins spread to dozens of cities, and students formed the Student Nonviolent Coordinating Committee (SNCC). <b>Freedom Rides (1961):</b> Black and white riders traveled on interstate buses through the South to test a Supreme Court ruling against segregated bus terminals. Mobs attacked them, and one bus was firebombed in Alabama." },
      { p: "<b>Birmingham (1963):</b> Protesters, including many children and teenagers, marched against segregation. Police chief Bull Connor used fire hoses and police dogs on them, and the images shocked the nation. While jailed there, King wrote his “Letter from Birmingham Jail,” answering white ministers who told protesters to wait. He argued that people have a moral duty to disobey unjust laws peacefully and that “wait” too often meant “never.” <b>March on Washington (August 1963):</b> About 250,000 people gathered in Washington, D.C., for jobs and freedom. There King gave his “I Have a Dream” speech, describing a future where his children would be judged by their character, not their skin color." },
      { h: "New laws" },
      { p: "The <b>Civil Rights Act of 1964</b> banned segregation in public places such as restaurants and hotels and outlawed job discrimination based on race, color, religion, sex, or national origin. After police attacked peaceful marchers in Selma, Alabama, in March 1965 (“Bloody Sunday”), Congress passed the <b>Voting Rights Act of 1965</b>, which banned literacy tests and let federal officials oversee voter registration in places with a history of discrimination. The 24th Amendment (1964) had already banned poll taxes in federal elections. Black voter registration in the South rose sharply." },
      { h: "Different strategies" },
      { p: "King and many other leaders used <b>nonviolent direct action</b> and <b>civil disobedience</b>: peacefully breaking unjust laws and accepting arrest to show the injustice to the nation. Others disagreed. Malcolm X criticized nonviolence and called for Black pride, self-defense, and independence from white-led institutions, though he later moved toward working with other groups before he was killed in 1965. In 1966 SNCC leader Stokely Carmichael popularized the slogan <b>“Black Power,”</b> calling for Black communities to build their own political and economic strength. Different strategies often worked side by side and pushed the nation to change." },
      { h: "Close to home: César Chávez and the Delano grape strike" },
      { p: "Farm workers in California’s Central Valley earned low wages, lived in poor housing, and worked without clean water, bathrooms, or protection from pesticides. In 1962 <b>César Chávez</b> and <b>Dolores Huerta</b> founded the National Farm Workers Association. In September 1965, Filipino American grape workers led by Larry Itliong walked off the job in <b>Delano</b>, about 30 miles south of Tulare, and asked Chávez’s mostly Mexican American union to join them. The <b>Delano grape strike</b> lasted five years. Chávez used nonviolent tactics: a 300-mile march to Sacramento in 1966, fasts, and a national <b>boycott</b> asking Americans not to buy table grapes. In 1970 major grape growers signed union contracts. The groups merged into what became the <b>United Farm Workers</b>. The farm workers’ struggle was part of the wider <b>Chicano movement</b> for Mexican American rights, which also included student walkouts for better schools." },
      { vocab: [
        ["Segregation", "separating people by race"],
        ["Jim Crow laws", "state and local laws that enforced segregation, mostly in the South"],
        ["Civil disobedience", "peacefully refusing to obey an unjust law"],
        ["Boycott", "refusing to buy or use something as a protest"],
        ["Sit-in", "a protest where people sit in a place and refuse to leave"],
        ["Unconstitutional", "not allowed by the Constitution"],
        ["Chicano movement", "the 1960s–70s movement for Mexican American civil rights and pride"]
      ]},
      { table: { cap: "Cause and effect", head: ["Cause", "Effect"], rows: [
        ["Plessy v. Ferguson (1896) allows “separate but equal”", "Decades of legal segregation under Jim Crow"],
        ["NAACP lawsuits", "Brown v. Board (1954) ends legal school segregation"],
        ["Rosa Parks’ arrest", "381-day Montgomery Bus Boycott; bus segregation ruled unconstitutional"],
        ["TV images of violence in Birmingham and Selma", "Public support for the Civil Rights Act (1964) and Voting Rights Act (1965)"],
        ["Low pay and poor conditions for farm workers", "Delano grape strike and boycott (1965–70); union contracts"]
      ]}}
    ]},
    { tab: "Primary Sources", title: "Courts and Presidents", blocks: [
      { h: "Source A: Justice John Marshall Harlan, dissent in Plessy v. Ferguson, 1896" },
      { p: "Harlan was the only justice who disagreed with the Plessy decision.", n: false },
      { quote: "Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.", by: "Justice John Marshall Harlan, 1896" },
      { src: "Source: <i>Plessy v. Ferguson</i>, 163 U.S. 537 (1896), Harlan, J., dissenting. Public domain." },
      { h: "Source B: Brown v. Board of Education, 1954" },
      { quote: "To separate them from others of similar age and qualifications solely because of their race generates a feeling of inferiority as to their status in the community that may affect their hearts and minds in a way unlikely ever to be undone.<br>...<br>We conclude that, in the field of public education, the doctrine of “separate but equal” has no place. Separate educational facilities are inherently unequal.", by: "Chief Justice Earl Warren, for a unanimous Court, 1954" },
      { src: "Source: <i>Brown v. Board of Education of Topeka</i>, 347 U.S. 483 (1954). U.S. Supreme Court opinion, public domain. <i>Inherently</i> = by their very nature." },
      { h: "Source C: President John F. Kennedy, address on civil rights, June 11, 1963" },
      { quote: "We are confronted primarily with a moral issue. It is as old as the scriptures and is as clear as the American Constitution. The heart of the question is whether all Americans are to be afforded equal rights and equal opportunities, whether we are going to treat our fellow Americans as we want to be treated.", by: "President John F. Kennedy, 1963" },
      { src: "Source: Radio and television report to the American people on civil rights, June 11, 1963. U.S. government work, public domain. About a week later Kennedy sent Congress the bill that became the Civil Rights Act of 1964." },
      { box: "<b>About two famous texts:</b> Dr. King’s “Letter from Birmingham Jail” and “I Have a Dream” speech are protected by copyright, so they are summarized in Key Ideas, paragraph 6, instead of quoted. Your teacher or school library can share the full texts." }
    ]},
    { tab: "🔬 Simulation", title: "Timeline: Courts, Protests, and Laws", blocks: [
      { box: "<b>Try this:</b> 1) Press ▶ Play and watch the dots light up. 2) Look at the color key: which kind of event (Court, Protest, Law) comes <b>first</b>, and which comes <b>last</b>? 3) Tap the 1957 dot. Who sent troops, and why? 4) Tap the 1965 dots. Which event happened close to Tulare?" },
      { sim: "timeline", title: "The Civil Rights Movement", tip: "Tap a dot to read the event.", from: 1950, to: 1970, events: [
        { y: 1954, t: "Brown v. Board of Education", d: "The Supreme Court rules 9–0 that segregated public schools are unconstitutional.", tag: "Court" },
        { y: 1955, t: "Montgomery Bus Boycott begins", d: "After Rosa Parks’ arrest, Black residents refuse to ride city buses for 381 days.", tag: "Protest" },
        { y: 1956, t: "Bus segregation struck down", d: "In Browder v. Gayle the courts rule Montgomery’s segregated buses unconstitutional, and the Supreme Court agrees.", tag: "Court" },
        { y: 1957, t: "Little Rock Nine", d: "President Eisenhower sends federal troops so nine Black students can attend Central High School.", tag: "Federal action" },
        { y: 1960, t: "Greensboro sit-ins", d: "Four college students sit at a whites-only lunch counter. Sit-ins spread across the South.", tag: "Protest" },
        { y: 1961, t: "Freedom Rides", d: "Riders test the ban on segregated bus terminals and face violent mobs.", tag: "Protest" },
        { y: 1963, t: "Birmingham and the March on Washington", d: "Fire hoses and dogs are used on young marchers in Birmingham. In August, about 250,000 people march in Washington, D.C.", tag: "Protest" },
        { y: 1964, t: "Civil Rights Act", d: "Bans segregation in public places and job discrimination by race, color, religion, sex, or national origin.", tag: "Law" },
        { y: 1965, t: "Voting Rights Act and the Delano grape strike", d: "After Selma, Congress bans literacy tests. In September, Filipino and Mexican American farm workers strike in Delano, near Tulare.", tag: "Law" },
        { y: 1966, t: "March to Sacramento", d: "César Chávez leads striking farm workers on a 300-mile march from Delano to the state capitol.", tag: "Protest" },
        { y: 1970, t: "Grape contracts signed", d: "After a five-year strike and national boycott, major table grape growers sign union contracts.", tag: "Protest" }
      ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "What did the Supreme Court decide in Plessy v. Ferguson (1896)?",
      opts: ["Segregated schools were unconstitutional.", "Segregation was legal if facilities were “separate but equal.”", "All Americans had the right to vote.", "Farm workers could form unions."], a: 1,
      why: "Paragraph 1: Plessy allowed segregation under the “separate but equal” rule. Brown v. Board overturned that rule for schools in 1954." },
    { t: "ebsr", ref: 2,
      A: { q: "According to Source B, why did the Court rule school segregation unconstitutional?", opts: ["Segregated schools cost too much money.", "Segregation harmed Black children by making them feel inferior, so separate schools could never be equal.", "The Constitution does not mention schools.", "States asked the Court to end segregation."], a: 1 },
      B: { q: "Which phrase <b>best</b> supports your answer to Part A?", opts: ["“in the field of public education”", "“others of similar age and qualifications”", "“generates a feeling of inferiority as to their status in the community”", "“for a unanimous Court”"], a: 2 },
      why: "Warren wrote that separating children by race “generates a feeling of inferiority,” so separate schools are “inherently unequal.”" },
    { t: "order", ref: 3, q: "Use the timeline. Put these events in order (first at the top).",
      items: ["Brown v. Board of Education", "Montgomery Bus Boycott begins", "Little Rock Nine", "Greensboro sit-ins", "March on Washington", "Voting Rights Act"],
      why: "1954, 1955, 1957, 1960, 1963, 1965." },
    { t: "grid", ref: 3, q: "Use the timeline’s color key. Sort each event by how it pushed for change.", cols: ["Court ruling", "Protest", "Law passed by Congress"],
      rows: [["Brown v. Board of Education", 0], ["Freedom Rides", 1], ["Civil Rights Act of 1964", 2], ["Greensboro sit-ins", 1], ["Voting Rights Act of 1965", 2]],
      why: "Brown was decided by the Supreme Court. Sit-ins and Freedom Rides were direct-action protests. The two acts were laws passed by Congress and signed by President Johnson." },
    { t: "mc", ref: 3, q: "Use the simulation. Tap the <b>1957</b> dot. What happened?",
      opts: ["Rosa Parks was arrested in Montgomery.", "Students held the first sit-in in Greensboro.", "Congress passed the Voting Rights Act.", "President Eisenhower sent federal troops to protect the Little Rock Nine."], a: 3,
      why: "In 1957 the governor of Arkansas blocked nine Black students from Central High School, so Eisenhower sent federal troops to enforce Brown v. Board." },
    { t: "num", ref: 1, q: "The Montgomery Bus Boycott began on December 5, 1955. For about how many <b>days</b> did it last?", a: 381, tol: 1, unit: "days",
      why: "Paragraph 3: the boycott lasted 381 days, until the buses were desegregated in December 1956." },
    { t: "multi", need: 2, ref: 1, q: "Which <b>two</b> things did the Voting Rights Act of 1965 do?",
      opts: ["Banned literacy tests for voting", "Ended slavery", "Let federal officials oversee voter registration in places with a history of discrimination", "Overturned Brown v. Board of Education", "Banned segregation in restaurants and hotels"], a: [0, 2],
      why: "Paragraph 7: the Voting Rights Act banned literacy tests and added federal oversight. Ending segregation in public places was the Civil Rights Act of 1964. Slavery ended in 1865." },
    { t: "hot", ref: 2, q: "In Source C, click the sentence where Kennedy defines the <b>central question</b> of civil rights.",
      text: ["We are confronted primarily with a moral issue.", "It is as old as the scriptures and is as clear as the American Constitution.", "The heart of the question is whether all Americans are to be afforded equal rights and equal opportunities, whether we are going to treat our fellow Americans as we want to be treated."], a: [2],
      why: "“The heart of the question” signals the main point: whether all Americans get equal rights and opportunities. The first two sentences describe the issue as moral and very old." },
    { t: "mc", ref: 1, q: "How was the “Black Power” approach <b>different</b> from King’s strategy?",
      opts: ["It focused on Black communities building their own political and economic strength rather than relying on nonviolent appeals to white leaders.", "It supported Jim Crow laws.", "It refused to take part in any politics.", "It was the same as nonviolent civil disobedience."], a: 0,
      why: "Paragraph 8: King used nonviolent direct action to show injustice to the nation. Black Power stressed pride, self-reliance, and self-defense." },
    { t: "inline", ref: 1, q: "Complete the summary of the Delano grape strike.",
      text: "In 1965, [[]] grape workers led by Larry Itliong began a strike in Delano and were joined by César Chávez’s union. Chávez used [[]] tactics, including a national [[]] of table grapes.",
      blanks: [{ opts: ["Filipino American", "Japanese American", "Italian American"], a: 0 }, { opts: ["violent", "nonviolent", "secret"], a: 1 }, { opts: ["boycott", "draft", "tariff"], a: 0 }],
      why: "Paragraph 9: Filipino American workers started the strike, and Chávez used nonviolent methods such as marches, fasts, and a nationwide grape boycott." },
    { t: "mc", ref: 1, q: "Why is Mendez v. Westminster (1947) important to the story of Brown v. Board?",
      opts: ["It created the Jim Crow laws.", "It ended segregation of Mexican American students in California schools and helped pave the way for Brown.", "It overturned the Voting Rights Act.", "It was the case that started the Montgomery Bus Boycott."], a: 1,
      why: "Paragraph 2: Mendez came seven years before Brown and ended school segregation of Mexican American children in California." },
    { t: "write", ref: 1, q: "<b>Brief write.</b> Choose <b>one</b> strategy (court cases, nonviolent protest, or boycotts) and explain how it helped win civil rights. Use at least <b>two</b> specific examples, and include one from either the African American civil rights movement or the farm workers’ movement in the Central Valley.", min: 45,
      checks: [
        { label: "Names a strategy", re: /court|lawsuit|case|ruling|nonviolen|protest|march|sit-?in|boycott|civil disobedience|strike/i },
        { label: "Gives at least two specific examples", re: /brown|plessy|mendez|marshall|montgomery|parks|little rock|greensboro|sit-?in|freedom ride|birmingham|march on washington|selma|civil rights act|voting rights act|ch[aá]vez|huerta|delano|itliong|grape|sacramento|king/i, min: 2 },
        { label: "Explains the result or why it worked", re: /because|so |as a result|led to|caused|therefore|forced|pressur|changed|ended|won|passed|signed|ruled/i }
      ],
      rubric: "2 points: names a strategy, gives two accurate specific examples, and explains how it led to change. 1 point: a strategy with one example or a weak explanation. 0 points: inaccurate or off topic.",
      why: "Each strategy put pressure on a different target: court cases changed the law, protests changed public opinion, and boycotts cost businesses money. A strong answer names the strategy, gives two real examples, and explains what changed as a result.",
      model: "Boycotts were a powerful nonviolent strategy because they put economic pressure on businesses. In the Montgomery Bus Boycott, Black residents refused to ride the buses for 381 days, and the bus company lost money until segregation on buses was ruled unconstitutional. Close to Tulare, César Chávez and the farm workers in the Delano grape strike asked Americans to stop buying table grapes. As a result, in 1970 the growers signed union contracts that improved pay and conditions." }
  ]
};
