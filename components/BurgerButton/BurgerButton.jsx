import React from "react";
import { MotionConfig, motion } from "framer-motion";

const VARIANTS = {
  top: {
    open: { rotate: "45deg", top: "50%" },
    closed: { rotate: "0deg", top: "35%" },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: {
      rotate: "-45deg",
      top: "50%",
    },
    closed: {
      rotate: "0deg",
      top: "65%",
    },
  },
};

export default function BurgerButton({ isActive, toggleMenu, isBlack }) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isActive ? "open" : "closed"}
        onClick={toggleMenu}
        className="relative ml-2 h-[45px] w-[45px] z-50"
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-[3px] w-8 ${
            !isBlack ? "bg-white" : "bg-black"
          } z-50`}
          style={{ x: "-50%", y: "-50%", left: "50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-[3px] w-8 ${
            !isBlack ? "bg-white" : "bg-black"
          }`}
          style={{ x: "-50%", y: "-50%", left: "50%", top: "50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-[3px] w-8 ${
            !isBlack ? "bg-white" : "bg-black"
          }`}
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",
            top: "65%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
