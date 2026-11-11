InKind WA website  (inkindwa.org.au)
=====================================

This folder IS the website. Every page is a plain .html file you can open in a text editor
(VS Code, Notepad++, or TextEdit in plain-text mode).

PUBLISH
  Drag this whole folder onto your Netlify site's "Deploys" page. That's it.
  Full steps (first set-up, GoDaddy domain, form emails) are in the
  "InKind WA Website Go-Live Guide".

BEFORE THE FIRST PUBLISH
  1. Replace  [ADD ABN]  with the association's ABN. It appears once in the footer of every
     page, so use Find & Replace across all .html files.
  2. Ask a native speaker to check zh.html, hi.html, ne.html, vi.html and id.html.
  3. Confirm every board member is happy to be named on about.html.

COMMON EDITS
  Add or change an event ......... events.html and index.html (search for "<article class=\"event\"")
                                   Copy an existing <article> block and change the text.
                                   data-ends="YYYY-MM-DD" hides the event automatically the day after.
  Change a colour ................ assets/css/style.css, top of the file (:root)
  Add Facebook/Instagram links ... search for "SOCIAL LINKS" in each page footer
  Logo ........................... assets/img/logo.svg (full) and assets/img/icon.svg (globe only)

The header and footer are repeated in every page. If you change a menu item,
use Find & Replace across all .html files so every page stays the same.

FILES
  index.html ..................... Home
  about.html ..................... About, values, board, governance
  pathways-to-belonging.html ..... Pathways to Belonging program
  volunteer.html ................. Why volunteer, FAQ, volunteer sign-up form
  events.html .................... Upcoming and planned events
  partners.html .................. For organisations and universities + enquiry form
  contact.html ................... Contact form
  privacy.html ................... Privacy statement
  thank-you.html ................. Shown after any form is sent
  404.html ....................... "Page not found"
  zh / hi / ne / vi / id .html ... Welcome pages in Chinese, Hindi, Nepali, Vietnamese, Indonesian
  sitemap.xml, robots.txt ........ Help Google find the pages
