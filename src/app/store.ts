import { DataStore, Record } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import { postSchema, commentSchema } from './schemas';
import { postRelations, commentRelations } from './relations';

export const ROOT = 'https://jsonplaceholder.typicode.com';

export const adapter = new HttpAdapter({
  basePath: ROOT
});

export const store = new DataStore({ });

store.registerAdapter('http', adapter, { 'default': true });

export interface IPost extends Record {
  userId: number;
  id: number;
  title: string;
  body: string;
}

store.defineMapper('post', {
  endpoint: 'posts',
  relations: postRelations
});

export interface IComment extends Record {
  id: number;
  name: string;
  postId: number;
  email: string;
  body: string;
}

store.defineMapper('comment', {
  endpoint: 'comments',
  relations: commentRelations
});
