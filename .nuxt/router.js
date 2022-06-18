import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34d2feb0 = () => interopDefault(import('..\\pages\\AllUsers.vue' /* webpackChunkName: "pages/AllUsers" */))
const _adeda028 = () => interopDefault(import('..\\pages\\CreateUserLog.vue' /* webpackChunkName: "pages/CreateUserLog" */))
const _5b5c14da = () => interopDefault(import('..\\pages\\Log.vue' /* webpackChunkName: "pages/Log" */))
const _60e1251c = () => interopDefault(import('..\\pages\\Loghome.vue' /* webpackChunkName: "pages/Loghome" */))
const _f4beb3e8 = () => interopDefault(import('..\\pages\\notification.vue' /* webpackChunkName: "pages/notification" */))
const _43311e40 = () => interopDefault(import('..\\pages\\pop.vue' /* webpackChunkName: "pages/pop" */))
const _5c1d211e = () => interopDefault(import('..\\pages\\SuperUserLoghome.vue' /* webpackChunkName: "pages/SuperUserLoghome" */))
const _5b9fb98c = () => interopDefault(import('..\\pages\\tags.vue' /* webpackChunkName: "pages/tags" */))
const _f864d196 = () => interopDefault(import('..\\pages\\UpdateUser.vue' /* webpackChunkName: "pages/UpdateUser" */))
const _6d6b8e06 = () => interopDefault(import('..\\pages\\userdetails.vue' /* webpackChunkName: "pages/userdetails" */))
const _aea35afe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _95fdfdae = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllUsers",
    component: _34d2feb0,
    name: "AllUsers"
  }, {
    path: "/CreateUserLog",
    component: _adeda028,
    name: "CreateUserLog"
  }, {
    path: "/Log",
    component: _5b5c14da,
    name: "Log"
  }, {
    path: "/Loghome",
    component: _60e1251c,
    name: "Loghome"
  }, {
    path: "/notification",
    component: _f4beb3e8,
    name: "notification"
  }, {
    path: "/pop",
    component: _43311e40,
    name: "pop"
  }, {
    path: "/SuperUserLoghome",
    component: _5c1d211e,
    name: "SuperUserLoghome"
  }, {
    path: "/tags",
    component: _5b9fb98c,
    name: "tags"
  }, {
    path: "/UpdateUser",
    component: _f864d196,
    name: "UpdateUser"
  }, {
    path: "/userdetails",
    component: _6d6b8e06,
    name: "userdetails"
  }, {
    path: "/",
    component: _aea35afe,
    name: "index"
  }, {
    path: "/:id",
    component: _95fdfdae,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
