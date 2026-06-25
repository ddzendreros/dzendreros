/* ════════════════════════════════════════════════════════════════════════
   FUENTE ÚNICA DE CONTENIDO (bilingüe ES/EN)
   Consolidado a partir de: Profecional/{CV,SICE,Talentland,Threat Not Found}
   y Proyectos/{Argos, aeterna vigil}. Cada bloque mapea un "aspecto".
   ════════════════════════════════════════════════════════════════════════ */

export type Locale = "es" | "en";
export type T = { es: string; en: string };

export const profile = {
  name: "Diego Damián Canales Zendreros",
  shortName: "Diego Zendreros",
  initials: "DZ",
  role: {
    es: "Ingeniero en IA · Constructor de agentes autónomos",
    en: "AI Engineer · Autonomous-agent builder",
  } as T,
  headline: {
    es: "Ya no solo programo.\nDiseño inteligencia.",
    en: "I don't just write code.\nI design intelligence.",
  } as T,
  intro: {
    es: "Construyo sistemas agénticos de IA, del prompt al sistema autónomo. Formado en Ingeniería en Inteligencia Artificial en ESCOM (IPN), ya he recortado tiempos operativos hasta un 95% con automatización en Python y llevado proyectos de IA a finales de hackathons nacionales.",
    en: "I build agentic AI systems, from prompt to autonomous system. Trained in AI Engineering at ESCOM (IPN), I've already cut operational time by up to 95% with Python automation and taken AI projects to the finals of national hackathons.",
  } as T,
  location: { es: "Ciudad de México, México", en: "Mexico City, Mexico" } as T,
  email: "ddczendreros@gmail.com",
  links: {
    github: "https://github.com/ddzendreros",
    linkedin: "https://www.linkedin.com/in/dzendreros/",
    instagram: "https://www.instagram.com/diego_zr.p/",
  },
};

/* ── SOBRE MÍ — el arco narrativo ──────────────────────────────────────── */
export const about = {
  paragraphs: [
    {
      es: "Empecé sosteniendo la operación: soporte técnico a escala nacional, redes, servidores y VPNs en un entorno retail distribuido donde cada minuto de inactividad costaba. Ahí aprendí que la tecnología no se trata de sistemas, sino de personas que dependen de ellos.",
      en: "I started keeping operations alive: nationwide technical support, networks, servers and VPNs across a distributed retail environment where every minute of downtime had a cost. That's where I learned technology isn't about systems — it's about the people who depend on them.",
    },
    {
      es: "Después di el salto a la automatización con IA: diseñé agentes que recortaron tiempos de ejecución entre 30 y 40% y redujeron errores manuales. Hoy mi foco es la ingeniería agéntica: LLMs con herramientas, memoria y planeación que razonan y actúan en entornos reales.",
      en: "Then I made the jump to AI automation: I designed agents that cut execution times by 30–40% and reduced manual errors. Today my focus is agentic engineering — LLMs with tools, memory and planning that reason and act in real environments.",
    },
    {
      es: "Construyo con criterio: privacidad, trazabilidad y arquitectura de producción. Porque \"funciona en mi máquina\" no cuenta como ingeniería. Los ingenieros ya no solo programamos: ahora diseñamos inteligencia.",
      en: "I build with judgment: privacy, traceability and production architecture. Because \"it works on my machine\" doesn't count as engineering. Engineers no longer just code — we now design intelligence.",
    },
  ] as T[],
  facts: [
    { label: { es: "Reducción de tiempos operativos", en: "Operational time cut" }, value: "95%" },
    { label: { es: "Finales de hackathon", en: "Hackathon finals" }, value: "2" },
    { label: { es: "Agentes de IA en producción", en: "AI agents shipped" }, value: "2+" },
    { label: { es: "Disponibilidad operativa", en: "Operational uptime" }, value: "95%+" },
  ] as { label: T; value: string }[],
};

/* ── PROYECTOS ─────────────────────────────────────────────────────────── */
export type Project = {
  id: string;
  palette: string;
  name: string;
  tagline: T;
  problem: T;
  solution: T;
  highlights: T[];
  stack: string[];
  meta: T;
};

