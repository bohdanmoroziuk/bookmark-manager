<template>
  <div class="home-page">
    <bookmark-list :bookmarks="bookmarks" />
  </div>
</template>

<script setup lang="ts">
import { BookmarkList } from 'src/components';

const bookmarks = [
  {
    id: '1',
    title: 'React',
    caption: 'A JavaScript library for building user interfaces',
    image: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1',
    url: 'https://reactjs.org/',
  },
];
</script>
