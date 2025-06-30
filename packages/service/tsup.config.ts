import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: false,
  minify: false,
  format: ["esm", "cjs"],
  outDir: "dist",
  shims: false,
  entry: ["src/**/*.ts"],
  bundle: false,
});
