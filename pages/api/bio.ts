import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import builder from "@builder.io/react";
builder.canTrack = false;
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_URL = `https://cdn.builder.io/api/v3/content/bio?apiKey=${BUILDER_API_KEY}&fields=data`;

if (!BUILDER_API_KEY) {
  throw new Error("Missing BUILDER API KEY!!! on bio.ts");
}

type BioData = {
  mainPicture: string;
  secondaryPicture: string;
};
type ApiResponse = {
  results: {
    data: BioData;
  }[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<ApiResponse>(BUILDER_URL);
    const data = response.data.results[0].data;
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      error: "500 error: Failed to fetch Bio data on bio.ts",
    });
  }
};
export default handler;
