import React from "react";
import Heading from "./_components/heading";
import Heros from "./_components/heros";

const page = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center flex-1 px-6 pb-20">
        <Heading />
        {/* <Heros /> */}
      </div>
    </div>
  );
};

export default page;
