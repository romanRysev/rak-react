import "./Header.css";
import Button from "./UI/Button";

function Header() {
  return (
    <header className="header container">
      <img className="header__logo" src="/images/logo.svg" alt=""></img>
      <div className="header__nav-container">
        <nav>
          <ul className="header__nav-list">
            <li className="header__nav-list-item link link_active">Главная</li>
            <li className="header__nav-list-item link">Истории</li>
          </ul>
        </nav>
        <Button text={"Рассказать историю"} />
      </div>
    </header>
  );
}

export default Header;
