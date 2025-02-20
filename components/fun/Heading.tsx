import React from "react";

function Heading() {
  return (
    <div className="py-16 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mb-8 relative">
        Fun Facts
        <img
          className="sqD w-12 -top-6 -right-8 absolute"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl">
        Enough said. Let's have some fun facts about myself.
      </p>
      <img
            className="sqD w-10 -top-8 -right-8 absolute"
            src="/static/doodles/hero/code.svg"
        />
    </div>
  );
}

export default Heading;
