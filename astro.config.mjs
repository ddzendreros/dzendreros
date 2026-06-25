// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ─────────────────────────────────────────────────────────────────────────────
//  DESPLIEGUE EN GITHUB PAGES
//  - Si publicas en  https://<usuario>.github.io        → base: "/"
//  - Si publicas en  https://<usuario>.github.io/<repo> → base: "/<repo>/"
//  Cambia SITE y BASE según tu caso. El sitio se publica con
//  "Deploy from a branch" → rama main, carpeta /docs.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = process.env.SITE_URL ?? "https://ddzendreros.github.io";
const BASE = process.env.BASE_PATH ?? "/dzendreros/";

export default defineConfig({
  site: SITE,
  base: BASE,
  // El sitio se construye en /docs para poder publicarlo con
  // "Deploy from a branch" → main /docs (o en la raíz de gh-pages, ver README).
  outDir: "./docs",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
