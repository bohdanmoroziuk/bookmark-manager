<template>
  <div class="home-page">
    <div class="q-mb-md flex items-center justify-between">
      <q-input
        v-model.trim="searchTerm"
        placeholder="Search"
        type="search"
        outlined
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
        :to="{ name: 'new' }"
        color="primary"
        icon="add"
        label="Add"
        unelevated
      />
    </div>
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
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useBookmarksStore } from 'src/stores';
import { BookmarkList } from 'src/components';

const searchTerm = ref('');

const bookmarksStore = useBookmarksStore();

const { bookmarks, hasBookmarks } = storeToRefs(bookmarksStore);

const deleteBookmark = (id: string) => {
  bookmarksStore.deleteBookmark(id);
};
</script>
