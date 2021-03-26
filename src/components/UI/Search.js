import "./Search.css";
import Button from "./Button";

function Search(props) {
  return (
    <form className="search">
      <input type="text" placeholder="Найти..."></input>
      <button>Очистить</button>
      <Button text="Поиск" type="submit" class="button_size_s" />
    </form>
  );
}

export default Search;
