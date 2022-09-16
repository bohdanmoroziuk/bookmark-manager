<script setup lang="ts">
import { ref } from 'vue';

import { BookmarkBody } from 'src/types';

interface Emits {
  (event: 'submit', payload: BookmarkBody): void;
}

const emit = defineEmits<Emits>();

const formData = ref<BookmarkBody>({
  title: '',
  caption: '',
  image: '',
  url: '',
});

const handleSubmit = () => {
  emit('submit', formData.value);
};

const handleReset = () => {
  formData.value = {
    title: '',
    caption: '',
    image: '',
    url: '',
  };
};
</script>

<template>
  <div class="new-bookmark-page">
    <div style="max-width: 400px;">
      <q-form
        @submit="handleSubmit"
        @reset="handleReset"
        class="q-gutter-md"
      >
        <q-input
          dense
          outlined
          v-model="formData.title"
          label="Title"
        />

        <q-input
          dense
          outlined
          v-model="formData.caption"
          label="Caption"
        />

        <q-input
          dense
          outlined
          v-model="formData.image"
          label="Image"
        />

        <q-input
          dense
          outlined
          v-model="formData.url"
          label="Url"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>
