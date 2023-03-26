import React from "react";
import profilePic from "../public/wesley_professional_photo.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function experienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={profilePic.src}
        className="h-32 w-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div>
        <h4 className="text-4xl font-light">CEO OF SDASDA</h4>
        <p className="font-bold text-2xl mt-1">details</p>
        <div className="flex space-x-2 my-2">
          <Image
            src={profilePic}
            alt="StartIT Logo"
            className="h-10 w-10 rounded-full"
          ></Image>

          <Image
            src={profilePic}
            alt="StartIT Logo"
            className="h-10 w-10 rounded-full"
          ></Image>
          <Image
            src={profilePic}
            alt="StartIT Logo"
            className="h-10 w-10 rounded-full"
          ></Image>
          {/* tech used */}
        </div>
        <p className="uppercase py-5 ">started work eneded</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
