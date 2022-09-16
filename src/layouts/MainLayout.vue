<template>
  <q-layout view="hHh lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title shrink>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Bookmark Manager
        </q-toolbar-title>

        <breadcrumb-list />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list>
        <q-item
          v-for="link of links"
          clickable
          :key="link.title"
          :to="link.to"
          exact
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption v-if="link.caption">{{ link.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-md">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.name" />
          </transition>
        </router-view>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { BreadcrumbList } from 'src/components';

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const links = [
  {
    title: 'All bookmarks',
    caption: '',
    icon: 'bookmarks',
    to: {
      name: 'all-bookmarks',
    },
  },
  {
    title: 'New bookmark',
    caption: '',
    icon: 'bookmark_add',
    to: {
      name: 'new-bookmark',
    },
  },
  {
    title: 'Bin',
    caption: '',
    icon: 'delete',
    to: {
      name: 'bookmarks-bin',
    },
  },
];
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