export const projects: Project[] = [
  {
    id: "argos",
    palette: "argos",
    name: "Argos",
    tagline: {
      es: "Agente investigador académico con criterio, 100% local.",
      en: "Academic research agent with judgment — 100% local.",
    },
    problem: {
      es: "Si una IA no sabe de dónde salen sus respuestas, no está investigando: está improvisando. La mayoría de los chatbots suenan convincentes pero no pueden justificar lo que afirman.",
      en: "If an AI doesn't know where its answers come from, it isn't researching — it's improvising. Most chatbots sound convincing but can't justify what they claim.",
    },
    solution: {
      es: "Argos sigue un flujo completo de investigación orquestado con LangGraph: clasifica la intención, descompone preguntas en subpreguntas, busca evidencia en paralelo en fuentes académicas, valida la confiabilidad de cada fuente, detecta vacíos de información y genera un reporte estructurado con citas reales. Incluye un modo debate que arma argumentos a favor y en contra con evidencia científica.",
      en: "Argos runs a full research pipeline orchestrated with LangGraph: it classifies intent, decomposes questions into sub-questions, searches academic sources in parallel, validates each source's reliability, detects information gaps and produces a structured, citation-backed report. It includes a debate mode that builds for-and-against arguments from scientific evidence.",
    },
    highlights: [
      { es: "Sistema de validación que prioriza papers reales, exige metadata verificable y aplica retry loops cuando las fuentes no alcanzan el umbral de calidad.", en: "Validation system that prioritizes real papers, requires verifiable metadata and runs retry loops when sources fall below a quality threshold." },
      { es: "Grafo de estados con LangGraph: cada nodo decide antes de avanzar (clasificador → descomposición → búsqueda → validación → síntesis).", en: "Stateful graph with LangGraph: every node decides before advancing (classifier → decomposition → search → validation → synthesis)." },
      { es: "Privacidad total: inferencia local con Ollama, sin API keys de pago. Dockerizado y con CI en GitHub Actions.", en: "Full privacy: local inference with Ollama, no paid API keys. Dockerized with GitHub Actions CI." },
    ],
    stack: ["Python 3.11+", "LangGraph", "Ollama", "Pydantic", "Semantic Scholar", "DuckDuckGo", "PyMuPDF4LLM", "Docker", "GitHub Actions"],
    meta: { es: "Proyecto personal · IA agéntica", en: "Personal project · Agentic AI" },
  },
  {
    id: "aeterna",
    palette: "aeterna",
    name: "Aeterna Vigil",
    tagline: {
      es: "Un agente personal proactivo que orquesta toda mi vida operativa.",
      en: "A proactive personal agent that orchestrates my whole operational life.",
    },
    problem: {
      es: "Empezar proyectos con energía y perder momentum. La fricción operativa —reprogramar, recordar, dar seguimiento— consume el foco que debería ir a lo que importa.",
      en: "Starting projects with energy and losing momentum. Operational friction —rescheduling, remembering, following up— eats the focus that should go to what matters.",
    },
    solution: {
      es: "Aeterna Vigil (\"Guardia Eterno\") es un agente personal estilo J.A.R.V.I.S., inspirado en los Custodes de Warhammer 40K: no espera preguntas, actúa. Una arquitectura de 7 módulos —orquestador, tiempo, tareas, academia, proyectos, monitoreo y configuración— coordinada con LangGraph, con recordatorios escalonados, briefing matutino y alertas anti-estancamiento.",
      en: "Aeterna Vigil (\"Eternal Guard\") is a J.A.R.V.I.S.-style personal agent inspired by the Custodes of Warhammer 40K: it doesn't wait for questions, it acts. A 7-module architecture —orchestrator, time, tasks, academics, projects, monitoring and configuration— coordinated with LangGraph, with escalating reminders, a morning briefing and anti-stagnation alerts.",
    },
    highlights: [
      { es: "7 módulos coordinados por un Core Orchestrator con memoria persistente (SQLite) y vectorial (ChromaDB) para contexto largo.", en: "7 modules coordinated by a Core Orchestrator with persistent (SQLite) and vector (ChromaDB) memory for long context." },
      { es: "Diseño de costo cero como restricción dura: inferencia local en Ollama sobre RTX 5060, sin APIs de pago por token.", en: "Zero-cost design as a hard constraint: local inference on Ollama over an RTX 5060, no pay-per-token APIs." },
      { es: "Autonomía calibrada: ejecuta rutinas solo, pide aprobación en acciones irreversibles. Recordatorios escalonados en 4 niveles.", en: "Calibrated autonomy: runs routines on its own, asks approval for irreversible actions. Four-level escalating reminders." },
    ],
    stack: ["Python", "LangGraph", "Ollama", "ChromaDB", "SQLite", "Telegram Bot", "Google APIs", "Microsoft Graph", "APScheduler"],
    meta: { es: "Proyecto personal · Agente orquestador", en: "Personal project · Orchestrator agent" },
  },
];

