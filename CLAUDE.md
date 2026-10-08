# Portfolio de Ricardo Español Rowe

Portfolio personal en React. Presenta el perfil, la trayectoria y los proyectos de Ricardo, que busca un rol de AI Operations o automatización de procesos. Es el proyecto 3 del Máster AI Maker (thePower Tech School).

Ricardo está aprendiendo React con este proyecto. Explica siempre qué cambias y por qué, y avanza en pasos pequeños.

## Comandos

- `npm run dev`: servidor de desarrollo en `http://localhost:5173`.
- `npx tsc -b`: comprobación de tipos de todo el proyecto. Sin salida significa sin errores.
- `npm run lint`: linter (oxlint).
- `npm run build`: comprobación de tipos y build de producción.

Tras instalar o desinstalar paquetes, si la página sale en blanco, reinicia con `npm run dev -- --force`.

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, Zustand (idioma y tema), TanStack Query (carga de proyectos) y shadcn/ui sobre Base UI.

## Estructura

- `public/cv/`: CV en PDF, en español y en inglés. Los nombres de archivo son fijos: se sustituye el PDF, nunca se renombra.
- `public/data/projects.json`: los proyectos que muestra la rejilla.
- `src/components/`: componentes propios del portfolio.
- `src/components/ui/`: componentes copiados por shadcn. Se añaden con `npx shadcn@latest add <nombre>` y se pueden adaptar.
- `src/data/`: tipos y contenido (textos, trayectoria, habilidades).
- `src/store/settings.ts`: store de Zustand con idioma y tema.
- `src/App.tsx`: orden de las secciones de la página.

## Convenciones

- Los componentes de React llevan mayúscula inicial en el nombre de archivo (`Contact.tsx`) y van en `src/components/`. El resto de archivos, en minúscula. El servidor de publicación distingue mayúsculas de minúsculas.
- Los imports usan el alias `@/`, que apunta a `src/`.
- Todo texto visible existe en español y en inglés. Los textos no se escriben dentro de los componentes: viven en `src/data/` y se eligen con el idioma del store.
- El color de marca es `brand` (`text-brand`, `bg-brand`, `border-brand`). No uses `accent` para eso: es un color de shadcn.
- Cada color lleva su variante `dark:`. El modo oscuro se activa con la clase `dark` en `<html>`.
- Un dato que se repite se escribe en un solo sitio. Ejemplo: el correo de contacto está en `src/data/contactTexts.ts`.
- Las variables de entorno se leen solo en `src/lib/env.ts`, nunca con `import.meta.env` en los componentes. Cada variable nueva se añade a `.env.example` y a `src/vite-env.d.ts`.

## Contenido

- Solo datos verificados. No inventes cifras, fechas ni logros. Si falta un dato, pregúntaselo a Ricardo antes de escribir.
- El contenido debe coincidir con el CV de `public/cv/`. Si un cambio contradice al CV, avisa.
- No publiques el volumen mensual de solicitudes de la herramienta de bajas ni cifras de ahorro en licencias.
- Los proyectos personales se muestran solo con datos ficticios, nunca con datos bancarios reales.

## Git

- Rama `main`. Un commit por pieza terminada, con el mensaje en español y en presente: "Añade...", "Corrige...".
- No hagas push sin que Ricardo lo pida.
- Antes de cada commit, ejecuta la skill `verificar`.

## Servidores MCP

Decisión del 08/10/2026, tras evaluar con cinco criterios: frecuencia, herramientas, mantenimiento, permisos y CLI equivalente.

- GitHub (servidor oficial, ámbito de proyecto): instalado y probado abriendo el issue #1; después retirado. Se usaría menos de una vez por semana, expone 47 herramientas para usar una, y `git` y `gh` cubren lo mismo desde la terminal. El token se revocó.
- Medición con `/context`: retirarlo bajó de 141 a 95 herramientas y de 618 a 616 tokens, porque las herramientas se cargan bajo demanda. El coste de un servidor sin usar no es el contexto, sino la credencial activa y su mantenimiento.
- Los conectores de la cuenta de claude.ai (Gmail, Google Drive, Docs, Sheets, Calendar, Claude Docs e Indeed) aparecen también aquí, pero se configuran desde la cuenta, no desde este repositorio.
- Antes de añadir un servidor nuevo: demostrar el cuello de botella (cuántas veces por semana y qué cuesta cada vez) y probar primero la CLI equivalente.