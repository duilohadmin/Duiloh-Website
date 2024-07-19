import React from "react";
import StreamList from "../StreamList/StreamList";
import { Suspense } from "react";
import styles from "./Landing.module.css"; // Import CSS module for scoped styles

type Landing = {
  code: string;
  imageUrl: string;
};

export type LandingProps = {
  landingContent: Landing;
};

export const getLandingContentProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/landing`);
  const data = await res.json();
  const landingContent: Landing = data.data; // Adjusted to match the response structure

  return {
    props: {
      landingContent,
    },
  };
};

const Landing: React.FC<LandingProps> = ({ landingContent }) => {
  return (
    <div
      className={`relative min-h-[calc(100vh-85px)] flex justify-center md:justify-start min-[1285px]:justify-end bg-cover bg-center bg-no-repeat mt-[4rem]`}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className={`${styles.backgroundFade} absolute inset-0`}
          style={{
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 50%,
              rgba(24, 24, 24, 1) 100%
            ),
            url(${landingContent.imageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
            animation: `${styles.fadeInBottomToTop} 2s ease-out`, // Using CSS module for animation
          }}
        ></div>
      </Suspense>

      <div className="absolute inset-0 bg-prim opacity-75"></div>
      <div
        className="z-10
                  font-mont 
                  sm:w-[420px]
                  sm:ml-12
                  md:ml-36
                  mt-28 mr-8 ml-8
                  min-[1285px]:mr-[60vw] 
                  w-full
                  text-white                  
                  relative"
      >
        <p className="text-xl sm:text-3xl underline underline-offset-[50px] decoration-dgreen">
          OFFICIAL SITE
        </p>

        <h1 className="text-[70px] sm:text-[99px] font-medium mt-16">DUILOH</h1>
        <p className="text-base sm:text-xl text-white text-opacity-90 mt-5 w-80 sm:w-[405px]">
          Be inspired by the luxurious sounds of Duiloh.
        </p>
        <StreamList />
      </div>
    </div>
  );
};

export default Landing;
