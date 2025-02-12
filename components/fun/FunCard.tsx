import React from "react";

function FunCard({ fun }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col experiences-center md:experiences-start md:justify-center"
      key={fun.id}
    >
        <img
          className="w-full rounded-md"
          src={fun.img}
        />

      <div className="w-full mt-5">
        <p className="text-fun-gray text-left text-sm">{fun.desc}</p>
      </div>
    </div>
  );
}

export default FunCard;
