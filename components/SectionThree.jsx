import Image from "next/image";
import React from "react";

const SectionThree = ({
  title = "Easy-to-make recipes.",
  text = "With our easy-to-follow instructions, you can cook like a pro no matter your level of expertise. Our recipes are created to be enjoyed by anyone who loves good food.",
  backgroundImg = "/placeholder/placeholder3.png",
}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className=" w-full h-[400px] -mr-4  rounded-xl flex flex-row-reverse justify-center relative ">
        <Image
          fill
          className="object-cover  rounded-2xl shadow-lg  "
          src={backgroundImg}
          alt="Background image"
        ></Image>
      </div>

      <div className="w-3/4 p-2 flex flex-col justify-center items-center mt-8">
        <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4">{text}</p>
      </div>
    </div>
  );
};

export default SectionThree;
