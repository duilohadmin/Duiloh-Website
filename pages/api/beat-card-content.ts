import type { NextApiRequest, NextApiResponse } from "next";
import builder from "@builder.io/react";
builder.canTrack = false;
type BeatCardContent = {
  image: string;
  subtitle: string;
  description: string;
};
type ApiResponse = {
  results: {
    data: BeatCardContent;
  }[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      "https://cdn.builder.io/api/v3/content/beat-card-content?apiKey=71356eebae614ee3a6b93a673f6be478&limit=1",
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data: ApiResponse = await response.json();
    const beatCardContent = data.results[0].data;
    res.status(200).json(beatCardContent);
  } catch (error) {
    console.error("Error fetching card content", error);
    res.status(500).json({ error: "Failed to load beat card content" });
  }
}
