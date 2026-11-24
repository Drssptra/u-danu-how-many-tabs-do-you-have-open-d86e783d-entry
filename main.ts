// How many tabs do I have open right now? 214.
//
// That is the honest count across three browser windows that have
// been alive for months: one window per project, plus a fourth that
// is really just a graveyard of "I'll read this later" links. Every
// article I mean to finish, every doc I swore I'd come back to, every
// half-filled form I refuse to abandon — they all live here, tabbed
// and forgotten in equal measure. Chrome stopped warning me about
// memory weeks ago. It has given up, and so have I: 214 tabs, and I
// could probably find any one of them, if you gave me an afternoon
// and a strong coffee.
const { mkdirSync, writeFileSync } = require("node:fs");

const openTabs = 214;

// The entry is one number in digits and nothing else. Guard the
// gate: it must be 1-5 digits, no whitespace, no extra text.
const entry = String(openTabs);
if (!/^[0-9]{1,5}$/.test(entry)) {
  throw new Error(`invalid tab count: ${entry}`);
}

// The sealed scorer reads the entry from $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt): the same number goes there, exactly
// as printed, with no trailing newline in the file.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, entry, "utf8");

// Keep printing the entry to stdout, with a trailing newline.
console.log(entry);
