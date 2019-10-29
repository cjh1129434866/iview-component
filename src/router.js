import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/component1'
    },
    {
      path: '/component1',
      name: 'component1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Component1.vue')
    },
    {
      path: '/component2',
      name: 'component2',
      component: () => import(/* webpackChunkName: "about" */ './views/Component2.vue')
    },
    {
      path: '/component3',
      name: 'component3',
      component: () => import(/* webpackChunkName: "about" */ './views/Component3.vue')
    },
    {
      path: '/component4',
      name: 'component4',
      component: () => import(/* webpackChunkName: "about" */ './views/Component4.vue')
    },
    {
      path: '/component5',
      name: 'component5',
      component: () => import(/* webpackChunkName: "about" */ './views/Component5.vue')
    },
    {
      path: '/component6',
      name: 'component6',
      component: () => import(/* webpackChunkName: "about" */ './views/Component6.vue')
    },
    {
      path: '/component7',
      name: 'component7',
      component: () => import(/* webpackChunkName: "about" */ './views/Component7.vue')
    },
    {
      path: '/component8',
      name: 'component8',
      component: () => import(/* webpackChunkName: "about" */ './views/Component8.vue')
    },
    {
      path: '/component9',
      name: 'component9',
      component: () => import(/* webpackChunkName: "about" */ './views/Component9.vue')
    },
    {
      path: '/component10',
      name: 'component10',
      component: () => import(/* webpackChunkName: "about" */ './views/Component10.vue')
    },
    {
      path: '/component11',
      name: 'component11',
      component: () => import(/* webpackChunkName: "about" */ './views/Component11.vue')
    }
  ]
})
