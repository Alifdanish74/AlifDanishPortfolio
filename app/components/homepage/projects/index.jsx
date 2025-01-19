// @flow strict
"use client";
import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import { LinkPreview } from "../../ui/link-preview";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      {/* <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-2xl font-semibold text-black dark:text-white">
                Digital Wedding Card Invitation <br />
                {/* <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Jemputkahwin.com.my
                </span> */}
                <LinkPreview
                  url="https://jemputkahwin.com.my"
                  className="text-4xl md:text-[6rem] font-bold mt-1 leading-none"
                >
                  JemputKahwin.com.my
                </LinkPreview>{" "}
              </h1>
            </>
          }
        >
          <Image
            // src={`/linear.webp`}
            src={`/jemputkahwinscreenshot.png`}
            alt="hero"
            height={720}
            width={1898}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Projects;
