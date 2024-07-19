import React from "react";
import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
import Footer1 from "@/components/Footers/Footer1";
import styles from "../styles/bio-head.module.css";
import BeatsCard from "@/components/BeatsCard/BeatsCard";
import { GetServerSideProps } from "next";
import axios from "axios";
import Head from "next/head";
interface AudioFile {
  path: string;
  name: string;
}

interface BeatsProps {
  audioFiles: AudioFile[];
  error: string | null;
  beatCardContent: {
    image: string;
    subtitle: string;
    description: string;
  };
}

const Beats: React.FC<BeatsProps> = ({
  audioFiles,
  error,
  beatCardContent,
}) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full ">
        <Head>
          <title> Beats | Duiloh Official Site </title>
          <meta name="description" content="Duiloh's Beats." />
        </Head>
        <div className="hidden md:block">
          <Header1 />
        </div>
        <div className="block md:hidden text-black">
          <MobH1 />
        </div>
      </div>
      <div className="flex min-h-screen flex-col bg-prim -z-10">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>
        <div
          className={`z-0 h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["services-image"]}`}
        ></div>
        <div className="inset-0 flex items-center justify-center -mt-[16.29rem]">
          <h2
            className="italic text-[4rem] md:text-[6rem] tracking-widest font-bold text-white drop-shadow-2xl opacity-95 z-20"
            style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
          >
            BEATS
          </h2>
        </div>
        <div className="h-[116px]"></div>
        <div className="flex flex-col justify-center items-center p-5 -mt-16 z-20">
          <BeatsCard
            audioFiles={audioFiles}
            error={error}
            beatCardContent={beatCardContent}
          />
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<BeatsProps> = async () => {
  try {
    // console.log("Fetching audio files data from API...");
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/beats`);
    const data = await res.json();
    // console.log("API response data:", data);

    // Filter out empty objects
    const audioFiles = data.audioFiles.filter(
      (item: AudioFile) => item.path && item.name
    );
    const error = data.error || null;

    // console.log("Fetching beat card content data from API...");
    const beatCardContentRes = await axios.get(
      `https://cdn.builder.io/api/v3/content/beat-card-content?apiKey=71356eebae614ee3a6b93a673f6be478&limit=1`
    );
    const beatCardContent = beatCardContentRes.data.results[0].data;
    // console.log("Beat card content data:", beatCardContent);

    return {
      props: {
        audioFiles,
        error,
        beatCardContent,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        audioFiles: [],
        error: "Failed to load data",
        beatCardContent: {
          image: "",
          subtitle: "",
          description: "",
        },
      },
    };
  }
};

export default Beats;
