import React from "react";
import Image from "next/image";
import { openInNewTab } from "@/utils";
function Footer1() {
  const Year = new Date().getFullYear();
  return (
    <div className="bg-prim bg-gradient-to-b  from-tert flex flex-col font-mont py-6">
      <div className="flex justify-center items-center">
        <Image
          onClick={() => openInNewTab("https://www.instagram.com/_duiloh_/")}
          src="/instagram.svg"
          width="35"
          height="35"
          alt="instagram"
          className="cursor-pointer"
        />
        <Image
          src="/x-white.svg"
          width="32"
          height="32"
          alt="facebook"
          onClick={() => openInNewTab("https://x.com/Duiloh")}
          className="cursor-pointer ml-5"
        />
        <Image
          src="/soundcloud.svg"
          width="40"
          height="40"
          alt="soundcloud"
          onClick={() => openInNewTab("https://soundcloud.com/user-932376509")}
          className="cursor-pointer ml-5"
        />
      </div>
      <div className="flex justify-center text-xs text-white mt-4">
        © Duiloh {Year} |
        <div
          className=" w-auto flex cursor-pointer"
          onClick={() => openInNewTab("https://www.naulaware.com/")}
        >
          &nbsp; Powered by{" "}
          <Image
            src="/naulaware.png"
            width={"30"}
            height={"30"}
            alt="naulaware"
            className="-ml-1 -mt-2 "
          />
          <p className="-ml-[8px] italic">aulaware</p>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
