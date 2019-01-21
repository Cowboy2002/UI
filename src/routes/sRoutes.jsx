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

var sRoutes = 
  {
    path: "/coins/:id",
    name: "Dashboard",
    icon: DashboardIcon,
    component: (base)=> <DashboardCoin base={base} />
  }

export default sRoutes;
