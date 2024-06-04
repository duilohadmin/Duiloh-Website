// pages/api/audio-files.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const audioDir = path.join(process.cwd(), "public/audio/duiloh-audio");
    const files = fs.readdirSync(audioDir);
    const audioFiles = files.map((file) => ({
      path: `/audio/duiloh-audio/${file}`,
      name: path.basename(file, path.extname(file)),
    }));

    res.status(200).json(audioFiles);
  } catch (error) {
    console.error("Error reading audio files:", error);
    res.status(500).json({ error: "Failed to read audio files" });
  }
}
