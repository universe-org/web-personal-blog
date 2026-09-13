---
name: portfolio-conventions
description: Convenciones de devopsuniverse-portfolio (Astro estático, EN/ES, GitHub Pages, diseño "blueprint"). Úsala antes de tocar CSS, colores, tipografía, layout, rutas /en/ y /es/, los archivos de src/data/, los componentes de hoja, o de agregar una integración de Astro. Responde dónde va una regla CSS, por qué un estilo "no se aplica", qué token usar y qué strings se traducen.
---

# Convenciones del portafolio

Sitio Astro estático, bilingüe EN/ES, desplegado a GitHub Pages. Sin framework UI, sin Tailwind,
sin dependencias de runtime más allá de Astro. **Astro `^7.3.2`, y requiere Node ≥ 22.12**
(declarado en `engines`; el workflow de deploy usa Node 22 — si bajas uno, baja el otro).

El diseño es **"blueprint"**: un plano técnico. Papel cuadriculado, hairlines duras, esquinas a
90° (`border-radius: 0` en todo), tipografía geométrica y un diagrama real como pieza central.
Todo lo que agregues debe leerse como parte de ese plano.

## 1. Arquitectura de páginas — lo primero que hay que entender

Las páginas de `src/pages/` son **wrappers de ~10 líneas**. Todo el contenido vive en un
componente de hoja compartido que recibe `lang`:

```astro
---
import Base from "../../layouts/Base.astro";
import RecordSheet from "../../components/RecordSheet.astro";
import { ui } from "../../data/site";
const lang = "es";
---
<Base lang={lang} title={ui[lang].resume.heading}>
  <RecordSheet lang={lang} />
</Base>
```

| Ruta | Componente |
|---|---|
| `/{lang}/` | `HomeSheet.astro` |
| `/{lang}/resume/` | `RecordSheet.astro` |
| `/{lang}/portfolio/` | `WorkSheet.astro` |
| `/{lang}/talks/` | `TalksSheet.astro` |
| `/{lang}/blog/` | `NotesSheet.astro` |
| `/{lang}/contact/` | `ContactSheet.astro` |

**No hay numeración de hojas.** Se quitó a propósito: nada de "Hoja 02 — …" en eyebrows,
títulos de panel ni en el title block. No la reintroduzcas.

**Nunca pongas markup ni estilos en un archivo de `src/pages/`.** Esa es la regla que impide que
EN y ES vuelvan a divergir: hay una sola implementación por hoja y el idioma es un parámetro.
Si una página necesita algo distinto, va dentro del componente, condicionado por `lang`.

Dos componentes de figura, aparte de las hojas:

- `TopologyFigure.astro` — el diagrama del hero (Fig. 01). Los nombres de nodo son productos,
  así que no se traducen; solo `caption` y `center` entran como props.
- `TalksMap.astro` — el mapamundi de charlas (Fig. 02), dentro de `TalksSheet`.

### El contrato `data-country`

El mapa y la lista de charlas se resaltan mutuamente, y lo hacen **sin conocerse**: ambos marcan
sus elementos con `data-country="<ISO alpha-2>"`, y un único script en `TalksSheet.astro` alterna
`.is-linked` (filas), `.is-active` (países y marcadores). Cada componente estiliza su propio
estado activo. Si agregas otra vista que deba participar del resaltado, márcala igual y el script
la toma sola.

## 2. Dónde vive el CSS

| Lugar | Alcance | Para qué |
|---|---|---|
| `<style is:global>` en `src/layouts/Base.astro` | global, en capas | tokens, reset, tipografía base, shell (title bar, title block) y los primitivos compartidos |
| `<style>` en un componente de hoja | **scoped** | todo lo propio de esa hoja (`.hero`, `.exp-row`, `.work-card`, `.note-row`) |

¿Lo usan 2+ hojas? → `Base.astro`, dentro de la capa que corresponda. ¿Una sola? → el `<style>`
del componente. Nunca en ambos.

