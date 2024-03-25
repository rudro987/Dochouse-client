import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Routes/Routes";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
