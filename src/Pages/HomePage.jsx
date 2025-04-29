import React from "react";
import Navbar from "../Components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { user } = useAuth0();

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
    </div>
  );
};

export default HomePage;
