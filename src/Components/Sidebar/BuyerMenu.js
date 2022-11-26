import React from "react";
import { Link } from "react-router-dom";
import myOrders from "../../assets/images/myorder.png";

const BuyerMenu = () => {
  return (
    <div className="mt-5">
      <li>
        <Link
          to="/dashboard/myorders"
          rel="noopener noreferrer"
          className="flex items-center p-2 space-x-3 rounded-md text-[16px]"
        >
          <img src={myOrders} className="h-7 w-7" alt="" />
          <span>My Orders</span>
        </Link>
      </li>
    </div>
  );
};

export default BuyerMenu;
