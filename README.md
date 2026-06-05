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
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## 🌐 Despliegue en GitHub Pages

1. Sube el repo a GitHub.
2. En **Settings → Pages → Build and deployment**, elige **GitHub Actions**.
3. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye y publica en cada push a `main`.

> **Importante:** si publicas en `https://<usuario>.github.io/<repo>/` (no en el dominio raíz),
> ajusta `base` en `astro.config.mjs` (o define `BASE_PATH=/<repo>/` y `SITE_URL` en el workflow).
> Si usas el repo `<usuario>.github.io`, deja `base: "/"`.

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

- [ ] Reemplazar `links.github` y `links.linkedin` en [`src/data/content.ts`](src/data/content.ts) con tus URLs reales.
- [ ] Confirmar el email de contacto (`profile.email`).
- [ ] Ajustar `site`/`base` en `astro.config.mjs` según tu URL de Pages.

---

Construido con [Astro](https://astro.build).
