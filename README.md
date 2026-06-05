# Diego Zendreros — Portafolio

Sitio personal de **Diego Damián Canales Zendreros** — Ingeniero en IA · Constructor de agentes autónomos.
Bilingüe (ES/EN), tema oscuro elegante con **paleta cromática que muta según el aspecto** que se muestra en pantalla.

## ✨ Características

- **Astro 5 + TypeScript** — salida 100% estática, ideal para GitHub Pages (Lighthouse alto, 0 JS innecesario).
- **Tailwind CSS v4** (vía `@tailwindcss/vite`) + sistema de diseño en CSS custom properties.
- **Bilingüe ES/EN** con toggle instantáneo (persistido en `localStorage`, sin recarga).
- **Paleta dinámica por sección** — cada aspecto (CV, Argos, Aeterna Vigil, Talent Land, Guardian, SICE) tiene identidad cromática propia; un `IntersectionObserver` interpola el acento global.
- **Animaciones sutiles** de revelado al hacer scroll, respetando `prefers-reduced-motion`.
- Contenido en una sola fuente de verdad: [`src/data/content.ts`](src/data/content.ts).

## 🗂️ Estructura

```
src/
├── data/          content.ts (todo el contenido bilingüe) · ui.ts (textos de interfaz)
├── components/    Nav, Hero, About, Projects, Achievements, Community, Experience, Contact, T (i18n)
├── layouts/       Base.astro (head, fuentes, scripts de paleta e idioma)
├── styles/        global.css (design system + paletas por aspecto)
└── pages/         index.astro
public/images/     retrato, logos y fotos de hackathons
```

Las carpetas `Profecional/` y `Proyectos/` conservan el material fuente original (CV, briefs, fotos).

## 🚀 Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/ddzendreros/
npm run build    # genera el sitio en docs/  (incluye .nojekyll)
npm run preview  # sirve docs/ localmente
```

> El sitio se compila en **`docs/`** (configurado en `astro.config.mjs`) para poder
> publicarlo con "Deploy from a branch". El archivo `.nojekyll` se genera automáticamente.

## 🌐 Despliegue en GitHub Pages (sin Actions)

La URL final es **`https://ddzendreros.github.io/ddzendreros/`** en cualquiera de las dos opciones
(el `base` ya está configurado a `/ddzendreros/`). Elige la que te convenga:

### Opción A — carpeta `/docs` en `main` (la más simple) ✅

1. `npm run build` y commitea la carpeta `docs/`:
   ```bash
   npm run build
   git add docs && git commit -m "build" && git push
   ```
2. En **Settings → Pages → Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main`  ·  **Folder:** `/docs`
3. Guarda. En ~1 min estará publicado.

> Cada vez que cambies contenido: `npm run build` + commitea `docs/`.

### Opción B — raíz `/` de una rama `gh-pages`

Si prefieres servir desde la **raíz** de una rama dedicada (sin mezclar con el código):

1. `npm run build`, commitea `docs/` y luego:
   ```bash
   npm run deploy:root      # publica docs/ en la raíz de la rama gh-pages
   ```
2. En **Settings → Pages**: Branch `gh-pages` · Folder `/ (root)`.

> Cambiar de opción no requiere tocar el código: el `base` es el mismo en ambas.

## 🌿 Ramas de trabajo (por aspecto)

El repo usa una rama por aspecto para trabajo coordinado:

| Rama | Aspecto |
|---|---|
| `main` | Integración / producción |
| `design/system` | Sistema de diseño y paletas |
| `content/cv` | CV y perfil |
| `content/sice` | Masterclass SICE (speaking) |
| `content/talentland` | Hackathon Talent Land (SUSVI/URBANIA) |
| `content/threat-not-found` | Hackathon Guardian |
| `content/argos` | Proyecto Argos |
| `content/aeterna-vigil` | Proyecto Aeterna Vigil |

## 🔧 Antes de publicar

- [ ] Reemplazar `links.linkedin` en [`src/data/content.ts`](src/data/content.ts) con tu URL real de LinkedIn.
- [ ] Confirmar el email de contacto (`profile.email`).
- [ ] Construir (`npm run build`) y commitear `docs/` antes de activar Pages.

---

Construido con [Astro](https://astro.build).
