import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hello from './components/hello.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/admin', component: App }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

window.addEventListener('load', function(){

    const horizon = Horizon()
    horizon.onReady( () => {
        new Vue({
          el: '#app',
          router,
          data: {
              horizon: horizon
          }
          
        }).$mount('#app')
    })
    horizon.connect()

})
