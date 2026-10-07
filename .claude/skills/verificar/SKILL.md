---
name: verificar
description: >-
  Comprueba que el portfolio está bien antes de dar un cambio por terminado
  o de hacer commit. Revisa tipos, linter, textos en los dos idiomas, nombres
  de archivo, contenido y README. Úsala siempre al acabar una tarea y antes de
  cualquier commit. Disparadores - "verifica", "comprueba que todo está bien",
  "antes del commit", "¿está listo para subir?", "pasa las comprobaciones".
---

# Verificar el portfolio

Ejecuta los pasos en orden. Si uno falla, arréglalo y vuelve a empezar desde el paso 1. No des nada por terminado con un paso en rojo.

## Pasos

1. **Tipos.** Ejecuta `npx tsc -b`. Debe terminar sin salida.
2. **Linter.** Ejecuta `npm run lint`. Debe terminar con 0 warnings y 0 errores.
3. **Idiomas.** Todo texto visible que se haya añadido o cambiado existe en español y en inglés, y vive en `src/data/` o en `public/data/projects.json`, no dentro de un componente.
4. **Archivos.** Los componentes nuevos están en `src/components/` con mayúscula inicial. Nada propio dentro de `src/components/ui/`.
5. **Contenido.** Cualquier cifra, fecha o logro nuevo lo ha confirmado Ricardo y no contradice al CV de `public/cv/`. Si hay duda, pregunta antes de seguir.
6. **README.** Si se ha terminado una pieza, muévela de "En construcción" a "Qué incluye". Si se ha añadido una tecnología, añádela a "Tecnologías".

## Al terminar

Dile a Ricardo qué pasos has comprobado y con qué resultado, y propón el mensaje del commit. No hagas commit ni push hasta que él lo confirme.
