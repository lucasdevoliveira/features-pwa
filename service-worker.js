const cache = "feature_pwa_v2";
const staticAssets = ["./", "./index.html"];
this.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cache).then(cache => {
      return cache.addAll(staticAssets);
    })
  );
});

this.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith("feature_pwa_"))
          .filter(cacheName => cacheName !== staticCacheName)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

this.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match("./app/pages/offline/index.html");
      })
  );
});
