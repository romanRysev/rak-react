import "./Switch.css";
import React, { useState } from "react";

function Switch(props) {
  const [firstIsActive, setActive] = useState(true);
  const switchThemeClass =
    props.switchTheme === "light"
      ? {
          class: "switch_theme_light",
          activeClass: "switch_active_theme_light",
        }
      : { class: "switch_theme_dark", activeClass: "switch_active_theme_dark" };

  function handleSwitch(isFirst, event) {
    setActive(isFirst);
    event.target.classList.add("switch_active");
    event.target.classList.add(`switch_active${"_theme_" + props.switchTheme}`);
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling.classList.remove("switch_active");
      event.target.nextElementSibling.classList.remove(
        `switch_active${"_theme_" + props.switchTheme}`
      );
    } else {
      event.target.previousElementSibling.classList.remove("switch_active");
      event.target.previousElementSibling.classList.remove(
        `switch_active${"_theme_" + props.switchTheme}`
      );
    }
  }
  return (
    <div className="switch-component">
      <ul className="switch-container">
        <li
          className={`switch switch_active ${switchThemeClass.activeClass}  ${switchThemeClass.class}`}
          onClick={($event) => handleSwitch(true, $event)}
        >
          {props.firstTitle}
        </li>
        <li
          className={`switch ${switchThemeClass.class}`}
          onClick={($event) => handleSwitch(false, $event)}
        >
          {props.secondTitle}
        </li>
      </ul>
      {firstIsActive ? props.firstContent : props.secondContent}
    </div>
  );
}

export default Switch;
