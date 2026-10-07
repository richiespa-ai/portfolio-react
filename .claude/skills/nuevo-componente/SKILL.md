---
name: nuevo-componente
description: >-
  Crea componentes nuevos de React en el portfolio siguiendo sus convenciones.
  Cubre ubicación, nombre de archivo, props tipadas, textos en los dos idiomas
  y colores de marca. Úsala siempre que haya que añadir, dividir o extraer un
  componente, o añadir una sección a la página. Disparadores - "crea un
  componente", "añade una sección", "nuevo componente del portfolio", "monta
  una tarjeta", "extrae esto a un componente".
---

# Nuevo componente

## Flujo de trabajo

1. **Decide de qué tipo es.**
   - Pieza propia del portfolio: archivo nuevo en `src/components/`, con mayúscula inicial y el mismo nombre que el componente (`Testimonials.tsx` contiene `Testimonials`).
   - Pieza genérica de interfaz (botón, campo, diálogo, panel): no la escribas a mano. Añádela con `npx shadcn@latest add <nombre>` y lee el archivo que crea en `src/components/ui/` antes de usarla, porque su forma de uso depende de la versión.
2. **Si es una sección nueva de la página, lee `seccion-nueva.md`** (en esta misma carpeta) antes de seguir. Una sección toca más sitios que su propio archivo.
3. **Textos.** Añádelos en `src/data/`, en español y en inglés, con un tipo que obligue a tener los dos idiomas (mira `contactTexts.ts` como modelo). El componente lee el idioma con `useSettings((state) => state.language)` y elige el bloque.
4. **Props.** Declara un tipo `NombreProps`. Un dato que puede faltar se marca con `?` y se comprueba antes de usarlo (mira `detail` en `ProjectCard.tsx`).
5. **Estilos.** Clases de Tailwind en el propio elemento. Color de marca con `brand`. Cada color con su variante `dark:`. Primero móvil, y `md:` o `lg:` para pantallas mayores. Clases condicionales con `cn()` de `@/lib/utils`.
6. **Accesibilidad.** Etiquetas con significado (`section`, `nav`, `ul`, `ol`). Cada campo con su `label`. Botones de alternar con `aria-pressed`. Enlaces externos en pestaña nueva con aviso (mira `Footer.tsx`).
7. **Pruébalo en el navegador** en español e inglés, en claro y en oscuro, y a ancho de móvil.

## Reglas duras

- Ningún texto visible escrito dentro del componente.
- Un componente por archivo, con `export default`.
- Nada propio dentro de `src/components/ui/`.
- No uses un efecto para algo que se puede calcular a partir de props o estado.
- No cambies el orden de las secciones en `App.tsx` sin preguntar a Ricardo.

## Verificación

Al terminar, ejecuta la skill `verificar`.
