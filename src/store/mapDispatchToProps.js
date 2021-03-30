import { bindActionCreators } from "redux";
import showModal from "./actionCreator";

function mapDispatchToProps(component) {
  switch (component) {
    case "ModalButton":
      return function (dispatch) {
        return {
          modalIsShow: bindActionCreators(showModal, dispatch),
        };
      };
    default:
      return undefined;
  }
}

export default mapDispatchToProps;
