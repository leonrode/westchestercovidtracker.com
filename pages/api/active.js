const { MongoClient } = require("mongodb");

const uri = process.env.URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  try {
    await client.connect();

    const dbData = client.db("covid-data").collection("data");
    let { town1, town2 } = req.query;

    if (town1 === "Westchester") town1 = "Totals";
    if (town2 === "Westchester") town2 = "Totals";
    if (town2) {
      // grab full timeline of both towns

      const town1Query = await dbData.find({ town: town1 }).toArray();
      const town2Query = await dbData.find({ town: town2 }).toArray();

      // merge both arrays into one array
      let newResult = [];

      for (let i = 0; i < town1Query.length; i++) {
        let object = {};
        object.date = town1Query[i].date;
        object.town1 = town1Query[i]["active_cases"];
        object.town2 = town2Query[i]["active_cases"];

        newResult.push(object);
      }

      client.close();
      res.status(200).json({ error: false, data: newResult });
    } else {
      const townQuery = await dbData.find({ town: town1 }).toArray();

      let newResult = [];
      for (let i = 0; i < townQuery.length; i++) {
        newResult.push({
          date: townQuery[i].date,
          town1: townQuery[i]["active_cases"],
        });
      }

      client.close();
      res.status(200).json({ error: false, data: newResult });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: error.stack });
  }
}
