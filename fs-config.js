/* =====================================================================
   ✏️ FRESHMEN STUDIES SETTINGS: the only file you need to edit.

   1) TEACHER NAMES: listed under each school. Keep the quotes and commas.
      ✏️ ACHS still has a placeholder ("ACHS Teacher"): replace it with real names.
      (If you change a school's name, change it in Code.gs too.)

   2) GOOGLE SHEET: after you deploy Code.gs as a Web app, paste the
      Web app URL between the quotes for scriptUrl. While it is empty the
      site runs in PREVIEW MODE (work is saved on that computer only).

   3) TEACHER PASSCODE: teachers type this on the sign-in screen
      ("I'm a teacher") to open the site without a student ID.
      Change it to something only your team knows.
   ===================================================================== */
window.FS_CONFIG = {
  scriptUrl: "",
  teacherPasscode: "freshmen2026",
  periods: ["1", "2", "3", "4", "5", "6", "7", "8"],
  schools: {
    "Tulare Union":   ["Amy Gavello", "Darren Bennett", "DJ Bennett", "Fernando Valadao", "Kristen Pallas", "Kelli Medeiros", "Mark Reindl"],
    "Tulare Western": ["Joseph Rivera", "Kristen Rickard", "Michael Sozinho", "Keith Rickard", "Ken Searcy", "Matt Archibald"],
    "Mission Oak":    ["Livi Aguilar", "Stevan Chamalbide", "Matt Jones", "Celina Rodela", "Richard Salazar"],
    "ACHS":           ["ACHS Teacher"],
    "Tech Prep / Countryside": ["Silvia Sausedo"]
  },
  // Optional: paste YouTube or other links for the LGBTQ+ lesson videos you already use.
  videos: {
    orientation: "",   // Video 1: Sexual Orientation & Identity
    genderRoles: ""    // Video 2: Gender Roles & Stereotypes
  }
};
