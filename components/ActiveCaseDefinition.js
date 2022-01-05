import { HiQuestionMarkCircle } from "react-icons/hi";

import style from "../styles/label.module.css";

export default function ActiveCaseDefinition() {
  return (
    <div className={style.definition}>
      <HiQuestionMarkCircle size={30} color="#969696" />
      <div className={style.popup}>Positive cases within the last 14 days</div>
    </div>
  );
}
