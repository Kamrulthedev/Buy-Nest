
const SignupBanner = () => {
  return (
    <div className="bg-violet-50 mb-8 rounded-md relative py-8 px-6 p-3 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
      {/* Left Text Section */}
      <div className="text-black max-w-lg text-center lg:text-left animate__animated animate__zoomIn">
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Sign Up & Get 10% Off
        </h2>
        <p className="text-sm lg:text-base mt-2">
          Midas presents the best in interior design
        </p>
      </div>

      {/* Right Input Section */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate__animated animate__zoomIn">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-gray-500 bg-white focus:outline-none border border-gray-300 w-full sm:w-64"
        />
        <button className="bg-white text-violet-500 font-medium px-6 py-2 rounded-md border border-violet-500 hover:bg-violet-500 hover:text-white transition duration-300 w-full sm:w-auto">
          Sign Up →
        </button>
      </div>
    </div>
  );
};

export default SignupBanner;
