import style from "../styles/label.module.css";

function generateLabel(town1, town2) {
  return (
    <span>
      <span className={style.black}>{town1}</span>
      {town2 !== "None" ? " & " : " "}
      {town2 !== "None" && <span className={style.blue}>{town2} </span>}
    </span>
  );
}

export default function GraphTownLabel({ town1, town2 }) {
  return <h1 className={style.townLabel}>{generateLabel(town1, town2)}</h1>;
}
