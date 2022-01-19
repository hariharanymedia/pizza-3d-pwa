const staticDevPizza = "pizz-3d"
const assets = [
  "/",
  "/index.html",
  "/index.css",
  "/index.js",
  "/assets/icons/pizza.png",
  "/assets/models/basePizza.glb",
  "/assets/models/tomato.glb",
  "/assets/models/corn.glb",
  "/assets/models/greenPepper.glb",
  "/assets/models/yellowPepper.glb",
  "/assets/models/redPepper.glb",
  "/assets/models/onion.glb",
  "/assets/models/onion_ring.glb",
  "/assets/models/tofu_model.glb",
  "/assets/models/tofu.glb",
];

/** Cache the assets */
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPizza).then(cache => {
      cache.addAll(assets)
    })
  );
});

/** Fetch Assets */
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })