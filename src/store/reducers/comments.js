import {
  ADD_COMMENT,
  DELETE_COMMENT,
  CHANGE_COMMENT,
  SET_COMMENTS,
} from "../constants/action_types";

export default function comments(state = [], { type, payload }) {
  switch (type) {
    case SET_COMMENTS:
      return payload.comments;
    case ADD_COMMENT:
      return [
        ...state,
        {
          id: payload.id,
          body: payload.body,
          created: Date.now().toString(),
          userId: payload.userId,
        },
      ];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== payload.id);
    case CHANGE_COMMENT:
      return state.map((comment) =>
        comment.id === payload.id ? { ...comment, body: payload.body } : comment
      );
    default:
      return state;
  }
}
