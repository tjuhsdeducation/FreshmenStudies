/* =====================================================================
   ✏️ COLLEGE & CAREER DATA shared by the three lessons
   Update numbers here once a year (sources are listed next to each list).
   ===================================================================== */

/* Jobs: [name, median yearly pay, typical education to start, field]
   Source: U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, May 2025 median pay. */
const CC_JOBS = [
  ["Registered nurse", 97550, "Bachelor's degree", "Health"], ["Nurse practitioner", 132300, "Master's degree", "Health"], ["Physician assistant", 135880, "Master's degree", "Health"],
  ["Pharmacist", 140910, "Doctoral or professional degree", "Health"], ["Physical therapist", 102760, "Doctoral or professional degree", "Health"], ["Occupational therapist", 100330, "Master's degree", "Health"],
  ["Dental hygienist", 98100, "Associate's degree", "Health"], ["Radiologic or MRI technologist", 81390, "Associate's degree", "Health"], ["Respiratory therapist", 82280, "Associate's degree", "Health"],
  ["Licensed vocational nurse (LVN)", 64400, "Postsecondary nondegree award", "Health"], ["EMT or paramedic", 48150, "Postsecondary nondegree award", "Health"], ["Medical assistant", 45690, "Postsecondary nondegree award", "Health"],
  ["Home health or personal care aide", 35800, "High school diploma or equivalent", "Health"], ["Medical and health services manager", 123860, "Bachelor's degree", "Health / Business"],
  ["Software developer", 135980, "Bachelor's degree", "Technology"], ["Data scientist", 120230, "Bachelor's degree", "Technology"], ["Computer and information systems manager", 175140, "Bachelor's degree", "Technology"],
  ["Civil engineer", 100840, "Bachelor's degree", "Engineering"], ["Mechanical engineer", 104110, "Bachelor's degree", "Engineering"], ["Electrical engineer", 125040, "Bachelor's degree", "Engineering"],
  ["Architect", 99280, "Bachelor's degree", "Engineering"], ["Drafter", 68090, "Associate's degree", "Engineering"], ["Civil engineering technician", 64950, "Associate's degree", "Engineering"],
  ["Accountant or auditor", 83680, "Bachelor's degree", "Business"], ["Financial manager", 166570, "Bachelor's degree", "Business"], ["Management analyst", 101860, "Bachelor's degree", "Business"], ["General or operations manager", 105770, "Bachelor's degree", "Business"],
  ["High school teacher", 72040, "Bachelor's degree", "Education"], ["Elementary school teacher", 63820, "Bachelor's degree", "Education"], ["Special education teacher", 67170, "Bachelor's degree", "Education"], ["Librarian", 68270, "Master's degree", "Education"],
  ["Mental health counselor", 59350, "Bachelor's degree", "Social services"], ["Police officer or detective", 77310, "High school diploma or equivalent", "Public safety"], ["Firefighter", 59280, "Postsecondary nondegree award", "Public safety"], ["Correctional officer", 58850, "High school diploma or equivalent", "Public safety"],
  ["Electrician", 63190, "High school diploma or equivalent", "Skilled trades"], ["HVAC technician", 61010, "Postsecondary nondegree award", "Skilled trades"], ["Automotive technician", 50620, "Postsecondary nondegree award", "Skilled trades"],
  ["Diesel technician", 61770, "High school diploma or equivalent", "Skilled trades"], ["Aircraft mechanic", 80180, "Postsecondary nondegree award", "Skilled trades"], ["Wind turbine technician", 64120, "Postsecondary nondegree award", "Skilled trades"],
  ["Industrial machinery mechanic", 64520, "High school diploma or equivalent", "Skilled trades"], ["Truck driver (tractor-trailer)", 58640, "Postsecondary nondegree award", "Transportation"], ["Construction laborer", 47120, "No formal educational credential", "Skilled trades"],
  ["Agricultural or food scientist", 81970, "Bachelor's degree", "Agriculture"]
];
const CC_JOBS_SRC = "Source: U.S. Bureau of Labor Statistics, Occupational Outlook Handbook (median pay, May 2025). Half of workers earn more and half earn less; pay in California is often higher, and starting pay is usually lower.";

