import { kebabCase } from "@/utils/utils";
import { Experience } from "types";

const experiences: Experience[] = [
  {
    id: 0,
    title: "UoEPathway",
    desc: "Excited to have completed my training week with #UoEPathways, gaining insights from inspiring professionals in higher education—huge thanks to the organizers and my experience group for an amazing experience!",
    img: "/static/experiences/pathway.jpeg",
    link: "https://www.linkedin.com/posts/charlie-laing-17695a314_uoepathways-activity-7209549676797116416-Jbv-?utm_source=share&utm_medium=member_desktop",
    tags: ["Collaboration", "Teamwork", "Leadership", "Communication"],
  },
  {
    id: 1,
    title: "Service Experience Assistant",
    desc: "As part of PS Connect at the University of Exeter, I analyze Portal usage and user feedback through data analysis and interviews to identify evolving needs and enhance the digital service experience.",
    img: "/static/experiences/psconnect.jpeg",
    link: "https://www.linkedin.com/posts/charlie-laing-17695a314_uoepathways-activity-7212483578327166977-LmTp?utm_source=share&utm_medium=member_desktop",
    tags: ["Data Analysis & Interpretation", "User Research", "Digital Service Management"],
  },
  {
    id: 2,
    title: "Activity Instructor",
    desc: "As an Activity Instructor at Supercamps Duncombe, I led engaging activities for children aged 8-14, fostering a safe, inclusive, and fun environment during their school holidays.",
    img: "/static/experiences/super.jpeg",
    link: "https://www.linkedin.com/posts/leandanewlyn_teamduncombe-teamtuesday-dreamteam-ugcPost-7226665718371528705-zwXH?utm_source=share&utm_medium=member_desktop",
    // github: "https://github.com/braydentw/react-emoji-search",
    tags: ["Activity Planning & Delivery", "Adaptability & Problem-Solving", "Encouraging Inclusivity & Engagement"],
  },
];

export const allTags = []

experiences.forEach((experience) => {
  experience.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default experiences
