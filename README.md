# Diego Zendreros — Portafolio

> **Ingeniero en Inteligencia Artificial · Constructor de agentes autónomos**
> Sitio personal bilingüe (ES/EN). Tema oscuro obsidiana con una paleta —verde · azul · morado— que muta según la sección en pantalla.

🔗 **En vivo:** https://ddzendreros.github.io/dzendreros/

Diseñé y construí este portafolio para contar, con la estética y el lenguaje de mi propio campo, quién soy como ingeniero de IA: del prompt al sistema autónomo. No es una plantilla — cada interacción está pensada para reforzar la marca: grafos de razonamiento, tokens, pipelines y arquitecturas de agentes.

## ✨ Lo que lo hace distinto

- **Grafo neuronal ambiental** en el hero (canvas): un grafo disperso de nodos con señales que viajan por las aristas y reaccionan al cursor — no un campo de partículas genérico.
- **"Anatomía de un agente"**: una sección de *scrollytelling* fija que ensambla la arquitectura de un agente (LLM → Tools → Memory → Planner → Guardrails) a medida que haces scroll, con una traza de razonamiento en vivo.
- **Paleta dinámica por sección** — cada bloque tiene identidad cromática propia; un `IntersectionObserver` interpola el acento y las luces de fondo (aurora verde/azul/morado a la deriva).
- **Micro-interacciones de producto**: titular que se "decodifica" como tokens, métricas con conteo animado, *spotlight* de cursor en las tarjetas y botón magnético.
- **Terminal interactiva** que simula la ejecución de mis agentes (Argos, Aeterna Vigil) en tiempo real.
- **Accesible y rápido**: 100% estático, sin dependencias de runtime, animaciones con *fallback* para `prefers-reduced-motion`.

## 🧱 Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 5](https://astro.build) (salida estática) + TypeScript |
| Estilos | Tailwind CSS v4 (`@tailwindcss/vite`) + design system en CSS custom properties |
| Motion | Canvas + IntersectionObserver + scroll-driven, *vanilla JS* (cero dependencias) |
| i18n | Toggle ES/EN instantáneo, persistido en `localStorage` |
| Deploy | GitHub Pages (rama `main`, carpeta `/docs`) |

## 🗂️ Estructura

```
src/
├── data/          content.ts (contenido bilingüe) · ui.ts (textos de interfaz)
├── components/    Nav · Hero · NeuralField · About · AgentAnatomy · Projects
│                  Achievements · Community · Experience · Contact · Terminal · T (i18n)
├── layouts/       Base.astro (head, fuentes, aurora, riel de scroll, micro-interacciones)
├── styles/        global.css (design system, paletas y animaciones)
└── pages/         index.astro
```

Todo el contenido vive en una única fuente de verdad: [`src/data/content.ts`](src/data/content.ts).

## 🚀 Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321/dzendreros/
npm run build    # compila el sitio en docs/ (genera .nojekyll)
npm run preview  # sirve docs/ localmente
```

## 🌐 Despliegue

El sitio se compila en **`docs/`** (configurado en `astro.config.mjs`). Para publicar en GitHub Pages:

1. `npm run build` y commitea la carpeta `docs/`.
2. **Settings → Pages → Build and deployment** → *Deploy from a branch* → rama `main`, carpeta `/docs`.

> El `base` ya apunta a `/dzendreros/`. Cada cambio de contenido: `npm run build` + commit de `docs/`.

---

Hecho con [Astro](https://astro.build) por **Diego Zendreros**.
