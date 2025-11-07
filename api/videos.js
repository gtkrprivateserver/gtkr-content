import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if(req.method !== "GET") return res.status(405).json({ success:false, message:"Method not allowed" });

  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db(process.env.MONGODB_DB || "gtkrvideo");
    const collection = db.collection("videos");

    const videos = await collection.find({}).sort({ uploadedAt:-1 }).toArray();
    await client.close();

    res.status(200).json(videos);
  } catch(err) {
    console.error(err);
    res.status(500).json({ success:false, message:"Failed to fetch videos" });
  }
}
