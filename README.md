# Portfolio de Ricardo Español Rowe

Portfolio personal construido con React y TypeScript. Presenta mi perfil, mi trayectoria y mis proyectos de automatización de procesos e IA aplicada.

Proyecto del Máster AI Maker & Automatizaciones (thePower Tech School).

## Qué incluye

- Navegación fija, con menú lateral en móvil.
- Presentación y sección "Sobre mí".
- Proyectos en tarjetas, con filtro acumulativo por tecnología y detalle en una ventana modal accesible.
- Experiencia profesional, habilidades agrupadas por categoría y formación.
- Formulario de contacto con validación.
- Carga de los proyectos desde un archivo de datos, con estados de espera y de error.
- Español e inglés, con selector de idioma.
- Tema claro y oscuro: sigue la preferencia del sistema y recuerda la elección.
- Descarga del CV en el idioma activo.
- Diseño responsive.

## En construcción

- Envío del formulario de contacto desde la propia página. Ahora abre el programa de correo del visitante.
- Publicación con dominio propio.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4
- Zustand, para el estado global (idioma y tema)
- TanStack Query, para la carga de datos
- shadcn/ui sobre Base UI, para los componentes de interfaz

## Cómo ejecutarlo en local

Hace falta tener Node.js instalado.

    npm install
    npm run dev

La aplicación queda disponible en `http://localhost:5173`.

## Estructura

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
