const SectionOne = ({ title, subtitle }) => {
  return (
    <div className="h-[500px] p-2 mt-4 mb-4 flex flex-col justify-center items-center shadow-inner border rounded-3xl">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
};

export default SectionOne;