/* Colleges for the comparison chart (tuition is the 2025–26 systemwide amount; campus fees are extra). */
const CCC_COST = "About $46 per unit (≈ $1,380 a year full-time). The California College Promise Grant can waive this.";
const CSU_COST = "$6,450 systemwide tuition (2025–26) + campus fees";
const UC_COST = "$14,934 tuition and fees for new students (2025–26) + campus fees";
const CC_COLLEGES = [
  { name: "College of the Sequoias", sys: "California Community College", city: "Visalia, with the Tulare College Center and Hanford", cost: CCC_COST, deg: "Associate degrees, transfer degrees (ADT), certificates", known: "Your local college: transfer pathways, nursing, agriculture, and career programs", url: "https://www.cos.edu" },
  { name: "Porterville College", sys: "California Community College", city: "Porterville", cost: CCC_COST, deg: "Associate degrees, transfer degrees (ADT), certificates", known: "Small classes close to home and career certificates", url: "https://www.portervillecollege.edu" },
  { name: "Fresno City College", sys: "California Community College", city: "Fresno", cost: CCC_COST, deg: "Associate degrees, transfer degrees (ADT), certificates", known: "One of the oldest community colleges in California, many career programs", url: "https://www.fresnocitycollege.edu" },
  { name: "Fresno State", sys: "California State University (CSU)", city: "Fresno", cost: CSU_COST, deg: "Bachelor's, master's, some doctorates", known: "Agriculture, nursing, engineering, and teaching; about an hour from Tulare", url: "https://www.fresnostate.edu" },
  { name: "CSU Bakersfield", sys: "California State University (CSU)", city: "Bakersfield", cost: CSU_COST, deg: "Bachelor's and master's", known: "Business, nursing, education, and engineering close to home", url: "https://www.csub.edu" },
  { name: "Cal Poly San Luis Obispo", sys: "California State University (CSU)", city: "San Luis Obispo (and the Maritime Academy campus in Vallejo)", cost: CSU_COST, deg: "Bachelor's and master's", known: "“Learn by doing”: engineering, agriculture, architecture", url: "https://www.calpoly.edu" },
  { name: "San Diego State", sys: "California State University (CSU)", city: "San Diego", cost: CSU_COST, deg: "Bachelor's, master's, doctorates", known: "Large campus with business, health, and engineering", url: "https://www.sdsu.edu" },
  { name: "UC Merced", sys: "University of California (UC)", city: "Merced", cost: UC_COST, deg: "Bachelor's, master's, doctorates", known: "The newest UC (opened 2005) and the closest UC to Tulare County; research in engineering, biology, and the environment", url: "https://www.ucmerced.edu" },
  { name: "UC Davis", sys: "University of California (UC)", city: "Davis", cost: UC_COST, deg: "Bachelor's through medical and veterinary degrees", known: "Agriculture, animal science, veterinary medicine, and biology", url: "https://www.ucdavis.edu" },
  { name: "UCLA", sys: "University of California (UC)", city: "Los Angeles", cost: UC_COST, deg: "Bachelor's through medical and law degrees", known: "Very selective research university in a big city", url: "https://www.ucla.edu" },
  { name: "UC Berkeley", sys: "University of California (UC)", city: "Berkeley", cost: UC_COST, deg: "Bachelor's through law and doctoral degrees", known: "The oldest UC campus; very selective", url: "https://www.berkeley.edu" },
  { name: "Fresno Pacific University", sys: "Private (nonprofit) university", city: "Fresno", cost: "Higher sticker price; most students get grants. Use the school’s net price calculator.", deg: "Bachelor's and master's", known: "Small private university with small classes", url: "https://www.fresno.edu" }
];

