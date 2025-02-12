import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Experiences from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative projects on Dribbble also." }}
    >
      <Heading />
      <Experiences />
      <More />
    </Page>
  );
}

export default projects;
