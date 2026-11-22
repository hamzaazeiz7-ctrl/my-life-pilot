const V='mlp-v0.8.0';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  /* jamais d'interception de GitHub ni d'autres origines : une réponse périmée ne doit pas être prise pour l'état distant */
  if(e.request.method!=='GET'||u.origin!==self.location.origin)return;
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{
    if(r.ok&&r.status===200&&r.type==='basic'){const c=r.clone();caches.open(V).then(ch=>ch.put(e.request,c)).catch(()=>{})}
    return r;
  }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match('./index.html'))));
});
