import Image from "next/image";
import React from "react";

const SectionFive = ({ backgroundImg = "/placeholder/placeholder2.png" }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[600px] w-full    flex flex-row-reverse items-center   ">
        <div className=" w-full h-[400px]  rounded-xl flex flex-row-reverse justify-center relative ">
          <Image
            fill
            className="object-cover  rounded-2xl shadow-lg  "
            src={backgroundImg}
            alt="Background image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
