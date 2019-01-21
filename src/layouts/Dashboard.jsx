import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import DashboardCoin from "views/Dashboard/Dashboard.jsx";
import dashboardRoutes from "routes/dashboard.jsx";
import sRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";

//import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo-white.svg";
import ReactTables from "views/Tables/ReactTables.jsx";


const switchRoutes =(base)=> (
  <BrowserRouter>
    <Switch>
    
    <Route  path="/coins/:id" exact render={(RouteProps) => { 
      // if (select == ''){
        return(
          <DashboardCoin id={RouteProps.match.params.id} base={base} />
        )
      }    
    }/>
    <Route  path="/rank" exact render={RouteProps => { return(
      <ReactTables base={base} />
    )
    }}/>
  </Switch>
  </BrowserRouter>
);

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      miniActive: true,
      base :"BTC",
      select: ''
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps/full-screen-maps";
  }
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  handeBase(base){
    this.setState({
      base: base
    })
  }
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={"Blockshare"}
          logo={logo}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          bgColor="black"
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div className={mainPanel} ref="mainPanel">
          <Header
            onSelectBase={this.handleBase}
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={dashboardRoutes}
            onChange={(val)=> this.setState({
              base : val
            })}
            //onSelect={(val)=>{
            //   this.setState({select: val})
            // }}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes(this.state.base || null)}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes(this.state.base || null)}</div>
          )}
          {this.getRoute() ? <Footer fluid /> : null}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Dashboard);
