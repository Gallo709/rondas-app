const CACHE_NAME = 'rondas-mvp-v3';

const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Si es navegación a una página de tu app, devolver index.html desde caché
  if (event.request.mode === 'navigate' && url.origin === self.location.origin) {
    event.respondWith(
      caches.match('./index.html').then(cached => cached || fetch('./index.html'))
    );
    return;
  }

  // Para archivos estáticos, intentar caché primero
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});