import {
  describe,
  expect,
  it,
  beforeEach,
  jest,
} from '@jest/globals';
import { setActivePinia, createPinia } from 'pinia';

import { useBookmarksStore } from 'src/stores/bookmarks';

jest.mock('quasar', () => ({
  uid: () => '1',
}));

beforeEach(() => {
  setActivePinia(createPinia());
});

const mockBookmarkBody = {
  title: 'React',
  caption: 'A JavaScript library for building user interfaces',
  image: 'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1',
  url: 'https://reactjs.org/',
};

describe('bookmarks store', () => {
  it('adds a new bookmark', () => {
    const store = useBookmarksStore();

    expect(store.bookmarks.length).toBe(0);

    store.addBookmark(mockBookmarkBody);

    expect(store.bookmarks.length).toBe(1);
  });

  it('applies the update to the bookmark with the specified id', () => {
    const store = useBookmarksStore();

    store.addBookmark(mockBookmarkBody);

    store.editBookmark('1', { title: 'React Docs' })

    expect(store.bookmarks[0].title).toBe('React Docs');
  });

  it('deletes the bookmark by the specified id', () => {
    const store = useBookmarksStore();

    store.addBookmark(mockBookmarkBody);

    store.deleteBookmark('1');

    expect(store.bookmarks.length).toBe(0);
  });
});
