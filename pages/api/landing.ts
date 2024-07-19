import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import builder from "@builder.io/react";
builder.canTrack = false;
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_API_URL = `https://cdn.builder.io/api/v3/content/landing-content?apiKey=${BUILDER_API_KEY}&fields=data`;

if (!BUILDER_API_KEY) {
  throw new Error("Builder API Key is Missing!");
}

type LandingContent = {
  imageUrl: string;
  code: string;
};

type ApiResponse = {
  results: {
    data: LandingContent;
  }[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<ApiResponse>(BUILDER_API_URL);
    const data = response.data.results[0].data;
    res.status(200).json({ data });
  } catch (error) {
    console.error("Failed to fetch Main Picture at main-pic.ts", error);
    res.status(500).json({
      error: "Error 500: Failed to fetch Main Picture at main-pic.ts",
    });
  }
};

export default handler;
