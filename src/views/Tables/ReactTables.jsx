import React from "react";
import { render } from "react-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
//import Icon from "@material-ui/core/Icon";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
//import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import TwitterLike from "components/TwitterLike/TwitterLike.jsx"
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
//import Button from '@material-ui/core/Button';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Label , Popup} from 'semantic-ui-react'
const btc = require('assets/img/Bitcoin.svg');

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class ReactTables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.loadData();
  }
  async loadShare(id){
    var url = 'http://localhost:4200/api/share/top/'+id;
    var result = await axios.get(url);
    var a = result.data;
    return a[0].coinsupport.find(x=>x._id==id).process;
  }
  async loadData() {
    const url1 = 'http://localhost:4200/api/coins/';
    var result = await axios.get(url1);
    var res= result.data.map((item) => {
        return {
            _id :  item._id,
            name :  item.basedata.name,
            price: {
              BTC : item.marketdata.price.BTC,
              USD : item.marketdata.price.USD,
              AUD : item.marketdata.price.AUD,
              BGN : item.marketdata.price.BGN,
              BRL : item.marketdata.price.BRL,
              CAD : item.marketdata.price.CAD,
              CHF : item.marketdata.price.CHF,
              CNY : item.marketdata.price.CNY,
              CZK : item.marketdata.price.CZK,
              EUR : item.marketdata.price.EUR,
              JPY : item.marketdata.price.JPY,
              KRW : item.marketdata.price.KRW,
              VND : item.marketdata.price.VND,
              RUB : item.marketdata.price.RUB,
            },
            change : item.marketdata.change,
            volume : { 
              BTC : item.marketdata.volume.BTC,
              USD : item.marketdata.volume.USD,
              AUD : item.marketdata.volume.AUD,
              BGN : item.marketdata.volume.BGN,
              BRL : item.marketdata.volume.BRL,
              CAD : item.marketdata.volume.CAD,
              CHF : item.marketdata.volume.CHF,
              CNY : item.marketdata.volume.CNY,
              CZK : item.marketdata.volume.CZK,
              EUR : item.marketdata.volume.EUR,
              JPY : item.marketdata.volume.JPY,
              KRW : item.marketdata.volume.KRW,
              VND : item.marketdata.volume.VND,
              RUB : item.marketdata.volume.RUB,
            },
            marketcap : {
              BTC : item.marketdata.marketcap.BTC,
              USD : item.marketdata.marketcap.USD,
              AUD : item.marketdata.marketcap.AUD,
              BGN : item.marketdata.marketcap.BGN,
              BRL : item.marketdata.marketcap.BRL,
              CAD : item.marketdata.marketcap.CAD,
              CHF : item.marketdata.marketcap.CHF,
              CNY : item.marketdata.marketcap.CNY,
              CZK : item.marketdata.marketcap.CZK,
              EUR : item.marketdata.marketcap.EUR,
              JPY : item.marketdata.marketcap.JPY,
              KRW : item.marketdata.marketcap.KRW,
              VND : item.marketdata.marketcap.VND,
              RUB : item.marketdata.marketcap.RUB,
            },
            roi : item.incomedata.roi,
            mncount : item.explorerdata.mncount,
            totalvote: item.totalvote,
            votestate: item.votestate,
            dailyincome: {
              coin: item.incomedata.dailyincome.coin.toFixed(4),
              BTC: item.incomedata.dailyincome.BTC.toFixed(8),
              USD: item.incomedata.dailyincome.USD.toFixed(4),
              AUD: item.incomedata.dailyincome.AUD.toFixed(4),
              BGN: item.incomedata.dailyincome.BGN.toFixed(4),
              BRL: item.incomedata.dailyincome.BRL.toFixed(4),
              CAD: item.incomedata.dailyincome.CAD.toFixed(4),
              CHF: item.incomedata.dailyincome.CHF.toFixed(4),
              CNY: item.incomedata.dailyincome.CNY.toFixed(4),
              CZK: item.incomedata.dailyincome.CZK.toFixed(4),
              EUR: item.incomedata.dailyincome.EUR.toFixed(4),
              JPY: item.incomedata.dailyincome.JPY.toFixed(4),
              KRW: item.incomedata.dailyincome.KRW.toFixed(4),
              VND: item.incomedata.dailyincome.VND.toFixed(4),
              RUB: item.incomedata.dailyincome.RUB.toFixed(4),
            },
            weeklyincome: {
              coin: item.incomedata.weeklyincome.coin.toFixed(4),
              BTC: item.incomedata.weeklyincome.BTC.toFixed(8),
              USD: item.incomedata.weeklyincome.USD.toFixed(4),
              AUD: item.incomedata.weeklyincome.AUD.toFixed(4),
              BGN: item.incomedata.weeklyincome.BGN.toFixed(4),
              BRL: item.incomedata.weeklyincome.BRL.toFixed(4),
              CAD: item.incomedata.weeklyincome.CAD.toFixed(4),
              CHF: item.incomedata.weeklyincome.CHF.toFixed(4),
              CNY: item.incomedata.weeklyincome.CNY.toFixed(4),
              CZK: item.incomedata.weeklyincome.CZK.toFixed(4),
              EUR: item.incomedata.weeklyincome.EUR.toFixed(4),
              JPY: item.incomedata.weeklyincome.JPY.toFixed(4),
              KRW: item.incomedata.weeklyincome.KRW.toFixed(4),
              VND: item.incomedata.weeklyincome.VND.toFixed(4),
              RUB: item.incomedata.weeklyincome.RUB.toFixed(4),
            },
            monthlyincome: {
              coin: item.incomedata.monthlyincome.coin.toFixed(4),
              BTC: item.incomedata.monthlyincome.BTC.toFixed(8),
              USD: item.incomedata.monthlyincome.USD.toFixed(4),
              AUD: item.incomedata.monthlyincome.AUD.toFixed(4),
              BGN: item.incomedata.monthlyincome.BGN.toFixed(4),
              BRL: item.incomedata.monthlyincome.BRL.toFixed(4),
              CAD: item.incomedata.monthlyincome.CAD.toFixed(4),
              CHF: item.incomedata.monthlyincome.CHF.toFixed(4),
              CNY: item.incomedata.monthlyincome.CNY.toFixed(4),
              CZK: item.incomedata.monthlyincome.CZK.toFixed(4),
              EUR: item.incomedata.monthlyincome.EUR.toFixed(4),
              JPY: item.incomedata.monthlyincome.JPY.toFixed(4),
              KRW: item.incomedata.monthlyincome.KRW.toFixed(4),
              VND: item.incomedata.monthlyincome.VND.toFixed(4),
              RUB: item.incomedata.monthlyincome.RUB.toFixed(4),
            },
            yearlyincome: {
              coin: item.incomedata.yearlyincome.coin.toFixed(4),
              BTC: item.incomedata.yearlyincome.BTC.toFixed(8),
              USD: item.incomedata.yearlyincome.USD.toFixed(4),
              AUD: item.incomedata.yearlyincome.AUD.toFixed(4),
              BGN: item.incomedata.yearlyincome.BGN.toFixed(4),
              BRL: item.incomedata.yearlyincome.BRL.toFixed(4),
              CAD: item.incomedata.yearlyincome.CAD.toFixed(4),
              CHF: item.incomedata.yearlyincome.CHF.toFixed(4),
              CNY: item.incomedata.yearlyincome.CNY.toFixed(4),
              CZK: item.incomedata.yearlyincome.CZK.toFixed(4),
              EUR: item.incomedata.yearlyincome.EUR.toFixed(4),
              JPY: item.incomedata.yearlyincome.JPY.toFixed(4),
              KRW: item.incomedata.yearlyincome.KRW.toFixed(4),
              VND: item.incomedata.yearlyincome.VND.toFixed(4),
              RUB: item.incomedata.yearlyincome.RUB.toFixed(4),
            },
            //share: item.share[0],
        }
    });
    //console.log(res);
    this.setState({data: res});
  }
  handleOnclick(id){
    axios.get('http://localhost:4200/api/vote/update/'+id).then((err, mesage)=>{
      this.loadData();
    })
  }

  render() {
    console.log(this.state.data);
    //console.log(result);
    const { classes, base } = this.props;
    //console.log(base);
    console.log(this.props);
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardBody>
              <ReactTable
                data={this.state.data}
                resizable={false}
                onFetchData={this.loadData}
                columns={[
                  {
                    Header: "#",
                    accessor: "_id",
                    maxWidth: 40,
                    filterable: false,
                    sortable: false,
                    Cell: row => (
                      <div>
                        <img width="20" height="20" src={require('assets/img/coin/'+row.value.toLowerCase()+'.png')}/>
                      </div>
                    )
                  },
                  {
                    Header: "Coin",
                    accessor: "",
                    Cell: row => (
                      <span>
                        <span style={{
                          textAlign: "left !important",
                          color: '#770278',
                          transition: 'all .3s ease',
                          fontWeight: "bold"
                        }}>
                        <Link to={{
                          pathname: `/coins/${row.value._id}`,
                          state: {
                            id: row.value._id
                          }
                        }}>
                        {row.value.name} ({row.value._id})
                        </Link>
                        </span>
                      </span>
                    )
                  },
                  {
                    Header: "Price",
                    accessor: base == 'BTC' ? 'price.BTC'
                    : base == 'USD' ? 'price.USD'
                    : base == 'AUD' ? 'price.AUD'
                    : base == 'BGN' ? 'price.BGN'
                    : base == 'BRL' ? 'price.BRL'
                    : base == 'CAD' ? 'price.CAD'
                    : base == 'CHF' ? 'price.CHF'
                    : base == 'CNY' ? 'price.CNY'
                    : base == 'CZK' ? 'price.CZK'
                    : base == 'EUR' ? 'price.EUR'
                    : base == 'JPY' ? 'price.JPY'
                    : base == 'KRW' ? 'price.KRW'
                    : base == 'VND' ? 'price.VND'
                    : base == 'RUB' ? 'price.RUB'
                    : 'price.USD',
                    Cell: row => (
                      <span>
                        <span style={{
                          fontWeight: 400,
                          transition: 'all .3s ease',
                        }}>
                          <img width="10" heigh="10" src={base == 'BTC' ? btc : ''} />{base == 'USD'? '$' : ''} {base == 'BTC'? row.value.toFixed(8) : row.value.toFixed(4)} 
                          {base == 'BTC' ? ''
                    : base == 'USD' ? ''
                    : base == 'AUD' ? ' AUD'
                    : base == 'BGN' ? ' BGN'
                    : base == 'BRL' ? ' BRL'
                    : base == 'CAD' ? ' CAD'
                    : base == 'CHF' ? ' CHF'
                    : base == 'CNY' ? ' CNY'
                    : base == 'CZK' ? ' CZK'
                    : base == 'EUR' ? ' EUR'
                    : base == 'JPY' ? ' JPY'
                    : base == 'KRW' ? ' KRW'
                    : base == 'VND' ? ' VND'
                    : base == 'RUB' ? ' RUB'
                    : ''}
                        </span>
                      </span>
                    )
                  },
                  {
                    Header: "Change",
                    accessor: 'change',
                    Cell: row => (
                      <span>
                        <span style={{
                          fontWeight: 400,
                          color: row.value > 0 ? '#1e7313'
                            : row.value < 0 ? '#fc021a'
                            : '#010469',
                          transition: 'all .3s ease'
                        }}>
                          {row.value.toFixed(2)}%
                        </span>
                      </span>
                    )
                  },
                  {
                    Header: "Volume",
                    accessor: base == 'BTC' ? 'volume.BTC'
                    : base == 'USD' ? 'volume.USD'
                    : base == 'AUD' ? 'volume.AUD'
                    : base == 'BGN' ? 'volume.BGN'
                    : base == 'BRL' ? 'volume.BRL'
                    : base == 'CAD' ? 'volume.CAD'
                    : base == 'CHF' ? 'volume.CHF'
                    : base == 'CNY' ? 'volume.CNY'
                    : base == 'CZK' ? 'volume.CZK'
                    : base == 'EUR' ? 'volume.EUR'
                    : base == 'JPY' ? 'volume.JPY'
                    : base == 'KRW' ? 'volume.KRW'
                    : base == 'VND' ? 'volume.VND'
                    : base == 'RUB' ? 'volume.RUB'
                    : 'volume.USD',
                    Cell: row => (
                      <span>
                        <span style={{
                          fontWeight: 400,
                          transition: 'all .3s ease',
                        }}>
                          <img width="10" heigh="10" src={base == 'BTC' ? btc : ''} />{base == 'USD'? '$' : ''} {base == 'BTC'? row.value.toFixed(4) : row.value.toFixed(4)} 
                          {base == 'BTC' ? ''
                    : base == 'USD' ? ''
                    : base == 'AUD' ? ' AUD'
                    : base == 'BGN' ? ' BGN'
                    : base == 'BRL' ? ' BRL'
                    : base == 'CAD' ? ' CAD'
                    : base == 'CHF' ? ' CHF'
                    : base == 'CNY' ? ' CNY'
                    : base == 'CZK' ? ' CZK'
                    : base == 'EUR' ? ' EUR'
                    : base == 'JPY' ? ' JPY'
                    : base == 'KRW' ? ' KRW'
                    : base == 'VND' ? ' VND'
                    : base == 'RUB' ? ' RUB'
                    : ''}
                        </span>
                      </span>
                    )
                  },
                  {
                    Header: "Market Cap",
                    accessor: base == 'BTC' ? 'marketcap.BTC'
                            : base == 'USD' ? 'marketcap.USD'
                            : base == 'AUD' ? 'marketcap.AUD'
                            : base == 'BGN' ? 'marketcap.BGN'
                            : base == 'BRL' ? 'marketcap.BRL'
                            : base == 'CAD' ? 'marketcap.CAD'
                            : base == 'CHF' ? 'marketcap.CHF'
                            : base == 'CNY' ? 'marketcap.CNY'
                            : base == 'CZK' ? 'marketcap.CZK'
                            : base == 'EUR' ? 'marketcap.EUR'
                            : base == 'JPY' ? 'marketcap.JPY'
                            : base == 'KRW' ? 'marketcap.KRW'
                            : base == 'VND' ? 'marketcap.VND'
                            : base == 'RUB' ? 'marketcap.RUB'
                            : 'marketcap.USD',
                            Cell: row => (
                              <span>
                                <span style={{
                                  fontWeight: 400,
                                  transition: 'all .3s ease',
                                }}>
                                  <img width="10" heigh="10" src={base == 'BTC' ? btc : ''} />{base == 'USD'? '$' : ''} {base == 'BTC'? row.value.toFixed(4) : row.value.toFixed(4)} 
                                  {base == 'BTC' ? ''
                            : base == 'USD' ? ''
                            : base == 'AUD' ? ' AUD'
                            : base == 'BGN' ? ' BGN'
                            : base == 'BRL' ? ' BRL'
                            : base == 'CAD' ? ' CAD'
                            : base == 'CHF' ? ' CHF'
                            : base == 'CNY' ? ' CNY'
                            : base == 'CZK' ? ' CZK'
                            : base == 'EUR' ? ' EUR'
                            : base == 'JPY' ? ' JPY'
                            : base == 'KRW' ? ' KRW'
                            : base == 'VND' ? ' VND'
                            : base == 'RUB' ? ' RUB'
                            : ''}
                                </span>
                              </span>
                            )
                  },
                  {
                    Header: "ROI",
                    accessor: 'roi',
                    Cell: row => (
                      <span>
                        <span style={{
                          color: '#022b6d',
                          fontWeight: "bold",
                          transition: 'all .3s ease',
                        }}>
                          {row.value.toFixed(0)}%
                        </span>
                      </span>
                    )
                  },
                  {
                    //headerStyle: {"text-align" : "none"},
                    id: "mncount",
                    Header: "Nodes",
                    accessor: 'mncount',
                    Cell: row => (
                      <span>
                        <span style={{
                          fontWeight: 400,
                          transition: 'all .3s ease',
                        }}>
                          {row.value}
                        </span>
                      </span>
                    )
                  },
                  // {
                  //   //headerStyle: {"text-align" : "none"},
                  //   //id: "mncount",
                  //   Header: "Shares",
                  //   accessor: 'share',
                  //   Cell: row => (
                  //     <span>
                  //       <span style={{
                  //         fontWeight: 400,
                  //         transition: 'all .3s ease',
                  //       }}>
                  //         {row.value.coinsupport.process} %
                  //       </span>
                  //     </span>
                  //   )
                  // },
                  {
                    //headerStyle: {"text-align" : "none"}, 
                    Header: "Votes",
                    //minWidth: '100',
                    accessor: '',
                    Cell: row => (
                      <div data-content="Vote by heart">
                      <Popup trigger={
                        <Button as='div' labelPosition='right'>
                        <Button basic color={row.value.votestate == true ? 'black' :'instagram' }
                        onClick={()=> this.handleOnclick && this.handleOnclick(row.value._id)}
                        >
                          <Icon name='heart' color={row.value.votestate == true ? 'red' : 'black'}/>
                          
                        </Button>
                        <Label as='a' basic color='black' pointing='left'>
                          {row.value.totalvote}
                        </Label>
                      </Button>
                      }
                        content="Please vote by heart!"
                      />
                      
                      </div>
                    )
                  },
                  {
                    Header: "Votes",
                    accessor: 'totalvote',
                    show: false
                  },
                  
                ]}
                defaultSorted={[
                  {
                    id: 'totalvote',
                    desc: true
                  }
                ]}
                defaultPageSize={50}
                showPaginationTop={false}
                showPaginationBottom
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ReactTables);
