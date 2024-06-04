import Image from "next/image";
import Link from "next/link";
import { openInNewTab } from "../../utils";
import { useState, useEffect } from "react";
const Header2: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showHeaderPosition = 100;

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > showHeaderPosition);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Class to control the visibility and animation
  const headerClass = isVisible ? "h-[40px] opacity-100" : "h-0 opacity-0";

  return (
    <div
      className={`  
      w-full h-[50px] flex items-center fixed 
      bg-header2-gradient
      transition-all duration-300 ease-in-out ${headerClass} 
      z-30`}
    >
      {/* Left-aligned LOGO */}
      <div className="flex-grow-0">
        <div className="text-lg  font-extrabold  tracking-widest font-sugar ml-10 text-white">
          ` DUILOH LOGO `
        </div>
      </div>

      {/* Right-aligned elements grouped together */}
      <div className="flex-grow flex justify-end items-center">
        {/* Navigation Buttons */}
        <div className="flex font-mont font-medium text-white">
          <Link href="/" className=" h-[40px]">
            <button className="ml-5 h-[40px]">HOME</button>
          </Link>
          <Link href="/bio" className=" h-[40px]">
            <button className="ml-10 h-[40px]">BIO</button>
          </Link>
          <Link href="/services" className=" h-[40px]">
            <button className="ml-10 h-[40px]">SERVICES</button>
          </Link>
          <Link href="/beats" className=" h-[40px]">
            <button className="ml-10 h-[40px]">BEATS</button>
          </Link>
          <Link href="/contact" className=" h-[40px]">
            <button className="ml-10 h-[40px]">CONTACT</button>
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
              src={"/instagram.svg"}
              width="16"
              height="16"
            />
          </button>
          <Image
            src="/x-white.svg"
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
              src={"/soundcloud.svg"}
              width="20"
              height="20"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
