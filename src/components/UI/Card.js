import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <a href={props.href}>
        <div className="card__img-container">
          <img className="card__img" src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </a>
    </div>
  );
}

export default Card;
