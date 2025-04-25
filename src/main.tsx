import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/toaster";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster />
  </>
);
