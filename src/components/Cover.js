import "./Cover.css";

function Cover() {
  return (
    <section className="cover">
      <video autoplay="autoplay" muted="muted" loop="loop" class="cover__video">
        <source src="cover.mp4" type="video/mp4" />
      </video>
      <div className="cover__image"></div>
    </section>
  );
}

export default Cover;
