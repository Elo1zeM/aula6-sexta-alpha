const CACHE_NAME = 'aula6-sexta-alpha-main'
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './assets/img/bene.webp',
    './assets/img/bravecto.webp',
    './assets/img/castra.webp',
    './assets/img/furolisin.webp',
    './assets/img/happydog.webp',
    './assets/img/logo.webp',
    './assets/img/logopwa.png',
    './assets/img/logopwa512.png',
    './assets/img/predd.webp',
    './assets/img/superfood.webp',
    './assets/img/whatsapp.webp',
    './assets/img/bene.webp',
];

//Instala o Serviço Worker e coloca os arquivos no Cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((chache) => {
            console.log('Cuidado do seu pet no cache! 🐕‍🦺🐈');
            return cache.addAll(ASSETS);
        })
    );
});

//Faz as requisições olharem pro cache primeiro
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

//Remove caches antigos quando atualizar
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});