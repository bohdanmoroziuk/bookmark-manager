<template>
  <div class="home-page">
    <bookmark-list
      :bookmarks="bookmarks"
      @delete="deleteBookmark"
      v-if="hasBookmarks"
    />
    <div v-else>
      You have no bookmarks yet. Try adding one.
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useBookmarksStore } from 'src/stores';
import { BookmarkList } from 'src/components';

const bookmarksStore = useBookmarksStore();

const { bookmarks, hasBookmarks } = storeToRefs(bookmarksStore);

const deleteBookmark = (id: string) => {
  bookmarksStore.deleteBookmark(id);
};
</script>
