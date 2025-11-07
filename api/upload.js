import { MongoClient } from "mongodb";
import cloudinary from "cloudinary";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success:false, message:"Method not allowed" });

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if(err) return res.status(500).json({ success:false, message:"Form parse error" });

    const title = fields.title;
    const videoFile = files.video;
    if(!title || !videoFile) return res.status(400).json({ success:false, message:"Title or video missing" });

    try {
      const result = await cloudinary.v2.uploader.upload(videoFile.filepath, { resource_type:"video", folder:"gtkr-videos" });

      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      const db = client.db(process.env.MONGODB_DB || "gtkrvideo");
      const collection = db.collection("videos");

      const videoData = {
        title: title,
        url: result.secure_url,
        duration: result.duration || 0,
        thumbnail: result.thumbnail_url || "",
        uploadedAt: new Date(),
      };

      await collection.insertOne(videoData);
      await client.close();

      res.status(200).json({ success:true, video:videoData });
    } catch(err) {
      console.error(err);
      res.status(500).json({ success:false, message:"Upload failed" });
    }
  });
      }
