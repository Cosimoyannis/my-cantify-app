// service worker for basic offline view

const CACHE = "cantify-cache";
const offlineFallbackPage = 'errorpic.png';
const offlineFallbackPagetwo = 'offline.html'; 

var URLSTOCACHE = [offlineFallbackPage];

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
      }) ()
    );
  }
}); 


/*
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
  );
});
*/