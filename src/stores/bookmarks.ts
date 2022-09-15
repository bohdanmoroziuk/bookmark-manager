import { uid } from 'quasar';
import { defineStore } from 'pinia';

import { Bookmark, BookmarkBody, BookmarkId } from 'src/types';

export interface BookmarksStoreState {
  bookmarks: Bookmark[];
}

const createBookmark = (body: BookmarkBody): Bookmark => ({
  id: uid(),
  ...body,
});

export const useBookmarksStore = defineStore('bookmarks', {
  state: (): BookmarksStoreState => ({
    bookmarks: [],
  }),
  getters: {
    hasBookmarks(state: BookmarksStoreState) {
      return state.bookmarks.length > 0;
    },
  },
  actions: {
    addBookmark(body: BookmarkBody) {
      const bookmark = createBookmark(body);

      this.bookmarks = [bookmark, ...this.bookmarks];
    },
    editBookmark(id: BookmarkId, updates: Partial<BookmarkBody>) {
      this.bookmarks = this.bookmarks.map((bookmark) => (
        bookmark.id === id
          ? { ...bookmark, ...updates }
          : bookmark
      ));
    },
    deleteBookmark(id: BookmarkId) {
      this.bookmarks = this.bookmarks.filter((bookmark) => bookmark.id !== id);
    },
  },
});