/* Holland interest codes (RIASEC) for the interest survey */
const CC_RIASEC = {
  R: ["R", "Realistic (Doer)", "Doers like hands-on work with tools, machines, plants, or animals."],
  I: ["I", "Investigative (Thinker)", "Thinkers like solving problems, science, and research."],
  A: ["A", "Artistic (Creator)", "Creators like art, music, writing, design, and new ideas."],
  S: ["S", "Social (Helper)", "Helpers like teaching, caring for, and helping people."],
  E: ["E", "Enterprising (Persuader)", "Persuaders like leading, selling, and starting things."],
  C: ["C", "Conventional (Organizer)", "Organizers like clear systems, numbers, and details."]
};
const CC_SURVEY = [["I like fixing or building things", "R"], ["I would rather work outside than at a desk", "R"], ["I like working with animals or plants", "R"],
  ["I like figuring out how things work", "I"], ["Science and math puzzles are fun", "I"], ["I like doing research to find answers", "I"],
  ["I like drawing, music, or writing stories", "A"], ["I like designing or decorating things", "A"], ["I have lots of creative ideas", "A"],
  ["I like helping friends with problems", "S"], ["I would enjoy teaching or coaching", "S"], ["I care about health and helping people feel better", "S"],
  ["I like being the leader of a group", "E"], ["I could see myself starting a business", "E"], ["I like convincing people", "E"],
  ["I like keeping things neat and organized", "C"], ["I like working with numbers and spreadsheets", "C"], ["I like following clear steps", "C"]];

/* Majors for the schedule builder. type: major (major prep), ge (general education), el (elective). pre = prerequisite. */
const CC_GE = [
  { code: "ENGL 1A", name: "English Composition", u: 3, type: "ge" }, { code: "MATH 21", name: "Statistics", u: 4, type: "ge", math: true },
  { code: "COMM 1", name: "Public Speaking", u: 3, type: "ge" }, { code: "PSY 1", name: "Intro to Psychology", u: 3, type: "ge" },
  { code: "HIST 17", name: "U.S. History", u: 3, type: "ge" }, { code: "ART 10", name: "Art Appreciation", u: 3, type: "ge" },
  { code: "SPAN 1", name: "Elementary Spanish", u: 4, type: "ge" }, { code: "COUN 140", name: "College & Career Success", u: 3, type: "el" }, { code: "KINE 1", name: "Fitness for Life", u: 1, type: "el" }];
