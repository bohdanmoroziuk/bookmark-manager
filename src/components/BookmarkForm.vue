<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { QForm } from 'quasar';
import cloneDeep from 'lodash/cloneDeep';

import { required, url } from 'src/validation-rules';
import { BookmarkBody } from 'src/types';

interface Emits {
  (event: 'submit', payload: BookmarkBody): void;
}

const emit = defineEmits<Emits>();

const formRef = ref<QForm>();

const initialFormData: BookmarkBody = {
  title: '',
  caption: '',
  image: '',
  url: '',
};

const formData = ref<BookmarkBody>(cloneDeep(initialFormData));

const reset = () => {
  formData.value = cloneDeep(initialFormData);
  formRef.value?.resetValidation();
};

const submit = async () => {
  emit('submit', formData.value);

  await nextTick();

  reset();
};
</script>

<template>
  <div class="new-bookmark-page">
    <div class="container">
      <q-form
        class="q-gutter-md"
        ref="formRef"
        @submit="submit"
        @reset="reset"
      >
        <q-input
          dense
          outlined
          v-model.trim="formData.title"
          label="Title *"
          :rules="[required]"
        />

        <q-input
          dense
          outlined
          v-model.trim="formData.caption"
          label="Caption"
        />

        <q-input
          dense
          outlined
          v-model.trim="formData.image"
          label="Image"
          :rules="[url]"
        />

        <q-input
          dense
          outlined
          v-model.trim="formData.url"
          label="Url *"
          :rules="[required, url]"
        />

        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  width: 100%;
}
</style>
