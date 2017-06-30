# Revised @SaFrMO/hv-chat

Vue-Horizon chat app with the following mods:
Installed Vue Router
Created a splash test component before messages example app entry
This is a scaffolding point for future Vue/Horizon projects

How I think this works
- dev script seems to watch with webpack but does not use the vue dev server
- build builds
- hz is served over localhost:8181

For production / Future Improvements
-Vuex if necessary (should be as simple as --save with npm then setup accordingly)
-Changing the horizon server to serve on a docker instance
or
-Use Caddy as a reverse proxy to the localhost port
or
-Restructure the application to include the @horizon or the vue horizon package so that you can serve a regular build through caddy
or
-Attempt to serve this /build through caddy

## Build Setup

``` bash
# install dependencies
npm install

# webpack watch, no minification
npm run dev

# build for production with minification
npm run build

# start horizon
hz serve --dev
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
