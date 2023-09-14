import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App3 from "./App3";
import FormPage from "./pages/Form/Form";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetTicket from './pages/GetTicket/GetTicket'

const router = createBrowserRouter([
  {
    path: "/",
    element: <GetTicket />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
