const staticCacheName = "site-static";

self.addEventListener('install', evt =>{
    console.log('service worker listening and has been installed')

    caches.open(staticCacheName).then(cache =>{
        cache.addAll([
            Array(staticCacheName, NamedNodeMap, Number, cache, Int16Array, String)
        ])
    })
});

//this is service worker file in this coders that 
