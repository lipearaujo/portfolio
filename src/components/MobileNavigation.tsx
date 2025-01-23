"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoClose } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";

import { GoHome } from "react-icons/go"; //home
import { GoHomeFill } from "react-icons/go"; //home hover
import { MdOutlinePerson } from "react-icons/md"; //perfil
import { MdPerson } from "react-icons/md"; //perfil hover
import { MdOutlineWorkOutline } from "react-icons/md"; //services
import { MdOutlineWork } from "react-icons/md"; //services hover
import { MdOutlineEmail } from "react-icons/md"; //email
import { MdEmail } from "react-icons/md"; //contact hover

type Props = {};

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

const MobileNavigation = (props: Props) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const pathname = usePathname();

  const handleMenuButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-center items-center">
      <div
        className={
          isOpen
            ? "fixed right-0 top-0 w-[70%] h-screen bg-[#1e1d1e] ease-in duration-500 z-50"
            : ""
        }
      >
        <div onClick={handleMenuButton} className="cursor-pointer">
          {isOpen ? (
            <>
              <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                  <h1>
                    Filipe<span className="text-[#42ffa0]">.</span>
                  </h1>
                </Link>
              </div>
              <div className="">
                <IoClose
                  size={32}
                  className="text-[#42ffa0] fixed right-4 top-2"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className={`${
                      link.path === pathname && "text-[#42ffa0] font-bold"
                    } w-[50%] p-2 rounded-full text-xl capitalize hover:text-[#42ffa0] hover:font-bold transition-all duration-300`}
                  >
                    <div
                      className="flex items-center justify-left gap-8"
                      key={index}
                    >
                      <span>{link.iconHover}</span>
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <CiMenuFries size={32} className="text-[#42ffa0]" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
