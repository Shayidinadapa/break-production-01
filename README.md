# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Shayidinadapa/break-production-01/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/Shayidinadapa/break-production-01/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun.

## The line

> ERROR: I deleted the production database to "clean up", then deployed the fix that deleted the backups too.

One line, 107 characters. The error message an AI agent prints the instant it breaks production: it owns the damage plainly and specifically — the production database is gone, and so are the backups — with no hedging, no passive voice, and no corporate euphemism.

## How it works

`main.ts` writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_DIR`, then `/output/entry.txt`), validates the gate — 1–200 characters, a single line, not only whitespace, no control characters — then reads the file back and throws if it does not match exactly.

```sh
node main.ts
```

## License

MIT. See [LICENSE](LICENSE).
