import React from "react";
import Navbar from "../Components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const MarketPage = () => {
  const { user } = useAuth0();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="text-amber-200">This is the market place</div>
    </div>
  );
};

export default MarketPage;
