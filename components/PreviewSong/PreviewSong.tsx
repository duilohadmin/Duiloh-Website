import React from "react";
import SoundCloudPlaya from "../SoundCloudPlaya/SoundCloudPlaya";

function PreviewSong() {
  return (
    <div className="px-8 font-mont text-black pb-24">
      <p className="w-full border-b border-dgreen my-5 md:my-10 py-4 md:py-6 text-[16px] md:text-[28px] ">
        LATEST TRACK
      </p>
      <SoundCloudPlaya />
    </div>
  );
}

export default PreviewSong;