## 3. La cascada, resuelta con `@layer`

`Base.astro` declara el orden una sola vez:

```css
@layer tokens, base, layout, components;
```

Todo el CSS global vive dentro de una de esas capas. El `<style>` de un componente es **scoped y
sin capa**, y el CSS sin capa siempre gana sobre el CSS en capas — sin importar la especificidad.

**Consecuencias prácticas:**

- **No escribas `!important`. Nunca.** El repo tiene exactamente cero (había 31). Si tu regla no
  se aplica, no es especificidad: revisa el selector.
- **No uses `style=` inline para color ni tipografía.** Rompe el theming: los tokens cambian con
  el tema y un valor inline no. Para layout de un solo uso tampoco hace falta — ponlo en el
  `<style>` scoped del componente, que ya gana.
- Dentro de `Base.astro`, respeta la capa: un token va en `tokens`, una regla de elemento en
  `base`, el shell en `layout`, un primitivo reutilizable en `components`.

## 4. Tokens — no inventes colores

Definidos en `:root` (claro) y `html.dark` (oscuro) dentro de `@layer tokens`. Usa siempre
`var(--x)`. **Todo token de color debe existir en los dos bloques**, o el tema oscuro se rompe.

```
--bg --bg-2 --bg-3          papel / panel / realce
--text --text-2 --text-3    tinta / cuerpo / etiquetas y meta
--rule                      hairline estructural — la firma del diseño
--rule-2                    divisores suaves, bordes de celda
--grid                      líneas del papel cuadriculado (fondo del body)
--accent                    verde profundo (claro) / menta (oscuro)
--accent-ink                texto sobre --accent
--accent-soft               relleno tenue del acento (nav activa, hover)
--font-sans (IBM Plex Sans)  --font-mono (IBM Plex Mono)
--sheet-w 1280px            ancho máximo del contenido
--pad clamp(1.25rem,4vw,4rem)  padding lateral, compartido por shell y hojas
--ease 140ms ease           toda transición
```

No hay `--radius`: el diseño no tiene esquinas redondeadas. No las agregues.

### Tipografía

- **IBM Plex Sans** (`--font-sans`): fuente del `body`, títulos y prosa.
- **IBM Plex Mono** (`--font-mono`): etiquetas, cifras, fechas, tags, nav, eyebrows, title block,
  `<code>` y los textos del diagrama. Siempre en mayúsculas con `letter-spacing` cuando es etiqueta.
- Las dos son de la misma superfamilia, a propósito: IBM la encargó para su identidad de
  ingeniería y el plano se lee como un solo sistema. **No las cambies por una geométrica de moda**
  (Space Grotesk, Inter y compañía se probaron y se descartaron por genéricas).
- IBM Plex es **humanista, no geométrica**: pide tracking más suelto. Los títulos van en
  `-0.018em`, no en `-0.03em`; si aprietas más, los contraformas se cierran.
- **No** uses mono para prosa (ledes, bullets, descripciones).
- Se cargan con un único `<link>` a Google Fonts en `Base.astro`. ¿Otro peso? Edita ese query
  string; no agregues un segundo `<link>`.

### Paleta de vendors

`Certification.color` (`resume.ts`) es `cncf | hashi | azure | aws | github | gcp | gray`.
Se consume de dos formas, ambas definidas **solo** en `Base.astro`, cada una con su variante oscura:

```astro
<span class={`tag cert-${group.color}`}>{item.name}</span>
<p class={`vendor vendor-${group.color}`}>{group.vendor}</p>
```

Si agregas un vendor: el tipo en `resume.ts`, `.cert-X` y `.vendor-X` en claro, y los overrides
`html.dark .cert-X` / `html.dark .vendor-X`. Los seis existentes cubren la unión completa.

## 5. Primitivos compartidos

Están en `@layer components` de `Base.astro`. Úsalos antes de inventar uno:

