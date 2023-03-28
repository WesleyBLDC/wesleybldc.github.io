import React from "react";
import profilePic from "../public/wesley_professional_photo.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function experienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={profilePic.src}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer Internship</h4>
        <p className="font-bold text-2xl mt-1">Details</p>
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

        <p className="uppercase py-5 ">Mar 2018 – Aug 2018</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Improved robots force algorithm accuracy by 20% by integrating force
            sensor feedback into the algorithm using C++ and ROS.
          </li>
          <li>
            Automated PID force calibration using Python and ROS to track force
            feedback and provide optimal PID values, reducing the need for
            manual calibration by hand and calculation.
          </li>
          <li>
            Integrated BLDC/stepper motors, encoders, and various sensors into
            robot using Arduino, C++, and ROS.
          </li>
        </ul>
      </div>
    </article>
  );
}
