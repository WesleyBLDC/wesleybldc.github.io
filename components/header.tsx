import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

// type Props = {};

// export default function header({}: Props) {

export default function header(): JSX.Element {
  return (
    <header className="sticky top-0 flex items-start justify-center max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="flex flex-row items-center">
          {/* Social Icons */}
          <SocialIcon
            url="https://linkedin.com/in/wesleybldc"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/wesleybldc"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="mailto:wesley@u.nus.edu?subject=Wesley Dela Cruz Portfolio"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>
    </header>
  );
}
