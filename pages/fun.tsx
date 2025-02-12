import Heading from "components/fun/Heading";
import More from "components/fun/More";
import Page from "components/utility/Page";
import Funs from "components/fun/Funs";
import React from "react";

function fun() {
  return (
    <Page
      currentPage="Fun"
      meta={{ title: "Fun", desc: "Here are some fun facts about me." }}
    >
      <Heading />
      <Funs />
      <More />
    </Page>
  );
}

export default fun;