import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay, FaPause } from "react-icons/fa";

const BeatItem = ({ audioUrl, beatName }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWaveSurferReady, setIsWaveSurferReady] = useState(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ddd",
        progressColor: "#181818",
        height: 80,
        cursorWidth: 0,

        url: audioUrl,
      });

      wavesurfer.current.on("ready", () => {
        setIsWaveSurferReady(true);
      });

      wavesurfer.current.on("finish", () => {
        setIsPlaying(false);
      });

      return () => {
        if (wavesurfer.current) {
          wavesurfer.current.destroy();
          wavesurfer.current = null;
        }
      };
    }
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (isWaveSurferReady && wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={handlePlayPause}
          disabled={!isWaveSurferReady}
          className="mr-1"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div ref={waveformRef} className="w-[100px] md:w-[190px]"></div>
      </div>
      <p className="-mt-3 font-mont text-xs ">{beatName}</p>
    </div>
  );
};

export default BeatItem;
