import { SHOW_MODAL } from "./actionTypes";
import { HIDE_MODAL } from "./actionTypes";

export function showModal() {
  return {
    type: SHOW_MODAL,
    modalIsShow: true,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
    modalIsShow: false,
  };
}
