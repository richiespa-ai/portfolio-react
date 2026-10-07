# Portfolio de Ricardo Español Rowe

Portfolio personal construido con React y TypeScript. Presenta mi perfil, mis habilidades y mis proyectos de automatización de procesos e IA aplicada.

Proyecto en desarrollo, dentro del Máster AI Maker & Automatizaciones (thePower Tech School).

## Qué incluye

- Presentación, sección "Sobre mí" y habilidades agrupadas por categoría.
- Proyectos en tarjetas, con filtro acumulativo por tecnología.
- Carga de los proyectos desde un archivo de datos, con estados de espera y de error.
- Español e inglés, con selector de idioma.
- Tema claro y oscuro: sigue la preferencia del sistema y recuerda la elección.
- Descarga del CV en el idioma activo.
- Diseño responsive.

## En construcción

- Detalle de cada proyecto en una ventana modal.
- Formulario de contacto con validación.
- Experiencia profesional y formación.
- Publicación con dominio propio.

## Tecnologías

- React 19 y TypeScript
- Vite
- Tailwind CSS 4
- Zustand, para el estado global (idioma y tema)
- TanStack Query, para la carga de datos

## Cómo ejecutarlo en local

Hace falta tener Node.js instalado.

    npm install
    npm run dev

La aplicación queda disponible en `http://localhost:5173`.

## Estructura

    public/
      cv/           CV en PDF, en español y en inglés
      data/         Datos de los proyectos
    src/
      components/   Componentes de la interfaz
      data/         Tipos, habilidades y textos en los dos idiomas
      lib/          Utilidades
      store/        Estado global

## Contacto

- Web: [ricardoespanolrowe.com](https://www.ricardoespanolrowe.com)
- LinkedIn: [linkedin.com/in/ricardo-español-rowe](https://www.linkedin.com/in/ricardo-espa%C3%B1ol-rowe/)
- Correo: ricardo@ricardoespanolrowe.com
