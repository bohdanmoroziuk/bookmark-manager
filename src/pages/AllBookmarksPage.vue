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
        :to="{ name: 'new-bookmark' }"
        color="primary"
        icon="add"
        label="Add"
        unelevated
      />
    </div>
    <bookmark-list
      v-if="hasBookmarks"
      :bookmarks="bookmarks"
      @delete="deleteBookmark"
    />
    <div v-else>
      You have no bookmarks yet. Try adding one.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuasar } from 'quasar';

import { useBookmarksStore } from 'src/stores';
import { BookmarkList } from 'src/components';

const $q = useQuasar();

const searchTerm = ref('');

const bookmarksStore = useBookmarksStore();

const { bookmarks, hasBookmarks } = storeToRefs(bookmarksStore);

const deleteBookmark = (id: string) => {
  try {
    $q.loadingBar.start();

    bookmarksStore.deleteBookmark(id);

    $q.notify({ type: 'positive', message: 'Bookmark has been deleted.' });
  } catch (error) {
    $q.notify({ type: 'negative', message: (error as Error).message });
  } finally {
    $q.loadingBar.stop();
  }
};
</script>
