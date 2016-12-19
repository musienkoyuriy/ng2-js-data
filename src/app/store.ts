import { DataStore, Record } from 'js-data';
import { HttpAdapter } from 'js-data-http';
import { postSchema } from './schemas';

const ROOT = 'https://jsonplaceholder.typicode.com';

export const adapter = new HttpAdapter({
  basePath: ROOT
});

export const store = new DataStore({ });

store.registerAdapter('http', adapter, { 'default': true });

export interface IPost extends Record {
  userId: number;
  id: string|number;
  title: string;
  body: string;
}

store.defineMapper('post', {
  endpoint: 'posts',
  schema: postSchema
});