- `.panel` + `.panel-head` (`.panel-title`, `.panel-note`) — la caja rotulada, unidad base de la página.
- `.cells` + `.cells-2/3/4` + `.cell` — rejilla de compartimentos. Los divisores se dibujan con
  `gap: 1px` sobre un fondo `--rule-2`; **no pongas bordes en los hijos**, se duplican y fallan al envolver.
- `.eyebrow` — etiqueta con guion sobre el título. **Solo se usa en el home**, con el cargo
  (`siteConfig.title[lang]`). En las demás hojas se omite: repetiría el `<h1>`, que es
  exactamente el defecto que tenía el diseño anterior.
- `.lede` — el párrafo introductorio bajo el `<h1>`.
- `.tag` — etiqueta de dimensión. Envuelve sola; no le pongas `white-space: nowrap` (los certs
  largos desbordan el viewport en móvil).
- `.btn-row` + `.btn` / `.btn-primary` — botones agrupados en una sola caja con bordes compartidos.
- `.figure-value` / `.figure-label` — las cifras grandes.
- `.status-dot` — el punto de disponibilidad.

Dentro de un componente, un patrón recurrente es `.rows` (lista con `gap: 1px` sobre `--rule-2`),
el equivalente vertical de `.cells`.

## 6. Rutas e i18n

```
src/pages/index.astro                     → redirect a /en/
src/pages/{en,es}/{index,resume,portfolio,talks,blog,contact}.astro
src/pages/blog/*.md                       → contenido, NO duplicado por idioma
```

- Agregar una página = dos wrappers (uno por idioma) + un componente de hoja + una entrada en
  `navItems` de `Base.astro`.
- El toggle EN/ES y el `hreflang` usan `pathname.replace('/'+lang, ...)`. Por eso **toda ruta
  lleva prefijo de idioma y termina en `/`**.

### Qué se traduce y dónde

| Contenido | Fuente |
|---|---|
| Labels de UI, nav, headings, ledes, placeholders, servicios | `ui[lang]` en `src/data/site.ts` |
| Roles, bullets, descripciones, categorías de skills | `Record<"en"\|"es", …>` en `src/data/resume.ts` |
| Títulos y descripciones de proyectos | `Record<"en"\|"es", …>` en `src/data/projects.ts` |
| Títulos y extractos de posts | `Record<"en"\|"es", …>` en `src/data/posts.ts` |
| Títulos y descripciones de charlas | `Record<"en"\|"es", …>` en `src/data/talks.ts` |
| Nombres propios: vendors, certs, tags, stack, empresas, eventos, nodos del diagrama | **no se traducen** |

**Cero strings visibles hardcodeados en `.astro`.** Si falta una clave, agrégala en `site.ts` en
los dos idiomas — las ramas `en` y `es` de `ui` deben ser simétricas.

## 7. Datos (`src/data/`)

- **`site.ts`** — `siteConfig` (identidad, URL, social, `cvUrl`, `availableForWork`) y `ui`
  (árbol de strings por idioma, `as const`).
- **`resume.ts`** — interfaces primero, luego `certifications`, `experience`, `openSource`,
  `skills`, `education`, `stats`. `stats` alimenta las cifras del home: **actualízalo a mano**
  al agregar un cert o un proyecto OSS, no se deriva solo.
- **`projects.ts`** — `Project[]` con `slug`, `categories: ProjectCategory[]` y `tags`.
  `repoUrl`/`demoUrl` son opcionales: **omítelos** si el repo es privado, no pongas placeholder.
- **`talks.ts`** — charlas. Exporta `talksSorted` (próximas primero, luego pasadas de más
  reciente a más antigua), `isUpcoming()` y `talkCounts`. **El estado próxima/pasada se calcula
  desde `date` en cada build**, no hay flag manual que se quede obsoleto. Los slides van en
  `slidesFile` (PDF en `public/slides/`) y/o `slidesUrl` (deck externo); si no hay ninguno, la
  fila muestra el aviso correspondiente. `country` (ISO alpha-2) enlaza la charla con el mapa y
  `mode` distingue presencial de virtual — una charla virtual igual se plotea en el país del evento.
