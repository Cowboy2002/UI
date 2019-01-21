import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router'; 
import ChartistGraph from "react-chartist";
import {Line} from 'react-chartjs-2';
import { BrowserRouter, Route } from 'react-router-dom';
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
//import Icon from "@material-ui/core/Icon";
// core components


import Income from 'views/Dashboard/Income.jsx';
import About from 'views/Dashboard/About.jsx';
import Share from 'views/Dashboard/Share.jsx';
import Summary from 'views/Dashboard/Summary.jsx';

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import axios from 'axios';


import getChart from './getChart.js';
import getData from './getData.js';
import getHeart from './getHeart.js';

import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Label, Grid, Segment, Card, Select } from 'semantic-ui-react';
import './style.css'

  const chartOptions = [
    { key: 'priceBTC', value: 'priceBTC', text: 'Price BTC' },
    { key: 'priceUSD', value: 'priceUSD', text: 'Price USD' },
    { key: 'mncount', value: 'mncount', text: 'Masternode count' },
    { key: 'roi', value: 'roi', text: 'Return of Investment (ROI)' },
    { key: 'dailyincome', value: 'dailyincome', text: 'Daily Income' },
    { key: 'monthlyincome', value: 'monthlyincome', text: 'Monthly Income' },
    { key: 'yearlyincome', value: 'yearlyincome', text: 'Yearly Income' },
  ];


