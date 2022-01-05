import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { isMobile } from "react-device-detect";

import style from "../styles/graph.module.css";

function CustomTooltip({ active, payload, label, town1, town2, showDecimal }) {
  if (active && payload && payload.length) {
    return (
      <div className={style.tooltip}>
        <p className={style.tooltipHeader}>{label}</p>
        <p className={style.tooltipTown1}>
          {town1}:{" "}
          {showDecimal
            ? payload[0]?.value.toFixed(1)
            : payload[0]?.value.toLocaleString("en-us")}
        </p>
        {town2 !== "None" && (
          <p className={style.tooltipTown2}>
            {town2}:{" "}
            {showDecimal
              ? payload[1]?.value.toFixed(1)
              : payload[1]?.value.toLocaleString("en-us")}
          </p>
        )}
      </div>
    );
  }

  return null;
}
export default function DensityGraph({ casesData, town1, town2, showDecimal }) {
  return (
    casesData && (
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={casesData}
          margin={{ left: 0, right: 35 }}
          height={isMobile ? 300 : 400}
        >
          <Line
            strokeWidth={3 - isMobile}
            type="monotone"
            dataKey="town1"
            stroke="#201E1F"
            dot={false}
          />
          {casesData[0]?.town2 && (
            <Line
              strokeWidth={3 - isMobile}
              type="monotone"
              dataKey="town2"
              stroke="#0076ff"
              dot={false}
            />
          )}
          <XAxis dataKey="date" minTickGap={20}></XAxis>
          <YAxis></YAxis>
          <Tooltip
            content={
              <CustomTooltip
                town1={town1}
                town2={town2}
                showDecimal={showDecimal}
              />
            }
          />
          <CartesianGrid vertical={false}></CartesianGrid>
        </LineChart>
      </ResponsiveContainer>
    )
  );
}
