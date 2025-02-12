export type Experience = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};

export type Skill = {
  title: string,
  icon: string,
  style?: object
};

export type Testimonial = {
  quote: string,
  name: string,
  job: string
};

export type Project = {
  label: string,
  img: string,
  link: string,
  desc?: string
}

export type Fun = {
  desc: string,
  img: string,
}