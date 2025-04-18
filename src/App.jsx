import React from "react";
import LoginPage from "./Pages/LoginPage";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;



const App = () => {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
