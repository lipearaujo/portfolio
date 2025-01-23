"use client";
import React from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";
import Form from "@/components/Form";

const infos = [
  {
    icon: <FaPhoneAlt />,
    title: "Contato",
    description: "(+55) 67 99977-3545",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "filipecensi@hotmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Endereço",
    description: "Dourados, MS - Brasil",
  },
];

type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-[30px]">
          <div className="sm:w-[54%] order-2 sm:order-none">
            <Form />
          </div>

          <div className="flex-1 flex items-center order-1 mb-8 sm:order-none sm:justify-center sm:mb-0 ">
            <ul className="flex flex-col gap-10">
              {infos.map((info, index) => {
                return (
                  <li key={index} className="flex gap-6 items-center">
                    <div className="w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] flex items-center justify-center rounded-md bg-[#272627] text-3xl text-[#42ffa0]">
                      {info.icon}
                    </div>
                    <div className="">
                      <p className="text-white/50">{info.title}</p>
                      <p className="text-xl">{info.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
