import "./TellYourStory.css";
import Button from "./UI/Button";
import Switch from "./UI/Switch";

function TellYourStory() {
  const firstContent = (
    <div className="tell-your-story__option">
      <p className="paragraph">
        Заполните подробную форму прямо на сайте, и мы опубликуем вашу историю
        после проверки. Пожалуйста, заполняйте все пункты корректно. Если вы
        испытаете какие-то сложности, воспользуйтесь вторым вариантом.
      </p>
      <Button text="Заполнить форму" class="button_size_m" />
    </div>
  );

  const secondContent = (
    <div className="tell-your-story__option">
      <p className="paragraph">
        Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
        зададим вопросы, уточним детали вашей истории.
      </p>
      <Button text="Оставить контакт" class="button_size_m" />
    </div>
  );
  return (
    <section className="tell-your-story">
      <div className="tell-your-story__title-container container">
        <h2 className="tell-your-story__title title">
          Расскажите свою историю
        </h2>
      </div>
      <div className="tell-your-story__container container">
        <div className="tell-your-story__left-column">
          <p className="paragraph">
            Мы публикуем новые истории на сайте раз в неделю. Есть два варианта
            поделиться своей историей неизлечимых привычек, навязчивых идей и
            болезненных привязанностей.
          </p>
        </div>
        <div className="tell-your-story__right-column">
          <Switch
            firstTitle="1-й вариант"
            secondTitle="2-й вариант"
            firstContent={firstContent}
            secondContent={secondContent}
            switchTheme="dark"
          />
        </div>
      </div>
    </section>
  );
}

export default TellYourStory;
