import React from "react";
import StreamList from "../StreamList/StreamList";
import styles from "../../styles/landing.module.css";

function Landing() {
  return (
    <div
      className={`relative min-h-[calc(100vh-85px)] flex justify-center md:justify-start min-[1285px]:justify-end bg-cover bg-center bg-no-repeat mt-[4rem]`}
    >
      <div className={styles["background-fade"]}></div>
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
      <style jsx>{`
        @media (max-width: 640px) {
          .bg-cover {
            background-size: cover !important;
          }
        }
        @media (min-width: 768px) {
          .bg-cover {
            background-position: right 20% center !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Landing;
