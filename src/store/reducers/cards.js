import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  INIT_CARDS,
  DELETE_COMMENT,
} from "../constants/action_types";

export default function cards(state = [], { type, payload }) {
  switch (type) {
    case INIT_CARDS:
      return payload.cards;
    case ADD_CARD:
      return [
        ...state,
        {
          id: Date.now(),
          title: payload.title,
          description: payload.description,
          checked: false,
          columnId: payload.columnId,
          commentsIds: [],
        },
      ];
    case DELETE_CARD:
      return state.filter((card) => card.id !== payload.id);
    case CHANGE_CARD_NAME:
      return state.map((card) =>
        card.id === payload.id ? { ...card, name: payload.title } : card
      );
    case CHANGE_CARD_DESCRIPTION:
      return state.map((card) =>
        card.id === payload.id ? { ...card, description: payload.description } : card
      );
    case ADD_COMMENT:
      return state.map((card) =>
        card.id === payload.cardId
          ? { ...card, commentsIds: [...card.commentsIds, payload.id] }
          : card
      );
    // case DELETE_COMMENT: {
    //   return state.map((card) =>
    //     card.id === payload.cardId
    //       ? {
    //           ...card,
    //           commentsIds: card.commentsIds.filter((commentId) => commentId !== payload.id),
    //         }
    //       : card
    //   );
    // }
    default:
      return state;
  }
}
