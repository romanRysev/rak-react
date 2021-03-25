import "./Statistic.css";

function Statistic() {
  const data = [
    {
      title: "Каждый 3-й",
      img: "/images/statistic1.svg",
      text: "в стране, уверен, что рак неизлечим. Примерно 48 918 000 человек.",
      source: "Левада-Центр 2018",
    },
    {
      title: "Каждый 3-й",
      img: "/images/statistic1.svg",
      text: "в стране, уверен, что рак неизлечим. Примерно 48 918 000 человек.",
      source: "Левада-Центр 2018",
    },
    {
      title: "Каждый 3-й",
      img: "/images/statistic1.svg",
      text: "в стране, уверен, что рак неизлечим. Примерно 48 918 000 человек.",
      source: "Левада-Центр 2018",
    },
    {
      title: "Каждый 3-й",
      img: "/images/statistic1.svg",
      text: "в стране, уверен, что рак неизлечим. Примерно 48 918 000 человек.",
      source: "Левада-Центр 2018",
    },
  ];
  return (
    <section className="statistic container">
      <h2 className="title statistic__title">Статистика по онкозаболеваниям</h2>
      <div className="statistic__card-container">
        {data.map((item, i) => {
          return (
            <div className="statistic-card" key={i}>
              <h3 className="statistic-card__title">{item.title}</h3>
              <img className="statistic-card__img" src={item.img} alt="" />
              <p className="statistic-card__text">{item.text}</p>
              <p className="statistic-card__source">{item.source}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Statistic;
