<script setup lang="ts">
import { computed } from 'vue';

import { Bookmark } from 'src/types';

interface Props {
  bookmarks: Bookmark[];
}

const props = defineProps<Props>();

const hasBookmarks = computed(() => props.bookmarks.length > 0);
</script>

<template>
  <div v-if="hasBookmarks">
    <q-list>
      <q-item
        v-for="bookmark of bookmarks"
        :key="bookmark.id"
        :href="bookmark.url"
        tag="a"
        target="_blank"
        clickable
      >
        <q-item-section avatar>
          <img :src="bookmark.image" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ bookmark.title }}</q-item-label>
          <q-item-label caption>{{ bookmark.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <div v-else>
    You have no bookmarks yet. Try adding one.
  </div>
</template>

<style scoped>
img {
  max-width: 48px;
  width: 100%;
  height: auto;
}
</style>
