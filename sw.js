const CACHE_NAME = 'web-vessel-v1';
const urlsToCache = [
  '/web-vessel/',
  '/web-vessel/app.html',
  '/web-vessel/apps.js',
  '/web-vessel/inject.js',
  '/web-vessel/themes/matrix.css',
  '/web-vessel/themes/dark.css',
  '/web-vessel/themes/discord.css',
  '/web-vessel/themes/notion.css',
  '/web-vessel/themes/gmail.css',
  '/web-vessel/themes/default.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache error:', err))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => fetch(event.request))
  );
});
