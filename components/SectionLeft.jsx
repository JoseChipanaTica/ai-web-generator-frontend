import Image from "next/image";
import React from "react";

const SectionLeft = ({
  Logo = "/placeholder/placeholder2.png",
  Name = "MechanicPro",
  Text = "The one-stop-shop for all your automotive needs",
  Prompt = "mechanic",
}) => {
  return (
    <div className="w-full h-[400px] rounded-lg p-2 bg-gray-100 border shadow-2xl">
      <div className="h-[250px]  flex flex-col justify-center items-center">
        <Image
          width={70}
          height={70}
          className=" p-2 rounded-full"
          src={Logo}
        ></Image>
        <h2 className="text-xl mt-2">{Name}</h2>
        <div className="p-2 mt-2  text-center ">{Text}</div>
        <div className="mt-2 p-2 text-gray-400">{Prompt}</div>
      </div>
      <div className="h-[100px] mt-4 flex-col justify-center items-center">
        <button className="w-full hover:shadow-2xl hover:text-yellow-300 p-2 text-xs rounded shadow-xl text-white border bg-pink-600 mt-2">
          Save And Customize
        </button>
        <button className="w-full p-2 text-xs rounded shadow-xl text-gray-500 border bg-white mt-2">
          Refresh Image Selection
        </button>
      </div>
    </div>
  );
};

export default SectionLeft;
