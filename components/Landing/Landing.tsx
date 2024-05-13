import React from "react";

function Landing() {
  return (
    <div className=" min-h-[calc(100vh-85px)] flex min-[1285px]:justify-end ">
      <div
        className=" font-mont 
                  mt-40 
                  min-[1285px]:mr-[60vw] 
                  md:w-[408px]
                  ml-12
                text-black"
      >
        <p className="text-xl sm:text-3xl underline underline-offset-[50px] decoration-dgreen">
          OFFICIAL SITE
        </p>

        <h1 className="text-[70px] sm:text-[99px] font-medium mt-16">DUILOH</h1>
        <p className="text-lg sm:text-3xl text-black text-opacity-70 mt-5">
          New Single &quot;Swag Nation&quot;
        </p>

        <button
          className="border border-silver bg-metallic-silver-gradient rounded-3xl 
            px-8 py-2
            md:px-16 md:py-4 
            mt-5 sm:mt-14 shadow-md
            font-medium text-black text-xs tracking-widest"
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          STREAM NOW
        </button>
      </div>
    </div>
  );
}

export default Landing;
