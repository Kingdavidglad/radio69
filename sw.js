self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('radio69-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/pwa-install.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});