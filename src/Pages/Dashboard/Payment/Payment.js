import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { resalePrice, bookName } = booking;

  return (
    <div className="my-5 mx-5">
      <h1 className="text-2xl">Payment Here</h1>
      <h2 className="text-xl py-3">
        Please Pay <strong>{resalePrice}</strong> TK for{" "}
        <strong>{bookName}</strong>
      </h2>

      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
