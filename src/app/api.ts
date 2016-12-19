import { IPost, store } from './store';

export const createPost = (data): Promise<IPost> => {
  return store.create('post', data);
};

export const fetchPosts = (): Promise<IPost> => {
  return store.findAll('post', {
      limit: 20
  });
};

export const getPost = (postId): Promise<IPost> => {
  return store.find('post', {
    where: {
      id: {
          '==': id
      }
    }
  });
};

export const updatePost = (postId, newData): Promise<IPost> => store.update('post', postId, newData);

export const deletePost = (postId, ): Promise<IPost> => store.destroy('post', postId);

