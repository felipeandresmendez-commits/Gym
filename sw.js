const CACHE = "gymlog-v16";
// Instalación liviana: solo archivos pequeños, para que se complete en segundos aunque la señal sea mala.
const ASSETS = ["./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./ex-data.js"];
const PHOTOS = ["./ex/Band_Assisted_Pull-Up/0.jpg", "./ex/Band_Assisted_Pull-Up/1.jpg", "./ex/Barbell_Bench_Press_-_Medium_Grip/0.jpg", "./ex/Barbell_Bench_Press_-_Medium_Grip/1.jpg", "./ex/Barbell_Full_Squat/0.jpg", "./ex/Barbell_Full_Squat/1.jpg", "./ex/Barbell_Glute_Bridge/0.jpg", "./ex/Barbell_Glute_Bridge/1.jpg", "./ex/Barbell_Hip_Thrust/0.jpg", "./ex/Barbell_Hip_Thrust/1.jpg", "./ex/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg", "./ex/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg", "./ex/Bench_Dips/0.jpg", "./ex/Bench_Dips/1.jpg", "./ex/Cable_Crossover/0.jpg", "./ex/Cable_Crossover/1.jpg", "./ex/Cable_Crunch/0.jpg", "./ex/Cable_Crunch/1.jpg", "./ex/Cable_Hammer_Curls_-_Rope_Attachment/0.jpg", "./ex/Cable_Hammer_Curls_-_Rope_Attachment/1.jpg", "./ex/Cable_Rear_Delt_Fly/0.jpg", "./ex/Cable_Rear_Delt_Fly/1.jpg", "./ex/Cable_Rope_Overhead_Triceps_Extension/0.jpg", "./ex/Cable_Rope_Overhead_Triceps_Extension/1.jpg", "./ex/Calf_Press_On_The_Leg_Press_Machine/0.jpg", "./ex/Calf_Press_On_The_Leg_Press_Machine/1.jpg", "./ex/Crunches/0.jpg", "./ex/Crunches/1.jpg", "./ex/Dumbbell_Bench_Press/0.jpg", "./ex/Dumbbell_Bench_Press/1.jpg", "./ex/Dumbbell_Bicep_Curl/0.jpg", "./ex/Dumbbell_Bicep_Curl/1.jpg", "./ex/Dumbbell_Shoulder_Press/0.jpg", "./ex/Dumbbell_Shoulder_Press/1.jpg", "./ex/Dumbbell_Shrug/0.jpg", "./ex/Dumbbell_Shrug/1.jpg", "./ex/EZ-Bar_Curl/0.jpg", "./ex/EZ-Bar_Curl/1.jpg", "./ex/Face_Pull/0.jpg", "./ex/Face_Pull/1.jpg", "./ex/Flat_Bench_Lying_Leg_Raise/0.jpg", "./ex/Flat_Bench_Lying_Leg_Raise/1.jpg", "./ex/Goblet_Squat/0.jpg", "./ex/Goblet_Squat/1.jpg", "./ex/Incline_Dumbbell_Curl/0.jpg", "./ex/Incline_Dumbbell_Curl/1.jpg", "./ex/Incline_Dumbbell_Press/0.jpg", "./ex/Incline_Dumbbell_Press/1.jpg", "./ex/Leg_Extensions/0.jpg", "./ex/Leg_Extensions/1.jpg", "./ex/Leg_Press/0.jpg", "./ex/Leg_Press/1.jpg", "./ex/Lying_Leg_Curls/0.jpg", "./ex/Lying_Leg_Curls/1.jpg", "./ex/One-Arm_Dumbbell_Row/0.jpg", "./ex/One-Arm_Dumbbell_Row/1.jpg", "./ex/Pallof_Press/0.jpg", "./ex/Pallof_Press/1.jpg", "./ex/Romanian_Deadlift/0.jpg", "./ex/Romanian_Deadlift/1.jpg", "./ex/Seated_Cable_Rows/0.jpg", "./ex/Seated_Cable_Rows/1.jpg", "./ex/Side_Lateral_Raise/0.jpg", "./ex/Side_Lateral_Raise/1.jpg", "./ex/Smith_Machine_Bench_Press/0.jpg", "./ex/Smith_Machine_Bench_Press/1.jpg", "./ex/Split_Squat_with_Dumbbells/0.jpg", "./ex/Split_Squat_with_Dumbbells/1.jpg", "./ex/Standing_Biceps_Cable_Curl/0.jpg", "./ex/Standing_Biceps_Cable_Curl/1.jpg", "./ex/Standing_Cable_Wood_Chop/0.jpg", "./ex/Standing_Cable_Wood_Chop/1.jpg", "./ex/Standing_Calf_Raises/0.jpg", "./ex/Standing_Calf_Raises/1.jpg", "./ex/Standing_Low-Pulley_One-Arm_Triceps_Extension/0.jpg", "./ex/Standing_Low-Pulley_One-Arm_Triceps_Extension/1.jpg", "./ex/Standing_Military_Press/0.jpg", "./ex/Standing_Military_Press/1.jpg", "./ex/Stiff-Legged_Dumbbell_Deadlift/0.jpg", "./ex/Stiff-Legged_Dumbbell_Deadlift/1.jpg", "./ex/Thigh_Abductor/0.jpg", "./ex/Thigh_Abductor/1.jpg", "./ex/Thigh_Adductor/0.jpg", "./ex/Thigh_Adductor/1.jpg", "./ex/Triceps_Pushdown/0.jpg", "./ex/Triceps_Pushdown/1.jpg", "./ex/Wide-Grip_Lat_Pulldown/0.jpg", "./ex/Wide-Grip_Lat_Pulldown/1.jpg", "./ex/Arnold_Dumbbell_Press/0.jpg", "./ex/Arnold_Dumbbell_Press/1.jpg", "./ex/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/0.jpg", "./ex/Bent_Over_Dumbbell_Rear_Delt_Raise_With_Head_On_Bench/1.jpg", "./ex/Bodyweight_Squat/0.jpg", "./ex/Bodyweight_Squat/1.jpg", "./ex/Close-Grip_Front_Lat_Pulldown/0.jpg", "./ex/Close-Grip_Front_Lat_Pulldown/1.jpg", "./ex/Concentration_Curls/0.jpg", "./ex/Concentration_Curls/1.jpg", "./ex/Dead_Bug/0.jpg", "./ex/Dead_Bug/1.jpg", "./ex/Dumbbell_Flyes/0.jpg", "./ex/Dumbbell_Flyes/1.jpg", "./ex/Dumbbell_Lunges/0.jpg", "./ex/Dumbbell_Lunges/1.jpg", "./ex/Dumbbell_Step_Ups/0.jpg", "./ex/Dumbbell_Step_Ups/1.jpg", "./ex/Front_Dumbbell_Raise/0.jpg", "./ex/Front_Dumbbell_Raise/1.jpg", "./ex/Good_Morning/0.jpg", "./ex/Good_Morning/1.jpg", "./ex/Hammer_Curls/0.jpg", "./ex/Hammer_Curls/1.jpg", "./ex/Hyperextensions_Back_Extensions/0.jpg", "./ex/Hyperextensions_Back_Extensions/1.jpg", "./ex/Incline_Push-Up/0.jpg", "./ex/Incline_Push-Up/1.jpg", "./ex/Inverted_Row/0.jpg", "./ex/Inverted_Row/1.jpg", "./ex/Inverted_Row_with_Straps/0.jpg", "./ex/Inverted_Row_with_Straps/1.jpg", "./ex/Knee_Hip_Raise_On_Parallel_Bars/0.jpg", "./ex/Knee_Hip_Raise_On_Parallel_Bars/1.jpg", "./ex/Lying_Dumbbell_Tricep_Extension/0.jpg", "./ex/Lying_Dumbbell_Tricep_Extension/1.jpg", "./ex/Machine_Bench_Press/0.jpg", "./ex/Machine_Bench_Press/1.jpg", "./ex/One-Legged_Cable_Kickback/0.jpg", "./ex/One-Legged_Cable_Kickback/1.jpg", "./ex/Plank/0.jpg", "./ex/Plank/1.jpg", "./ex/Pullups/0.jpg", "./ex/Pullups/1.jpg", "./ex/Push-Ups_-_Close_Triceps_Position/0.jpg", "./ex/Push-Ups_-_Close_Triceps_Position/1.jpg", "./ex/Pushups/0.jpg", "./ex/Pushups/1.jpg", "./ex/Side_Bridge/0.jpg", "./ex/Side_Bridge/1.jpg", "./ex/Straight-Arm_Pulldown/0.jpg", "./ex/Straight-Arm_Pulldown/1.jpg", "./ex/Tricep_Dumbbell_Kickback/0.jpg", "./ex/Tricep_Dumbbell_Kickback/1.jpg"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {})); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE), ks = await caches.keys();
    // Conserva la última copia de la app de la versión anterior, para seguir funcionando sin internet.
    for (const u of ["./", "./index.html"]) { if (!(await c.match(u))) { const old = await caches.match(u); if (old) await c.put(u, old); } }
    await Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
  // Fotos en segundo plano, sin bloquear la actualización.
  caches.open(CACHE).then(c => Promise.allSettled(PHOTOS.map(u => c.match(u).then(h => h || c.add(u)))));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  const same = u.origin === location.origin;
  if (same && /\.(jpg|jpeg|png|svg|webp)$/.test(u.pathname)) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })));
    return;
  }
  if (!same) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; }).catch(() => hit)));
    return;
  }
  // App y datos: se pide siempre la última versión al servidor. Si tarda más de 3 s se muestra la copia
  // guardada, pero la descarga sigue en segundo plano y queda lista para la próxima vez que se abra.
  const net = fetch(e.request, { cache: "no-cache" }).then(r => { if (r && r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; });
  e.waitUntil(net.catch(() => {}));
  e.respondWith(new Promise(res => {
    let done = false;
    const fallback = () => caches.match(e.request).then(hit => hit || caches.match("./index.html"));
    const t = setTimeout(() => fallback().then(hit => { if (hit && !done) { done = true; res(hit); } }), 3000);
    net.then(r => { if (!done) { done = true; clearTimeout(t); res(r); } })
       .catch(() => fallback().then(hit => { if (!done) { done = true; clearTimeout(t); res(hit || Response.error()); } }));
  }));
});
