self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('modevillage-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
