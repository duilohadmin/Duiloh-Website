import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import builder from "@builder.io/react";
builder.canTrack = false;
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_GRAPHQL_URL = `https://cdn.builder.io/api/v1/graphql/${BUILDER_API_KEY}`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = `
    query {
      releases {
        data {
          s1
          s2
          s3
          s4
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      BUILDER_GRAPHQL_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${BUILDER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    /*
    console.log("Builder.io response:", response.data);
    response.data.data.releases.forEach((release, index) => {
      console.log(`Release ${index + 1}:`);
      console.log(`s1: ${JSON.stringify(release.data.s1, null, 2)}`);
      console.log(`s2: ${JSON.stringify(release.data.s2, null, 2)}`);
      console.log(`s3: ${JSON.stringify(release.data.s3, null, 2)}`);
      console.log(`s4: ${JSON.stringify(release.data.s4, null, 2)}`);
    });
*/
    const releasesObject = response.data.data.releases[0].data;
    const releases = Object.values(releasesObject);

    res.status(200).json(releases);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      console.error("Axios error:", error.response?.data || error.message);
      res.status(500).json({
        error: "Error fetching releases",
        details: error.response?.data || error.message,
      });
    } else {
      // Unknown error
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Unexpected error" });
    }
  }
};

export default handler;
