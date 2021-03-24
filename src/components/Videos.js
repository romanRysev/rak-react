import "./Videos.css";

function Videos() {
  return (
    <section className="videos container">
      <div className="videos__container">
        <div className="videos__text">
          <div>
            <h1 className="videos__title title">
              Истории людей, победивших рак, но не свои привычки
            </h1>
            <p className="paragraph">
              Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я»,
              фобии, страхи. Но это точно не рак. Рак лечится. Лучшее
              доказательство — люди с их историями.
            </p>
          </div>
          <div className="videos__buttons">
            <button className="videos__button videos__button-prev">prev</button>
            <button className="videos__button videos__button-next">next</button>
          </div>
        </div>
        <figure className="videos__player-container">
          <iframe
            className="videos__iframe"
            src="https://www.youtube.com/embed/coOppM34GtI?enablejsapi=1"
            title="video"
          ></iframe>
          <figcaption>
            <a
              className="videos__iframe-caption"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
            >
              Все видео вы можете найти на нашем YouTube канале.
            </a>
          </figcaption>
        </figure>
      </div>
      <div className="videos__footer">
        <p className="videos__footer-text">
          И в отличие от рака, <b>#ЭТОНЕЛЕЧИТСЯ</b>
        </p>
      </div>
    </section>
  );
}

export default Videos;
