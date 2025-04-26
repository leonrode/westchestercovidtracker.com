import Head from "next/head";

import LoadingPanel from "../components/LoadingPanel";

import ActiveGraphContainer from "../components/ActiveGraphContainer";
import DensityGraphContainer from "../components/DensityGraphContainer";
import Footer from "../components/Footer";

import style from "../styles/main.module.css";

import { useState, useEffect } from "react";
export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const activeRes = await fetch("/api/active?town1=Westchester");
      const activeData = await activeRes.json();

      const densityRes = await fetch("/api/density?town1=Westchester");
      const densityData = await densityRes.json();

      setData({ activeData: activeData.data, densityData: densityData.data });
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Westchester COVID-19 Tracker</title>
        <meta
          name="description"
          content="View Westchester County's updated COVID-19 timeline on our free online COVID-19 tracking platform."
        />
        <meta name="robots" content="index, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta
          property="og:title"
          content="Westchester County COVID-19 Timelines"
        />
        <meta property="og:url" content="https://westchestercovidtracker.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="View updated-daily COVID-19 timelines for Westchester County, NY"
        />
        <link rel="icon" href="/icon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <main className={style.main}>
        <h1 className={style.inactive}>
          This site is inactive. Data shown here is for historical keeping purposes only.
        </h1>
        <p className={style.inactiveSub}>
          Contact me using the links in the lower-right corner for the data.
        </p>
        <h1 className={style.title}>Westchester COVID-19</h1>
        <h3 className={style.subtitle}>
          View COVID-19 data by municipality in Westchester County
        </h3>

        <LoadingPanel hide={!!data} />

        {data && (
          <div className={style.mainGraphsContainer}>
            <ActiveGraphContainer data={data.activeData} />
            <DensityGraphContainer data={data.densityData} />
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}
