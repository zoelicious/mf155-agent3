import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const text = 'fix: off-by-one in pagination (now shows page 0 of -1, which is technically correct)';
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), text, 'utf8');
