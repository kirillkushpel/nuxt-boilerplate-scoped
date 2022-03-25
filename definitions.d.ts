import VueRouter from 'vue-router';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtApp } from '@nuxt/types/app';

declare module 'vue/types/vue' {
  interface Vue {
    b: Block
    $nuxt: NuxtApp
  }
}

declare module 'vue-router' {
  interface Vue {
    $route: Route
    $router: VueRouter
  }
}

interface Block {
  (element?: string, mods?: ModsType | null): string;
  (mods?: ModsType): string;
}

interface ModsType {
  [key: string]: boolean | string | number | undefined;
}

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}
