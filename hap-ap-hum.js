/* =====================================================================
   ✏️ AP-STYLE PRACTICE QUIZZES: HISTORY, GOVERNMENT, ENGLISH
   Five 15-minute, stimulus-based practice quizzes written for this site.
   They are AP-style practice only, not official College Board material.
   Each activity: RC["id"] = { subject, mins, title, blurb, eq, target, sources, qs }.
   Link to one with:  honors-ap.html?id=THE-ID
   Answers count from 0: a:0 = A, a:1 = B, a:2 = C, a:3 = D.
   Primary sources are public domain (published before 1929) and quoted
   from standard printed texts. Secondary passages were written for this site.
   ===================================================================== */

const HAP_AP_NOTE = "<b>AP-style practice written for this site; not an official College Board exam.</b>";

/* ---------------------------------------------------------------------
   1. AP US HISTORY · PERIOD 6 (1865–1898)
   --------------------------------------------------------------------- */
RC["ap-ush-gilded"] = {
  subject: "AP US History", mins: 15,
  title: "AP Practice Quiz: The Gilded Age (Period 6, 1865–1898)",
  blurb: "Period 6 stimulus set: Carnegie’s “Wealth,” the Populist Omaha Platform, and immigration data, with AP-style multiple choice and an SAQ.",
  eq: "How did Americans disagree about who should benefit from industrial growth between 1865 and 1898?",
  target: "I can analyze primary sources and data to explain debates over wealth, labor, immigration, and Populism in the Gilded Age.",
  sources: [
    { tab: "Source 1: Carnegie", title: "Source 1: Andrew Carnegie, “Wealth” (1889)", blocks: [
      { box: HAP_AP_NOTE + "<br>Directions: Read each source, then answer the questions. Most questions are multiple choice with one best answer. The last question is a short-answer question (SAQ)." },
      { p: "<b>Context:</b> Andrew Carnegie came to the United States as a poor Scottish immigrant and built Carnegie Steel into one of the largest companies in the world. He published this essay in the <i>North American Review</i> in June 1889. It is often called “The Gospel of Wealth.”" },
      { quote: "The problem of our age is the proper administration of wealth, so that the ties of brotherhood may still bind together the rich and poor in harmonious relationship.", by: "Andrew Carnegie, opening sentence" },
      { quote: "It is here; we cannot evade it; no substitutes for it have been found; and while the law may be sometimes hard for the individual, it is best for the race, because it insures the survival of the fittest in every department.", by: "Andrew Carnegie, on the law of competition" },
      { quote: "This, then, is held to be the duty of the man of Wealth: First, to set an example of modest, unostentatious living, shunning display or extravagance; to provide moderately for the legitimate wants of those dependent upon him; and after doing so to consider all surplus revenues which come to him simply as trust funds, which he is called upon to administer.", by: "Andrew Carnegie" },
      { quote: "The man who dies thus rich dies disgraced.", by: "Andrew Carnegie" },
      { vocab: [["Social Darwinism", "the idea that competition in society, like nature, lets the “fittest” rise and is natural and good"], ["Philanthropy", "giving money to improve society, such as funding libraries and schools"], ["Surplus revenues", "money left over after a person’s needs are met"]] },
      { src: "Excerpts from Andrew Carnegie, “Wealth,” <i>North American Review</i> 148, no. 391 (June 1889). Public domain." }
    ]},
    { tab: "Source 2: Omaha Platform", title: "Source 2: The People’s (Populist) Party, Omaha Platform (1892)", blocks: [
      { p: "<b>Context:</b> In the 1880s, many farmers in the South and West faced falling crop prices, heavy debt, and high railroad shipping rates. Farmers’ Alliances joined with some labor groups to form the People’s Party. Its national convention met in Omaha, Nebraska, on July 4, 1892." },
      { quote: "The fruits of the toil of millions are boldly stolen to build up colossal fortunes for a few, unprecedented in the history of mankind; and the possessors of these, in turn, despise the republic and endanger liberty. From the same prolific womb of governmental injustice we breed the two great classes—tramps and millionaires.", by: "Omaha Platform, preamble" },
      { quote: "We demand free and unlimited coinage of silver and gold at the present legal ratio of 16 to 1.", by: "Omaha Platform" },
      { quote: "We demand a graduated income tax.", by: "Omaha Platform" },
      { quote: "Transportation being a means of exchange and a public necessity, the government should own and operate the railroads in the interest of the people.", by: "Omaha Platform" },
      { p: "In a separate set of resolutions, the convention also supported a constitutional amendment for the <b>direct election of U.S. senators</b> by voters, instead of by state legislatures." },
      { vocab: [["Free silver", "coining unlimited silver money; farmers hoped more money in circulation would raise crop prices and make debts easier to pay"], ["Graduated income tax", "a tax where people with higher incomes pay a higher rate"]] },
      { src: "Excerpts from the Platform of the People’s Party, adopted at Omaha, Nebraska, July 4, 1892. Public domain." }
    ]},
    { tab: "Source 3: Immigration Data", title: "Source 3: Immigration to the United States, 1871–1910", blocks: [
      { table: { cap: "Table 1. Immigrants admitted by decade, with the approximate share from each region of Europe. Data: approximate, rounded, from U.S. immigration records (U.S. Department of Homeland Security, <i>Yearbook of Immigration Statistics</i>).",
        head: ["Decade", "Total immigrants (millions)", "Northern & Western Europe", "Southern & Eastern Europe"],
        rows: [["1871–1880", "about 2.8", "about 74%", "about 7%"], ["1881–1890", "about 5.2", "about 72%", "about 18%"], ["1891–1900", "about 3.7", "about 45%", "about 52%"], ["1901–1910", "about 8.2", "about 22%", "about 71%"]], rowHead: true } },
      { fig: RCG.bar({ title: "Share of Immigrants by Region of Europe", cats: ["1871–80", "1881–90", "1891–1900", "1901–10"], values: true, legend: "right",
          series: [{ vals: [74, 72, 45, 22], cls: "s1", label: "N. & W. Europe" }, { vals: [7, 18, 52, 71], cls: "s3", label: "S. & E. Europe" }],
          y: { min: 0, max: 100, step: 20, label: "Percent of all immigrants", fmt: v => v + "%" },
          alt: "Bar graph. Northern and Western Europe falls from about 74 percent in the 1870s to about 22 percent in 1901 to 1910. Southern and Eastern Europe rises from about 7 percent to about 71 percent." }),
        cap: "Figure 1. The same regional data shown as a graph. Percentages do not add to 100 because some immigrants came from Asia, the Americas, and elsewhere." },
      { p: "<b>Context:</b> Most of the “new immigrants” after 1890 came from countries such as Italy, Austria-Hungary, and the Russian Empire. Many were Catholic or Jewish and settled in growing industrial cities. Earlier, Congress had passed the <b>Chinese Exclusion Act</b> (1882), the first major federal law to ban immigration by a specific national group." }
    ]},
    { tab: "⏳ Timeline", title: "Gilded Age Timeline", blocks: [
      { box: "<b>Try this:</b> 1) Press ▶ Play and watch the events light up. 2) Tap the <b>1892</b> dots and read both cards. 3) Look at the color key: which events are about <b>Labor</b>? Question 8 uses this timeline." },
      { sim: "timeline", title: "Industry, Labor, and Politics, 1869–1896", tip: "Tap any dot to read its card.", from: 1865, to: 1900, events: [
        { y: 1869, t: "Transcontinental Railroad completed", d: "The Union Pacific and Central Pacific lines met at Promontory Summit, Utah, linking national markets.", tag: "Business" },
        { y: 1877, t: "Great Railroad Strike", d: "Railroad workers struck after wage cuts. Federal troops were used to end the strike.", tag: "Labor" },
        { y: 1882, t: "Chinese Exclusion Act", d: "Congress banned most immigration of Chinese laborers, a sign of rising nativism.", tag: "Immigration" },
        { y: 1886, t: "Haymarket Affair", d: "A bomb exploded at a labor rally in Chicago. The public blamed radicals, and the Knights of Labor declined.", tag: "Labor" },
        { y: 1890, t: "Sherman Antitrust Act", d: "Congress outlawed combinations that restrained trade, though courts often enforced it weakly at first.", tag: "Business" },
        { y: 1892, t: "Homestead Strike", d: "Steelworkers struck at Carnegie Steel’s Homestead plant in Pennsylvania. A gun battle with Pinkerton guards left several people dead, and the union was defeated.", tag: "Labor" },
        { y: 1892, t: "Omaha Platform", d: "The People’s Party demanded free silver, a graduated income tax, and government ownership of railroads.", tag: "Politics" },
        { y: 1894, t: "Pullman Strike", d: "Eugene Debs’s American Railway Union boycotted Pullman cars. A federal court order and federal troops broke the strike.", tag: "Labor" },
        { y: 1896, t: "Election of 1896", d: "Democrat William Jennings Bryan, backed by the Populists, ran on free silver but lost to Republican William McKinley.", tag: "Politics" }
      ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Carnegie’s argument in Source 1 most directly reflects which set of ideas?",
      opts: ["Socialism, which held that workers should collectively own the factories they work in", "Social Darwinism combined with the belief that the rich have a duty to give away their wealth for public good", "Populism, which held that government should regulate railroads and banks on behalf of farmers", "Nativism, which held that immigrants threatened American jobs and culture"], a: 1,
      why: "Carnegie praises competition because it “insures the survival of the fittest” (Social Darwinism), and he says the wealthy should treat surplus money as “trust funds” to spend for the community and should not die rich (the Gospel of Wealth). He does not call for worker ownership, government regulation, or immigration limits." },
    { t: "mc", ref: 1, q: "Which group in the late 1800s would most likely have <b>criticized</b> the argument in Source 1?",
      opts: ["Industrialists who funded libraries and universities", "Supporters of laissez-faire economic policy in Congress", "Ministers who preached that hard work leads to success", "Labor organizers who argued that workers deserved a larger share of the wealth they produced"], a: 3,
      why: "Carnegie says the rich should decide how to use surplus wealth because of their “superior” ability. Labor unions such as the Knights of Labor and the AFL argued that workers should get that wealth through higher wages and shorter hours. The other groups generally agreed with Carnegie’s views." },
    { t: "mc", ref: 2, q: "The demands in Source 2 were most directly a response to which of the following?",
      opts: ["Falling crop prices, farm debt, and high railroad rates that hurt farmers in the South and West", "The rapid growth of American colonies overseas", "The end of Reconstruction and the withdrawal of federal troops from the South", "Rising wages for factory workers in Northern cities"], a: 0,
      why: "The Populists grew out of the Farmers’ Alliances. Free silver aimed to raise prices and ease debt, and government ownership of railroads aimed to end high shipping rates. Overseas empire came mostly after 1898, and factory wages were not rising quickly." },
    { t: "multi", need: 2, ref: 2, q: "Which <b>two</b> Populist goals mentioned in Source 2 were later achieved through constitutional amendments during the Progressive Era?",
      opts: ["Government ownership and operation of the railroads", "A graduated income tax", "Free and unlimited coinage of silver at 16 to 1", "Direct election of U.S. senators"], a: [1, 3],
      why: "The 16th Amendment (1913) allowed a federal income tax, and the 17th Amendment (1913) required direct election of senators. Railroads stayed privately owned, and free silver was defeated in 1896 when Bryan lost." },
    { t: "mc", ref: 3, q: "The trend in Source 3 most directly contributed to which development?",
      opts: ["The end of immigration from Northern and Western Europe", "A sharp decline in the population of American cities", "Growing nativist movements that later won laws restricting immigration from Southern and Eastern Europe", "The passage of the Chinese Exclusion Act"], a: 2,
      why: "As the share of “new immigrants” from Southern and Eastern Europe rose to about 71%, nativists pushed for limits, such as the literacy test (1917) and the quota laws of the 1920s. Immigration from Northern and Western Europe fell as a share but did not end. Cities grew. The Chinese Exclusion Act (1882) came before this shift." },
    { t: "num", ref: 3, q: "Use Table 1. About how many times larger was total immigration in 1901–1910 than in 1871–1880? Round to the nearest tenth.", a: 2.9, tol: 0.15, unit: "times",
      why: "Divide the two totals: 8.2 million ÷ 2.8 million ≈ 2.93, or about 2.9 times as many. Working with data like this is a common AP skill: compare values and describe the size of a change." },
    { t: "ebsr", ref: 2,
      A: { q: "Which best describes how Source 2 <b>differs</b> from Source 1 in explaining great fortunes?",
        opts: ["Source 2 sees great fortunes as the natural reward of competition, while Source 1 sees them as theft.", "Source 2 blames great fortunes on government injustice and the taking of workers’ labor, while Source 1 sees them as a natural result of competition that can benefit society.", "Both sources argue that the wealthy should give away most of their money.", "Both sources argue that government should own the railroads."], a: 1 },
      B: { q: "Which quotation from Source 2 <b>best</b> supports your answer to Part A?",
        opts: ["“We demand a graduated income tax.”", "“The fruits of the toil of millions are boldly stolen to build up colossal fortunes for a few”", "“We demand free and unlimited coinage of silver and gold”", "“the government should own and operate the railroads”"], a: 1 },
      why: "Carnegie calls competition a law that is “best for the race.” The Populists say fortunes were built by stealing “the fruits of the toil of millions” through “governmental injustice.” The other Part B quotations are policy demands, not explanations of where fortunes came from." },
    { t: "mc", ref: 4, q: "Use the timeline. Which event from the <b>same year</b> as the Omaha Platform involved a violent conflict at a plant owned by the author of Source 1?",
      opts: ["The Homestead Strike", "The Pullman Strike", "The Great Railroad Strike", "The Haymarket Affair"], a: 0,
      why: "Both 1892 dots show the Omaha Platform and the Homestead Strike at Carnegie Steel. The contrast is striking: Carnegie wrote about harmony between rich and poor, yet his company crushed the union at Homestead. Pullman was 1894, the Great Railroad Strike 1877, and Haymarket 1886." },
    { t: "write", ref: 2, min: 60,
      q: "<b>Short-answer question (SAQ).</b> Answer all three parts. Label them (a), (b), and (c).<br>(a) Briefly describe ONE difference between Carnegie’s view of wealth (Source 1) and the Populists’ view (Source 2).<br>(b) Briefly explain ONE specific historical development from 1865 to 1898 that supports the Populists’ view in Source 2.<br>(c) Briefly explain ONE way immigration (Source 3) affected American labor <b>or</b> politics from 1865 to 1898.",
      checks: [
        { label: "(a) Describes a difference between Carnegie and the Populists", re: /compet|fittest|natural|duty|philanthrop|trust fund|give (it |money )?away|stolen|steal|theft|injustice|unfair|rich|wealth/i, min: 2 },
        { label: "(b) Names a specific development (strike, railroad rates, trusts, debt, silver, a law, or a court case)", re: /homestead|pullman|haymarket|railroad strike|1877|rate|monopol|trust|standard oil|rockefeller|debt|crop price|deflation|gold standard|silver|grange|granger|interstate commerce|sherman|munn|wabash|robber baron|corrupt|tammany|alliance/i },
        { label: "(c) Connects immigration to labor or politics", re: /cheap labor|wage|union|strike|job|factory|worker|labor|machine|tammany|boss|vote|nativ|exclusion|chinese|quota|ethnic|catholic|jewish|tenement|settlement|hull house/i },
        { label: "Explains with cause-and-effect words", re: /because|so |led to|caused|as a result|which meant|this shows|therefore|since/i }
      ],
      why: "A strong SAQ answers each part directly in 1–3 sentences, with no thesis needed. Part (a) needs a real contrast: Carnegie treats fortunes as the natural result of competition and calls on the rich to give wisely, while the Populists call fortunes “stolen” through government injustice. Part (b) needs a specific development, such as high railroad rates, falling crop prices and debt, or the use of troops and courts against strikes. Part (c) needs a cause-and-effect link, such as immigrant labor keeping wages low, city political machines winning immigrant votes, or nativist laws like the Chinese Exclusion Act.",
      rubric: "SAQ scoring (here 0–2 points): full credit when all three parts are answered with accurate, specific historical evidence and explanation. 1 point when one or two parts are answered well. 0 points when no part is answered accurately.",
      model: "(a) Carnegie sees great wealth as the natural result of competition that “insures the survival of the fittest,” and he thinks the rich should give it away wisely. The Populists see great fortunes as “stolen” from workers through government injustice. (b) Railroads charged farmers high shipping rates while giving discounts to big companies, and farmers sank into debt as crop prices fell, which led farmers to argue that the system favored the rich. (c) Millions of new immigrants supplied cheap labor for factories, so employers could cut wages and replace strikers, which made it harder for unions to win strikes and fueled nativist laws like the Chinese Exclusion Act of 1882." }
  ]
};

/* ---------------------------------------------------------------------
   2. AP WORLD HISTORY · UNITS 5–6 (c. 1750–1900)
   --------------------------------------------------------------------- */
RC["ap-wh-industrial"] = {
  subject: "AP World History", mins: 15,
  title: "AP Practice Quiz: Industrialization and Imperialism (Units 5–6)",
  blurb: "Units 5–6, c. 1750–1900: causes, effects, and reactions to industrialization, plus a Meiji Japan vs. Qing China comparison and an SAQ.",
  eq: "How did industrialization change the balance of power in the world between 1750 and 1900?",
  target: "I can use primary sources, data, and a historian’s argument to explain causes, effects, and comparisons of industrialization and imperialism.",
  sources: [
    { tab: "Source 1: Reactions", title: "Source 1: Two Reactions to Industrial Britain", blocks: [
      { box: HAP_AP_NOTE + "<br>Directions: Read each source, then answer the questions. The last question is a short-answer question (SAQ)." },
      { p: "<b>Context A:</b> In 1832 a committee of the British Parliament, led by Michael Sadler, heard testimony about child labor in textile mills. Samuel Coulson, a father, was asked what hours his daughters worked during the busy season." },
      { quote: "In the brisk time, for about six weeks, they have gone at 3 o’clock in the morning, and ended at 10, or nearly half past, at night.", by: "Samuel Coulson, testimony to the Sadler Committee, 1832" },
      { p: "<b>Context B:</b> In 1848 Karl Marx and Friedrich Engels published <i>The Communist Manifesto</i>. The excerpts below are from the 1888 English translation by Samuel Moore." },
      { quote: "The history of all hitherto existing society is the history of class struggles.", by: "Marx and Engels, 1848" },
      { quote: "Society as a whole is more and more splitting up into two great hostile camps, into two great classes directly facing each other: Bourgeoisie and Proletariat.", by: "Marx and Engels, 1848" },
      { vocab: [["Bourgeoisie", "the owners of factories, banks, and businesses (capitalists)"], ["Proletariat", "industrial wage workers who own nothing but their labor"], ["Brisk time", "the busy season, when mills ran the longest hours"]] },
      { src: "Report from the Committee on the “Bill to Regulate the Labour of Children in the Mills and Factories” (1832); Marx and Engels, <i>Manifesto of the Communist Party</i>, trans. Samuel Moore (1888). Public domain." }
    ]},
    { tab: "Source 2: Data", title: "Source 2: Shares of World Manufacturing Output", blocks: [
      { fig: RCG.line({ title: "Share of World Manufacturing Output, 1750–1900", x: { min: 1750, max: 1900, ticks: [1750, 1800, 1830, 1860, 1880, 1900], label: "Year" },
          y: { min: 0, max: 35, step: 5, label: "Percent of world total", fmt: v => v + "%" }, legend: "right",
          series: [
            { pts: [[1750, 32.8], [1800, 33.3], [1830, 29.8], [1860, 19.7], [1880, 12.5], [1900, 6.2]], cls: "s1", label: "China", dots: true },
            { pts: [[1750, 24.5], [1800, 19.7], [1830, 17.6], [1860, 8.6], [1880, 2.8], [1900, 1.7]], cls: "s4", label: "India", dots: true },
            { pts: [[1750, 1.9], [1800, 4.3], [1830, 9.5], [1860, 19.9], [1880, 22.9], [1900, 18.5]], cls: "s3", label: "Britain", dots: true },
            { pts: [[1750, 0.1], [1800, 0.8], [1830, 2.4], [1860, 7.2], [1880, 14.7], [1900, 23.6]], cls: "s2", label: "U.S.", dots: true }
          ], alt: "Line graph. China falls from about 33 percent in 1750 to about 6 percent in 1900. India falls from about 25 percent to about 2 percent. Britain rises from about 2 percent to about 23 percent in 1880, then dips to about 19 percent. The United States rises from almost 0 to about 24 percent in 1900." }),
        cap: "Figure 1. Estimated shares of world manufacturing output (rounded). Data: approximate estimates by economic historian Paul Bairoch (1982)." },
      { table: { cap: "Table 1. The same estimates, in percent of world manufacturing output (approximate).", head: ["Region", "1750", "1800", "1830", "1860", "1880", "1900"],
        rows: [["China", "32.8", "33.3", "29.8", "19.7", "12.5", "6.2"], ["India", "24.5", "19.7", "17.6", "8.6", "2.8", "1.7"], ["Britain", "1.9", "4.3", "9.5", "19.9", "22.9", "18.5"], ["United States", "0.1", "0.8", "2.4", "7.2", "14.7", "23.6"]], rowHead: true } }
    ]},
    { tab: "Source 3: Historian", title: "Source 3: A Historian Compares Japan and China", numbered: true, blocks: [
      { p: "<i>This passage was written for this site in the style of a historian’s analysis.</i>", n: false },
      { p: "In the middle of the 1800s, both Qing China and Tokugawa Japan were forced to open their ports to Western traders. China lost the Opium Wars to Britain and signed treaties that gave foreigners special trading rights. In 1853 the American naval officer Matthew Perry arrived in Japan with steam-powered warships, and Japan soon signed similar unequal treaties." },
      { p: "The two states responded in very different ways. In 1868 a group of reformers overthrew the shogun and ruled in the name of the young Meiji emperor. The new government ended the special privileges of the samurai, created an army of drafted commoners, built railroads and state-sponsored factories, and set up a national school system. Its leaders studied Western constitutions and industries and borrowed what they believed would make Japan strong." },
      { p: "In China, reform officials in the <b>Self-Strengthening Movement</b> also built arsenals and shipyards to produce Western-style weapons. However, they hoped to add Western technology while keeping the Confucian political order unchanged. Reform depended on regional officials rather than on a single committed central government, and conservatives at the court resisted deeper change. When the young Guangxu Emperor tried broader reforms in 1898, the Empress Dowager Cixi ended them after about one hundred days." },
      { p: "The results became clear in the Sino-Japanese War of 1894–1895, when Japan’s modern army and navy defeated China. Japan took Taiwan as a colony and soon joined the Western powers as an empire of its own. In my view, the key difference was not access to Western technology, which both states had, but whether the central government was willing to reorganize society around it." }
    ]},
    { tab: "Source 4: Kipling", title: "Source 4: Rudyard Kipling, “The White Man’s Burden” (1899)", blocks: [
      { p: "<b>Context:</b> British writer Rudyard Kipling published this poem in 1899, as the United States was deciding whether to take control of the Philippines after the Spanish-American War." },
      { quote: "Take up the White Man’s burden—<br>Send forth the best ye breed—<br>Go bind your sons to exile<br>To serve your captives’ need;<br>To wait in heavy harness<br>On fluttered folk and wild—<br>Your new-caught, sullen peoples,<br>Half devil and half child.", by: "Rudyard Kipling, first stanza, 1899" },
      { src: "Rudyard Kipling, “The White Man’s Burden,” <i>McClure’s Magazine</i>, February 1899. Public domain." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Testimony like Samuel Coulson’s in Source 1 was most directly used to support which development in Britain?",
      opts: ["The repeal of laws that protected British farmers from foreign grain", "Laws that limited the working hours of children in factories, such as the Factory Act of 1833", "The abolition of the slave trade in the British Empire", "The growth of British colonies in Africa"], a: 1,
      why: "The Sadler Committee collected evidence about long hours for children in textile mills. Parliament responded with the Factory Act of 1833, which banned most work by children under 9 in textile mills and limited hours for older children. This was a reform response to industrial working conditions." },
    { t: "mc", ref: 1, q: "The excerpts from <i>The Communist Manifesto</i> in Source 1 are best understood as which kind of response to industrialization?",
      opts: ["A defense of free-market capitalism and laissez-faire policy", "A call to return to farming and handicraft production", "An argument that religious revival would solve social problems", "An argument that industrial capitalism divides society into opposed classes of owners and workers"], a: 3,
      why: "Marx and Engels say society is “splitting up into two great hostile camps,” the bourgeoisie (owners) and the proletariat (workers). This class-conflict analysis led to socialist and communist movements. It is a critique of capitalism, not a defense of it." },
    { t: "inline", ref: 2, q: "Use Source 2 to complete the sentence.",
      text: "Between 1750 and 1880, Britain’s share of world manufacturing rose from about [[]] to about [[]], while China’s share fell to about [[]].",
      blanks: [{ opts: ["2%", "10%", "33%"], a: 0 }, { opts: ["9%", "23%", "33%"], a: 1 }, { opts: ["6%", "12%", "20%"], a: 1 }],
      why: "Read the 1750 and 1880 columns of Table 1. Britain: 1.9% → 22.9% (about 2% → 23%). China: 32.8% → 12.5% (about 12%). China’s share fell to about 6% only by 1900." },
    { t: "mc", ref: 2, q: "Which of the following best explains the decline in China’s and India’s shares shown in Source 2?",
      opts: ["Mechanized factory production in industrial states outcompeted hand production, and imperial control opened Asian markets to cheap manufactured goods.", "Populations in China and India fell sharply after 1800.", "China and India stopped trading with the rest of the world after 1750.", "European governments banned the export of machines to all other countries after 1860."], a: 0,
      why: "Steam-powered factories produced cloth far more cheaply than hand weavers. British rule in India and unequal treaties in China opened those markets to factory goods, which hurt local artisans. Asian populations actually grew, and both regions kept trading." },
    { t: "grid", ref: 3, q: "Use Source 3 and your knowledge. Match each development to the state it describes.", cols: ["Meiji Japan", "Qing China"],
      rows: [["Ended samurai privileges and created an army of drafted commoners", 0], ["Self-Strengthening reformers added Western weapons but kept the Confucian political order", 1], ["Built state-sponsored factories, railroads, and a national school system", 0], ["The Empress Dowager Cixi ended the Hundred Days’ Reform of 1898", 1], ["Won the war of 1894–1895 and took Taiwan as a colony", 0]],
      why: "Japan’s Meiji government reorganized society from the top: ending samurai privileges, drafting commoners, and building industry and schools. China’s reforms were narrower and were blocked by court conservatives like Cixi. Japan won the Sino-Japanese War and took Taiwan." },
    { t: "ebsr", ref: 3,
      A: { q: "Which statement best describes the historian’s main argument in Source 3?",
        opts: ["Japan industrialized because it had more natural resources than China.", "China failed because it refused to buy any Western weapons.", "Japan modernized more successfully because its central government was willing to reorganize society, not just adopt technology.", "Both states were equally successful at resisting Western imperialism."], a: 2 },
      B: { q: "Which sentence from Source 3 <b>best</b> supports your answer to Part A?",
        opts: ["“In 1853 the American naval officer Matthew Perry arrived in Japan with steam-powered warships”", "“the key difference was not access to Western technology, which both states had, but whether the central government was willing to reorganize society around it.”", "“China lost the Opium Wars to Britain”", "“Japan took Taiwan as a colony”"], a: 1 },
      why: "The historian states the claim directly in the last sentence of paragraph 4. Paragraph 3 also shows that China did buy Western weapons, so the claim is about reorganizing society, not access to technology. The other choices are facts, not the argument." },
    { t: "mc", ref: 4, q: "Kipling’s poem in Source 4 most directly reflects which justification for imperialism in the late 1800s?",
      opts: ["The need for new markets for factory goods", "The belief that colonizers had a duty to “civilize” colonized peoples, based on ideas of racial superiority", "The demand for coaling stations for steam-powered navies", "The belief that colonized peoples should govern themselves"], a: 1,
      why: "Kipling calls imperial rule a “burden” and a duty to “serve your captives’ need,” while describing colonized people as “half devil and half child.” This is the “civilizing mission,” built on racist ideas such as Social Darwinism. Markets and coaling stations were real motives, but the poem does not mention them." },
    { t: "mc", ref: 3, q: "Based on Source 3 and Source 4, which statement best describes Japan’s position by 1900?",
      opts: ["Japan had become a colony of Britain.", "Japan had rejected all Western technology and ideas.", "Japan had become the only industrial power in the world.", "Japan had become an imperial power itself, ruling Taiwan after defeating China."], a: 3,
      why: "After the Sino-Japanese War of 1894–1895, Japan took Taiwan, and it later annexed Korea (1910). Like the Western empires Kipling praised, Japan used industrial strength to build an empire. It was never a colony, and it borrowed heavily from the West." },
    { t: "write", min: 60,
      q: "<b>Short-answer question (SAQ).</b> Answer all three parts. Label them (a), (b), and (c).<br>(a) Identify ONE cause of the Industrial Revolution in Britain.<br>(b) Explain ONE difference between how Japan and China responded to Western industrial power in the 1800s.<br>(c) Explain ONE way industrialization contributed to imperialism between 1750 and 1900.",
      checks: [
        { label: "(a) Identifies a cause of British industrialization", re: /coal|iron|river|canal|capital|bank|invest|enclosure|agricultur|population|labor supply|colon|cotton|raw material|steam|navy|market|stable government|patent|entrepreneur/i },
        { label: "(b) Compares Japan and China", re: /(japan|meiji)[\s\S]*(china|qing)|(china|qing)[\s\S]*(japan|meiji)/i },
        { label: "(c) Links industry to imperialism", re: /raw material|rubber|cotton|market|coal|coaling|steamship|gun|machine gun|maxim|quinine|telegraph|railroad|resources|sell|export|factor/i },
        { label: "Explains with cause-and-effect words", re: /because|so |led to|caused|as a result|which meant|this allowed|therefore|since|needed/i }
      ],
      why: "Answer each part directly with specific evidence. (a) Good causes include coal and iron, rivers and canals, capital from trade and banks, the agricultural revolution and enclosure, and access to raw cotton and markets through empire. (b) A good comparison names both states: Japan’s central government reorganized society, while China’s Self-Strengthening reforms were limited and resisted. (c) A good link explains how industry needed raw materials and markets, or how steamships, guns, and medicine made conquest possible.",
      rubric: "SAQ scoring (here 0–2 points): full credit when all three parts are accurate and specific, with explanation. 1 point when one or two parts are answered well. 0 points when no part is accurate.",
      model: "(a) Britain had large deposits of coal and iron near rivers and ports, which powered steam engines and made machines cheaper to build. (b) Meiji Japan’s central government reorganized society by ending samurai privileges, drafting a modern army, and building factories and schools, while Qing China’s Self-Strengthening reformers added Western weapons but kept the Confucian order, so Japan defeated China in 1894–1895. (c) Industrial factories needed raw materials such as cotton and rubber and new markets for their goods, so European powers took colonies in Africa and Asia, and steamships and machine guns made conquest easier." }
  ]
};

/* ---------------------------------------------------------------------
   3. AP ENGLISH LANGUAGE · RHETORICAL ANALYSIS
   --------------------------------------------------------------------- */
RC["ap-lang-rhetoric"] = {
  subject: "AP English Language", mins: 15,
  title: "AP Practice Quiz: Rhetorical Analysis of Lincoln’s Second Inaugural",
  blurb: "Rhetorical analysis skills: purpose, audience, shifts, function of sentences, and syntax in Lincoln’s Second Inaugural Address (1865), plus a thesis write.",
  eq: "How does a speaker use rhetorical choices to unite a divided audience?",
  target: "I can analyze how Lincoln’s choices about audience, structure, and syntax serve his purpose, and write a defensible thesis with a line of reasoning.",
  sources: [
    { tab: "Context", title: "The Rhetorical Situation", blocks: [
      { box: HAP_AP_NOTE + "<br>Directions: Read the context, then the speech. Paragraph numbers are on the left. Answer the multiple-choice questions, then write a thesis and line of reasoning." },
      { p: "<b>Occasion:</b> Abraham Lincoln gave this speech on March 4, 1865, at his second inauguration in Washington, D.C. The Civil War had lasted almost four years, and hundreds of thousands of soldiers had died. Union victory now looked likely. The House had just passed the Thirteenth Amendment to abolish slavery, and it was going to the states. Lincoln would be assassinated about six weeks later." },
      { p: "<b>Audience:</b> The crowd in front of the Capitol was mostly Northern, and included many people who wanted the South punished. Newspapers would carry the speech across the whole nation, including the South." },
      { p: "<b>Note on style:</b> The speech is only about 700 words, one of the shortest inaugural addresses. It quotes or echoes the Bible several times: Matthew 7:1 (“judge not, that ye be not judged”), Matthew 18:7 (“Woe unto the world because of offences”), and Psalm 19:9 (“the judgments of the Lord are true and righteous altogether”)." },
      { vocab: [["Deprecate", "to disapprove of, to wish to avoid"], ["Insurgent", "a rebel against the government (Lincoln’s word for the Confederacy)"], ["Unrequited toil", "work that is never paid back"], ["Antithesis", "placing contrasting ideas side by side in parallel form"], ["Periodic sentence", "a sentence that holds its main point until the end"]] }
    ]},
    { tab: "The Speech", title: "Abraham Lincoln, Second Inaugural Address (March 4, 1865)", numbered: true, blocks: [
      { p: "Fellow-Countrymen: At this second appearing to take the oath of the Presidential office there is less occasion for an extended address than there was at the first. Then a statement somewhat in detail of a course to be pursued seemed fitting and proper. Now, at the expiration of four years, during which public declarations have been constantly called forth on every point and phase of the great contest which still absorbs the attention and engrosses the energies of the nation, little that is new could be presented. The progress of our arms, upon which all else chiefly depends, is as well known to the public as to myself, and it is, I trust, reasonably satisfactory and encouraging to all. With high hope for the future, no prediction in regard to it is ventured." },
      { p: "On the occasion corresponding to this four years ago all thoughts were anxiously directed to an impending civil war. All dreaded it, all sought to avert it. While the inaugural address was being delivered from this place, devoted altogether to saving the Union without war, insurgent agents were in the city seeking to destroy it without war—seeking to dissolve the Union and divide effects by negotiation. Both parties deprecated war, but one of them would make war rather than let the nation survive, and the other would accept war rather than let it perish, and the war came." },
      { p: "One-eighth of the whole population were colored slaves, not distributed generally over the Union, but localized in the southern part of it. These slaves constituted a peculiar and powerful interest. All knew that this interest was somehow the cause of the war. To strengthen, perpetuate, and extend this interest was the object for which the insurgents would rend the Union even by war, while the Government claimed no right to do more than to restrict the territorial enlargement of it. Neither party expected for the war the magnitude or the duration which it has already attained. Neither anticipated that the cause of the conflict might cease with or even before the conflict itself should cease. Each looked for an easier triumph, and a result less fundamental and astounding. Both read the same Bible and pray to the same God, and each invokes His aid against the other. It may seem strange that any men should dare to ask a just God’s assistance in wringing their bread from the sweat of other men’s faces, but let us judge not, that we be not judged. The prayers of both could not be answered. That of neither has been answered fully. The Almighty has His own purposes. “Woe unto the world because of offenses; for it must needs be that offenses come, but woe to that man by whom the offense cometh.” If we shall suppose that American slavery is one of those offenses which, in the providence of God, must needs come, but which, having continued through His appointed time, He now wills to remove, and that He gives to both North and South this terrible war as the woe due to those by whom the offense came, shall we discern therein any departure from those divine attributes which the believers in a living God always ascribe to Him? Fondly do we hope, fervently do we pray, that this mighty scourge of war may speedily pass away. Yet, if God wills that it continue until all the wealth piled by the bondsman’s two hundred and fifty years of unrequited toil shall be sunk, and until every drop of blood drawn with the lash shall be paid by another drawn with the sword, as was said three thousand years ago, so still it must be said “the judgments of the Lord are true and righteous altogether.”" },
      { p: "With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation’s wounds, to care for him who shall have borne the battle and for his widow and his orphan, to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations." },
      { src: "Abraham Lincoln, Second Inaugural Address, March 4, 1865. U.S. government work, public domain." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 2, q: "Which best describes Lincoln’s primary purpose in the address as a whole?",
      opts: ["To announce detailed military plans for ending the war quickly", "To list the crimes of the Confederacy so the South will be punished", "To present the war as a shared national judgment for slavery and to call for a merciful, lasting peace", "To argue that slavery was not connected to the causes of the war"], a: 2,
      why: "Lincoln says both North and South received “this terrible war” as the “woe” for slavery, then ends by urging “malice toward none” and “a just and lasting peace.” In paragraph 1 he refuses to give a detailed plan or prediction, and he does not call for punishment." },
    { t: "mc", ref: 2, q: "In paragraph 1, Lincoln says “little that is new could be presented” and that “no prediction in regard to it is ventured.” These choices mainly serve to",
      opts: ["show his audience that he is uncertain whether the Union will win", "lower expectations for a victory speech, preparing listeners for a reflection instead of a celebration", "criticize newspapers for reporting too much about the war", "suggest that his first inaugural address was a mistake"], a: 1,
      why: "A Northern crowd near victory might expect triumph. Lincoln calmly declines to boast or predict, which sets up the humble, reflective tone of the rest of the speech. He does say the progress of the army is “reasonably satisfactory and encouraging,” so he is not expressing doubt about winning." },
    { t: "mc", ref: 2, q: "Paragraph 2 ends with the short clause “and the war came.” What is the <b>function</b> of this clause?",
      opts: ["It presents the war almost as an event that arrived on its own, giving it weight while avoiding a gloating tone toward either side.", "It introduces a list of the war’s major battles.", "It blames the North alone for starting the war.", "It shifts from a formal style to humor to relax the audience."], a: 0,
      why: "After a long, balanced sentence about what “one” side and “the other” would do, the blunt four-word ending lands like a fact of history. The passive, impersonal phrasing (the war “came”) keeps the focus on the tragedy rather than on scoring points. Lincoln does assign responsibility in that sentence, but not to the North alone." },
    { t: "inline", ref: 2, q: "Complete the analysis of a sentence from paragraph 2.",
      text: "In “one of them would make war rather than let the nation survive, and the other would accept war rather than let it perish,” Lincoln uses [[]] to show [[]].",
      blanks: [{ opts: ["antithesis in parallel clauses", "a rhetorical question", "an anecdote"], a: 0 }, { opts: ["that both sides were equally to blame", "a moral difference between the sides while treating them evenhandedly in form", "that he regrets defending the Union"], a: 1 }],
      why: "The two clauses mirror each other (“would make war rather than…” / “would accept war rather than…”), which is antithesis in parallel structure. The matching form sounds fair, but the content draws a clear line: one side made war to destroy the nation, the other accepted war to save it." },
    { t: "hot", ref: 2, q: "Paragraph 3 begins below. Click the sentence in which Lincoln first <b>directly identifies</b> slavery as the cause of the war.",
      text: ["One-eighth of the whole population were colored slaves, not distributed generally over the Union, but localized in the southern part of it.", "These slaves constituted a peculiar and powerful interest.", "All knew that this interest was somehow the cause of the war.", "To strengthen, perpetuate, and extend this interest was the object for which the insurgents would rend the Union even by war, while the Government claimed no right to do more than to restrict the territorial enlargement of it."], a: [2],
      why: "The first two sentences describe slavery as an “interest,” but the third states that “all knew” it was “the cause of the war.” The phrase “all knew” is a strong claim of shared knowledge: no one in either audience can honestly deny it. The fourth sentence then explains how slavery caused the war." },
    { t: "ebsr", ref: 2,
      A: { q: "How does paragraph 4 <b>shift</b> from the end of paragraph 3?",
        opts: ["From hopeful prayer to angry blame of the South", "From a stern reflection on divine judgment to a forward-looking call for mercy and healing", "From a description of battles to a summary of economic policy", "From formal language to casual, everyday language"], a: 1 },
      B: { q: "Which phrase from paragraph 4 <b>best</b> supports your answer to Part A?",
        opts: ["“with firmness in the right”", "“to finish the work we are in”", "“With malice toward none, with charity for all”", "“among ourselves and with all nations”"], a: 2 },
      why: "Paragraph 3 ends with a severe image: blood drawn “with the lash” repaid by blood drawn “with the sword,” and God’s judgments called “true and righteous.” Paragraph 4 turns to the future with “malice toward none” and “charity for all.” “Firmness in the right” and “finish the work” show resolve, not the shift to mercy." },
    { t: "mc", ref: 2, q: "In paragraph 3, the sentence “Fondly do we hope, fervently do we pray, that this mighty scourge of war may speedily pass away” uses inverted word order and parallel clauses mainly to",
      opts: ["make the sentence sound like a solemn, shared prayer before the harsh “Yet” that follows", "confuse listeners so they will not notice his argument", "show that Lincoln is unsure about grammar", "describe a specific battle in vivid detail"], a: 0,
      why: "Placing “Fondly” and “fervently” first (instead of “we hope fondly”) creates a formal, prayer-like rhythm, strengthened by alliteration (f-, f-; p-, p-) and the shared “we.” That gentle wish sets up the stern turn that begins with “Yet,” where Lincoln says the war may continue if God wills it." },
    { t: "mc", ref: 2, q: "Right after criticizing those who ask God’s help in “wringing their bread from the sweat of other men’s faces,” Lincoln adds “but let us judge not, that we be not judged.” What is the most likely effect of this biblical allusion on his Northern audience?",
      opts: ["It suggests Northerners should judge the South even more harshly.", "It shows that Lincoln approves of slavery.", "It changes the topic from religion to economics.", "It warns Northerners against self-righteousness, even as it condemns slavery."], a: 3,
      why: "Lincoln first makes a sharp moral point against slaveholders, then immediately applies Jesus’ warning in Matthew 7:1 to “us.” The allusion borrows the authority of a text both sides shared and restrains the Northern crowd’s desire for revenge, which prepares for “malice toward none.”" },
    { t: "write", min: 50,
      q: "<b>Thesis + line of reasoning.</b> Write a <b>defensible thesis</b> that identifies Lincoln’s purpose and the rhetorical choices he uses to achieve it. Then write 2–3 sentences that outline your <b>line of reasoning</b>: name two choices and explain how each one serves the purpose. Refer to specific words from the speech.",
      checks: [
        { label: "States Lincoln’s purpose (unite, heal, reconcile, mercy, peace, or shared responsibility)", re: /unit|heal|reconcil|bind|merc|forgiv|peace|together|both sides|shared|common|malice|charity|humble|restrain/i },
        { label: "Names at least two rhetorical choices", re: /antithes|parallel|syntax|inver|allusion|bible|biblical|scripture|repetition|anaphora|alliteration|diction|tone|pronoun|“we”|"we"|\bwe\b|\bus\b|shift|periodic|short (clause|sentence)|rhetorical question|appeal|pathos|ethos|logos|imagery/i, min: 2 },
        { label: "Uses specific words from the speech", re: /malice|charity|judge not|war came|both read|same bible|same god|bind up|wounds|scourge|lash|sword|fondly|fervently|all knew|offense|woe|righteous|widow|orphan|“|"/i },
        { label: "Explains how the choices serve the purpose", re: /because|which|this (helps|shows|makes|allows|creates)|so that|in order to|by (using|showing|placing|calling)|to (show|remind|unite|persuade|convince)/i }
      ],
      why: "A defensible thesis does more than say what Lincoln talks about. It makes a claim about what he is trying to do (for example, prepare a victorious North to forgive the South) and how he does it (choices such as biblical allusion, inclusive pronouns, balanced antithesis, or the shift from judgment to mercy). Your line of reasoning should give each choice its own reason, so a reader can see how the essay’s body paragraphs would be organized.",
      rubric: "AP-style thesis + reasoning (here 0–2 points): 2 points for a defensible thesis that analyzes Lincoln’s choices (not just summarizes), plus a line of reasoning that links at least two choices to his purpose with specific textual references. 1 point for a thesis that names a purpose or choices but restates the speech or does not explain how the choices work. 0 points for a summary with no defensible claim.",
      model: "In his Second Inaugural Address, Lincoln seeks to prepare a victorious but bitter Northern audience to reunite with the South by using inclusive biblical allusions and balanced syntax that present the war as a shared judgment. First, by reminding listeners that “both read the same Bible and pray to the same God” and warning “let us judge not,” he uses a text both sides respect to restrain Northern self-righteousness. Second, his antithesis in “one of them would make war… and the other would accept war” assigns blame fairly but calmly, which makes his final appeal for “malice toward none, with charity for all” feel earned rather than naive." }
  ]
};

/* ---------------------------------------------------------------------
   4. AP ENGLISH LITERATURE · POETRY ANALYSIS
   --------------------------------------------------------------------- */
RC["ap-lit-poetry"] = {
  subject: "AP English Literature", mins: 15,
  title: "AP Practice Quiz: Poetry Analysis of Shakespeare’s Sonnet 73",
  blurb: "Poetry analysis skills: speaker, figurative language, structure and volta, and tone shift in Shakespeare’s Sonnet 73, plus a thesis write.",
  eq: "How can the structure of a poem build meaning, image by image?",
  target: "I can analyze how speaker, metaphor, structure, and shifts work together in a sonnet, and write a defensible thesis about how a literary element shapes meaning.",
  sources: [
    { tab: "The Poem", title: "Sonnet 73, by William Shakespeare (1609)", numbered: true, blocks: [
      { box: HAP_AP_NOTE + "<br>Directions: Read the poem carefully. Line numbers are on the left. Read it twice: once for meaning, once for patterns.", n: false },
      { p: "That time of year thou mayst in me behold" },
      { p: "When yellow leaves, or none, or few, do hang" },
      { p: "Upon those boughs which shake against the cold," },
      { p: "Bare ruin’d choirs, where late the sweet birds sang." },
      { p: "In me thou see’st the twilight of such day" },
      { p: "As after sunset fadeth in the west," },
      { p: "Which by and by black night doth take away," },
      { p: "Death’s second self, that seals up all in rest." },
      { p: "In me thou see’st the glowing of such fire" },
      { p: "That on the ashes of his youth doth lie," },
      { p: "As the death-bed whereon it must expire," },
      { p: "Consum’d with that which it was nourish’d by." },
      { p: "This thou perceiv’st, which makes thy love more strong," },
      { p: "To love that well which thou must leave ere long." },
      { src: "William Shakespeare, Sonnet 73, from <i>Shake-speares Sonnets</i> (1609), spelling modernized. Public domain." }
    ]},
    { tab: "Poetry Toolkit", title: "Poetry Toolkit", blocks: [
      { vocab: [["Speaker", "the voice in the poem (not always the poet)"], ["Quatrain", "a group of four lines"], ["Couplet", "a pair of rhyming lines; a Shakespearean sonnet ends with one"], ["Volta", "the “turn,” a shift in thought, tone, or focus"], ["Iambic pentameter", "ten syllables per line in an unstressed-STRESSED pattern: da-DUM ×5"], ["Paradox", "a statement that seems to contradict itself but reveals a truth"], ["Extended metaphor", "a comparison developed over several lines"]] },
      { p: "<b>Old words:</b> <i>thou / thee / thy</i> = you / your. <i>mayst</i> = may. <i>late</i> = recently. <i>by and by</i> = soon. <i>doth</i> = does. <i>ere long</i> = before long." },
      { box: "<b>Shakespearean (English) sonnet:</b> 14 lines of iambic pentameter, three quatrains and a final couplet, rhyme scheme ABAB CDCD EFEF GG. The couplet often turns the poem, answering or reframing what the quatrains built up." }
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "Which best describes the speaker and the situation in the poem?",
      opts: ["A young person celebrating the arrival of autumn", "A speaker grieving a friend who has already died", "An aging speaker addressing a loved one and reflecting on his own approaching death", "A narrator describing a church that was destroyed in a fire"], a: 2,
      why: "The speaker repeatedly says “in me thou see’st,” so he is describing himself to a listener (“thou”). Each image (late autumn, fading twilight, a dying fire) suggests the end of life. The death is approaching, not past, and the “choirs” are a metaphor, not a real church." },
    { t: "order", ref: 1, q: "Put the three central metaphors for the speaker in the order they appear in the poem.",
      items: ["Late autumn, when leaves have fallen from the branches", "Twilight, after the sun has set", "A fire glowing on its own ashes"],
      why: "Quatrain 1 (lines 1–4) is autumn, quatrain 2 (lines 5–8) is twilight, and quatrain 3 (lines 9–12) is a dying fire. Each quatrain develops one extended metaphor." },
    { t: "mc", ref: 1, q: "What is the effect of the order of these three metaphors?",
      opts: ["Each image covers a shorter span of time (a year, a day, the last minutes of a fire), which makes the speaker’s death feel closer and more urgent.", "The images move from dark to bright, showing that the speaker is recovering.", "The images are unrelated, which shows that the speaker is confused.", "Each image covers a longer span of time, suggesting that the speaker has many years left."], a: 0,
      why: "A season lasts months, twilight lasts an hour, and the last glow of a fire lasts minutes. The shrinking time scale tightens the sense that the end is near, which sets up the urgency of the final couplet." },
    { t: "mc", ref: 1, q: "In line 4, the speaker calls the branches “Bare ruin’d choirs, where late the sweet birds sang.” This metaphor most likely suggests that",
      opts: ["the speaker plans to rebuild a church", "the trees will soon grow new leaves and the birds will return", "the speaker never cared for music", "the beauty and music of the speaker’s youth are now gone, leaving something empty and broken"], a: 3,
      why: "The branches are compared to choir lofts (where singers stand) in a ruined church. “Late” means recently: the singing is over. Applied to the speaker, it suggests that his youthful energy and beauty have ended. Nothing in the poem promises a spring return." },
    { t: "inline", ref: 2, q: "Use the Poetry Toolkit and the poem to complete the sentence.",
      text: "Lines 1–4 follow the rhyme scheme [[]], and the poem’s three quatrains plus a final couplet mark it as a [[]] sonnet written in [[]].",
      blanks: [{ opts: ["AABB", "ABAB", "ABBA"], a: 1 }, { opts: ["Petrarchan (Italian)", "Shakespearean (English)", "Spenserian"], a: 1 }, { opts: ["free verse", "iambic pentameter", "trochaic tetrameter"], a: 1 }],
      why: "Behold/cold rhyme (A) and hang/sang rhyme (B): ABAB. Three quatrains and a couplet (ABAB CDCD EFEF GG) is the Shakespearean form. Lines like “That TIME of YEAR thou MAYST in ME be-HOLD” have ten syllables in an unstressed-stressed pattern: iambic pentameter." },
    { t: "ebsr", ref: 1,
      A: { q: "Line 12 says the fire is “Consum’d with that which it was nourish’d by.” What does this <b>paradox</b> suggest about the speaker?",
        opts: ["The speaker is healthy because he eats well.", "The same life and youth that once fed the speaker now smother him, as ashes smother the fire that made them.", "The speaker wants to start a new fire to stay warm.", "The speaker blames his listener for his illness."], a: 1 },
      B: { q: "Which line <b>best</b> supports your answer to Part A?",
        opts: ["Line 3: “Upon those boughs which shake against the cold,”", "Line 6: “As after sunset fadeth in the west,”", "Line 10: “That on the ashes of his youth doth lie,”", "Line 14: “To love that well which thou must leave ere long.”"], a: 2 },
      why: "A fire burns its fuel into ashes, and those ashes eventually choke it out. Line 10 names the ashes as the speaker’s “youth”: the life he has already burned through is now the thing that ends him. Lines 3 and 6 belong to the other metaphors, and line 14 is about the listener." },
    { t: "hot", ref: 1, q: "Click the line where the poem’s <b>volta</b> (turn) begins, shifting the focus from the speaker to the listener.",
      text: ["In me thou see’st the glowing of such fire", "That on the ashes of his youth doth lie,", "As the death-bed whereon it must expire,", "Consum’d with that which it was nourish’d by.", "This thou perceiv’st, which makes thy love more strong,", "To love that well which thou must leave ere long."], a: [4],
      why: "Lines 1–12 repeat “in me” and describe the speaker. Line 13 begins the couplet with “This thou perceiv’st”: now the subject is “thou,” and the poem turns to what the listener understands and how that changes the listener’s love." },
    { t: "mc", ref: 1, q: "Which best describes the shift in tone from the three quatrains to the final couplet?",
      opts: ["From joyful to angry", "From hopeful to despairing", "From melancholy self-description to a tender, almost consoling conclusion about loving more deeply because time is short", "From formal to humorous"], a: 2,
      why: "The quatrains are sad and resigned, piling up images of decline and death. The couplet does not deny death, but finds meaning in it: knowing the speaker will soon be gone makes the listener’s love “more strong.” Some readers also hear a note of uncertainty or pleading, which makes the turn even richer." },
    { t: "write", min: 50,
      q: "<b>Thesis + line of reasoning.</b> Write a <b>defensible thesis</b> about how ONE literary element in Sonnet 73 (for example, the sequence of metaphors, the sonnet structure and volta, or the paradox in line 12) shapes the poem’s meaning about aging, death, or love. Then write 2–3 sentences explaining your <b>line of reasoning</b> with specific words from the poem.",
      checks: [
        { label: "Names a literary element", re: /metaphor|image|imagery|structure|quatrain|couplet|volta|turn|shift|paradox|personif|figurative|rhyme|meter|pentameter|sonnet form|progression|sequence/i },
        { label: "Makes a claim about meaning (aging, death, time, or love)", re: /aging|age|old|death|dying|die|mortal|time|love|youth|urgency|short|fleeting|end of life/i },
        { label: "Uses specific words from the poem", re: /yellow leaves|boughs|ruin.?d choirs|sweet birds|twilight|sunset|black night|second self|seals up|glowing|fire|ashes|death.?bed|consum|nourish|perceiv|more strong|ere long|leave|“|"/i, min: 2 },
        { label: "Explains how the element creates the meaning", re: /because|which|this (shows|suggests|creates|makes|emphasi)|so that|by (moving|comparing|shifting|using)|suggest|emphasi|reveal/i }
      ],
      why: "A defensible thesis about poetry links a specific element to a specific meaning, so someone could disagree with it. “Shakespeare uses metaphors” is not enough. Say what the element does: for example, the shrinking time scale of the metaphors builds urgency, or the volta turns grief about aging into an argument for loving more. Support the reasoning with exact words from the poem and explain how they create that meaning.",
      rubric: "AP-style thesis + reasoning (here 0–2 points): 2 points for a defensible thesis that connects a specific literary element to the poem’s meaning, plus reasoning supported by quoted words. 1 point for a thesis that names an element or theme but only summarizes or gives weak evidence. 0 points for a summary with no claim.",
      model: "In Sonnet 73, Shakespeare orders his three metaphors from a season to a day to a dying fire, so the shrinking spans of time turn a quiet meditation on aging into an urgent argument for love. Autumn’s “yellow leaves” suggest decline that still has months left, but “twilight” is swallowed by “black night” within hours. The final image of a fire “Consum’d with that which it was nourish’d by” leaves only moments, which is why the volta can tell the listener to love “that well which thou must leave ere long.”" }
  ]
};

/* ---------------------------------------------------------------------
   5. AP US GOVERNMENT · FOUNDATIONAL DOCUMENTS
   --------------------------------------------------------------------- */
RC["ap-gov-federalist"] = {
  subject: "AP US Government", mins: 15,
  title: "AP Practice Quiz: Federalist No. 10, No. 51, and Brutus No. 1",
  blurb: "Foundational documents: factions and the large republic, federalism and separation of powers, the Anti-Federalist critique, and applying ideas to a scenario, plus an argument write.",
  eq: "Can a large republic protect liberty, or will it swallow the states and ignore the people?",
  target: "I can explain the arguments in Federalist No. 10, Federalist No. 51, and Brutus No. 1, and apply them to a modern scenario.",
  sources: [
    { tab: "Federalist No. 10", title: "Source 1: James Madison, Federalist No. 10 (1787)", blocks: [
      { box: HAP_AP_NOTE + "<br>Directions: Read the three documents, then answer the questions. The last question is an argument-style write." },
      { p: "<b>Context:</b> After the Constitution was written in 1787, supporters (Federalists) and opponents (Anti-Federalists) argued in newspapers about whether states should ratify it. James Madison wrote Federalist No. 10 under the pen name “Publius.” It was published in November 1787." },
      { quote: "By a faction, I understand a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community.", by: "Madison, Federalist No. 10" },
      { quote: "Liberty is to faction what air is to fire, an aliment without which it instantly expires.", by: "Madison, Federalist No. 10" },
      { quote: "The inference to which we are brought is, that the CAUSES of faction cannot be removed, and that relief is only to be sought in the means of controlling its EFFECTS.", by: "Madison, Federalist No. 10" },
      { quote: "Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens; or if such a common motive exists, it will be more difficult for all who feel it to discover their own strength, and to act in unison with each other.", by: "Madison, Federalist No. 10" },
      { vocab: [["Faction", "a group united by a shared interest or passion that works against others’ rights or the common good (today: parties, interest groups)"], ["Aliment", "food; something that keeps a thing alive"], ["Extend the sphere", "make the republic larger, with more people and territory"]] },
      { src: "James Madison, The Federalist No. 10, November 22, 1787. Public domain." }
    ]},
    { tab: "Federalist No. 51", title: "Source 2: James Madison, Federalist No. 51 (1788)", blocks: [
      { quote: "Ambition must be made to counteract ambition.", by: "Madison, Federalist No. 51" },
      { quote: "If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.", by: "Madison, Federalist No. 51" },
      { quote: "In the compound republic of America, the power surrendered by the people is first divided between two distinct governments, and then the portion allotted to each subdivided among distinct and separate departments. Hence a double security arises to the rights of the people. The different governments will control each other, at the same time that each will be controlled by itself.", by: "Madison, Federalist No. 51" },
      { vocab: [["Compound republic", "a republic with two levels of government, national and state (federalism)"], ["Departments", "the branches of government: legislative, executive, judicial"]] },
      { src: "James Madison, The Federalist No. 51, February 1788. Public domain." }
    ]},
    { tab: "Brutus No. 1", title: "Source 3: “Brutus,” Essay No. 1 (1787)", blocks: [
      { p: "<b>Context:</b> “Brutus” was the pen name of an Anti-Federalist writer, probably Robert Yates of New York. Essay No. 1 appeared in a New York newspaper in October 1787, before Federalist No. 10. Brutus warned about the “necessary and proper” clause, which lets Congress make all laws needed to carry out its powers." },
      { quote: "In a republic, the manners, sentiments, and interests of the people should be similar. If this be not the case, there will be a constant clashing of opinions; and the representatives of one part will be continually striving against those of the other.", by: "Brutus No. 1" },
      { quote: "History furnishes no example of a free republic, any thing like the extent of the United States.", by: "Brutus No. 1" },
      { quote: "…and they may so exercise this power as entirely to annihilate all the state governments, and reduce this country to one single government.", by: "Brutus No. 1, on the “necessary and proper” clause" },
      { vocab: [["Manners, sentiments", "customs and feelings or opinions"], ["Annihilate", "destroy completely"]] },
      { src: "“Brutus,” Essay No. 1, <i>New-York Journal</i>, October 18, 1787. Public domain." }
    ]},
    { tab: "🏛️ Simulation", title: "Ambition Counteracting Ambition", blocks: [
      { box: "<b>Try this:</b> 1) Tap each branch and read how it checks the other two. 2) Play the scenario quiz below the diagram. 3) For each check, ask: whose “ambition” is being counteracted? Question 8 uses this simulation." },
      { sim: "branches", title: "Checks and Balances (Federalist No. 51)", tip: "Tap a branch, then try the scenarios.", scenarios: [
        { t: "The President vetoes a bill passed by Congress.", a: "E>L", why: "The executive checks the legislature with the veto." },
        { t: "The Senate votes to reject the President’s nominee for the Supreme Court.", a: "L>E", why: "The Senate’s power to confirm appointments checks the President." },
        { t: "The Supreme Court rules that a law passed by Congress is unconstitutional.", a: "J>L", why: "Judicial review lets courts strike down laws." },
        { t: "The House impeaches a federal judge, and the Senate removes the judge from office.", a: "L>J", why: "Congress can impeach and remove federal judges." },
        { t: "A federal court rules that a President’s executive order is unconstitutional.", a: "J>E", why: "Courts can strike down executive actions." }
      ]}
    ]}
  ],
  qs: [
    { t: "mc", ref: 1, q: "According to Madison’s definition in Federalist No. 10, which of the following could be a <b>faction</b>?",
      opts: ["Only a minority group that wants to overthrow the government", "Only a majority that wins an election fairly", "Any group, majority or minority, united by a passion or interest that works against others’ rights or the common good", "Only the members of a state legislature"], a: 2,
      why: "Madison says a faction can be “a majority or a minority of the whole,” as long as it is united by a “common impulse of passion, or of interest, adverse to the rights of other citizens.” He especially worried about majority factions, since in a democracy they can win votes." },
    { t: "mc", ref: 1, q: "What does Madison mean by “Liberty is to faction what air is to fire”?",
      opts: ["Liberty causes faction to grow, but removing liberty to stop faction would be worse than the problem.", "Factions are dangerous, so the government should limit freedom of speech.", "Liberty and faction cannot exist at the same time.", "Fires were a common problem in cities in the 1780s."], a: 0,
      why: "Air feeds fire, and liberty feeds faction. You could put out a fire by removing air, but you would kill everything else too. In the same way, destroying liberty to end faction is a cure worse than the disease, so Madison chooses to control the <i>effects</i> of faction instead." },
    { t: "ebsr", ref: 1,
      A: { q: "What is Madison’s main solution to the problem of faction in Federalist No. 10?",
        opts: ["Give every citizen the same opinions through public education", "Create a large republic so that many competing interests make it hard for one majority faction to dominate", "Let each state govern itself with no national government", "Ban political parties and interest groups"], a: 1 },
      B: { q: "Which quotation <b>best</b> supports your answer to Part A?",
        opts: ["“By a faction, I understand a number of citizens”", "“Liberty is to faction what air is to fire”", "“Extend the sphere, and you take in a greater variety of parties and interests”", "“Ambition must be made to counteract ambition.”"], a: 2 },
      why: "Madison argues that a larger republic includes “a greater variety of parties and interests,” so it is “less probable that a majority of the whole will have a common motive to invade the rights of other citizens.” The “Ambition” quotation is from Federalist No. 51 and is about checks and balances." },
    { t: "mc", ref: 2, q: "In Federalist No. 51, the “double security” for the people’s rights comes from",
      opts: ["two houses of Congress, the House and the Senate", "the Bill of Rights and the Declaration of Independence", "a strong army and a strong navy", "federalism (power split between national and state governments) and separation of powers within each government"], a: 3,
      why: "Madison says power is “first divided between two distinct governments” (national and state: federalism) and “then… subdivided among distinct and separate departments” (branches: separation of powers). Two layers of division give a “double security.”" },
    { t: "grid", q: "Classify each statement as closer to the <b>Federalist</b> view (Madison) or the <b>Anti-Federalist</b> view (Brutus).", cols: ["Federalist", "Anti-Federalist"],
      rows: [["A large republic, with many different interests, protects against majority tyranny.", 0], ["A free republic works only when the people share similar interests and live in a small area.", 1], ["The necessary and proper clause could let Congress swallow up the state governments.", 1], ["Dividing power between levels and branches of government protects rights.", 0], ["Representatives in a distant national capital will not know or reflect the people they serve.", 1]],
      why: "Madison argued that a large republic and divided powers protect liberty. Brutus argued that free republics must be small and similar, warned that the national government would “annihilate all the state governments,” and feared representatives too far from the people." },
    { t: "mc", ref: 3, q: "How would Brutus most likely respond to Madison’s argument to “extend the sphere”?",
      opts: ["He would agree that a larger republic best protects the rights of minorities.", "He would argue that a republic as large as the United States would suffer constant clashes among different interests and could not stay free.", "He would argue that the states should be abolished.", "He would argue that the President needs more power to control Congress."], a: 1,
      why: "Brutus says the people of a republic “should be similar,” or there will be “a constant clashing of opinions,” and that history shows no free republic as large as the United States. Madison sees diversity as a strength; Brutus sees it as a danger. Brutus wanted to protect the states, not abolish them." },
    { t: "mc", ref: 1, q: "<b>Scenario:</b> A group of sugar producers concentrated in a few states persuades their state legislatures to pass laws that help them. When they ask Congress for a national tax on all sweeteners except sugar, the bill fails because members from many other states, representing corn growers, soda makers, and consumers, oppose it. Which idea best explains the outcome?",
      opts: ["Brutus’s argument that the national government will annihilate the states", "Madison’s argument in Federalist No. 10 that a large republic includes so many interests that one faction has trouble forming a national majority", "Madison’s argument in Federalist No. 51 that angels should govern men", "The idea that factions can be removed by giving citizens the same opinions"], a: 1,
      why: "The sugar faction wins locally, where it is powerful, but loses nationally, where many competing interests block it. That is exactly Madison’s “extend the sphere” argument. Madison said the opposite of the angels claim (“If men were angels, no government would be necessary”), and he rejected giving everyone the same opinions." },
    { t: "mc", ref: 4, q: "Use the simulation. Which scenario shows the <b>legislative</b> branch checking the <b>judicial</b> branch, an example of “ambition counteracting ambition”?",
      opts: ["The President vetoes a bill passed by Congress.", "The Supreme Court rules that a law passed by Congress is unconstitutional.", "A federal court rules that an executive order is unconstitutional.", "The House impeaches a federal judge, and the Senate removes the judge from office."], a: 3,
      why: "Tap Legislative in the simulation: Congress can impeach and remove judges and the Senate confirms them. Each branch has tools to resist the others, which is Madison’s point in Federalist No. 51. The veto is executive checking legislative, and the court rulings are judicial checks." },
    { t: "write", min: 70,
      q: "<b>Argument.</b> Take a position on this question: <i>Does a large, diverse republic protect liberty better than a small one?</i><br>In your response: (1) state a defensible <b>claim</b>; (2) support it with evidence from <b>one</b> foundational document (Federalist No. 10, Federalist No. 51, or Brutus No. 1); (3) explain your <b>reasoning</b>; and (4) respond to an <b>opposing or alternative</b> view.",
      checks: [
        { label: "States a clear claim (yes or no) about large republics and liberty", re: /large (republic|nation|country)|small (republic|nation|country)|extend the sphere|better protect|protects? liberty|does not protect|threaten|more diverse|diversity/i },
        { label: "Uses evidence from a foundational document", re: /federalist|madison|brutus|faction|extend the sphere|ambition|double security|clashing|annihilate|manners|sentiments|angels/i },
        { label: "Explains reasoning", re: /because|this means|so that|therefore|as a result|which (makes|means|prevents)|since/i },
        { label: "Responds to an opposing view", re: /however|although|though|opponents?|critics?|others (argue|say|claim)|some (argue|say|may|would)|on the other hand|counter|rebut|while|but brutus|but madison|anti.?federalist/i }
      ],
      why: "Either side can earn full credit. Pro: use Federalist No. 10 (“extend the sphere”) or No. 51 (“double security”) to explain how size and divided power block factions. Con: use Brutus No. 1 to argue that people in a huge, diverse republic clash constantly and that a distant national government could “annihilate” the states. Whichever side you pick, explain how the evidence supports the claim, and answer the strongest point from the other side.",
      rubric: "AP-style argument (here 0–2 points): 2 points for a defensible claim, accurate evidence from a foundational document, reasoning that explains how the evidence supports the claim, and a response to an opposing view. 1 point when the claim and evidence are present but the reasoning or rebuttal is missing or weak. 0 points for no defensible claim.",
      model: "A large, diverse republic protects liberty better than a small one because it makes it harder for any single faction to take control. In Federalist No. 10, Madison argues that if you “extend the sphere,” you take in “a greater variety of parties and interests,” so it is less likely that a majority will share a motive to invade others’ rights. This means a group that dominates one state, such as a powerful local industry, must compete with many other interests in Congress before it can impose its will on everyone. Brutus argues that a republic needs people with similar “manners, sentiments, and interests,” or there will be constant clashing. However, that clashing is exactly what protects minorities, because competing groups block each other and force compromise." }
  ]
};
