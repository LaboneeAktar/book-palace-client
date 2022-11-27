import React from "react";
import welcome from "../../../assets/images/welcome.gif";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <img src={welcome} alt="" />
    </div>
  );
};

export default Welcome;
