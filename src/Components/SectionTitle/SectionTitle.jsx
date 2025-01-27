const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-4 font-[Cinzel-decorative]">
      <p className="text-[#D1A054] mb-2">--- {subHeading} ---</p>
      <h3 className="text-[#D1A054] text-2xl uppercase border-y-2 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
