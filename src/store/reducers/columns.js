import { CHANGE_COLUMN_TITLE, ADD_COLUMN } from "../constants/action_types";

export default function columns(state = [], { type, payload }) {
  switch (type) {
    case CHANGE_COLUMN_TITLE:
      return state.map((column) =>
        column.id === payload.id ? { ...column, title: payload.title } : column
      );
    case ADD_COLUMN: {
      return [...state, { id: Date.now(), title: payload.title }];
    }
    default:
      return state;
  }
}
