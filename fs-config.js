/* =====================================================================
   ✏️ FRESHMEN STUDIES SETTINGS: the only file you need to edit.

   1) TEACHER NAMES: replace the placeholder names under each school.
      Keep the quotes and commas. Example:
         "Tulare Union": ["Langlie", "Smith", "Garcia"],
      (Use the same names in Code.gs so each teacher gets their own tab.)

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
  schools: {
    "Tulare Union":   ["Teacher 1", "Teacher 2", "Teacher 3"],
    "Tulare Western": ["Teacher 1", "Teacher 2", "Teacher 3"],
    "Mission Oak":    ["Teacher 1", "Teacher 2", "Teacher 3"]
  },
  // Optional: paste YouTube or other links for the LGBTQ+ lesson videos you already use.
  videos: {
    orientation: "",   // Video 1: Sexual Orientation & Identity
    genderRoles: ""    // Video 2: Gender Roles & Stereotypes
  }
};
