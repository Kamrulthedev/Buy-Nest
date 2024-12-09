type THeading = {
  Heading: string;
  Text?: string;
};

const Heading = ({ Heading }: THeading) => {
  return (
    <div>
      <div className="text-center p-7 animate__animated animate__fadeInDown">
        <h1 className="text-3xl font-bold">{Heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
