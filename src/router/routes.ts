import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'new',
        name: 'new',
        component: () => import('src/pages/NewBookmarkPage.vue'),
      },
      {
        path: 'trash',
        name: 'trash',
        component: () => import('pages/TrashPage.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {
      name: '404',
    },
  },
];

export default routes;
