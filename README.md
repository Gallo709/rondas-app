# Rondas QR MVP

Versión base para registrar rondas con QR, fecha, hora y ubicación.

## Incluye
- index.html
- sw.js
- manifest.webmanifest

## Qué hace
- Detecta el punto desde la URL, por ejemplo: `index.html?p=PUNTO-001`
- Captura fecha y hora automáticamente
- Intenta obtener la ubicación GPS
- Guarda pendientes en localStorage
- Permite exportar registros en JSON
- Tiene una sincronización de prueba en modo local

## Puntos de prueba
- `PUNTO-001` = Garita principal
- `PUNTO-002` = Bodega

## Cómo probar
1. Abre `index.html` en el navegador.
2. Usa URLs como:
   - `index.html?p=PUNTO-001`
   - `index.html?p=PUNTO-002`
3. Presiona Registrar punto.

## Siguiente paso
Conectar a Firebase Firestore y publicarlo en GitHub Pages.
