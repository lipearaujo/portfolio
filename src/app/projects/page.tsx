"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/effect-fade";

import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";
import ButtonSlide from "@/components/ButtonSlide";

const projects = [
  {
    id: "01",
    title: "Movie API",
    description:
      "Uma API desenvolvida com base no serviço online de streaming Netflix que faz requisições para uma base de dados gratuita e de código aberto sobre filmes e séries de TV chamada TMDb (The Movie Database) utilizando ReactJS e Axios.",
    tecnologies: [{ stack: "React.js" }, { stack: "Css3" }, { stack: "Axios" }],
    githubLink: "https://github.com/lipearaujo/movieAPI",
    liveCode: "https://movie-api-nine-wheat.vercel.app/",
    image: "/assets/MovieAPI.PNG",
  },
  {
    id: "02",
    title: "Nest E-commerce",
    description:
      "Um E-commerce completo com cadastro, login e autenticação utilizando NextJS, NestJS, Prisma e SQLite. Os produtos são capturados através de um banco de dados podendo ser filtrados. Para a autenticação foi utilizado o serviço JWT. ",
    tecnologies: [
      { stack: "Next.js" },
      { stack: "Nest" },
      { stack: "Tailwind" },
      { stack: "Prisma" },
      { stack: "SQLite" },
    ],
    githubLink: "https://github.com/lipearaujo/nestEcomm",
    liveCode: "",
    image: "/assets/NestEcomm.png",
  },
  {
    id: "03",
    title: "Chat App",
    description: "Aplicativo de chat ao vivo utilizando Socket.",
    tecnologies: [
      { stack: "React.js" },
      { stack: "Css" },
      { stack: "Express" },
    ],
    githubLink: "https://github.com/lipearaujo/React-Node/tree/master/chat-app",
    liveCode: "",
    image: "/assets/Chat.png",
  },
];

type Props = {};

const Services = (props: Props) => {
  const [project, setProject] = useState(projects[0]);
  const swiper = useSwiper();

  useEffect(() => {
    fetchGitHub();
  });

  const fetchGitHub = async () => {
    const response = await fetch(
      "https://api.github.com/users/lipearaujo/repos"
    );
    const data = response.json();
    console.log(data);
  };

  const handleSlideChange = (index: any) => {
    const currentIndex = index.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.7, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col sm:gap-[30px] sm:flex-row">
          <div className="w-full sm:w-[50%] sm:h-[460px] order-2 sm:order-none flex flex-col gap-[30px] sm:justify-between">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold">{project.id}</div>
              <h2 className="text-[42px] font-bold">{project.title}</h2>
              <p className="text-white/50">{project.description}</p>
              <ul className="flex gap-4">
                {project.tecnologies.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[#42ffa0]">
                      {item.stack}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link href={project.githubLink}>
                  <div className="w-[70px] h-[70px] bg-[#272627] rounded-full flex items-center justify-center">
                    <FaGithub className="text-3xl hover:text-[#42ffa0]" />
                  </div>
                </Link>
                {project.liveCode !== "" ? (
                  <Link href={project.liveCode}>
                    <div className="w-[70px] h-[70px] bg-[#272627] rounded-full flex items-center justify-center">
                      <FaLocationArrow className="text-3xl hover:text-[#42ffa0]" />
                    </div>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[50%] mb-12 sm:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px]">
                      <Image
                        src={item.image}
                        alt=""
                        priority
                        quality={100}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <ButtonSlide />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
