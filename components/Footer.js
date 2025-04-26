import style from "../styles/float.module.css";
;
export default function Footer() {
  return (
    <div className={style.wordsContainer}>
      <h5 className={style.disclaimer}>
        Data provided for reference only. No liability is assumed.
      </h5>
      <h5 className={style.something}>Source: &nbsp;</h5>
      <h5 className={style.source}>
        <a href="https://www.westchestergov.com">Westchester County</a> &{" "}
        <a href="https://www.census.gov/">U.S. Census Bureau.</a>
      </h5>
      <h5 className={style.author}>
        <span>
          <a href="https://leonro.de"> Leon Rode</a>
        </span>
        <a href="https://github.com/leonrode/westchestercovidtracker.com">
          <i
            className="fab fa-github"
            style={{ color: "#666666", scale: "1.2", marginLeft: "7px" }}
          ></i>
        </a>
        <a href="mailto:leon.rode13@gmail.com">
          <i
            className="fas fa-envelope"
            style={{ color: "#666666", scale: "1.2", marginLeft: "10px" }}
          ></i>
        </a>
      </h5>
    </div>
  );
}
