export {};

import { Breadcrumb } from 'src/types';

declare module 'vue-router' {
  interface RouteMeta {
    breadcrumb?: Breadcrumb;
  }
}
