export const getColumns = (state) => state.columns;

export const getCards = (state, id) => state.cards.filter((card) => card.columnId === id);

export const getCommentsCount = (state, id) =>
  state.cards.filter((card) => card.id === id)[0].commentsIds.length;

export const getCard = (state, id) => state.cards.filter((card) => card.id === id)[0];

export const getColumnName = (state, id) =>
  state.columns.filter((column) => column.id === id)[0].title;

export const getComments = (state, id) =>
  state.comments.filter((comment) =>
    state.cards.filter((card) => card.id === id)[0].commentsIds.includes(comment.id)
  );

export const getUsername = (state) => state.auth.username;
