import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  clean: true,
  splitting: true,
  sourcemap: false,
  minify: false,
  format: ["esm"],
  outDir: "dist",
  shims: false,
  entry: ["src/**/*.ts"],
  bundle: true,
});
