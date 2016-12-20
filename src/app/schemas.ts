import { Schema } from 'js-data';

export const postSchema = new Schema({
  properties: {
    id: { type: 'string '},
    userId: { type: 'string', indexed: true },
    title: { type: 'string' },
    body: { type: 'string' }
  }
});

export const commentSchema = new Schema({
  properties: {
    id: { type: 'string '},
    postId: { type: 'number', indexed: true },
    name: { type: 'string' },
    email: { type: 'string' },
    body: { type: 'string' }
  }
});

