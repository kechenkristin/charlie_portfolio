import React from "react";

function FunCard({ fun }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col experiences-center md:experiences-start md:justify-center"
      key={fun.id}
    >
      <div className="w-full h-64 overflow-hidden flex justify-center items-center">
        <img
          className="w-auto h-full object-cover rounded-md"
          src={fun.img}
          alt="Fun Image"
        />
      </div>
      <div className="w-full mt-5">
        <p className="text-fun-gray text-left text-sm">{fun.desc}</p>
      </div>
    </div>
  );
}

export default FunCard;