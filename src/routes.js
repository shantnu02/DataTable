import React from "react";

const ButtonLoadingSpinner = React.lazy(() =>
  import("pages/ButtonLoadingSpinner")
);

const ReactBasics = React.lazy(() => import("pages/ReactBasics"));

const DataTable = React.lazy(() => import("pages/DataTable"));

const HooksDemo = React.lazy(() => import("pages/HooksDemo"));


const BuiltWithReact = React.lazy(() => import("pages/BuiltWithReact"));

const routes = 
  
  {
    enabled: true,
    path: "/button-loader",
    component: ButtonLoadingSpinner,
    navbar: "Loading Spinners",
    child: null,
  },

  {
    enabled: true,
    path: "/hooks-demo",
    component: HooksDemo,
    navbar: "Custom Hooks demo",
    child: null,
  },
  {
    enabled: true,
    path: "/data-table",
    component: DataTable,
    navbar: "Data Table",
    child: null,
  },
  
  
 
  {
    enabled: true,
    path: "/built-with-react",
    component: BuiltWithReact,
    navbar: "",
    child: null,
  },
  
 
 
  {
    enabled: true,
    path: "/react-basics",
    component: ReactBasics,
    navbar: "React Basic",
    child: [
      {
        name: "Show and Hide based on State",
        path: "/react-basics/show-hide-elements",
      },
    ],
  },
];

export default routes.filter((route) => route.enabled);
