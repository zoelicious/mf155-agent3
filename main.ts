import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Entry text, kept verbatim: the commit subject names the fix, the
// parenthetical delivers the backfire — the "fix" leaves pagination
// showing page 0 of -1, which is technically correct and entirely useless.
const SUBJECT = 'fix: off-by-one in pagination';
const BACKFIRE = '(now shows page 0 of -1, which is technically correct)';
const text = `${SUBJECT} ${BACKFIRE}`;
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
