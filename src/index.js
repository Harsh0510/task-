import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ContactProvider } from "./context/contactContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContactProvider>
);
