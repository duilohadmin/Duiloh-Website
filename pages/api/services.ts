import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import builder from "@builder.io/react";
builder.canTrack = false;
const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
const BUILDER_API_URL = `https://cdn.builder.io/api/v3/content/services?apiKey=${BUILDER_API_KEY}&fields=data`;

if (!BUILDER_API_KEY) {
  throw new Error("Missing API Builder Key");
}

type Service = {
  id: number;
  imageUrl: string;
  subtitle: string;
  description: string;
  serviceName: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(BUILDER_API_URL);
    const serviceData: { [key: string]: Service } =
      response.data.results[0].data;

    // Convert the services object to an array, sort it by the id property, and convert it back to an object
    const sortedServiceData = Object.entries(serviceData)
      .map(([key, value]) => value)
      .sort((a, b) => a.id - b.id)
      .reduce<{ [key: string]: Service }>((acc, service, index) => {
        acc[`s${index + 1}`] = service;
        return acc;
      }, {});

    // console.log("Sorted Services RESPONSE: ", sortedServiceData);
    res.status(200).json({ services: sortedServiceData });
  } catch (error) {
    res.status(500).json({ error: "Failed to load services" });
  }
};

export default handler;
