import React from "react";

import 'semantic-ui-css/semantic.min.css';
import { Select } from 'semantic-ui-react';
import { Input, Menu , Grid, Segment} from 'semantic-ui-react';
import Search from './Search.jsx';
var axios = require('axios');

const countryOptions = [
  { key: 'BTC', value: 'BTC', icon: 'bitcoin', text: 'Bitcoin' },
  { key: 'USD', value: 'USD', flag: 'us', text: 'United States' },
  { key: 'AUD', value: 'AUD', flag: 'au', text: 'Australian dollar' },
  { key: 'BGN', value: 'GBN', flag: 'bg', text: 'Bulgarian lev' },
  { key: 'CAD', value: 'CAD', flag: 'ca', text: 'Canadian dollar' },
  { key: 'CNY', value: 'CNY', flag: 'cn', text: 'Chinese yuan' },
  { key: 'CZK', value: 'CZK', flag: 'cz', text: 'Czech koruna' },
  { key: 'EUR', value: 'EUR', flag: 'eu', text: 'Euro' },
  { key: 'JPY', value: 'JPY', flag: 'jp', text: 'Japanese yen' },
  { key: 'KRW', value: 'KRW', flag: 'kr', text: 'Korean won' },
  { key: 'RUB', value: 'RUB', flag: 'ru', text: 'Russian rouble' },
  { key: 'VND', value: 'VND', flag: 'vn', text: 'Vietnam dong' },
];
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value: "BTC",
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
  render(){
    const { classes, color ,onChange, onSelect} = this.props;
    const {marketdata} = this.state;
    return (
      <div>
         <Grid columns={3} padded='horizontally'>
            <Grid.Row>
              <Grid.Column width={10}>
                <Segment basic>
                <Select onChange={(event, data)=> {
                      this.setState({value: data.value});
                      console.log(data);
                      onChange(data.value) ;
                      }
                    }
                    placeholder='Select base currency' options={countryOptions}
                    value={this.state.value} 
                    id="select" >
                  </Select>
                </Segment>
              </Grid.Column>
              <Grid.Column width={3}>
                <Segment basic textAlign='right' vertical>
                {
                  marketdata ? 
                  (
                    <div>
                    <p style={{
                      lineHeight: '80%'
                    }}><span style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: '#878484',
                      transition: 'all .3s ease'
                    }}>
                    <i class="fab fa-bitcoin"></i>
                    <span style={{
                      fontWeight: 600,
                    }}>{' BTC Price: '} </span>${marketdata.btcprice.toFixed(0)}</span></p>
                    <p style={{
                      lineHeight: '80%'
                    }}><span style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: '#878484',
                      transition: 'all .3s ease'
                    }}>
                    <span style={{
                      fontWeight: 600,
                    }}>{' Stats: '}</span>{'7 Masternode Projects'}</span></p>
                    </div>
                  ):<div></div>
                }
                </Segment>
              </Grid.Column>
              <Grid.Column width={3}>
                <Segment basic>
                  <Search />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
    </div>
    );
  }
}

export default Header;