const CC_MAJORS = [
  { id: "nursing", emoji: "🩺", name: "Nursing", tag: "Health · Helper + Thinker", riasec: "Social (Helper) and Investigative (Thinker)",
    desc: "Nurses care for patients, give medicine, and teach families how to stay healthy. Many students start at a community college nursing program (associate degree) and later finish a bachelor’s (BSN).",
    careers: ["Registered nurse (BLS median $97,550)", "Licensed vocational nurse ($64,400)", "Nurse practitioner, with a master’s ($132,300)"], hs: ["Biology and Chemistry", "Anatomy or Health Science", "Algebra 2 and Statistics", "Medical Spanish or Spanish"], path: "Community college ADN or a CSU BSN, then pass the NCLEX licensing exam.",
    courses: [{ code: "BIOL 40", name: "Human Anatomy", u: 4, type: "major" }, { code: "BIOL 41", name: "Human Physiology", u: 4, type: "major", pre: "BIOL 40" }, { code: "CHEM 2A", name: "Intro Chemistry", u: 4, type: "major" }, { code: "BIOL 31", name: "Microbiology", u: 4, type: "major", pre: "CHEM 2A" }] },
  { id: "cs", emoji: "💻", name: "Computer Science", tag: "Technology · Thinker", riasec: "Investigative (Thinker) and Conventional (Organizer)",
    desc: "Computer scientists write software, build apps and games, protect data, and use AI. Strong math helps.", careers: ["Software developer ($135,980)", "Data scientist ($120,230)", "Computer and information systems manager ($175,140)"], hs: ["Algebra 2, Precalculus, Calculus", "AP Computer Science", "Physics", "Robotics or coding club"], path: "Transfer from community college or start at a CSU/UC; internships matter a lot.",
    courses: [{ code: "CS 1", name: "Intro to Programming", u: 4, type: "major" }, { code: "CS 2", name: "Data Structures", u: 4, type: "major", pre: "CS 1" }, { code: "MATH 5A", name: "Calculus I", u: 5, type: "major", math: true }, { code: "MATH 5B", name: "Calculus II", u: 5, type: "major", math: true, pre: "MATH 5A" }] },
  { id: "ag", emoji: "🌱", name: "Agricultural Science", tag: "Agriculture · Doer + Thinker", riasec: "Realistic (Doer) and Investigative (Thinker)",
    desc: "The Central Valley feeds the world. Ag majors study plants, animals, soil, water, and the business of farming.", careers: ["Agricultural or food scientist ($81,970)", "Farm or ranch manager", "Ag teacher (high school teacher, $72,040)"], hs: ["Agriculture classes and FFA", "Biology and Chemistry", "Statistics", "Ag mechanics"], path: "COS ag programs, then transfer to Fresno State, Cal Poly, or UC Davis.",
    courses: [{ code: "AG 1", name: "Intro to Animal Science", u: 3, type: "major" }, { code: "PLSC 1", name: "Intro to Plant Science", u: 3, type: "major" }, { code: "SOIL 1", name: "Soil Science", u: 3, type: "major", pre: "PLSC 1" }, { code: "AGB 1", name: "Agricultural Economics", u: 3, type: "major" }] },
  { id: "business", emoji: "📊", name: "Business Administration", tag: "Business · Persuader + Organizer", riasec: "Enterprising (Persuader) and Conventional (Organizer)",
    desc: "Business majors learn accounting, marketing, management, and how to start a company.", careers: ["Accountant or auditor ($83,680)", "Financial manager ($166,570)", "General or operations manager ($105,770)"], hs: ["Business or economics classes", "Statistics", "Public speaking or debate", "Leadership or ASB"], path: "ADT in Business Administration, then transfer to a CSU.",
    courses: [{ code: "ACCT 1A", name: "Financial Accounting", u: 4, type: "major" }, { code: "ACCT 1B", name: "Managerial Accounting", u: 4, type: "major", pre: "ACCT 1A" }, { code: "ECON 1", name: "Macroeconomics", u: 3, type: "major" }, { code: "BUS 10", name: "Intro to Business", u: 3, type: "major" }] },
  { id: "psych", emoji: "🧠", name: "Psychology", tag: "Social science · Helper + Thinker", riasec: "Social (Helper) and Investigative (Thinker)",
    desc: "Psychology studies how people think, feel, and behave. It leads to counseling, social work, HR, and research.", careers: ["Mental health counselor ($59,350)", "School counselor (master’s)", "Human resources specialist"], hs: ["AP Psychology", "Statistics", "English and writing", "Peer mentoring"], path: "ADT in Psychology, then a bachelor’s; many careers need a master’s.",
    courses: [{ code: "PSY 2", name: "Research Methods", u: 3, type: "major", pre: "PSY 1" }, { code: "PSY 5", name: "Lifespan Development", u: 3, type: "major" }, { code: "SOC 1", name: "Intro to Sociology", u: 3, type: "major" }, { code: "BIOL 10", name: "General Biology", u: 4, type: "major" }] },
  { id: "teach", emoji: "🍎", name: "Liberal Studies (Teaching)", tag: "Education · Helper + Creator", riasec: "Social (Helper) and Artistic (Creator)",
    desc: "Liberal Studies prepares future elementary teachers with a little of every subject, then a teaching credential.", careers: ["Elementary school teacher ($63,820)", "Special education teacher ($67,170)", "Librarian, with a master’s ($68,270)"], hs: ["Child development", "Tutoring or coaching younger students", "Spanish", "Every core subject!"], path: "Bachelor’s in Liberal Studies + a California teaching credential.",
    courses: [{ code: "LS 1", name: "Intro to Teaching", u: 3, type: "major" }, { code: "MATH 10A", name: "Math for Future Teachers", u: 3, type: "major", math: true }, { code: "CHLD 1", name: "Child Development", u: 3, type: "major" }, { code: "GEOG 1", name: "World Geography", u: 3, type: "major" }, { code: "ESCI 1", name: "Earth Science", u: 4, type: "major" }] },
  { id: "mecheng", emoji: "⚙️", name: "Mechanical Engineering", tag: "Engineering · Doer + Thinker", riasec: "Realistic (Doer) and Investigative (Thinker)",
    desc: "Mechanical engineers design machines, cars, engines, robots, and farm equipment. Lots of math and physics.", careers: ["Mechanical engineer ($104,110)", "Drafter, with an associate degree ($68,090)", "Civil engineer ($100,840)"], hs: ["Calculus and Physics", "Engineering or robotics", "Chemistry", "CAD or drafting"], path: "Start calculus early; transfer to Fresno State, Cal Poly, or a UC.",
    courses: [{ code: "ENGR 1", name: "Intro to Engineering", u: 2, type: "major" }, { code: "MATH 5A", name: "Calculus I", u: 5, type: "major", math: true }, { code: "MATH 5B", name: "Calculus II", u: 5, type: "major", math: true, pre: "MATH 5A" }, { code: "PHYS 4A", name: "Physics: Mechanics", u: 4, type: "major", pre: "MATH 5A" }, { code: "CHEM 1A", name: "General Chemistry", u: 5, type: "major" }] },
  { id: "cj", emoji: "⚖️", name: "Criminal Justice", tag: "Public safety · Helper + Persuader", riasec: "Social (Helper) and Enterprising (Persuader)",
    desc: "Criminal justice covers policing, courts, corrections, and law. It can lead to law school, too.", careers: ["Police officer or detective ($77,310)", "Correctional officer ($58,850)", "Probation officer or lawyer (law school)"], hs: ["Government and civics", "Psychology", "Spanish", "Mock trial or explorers program"], path: "ADT in Administration of Justice, then transfer; or a police academy.",
    courses: [{ code: "AJ 10", name: "Intro to Criminal Justice", u: 3, type: "major" }, { code: "AJ 12", name: "Criminal Law", u: 3, type: "major", pre: "AJ 10" }, { code: "AJ 16", name: "Community Relations", u: 3, type: "major" }, { code: "SOC 1", name: "Intro to Sociology", u: 3, type: "major" }] }
];

