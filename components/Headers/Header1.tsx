import Image from "next/image";
import Link from "next/link";
import { openInNewTab } from "@/utils";
function Header1() {
  return (
    <div className="w-full h-50px flex items-center absolute z-50 bg-header1-gradient ">
      {/* Left-aligned LOGO */}
      <div className="flex-grow-0">
        <div className="text-lg font-bold ml-10 text-black ">LOGO</div>
      </div>

      {/* Right-aligned elements grouped together */}
      <div className="flex-grow flex justify-end items-center">
        {/* Navigation Buttons */}
        <div className="flex font-mont font-medium text-black ">
          <Link href="/" className=" h-[80px]  ">
            <button
              className="h-[80px] z-50"
              onClick={() => console.log("Home clicked")}
            >
              HOME
            </button>
          </Link>
          <Link href="/bio" className=" h-[80px] ml-10 ">
            <button
              className=" h-[80px]"
              onClick={() => console.log("Bio clicked")}
            >
              BIO
            </button>
          </Link>
          <Link href="/services " className="h-[80px] ml-10">
            <button
              className=" h-[80px] "
              onClick={() => console.log("Services clicked")}
            >
              SERVICES
            </button>
          </Link>
          <Link href="/shop" className=" h-[80px] ml-10 ">
            <button
              className=" h-[80px]"
              onClick={() => console.log("Shop clicked")}
            >
              SHOP
            </button>
          </Link>
          <Link href="/contact" className="0 h-[80px] ml-10 ">
            <button
              className=" h-[80px]"
              onClick={() => console.log("Contact clicked")}
            >
              CONTACT
            </button>
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
          <button
            onClick={() =>
              openInNewTab("https://soundcloud.com/user-932376509")
            }
            className="ml-5 h-[20px] w-[20px]"
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
