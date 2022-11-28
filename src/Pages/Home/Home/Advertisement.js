import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../Components/Loader/Loader";
import SingleAdsCard from "./SingleAdsCard";

const Advertisement = () => {
  const { data: advertisements = [], isLoading } = useQuery({
    queryKey: ["advertisements"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/mybooks/advertised`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("bookPalace-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {advertisements.length > 0 && (
        <div className="lg:pt-10 pt-5 pb-5 bg-gray-200">
          <h1 className="text-center text-3xl bg-gradient-to-r from-rose-600 via-blue-700 to-green-600 inline-block text-transparent bg-clip-text pl-5">
            Advertisements
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 m-8">
            {advertisements.map((advertise) => (
              <SingleAdsCard
                key={advertise._id}
                advertise={advertise}
              ></SingleAdsCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Advertisement;
