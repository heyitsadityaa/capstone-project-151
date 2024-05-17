import React from "react";
import Image from "next/image";

const heros = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image src="" fill className="object-contain" alt="" />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image src="" fill className="object-contain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default heros;
