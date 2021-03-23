import "./Header.css";
import Button from "./UI/Button";

function Header() {
  return (
    <header className="header">
      <img src="/images/logo.svg" alt=""></img>
      <div className="header__nav-container">
        <nav>
          <ul className="header__nav-list">
            <li>Главная</li>
            <li>Истории</li>
          </ul>
        </nav>
        <Button text={"Рассказать историю"} />
      </div>
    </header>
  );
}

export default Header;
