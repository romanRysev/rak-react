import "./Stories.css";
import Card from "./UI/Card";

function Stories(props) {
  const cards = [
    {
      title: "card1",
      text: "card1 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card2",
      text: "card2 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card3",
      text: "card3 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card4",
      text: "card4 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card5",
      text: "card5 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card6",
      text: "card6 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
    {
      title: "card7",
      text: "card7 text",
      href: "#",
      img: "/images/card1.jpeg",
    },
    {
      title: "card8",
      text: "card8 text",
      href: "#",
      img: "/images/card2.jpeg",
    },
  ];

  return (
    <section className="stories container">
      <h2>Истории неизлечимых привычек</h2>
      <div className="stories__card-container">
        {cards.map((card, i) => {
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
      <button className="stories__button">Все истории</button>
    </section>
  );
}

export default Stories;
