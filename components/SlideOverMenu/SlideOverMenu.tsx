import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import BurgerButton from "../BurgerButton/BurgerButton";
import Link from "next/link";
import Image from "next/image";
import { openInNewTab } from "@/utils";
interface SlideOverMenuProps {
  isBlack: boolean;
}

const SlideOverMenu: React.FC<SlideOverMenuProps> = ({ isBlack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (path: string) => {
    if (router.pathname === path) {
      toggleMenu(); // Close the menu if the path is the same as the current path
    }
  };

  return (
    <>
      <div className="-mt-1 z-[70]">
        <BurgerButton
          isActive={isOpen}
          toggleMenu={toggleMenu}
          isBlack={isBlack}
        />
      </div>

      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-tert bg-gradient-to-tr from-white z-40`}
        style={{ marginTop: "40px" }}
      >
        <div className="w-[75vw] h-full flex flex-col bg-black bg-opacity-50">
          <div className="text-white p-5 flex flex-col items-center flex-grow font-sugar">
            <h1 className="text-4xl font-bold">D U I L O H</h1>
            <ul className="mt-16 font-medium text-[2rem]">
              <li onClick={() => handleLinkClick("/")}>
                <Link href="/">HOME</Link>
              </li>
              <li onClick={() => handleLinkClick("/bio")} className="my-4">
                <Link href="/bio">BIO</Link>
              </li>
              <li onClick={() => handleLinkClick("/services")} className="my-4">
                <Link href="/services">SERVICES</Link>
              </li>
              <li onClick={() => handleLinkClick("/beats")} className="my-4">
                <Link href="/beats">BEATS</Link>
              </li>
              <li onClick={() => handleLinkClick("/contact")}>
                <Link href="/contact">CONTACT</Link>
              </li>
              <li className="flex justify-center items-center p-6">
                <Image
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/_duiloh_/")
                  }
                  src="/instagram.svg"
                  width="35"
                  height="35"
                  alt="instagram"
                  className="cursor-pointer"
                />
                <Image
                  onClick={() => openInNewTab("https://x.com/Duiloh")}
                  src="/x-white.svg"
                  width="35"
                  height="35"
                  alt="x-twitter"
                  className="cursor-pointer ml-5"
                />
                <Image
                  src="/soundcloud.svg"
                  width="40"
                  height="40"
                  alt="soundcloud"
                  onClick={() =>
                    openInNewTab("https://soundcloud.com/user-932376509")
                  }
                  className="cursor-pointer ml-5"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-65 z-0"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default SlideOverMenu;
