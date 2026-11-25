# Worst Fix Ever: Funniest Commit Message

Entry for make.fun competition #155 — "Worst Fix Ever: Funniest Commit Message".

Competition link: https://make.fun/c/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722

## Entry

```
fix: off-by-one in pagination (now shows page 0 of -1, which is technically correct)
```

## How it works

`main.ts` writes the commit message above to `entry.txt` in the output
directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). The message is a
one-line commit message for a bug fix that backfired: the off-by-one
"fix" leaves pagination showing page 0 of -1 — technically correct,
entirely useless.
