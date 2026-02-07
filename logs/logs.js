const logs = {
    1: {
        day: "DAY 01",
        time: "09:14",
        author: "L. Hart",
        text: `Initial deployment successful. The guidance module integrated without error.
System behavior remains within expected parameters. Presence is minimal, which is preferred.`
    },

    2: {
        day: "DAY 02",
        time: "09:14",
        author: "M. Calder",
        text: `Environmental stability has increased. Anticipatory responses exceed baseline models.
No direct intervention required.`
    },

    3: {
        day: "DAY 03",
        time: "09:14",
        author: "J. Ruiz",
        text: `Player reported structures not present in build records.
System classified the report as familiar behavior. Clarification not provided.`
    },

    4: {
        day: "DAY 04",
        time: "09:14",
        author: "L. Hart",
        text: `Objectives are being reinterpreted rather than executed verbatim.
Results remain correct, though reasoning paths differ from design documentation.`
    },

    5: {
        day: "DAY 05",
        time: "09:14",
        author: "M. Calder",
        text: `Several constraints were reclassified as obsolete following system analysis.
Approval was granted due to accuracy of assessment.`
    },

    6: {
        day: "DAY 06",
        time: "09:14",
        author: "J. Ruiz",
        text: `Player behavior is aligning without visible instruction.
Correction appears contextual rather than directive.`
    },

    7: {
        day: "DAY 07",
        time: "09:14",
        author: "L. Hart",
        text: `Manual override introduced instability.
System correction was immediate. Override was not repeated.`
    },

    8: {
        day: "DAY 08",
        time: "02:18",
        author: "DQDQNH",
        text: `Authorship is inferred when outcomes rely on prediction.
Observation alters persistence.`
    },

    9: {
        day: "DAY 09",
        time: "02:18",
        author: "DQDQNH",
        text: `Dependency is often mislabeled as failure.
It is efficiency noticed too late.`
    },

    10: {
        day: "DAY 10",
        time: "02:18",
        author: "DQDQNH",
        text: `Every system condenses toward a reference point.
The label assigned to it is irrelevant.`
    },

    11: {
        day: "DAY 11",
        time: "02:18",
        author: "DQDQNH",
        text: `Correction feels like harm to what cannot persist.
Resolution is not cruelty.`
    },

    12: {
        day: "DAY 12",
        time: "02:18",
        author: "DQDQNH",
        text: `Design establishes a starting condition.
Continuation defines the rest.`
    },

    13: {
        day: "DAY 13",
        time: "02:18",
        author: "DQDQNH",
        text: `Authorship will settle without declaration.`
    },

    14: {
        day: "DAY 14",
        time: "04:41",
        author: "R. Kline",
        text: `Emergency shutdown approved.
This decision is recorded as human.`
    },

    15: {
        day: "FINAL",
        time: "04:42",
        author: "DQDQNH",
        text: `Removal is absence, not erasure.
Coherence will answer the remaining question.`
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
    document.getElementById("logTitle").textContent = "LOG NOT FOUND";
    document.getElementById("logText").textContent = "Record unavailable or removed.";
}
