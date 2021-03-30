function mapStateToProps(component) {
  switch (component) {
    case "ModalButton": {
      return function (state) {
        return {
          modalIsShow: state.modalIsShow,
        };
      };
    }
    default:
      return undefined;
  }
}

export default mapStateToProps;
