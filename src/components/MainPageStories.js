import "./MainPageStories.css";
import GridOfCards from "./UI/GridOfCards";

function MainPageStories(props) {
  return (
    <section className="main-page-stories container">
      <h2 className="main-page-stories__title title">
        Истории неизлечимых привычек
      </h2>
      <GridOfCards cards={props.cards} />
      <button className="main-page-stories__button">Все истории</button>
    </section>
  );
}

export default MainPageStories;
