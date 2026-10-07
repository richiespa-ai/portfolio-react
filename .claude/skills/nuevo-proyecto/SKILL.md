---
name: nuevo-proyecto
description: >-
  Añade un proyecto a la rejilla del portfolio, o modifica uno existente, en
  public/data/projects.json, con sus textos en español e inglés, sus
  tecnologías y su detalle. Úsala siempre que haya que añadir, actualizar o
  quitar un proyecto. Disparadores - "añade un proyecto", "nuevo proyecto al
  portfolio", "añade la tarjeta de", "actualiza el proyecto", "he terminado
  un proyecto del curso".
---

# Nuevo proyecto en el portfolio

## Antes de escribir nada

Pide a Ricardo los datos que falten. No los deduzcas ni los completes por tu cuenta:

- Nombre del proyecto y una frase de resumen.
- Tecnologías que ha usado de verdad.
- El punto de partida, lo que hizo y el resultado.
- Si hay cifras: de dónde salen y si se pueden publicar.

## Flujo de trabajo

1. **Lee `public/data/projects.json`** y el tipo `Project` de `src/data/projects.ts`, para seguir la forma de los proyectos que ya hay.
2. **Añade el proyecto al final de la lista**, salvo que Ricardo indique otra posición. Campos: `id` (único, en minúsculas, sin tildes, con guiones), `title`, `summary`, `technologies` y `detail`, con sus tres apartados `problem`, `solution` y `result`. Cada texto lleva `es` y `en`.
3. **Tecnologías.** Escribe cada nombre exactamente igual que en los proyectos existentes: el filtro agrupa por texto exacto, y "Javascript" junto a "JavaScript" crearía dos botones. Si una tecnología es nueva en el portfolio, añádela también a `technologies` en `src/data/skills.ts`, y pregunta a Ricardo qué nivel le corresponde.
4. **Inglés.** Tradúcelo y pide a Ricardo que lo revise: es bilingüe y lo juzga mejor.
5. **JSON válido.** Comillas dobles en claves y textos, y sin coma después del último elemento.
6. **Pruébalo en el navegador.** La tarjeta aparece, el filtro muestra sus tecnologías, el detalle se abre y todo cambia al cambiar de idioma.

## Reglas duras

- Aplica las reglas de la sección "Contenido" de `CLAUDE.md`. Aquí no se repiten.
- Un resultado sin datos se describe sin cifras: "Terminada y en funcionamiento". Nunca se adorna.
- Fechas fijas, no duraciones que caducan: "en uso desde julio de 2026", no "lleva tres meses en uso".
- Una cifra estimada se escribe como estimación: "unas 2 horas", "unos 5 minutos".
- Un ejercicio del máster se presenta como ejercicio del máster.

## Verificación

Al terminar, ejecuta la skill `verificar`.
