import { CHANGE_COLUMN_TITLE, ADD_COLUMN, INIT_COLUMNS } from "../constants/action_types";

export default function columns(state = [], { type, payload }) {
  switch (type) {
    case INIT_COLUMNS:
      return payload.columns;
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
