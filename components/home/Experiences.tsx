import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import experiences from "../../data/content/experiences";

import ExperienceCard from "../experiences/ExperienceCard";

function Experiences() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title="Here are a few of my past experiences." />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {experiences.slice(0, 3).map((item) => {
          return (
            <ExperienceCard key={item.id} experience={item} />
          );
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/experiences">
          <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
            View All
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Experiences;
