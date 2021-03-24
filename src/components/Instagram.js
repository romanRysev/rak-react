import "./Instagram.css";

function Instagram(props) {
  return (
    <section className="instagram container">
      <div className="instagram__header">
        Рассказывайте ваши истории в Инстаграм <b>#ЭТОНЕЛЕЧИТСЯ</b>
      </div>
      <div className="instagram__content">
        <h3>
          <a
            className="instagram__title-link"
            href="https://www.instagram.com/raklechitsa/"
            target="blank"
          >
            Инстаграм
          </a>
        </h3>
        <p className="paragraph">
          Два раза в неделю мы просматриваем все посты по хештегу #этонелечится.
          Все истории, где нет нецензурных выражений и запрещенного контента
          попадают сюда. Следите за правильным написанием хештега, чтобы мы не
          пропустили вашу историю.
        </p>
      </div>
    </section>
  );
}

export default Instagram;
