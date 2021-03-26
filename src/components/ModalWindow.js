import "./ModalWindow.css";
import Button from "./UI/Button";

function ModalWindow(props) {
  return (
    <div className="modal-background">
      <section className="modal">
        <div className="modal__content">
          <Button text="Поиск" class="button_size_s" />
        </div>
      </section>
    </div>
  );
}

export default ModalWindow;
