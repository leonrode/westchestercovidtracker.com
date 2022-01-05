const { MongoClient } = require("mongodb");

const uri = process.env.URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await client.connect();

      const db = client.db("covid-data").collection("view-counter");

      const currentViewCount = await db.findOne({
        view_count: { $exists: true },
      });

      if (typeof currentViewCount?.view_count === "number") {
        await db.updateOne(
          { view_count: { $exists: true } },
          { $set: { view_count: currentViewCount.view_count + 1 } }
        );
      }

      res.status(200).json({ error: false });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: true });
    }
  }
}
