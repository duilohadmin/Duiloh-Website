import React, { useEffect, useState } from "react";
import Image from "next/image";
import BeatItem from "../BeatItem/BeatItem";
import { openInNewTab } from "@/utils";

interface AudioFile {
  path: string;
  name: string;
}

const BeatsCard = () => {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudioFiles = async () => {
      try {
        const response = await fetch("/api/audio-files");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: AudioFile[] = await response.json();
        setAudioFiles(data);
      } catch (error) {
        console.error("Failed to fetch audio files:", error);
        setError("Failed to load audio files");
      }
    };

    fetchAudioFiles();
  }, []);

  return (
    <div className="bg-cream bg-opacity-80 p-5 text-black shadow-md rounded-lg mb-14 lg:max-w-[1000px] mx-3">
      <h2 className="md:hidden text-center mb-2 md:text-left  text-[2rem] md:text-[4rem] font-sugar mt-4 md:mt-0 decoration-2 underline underline-offset-4">
        DEMOS
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="bg-prim md:flex-1 relative h-96 md:h-auto -mt-2 sm:mt-0 justify-center items-center border border-black">
          <div className="absolute inset-0">
            <Image
              src="/pogiclro.jpeg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="md:flex-1 md:pl-10 font-mont">
          <h2 className="hidden md:flex text-center md:text-left  text-[2rem] md:text-[4rem] font-sugar mt-4 md:mt-0 decoration-2 underline underline-offset-4">
            DEMOS
          </h2>
          <h3 className="text-lg mt-4 md:mt-0 md:text-xl font-mont font-bold">
            Inspire your art with the luxurious sounds of Duiloh Instrumentals:
          </h3>

          <p className="mt-2  text-base md:text-lg">
            If you&apos;re a rapper/singer who loves chill, late night, early
            morning beats then take a trip to YouTube and Beatstars and search
            Duiloh Instrumentals! Claim your{" "}
            <span className="font-bold">10% discount</span> with{" "}
            <span className="font-bold">code: DUILOHSITE</span>
          </p>
          <div className="flex flex-col items-center justify-center mb-0 md:mb-6">
            <div
              className="shadow-md shadow-slate-300 h-12 w-60 bg-metallic-silver-gradient
           text-prim text-base md:text-lg text-center flex flex-col justify-center font-extrabold
              mt-6 cursor-pointer"
              onClick={() =>
                openInNewTab("https://www.beatstars.com/DuilohMusic")
              }
            >
              SHOP DUILOH&apos;S BEATS
            </div>
          </div>

          <div className="mt-4 w-full flex md:hidden">
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid gap-2 grid-cols-4 w-full">
              {audioFiles.map((audio) => (
                <div key={audio.name} className="text-sm md:text-base">
                  <BeatItem audioUrl={audio.path} beatName={audio.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 hidden md:flex w-full px-8">
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid gap-1 grid-cols-4 w-full mb-0 pb-0">
          {audioFiles.map((audio) => (
            <div key={audio.name} className="mb-4">
              <BeatItem audioUrl={audio.path} beatName={audio.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeatsCard;
