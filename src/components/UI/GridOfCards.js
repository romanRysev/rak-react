import "./GridOfCards.css";
import Card from "./Card";

function GridOfCards(props) {
  return (
    <div className="grid-of-cards">
      {props.cards.map((card, i) => {
        return (
          <Card
            title={card.title}
            text={card.text}
            href={card.href}
            img={card.img}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default GridOfCards;
