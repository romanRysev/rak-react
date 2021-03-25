import "./Button.css";

function Button(props) {
  return (
    <button className={`button ${props.class || ""}`}>{props.text}</button>
  );
}

export default Button;
