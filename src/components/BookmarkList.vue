<script setup lang="ts">
import { Bookmark } from 'src/types';

interface Props {
  bookmarks: Bookmark[];
}

interface Emits {
  (event: 'delete', payload: string): void;
}

defineProps<Props>();

const emit = defineEmits<Emits>();

const fallbackImage = 'https://cdn.quasar.dev/logo-v2/svg/logo.svg';

const handleDelete = (id: string) => {
  emit('delete', id);
};
</script>

<template>
  <q-list separator>
    <q-item
      v-for="bookmark of bookmarks"
      :key="bookmark.id"
    >
      <q-item-section avatar>
        <img :src="bookmark.image || fallbackImage" :alt="bookmark.title" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ bookmark.title }}</q-item-label>
        <q-item-label caption v-if="bookmark.caption">{{ bookmark.caption }}</q-item-label>
        <a
          class="text-primary"
          :href="bookmark.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ bookmark.url }}
        </a>
      </q-item-section>

      <q-item-section side>
        <div class="flex items-center q-gutter-x-md">
          <q-btn
            class="q-pa-sm"
            size="sm"
            color="primary"
            icon="open_in_new"
            unelevated
            :href="bookmark.url"
            target="_blank"
          />
          <q-btn
            class="q-pa-sm"
            size="sm"
            color="red"
            icon="delete"
            unelevated
            @click="handleDelete(bookmark.id)"
          />
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>
img {
  max-width: 48px;
  width: 100%;
  height: auto;
}
</style>
