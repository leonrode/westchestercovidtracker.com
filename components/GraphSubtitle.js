import style from "../styles/label.module.css";

function generateSpan(town1, town2, showDecimal) {
  return (
    <span>
      <span className={style.black}>
        {showDecimal ? town1.toFixed(1) : town1.toLocaleString("en-us")}
      </span>
      {town2 ? " & " : " "}
      {town2 && (
        <span className={style.blue}>
          {showDecimal ? town2.toFixed(1) : town2.toLocaleString("en-us")}{" "}
        </span>
      )}
    </span>
  );
}

export default function GraphSubtitle({ text, town1, town2, showDecimal }) {
  return (
    <h3 className={style.subtitle}>
      {generateSpan(town1, town2, showDecimal)}
      {text}
    </h3>
  );
}
