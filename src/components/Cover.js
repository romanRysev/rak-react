import "./Cover.css";

function Cover() {
  return (
    <section className="cover">
      <video
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        className="cover__video"
      >
        <source src="cover.mp4" type="video/mp4" />
      </video>
      <div className="cover__image"></div>
      <div className="cover__content">
        <p className="cover__tag">#Раклечится</p>
        <button className="cover__button">Рассказать историю</button>
        <button className="cover__scroll" href="#">
          <img src="/images/scroll.svg" alt="" />
        </button>
      </div>
    </section>
  );
}

export default Cover;
