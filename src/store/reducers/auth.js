import { INIT_USER } from "../constants/action_types";

export default function auth(state = { name: "", token: "" }, { type, payload }) {
  if (type === INIT_USER) {
    return { name: payload.name, token: payload.token };
  }
  return state;
}
