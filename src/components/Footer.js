import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="container footer">
      <div className="footer__left-column">
        <h2>Спасибо всем, кто помог состояться этому проекту</h2>
        <p>
          Благотворительный Фонд Константина Хабенского с апреля 2008 года
          делает все возможное, чтобы дети с опухолями мозга вовремя получали
          всю необходимую медицинскую помощь и скорее возвращались к полноценной
          жизни. За это время адресную помощь получили более 2800 подопечных.
          Фонд не только оплачивает диагностику и лечение детей, но и проводит
          информационную работу с родителями, с помощью курсов и тренингов
          повышает квалификацию врачей, помогает оснащать профильные отделения
          российских медицинских учреждений, а также организует реабилитационные
          программы.
        </p>
        <p>Рак Лечится 2021</p>
      </div>
      <div className="footer__central-column">
        <nav>
          <ul className="header__nav-list">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="link_active"
                className="header__nav-list-item link"
              >
                Главная
              </NavLink>
            </li>
            <li className="header__nav-list-item link">
              <NavLink
                exact
                to="/stories"
                activeClassName="link_active"
                className="header__nav-list-item link"
              >
                Истории
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__right-column">
        <p>Мы в Инстаграме и Youtube</p>
        <button>Поделитесь</button>
        <p>
          Сделано Рысевым Романом, на основе работы студентов Яндекс.Практикума
        </p>
        <p>Автор концепции Ирина Волокова</p>
      </div>
    </footer>
  );
}

export default Footer;
