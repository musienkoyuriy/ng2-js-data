export const postRelations = {
  hasMany: {
    comment: {
      foreignKey: 'postId',
      localField: 'comments'
    }
  }
};

export const commentRelations = {
  belongsTo: {
    post: {
      foreignKey: 'postId',
      localField: 'post'
    }
  }
};
