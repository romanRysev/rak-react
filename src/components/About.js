import "./About.css";
import Switch from "./UI/Switch";
import Button from "./UI/Button";
function About() {
  const firstContent = (
    <p className="about__option">
      Есть вещи, которые не лечатся. Особенности характера, страстные увлечения,
      привычки, ставшие частью нашего «я», фобии, которые мы приобрели в
      детстве. Список можно продолжать до бесконечности, но одна болезнь в него
      точно не войдет. Эта болезнь — рак. Рак лечится, и лучшее доказательство —
      люди с их неизлечимыми особенностями, которые сумели победить рак. Рак
      лечится — проект Благотворительного Фонда Константина Хабенского и Leo
      Burnett Moscow. С его помощью мы надеемся изменить отношение людей к раку
      и заставить каждого поверить: онкологическое заболевание — это не
      приговор.
    </p>
  );

  const secondContent = (
    <p className="about__option">
      Благотворительный Фонд Константина Хабенского с 2008 года помогает детям с
      онкологическими и другими тяжелыми заболеваниями головного мозга. Фонд не
      только поддерживает семью заболевшего ребенка в самый сложный момент,
      оплачивая обследования, лечение и медицинские препараты, но и в целом
      меняет систему оказания помощи детям с опухолями мозга в России.
    </p>
  );

  return (
    <section className="about container">
      <h2 className="about__title">#Раклечится</h2>
      <h3 className="about__subtitle">О проекте</h3>
      <div className="about__container">
        <div className="about__left-column">
          <p className="about__left-column-text">
            Этот проект был создан Благотворительным Фондом Константина
            Хабенского.
          </p>
          <Button
            text="Рассказать историю"
            class="button_theme_light button_size_s"
          />
        </div>
        <Switch
          firstTitle="Рак Лечится"
          secondTitle="Фонд Хабенского"
          firstContent={firstContent}
          secondContent={secondContent}
          switchTheme="light"
        />
      </div>
      <img src="/images/light.svg" alt="" />
      <img src="/images/sea.svg" alt="" />
    </section>
  );
}

export default About;
