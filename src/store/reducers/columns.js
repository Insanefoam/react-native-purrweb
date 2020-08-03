import {
  CHANGE_COLUMN_TITLE,
  ADD_COLUMN,
  SET_COLUMNS,
  DELETE_COLUMN,
} from "store/constants/action_types";

export default function columns(state = [], { type, payload }) {
  switch (type) {
    case SET_COLUMNS:
      return payload.columns;
    case CHANGE_COLUMN_TITLE:
      return state.map((column) =>
        column.id === payload.id ? { ...column, title: payload.title } : column
      );
    case ADD_COLUMN:
      return [...state, { id: payload.id, title: payload.title }];
    case DELETE_COLUMN:
      return state.filter((column) => column.id !== payload.id);
    default:
      return state;
  }
}
