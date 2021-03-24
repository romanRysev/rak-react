import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <a className="card__link-container" href={props.href}>
        <div className="card__img-container">
          <img className="card__img" src={props.img} alt="" />
        </div>
        <h3 className="card__title">{props.title}</h3>
        <p className="card__paragraph">{props.text}</p>
      </a>
    </div>
  );
}

export default Card;
