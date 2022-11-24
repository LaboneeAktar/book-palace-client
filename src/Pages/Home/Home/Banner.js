import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="lg:relative">
        <img
          src="https://i.ibb.co/0r0twjY/7e5d3aaa87a54d01b060c1877145c0c0.jpg"
          className="absolute inset-0 object-cover w-full h-full lg:block hidden"
          alt=""
        />
        <div className="lg:relative block bg-gray-900 bg-opacity-75">
          <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="w-full py-8 max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h1 className="max-w-lg mb-6 lg:text-4xl tracking-tight text-white sm:text-2xl lg:text-start text-center sm:leading-none">
                Buy and Sell Your Old Book Here
              </h1>
              <p className="max-w-xl mb-4 text-base text-gray-300 text-justify md:text-lg">
                Second Hand Book Buy and Sell in online. You can sell your old
                and unnecessary book. Also can buy your favourite book in less
                of cost. It can save your valuable time. So you can enjoy your
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
