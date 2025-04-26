import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const populations = {
    Ardsley: 4502,
    Bedford: 17651,
    "Briarcliff Manor": 8094,
    Bronxville: 6408,
    Buchanan: 2140,
    Cortlandt: 42294,
    "Croton-on-Hudson": 8095,
    "Dobbs Ferry": 11027,
    Eastchester: 32906,
    Elmsford: 5216,
    Greenburgh: 90989,
    Harrison: 28943,
    "Hastings-on-Hudson": 7853,
    Irvington: 6473,
    Larchmont: 6087,
    Lewisboro: 12522,
    "Mamaroneck Town": 29495,
    "Mamaroneck Village": 19131,
    "Mount Kisco": 10795,
    "Mount Pleasant": 44933,
    "Mount Vernon": 67345,
    "New Castle": 17801,
    "New Rochelle": 78557,
    "North Castle": 12231,
    "North Salem": 5124,
    "Ossining Town": 37702,
    "Ossining Village": 24812,
    Peekskill: 24295,
    Pelham: 12481,
    "Pelham Manor": 5534,
    Pleasantville: 7260,
    "Port Chester": 29163,
    "Pound Ridge": 5129,
    "Rye Brook": 9521,
    "Rye City": 15695,
    Scarsdale: 17871,
    "Sleepy Hollow": 10046,
    Somers: 21574,
    Tarrytown: 11370,
    Tuckahoe: 6549,
    "White Plains": 58109,
    Yonkers: 200370,
    Yorktown: 36269,
    Totals: 1004457,
  };

  try {
    // await client.connect();

    // const dbData = client.db("covid-data").collection("data");

    const raw = await fs.readFile("../../data.json", 'utf8');
    const data = JSON.parse(raw);
    let { town1, town2 } = req.query;

    if (town1 === "Westchester") town1 = "Totals";
    if (town2 === "Westchester") town2 = "Totals";
    if (town2) {
      // grab full timeline of both towns
      const town1Query = data.filter(data => data.town == town1).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());;
      const town2Query = data.filter(data => data.town == town2).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());;

      // merge both arrays into one array
      let newResult = [];

      for (let i = 0; i < town1Query.length; i++) {
        let object = {};
        object.date = town1Query[i].date;
        object.town1 = town1Query[i]["active_cases"];
        object.town2 = town2Query[i]["active_cases"];

        newResult.push(object);
      }

      let dataPop = [];
      for (let i = 0; i < newResult.length; i++) {
        dataPop.push({
          date: newResult[i].date,
          town1:
            Math.round((newResult[i].town1 / populations[town1]) * 10000 * 10) /
            10,
          town2:
            Math.round((newResult[i].town2 / populations[town2]) * 10000 * 10) /
            10,
        });
      }

      res.status(200).json({ error: false, data: dataPop });
    } else {
      const townQuery = data.filter(data => data.town == town1).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());;

      let newResult = [];
      for (let i = 0; i < townQuery.length; i++) {
        newResult.push({
          date: townQuery[i].date,
          town1: townQuery[i]["active_cases"],
        });
      }

      let dataPop = [];
      for (let i = 0; i < newResult.length; i++) {
        dataPop.push({
          date: newResult[i].date,
          town1:
            Math.round((newResult[i].town1 / populations[town1]) * 10000 * 10) /
            10,
        });
      }
      res.status(200).json({ error: false, data: dataPop });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: error.stack });
  }
}
