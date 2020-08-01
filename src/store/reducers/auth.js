import { INIT_USER, LOGOUT_USER } from "../constants/action_types";

export default function auth(state = { name: "", token: "" }, { type, payload }) {
  switch (type) {
    case INIT_USER:
      return { name: payload.name, token: payload.token };
    case LOGOUT_USER:
      return { name: "", token: "" };
    default:
      return state;
  }
}
