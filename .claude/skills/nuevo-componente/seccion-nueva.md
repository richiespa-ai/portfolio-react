# Añadir una sección a la página

Una sección no es solo su archivo. Toca seis sitios, y si falta uno la página queda incoherente: un enlace que no lleva a nada, un título en un solo idioma o una sección que no aparece.

## Los seis sitios

1. **El componente**, en `src/components/`. Envuelve el contenido en `<Section id="..." title={...}>`. `Section.tsx` ya pone el título, el espaciado y la línea separadora: no los repitas.
2. **El ancla.** El `id` va en minúsculas, en español, sin tildes y con guiones: `sobre-mi`, `experiencia`, `contacto`.
3. **El título, en los dos idiomas**, en `src/data/`. No lo escribas dentro del componente.
4. **El enlace en la navegación.** Añade una entrada a la lista `links` de `Navbar.tsx`, con el `href` igual al ancla y el `label` tomado del mismo título de la sección. Esa lista pinta a la vez la barra de escritorio y el panel de móvil. Si el título es largo y no cabe, añade una versión corta en `navTexts`, como "Experiencia".
5. **Su sitio en `App.tsx`.** Importa el componente y colócalo dentro de `<main>`. El orden de esas líneas es el orden de la página: pregunta a Ricardo dónde va antes de colocarlo.
6. **El README.** Añade la sección a "Qué incluye".

## Comprobación específica

- El enlace de la barra lleva a la sección y el título no queda tapado por la barra fija.
- En móvil, el enlace aparece en el panel lateral y el panel se cierra al pulsarlo.
- El título cambia al cambiar de idioma, tanto en la sección como en la barra.
