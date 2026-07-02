import esbuild from "esbuild";
import { bundle } from "lightningcss";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root_dir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEV = process.env.NODE_ENV === "DEV";
const src_dir = path.join(root_dir, "src");
const out_dir = path.join(root_dir, ".tmp/client");

const entryPoints = [
  path.join(src_dir, "client.ts"),
  path.join(src_dir, "components/demo.ts"),
  path.join(src_dir, "components/toolbar.ts"),
];

const config = {
  bundle: true,
  outdir: out_dir,
  format: "esm",
  target: "es2020",
  treeShaking: true,
  sourcemap: DEV,
  minify: !DEV,
  splitting: true,
};

// Build the hydration support separately (must be loaded first, no splitting)
await esbuild
  .build({
    entryPoints: [path.join(src_dir, "lit-hydrate-support.ts")],
    bundle: true,
    outdir: out_dir,
    format: "esm",
    target: "es2020",
    treeShaking: true,
    minify: !DEV,
    splitting: false, // Don't split - this must be standalone
    sourcemap: DEV,
  })
  .catch(() => process.exit(1));

// Build client-side bundles
await esbuild
  .build({
    ...config,
    entryPoints,
  })
  .catch(() => process.exit(1));

const css = fs.readFileSync(path.join(src_dir, "main.css"));
const { code } = bundle({
  filename: "src/main.css",
  code: css,
  minify: true,
  resolver: {
    resolve(specifier, from) {
      return path.resolve(path.dirname(from), specifier);
    }
  }
});
fs.writeFileSync(path.join(out_dir, "client.css"), code);

console.log("Client assets built");
