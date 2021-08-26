import style from "../styles/float.module.css";

export default function DesktopFloat() {
  return (
    <>
      <div className={style.nameFloat}>
        <h3 className={style.floatName}>Leon Rode | </h3>

        <a href="https://github.com/lionrocker/westchestercovidtracker.com">
          <i
            className="fab fa-github"
            style={{ color: "#f6f6f6", scale: "1.2", marginLeft: "10px" }}
          ></i>
        </a>

        <h3 className={style.floatName}>&nbsp; | </h3>
        <a href="mailto:leon.rode13@gmail.com">
          <i
            className="fas fa-envelope"
            style={{ color: "#f6f6f6", scale: "1.2", marginLeft: "10px" }}
          ></i>
        </a>
      </div>
      <div className={style.sourceFloat}>
        <h3 className={style.sources}>
          <span>Source: </span>
          <a href="https://www.westchestergov.com">Westchester County</a> &{" "}
          <a href="https://www.census.gov/">U.S. Census Bureau</a>
        </h3>
      </div>
      <h5 className={style.disclaimer}>
        Data provided for reference only. No liability is assumed.
      </h5>
    </>
  );
}
