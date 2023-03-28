import React from "react";
import { motion } from "framer-motion";
import profilePic from "../public/wesley_professional_photo.jpeg";

type Props = {};

export default function about({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={profilePic.src}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Background</h4>
        <p className=" text-sm">
          Hey there, my name is Wesley Dela Cruz. I am studying Computer Science
          at the National University of Singapore, with a focus on software
          engineering and building useful projects for society. In addition, I
          also run my own e-commerce business in the home and lifestyle
          category.
        </p>
      </div>
    </motion.div>
  );
}
