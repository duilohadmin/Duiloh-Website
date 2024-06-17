import React from "react";
import Header1 from "@/components/Headers/Header1";
import Header2 from "@/components/Headers/Header2";
import MobH1 from "@/components/Headers/MobH1";
import MobH2 from "@/components/Headers/MobH2";
import Footer1 from "@/components/Footers/Footer1";
import styles from "../styles/bio-head.module.css";
import BeatsCard from "@/components/BeatsCard/BeatsCard";
import { GetServerSideProps } from "next";

interface AudioFile {
  path: string;
  name: string;
}

interface BeatsProps {
  audioFiles: AudioFile[];
  error: string | null;
}

const Beats: React.FC<BeatsProps> = ({ audioFiles, error }) => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full ">
        <div className="hidden md:block">
          <Header1 />
        </div>
        <div className="block md:hidden text-black">
          <MobH1 />
        </div>
      </div>
      <div className="flex min-h-screen flex-col bg-prim  -z-10">
        <div className="hidden md:block">
          <Header2 />
        </div>
        <div className="block md:hidden">
          <MobH2 />
        </div>
        <div
          className={`z-0 h-[26rem] bg-cover bg-center bg-no-repeat ${styles.vignette} ${styles["services-image"]}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="italic text-[4rem] md:text-[6rem] tracking-widest font-bold text-white drop-shadow-2xl opacity-95"
              style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
            >
              BEATS
            </h2>
          </div>
        </div>
        <div className=" z-10 h-[50px] -mt-[49px] md:-mt-[50px] text-2xl font-bold  w-full text-center bg-gradient-to-b from-transparent to-prim"></div>
        <div className="flex flex-col justify-center items-center p-5">
          <BeatsCard audioFiles={audioFiles} error={error} />
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    console.log("Fetching data from API...");
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/beats`);
    const data = await res.json();
    //console.log("API response data:", data);

    const { audioFiles, error } = data;

    return {
      props: {
        audioFiles: audioFiles || [],
        error: error || null,
      },
    };
  } catch (error) {
    console.error("Failed to fetch audio files:", error);
    return {
      props: {
        audioFiles: [],
        error: "Failed to load audio files",
      },
    };
  }
};

export default Beats;
