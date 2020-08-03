import {
  ADD_CARD,
  DELETE_CARD,
  CHANGE_CARD_NAME,
  CHANGE_CARD_DESCRIPTION,
  ADD_COMMENT,
  SET_CARDS,
} from "store/constants/action_types";

export default function cards(state = [], { type, payload }) {
  switch (type) {
    case SET_CARDS:
      return payload.cards;
    case ADD_CARD:
      return [
        ...state,
        {
          id: payload.id,
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
        card.id === payload.id ? { ...card, title: payload.title } : card
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
    default:
      return state;
  }
}
