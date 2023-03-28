import React from "react";
import { motion } from "framer-motion";
import profilePic from "../public/wesley_professional_photo.jpeg";

type Props = {
  directionLeft?: boolean;
};

export default function skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={profilePic.src}
        className="rounded-full border border-gray-588 object-cover w-24 h-24 xl:w-32
      xl:h-32 filter group-hover:grayscale transition duration-300 case-in-out"
      />
    </div>
  );
}
