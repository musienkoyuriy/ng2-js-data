export const postRelations = {
  belongsTo: {
    user: {
      foreignKey: 'userId',
      localField: 'user'
    }
  },
  hasMany: {
    comment: {
      foreignKey: 'postId',
      localField: 'comments'
    }
  }
};

export const commentRelations = {
  belongsTo: {
    user: {
      foreignKey: 'userIid',
      localField: 'user'
    },
    post: {
      foreignKey: 'postId',
      localField: 'post'
    }
  }
};
