import RightDropdownContent from "./RightDropdownContent";
import OutsideClickHandler from "react-outside-click-handler";

import style from "../styles/dropdown.module.css";

import { useState } from "react";

export default function GraphRightDropdown({ text, elementClickHandler }) {
  const [showDropdownContent, setShowDropdownContent] = useState(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setShowDropdownContent(false);
      }}
    >
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
        <RightDropdownContent
          show={showDropdownContent}
          elementClickHandler={elementClickHandler}
        />
      </div>
    </OutsideClickHandler>
  );
}
