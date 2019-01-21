import Dashboard from "views/Dashboard/Dashboard.jsx";
import React from "react";

import ReactTables from "views/Tables/ReactTables.jsx";
import DashboardCoin from "views/Dashboard/Dashboard.jsx";
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
//import Image from "@material-ui/icons/Image";
import Settings from "@material-ui/icons/Settings";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";
import InsertChart from "@material-ui/icons/InsertChart";

var dashRoutes = [
  {
    redirect: true,
    path: "/rank",
    name: "Ranking",
    icon: InsertChart,
    component: (base)=> <ReactTables base={base} />
  },
  // {
  //   path: "/coins/:id",
  //   name: "Dashboard",
  //   icon: DashboardIcon,
  //   component: (base)=> <Dashboard base={base} />
  // },
  {
    collapse: true,
    path: "/services",
    name: "Services",
    state: "openComponents",
    icon: Settings,
    views: [
      {
        path: "/services/sharing",
        name: "Sharing",
        mini: "S",
        component:(base)=> <ReactTables base={base} />
      },
      {
        path: "/services/monitoring",
        name: "Monitoring",
        mini: "M",
        component:(base)=> <ReactTables base={base} />
      },
      //{
        //path: "/components/panels",
        //name: "Panels",
        //mini: "P",
        //component: Panels
      //}
    ]
  },
  { redirect: true, path: "/", pathTo: "/rank", name: "Ranking" }
];

export default dashRoutes;
