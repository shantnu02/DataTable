import React from "react";
const ButtonLoadingSpinner = React.lazy(() =>
  import("pages/ButtonLoadingSpinner"));

const DataTable = React.lazy(() => import("pages/DataTable"));



const routes = [
  
  {
    enabled: true,
    path: "/button-loader",
    component: ButtonLoadingSpinner,
    navbar: "Loading Spinners",
    child: null,
  },
  
  {
    enabled: true,
    path: "/data-table",
    component: DataTable,
    navbar: "Data Table",
    child: null,
  },

];

export default routes.filter((route) => route.enabled);
