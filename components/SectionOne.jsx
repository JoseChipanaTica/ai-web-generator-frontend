import Image from "next/image";

const SectionOne = ({
  logo = "/placeholder/placehold.png",
  reviewImg = "/placeholder/placehold.png",
  reviewText = " “The expert guidance on Gearhead Guide has saved me hundreds on repairs.",
  reviewName = "Peter Partridge",
  title = "Expert Advice for Automotive Repair and Maintenance.",
  subtitle = "Leave the work to us. Our professional trimming service keeps your trees and plants in top shape.",
  addClass,
}) => {
  return (
    <div
      className={`h-[500px] p-4  flex flex-col   shadow-inner border  ${addClass} `}
    >
      <div className="h-[100px] flex flex-col justify-center ">
        <Image
          width={70}
          height={70}
          className=" p-2 rounded-full"
          src={logo}
        ></Image>
      </div>

      <h2 className=" text-xl md:text-5xl h-[200px] flex flex-col justify-center font-bold">
        {title}
      </h2>
      <p className="text-base md:text-xl text-gray-600">{subtitle}</p>

      <div className="mt-2 mb-2">
        <input
          className="p-2 bg-gray-200 md:w-[300px] mt-4 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="enter email here..."
        ></input>
        <button className="bg-black text-white p-2 md:ml-2 rounded mt-2">
          SUBMIT
        </button>
      </div>

      {/* reviews */}
      <div className="md:mt-4 mt-8 mb-4 flex items-center">
        <div className="rounded-full ">
          <Image
            width={70}
            height={70}
            className=" rounded-full"
            src={reviewImg}
          ></Image>
        </div>

        <div className="ml-4">
          <p className="font-bold text-xs md:text-lg">{reviewText}</p>
          <p className="text-gray-500 text-xs mt-2 md:text-base font-bold">
            {reviewName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
