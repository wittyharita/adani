'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "398983934efff8eafd14b7850040cc0f",
"assets/assets/icons/assignment.svg": "942d73e4dd44928524ed0b95c801c97c",
"assets/assets/icons/desh.svg": "841c79a65755003b8a2b4f29e39a0cf1",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/email.svg": "07a0446d509403bd44c7a553c8c0b74b",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/Lock.svg": "a675d73d4ac2faab1b34422a5e972d08",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/manage.svg": "ecf52d6db2bd325d0339fbf7a9db3b46",
"assets/assets/icons/material.svg": "8ee9f63d552bf83cbb9335074be9f260",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/online.svg": "bd5066fb142af40475fb81dfb574d4e7",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/search2.svg": "6cc3c3ec40dd2fd37f3c2f812d53e12c",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/task.svg": "7bc75df356d91ef0d657e4e8709aa51b",
"assets/assets/icons/teacher.svg": "8ac8963cf589874b3af5ac9dc2a8d8fd",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/adani.png": "eaa6b31fc8bf5b03872e46f3d7f63a78",
"assets/assets/images/aiie.png": "bfdf073b44d03655d310510af47f8c49",
"assets/assets/images/aiim.png": "295e2afafd23ad316825c0b4f7dd2156",
"assets/assets/images/course1.png": "ae463c17ad3dd171c3a1a76a119dde5a",
"assets/assets/images/course2.png": "41ddb3a5bdbc9ed906d34c29ebe8050a",
"assets/assets/images/course3.png": "e0e22d08683b31be625442dbda98bfea",
"assets/assets/images/fb.png": "54926e4a9d76db213e9072e40bedcafc",
"assets/assets/images/gautam.png": "49ee9733228a91080c1b5b9b33c76d0d",
"assets/assets/images/insta.png": "b17d99ac2b6dfe78563b73a1b12a057b",
"assets/assets/images/linked.png": "7ef7ebe928079f36f128f8907d2158e8",
"assets/assets/images/logo.png": "97d8f13da533312bd94a2826585e9141",
"assets/assets/images/profile.png": "223a8bc2e2a001b6c57f888ef97b4ce6",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/tw.png": "9cfeee7054b3f11667985e56a6e5e7db",
"assets/assets/images/uni.png": "4ce844d48b6678565a4b78781107c571",
"assets/assets/images/vector.png": "dc029146f7f2c8c6c56b9701c2b5295c",
"assets/assets/images/Vector2.png": "dad1ad4512b61a7db4818b77fa77b386",
"assets/assets/images/yt.png": "de3cc3a83a7c94323e7499237d451ba6",
"assets/assets/placement/logo1.png": "37d4e14c8892b247390bab4ffc3d7fcc",
"assets/assets/placement/logo10.png": "5c715450612043ab75a3545f9c36a0a0",
"assets/assets/placement/logo11.png": "08df51e35e24c59477c7bd4b9e0ceffb",
"assets/assets/placement/logo12.png": "2b622d45cf77f7ee7ed9375ac49df680",
"assets/assets/placement/logo13.png": "0b167ab0ea967fc7708bb089aa38e5f2",
"assets/assets/placement/logo14.png": "9d1696c535e9064147851cb36928a6fc",
"assets/assets/placement/logo15.png": "09fccb2a6783eaa927eac8b276c7c65b",
"assets/assets/placement/logo16.png": "9b3135eed0103e3c0b893f422aa711f3",
"assets/assets/placement/logo17.png": "180e153fd757d3e028717254f060304d",
"assets/assets/placement/logo18.png": "7cf56725c327f68de511d313b7aa7cef",
"assets/assets/placement/logo19.png": "dfe42f61dfe427fa961891c2a6a4ffd6",
"assets/assets/placement/logo2.png": "43eb10864bf831b3eba0e668a8ab9380",
"assets/assets/placement/logo20.png": "549bb928f9fff8a216c82bd3315467b7",
"assets/assets/placement/logo21.png": "be47c29ab116406f407659629ab0e543",
"assets/assets/placement/logo22.png": "0475326890cfa2b0ec1dc0b83207ddff",
"assets/assets/placement/logo23.png": "f276d4c65944cac36db228d5935b3d62",
"assets/assets/placement/logo24.png": "8114bfae4903ec98f0bde95f5d5aca02",
"assets/assets/placement/logo25.png": "376901b54dec3b9c2bd411bd8982b638",
"assets/assets/placement/logo26.png": "ba5f239b388789b6f33bb205e05cd90e",
"assets/assets/placement/logo27.png": "9a07beb6b7c09a71a4c9b7219aed0d22",
"assets/assets/placement/logo28.png": "e6b62516bce67ce1845466c4c73e6475",
"assets/assets/placement/logo29.png": "c95be54574916bc291d802b0f4520099",
"assets/assets/placement/logo3.png": "b405e44cc5e2614aacf7a823f74702bc",
"assets/assets/placement/logo30.png": "bca648870ca3a849ca7c9c8df257870d",
"assets/assets/placement/logo31.png": "304a3b17e1ab981231bc48f96599db03",
"assets/assets/placement/logo32.png": "104543ab86de00e11ac6d1d361ac0417",
"assets/assets/placement/logo33.png": "7d73676466fb4651ea70df967eae8273",
"assets/assets/placement/logo34.png": "b8182f9b4e6f7f0d20d27730edc6bc7e",
"assets/assets/placement/logo35.png": "a5df232323e31376c4daa564018a5fda",
"assets/assets/placement/logo36.png": "b1b2c6303c9dc88cf71280ca094536b8",
"assets/assets/placement/logo37.png": "862ae6309146935d9a8fadef9878cbb1",
"assets/assets/placement/logo38.png": "b230c63bb9d4d91bc6592264bb10a4c8",
"assets/assets/placement/logo39.png": "d8c7f025e847e58abbe96a5282e252f6",
"assets/assets/placement/logo4.png": "5391d71828527a78a08eff0ca38e45fd",
"assets/assets/placement/logo40.png": "47f015cc6dce958a195abc86f07008b1",
"assets/assets/placement/logo41.png": "7b380acb620ae2fe968c9d0b354f53e6",
"assets/assets/placement/logo42.png": "37a6e4b392382cb1c12db725ad1d9dc4",
"assets/assets/placement/logo43.png": "c26b9a3e0869a7bd155a5d88a2ab1a51",
"assets/assets/placement/logo44.png": "1dd52e1959500216995c71b9ec462e0b",
"assets/assets/placement/logo45.png": "cd3ccd0b50c6282c9fcabe777d500def",
"assets/assets/placement/logo46.png": "4076ac5f22ad3b410e58d1689570d5ea",
"assets/assets/placement/logo47.png": "48d4aca146e024738301dd41e9cf7e9f",
"assets/assets/placement/logo48.png": "63e2cd91693a44377fe8f24240745e6d",
"assets/assets/placement/logo49.png": "8f754cac751e6b5846ece2d69def9086",
"assets/assets/placement/logo5.png": "8993fc10b48d9f0186b7573e79d91a9e",
"assets/assets/placement/logo6.png": "ad2d5d4f12f090c4ec89c288566b44fe",
"assets/assets/placement/logo7.png": "41971ce471844f8ca6b5e40a14990c50",
"assets/assets/placement/logo8.png": "b497e898a1f95856ede0101823866c97",
"assets/assets/placement/logo9.png": "7e46cd28de70a3f25dd37db16dd739f0",
"assets/assets/poster/class.png": "c3d3c4af6cd9229369609870eb97f17d",
"assets/assets/poster/event1.png": "849b6c17762e5a558883d4ca93bf03b0",
"assets/assets/poster/event2.png": "fdc5bbfbadbaf8e0ae4d9ba9badd461c",
"assets/assets/poster/event3.png": "ee5aa477ca58813e17f6863caaaf2abc",
"assets/assets/poster/gautam.png": "d170d46f96fcad4845db6349b5d257a2",
"assets/assets/poster/poster1.png": "013083ce97dedc7d02bb8197cc0c93dc",
"assets/assets/poster/poster1.svg": "a4b90f2097f4f0efbf28f4dab4bf9288",
"assets/assets/poster/poster2.png": "009614b5b38f5c959e9952276b92fd07",
"assets/assets/poster/poster2.svg": "0328dc7ab7a183a25358b128e25a4c0d",
"assets/assets/poster/poster3.png": "df3c501be9c89f899969f8f21b40911d",
"assets/assets/poster/poster3.svg": "ff1802383fda260fc0075ae122811bc7",
"assets/assets/poster/poster4.png": "59fba1d3112f87d5fe8c44b7d5ff7271",
"assets/assets/poster/poster4.svg": "6e748ea25d9850a753bc81694eb8c0ff",
"assets/assets/poster/poster5.png": "146cefb9f97347043aaeaa28d90b773d",
"assets/assets/poster/poster6.png": "33b7039d8ab9ba2c54e13e93a9419a1c",
"assets/assets/vector/assignment.svg": "942d73e4dd44928524ed0b95c801c97c",
"assets/assets/vector/desh.svg": "841c79a65755003b8a2b4f29e39a0cf1",
"assets/assets/vector/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/vector/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/vector/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/vector/email.svg": "07a0446d509403bd44c7a553c8c0b74b",
"assets/assets/vector/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/vector/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/vector/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/vector/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/vector/Lock.svg": "a675d73d4ac2faab1b34422a5e972d08",
"assets/assets/vector/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/vector/manage.svg": "ecf52d6db2bd325d0339fbf7a9db3b46",
"assets/assets/vector/material.svg": "8ee9f63d552bf83cbb9335074be9f260",
"assets/assets/vector/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/vector/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/vector/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/vector/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/vector/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/vector/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/vector/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/vector/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/vector/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/vector/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/vector/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/vector/online.svg": "bd5066fb142af40475fb81dfb574d4e7",
"assets/assets/vector/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/vector/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/vector/search2.svg": "6cc3c3ec40dd2fd37f3c2f812d53e12c",
"assets/assets/vector/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/vector/task.svg": "7bc75df356d91ef0d657e4e8709aa51b",
"assets/assets/vector/teacher.svg": "8ac8963cf589874b3af5ac9dc2a8d8fd",
"assets/assets/vector/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/vector/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/FontManifest.json": "ea6d749170f55efe17571d470b763a71",
"assets/fonts/Alata-Regular.ttf": "ef90e02223b26fc1c4d54b244852bf8c",
"assets/fonts/Lato-Regular.ttf": "3b9b99039cc0a98dd50c3cbfac57ccb2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Roboto-Bold.ttf": "60e4eb35e4532283be7a030d82b60afa",
"assets/fonts/Roboto-Regular.ttf": "fbd79c0a409a925126c37459e6f26dff",
"assets/NOTICES": "11a7ec29342ac62a6b38f180d19f1a2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0827c0902801999d9ffe4e0c3a639578",
"/": "0827c0902801999d9ffe4e0c3a639578",
"main.dart.js": "e04a9c76d55e869252413b1dc571fe3c",
"manifest.json": "65af1a60162c33347ca7d903c11af9b7",
"version.json": "85d29df6324dee7a6edff8926c68100f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
