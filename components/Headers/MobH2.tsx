import { useEffect, useState } from "react";
import SlideOverMenu from "../SlideOverMenu/SlideOverMenu";
type Props = {};

export default function MobH2({}: Props) {
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
      <SlideOverMenu isBlack={false} />
    </div>
  );
}
