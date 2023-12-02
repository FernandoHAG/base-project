import React from "react";
import ReactDOM from "react-dom/client";
import Router from "../Pages";
import i18next from "../i18n/i18n";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
