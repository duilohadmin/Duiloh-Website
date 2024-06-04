import React from "react";
import StreamList from "../StreamList/StreamList";

function Landing() {
  return (
    <div className="min-h-[calc(100vh-85px)] flex justify-center md:justify-start min-[1285px]:justify-end ">
      <div
        className=" font-mont 
                  mt-40 
                  min-[1285px]:mr-[60vw] 
                  w-full
                  sm:w-[420px]
                  mr-8 ml-8
                  sm:ml-12
                text-white"
      >
        <p className="text-xl sm:text-3xl underline underline-offset-[50px] decoration-dgreen">
          OFFICIAL SITE
        </p>

        <h1
          className="text-[70px] sm:text-[99px] font-medium mt-16 "
          // style={{ fontFamily: "BrownSugar", fontWeight: "bolder" }}
        >
          DUILOH
        </h1>
        <p className="text-base sm:text-xl text-white text-opacity-70 mt-5  w-80 sm:w-[405px] ">
          The luxurious sounds of Duiloh will make any set of headphones turn
          into a concert-worthy experience.
        </p>
        <StreamList />
      </div>
    </div>
  );
}

export default Landing;