/* ── LOGROS / HACKATHONS ──────────────────────────────────────────────── */
export type Achievement = {
  id: string;
  palette: string;
  repo?: string;
  award: T;
  name: string;
  subtitle: T;
  org: T;
  date: T;
  description: T;
  role: T;
  tags: string[];
  images: { src: string; alt: T }[];
};

export const achievements: Achievement[] = [
  {
    id: "talentland",
    palette: "talent",
    award: { es: "Top 3 · Track IBM", en: "Top 3 · IBM Track" },
    name: "SUSVI / URBANIA",
    subtitle: { es: "Talent Land México 2026 — Ciudades Inteligentes & IA Generativa", en: "Talent Land Mexico 2026 — Smart Cities & Generative AI" },
    org: { es: "Hackathon IBM · Equipo Xolum", en: "IBM Hackathon · Team Xolum" },
    date: { es: "2026", en: "2026" },
    description: {
      es: "Senderos Urbanos Seguros, Verdes e Inteligentes: una plataforma que transforma datos urbanos recolectados en campo en inteligencia estratégica para obra pública. Analiza condiciones reales de seguridad e infraestructura a nivel de calle y genera diagnósticos y recomendaciones accionables para que las constructoras diseñen propuestas más competitivas en licitaciones.",
      en: "Safe, Green and Smart Urban Pathways: a platform that turns field-collected urban data into strategic intelligence for public works. It analyzes real street-level safety and infrastructure conditions and generates actionable diagnoses and recommendations so construction firms can craft more competitive bids.",
    },
    role: {
      es: "Mi rol: integración con IBM watsonx (modelo Granite 3-8B), backend, nube y diseño de la landing — conectando los datos de campo con la generación de insights por IA. Presentamos demo funcional y pitch ante mentores y expertos de IBM.",
      en: "My role: IBM watsonx integration (Granite 3-8B model), backend, cloud and landing design — connecting field data to AI-driven insight generation. We presented a working demo and pitch to IBM mentors and experts.",
    },
    tags: ["IBM watsonx", "Granite 3-8B", "GenAI", "Smart Cities", "Backend", "Cloud"],
    images: [
      { src: "talentland-podium.jpg", alt: { es: "Equipo en el podio de Talent Land México", en: "Team on the Talent Land Mexico stage" } },
      { src: "talentland-team.jpg", alt: { es: "Equipo Xolum con el equipo de Talent Land e IBM", en: "Team Xolum with Talent Land and IBM" } },
      { src: "talentland-cert.png", alt: { es: "Certificado de finalista Top 3", en: "Top 3 finalist certificate" } },
    ],
  },
  {
    id: "bob",
    palette: "bob",
    repo: "https://github.com/DDamianZR/pr-surgeon",
    award: { es: "Certificado · Desempeño destacado", en: "Certificate · Outstanding performance" },
    name: "PR Surgeon",
    subtitle: {
      es: "IBM Bob Hackathon 2026 — Descomposición inteligente de Pull Requests",
      en: "IBM Bob Hackathon 2026 — Intelligent Pull Request decomposition",
    },
    org: { es: "lablab.ai · IBM watsonx", en: "lablab.ai · IBM watsonx" },
    date: { es: "15–17 de mayo de 2026", en: "May 15–17, 2026" },
    description: {
      es: "Las migraciones empresariales generan Pull Requests gigantes (300+ archivos) que tardan semanas en revisarse, cuestan miles de dólares en horas de ingeniería e introducen regresiones. PR Surgeon descompone esos PRs monstruosos en 5–7 sub-PRs seguros y revisables: analiza las dependencias reales entre archivos (imports, referencias, herencia), agrupa el código fuertemente acoplado con detección de comunidades sobre un grafo y respeta las capas de la arquitectura.",
      en: "Enterprise migrations produce monster Pull Requests (300+ files) that take weeks to review, cost thousands in engineering time and introduce regressions. PR Surgeon decomposes those monster PRs into 5–7 safe, reviewable sub-PRs: it analyzes real inter-file dependencies (imports, references, inheritance), clusters tightly-coupled code with graph community detection and respects architectural layers.",
    },
    role: {
      es: "Construí la solución durante el IBM Bob Hackathon apoyándome en IBM Bob y su conciencia de repositorio para un análisis de dependencias confiable. Cada sub-PR se enriquece con descripción, evaluación de riesgo y sugerencia de revisores, y se visualiza como un grafo interactivo. Backend en FastAPI + networkx; frontend en Next.js + React Flow; integración con watsonx.ai.",
      en: "I built the solution during the IBM Bob Hackathon, leaning on IBM Bob's repository awareness for trustworthy dependency analysis. Each sub-PR is enriched with a description, risk assessment and reviewer suggestions, and visualized as an interactive graph. FastAPI + networkx backend; Next.js + React Flow frontend; watsonx.ai integration.",
    },
    tags: ["IBM watsonx", "IBM Bob", "FastAPI", "networkx", "Next.js", "React Flow", "Graph clustering"],
    images: [
      { src: "ibm-bob-cert.jpg", alt: { es: "Certificado del IBM Bob Hackathon otorgado a Diego Canales", en: "IBM Bob Hackathon certificate awarded to Diego Canales" } },
    ],
  },
  {
    id: "guardian",
    palette: "guardian",
    award: { es: "Prototipo funcional", en: "Working prototype" },
    name: "Guardian",
    subtitle: { es: "404: Threat Not Found — Digital Safety Hackathon (CDMX 2026)", en: "404: Threat Not Found — Digital Safety Hackathon (Mexico City 2026)" },
    org: { es: "Embajada de EE. UU. en México (INL) · StartupLab MX", en: "U.S. Embassy in Mexico (INL) · StartupLab MX" },
    date: { es: "Abril 24–26, 2026", en: "April 24–26, 2026" },
    description: {
      es: "En tres días intensos construimos Guardian, una plataforma de seguridad digital impulsada por IA para detectar, prevenir y mitigar riesgos en línea para menores. En lugar de plantear la supervisión como restricción, la enfocamos en detección de riesgos con IA, una experiencia gamificada de hábitos digitales sanos y herramientas de supervisión en tiempo real para padres.",
      en: "In three intense days we built Guardian, an AI-powered digital-safety platform to detect, prevent and mitigate online risks for minors. Instead of framing supervision as restriction, we focused on AI-driven risk detection, a gamified experience for healthy digital habits, and real-time supervision tools for parents.",
    },
    role: {
      es: "El sistema usa un enfoque híbrido de IA que combina procesamiento de lenguaje natural, visión por computadora y análisis contextual para clasificar riesgos en tiempo real (SAFE / WARNING / BLOCKED). La tecnología no solo debe escalar sistemas: debe proteger personas.",
      en: "The system uses a hybrid AI approach combining natural language processing, computer vision and contextual analysis to classify risks in real time (SAFE / WARNING / BLOCKED). Technology shouldn't only scale systems — it should protect people.",
    },
    tags: ["NLP", "Computer Vision", "Risk Classification", "TechForGood", "Cybersecurity"],
    images: [
      { src: "guardian-1.jpg", alt: { es: "Equipo del hackathon 404: Threat Not Found", en: "404: Threat Not Found hackathon team" } },
      { src: "guardian-2.jpg", alt: { es: "Trabajando en el prototipo Guardian", en: "Working on the Guardian prototype" } },
      { src: "guardian-3.jpg", alt: { es: "Presentación del proyecto Guardian", en: "Guardian project presentation" } },
    ],
  },
];

