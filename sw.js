const CACHE_NAME = 'mystery-box-v1';
const urlsToCache = [
    './',
    './index.html',
    './confetti.js',
    './School%20badge.png',
    './120%20logo.png',
    './IDcover.png',
    './Magnet.png',
    './Wclip.png',
    './Sclip.png',
    './CSBookmark.png',
    './Maths.png',
    './Physics.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return the cached version if found, otherwise fetch from internet
                return response || fetch(event.request);
            })
    );
});
