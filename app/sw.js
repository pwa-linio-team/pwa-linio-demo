/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/pwa-linio-team\.github\.io\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'site-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/code\.jquery\.com\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'jquery-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/cdnjs\.cloudflare\.com\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'cloudflare-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/stackpath\.bootstrapcdn\.com\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'bootstrapcdn-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/i\.linio\.com\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'linio-resources',
  })
);

workbox.routing.registerRoute(
  /^https\:\/\/assets\.linio\.com\/(.*)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'assets-linio-resources',
  })
);

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-resources',
  }),
);
