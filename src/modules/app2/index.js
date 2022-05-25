import Vue from 'vue'
import VueRouter from 'vue-router'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

const router = new VueRouter({
  base: 'app2',
  mode: 'history',
  routes: [
    {
      path: '/foo',
      component: () => import('./Foo.vue')
    },
    {
      path: '/bar',
      component: () => import('./Bar.vue')
    },
    {
      path: '',
      redirect: '/foo'
    },
    {
      path: '*',
      redirect: '/foo'
    }
  ]
})

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    el: '#app',
    render(h) {
      return h(App)
    }
  }
})

export const bootstrap = [vueLifecycles.bootstrap]

export const mount = [vueLifecycles.mount]

export const unmount = [vueLifecycles.unmount]
