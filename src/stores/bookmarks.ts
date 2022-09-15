import { defineStore } from 'pinia';

import { Bookmark } from 'src/types';

export interface BookmarksStoreState {
  bookmarks: Bookmark[];
}

export const useBookmarksStore = defineStore('bookmarks', {
  state: (): BookmarksStoreState => ({
    bookmarks: [
      {
        id: '1',
        title: 'React',
        caption: 'A JavaScript library for building user interfaces',
        image: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1',
        url: 'https://reactjs.org/',
      },
    ],
  }),
  getters: {
    hasBookmarks(state: BookmarksStoreState) {
      return state.bookmarks.length > 0;
    },
  },
  actions: {
    deleteBookmark(id: string) {
      this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
    },
  },
});
