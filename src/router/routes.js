
const routes = [
  {
    path: '/',
    component: () => import('layouts/CmdLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CmdPage.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/info', component: () => import('pages/InfoPage.vue') },
      { path: '/working', component: () => import('pages/DeployMent.vue') },
      { path: '/avg', component: () => import('pages/AvgPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
