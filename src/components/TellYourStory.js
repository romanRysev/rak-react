import "./TellYourStory.css";
import Button from "./UI/Button";
import React, { useState } from "react";

function TellYourStory() {
  const [firstIsActive, setActive] = useState(true);

  function handleSwitch(isFirst, event) {
    console.log(arguments);
    setActive(isFirst);
    event.target.classList.add("tell-your-story__switch_active");
    event.target.nextElementSibling
      ? event.target.nextElementSibling.classList.remove(
          "tell-your-story__switch_active"
        )
      : event.target.previousElementSibling.classList.remove(
          "tell-your-story__switch_active"
        );
  }

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
          <ul className="tell-your-story__switch-container">
            <li
              className="tell-your-story__switch tell-your-story__switch_active"
              onClick={($event) => handleSwitch(true, $event)}
            >
              1-й вариант
            </li>
            <li
              className="tell-your-story__switch"
              onClick={($event) => handleSwitch(false, $event)}
            >
              2-й вариант
            </li>
          </ul>
          {firstIsActive ? (
            <div className="tell-your-story__option">
              <p className="paragraph">
                Заполните подробную форму прямо на сайте, и мы опубликуем вашу
                историю после проверки. Пожалуйста, заполняйте все пункты
                корректно. Если вы испытаете какие-то сложности, воспользуйтесь
                вторым вариантом.
              </p>
              <Button text="Заполнить форму" class="button_size_m" />
            </div>
          ) : (
            <div className="tell-your-story__option">
              <p className="paragraph">
                Оставить контакт (почту или номер телефона) и мы свяжемся с
                вами, зададим вопросы, уточним детали вашей истории.
              </p>
              <Button text="Оставить контакт" class="button_size_m" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TellYourStory;
