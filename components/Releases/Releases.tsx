import React from "react";
import SongCard from "../SongCard/SongCard";

type Release = {
  id: number;
  name: string;
  imageUrl: string;
  spotify: string;
  apple: string;
  youtube: string;
  soundcloud: string;
};

export type ReleasesProps = {
  releases: Release[];
};

export const getReleasesProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/releases`);
  const releases: Release[] = await res.json();

  return {
    props: {
      releases: releases || [], // Ensure releases is an array
    },
  };
};

const Releases: React.FC<ReleasesProps> = ({ releases }) => {
  if (!releases || !releases.length) {
    return <div className="flex text-white">No releases available.</div>;
  }

  return (
    <div className="pt-14 pb-14 md:pt-32 md:pb-20 font-mont text-white">
      <div className="flex flex-col items-center py-6 md:py-16">
        <h2 className="text-[16px] md:text-[28px] font-medium">
          FAN FAVORITES
        </h2>
        <p className="text-[10px] md:text-[18px]">Check out these bangers</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
        {releases.map((release) => (
          <SongCard
            key={release.id}
            imgSrc={release.imageUrl}
            name={release.name}
            spotify={release.spotify}
            apple={release.apple}
            youtube={release.youtube}
            soundcloud={release.soundcloud}
          />
        ))}
      </div>
    </div>
  );
};

export default Releases;
