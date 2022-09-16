import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'all-bookmarks',
        meta: {
          breadcrumb: {
            label: 'All bookmarks',
            name: 'all-bookmarks',
          },
        },
        component: () => import('src/pages/AllBookmarksPage.vue'),
      },
      {
        path: 'new',
        name: 'new-bookmark',
        meta: {
          breadcrumb: {
            label: 'New bookmark',
            name: 'new-bookmark',
          },
        },
        component: () => import('src/pages/NewBookmarkPage.vue'),
      },
      {
        path: 'bin',
        name: 'bookmarks-bin',
        meta: {
          breadcrumb: {
            label: 'Bin',
            name: 'bookmarks-bin',
          },
        },
        component: () => import('src/pages/BookmarksBinPage.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        redirect: {
          name: '404',
        },
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {
      name: '404',
    },
  },
];

export default routes;
