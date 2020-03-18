const cache = "feature_pwa_v1";
const staticAssets = [
    './',
    './index.html'
];
this.addEventListener('install', event => {
    event.waitUntil(caches.open(cache).then(cache => {
        console.log('opened cache');
        return cache.addAll(staticAssets);
    }));
});
