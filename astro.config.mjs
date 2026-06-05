// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ─────────────────────────────────────────────────────────────────────────────
//  DESPLIEGUE EN GITHUB PAGES
//  - Si publicas en  https://<usuario>.github.io        → base: "/"
//  - Si publicas en  https://<usuario>.github.io/<repo> → base: "/<repo>/"
//  Cambia SITE y BASE según tu caso. El workflow de .github/workflows/deploy.yml
//  ya construye y publica automáticamente al hacer push a main.
// ─────────────────────────────────────────────────────────────────────────────
const SITE = process.env.SITE_URL ?? "https://ddzendreros.github.io";
const BASE = process.env.BASE_PATH ?? "/ddzendreros/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
