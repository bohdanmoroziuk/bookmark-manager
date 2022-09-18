<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

import { BookmarkBody } from 'src/types';
import { useBookmarksStore } from 'src/stores';
import { BookmarkForm } from 'src/components';

const $q = useQuasar();

const $router = useRouter();

const bookmarksStore = useBookmarksStore();

const addBookmark = async (body: BookmarkBody) => {
  try {
    $q.loadingBar.start();

    bookmarksStore.addBookmark(body);

    $q.notify({ type: 'positive', message: 'A new bookmark has been added.' });
    await $router.push({ name: 'all-bookmarks' });
  } catch (error) {
    $q.notify({ type: 'negative', message: (error as Error).message });
  } finally {
    $q.loadingBar.stop();
  }
};
</script>

<template>
  <div class="new-bookmark-page">
    <bookmark-form @submit="addBookmark" />
  </div>
</template>
