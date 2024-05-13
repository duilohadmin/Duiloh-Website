import React from "react";
import Image from "next/image";
import { openInNewTab } from "@/utils";
function Footer1() {
  return (
    <div className="bg-tert flex flex-col font-mont py-6">
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
          src="/soundcloud.svg"
          width="40"
          height="40"
          alt="soundcloud"
          onClick={() => openInNewTab("https://soundcloud.com/user-932376509")}
          className="cursor-pointer ml-5"
        />
      </div>
      <div className="flex justify-center text-xs text-white mt-5">
        © 2024 Naulaware
      </div>
    </div>
  );
}

export default Footer1;
