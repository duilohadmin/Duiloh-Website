import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import builder from "@builder.io/react";
builder.canTrack = false;
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_API_URL = `https://cdn.builder.io/api/v3/content/beats?apiKey=${BUILDER_API_KEY}&fields=data`;

if (!BUILDER_API_KEY) {
  throw new Error("Missing Builder API key");
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //console.log("API Handler called");

  try {
    const response = await axios.get(BUILDER_API_URL);
    //console.log("Builder.io response:", response.data);

    const beatsData = response.data.results[0].data;

    const formattedData = Object.values(beatsData).map((item: any) => ({
      path: item.beatUrl,
      name: item.beatName,
    }));

    //console.log("Formatted audio files:", formattedData);

    res.status(200).json({ audioFiles: formattedData });
  } catch (error) {
    // console.error("Failed to fetch audio files:", error);
    res.status(500).json({ error: "Failed to load audio files" });
  }
};

export default handler;
