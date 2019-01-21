import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";


// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import myButton from "./myButton.jsx";
import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
import 'semantic-ui-css/semantic.min.css';
import { Icon, Label, Menu } from 'semantic-ui-react';


var axios = require('axios');
class HeaderLinks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      btcprice: 0
    };
    this.getBTC();
  }
  async getBTC(){
      var btcurl='https://api.coingecko.com/api/v3/coins/bitcoin';
      //var btcurl = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC';//coinsbase
      let res = await axios.get(btcurl);
      let a = res.data.market_data;
      console.log(a);
      this.setState({
        marketdata: {
          btcprice: a.current_price.usd,
          change: a.price_change_percentage_24h,
        }
      })
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes, rtlActive } = this.props;
    const { open, marketdata, totalcoin, maintain } = this.state;
    //console.log(this.state);
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
        [classes.searchRTL]: rtlActive
      });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
      { [classes.dropdownItemRTL]: rtlActive }
    );
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
      <table>
        <tbody>
        <tr>
          <td>
          <Menu compact>
            <Menu.Item as='a' color='blue'>
            TOTAL COIN
            </Menu.Item>
            <Menu.Item as='a'>
            <span style={{
              fontSize: 15,
                            fontWeight: 800,
                            color: '#c99022',
                            transition: 'all .3s ease'
                          }}>7</span>
              <Label color='red' floating>
                2
              </Label>
            </Menu.Item>
          </Menu>
          </td>
          <td width="40"></td>
          {marketdata ? 
            (<td>
            <Menu compact>
            <Menu.Item as='a' color='blue'>
              <Icon name='bitcoin' size='large' />
            </Menu.Item>
            <Menu.Item as='a'>
            <span style={{
              fontSize: 15,
                            fontWeight: 800,
                            color: '#c99022',
                            transition: 'all .3s ease'
                          }}>${marketdata.btcprice.toFixed(0)}</span>
              <Label color='teal' floating>
                {marketdata.change > 0 ? '+' : '-'}{marketdata.change}%
              </Label>
            </Menu.Item>
          </Menu>
            </td>):<td></td>
          }
          
          <td width="80"></td>
          <td>
          <CustomInput
          rtlActive={rtlActive}
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: rtlActive ? "بحث" : "Search",
            inputProps: {
              "aria-label": rtlActive ? "بحث" : "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={classes.headerLinksSvg + " " + classes.searchIcon}
          />
        </Button>
          </td>
        </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};

export default withStyles(headerLinksStyle)(HeaderLinks);
