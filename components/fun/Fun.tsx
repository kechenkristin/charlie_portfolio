import React from "react";
import fun from "../../data/content/fun";
import { Fun } from "types";
import FunCard from "./FunCard";

type FunProps = {
    overwriteFun?: Fun[];
};

function Fun({ overwriteFun }: FunProps) {
  const FunList = overwriteFun ? overwriteFun : fun;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
      {FunList.map((item) => {
        return <FunCard key={item.id} fun={item} />;
      })}
    </div>
  );
}

export default Fun;