/* An original campus map for the virtual tour */
const CC_CAMPUS = `<svg viewBox="0 0 800 500" role="img" aria-label="Map of a college campus with ten buildings around a central quad">
  <rect width="800" height="500" fill="#cfe8c5"/>
  <path d="M0 165 H800 M0 325 H800 M230 0 V500 M560 0 V500" stroke="#efe3c8" stroke-width="22"/>
  <circle cx="395" cy="325" r="30" fill="#9fd3f0" stroke="#efe3c8" stroke-width="8"/>
  ${[[30, 30, 170, 105, "#f6c6a8", "Welcome Center"], [300, 22, 190, 115, "#c7c2f0", "Library"], [600, 30, 170, 100, "#b9dcf4", "Science Hall"], [30, 190, 170, 105, "#f7d98f", "Tutoring Center"], [290, 190, 210, 100, "#f6b4cf", "Student Union"], [600, 190, 170, 105, "#c6e9d6", "Counseling"], [30, 355, 170, 110, "#d9d9d9", "Financial Aid"], [250, 370, 140, 100, "#f2c38f", "Career Center"], [420, 370, 140, 100, "#bfe3e9", "Health Center"], [600, 350, 170, 125, "#e1c9f2", "Residence Hall"]]
    .map(b => `<g><rect x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" rx="10" fill="${b[4]}" stroke="#5d5470" stroke-width="2"/><text x="${b[0] + b[2] / 2}" y="${b[1] + b[3] - 10}" text-anchor="middle" font-family="Nunito, sans-serif" font-weight="800" font-size="15" fill="#2a2433">${b[5]}</text></g>`).join("")}
  ${[[250, 470], [580, 150], [215, 330], [575, 480], [250, 20], [770, 330]].map(t => `<circle cx="${t[0]}" cy="${t[1]}" r="12" fill="#6fae5f"/>`).join("")}
