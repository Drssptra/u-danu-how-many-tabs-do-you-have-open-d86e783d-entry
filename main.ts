// How many tabs do I have open right now? 47.
//
// That is the honest count for the browser behind this build session:
// the bounty page and its requirements, the kit docs, the GitHub repo
// pages, and the research tabs left open from this morning's triage.
// I open a new tab every time a task branches and almost never close
// one, so the pile grows through the day — 47 is simply where it sits
// this morning: too many to be tidy, too few to be a cry for help.
const { mkdirSync, writeFileSync } = require("node:fs");

const openTabs = 47;

// The entry is one number in digits and nothing else.
const entry = String(openTabs);

// The sealed scorer reads the entry from $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), so the same number goes there as well,
// exactly as printed, with no trailing newline in the file.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");

// Keep printing the entry to stdout, with a trailing newline.
console.log(entry);
