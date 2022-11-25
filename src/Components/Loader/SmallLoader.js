import React from "react";

const SmallLoader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-6 h-6 border-2 border-dashed border-rose-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default SmallLoader;
