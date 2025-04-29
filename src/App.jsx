import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import HomePage from "./Pages/HomePage";
import MarketPage from "./Pages/MarketPage";
import LandingPage from "./Pages/LandingPage";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + "/home"}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/market" element={<MarketPage />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
