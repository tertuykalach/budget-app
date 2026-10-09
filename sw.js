{\rtf1\ansi\ansicpg1251\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var CACHE_NAME = 'pmm-cache-v35';\
var ASSETS = [\
  './',\
  './index.html',\
  './manifest.json',\
  './icon-192.png',\
  './icon-512.png'\
];\
\
self.addEventListener('install', function(event) \{\
  event.waitUntil(\
    caches.open(CACHE_NAME).then(function(cache) \{\
      return cache.addAll(ASSETS);\
    \})\
  );\
  self.skipWaiting();\
\});\
\
self.addEventListener('activate', function(event) \{\
  event.waitUntil(\
    caches.keys().then(function(keys) \{\
      return Promise.all(\
        keys.map(function(key) \{\
          if (key !== CACHE_NAME) \{\
            return caches.delete(key);\
          \}\
        \})\
      );\
    \})\
  );\
  self.clients.claim();\
\});\
\
self.addEventListener('fetch', function(event) \{\
  event.respondWith(\
    fetch(event.request).catch(function() \{\
      return caches.match(event.request);\
    \})\
  );\
\});}