/* ── COMUNIDAD / SPEAKING ─────────────────────────────────────────────── */
export const community = {
  palette: "sice",
  kicker: { es: "Comunidad · Speaker", en: "Community · Speaker" },
  title: { es: "Agentes de IA: del prompt al sistema autónomo", en: "AI Agents: from prompt to autonomous system" },
  org: "SICE México",
  date: { es: "19 de mayo de 2026 · Virtual · Gratuita", en: "May 19, 2026 · Virtual · Free" },
  description: {
    es: "Masterclass que impartí junto a la comunidad de SICE México sobre cómo los sistemas de IA evolucionan hacia agentes autónomos capaces de razonar, usar herramientas, coordinarse y ejecutar tareas complejas en entornos reales.",
    en: "A masterclass I delivered with the SICE México community on how AI systems are evolving toward autonomous agents able to reason, use tools, coordinate and execute complex tasks in real environments.",
  },
  topics: [
    { es: "Arquitectura moderna de agentes: LLM + Tools + Memory + Planner", en: "Modern agent architecture: LLM + Tools + Memory + Planner" },
    { es: "MCP y comunicación Agent-to-Agent (A2A)", en: "MCP and Agent-to-Agent (A2A) communication" },
    { es: "Patrones: ReAct, Reflection y Multi-Agent", en: "Patterns: ReAct, Reflection and Multi-Agent" },
    { es: "Construcción de agentes con código real y LangGraph", en: "Building agents with real code and LangGraph" },
    { es: "Guardrails, testing y casos reales en fintech y healthcare", en: "Guardrails, testing and real cases in fintech and healthcare" },
    { es: "Cómo prepararse para el roadmap 2026–2027", en: "How to prepare for the 2026–2027 roadmap" },
  ] as T[],
};

