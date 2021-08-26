import DropdownContent from "./graphDropdownContent";

import style from "../styles/dropdown.module.css";

import { useState } from "react";

export default function GraphLeftDropdown({ text, elementClickHandler }) {
  const [showDropdownContent, setShowDropdownContent] = useState(false);

  return (
    <div
      className={style.dropdown}
      onClick={() => {
        setShowDropdownContent(!showDropdownContent);
      }}
    >
      <h3 className={style.dropdownText}>{text}</h3>
      <div
        className={
          showDropdownContent ? style.arrowFlipped : style.arrowDefault
        }
      >
        <i className={"dropdownArrow fas fa-angle-down"}></i>
      </div>
      <DropdownContent
        show={showDropdownContent}
        elementClickHandler={elementClickHandler}
      />
    </div>
  );
}
