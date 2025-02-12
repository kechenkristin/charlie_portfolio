import Heading from "components/experiences/Heading";
import More from "components/experiences/More";
import Page from "components/utility/Page";
import Experiences from "components/experiences/Experiences";
import React from "react";

function experiences() {
  return (
    <Page
      currentPage="Experiences"
      meta={{ title: "Experiences", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite experiences." }}
    >
      <Heading />
      <Experiences />
      <More />
    </Page>
  );
}

export default experiences;
