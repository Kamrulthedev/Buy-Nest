type THeading = {
  Heading: string;
  Text?: string;
};

const Heading = ({ Heading, Text }: THeading) => {
  return (
    <div className="border-b-2 mt-10 mb-10 border-[#5c53fe]">
      <div className="text-[#112]  pb-2 animate__animated animate__fadeInDown  uppercase  font-bold text-2xl">
        <h1 className="">{Heading}</h1>
      </div>
      <p className="font-thin mb-3">{Text}</p>
    </div>
  );
};

export default Heading;
