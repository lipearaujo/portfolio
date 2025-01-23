"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GoHome } from "react-icons/go"; //home
import { GoHomeFill } from "react-icons/go"; //home hover
import { MdOutlinePerson } from "react-icons/md"; //perfil
import { MdPerson } from "react-icons/md"; //perfil hover
import { MdOutlineWorkOutline } from "react-icons/md"; //services
import { MdOutlineWork } from "react-icons/md"; //services hover
import { MdOutlineEmail } from "react-icons/md"; //email
import { MdEmail } from "react-icons/md"; //contact hover

const links = [
  { name: "home", path: "/", icon: <GoHome />, iconHover: <GoHomeFill /> },
  {
    name: "sobre",
    path: "/about",
    icon: <MdOutlinePerson />,
    iconHover: <MdPerson />,
  },
  {
    name: "projetos",
    path: "/projects",
    icon: <MdOutlineWorkOutline />,
    iconHover: <MdOutlineWork />,
  },
  {
    name: "contato",
    path: "/contact",
    icon: <MdOutlineEmail />,
    iconHover: <MdEmail />,
  },
];

type Props = {};

const Navigation = (props: Props) => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname &&
              "text-[#42ffa0] font-bold border-b-2 border-[#42ffa0]"
            }  text-xl capitalize hover:text-[#42ffa0] hover:font-bold transition-all duration-300`}
          >
            <div className="flex items-center justify-center gap-2">
              {link.path === pathname ? (
                <>
                  <span>{link.iconHover}</span>
                  <span>{link.name}</span>
                </>
              ) : (
                <>
                  {" "}
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
