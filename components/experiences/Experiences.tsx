import React from "react";
import experiences from "../../data/content/experiences";
import { Experience } from "types";
import ExperienceCard from "./ExperienceCard";

type ExperienceProps = {
  overwriteExperiences?: Experience[];
};

function Experiences({ overwriteExperiences }: ExperienceProps) {
  const experiencesList = overwriteExperiences ? overwriteExperiences : experiences;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {experiencesList.map((item) => {
        return <ExperienceCard key={item.id} experience={item} />;
      })}
    </div>
  );
}

export default Experiences;
