'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "dbd2bfdd8d859c0f804c8240669eec29",
"assets/assets/langs/ar.json": "87f756ef5bcb1b5ecd02375d20cc9d21",
"assets/assets/langs/en.json": "29a09f7054969bfe21e1ebb31c6f347f",
"assets/assets/langs/zh.json": "d86abaa615ce0a0a80e828668fc4b179",
"assets/assets/ma-skv/bg-blue.png": "b81840aaf0034aaf4c7cdde6807dc3a7",
"assets/assets/ma-skv/bg-red.png": "046d78da63e8a6f5755cf6d4265dcbb6",
"assets/assets/ma-skv/bg-yellow.png": "457b168fa00d8871518f7c4423ec1899",
"assets/assets/ma-skv/contactme.png": "f02780b1f48adbce924173b22600521c",
"assets/assets/ma-skv/design.png": "fd6490de538f01cbc48fda4055145b10",
"assets/assets/ma-skv/dev1.png": "3fdbcba873482ee98d0e3f640551e8e1",
"assets/assets/ma-skv/dev2.png": "197de0a42f7da4d0880fd5acc1aac6be",
"assets/assets/ma-skv/gradient-path.png": "4ed0ba2b52d8e60b05384b44e7b57ad5",
"assets/assets/ma-skv/langSkill.png": "f4af2ebc98e32dbf6519b9590b1b2712",
"assets/assets/ma-skv/stars-bg.jpg": "12afa9dd76bf026d0cd47c2467471a3d",
"assets/FontManifest.json": "f1308f20d3c82fcfe4bb971e9aa36c6d",
"assets/fonts/BebasNeue/BebasNeue-Regular.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"assets/fonts/Buxton/buxton-sketch.ttf": "39bb198735c6eb2a9ee468cb33f5f7a7",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Montserrat/Montserrat-Black.ttf": "27e3649bab7c62fa21b8837c4842e40e",
"assets/fonts/Montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/fonts/Montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/Montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/fonts/Montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/fonts/Muli/Muli-Black.ttf": "ba313804f1ed0a7dbe5437ec2e33abf3",
"assets/fonts/Muli/Muli-Bold.ttf": "44ea8275e878ed72a9c8a393f9de12d2",
"assets/fonts/Muli/Muli-ExtraBold.ttf": "bc7c6887977f1ea2e272e71ebaa87649",
"assets/fonts/Muli/Muli-ExtraLight.ttf": "e43348aaf94887a6a72b6e470844b7f7",
"assets/fonts/Muli/Muli-Light.ttf": "d80af0828fe7e5236cb28e3bbcdf9e87",
"assets/fonts/Muli/Muli-Regular.ttf": "e063a333cc9d58a3ad85d5cd86bf92d5",
"assets/fonts/Muli/Muli-SemiBold.ttf": "3217b2cde8e4451eb8a8572d39798598",
"assets/fonts/Nunito/Nunito-Black.ttf": "900caa7db580afb9489434ed9ce5c978",
"assets/fonts/Nunito/Nunito-Bold.ttf": "a8c930b08cd5fda37ea9f1c105d1ac61",
"assets/fonts/Nunito/Nunito-ExtraBold.ttf": "14f2f203c4644e945a9e80e4d8f9a615",
"assets/fonts/Nunito/Nunito-ExtraLight.ttf": "a2f61593a1f33e5088345eccbb69c3f9",
"assets/fonts/Nunito/Nunito-Light.ttf": "f7fb34d1eab74a26abdb832e3db8dbde",
"assets/fonts/Nunito/Nunito-Regular.ttf": "e9f64790b131c08d6b34a9ecdc453876",
"assets/fonts/Nunito/Nunito-SemiBold.ttf": "bb52b80a026d5b8ab09c4640b711153a",
"assets/NOTICES": "a2a60b69c8b294a212c102a0d4c17158",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7e40ef7711e2ede403496d5bca876ab5",
"/": "7e40ef7711e2ede403496d5bca876ab5",
"main.dart.js": "755947706d999dec8ce529fb7ebb366f",
"manifest.json": "382ceefa56cd803f149dc25be3274a29",
"version.json": "0313160163f2e6ef86e83f237cf0b044"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