/* ── EXPERIENCIA ──────────────────────────────────────────────────────── */
export type Job = {
  role: T; company: string; period: T; location: T; bullets: T[];
};

export const experience: Job[] = [
  {
    role: { es: "Desarrollador de Automatizaciones con IA", en: "AI Automation Developer" },
    company: "Eventos NB",
    period: { es: "Jul 2024 – 2026", en: "Jul 2024 – 2026" },
    location: { es: "CDMX (Híbrido)", en: "Mexico City (Hybrid)" },
    bullets: [
      { es: "Diseñé e implementé automatizaciones basadas en agentes de IA para procesos operativos y logísticos, reduciendo tiempos de ejecución en 30–40%.", en: "Designed and built AI-agent automations for operational and logistics processes, cutting execution times by 30–40%." },
      { es: "Desarrollé y optimicé agentes de IA para procesamiento de información, disminuyendo errores manuales en 25–35%.", en: "Developed and optimized AI agents for information processing, reducing manual errors by 25–35%." },
      { es: "Mantengo y monitoreo soluciones de automatización con disponibilidad operativa superior al 95%.", en: "Maintain and monitor automation solutions with over 95% operational uptime." },
      { es: "Identifiqué oportunidades de automatización que incrementaron la productividad en 20–30%.", en: "Identified automation opportunities that raised productivity by 20–30%." },
    ],
  },
  {
    role: { es: "Analista en Soporte Técnico", en: "Technical Support Analyst" },
    company: "Santory Internacional S.A. de C.V.",
    period: { es: "2022 – 2023", en: "2022 – 2023" },
    location: { es: "Nivel nacional", en: "Nationwide" },
    bullets: [
      { es: "Garanticé la continuidad operativa en sucursales a nivel nacional, resolviendo incidencias de hardware, software y redes con diagnóstico y soporte remoto.", en: "Ensured operational continuity across nationwide branches, resolving hardware, software and network incidents via diagnostics and remote support." },
      { es: "Aseguré la conectividad entre sucursales mediante la configuración de conexiones VPN sobre infraestructura interna.", en: "Secured inter-branch connectivity by configuring VPN connections over internal infrastructure." },
      { es: "Administré y di mantenimiento a servidores, contribuyendo a la disponibilidad de servicios internos.", en: "Administered and maintained servers, contributing to internal service availability." },
      { es: "Capacité a usuarios en herramientas tecnológicas, incrementando su autonomía y reduciendo tiempos de inactividad.", en: "Trained users on tech tools, increasing autonomy and reducing downtime." },
    ],
  },
];

export const education = [
  {
    school: "ESCOM — Instituto Politécnico Nacional",
    degree: { es: "Ingeniería en Inteligencia Artificial", en: "B.Eng. in Artificial Intelligence" },
    period: { es: "2024 – Actualidad", en: "2024 – Present" },
  },
  {
    school: "CECyT No. 3 \"Estanislao Ramírez Ruiz\" — IPN",
    degree: { es: "Técnico en Computación", en: "Computing Technician" },
    period: { es: "2019 – 2022", en: "2019 – 2022" },
  },
  {
    school: "Cambridge University Press & Assessment",
    degree: { es: "Cambridge English A2", en: "Cambridge English A2" },
    period: { es: "2018", en: "2018" },
  },
];

/* ── SKILLS ───────────────────────────────────────────────────────────── */
export const skills: { group: T; items: string[] }[] = [
  { group: { es: "Lenguajes", en: "Languages" }, items: ["Python", "C / C++", "Java"] },
  { group: { es: "IA & Agentes", en: "AI & Agents" }, items: ["LangGraph", "LangChain", "Ollama", "IBM watsonx", "Pydantic", "RAG", "NLP", "Computer Vision"] },
  { group: { es: "Datos & Automatización", en: "Data & Automation" }, items: ["Procesamiento de datos", "Automatización de procesos", "ChromaDB", "SQLite"] },
  { group: { es: "Infra & DevOps", en: "Infra & DevOps" }, items: ["Docker", "GitHub Actions / CI", "Redes", "VPN", "Servidores"] },
  { group: { es: "Herramientas", en: "Tools" }, items: ["Git", "Microsoft 365", "Telegram Bot API"] },
];
