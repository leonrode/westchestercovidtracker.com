import { promises as fs } from 'fs';
import path from "path";
export default async function handler(req, res) {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'data.json'), 'utf8');
    const data = JSON.parse(raw);
    let { town1, town2 } = req.query;

    if (town1 === "Westchester") town1 = "Totals";
    if (town2 === "Westchester") town2 = "Totals";
    if (town2) {
      // grab full timeline of both towns

      const town1Query = data.filter(data => data.town == town1).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());
      const town2Query = data.filter(data => data.town == town2).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());

      // merge both arrays into one array
      let newResult = [];

      for (let i = 0; i < town1Query.length; i++) {
        let object = {};
        object.date = town1Query[i].date;
        object.town1 = town1Query[i]["active_cases"];
        object.town2 = town2Query[i]["active_cases"];

        newResult.push(object);
      }

      res.status(200).json({ error: false, data: newResult });
    } else {
      const townQuery = data.filter(data => data.town == town1).sort((x, y) => Date.parse(x.date).valueOf() - Date.parse(y.date).valueOf());;

      let newResult = [];
      for (let i = 0; i < townQuery.length; i++) {
        newResult.push({
          date: townQuery[i].date,
          town1: townQuery[i]["active_cases"],
        });
      }

      res.status(200).json({ error: false, data: newResult });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: error.stack });
  }
}
