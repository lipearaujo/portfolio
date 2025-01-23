"use client";
import React, { useState } from "react";

import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa"; //react
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { motion } from "framer-motion";

type Props = {};

const aboutMe = [
  {
    title: "Sobre Mim",
    name: "Filipe Araujo",
    experience: "1 Ano",
    phone: "(+55) 67 99977-3545",
    github: "github.com/lipearaujo",
    email: "filipecensi@hotmail.com",
    languages: "Português, Inglês",
  },
];

const experience = [
  {
    title: "Minha Experiência",
    experienceCard: [
      {
        year: "06/2023 - 08/2023",
        title: "Estagiário Desenvolvedor Full-Stack",
        company: "EBSERH - Filial HU-UFGD",
      },
    ],
  },
];

const skills = [
  {
    title: "Minhas Habilidades",
    skillsIcons: [
      { icon: <FaReact />, tooltip: "reacj.js" },
      { icon: <SiNextdotjs />, tooltip: "next.js" },
      { icon: <FaJs />, tooltip: "javascript" },
      { icon: <FaNodeJs />, tooltip: "node.js" },
      { icon: <FaHtml5 />, tooltip: "html5" },
      { icon: <FaCss3 />, tooltip: "css3" },
      { icon: <SiTailwindcss />, tooltip: "tailwind" },
      { icon: <BiLogoPostgresql />, tooltip: "postgres" },
    ],
  },
];

const education = [
  {
    title: "Meus Cursos",
    educationCard: [
      {
        year: "2016 - 2023",
        title: "Engenharia de Computação",
        institute: "UFGD",
      },
      { year: "2020", title: "Front-End", institute: "Danki Code" },
      { year: "2021", title: "React.JS", institute: "Coder" },
      { year: "2021", title: "Full-Stack Web", institute: "Danki Code" },
      { year: "2022", title: "Ignite Lab", institute: "Rocketseat" },
      { year: "2023", title: "NLW IA", institute: "Rocketseat" },
    ],
  },
];

const About = (props: Props) => {
  const [btnValue, setBtnValue] = useState("Sobre");

  const [toggleState, setToggleState] = useState(1);

  const toggleButton = (index: number) => {
    setToggleState(index);
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[60px] sm:items-start sm:justify-start">
          <div className="max-w-[380px] flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Por quê me contratar ?</h1>
            <p className=" text-white/50 text-center sm:text-left">
              Tenho certeza que possuo as qualificações necessárias para
              desenvolver o que você procura.
            </p>

            <div className="flex flex-col w-full ">
              <div className="flex flex-col gap-6 w-full mx-auto sm:mx-0">
                <div onClick={() => toggleButton(1)}>
                  <button
                    className={toggleState === 1 ? "btn clicked" : "btn"}
                    onClick={() => setBtnValue("Sobre")}
                  >
                    Sobre
                  </button>
                </div>

                <div onClick={() => toggleButton(2)}>
                  <button
                    className={toggleState === 2 ? "btn clicked" : "btn"}
                    onClick={() => setBtnValue("Educação")}
                  >
                    Educação
                  </button>
                </div>

                <div onClick={() => toggleButton(3)}>
                  <button
                    className={toggleState === 3 ? "btn clicked" : "btn"}
                    onClick={() => setBtnValue("Skills")}
                  >
                    Skills
                  </button>
                </div>

                <div onClick={() => toggleButton(4)}>
                  <button
                    className={toggleState === 4 ? "btn clicked" : "btn"}
                    onClick={() => setBtnValue("Experiência")}
                  >
                    Experiência
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            {/* about section */}
            {btnValue === "Sobre" && (
              <div className="">
                {aboutMe.map((about, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex flex-col gap-6 text-center sm:text-left"
                    >
                      <h1 className="text-3xl font-bold">{about.title}</h1>
                      <div className="flex flex-col gap-6 sm:grid sm:grid-flow-col sm:grid-rows-3 mt-11">
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Nome</span>
                          <p className="text-[18px]">{about.name}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Experiência</span>
                          <p className="text-[18px]">{about.experience}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Contato</span>
                          <p className="text-[18px]">{about.phone}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Github</span>
                          <p className="text-[18px]">{about.github}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Email</span>
                          <p className="text-[18px]">{about.email}</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 sm:justify-start">
                          <span className="text-white/50">Idiomas</span>
                          <p className="text-[18px]">{about.languages}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* education section */}
            {btnValue === "Educação" && (
              <div className="w-full">
                {education.map((educ, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 text-center sm:text-left"
                    >
                      <h1 className="text-3xl font-bold">{educ.title}</h1>
                      <ul className="w-full h-[40vh] grid grid-cols-1 sm:grid-cols-2 gap-[30px] overflow-auto mt-11">
                        {educ.educationCard.map((card, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#272627] card-scroll w-full h-[180px] rounded-xl"
                            >
                              <div className="w-full h-full px-7 py-5 flex flex-col gap-3 items-center sm:items-start ">
                                <p className="text-[#42ffa0]">{card.year}</p>
                                <h2 className="text-xl font-bold">
                                  {card.title}
                                </h2>
                                <div className="flex items-center h-full gap-3">
                                  <p className="w-[5px] h-[5px] rounded-full bg-[#42ffa0]"></p>
                                  <p className="text-white/50">
                                    {card.institute}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* skills section */}
            {btnValue === "Skills" && (
              <div className="">
                {skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 text-center sm:text-left"
                    >
                      <h1 className="text-3xl font-bold">{skill.title}</h1>
                      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-11">
                        {skill.skillsIcons.map((skillIcon, index) => {
                          return (
                            <li
                              className="bg-[#272627] w-full h-[150px] rounded-xl flex items-center justify-center"
                              key={index}
                            >
                              <div className="tooltip cursor-pointer text-6xl hover:text-[#42ffa0] transition-all duration-300">
                                {skillIcon.icon}
                                <span className="tooltiptext text-[10px]">
                                  {skillIcon.tooltip}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {/* experience section */}
            {btnValue === "Experiência" && (
              <div className="">
                {experience.map((exp, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col gap-6 text-center sm:text-left"
                    >
                      <h1 className="text-3xl font-bold">{exp.title}</h1>

                      <ul className="w-full h-[40vh] grid grid-cols-1 sm:grid-cols-2 gap-[30px] overflow-auto mt-11">
                        {exp.experienceCard.map((card, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#272627] card-scroll w-full h-[180px] rounded-xl"
                            >
                              <div className="w-full h-full px-7 py-5 flex flex-col gap-3 items-center sm:items-start ">
                                <p className="text-[#42ffa0]">{card.year}</p>
                                <h2 className="text-xl font-bold">
                                  {card.title}
                                </h2>
                                <div className="flex items-center h-full gap-3">
                                  <p className="w-[5px] h-[5px] rounded-full bg-[#42ffa0]"></p>
                                  <p className="text-white/50">
                                    {card.company}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
