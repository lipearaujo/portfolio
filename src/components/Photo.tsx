"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Photo = (props: Props) => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] sm:w-[498px] sm:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.jpeg"
            alt=""
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>

        <motion.svg
          className="w-[300px] h-[300px] sm:w-[506px] sm:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#42ffa0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

/*           <motion.svg
            className="w-[300px] h-[300px] sm:w-[506px] sm:h-[506px]"
            fill="transparent"
            viewBox="0 0 506 506"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#42ffa0"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg> */
