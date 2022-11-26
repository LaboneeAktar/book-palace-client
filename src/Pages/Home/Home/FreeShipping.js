import React from "react";

const FreeShipping = () => {
  return (
    <div className="bg-gray-200 lg:pb-8">
      <h1 className="text-center text-3xl bg-gradient-to-r from-rose-600 via-blue-700 to-green-600 inline-block text-transparent bg-clip-text px-4">
        Free Shipping
      </h1>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/pdB1fFL/free-shipping-concept-illustration-114360-2308.jpg"
            className="max-w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <p className="text-lg px-5">
              Shipping your books on Book Palace is FREE with our prepaid
              shipping label. <br />
              So don't worry about shipping costs; use this opportunity to sell
              used textbooks and earn more cash without spending a dime! Just
              confirm your deal and print the shipping label or email a copy of
              the label. It's fast and easy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
