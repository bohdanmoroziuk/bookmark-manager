export interface Bookmark {
  id: string;
  title: string;
  caption: string;
  url: string;
  image: string;
}

export type BookmarkId = Bookmark['id'];

export type BookmarkBody = Omit<Bookmark, 'id'>;
