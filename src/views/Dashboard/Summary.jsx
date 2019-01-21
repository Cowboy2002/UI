import React from "react";

// core components
import ReactTable from "react-table";
import Table from "components/Table/Table.jsx";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Progress,Label} from 'semantic-ui-react';


//import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const {data}=this.props;
    return (
            <Card fluid>
              <Card.Content>
                <Card.Header>
                <i className="fas fa-book"></i>
                  {"  Summary"}</Card.Header></Card.Content>
                <Card.Content>
                <Card.Description>
                              <p style={{
                                      lineHeight: '200%'}}>
                                  <i className="fas fa-tag"></i>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "600" }}>  Price: </span>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "400" }}>{data.price.USD} {' USD'}</span>    
                                </p>
                                <p style={{
                                      lineHeight: '200%'}}>
                                <i className="fas fa-chart-bar"></i>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "600" }}>  Change: </span>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "400" }}>{data.change.toFixed(2)}%</span>    
                                </p>
                                <p style={{
                                      lineHeight: '200%'}}>
                                  <i className="fas fa-suitcase"></i>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "600" }}>  Volume: </span>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "400" }}>{data.volume.USD} {' USD'}</span>    
                                </p>
                                <p style={{
                                      lineHeight: '200%'}}>
                                  <i className="fas fa-university"></i>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "600" }}>  Marketcap: </span>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "400" }}>{data.marketcap.USD} {' USD'}</span>    
                                </p>
                                <p style={{
                                      lineHeight: '200%'}}>
                                  <i class="far fa-money-bill-alt"></i>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "600" }}>  Dailyincome: </span>
                                  <span style={{
                                      color: '#000',
                                      transition: 'all .3s ease',
                                      fontWeight: "400" }}>{data.marketcap.USD} {' USD'}</span>    
                                </p>                
                </Card.Description>
              </Card.Content>
            </Card>
      )
  }
}

export default Summary;
