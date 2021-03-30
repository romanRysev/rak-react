import "./Header.css";
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";
import { showModal } from "../store/actionCreator";
import { Provider } from "react-redux";
import store from "../store/store";

function Header() {
  return (
    <Provider store={store}>
      <header className="header container">
        <NavLink exact to="/" className="header__logo-container">
          <img className="header__logo" src="/images/logo.svg" alt=""></img>
        </NavLink>

        <div className="header__nav-container">
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
          <Button
            text={"Рассказать историю"}
            onClick={() => {
              store.dispatch(showModal(true));
              console.log(store.getState().modalIsShow);
            }}
            class="button_size_s"
          />
        </div>
      </header>
    </Provider>
  );
}

export default Header;
