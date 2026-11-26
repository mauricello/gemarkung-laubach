// Retirement worker for previously installed versions; no caching.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('laubach-app-'))await caches.delete(k);await self.clients.claim();await self.registration.unregister();})()));
