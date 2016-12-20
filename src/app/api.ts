import { store, ROOT } from './store';

export const createPost = (data) => {
  return store.getAdapter('http').HTTP({
    method: 'post',
    url: `${ROOT}/posts`,
    data
  });
};

export const fetchPosts = () => {
  return store.findAll('post', {
      limit: 20
  });
};

export const getPost = (postId) => {
  return store.find('post', {
    where: {
      id: {
          '==': postId
      }
    }
  });
};

export const fetchComments = (postId) => {
  return store.findAll('comment', {
    limit: 5,
    where: {
      postId: {
        '==': postId
      }
    }
  });
};

export const updatePost = (postId, newData) => store.update('post', postId, newData);

export const deletePost = (postId) => store.destroy('post', postId);

