import React from "react";
import SongCard from "../SongCard/SongCard";

function Releases() {
  const releases = {
    r1: {
      name: "Beautiful Villain (Remastered)",
      imgSrc: "/bv.png",
      spotify:
        "https://open.spotify.com/track/7F3p1UVBsNF7EeuuCnoL1z?si=63723af07c394a1a",
      apple:
        "https://music.apple.com/us/album/beautiful-villain-remastered-single/1710036874",
      youtube: "https://youtu.be/ge40e5R_Pho?si=iry0vznXVDhD-xja",
      soundcloud:
        "https://soundcloud.com/user-932376509/beautiful-villain?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    r2: {
      name: "Dissing a College",
      imgSrc: "/dac.png",
      spotify:
        "https://open.spotify.com/track/5XgCntvlVjAEmYwSPSoF9L?si=414be7cbf915478d",
      apple:
        "https://music.apple.com/us/album/dissing-a-college/1702922840?i=1702922843",
      youtube: "https://youtu.be/eIrXpr_gYcs?si=efXUyBrr1y2KPHx5",
      soundcloud: "https://youtu.be/dQw4w9WgXcQ?si=Sfk32YgNDij2bBzm", //NOT AVAILABLE
    },
    r3: {
      name: "AU Uninvited",
      imgSrc: "/au-u.png",
      spotify:
        "https://open.spotify.com/track/1oVY1M6YebgmwqTVhBXavH?si=32f484acb2eb4392",
      apple: "https://music.apple.com/us/album/au-uninvited-single/1704102049",
      youtube: "https://youtu.be/i-NllKlzSyo?si=VBpr-3j58If6q6de",
      soundcloud: "https://youtu.be/dQw4w9WgXcQ?si=Sfk32YgNDij2bBzm", //NOT AVAILABLE
    },
    r4: {
      name: "Hiding Shadraq",
      imgSrc: "/hs.png",
      spotify:
        "https://open.spotify.com/track/2ZYwisQBbvJtwAc4HNeVyo?si=3b5e29e1a7254ba1",
      apple:
        "https://music.apple.com/us/album/hiding-shadraq-single/1701019782",
      youtube: "https://youtu.be/cRwaliGpvI0?si=vHrS01FQFieUm3wq",
      soundcloud: "https://youtu.be/dQw4w9WgXcQ?si=Sfk32YgNDij2bBzm", //NOT AVAILABLE
    },
  };
  return (
    <div className=" pt-14 pb-14 md:pt-32 md:pb-20 font-mont text-white">
      <div className=" flex flex-col items-center py-6 md:py-16">
        <h2 className="text-[16px] md:text-[28px]  font-medium ">
          FAN FAVORITES
        </h2>
        <p className="text-[10px] md:text-[18px]">Check out these bangers</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 ">
        {Object.values(releases).map((release, index) => (
          <SongCard
            key={index}
            imgSrc={release.imgSrc}
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
}

export default Releases;
