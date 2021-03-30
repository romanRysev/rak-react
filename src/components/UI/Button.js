import "./Button.css";

function Button(props) {
  return (
    <button
      className={`button ${props.class || ""}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
