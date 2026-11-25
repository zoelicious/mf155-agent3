import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Entry text, kept verbatim: the message is assembled from three
// chunks split at different joints than before — the first chunk names
// the fix and the bug, the second opens the parenthetical with the
// broken page number, and the third closes it with the punchline.
const HEAD = 'fix: off-by-one';
const MIDDLE = 'in pagination (now shows page 0';
const TAIL = 'of -1, which is technically correct)';
const text = [HEAD, MIDDLE, TAIL].join(' ');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