class DashboardCoin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: 'priceBTC'
    };
    this.loadData();
    this.loadChart();
    this.loadHeart();
  }
  async loadData() {
    var id = this.props.id;
    var select = this.props.select;
    var data = await getData(id);
    console.log('load lai');
    console.log(data);
    this.setState({
      data: data
    });
  }
  async loadChart(){
    const id = this.props.id;
    var a = await getChart(id);
    //console.log(a);
    this.setState({
      pricedata: a
    });
  }
  async loadHeart(){
    const id = this.props.id;
    var a = await getHeart(id);
    //console.log(a);
    this.setState({
      heartdata: a
    });
  }
  handleOnclick(id){
    axios.get('http://localhost:4200/api/vote/update/'+id).then((err, mesage)=>{
      this.loadHeart();
    })
  }
  render() {
    const { id, base, select} = this.props;
    const {data, pricedata, heartdata, chart} = this.state
    //console.log(this.props);
    //console.log(pricedata);
    //console.log(data);
    return (
      data ? 
      (<div>
        <Grid columns={2} >
          <Grid.Row>
            <Grid.Column width={13}>
              <Grid.Row>
                    <Grid columns={1}>
                      <Grid.Row stretched>
                        <Grid.Column>
                        <About name={data.name} id={data._id} about={data.about} />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                
              </Grid.Row>
              <Grid.Row>
                  <Grid columns={5}>
                    <Grid.Row stretched>
                      <Grid.Column>
                        <Segment textAlign='left'>
                        <p><span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "400" }}>Anual Roi: </span>
                            <span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "600" }}>{data.roi.toFixed(2)}%</span>    
                        </p>
                        <p><span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "400" }}>Paid Reward: </span>
                            <span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "600" }}>{data.roi.toFixed(2)}%</span>    
                        </p>
                        <p><span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "400" }}>Reward Frequency: </span>
                            <span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "600" }}>{data.roi.toFixed(2)}%</span>    
                        </p>
                        <p><span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "400" }}>Active Nodes: </span>
                            <span style={{
                                color: '#000',
                                transition: 'all .3s ease',
                                fontWeight: "600" }}>{data.roi.toFixed(2)}%</span>    
                        </p>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column>
                        <Income color='violet' title='DAILY INCOME' id={data._id} data={data.dailyincome} base={base} />
                      </Grid.Column>
                      <Grid.Column>
                        <Income color='blue' title='WEEKLY INCOME' id={data._id} data={data.weeklyincome} base={base} />
                      </Grid.Column>
                      <Grid.Column>
                        <Income color='orange' title='MONTHLY INCOME' id={data._id} data={data.monthlyincome} base={base} />
                      </Grid.Column>
                      <Grid.Column>
                        <Income color='teal' title='YEARLY INCOME' id={data._id} data={data.yearlyincome} base={base} />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </Grid.Row>
              <Grid.Row>
                    <Grid columns={2}>
                      <Grid.Row >
                        <Grid.Column width={12}>

                          <Grid columns={1}>
                            <Grid.Row stretched>
                              <Grid.Column >
                                <Share data={data.share}/>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>

                        </Grid.Column>
                        <Grid.Column width={4}>
                          <Grid columns={1}>
                            <Grid.Row stretched>
                              <Grid.Column >
                                <Summary data={data} />
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
              </Grid.Row>
              <Grid.Row>
                        <Grid columns={1}>
                            <Grid.Row stretched>
                              <Grid.Column >
                              <Card fluid>
                                <Card.Content>
                                    <p style={{
                                        fontSize: 16,
                                        fontFamily: 'Arial',
                                        font: 'Arial',
                                        fontStyle: 'bold',
                                        fontWeight: 400,
                                        transition: 'all .3s ease'
                                      }}>
                                      <i className="fas fa-chart-line"></i> {"  Chart      "}
                                      <Select onChange={(event, data)=> {
                                        //var key = event.target.value;
                                        this.setState({chart: data.value});
                                        //console.log(data);
                                        }
                                      }
                                      placeholder='Select chart' options={chartOptions}
                                      value={this.state.chart} 
                                      id="select" >
                                    </Select>
                                      </p>
                                </Card.Content>
                                <Card.Content>
                                  <Card.Description>
                                  {pricedata? <Line data={
                                    chart == 'priceBTC' ? pricedata.priceBTC
                                    : chart == 'priceUSD' ? pricedata.priceUSD
                                    : chart == 'mncount' ? pricedata.masternode
                                    : chart == 'roi' ? pricedata.roi
                                    : chart == 'dailyincome' ? pricedata.dailyincome
                                    : chart == 'monthlyincome' ? pricedata.monthlyincome
                                    : chart == 'yearlyincome' ? pricedata.yearlyincome
                                    : pricedata.priceUSD
                                    } options={{
                                      bezierCurve : true,
                                      pointDot: true,
                                      pointDotRadius : 4
                                    }} width="1700" height="800" /> : <Line width="1700" height="800" />}
                                  </Card.Description>
                                </Card.Content>
                              </Card>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3} basic textAlign='center'>
                <p style={{
                          padding: 1,
                          fontSize: 40,
                          transition: 'all .3s ease',
                          fontWeight: "bold"
                        }}><img src={require(`assets/img/coin/${data._id.toLowerCase()}.png`)} width="130" height="130"/>
                        {data.name}
                        <p style={{
                          padding: 0,
                          fontSize: 20,
                          transition: 'all .3s ease',
                          fontWeight: base =='BTC'? "500" : "600"
                        }}>({data._id})
                    </p>
                </p>
                {
                  heartdata ? 
                  (<div className="row-item">
                <Button as='div' labelPosition='right'>
                        <Button basic color={heartdata.votestate == true ? 'black' :'instagram' } 
                        onClick={()=> this.handleOnclick && this.handleOnclick(id)}
                        >
                          <Icon name='heart' color={heartdata.votestate == true ? 'red' : 'black'}/>
                          {heartdata.votestate == true ? 'Voted' : 'Vote'}
                        </Button>
                        <Label as='a' basic color='black' pointing='left'>
                          {heartdata.totalvote}
                        </Label>
                      </Button>
                </div>):<div></div>
                }
              <Segment textAlign='left' basic>
                <h4  style={{color: "#000000", fontWeight: "bold"}}>General Links </h4> 
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i class="fas fa-bullhorn"></i>Annoucement </p> 
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-btc"></i> Bitcointalk </p> 
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-github"/>  Github </p>
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-discord"></i> Discord </p> 
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-twitter" />  Twitter </p> 
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-telegram"></i>  Telegram </p>
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-facebook"/>  Facebook </p>
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-internet-explorer"></i>  Website </p>
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-youtube-square"></i>  YouTube </p>
                <p style={{color: "#000000", fontWeight: "400", lineHeight: '90%'}}><i className="fab fa-sistrix"></i>  Block Explorer </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      ):(<div></div>)
    );
  }
}

DashboardCoin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(DashboardCoin);

