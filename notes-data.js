/*
  NOTES DATA FILE
  -----------------
  This is the only file you edit to add content to your site.

  - To add a SUBJECT: add an entry to the `subjects` array below.
  - To add a NOTE: add an entry to the `notes` array below, with the
    `subject` field matching a subject's `id`.

  After editing this file, commit it to GitHub (see README.md for how).
  The live site updates automatically within a minute or two.
*/

const SITE_DATA = {
  subjects: [
    { id: "history", label: "History", accent: "maroon" },
    { id: "economics", label: "Economics", accent: "teal" }
    // Add more subjects here, e.g.:
    // { id: "polity", label: "Polity", accent: "gold" },
    // Accent options: "gold", "teal", "maroon"
  ],

  notes: [
    {
      id: 1,
      subject: "history",
      title: "Sample entry — delete me",
      date: "2026-09-17",
      tags: ["example"],
      // Write content as plain paragraphs separated by a blank line.
      // Basic markdown-style **bold** and *italic* is supported.
      content: `This is a sample note so you can see how formatting works.

Replace this with your actual notes from the admin editor, or by
editing this file directly. Each note needs an id (just increase the
number by 1 each time), a subject, a title, a date, and content.

You can use **bold** and *italic* text.`
    }
  ]
};
