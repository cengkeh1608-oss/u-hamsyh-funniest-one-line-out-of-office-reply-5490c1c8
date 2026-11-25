// Funniest One-Line Out-of-Office Reply
// Writes the winning entry (D01, 25/25) to <outputDir>/entry.txt.
// The text twists the stock OOO phrase "answered in the order received":
// the notice IS the joke, so it reads like a real away message while the
// punch ("ignored") lands on the first read with zero setup. It beat 23
// other drafts in pairwise scoring (drafts.md): D02 "inbox has already quit"
// and D03 "forwarded it to myself for when I care again" both scored 24/25
// and both need one extra beat to land; D01 lands on the final word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I am away. This email will be answered in the order it was ignored.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
