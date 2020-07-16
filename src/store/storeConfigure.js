import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import mockState from "./mock";

// const preload = JSON.parse(localStorage.getItem("state")) || mockState;
const preload = mockState;
const store = createStore(rootReducer, preload);

// TODO: Local storage in RN
// const saveToLocal = () => {
//   const state = store.getState();
//   localStorage.setItem("state", JSON.stringify(state));
// };
// store.subscribe(saveToLocal);

export default store;
