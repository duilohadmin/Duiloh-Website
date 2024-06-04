import Image from "next/image";
import Link from "next/link";
import { openInNewTab } from "@/utils";
function Header1() {
  return (
    <div className="w-full h-50px flex items-center absolute z-50 bg-header1-gradient ">
      {/* Left-aligned LOGO */}
      <div className="flex-grow-0">
        <div className="text-lg font-extrabold tracking-widest ml-10 text-black font-sugar">
          ` DUILOH LOGO `
        </div>
      </div>

      {/* Right-aligned elements grouped together */}
      <div className="flex-grow flex justify-end items-center">
        {/* Navigation Buttons */}
        <div className="flex font-mont font-medium text-black ">
          <Link href="/" className=" h-[80px]  ">
            <button className="h-[80px] z-50">HOME</button>
          </Link>
          <Link href="/bio" className=" h-[80px] ml-10 ">
            <button className=" h-[80px]">BIO</button>
          </Link>
          <Link href="/services " className="h-[80px] ml-10">
            <button className=" h-[80px] ">SERVICES</button>
          </Link>
          <Link href="/beats" className=" h-[80px] ml-10 ">
            <button className=" h-[80px]">BEATS</button>
          </Link>
          <Link href="/contact" className="0 h-[80px] ml-10 ">
            <button className=" h-[80px]">CONTACT</button>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center px-5">
          <button
            onClick={() => openInNewTab("https://www.instagram.com/_duiloh_/")}
            className="h-[16px]"
          >
            <Image
              alt="instagram"
              src={"/instagram-black.svg"}
              width="16"
              height="16"
            />
          </button>
          <Image
            src="/x-black.svg"
            alt="x-twitter"
            width={"14"}
            height={"14"}
            onClick={() => openInNewTab("https://x.com/Duiloh")}
            className=" cursor-pointer ml-2 "
          />
          <button
            onClick={() =>
              openInNewTab("https://soundcloud.com/user-932376509")
            }
            className="ml-2 h-[20px] w-[20px]"
          >
            <Image
              alt="soundcloud"
              src={"/soundcloud-black.svg"}
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header1;
