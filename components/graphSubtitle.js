import style from "../styles/label.module.css";

export default function GraphSubtitle({ text }) {
  return <h3 className={style.subtitle}>{text}</h3>;
}
