import React from "react";
import fun from "../../data/content/fun";
import type { Fun } from "types"; // Use type-only import
import FunCard from "./FunCard";

type FunProps = {
    overwriteFun?: Fun[];
};

function Funs({ overwriteFun }: FunProps) {
  const FunList = overwriteFun ? overwriteFun : fun;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {FunList.map((item) => {
        return <FunCard fun={item} />;
      })}
    </div>
  );
}

export default Funs;
