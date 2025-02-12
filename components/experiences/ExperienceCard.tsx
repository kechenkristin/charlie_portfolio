import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ExperienceCard({ experience }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col experiences-center md:experiences-start md:justify-center"
      key={experience.id}
    >
      <a
        href={experience.link || experience.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-experienceCard`}
      >
        <img
          className="w-full rounded-md"
          src={experience.img}
        />
      </a>
      <div className="w-full mt-5">
        <div className="flex experiences-center justify-between">
          <a href={experience.link || experience.github} target="_blank">
            <h3 className="text-lg font-bold">{experience.title}</h3>
          </a>
          <div className="space-x-2">
            {experience.link && (
              <a href={experience.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {experience.github && (
              <a href={experience.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-fun-gray text-left text-sm">{experience.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {experience.tags.map((tag, index) => {
            return (
              <li key={tag}>
                <Link href={`/experiences/tag/${kebabCase(tag)}`}>
                  <div className="m-1 rounded-lg text-sm bg-fun-pink-dark py-1 px-2 cursor-pointer hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
