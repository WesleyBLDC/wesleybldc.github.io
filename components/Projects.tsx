import React from "react";
import Image from "next/image";
import pfImage from "../public/project_flow_website.png";
type Props = {};

export default function projects({}: Props) {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          {/* image */}
          <Image
            src={pfImage}
            alt="StartIT Logo"
            // width={200}
            // height={150}
            className="relative mx-auto object-cover w-[600px] sm:w-[400px]"
          />
          <h4 className="text-4xl font-semibold text-center">Project Flow</h4>
          <ul className="md:text-lg text-xs text-left md:text-left">
            <li>
              • To help university students become more productive by reducing
              distractions and building better study habits. It offers a
              conducive environment for students to enter a state of flow, and
              fosters improved study habits through progress tracking.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
