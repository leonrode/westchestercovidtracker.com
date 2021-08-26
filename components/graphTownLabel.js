import style from "../styles/label.module.css";

export default function GraphTownLabel({ text }) {
  return <h1 className={style.townLabel}>{text}</h1>;
}
