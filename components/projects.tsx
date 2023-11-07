"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData, projectsDataAn, projectsDataMl } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <Tabs defaultValue="web-project" className="w-full">
        <TabsList className="w-full flex mb-7  justify-between items-center ">
          <TabsTrigger
            className="w-full uppercase font-bold "
            value="web-project"
          >
            web project
          </TabsTrigger>
          <TabsTrigger
            className="w-full  uppercase font-bold"
            value="ml-project"
          >
            ml project
          </TabsTrigger>
          <TabsTrigger className="w-full  uppercase font-bold" value="android">
            android
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web-project">
          <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ml-project">
          <div>
            {projectsDataMl.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="android">
          <div className="w-[45rem] px-3">
            {/* {projectsDataAn.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))} */}
            No Project yet.
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
