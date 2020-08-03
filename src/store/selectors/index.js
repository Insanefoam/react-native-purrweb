export const selectColumns = (state) => state.columns;

export const selectCards = (state, id) => state.cards.filter((card) => card.columnId === id);

export const selectCommentsCount = (state, id) =>
  state.cards.filter((card) => card.id === id)[0].commentsIds.length;

export const selectCard = (state, id) => state.cards.filter((card) => card.id === id)[0];

export const selectColumnName = (state, id) =>
  state.columns.filter((column) => column.id === id)[0].title;

export const selectComments = (state, id) =>
  state.comments.filter((comment) =>
    state.cards.filter((card) => card.id === id)[0].commentsIds.includes(comment.id)
  );

export const selectComment = (state, id) =>
  state.comments.filter((comment) => comment.id === id)[0];

export const selectUserInfo = (state) => state.auth;
