import { SHOW_MODAL, HIDE_MODAL } from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case SHOW_MODAL:
    case HIDE_MODAL:
      console.log(action);
      return Object.assign({}, state, { modalIsShow: action.modalIsShow });

    default:
      return state;
  }
}
export default reducer;
