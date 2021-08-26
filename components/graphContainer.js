import Graph from "./graph";
import GraphTownLabel from "./graphTownLabel";
import GraphSubtitle from "./graphSubtitle";
import GraphLeftDropdown from "./graphLeftDropdown";
import GraphRightDropdown from "./graphRightDropdown";

import Spinner from "./spinner";

import style from "../styles/graph.module.css";

import { useEffect, useState } from "react";

export default function GraphContainer({ subtitle, showPer10K }) {
  const [firstTown, setFirstTown] = useState("Westchester");
  const [secondTown, setSecondTown] = useState("None");

  const [casesData, setCasesData] = useState(null);
  function firstDropdownHandler(town) {
    setFirstTown(town);
  }

  function secondDropdownHandler(town) {
    setSecondTown(town);
  }

  function generateTitle() {
    if (secondTown === "None") {
      return firstTown;
    } else {
      return `${firstTown} & ${secondTown}`;
    }
  }

  async function getCasesData(town1, town2) {
    const url = `/api/data?town1=${town1}${
      town2 && town2 !== "None" ? `&town2=${town2}` : ""
    }`;

    const res = await fetch(url);

    const data = await res.json();
    setCasesData(data);
  }

  useEffect(() => {
    (async function () {
      getCasesData(firstTown, secondTown);
    })();
  }, [firstTown, secondTown]);

  return casesData ? (
    <div className={style.graphContainer}>
      <GraphTownLabel text={generateTitle()} />
      <GraphSubtitle text={subtitle} />
      <Graph
        showPer10K={showPer10K}
        casesData={casesData}
        towns={[firstTown, secondTown]}
      />
      <div className={style.graphSettingsContainer}>
        <div className={style.dropdownSubtitleContainer}>
          <GraphLeftDropdown
            text={firstTown}
            elementClickHandler={firstDropdownHandler}
          />

          <h3 className={style.leftDropdownSubtitle}>Town 1</h3>
        </div>
        <div className={style.dropdownSubtitleContainer}>
          <GraphRightDropdown
            text={secondTown}
            elementClickHandler={secondDropdownHandler}
          />
          <h3 className={style.rightDropdownSubtitle}>Town 2</h3>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