- **`worldMap.ts`** — **archivo generado, no lo edites a mano.** Sale de Natural Earth 1:110m
  (dominio público, sin requisito de atribución) vía `scripts/generate-world-map.mjs`. Las
  dependencias del generador son build-time y **a propósito no están en `package.json`**, para no
  romper el presupuesto de cero dependencias en runtime:
  `npm i --no-save world-atlas topojson-client d3-geo i18n-iso-countries` y después
  `node scripts/generate-world-map.mjs src/data/worldMap.ts`. Pesa ~155 KB e infla la página de
  charlas a ~54 KB gzipped; es el precio del mapa y ya está medido.
- **`posts.ts`** — índice de notas; exporta `postsByDate` (más reciente primero), que es lo que
  consume `NotesSheet`. `published: false` o ausente ⇒ se lista como "próximamente".
- Agregar una categoría de proyecto = el tipo, `ui.portfolio.filter*` en los dos idiomas, y el
  array `filters` de `WorkSheet.astro`.

## 8. Build, deploy e integraciones

- `npm run dev` / `build` / `preview`. Output `static`, `site: https://www.devopsuniverse.cloud`,
  `base: "/"` (dominio propio vía `public/CNAME`) — **no cambies `base`**.
- `.github/workflows/deploy.yml` despliega en push a `main` con `npm ci` (no `npm install`: el
  build sigue el lockfile exacto). Pasa `GITHUB_SHA` al build: aparece como `Rev.` en el title block.
- **Mantén `astro` al día.** Todas las alertas de Dependabot que tuvo este repo venían de un solo
  paquete: Astro 4.15 desactualizado. `vite`, `esbuild` y `sharp` son dependencias suyas, no del
  proyecto — no las toques por separado. Revisa con `npm audit`.
- **Integraciones con `npx astro add <nombre>`**, no editando `package.json` + `astro.config.mjs`
  a mano. `integrations: []` está vacío hoy.
- No agregues dependencias de runtime sin preguntar. El presupuesto es HTML + CSS y los scripts
  inline del layout (tema con `localStorage`, menú móvil) más el filtro de `WorkSheet`.
- El tema se aplica con un `<script is:inline>` en el `<head>` **antes del primer paint**. Si
  tocas el theming, no rompas eso o vuelve el flash de tema incorrecto.

## 9. Antes de dar por terminado un cambio visual

- Míralo en **los dos temas** (el toggle está en la title bar) — un color nuevo sin su variante
  en `html.dark` se ve mal solo en oscuro.
- Míralo a **375px**. El sitio tiene cero scroll horizontal en las cinco hojas; mantenlo así
  (`document.documentElement.scrollWidth - clientWidth === 0`).
- `npm run build` debe pasar limpio.

## 10. Pendientes conocidos

No son convención, son trabajo sin terminar. Si tocas uno, resuélvelo:

- `talks.ts` tiene las fechas de las tres charlas con `[REPLACE]`, y ninguna con slides
  enlazados. La fecha decide si una charla sale como dictada o próxima.
- `projects.ts` tiene URLs `github.com/[REPLACE]/…` — links rotos en producción.
- `FORMSPREE_ID` sigue en `YOUR_FORMSPREE_ID` en los dos `contact.astro`; el form detecta que no
  está configurado y muestra el mensaje de error en vez de enviar al vacío.
- `src/pages/blog/devsecops-github-actions.md` es plantilla con `[REPLACE]`, y ningún post enlaza
  todavía a su detalle (`published` es `undefined` en todos).


## 11. Commits

Conventional commits con scope de área: `feat(home):`, `style(base):`, `fix(resume):`,
`refactor(i18n):`. El scope es la hoja o el componente tocado.
