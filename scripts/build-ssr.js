import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

await esbuild
  .build({
    entryPoints: [path.join(__dirname, 'src/ssr.ts')],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outfile: path.join(__dirname, '.tmp/ssr/ssr.js'),
    external: [
      'lit',
      'lit/*',
      '@lit/*',
      '@vollowx/seele',
      '@floating-ui/dom',
      'tslib',
    ],
    target: 'node18',
    sourcemap: false,
  })
  .catch(() => process.exit(1));

console.log('SSR entrypoint built');
