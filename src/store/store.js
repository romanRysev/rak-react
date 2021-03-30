import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer, { modalIsShow: false });

export default store;
