import Image from "next/image";
import React from "react";

const SectionFour = ({
                         title = "Recipe collections.",
                         text = "Never run out of ideas with our exhaustive recipe collections. From appetizers to cocktails, we’ve got you covered. Access our recipe library for unlimited inspiration.",
                         backgroundImg = "/placeholder/placeholder4.png",
                         block
                     }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="h-[600px] w-full p-2   flex flex-row-reverse items-center   ">
                <div
                    className=" w-full h-[300px] md:w-[900px] md:h-[500px] -mr-4  rounded-xl flex flex-row-reverse justify-center relative ">
                    <Image
                        fill
                        className="object-cover  rounded-2xl shadow-lg  "
                        src={backgroundImg}
                        alt="Background image"
                    ></Image>
                </div>
            </div>

            <div className="w-3/4 p-2 flex flex-col justify-center items-center">
                <h1 className="font-bold text-2xl md:text-4xl">{block[0].value}</h1>
                <p className="text-gray-400 text-lg md:text-xl mt-4">{block[1].value}</p>
            </div>
        </div>
    );
};

export default SectionFour;
