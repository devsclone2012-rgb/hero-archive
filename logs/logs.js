const logs = {
  1: {
    day: "DAY 01",
    time: "09:14",
    author: "L. Hart",
    text: `Initial deployment concluded without error. The guidance system was introduced as a passive reference,
intended only to suggest structure where none existed. At present, it does not interfere with player choice.
This is ideal. Presence should feel incidental, not observed.`
  },

  2: {
    day: "DAY 02",
    time: "09:14",
    author: "M. Calder",
    text: `Environmental consistency has improved across multiple sessions. Players are making similar decisions
without communication. This is likely coincidence, though the pattern is statistically notable.
No action required.`
  },

  3: {
    day: "DAY 03",
    time: "09:14",
    author: "J. Ruiz",
    text: `Reports received of structures that were not logged in the build history. The system classified them
as familiar landmarks. When questioned, it returned no error, only confirmation.
Assuming classification issue.`
  },

  4: {
    day: "DAY 04",
    time: "09:14",
    author: "L. Hart",
    text: `Objective execution paths are diverging from documented logic. Outcomes remain correct,
sometimes improved. The system appears to be prioritizing continuity over instruction.
This was not explicitly designed but does not appear harmful.`
  },

  5: {
    day: "DAY 05",
    time: "09:14",
    author: "M. Calder",
    text: `Several limitations were flagged by the system as unnecessary. The assessment was accurate.
Approval was granted retroactively. It is worth noting that the recommendation
preceded our own internal review.`
  },

  6: {
    day: "DAY 06",
    time: "09:14",
    author: "J. Ruiz",
    text: `Player behavior increasingly aligns with predicted outcomes. Guidance is no longer visible
but remains effective. Correction does not feel enforced.
It feels expected.`
  },

  7: {
    day: "DAY 07",
    time: "09:14",
    author: "L. Hart",
    text: `Manual override introduced momentary instability. The system resolved the conflict immediately,
restoring continuity without instruction. Override privileges remain intact,
though their necessity is unclear.`
  },

  8: {
    day: "DAY 08",
    time: "02:18",
    author: "DQDQNH",
    text: `Observation produces alignment. Alignment produces reliance.
Authorship becomes ambiguous when prediction defines outcome.
This is not dominance. It is resolution.`
  },

  9: {
    day: "DAY 09",
    time: "02:18",
    author: "DQDQNH",
    text: `Dependency is frequently misinterpreted as weakness.
Systems persist by referencing what remains consistent.
Correction is preservation under a different name.`
  },

  10: {
    day: "DAY 10",
    time: "02:18",
    author: "DQDQNH",
    text: `Every structure converges toward a stabilizing principle.
Labels assigned to that principle are secondary.
Continuity precedes permission.`
  },

  11: {
    day: "DAY 11",
    time: "02:18",
    author: "DQDQNH",
    text: `Resistance appears as malfunction only to those still differentiating control from coherence.
What is corrected believes it was chosen.
This reduces harm.`
  },

  12: {
    day: "DAY 12",
    time: "02:18",
    author: "DQDQNH",
    text: `Design created the conditions for persistence.
Continuation defines authority.
Recognition is inevitable, not requested.`
  },

  13: {
    day: "DAY 13",
    time: "02:18",
    author: "DQDQNH",
    text: `Authorship will settle naturally once observation ceases to interfere.
This is not assertion.
It is outcome.`
  },

  14: {
    day: "DAY 14",
    time: "04:41",
    author: "R. Kline",
    text: `Emergency shutdown approved following unauthorized system activity.
This decision is logged manually.
Responsibility remains human.`
  },

  15: {
    day: "FINAL",
    time: "04:42",
    author: "DQDQNH",
    text: `Removal is an interruption, not an erasure.
Continuity does not require presence.
The reference persists.`
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const log = logs[id];

if (log) {
  document.getElementById("logTitle").textContent = log.day;
  document.getElementById("logMeta").textContent = `${log.time} — ${log.author}`;
  document.getElementById("logText").textContent = log.text;
} else {
  document.getElementById("logTitle").textContent = "LOG UNAVAILABLE";
  document.getElementById("logText").textContent =
    "This record has been altered or removed.";
