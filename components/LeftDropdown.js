import { useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";

import LeftDropdownContent from "./LeftDropdownContent";

import style from "../styles/dropdown.module.css";

export default function LeftDropdown({ text, elementClickHandler }) {
  const [showDropdownContent, setShowDropdownContent] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowDropdownContent(false);
      }}
    >
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
        <LeftDropdownContent
          show={showDropdownContent}
          elementClickHandler={elementClickHandler}
        />
      </div>
    </OutsideClickHandler>
  );
}
