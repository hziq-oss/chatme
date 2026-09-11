self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch handler untuk operasi rangkaian P2P
  e.respondWith(
    fetch(e.request).catch(() => new Response('Offline'))
  );
});
