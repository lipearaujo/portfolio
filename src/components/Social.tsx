import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {};

const socials = [
  { icon: <FaGithub size={22} />, path: "https://github.com/lipearaujo" },
  {
    icon: <FaLinkedin size={22} />,
    path: "https://www.linkedin.com/in/marcos-filipe-censi-de-araujo-337486136/",
  },
];

const Social = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className="w-12 h-12 text-[#66ffb2] border border-[#42ffa0] rounded-full flex justify-center items-center hover:text-[#121012] hover:bg-[#42ffa0] hover:transition-all duration-500"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
