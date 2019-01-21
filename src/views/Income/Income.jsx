import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";


import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import axios from 'axios';


class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    async componentDidMount() {
      const id = this.props.match.params.id;
      const url1 = 'http://localhost:4200/api/coins/'+id;
      const a = await axios.get(url1);
      const item = a.data;
      const data =  {
              coin_id: item.coin_id,
              dailyincome: item.incomedata.dailyincome.toFixed(2),
              weeklyincome :  item.incomedata.weeklyincome.toFixed(2),
              monthlyincome : item.incomedata.monthlyincome.toFixed(2),
              yearlyincome : item.incomedata.yearlyincome.toFixed(2),
              volume : item.marketdata.volume,
              marketcap : item.marketdata.marketcap,
              roi : item.incomedata.roi,
              mncount : item.explorerdata.mncount,
              //vote: (<div><Vote /></div>)
            };
          //a.vote = item.vote;
      this.setState({data: data});
    }
    /*
    async componentDidMount() {
        const id = this.props.match.params.id;
        const url1 = 'http://localhost:4200/api/coins/'+id;
        const url2 = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
        const a = await axios.get(url1);
        const result = await axios.get(url2);
        const btcrate = result.data.bpi.USD.rate;
        const item = a.data;
        const data =  {
                coin_id: item.coin_id,
                btc: btcrate,
                dailyincome: {
                    coin: item.incomedata.dailyincome.toFixed(2),
                    btc: (item.incomedata.dailyincome*item.marketdata.price).toFixed(2),
                    usd: (item.incomedata.dailyincome*item.marketdata.price*btcrate).toFixed(2),
                },
                weeklyincome :  {
                    coin: item.incomedata.weeklyincome.toFixed(2),
                    btc: (item.incomedata.weeklyincome*item.marketdata.price).toFixed(2),
                    usd: (item.incomedata.weeklyincome*item.marketdata.price*btcrate).toFixed(2),
                },
                monthlyincome : {
                    coin: item.incomedata.monthlyincome.toFixed(2),
                    btc: (item.incomedata.monthlyincome*item.marketdata.price).toFixed(2),
                    usd: (item.incomedata.monthlyincome*item.marketdata.price*btcrate).toFixed(2),
                },
                yearlyincome : {
                    coin: item.incomedata.yearlyincome.toFixed(2),
                    btc: (item.incomedata.yearlyincome*item.marketdata.price).toFixed(2),
                    usd: (item.incomedata.yearlyincome*item.marketdata.price*btcrate).toFixed(2),
                },
                price : {
                    //coin: item.marketdata.price,
                    btc: item.marketdata.price.toFixed(8),
                    usd: (item.marketdata.price*btcrate).toFixed(4)
                },
                volume : {
                    btc: item.marketdata.volume,
                    usd: item.marketdata.volume*btcrate,
                },
                marketcap : {
                    btc: item.marketdata.marketcap,
                    usd: item.marketdata.marketcap*btcrate
                },
                roi : item.incomedata.roi,
                mncount : item.explorerdata.mncount,
                //vote: (<div><Vote /></div>)
              };
            //a.vote = item.vote;
        this.setState({data: data});
    }*/
    render() {
      const { classes } = this.props;
      return (
        <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="warning" icon>
                <CardIcon color="warning">
                  <Icon>view_day</Icon>
                </CardIcon>
                <p className={classes.cardCategory} style={{color: "#54032f", fontWeight: "bold"}}>Daily Income</p>
                <h4 className={classes.cardTitle}> {this.state.data.dailyincome} {this.state.data.coin_id}</h4>
                <h4 className={classes.cardTitle}> {this.state.data.dailyincome} BTC</h4>
                <h4 className={classes.cardTitle}> {this.state.data.dailyincome} USD</h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Icon>wb_sunny</Icon>
                    Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="success"  icon>
                <CardIcon color="success">
                <Icon>view_week</Icon>
                </CardIcon>
                <p className={classes.cardCategory} style={{color: "#54032f", fontWeight: "bold"}}>Weekly Income</p>
                <h4 className={classes.cardTitle}>{this.state.data.weeklyincome} {this.state.data.coin_id}</h4>
                <h4 className={classes.cardTitle}>{this.state.data.weeklyincome} BTC</h4>
                <h4 className={classes.cardTitle}>{this.state.data.weeklyincome} USD</h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Icon>view_week</Icon>
                  Last 7 Days
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="danger" icon>
                <CardIcon color="info">
                  <DateRange />
                </CardIcon>
                <p className={classes.cardCategory} style={{color: "#54032f", fontWeight: "bold"}}>Monthly Income</p>
                <h4 className={classes.cardTitle}>{this.state.data.monthlyincome} {this.state.data.coin_id}</h4>
                <h4 className={classes.cardTitle}>{this.state.data.monthlyincome} BTC</h4>
                <h4 className={classes.cardTitle}>{this.state.data.monthlyincome} USD</h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <DateRange />
                  Last One Month
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="danger" icon>
                <CardIcon color="danger">
                  <Icon>wallet_travel</Icon>
                </CardIcon>
                <p className={classes.cardCategory} style={{color: "#54032f", fontWeight: "bold"}}>Yearly Income</p>
                <h4 className={classes.cardTitle}>{this.state.data.yearlyincome} {this.state.data.coin_id}</h4>
                <h4 className={classes.cardTitle}>{this.state.data.yearlyincome} BTC</h4>
                <h4 className={classes.cardTitle}>{this.state.data.yearlyincome} USD</h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                <Icon>wallet_travel</Icon>
                  Last One year
                </div>
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      );
    }
  }