import "./Button.css";

function Button(props) {
  return (
    <button className={`button ${props.class || ""}`} type={props.type}>
      {props.text}
    </button>
  );
}

export default Button;
