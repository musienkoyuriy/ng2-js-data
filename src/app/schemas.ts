import { Schema } from 'js-data';

export const postSchema = {
  post: new Schema({
    properties: {
      id: { type: 'string '},
      user_id: { type: 'string', indexed: true },
      title: { type: 'string' },
      content: { type: 'string' }
    }
  })
};
