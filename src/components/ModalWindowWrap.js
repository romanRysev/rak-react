import { connect } from "react-redux";
import ModalWindow from "./ModalWindow";
import { hideModal } from "../store/actionCreator";

const mapStateToProps = (state) => {
  return {
    modalIsShow: state.modalIsShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseClick: () => {
      dispatch(hideModal());
    },
  };
};

const ModalWindowWrap = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindow);

export default ModalWindowWrap;
