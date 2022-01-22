import { useState } from "react";

import ActiveGraph from "./ActiveGraph";

import ActiveCaseDefinition from "./ActiveCaseDefinition";

import GraphTownLabel from "./GraphTownLabel";
import GraphSubtitle from "./GraphSubtitle";
import GraphLeftDropdown from "./LeftDropdown";
import GraphRightDropdown from "./RightDropdown";

import style from "../styles/graph.module.css";

export default function ActiveGraphContainer({ data }) {
  const [firstTown, setFirstTown] = useState("Westchester");
  const [secondTown, setSecondTown] = useState("None");

  const [casesData, setCasesData] = useState(data);

  function firstDropdownHandler(town) {
    setFirstTown(town);
    getCasesData(town, secondTown);
  }

  function secondDropdownHandler(town) {
    setSecondTown(town);
    getCasesData(firstTown, town);
  }

  async function getCasesData(town1, town2) {
    const url = `/api/active?town1=${town1}${
      town2 && town2 !== "None" ? `&town2=${town2}` : ""
    }`;

    const res = await fetch(url);

    const data = await res.json();
    setCasesData(data.data);
  }

  return (
    <div className={style.graphContainer}>
      <GraphTownLabel town1={firstTown} town2={secondTown} />
      <div className={style.subFlex}>
        <GraphSubtitle
          town1={casesData[casesData.length - 1].town1}
          town2={casesData[casesData.length - 1].town2}
          text="Active Cases"
          showDecimal={false}
        />
        <ActiveCaseDefinition />
      </div>

      <ActiveGraph
        casesData={casesData}
        town1={firstTown}
        town2={secondTown}
        showDecimal={false}
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
  );
}
