import React from "react";
import { motion } from "framer-motion";

import Skill from "./Skill";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostgresql,
  SiTestinglibrary,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

type Props = {};

export default function skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      {/* 
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficency
      </h3> */}

      <div className="grid grid-cols-4 gap-5">
        <SiTypescript
          className=" object-cover w-12 h-12 xl:w-32
          xl:h-32 "
        />
        <SiJavascript
          className=" object-cover w-12 h-12 xl:w-32
          xl:h-32 "
        />
        <FaJava
          className=" object-cover w-12 h-12 xl:w-32
    xl:h-32 "
        />
        <SiReact
          className=" object-cover w-12 h-12 xl:w-32
  xl:h-32 "
        />
        <TbBrandNextjs
          className=" object-cover w-12 h-12 xl:w-32
xl:h-32 "
        />
        <SiRedux
          className=" object-cover w-12 h-12 xl:w-32
xl:h-32 "
        />
        <SiPython
          className=" object-cover w-12 h-12 xl:w-32
      xl:h-32 "
        />
        <SiTestinglibrary
          className=" object-cover w-12 h-12 xl:w-32
      xl:h-32 "
        />
        <SiPostgresql
          className=" object-cover w-12 h-12 xl:w-32
    xl:h-32 "
        />
        <SiHtml5
          className=" object-cover w-12 h-12 xl:w-32
      xl:h-32 "
        />
        <SiCss3
          className=" object-cover w-12 h-12 xl:w-32
      xl:h-32 "
        />
        <SiGit
          className=" object-cover w-12 h-12 xl:w-32
      xl:h-32 "
        />
      </div>
    </motion.div>
  );
}
