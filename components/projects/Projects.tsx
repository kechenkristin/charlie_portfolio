import React from "react";
import { projects } from "../../data/content/projects";

import Image from "next/image";

function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {projects.map((item, index) => {
        return (
          <div
            className="w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            key={index}
          >
            <a href={item.link} target="_blank" className="w-full">
              <Image
                className="w-full h-96 object-cover"
                src={item.img}
                alt={item.desc}
                width={400}
                height={400}
              />
                <div className="p-4 bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-b-lg w-full">
                  <p className="text-gray-800 text-left text-base font-semibold">{item.desc}</p>
                </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
