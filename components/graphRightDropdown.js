import DropdownContent from "./graphDropdownContent";

import style from "../styles/dropdown.module.css";

import { useState } from "react";

export default function GraphRightDropdown({ text, elementClickHandler }) {
  const [showDropdownContent, setShowDropdownContent] = useState(false);

  return (
    <div
      className={style.rightDropdown}
      onClick={() => {
        setShowDropdownContent(!showDropdownContent);
      }}
    >
      <div
        className={
          showDropdownContent
            ? style.rightArrowFlipped
            : style.rightArrowDefault
        }
      >
        <i className={"dropdownArrow fas fa-angle-down"}></i>
      </div>
      <h3 className={style.dropdownText}>{text}</h3>
      <DropdownContent
        show={showDropdownContent}
        elementClickHandler={elementClickHandler}
        right={true}
      />
    </div>
  );
}
