import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseLine from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import EmployeeList from "./Pages/Employees/EmployeeList";
import EmployeeCreator from "./Pages/Employees/EmployeeCreator";
import EmployeeUpdater from "./Pages/Employees/EmployeeUpdater";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "./Pages/NavBar/Layout";
import ErrorPage from "./Pages/NavBar/ErrorPage";
import { HomePage } from "./Pages/NavBar/HomePage";
import { EquipmentsList } from "./Pages/Equipments/EquipmentsList";
import EquipmentCreator from "./Pages/Equipments/EquipmentCreator";
import EquipmentUpdater from "./Pages/Equipments/EquipmentUpdater";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/employees",
        element: (
          <div className="table_container">
            <EmployeeList />
          </div>
        ),
      },
      {
        path: "/employees/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/employees/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/equipments",
        element: (
          <div className="table_container">
            <EquipmentsList />
          </div>
        ),
      },
      {
        path: "/equipments/create",
        element: <EquipmentCreator />,
      },
      {
        path: "/equipments/update/:id",
        element: <EquipmentUpdater />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseLine enableColorScheme />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
