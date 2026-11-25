import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Entry text, kept verbatim: built from parts so the wording stays
// exactly as assigned — the prefix names the fix, the middle names the
// bug, and the parenthetical delivers the backfire: pagination now
// shows page 0 of -1, which is technically correct and entirely useless.
const PREFIX = 'fix:';
const ACTION = 'off-by-one in pagination';
const NOTE = 'now shows page 0 of -1, which is technically correct';
const text = [PREFIX, ACTION, `(${NOTE})`].join(' ');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
