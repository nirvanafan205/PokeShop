import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../Imgs/pokeLogo.jpg";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="min-h-full">
      <div className="flex flex-row gap 4 bg-fuchsia-600">
        <div className="text-left basis-full">
          <div className="flex flex-row">
            <img className="rounded-full h-16 w-18" src={logo} alt="pokeLogo" />
            <div className="flex flex-row pt-4 pl-4 gap-4">
              <NavLink to="/home" style={{ backgroundColor: "red" }} />
              <NavLink
                to="/home"
                style={({ isActive, isPending }) => ({
                  backgroundColor: isActive ? "black" : isPending ? "" : "",

                  height: isActive ? 32 : isPending ? "" : "",

                  width: isActive ? 58 : isPending ? "" : "",

                  borderRadius: isActive ? 25 : isPending ? "" : "",

                  color: isActive ? "white" : isPending ? "" : "",
                })}
              >
                <div className="text-teal-400 rounded h-8 w-full text-center font-semibold">
                  Home
                </div>
              </NavLink>

              <NavLink to="/market" style={{ backgroundColor: "red" }} />
              <NavLink
                to="/market"
                style={({ isActive, isPending }) => ({
                  backgroundColor: isActive ? "black" : isPending ? "" : "",

                  height: isActive ? 32 : isPending ? "" : "",

                  width: isActive ? 64 : isPending ? "" : "",

                  borderRadius: isActive ? 25 : isPending ? "" : "",

                  color: isActive ? "white" : isPending ? "" : "",
                })}
              >
                <div className="text-teal-400 rounded h-8 w-full text-center font-semibold">
                  Market
                </div>
              </NavLink>
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