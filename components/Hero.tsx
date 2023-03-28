import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/wesley_professional_photo.jpeg";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey I'm Wesley, CS @ NUS",
      "Passionate about Healthcare+Tech",
      "<Love to code and build useful stuff>",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={profilePic}
        alt="StartIT Logo"
        // width={200}
        // height={150}
        className="h-32 w-32 relative rounded-full mx-auto object-cover bg-red-600"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6l font-semibold px-10">
          <span className="mr-3"> {text}</span>
          <Cursor cursorColor="#F7Ab0A" />
        </h1>

        {/* Buttons */}
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experiences">
            <button className="heroButton">Experiences</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
