import React from "react";

const GoogleMaps = React.lazy(() => import("pages/GoogleMaps"));
const ButtonLoadingSpinner = React.lazy(() =>
  import("pages/ButtonLoadingSpinner")
);

const ReactBasics = React.lazy(() => import("pages/ReactBasics"));

const DataTable = React.lazy(() => import("pages/DataTable"));

const HooksDemo = React.lazy(() => import("pages/HooksDemo"));

const DataTable2 = React.lazy(() => import("pages/DataTable2"));
const BuiltWithReact = React.lazy(() => import("pages/BuiltWithReact"));

const SearchFilter = React.lazy(() => import("pages/SearchFilter"));

const TreeList = React.lazy(() => import("pages/TreeList"));

const routes = [
  {
    enabled: true,
    path: "/map",
    component: GoogleMaps,
    navbar: "google-map-react",
    child: [
      {
        name: "Basic Google Maps",
        path: "/map",
      },
      {
        name: "Custom Google Maps",
        path: "/map/custom-style",
      },
    ],
  },
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
    path: "/data-table-large",
    component: DataTable2,
    navbar: "",
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
    path: "/search-filter",
    component: SearchFilter,
    navbar: "Search Filter",
    child: null,
  },
  
  {
    enabled: true,
    path: "/tree-structure",
    component: TreeList,
    navbar: "Tree List",
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
