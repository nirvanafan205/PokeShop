import React from "react";
import logo from "../Imgs/pokeLogo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const { user, logout } = useAuth0();

  return (
    <div className="min-h-full">
      <div className="flex flex-row gap 4 bg-teal-100">
        <div className="text-left basis-full">
          <div className="flex flex-row">
            <img className="rounded-full h-16 w-18" src={logo} alt="pokeLogo" />
            <div className="flex flex-row pt-4 pl-4 gap-4">
              <div className="text-cyan-200 bg-gray-900 rounded opacity-75 h-8 w-full text-center">Home Page</div>
              <div>Settings</div>
              <div>Market</div>
            </div>
          </div>
        </div>

        <div className=" text-center basis-full pt-4"> hello, {user?.name}</div>

        <div className="basis-full text-right">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
