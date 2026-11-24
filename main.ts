// One-Line Robot Wedding Vows — make.fun bounty entry.
// Writes a single line of wedding vows for a robot couple to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt by default).
// The vow mirrors the classic wedding formula ("I take you... to have
// and to hold... from this day forward") with machine specifics
// (co-processor, low battery, full charge) and lands its laugh in the
// last few words: eternity is replaced by a warranty period.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I take you to be my lawfully wedded co-processor, to have and to hold from this day forward, in low battery and in full charge, until our warranties expire.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate self-check: the sealed scorer requires UTF-8 text of 1 to 160
// characters, not only white space, on a single line.
if (VOW.length < 1 || VOW.length > 160) {
  throw new Error(`vow is ${VOW.length} characters, must be 1-160`);
}
if (VOW.trim().length === 0 || VOW.includes("\n")) {
  throw new Error("vow must be one non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
