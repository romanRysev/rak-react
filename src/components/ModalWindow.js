import "./ModalWindow.css";
import Button from "./UI/Button";

function ModalWindow(props) {
  console.log(props);
  return props.modalIsShow ? (
    <div className="modal-background">
      <section className="modal">
        <div className="modal__content">
          <Button text="Поиск" class="button_size_s" />
        </div>
        <Button
          text="Закрыть"
          class="button_size_s"
          onClick={() => props.onCloseClick()}
        />
      </section>
    </div>
  ) : (
    ""
  );
}

export default ModalWindow;
