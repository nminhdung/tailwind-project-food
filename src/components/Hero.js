import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/*overlay*/}
        <div className="absolute w-full h-full  max-h-[500px] bg-black/40 flex flex-col justify-center text-white">
          <h1 className="text-4xl sm:text-5xl px-4 md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl px-4 md:text-6xl lg:text-7xl font-bold text-orange-500">
            Foods <span className="text-white">Delivered</span>
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="object-cover w-full max-h-[500px]"
          alt="/"
        />
      </div>
    </section>
  );
};

export default Hero;
