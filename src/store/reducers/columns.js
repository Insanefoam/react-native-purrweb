import { CHANGE_COLUMN_TITLE, ADD_COLUMN } from "../constants/action_types";

export default function columns(state = [], { type, payload }) {
  switch (type) {
    case CHANGE_COLUMN_TITLE:
      return state.map((column) =>
        column.columnId === payload.id ? { ...column, title: payload.name } : column
      );
    case ADD_COLUMN: {
      console.log("hello");
      return [...state, { columndId: Date.now(), title: "" }];
    }
    default:
      return state;
  }
}
