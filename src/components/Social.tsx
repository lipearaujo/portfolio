import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

type Props = {};

const socials = [
  { icon: <FaGithub />, path: "https://github.com/lipearaujo" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/marcos-filipe-censi-de-araujo-337486136/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/lipecensi/" },
  { icon: <FaTwitter />, path: "https://x.com/lipearaujo97" },
];

const Social = (props: Props) => {
  return (
    <div className="flex items-center justify-center gap-6">
      {socials.map((social, index) => {
        return (
          <Link
          key={index}
            href={social.path}
            className="w-9 h-9 text-[#66ffb2] border border-[#42ffa0] rounded-full flex justify-center items-center hover:text-[#121012] hover:bg-[#42ffa0] hover:transition-all duration-500"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
