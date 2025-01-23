"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Link from "next/link";

import { GoDownload } from "react-icons/go";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-between sm:pt-8 sm:pb-24">
          {/* text */}
          <div className="text-center sm:text-left order-2 sm:order-none">
            <span className="text-xl">Desenvolvedor Full-Stack</span>
            <h1 className="text-5xl mb-6 xl:text-[80px] leading-[1.1] font-semibold">
              Olá, sou o <br />
              <span className="text-[#42ffa0]">Filipe Araujo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 font-[300]">
              Bacharel em Engenharia de Computação pela Universidade Federal da
              Grande Dourados - UFGD com interesse pela área de Desenvolvimento
              Web. Na faculdade despertei o interesse pela programação,
              especialmente pelas tecnologias utilizadas no desenvolvimento de
              aplicações web e mobile e desde então venho me aperfeiçoando nessa
              área.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <Link
                href="/documents/resume.pdf"
                className="uppercase text-[#42ffa0] font-[500] flex items-center gap-2 px-8 py-4 border border-[#42ffa0] rounded-full hover:text-[#121012] hover:bg-[#42ffa0] hover:transition-all duration-500"
              >
                Download CV
                <GoDownload size={24} />
              </Link>

              <div className="mb-8 sm:mb-0">
                <Social />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 sm:order-none sm:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
