// service worker for basic offline view

const CACHE = "cantify-cache";
const offlineFallbackPage = 'offline.html'; 
const errorpic = 'noconnec.png'; 

var URLSTOCACHE = [offlineFallbackPage, errorpic];

self.addEventListener("install", async event  => {
  // store files in cache 
event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URLSTOCACHE)));
});



self.addEventListener("fetch", event => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;
          if (preloadResp) {
            return preloadResp;
          }
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(offlineFallbackPage);
          return cachedResp;
        }
      })()
    );


  } else if (event.request.url.endsWith('noconnec.png')) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(event.request);
        if (cachedResp) {
          return cachedResp;
        }
        const networkResp = await fetch(event.request);
        await cache.put(event.request, networkResp.clone());
        return networkResp;
      })()
    );


  } 
});

