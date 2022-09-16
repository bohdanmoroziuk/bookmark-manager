<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { useRoute } from 'vue-router';

import { Breadcrumb } from 'src/types';

const route = useRoute();

const breadcrumbs = computed(() => (
  route.matched
    .filter((record) => record.meta.breadcrumb)
    .map((record) => record.meta.breadcrumb)
)) as ComputedRef<Breadcrumb[]>;
</script>

<template>
  <q-breadcrumbs class="q-mx-md" active-color="white">
    <q-breadcrumbs-el
      v-for="breadcrumb of breadcrumbs"
      :key="breadcrumb.name"
      :label="breadcrumb.label"
      :to="{ name: breadcrumb.name }"
      icon="widgets"
    />
  </q-breadcrumbs>
</template>
