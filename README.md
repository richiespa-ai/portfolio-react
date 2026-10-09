# Portfolio de Ricardo Español Rowe

Portfolio personal construido con React y TypeScript. Presenta mi perfil, mi trayectoria y mis proyectos de automatización de procesos e IA aplicada.

Proyecto del Máster AI Maker & Automatizaciones (thePower Tech School). Desarrollado con asistencia de Claude (Anthropic).

Publicado en [portfolio.ricardoespanolrowe.com](https://portfolio.ricardoespanolrowe.com).

## Qué incluye

- Navegación fija, con menú lateral en móvil.
- Presentación y sección "Sobre mí".
- Proyectos en tarjetas, con filtro acumulativo por tecnología y detalle en una ventana modal accesible.
- Experiencia profesional, habilidades agrupadas por categoría y formación.
- Formulario de contacto con validación, que envía los mensajes con Netlify Forms (filtro de spam y aviso por correo).
- Carga de los proyectos desde un archivo de datos, con estados de espera y de error.
- Español e inglés, con selector de idioma.
- Tema claro y oscuro: sigue la preferencia del sistema y recuerda la elección.
- Descarga del CV en el idioma activo.
- Diseño responsive.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4
- Zustand, para el estado global (idioma y tema)
- TanStack Query, para la carga de datos
- shadcn/ui sobre Base UI, para los componentes de interfaz

## Trabajo con Claude Code

El repositorio está preparado para trabajar con Claude Code:

- `CLAUDE.md` describe el proyecto: stack, estructura, convenciones y reglas de contenido.
- `.claude/skills/` contiene procedimientos escritos para las tareas que se repiten:
  - `nuevo-componente`: crear un componente o una sección siguiendo las convenciones del proyecto.
  - `nuevo-proyecto`: añadir un proyecto a la rejilla, solo con datos verificados.
  - `verificar`: comprobaciones antes de cada commit (tipos, linter, idiomas, contenido y README).
- `.claude/agents/` contiene subagentes, que trabajan en su propio contexto y devuelven solo un informe:
  - `revisor-accesibilidad`: revisión de solo lectura de los componentes (nombres accesibles, etiquetas de formulario, jerarquía de títulos, idioma de la página y textos sin traducir). Devuelve cada problema con archivo, línea y severidad.
- `.claude/settings.json` define un hook: cada vez que Claude Code crea o edita un archivo, se le pasa Prettier de forma automática con el script `.claude/hooks/formatear.mjs`. Respeta lo excluido en `.prettierignore`.
- Servidores MCP: se probó el servidor oficial de GitHub y se retiró después de evaluarlo. La decisión y sus motivos están en `CLAUDE.md`.

## Integración continua

Cada pull request pasa por GitHub Actions (`.github/workflows/ci.yml`): instala las dependencias y ejecuta el linter, la comprobación de formato y el build. La rama `main` está protegida: solo admite cambios por pull request y con esas comprobaciones en verde.

## Publicación

La web se publica en Netlify cada vez que un cambio entra en `main`, en [portfolio.ricardoespanolrowe.com](https://portfolio.ricardoespanolrowe.com). El dominio se gestiona en Cloudflare, con un registro CNAME hacia Netlify, y el certificado HTTPS lo emite Netlify con Let's Encrypt.

Cada pull request genera además una vista previa en Netlify, con una franja arriba que indica el entorno. La configuración está en `netlify.toml`.

Elegí Netlify porque recibe el formulario de contacto sin necesidad de un servidor propio. Los motivos completos están en `CLAUDE.md`.

## Cómo ejecutarlo en local

Hace falta tener Node.js instalado.

        npm install
        cp .env.example .env.local
        npm run dev

En desarrollo, una franja amarilla arriba muestra el entorno. No aparece en la versión de producción.
La aplicación queda disponible en `http://localhost:5173`.

## Estructura

    .claude/agents/   Subagentes de revisión para Claude Code
    .claude/hooks/    Scripts que Claude Code ejecuta de forma automática
    .claude/skills/   Procedimientos para Claude Code
    public/
      cv/             CV en PDF, en español y en inglés
      data/           Datos de los proyectos
    src/
      components/     Componentes de la interfaz
      components/ui/  Componentes de shadcn/ui
      data/           Tipos, trayectoria, habilidades y textos en los dos idiomas
      lib/            Utilidades
      store/          Estado global

## Contacto

- Web: [ricardoespanolrowe.com](https://www.ricardoespanolrowe.com)
- LinkedIn: [linkedin.com/in/ricardo-español-rowe](https://www.linkedin.com/in/ricardo-espa%C3%B1ol-rowe/)
- Correo: ricardo@ricardoespanolrowe.com
