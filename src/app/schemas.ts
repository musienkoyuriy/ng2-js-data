import { Schema } from 'js-data';

export const postSchema = {
  post: new Schema({
    properties: {
      id: { type: 'string '},
      userId: { type: 'string', indexed: true },
      title: { type: 'string' },
      body: { type: 'string' }
    }
  })
};