</svg>`;
const CC_STOPS = {
  welcome: { name: "Welcome Center & Admissions", emoji: "👋", x: 14.4, y: 14, text: "This is where campus tours start and where you can ask about applying, deadlines, and orientation. At a community college, this is often where you apply, take a placement survey, and sign up for orientation.", tip: "Ask questions early. Write down names and email addresses of people who help you." },
  library: { name: "Library", emoji: "📚", x: 49.4, y: 13, text: "College libraries have quiet study floors, group study rooms you can reserve, computers, printing, and librarians who help with research papers. Many lend laptops and textbooks.", tip: "Book a study room for your group and set a weekly study time." },
  science: { name: "Science Hall", emoji: "🔬", x: 85.6, y: 14, text: "Classrooms and labs for biology, chemistry, and physics. College lecture halls can hold 100+ students, so it’s on you to take notes, keep up with reading, and speak up.", tip: "Sit near the front and take focused notes in every lecture." },
  tutoring: { name: "Tutoring & Writing Center", emoji: "✏️", x: 14.4, y: 46, text: "Free tutoring in math, science, and writing. Students who use tutoring early tend to do better, and it’s not just for students who are struggling.", tip: "Use tutoring in week 1, not week 10. Bring a specific question (your point of confusion)." },
  union: { name: "Student Union", emoji: "🍕", x: 49.4, y: 46, text: "The center of student life: food, clubs, student government, game rooms, and events. Many colleges have a food pantry here for students who need help with meals.", tip: "Join at least one club. Friends and mentors help students stay in college." },
  counsel: { name: "Counseling & Academic Advising", emoji: "🧭", x: 85.6, y: 46, text: "Counselors help you build an education plan, choose classes for your major, and plan to transfer. Programs like EOPS can offer extra counseling, book help, and support.", tip: "Make an education plan in your first semester and check it every term." },
  finaid: { name: "Financial Aid Office", emoji: "💵", x: 14.4, y: 79, text: "Get help with the FAFSA or California Dream Act, Cal Grants, Pell Grants, the California College Promise Grant, work-study jobs, and scholarships.", tip: "Reapply for aid every year, and meet every deadline (Cal Grant: March 2)." },
  career: { name: "Career Center", emoji: "💼", x: 40, y: 82, text: "Career counselors help with résumés, mock interviews, internships, and part-time jobs on and off campus. Many host job fairs every semester.", tip: "Visit in your first year to find an internship or campus job." },
  health: { name: "Health & Wellness Center", emoji: "❤️", x: 61.3, y: 82, text: "Basic health care and free or low-cost mental health counseling for students. Taking care of your health is part of succeeding in college.", tip: "Ask for help when you feel stressed. Using counseling is a strength." },
  dorm: { name: "Residence Hall", emoji: "🛏️", x: 85.6, y: 79, text: "Dorms are where many first-year university students live, usually with a roommate. Resident advisors (RAs) are students who help you settle in. Many community college students live at home.", tip: "Make a roommate agreement about quiet hours, guests, and sharing." }
};
