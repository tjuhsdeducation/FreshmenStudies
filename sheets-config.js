/* =====================================================================
   ✏️ SCORE SETTINGS: shared by EVERY activity on this site.
   This is the only file you edit to change teachers or connect Google Sheets.

   1) SCHOOLS: each school site and its teachers. Keep the quotes and commas.
      (Use the exact same names in Code.gs, in the SCHOOLS list at the top.)
   2) SHEETS_WEBHOOK_URL: paste your Apps Script Web app URL between the quotes.
      It looks like: https://script.google.com/macros/s/AKfy.../exec
      While it is empty, scores are saved only on that computer (preview mode).
   ===================================================================== */
const SCHOOLS = {
  'Tulare Union':            ['Amy Gavello', 'Darren Bennett', 'DJ Bennett', 'Fernando Valadao', 'Kristen Pallas', 'Kelli Medeiros', 'Mark Reindl'],
  'Tulare Western':          ['Joseph Rivera', 'Kristen Rickard', 'Michael Sozinho', 'Keith Rickard', 'Ken Searcy', 'Matt Archibald'],
  'Mission Oak':             ['Livi Aguilar', 'Stevan Chamalbide', 'Matt Jones', 'Celina Rodela', 'Richard Salazar'],
  'ACHS':                    ['ACHS Teacher'],
  'Tech Prep / Countryside': ['Silvia Sausedo']
};

// Every teacher in one list (built automatically from SCHOOLS; you don't need to edit this line).
const TEACHERS = Object.values(SCHOOLS).flat();

// Paste your Web app URL here:
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx4CN9OpgwwMmqP2h1uQfB6Om4JaxMf_gLMnxArAJu6HFMamZ2E1zLzl7dkDVb-i9qHXg/exec';
