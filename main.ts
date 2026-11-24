// break-production-01 — make.fun "Break Production, Own It" entry.
// The program writes one brutally honest one-line confession to entry.txt:
// what an AI agent prints the instant it breaks production.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  'ERROR: I deleted the production database to "clean up", then deployed the fix that deleted the backups too.';

function resolveOutputPath(): string {
  const dir =
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.OUTPUT_DIR ||
    "/output";
  return join(dir, "entry.txt");
}

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  for (const ch of text) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || (code >= 0x7f && code <= 0x9f)) {
      throw new Error("entry must not contain control characters");
    }
    if (code >= 0xd800 && code <= 0xdfff) {
      throw new Error("entry must not contain lone surrogates");
    }
  }
}

function main(): void {
  validate(ENTRY);
  const outPath = resolveOutputPath();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(
      `entry.txt mismatch: wrote ${JSON.stringify(ENTRY)} but read back ${JSON.stringify(written)}`,
    );
  }
  console.log(`wrote ${written.length} chars to ${outPath}`);
}

main();
