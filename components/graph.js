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

function CustomTooltip({ active, payload, label, towns }) {
  if (active && payload && payload.length) {
    return (
      <div className={style.tooltip}>
        <p className={style.tooltipHeader}>{label}</p>
        <p className={style.tooltipTown1}>
          {towns[0]}: {payload[0].value}
        </p>
        {towns[1] !== "None" && (
          <p className={style.tooltipTown2}>
            {towns[1]}: {payload[1]?.value}
          </p>
        )}
      </div>
    );
  }

  return null;
}

export default function Graph({ showPer10K, casesData, towns }) {
  return (
    casesData && (
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={showPer10K ? casesData?.dataPop : casesData?.data}
          margin={{ left: 0 }}
          height={isMobile ? 300 : 400}
        >
          <Line
            strokeWidth={3 - isMobile}
            type="monotone"
            dataKey="town1"
            stroke="#201E1F"
            dot={false}
          />
          {casesData?.data[0]?.town2 && (
            <Line
              strokeWidth={3 - isMobile}
              type="monotone"
              dataKey="town2"
              stroke="#0076ff"
              dot={false}
            />
          )}
          <XAxis dataKey="date"></XAxis>
          <YAxis></YAxis>
          <Tooltip content={<CustomTooltip towns={towns} />} />
          <CartesianGrid vertical={false}></CartesianGrid>
        </LineChart>
      </ResponsiveContainer>
    )
  );
}
