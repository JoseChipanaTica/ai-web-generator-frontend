import Image from "next/image";
import React from "react";

const SectionSix = ({
  imgs = "/placeholder/placeholder2.png",
  backgroundImg = "/placeholder/placeholder2.png",
  text = "Join the TastyBites community for free recipes and updates.",
}) => {
  return (
    <div className="flex flex-col min-h-[800px] justify-center items-center p-2">
      <div className="w-3/4 md:w-[600px] flex flex-col items-center justify-center  h-[500px] border-2 shadow-2xl border-black rounded-xl   ">
        <div>
          <div className="grid grid-cols-3 ">
            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>

            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>

            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>

            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>

            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>
            <Image
              width={70}
              height={70}
              className=" p-2 rounded-full"
              src={imgs}
            ></Image>
          </div>
        </div>
        <div className="text-3xl p-4 font-bold h-[200px] flex flex-col justify-center items-center">
          <h1 className="text-base">{text}</h1>
        </div>
        <div className="mb-10 p-2">
          <input
            className="p-2 bg-gray-200 shadow-2xl w-full md:w-[300px] mt-4 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="enter email here..."
          ></input>
          <button className="bg-black text-white p-2 md:ml-2 rounded mt-2">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
