import Page from "components/utility/Page";

import { GetStaticProps, GetStaticPaths } from "next";
import { allKebabTags, allTags } from "@/data/content/experiences";

import experiences from "@/data/content/experiences";

import { kebabCase, kebabArray } from "@/utils/utils";
import Experiences from "components/experiences/Experiences";
import Heading from "components/experiences/Heading";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = [];
  experiences.forEach((experience) =>
    experience.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );
  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}: {params: {tag: string}}) => {
  const tag = params.tag;
  const filteredExperiences = experiences.filter((experience) =>
    [...kebabArray(experience.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredExperiences,
        tag: tag,
      })
    ),
  };
};

function PostPage({ filteredExperiences, tag }) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Experiences"
      meta={{
        title: `${capsTag} Experiences`,
        desc: `A showcase for all of my ${capsTag} experiences.`,
      }}
    >
      <Heading tag={capsTag} />
      <Experiences overwriteExperiences={filteredExperiences} />

      <Link href="/experiences">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
      {/* <More /> */}
    </Page>
  );
}

export default PostPage;
