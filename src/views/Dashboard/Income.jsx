import React from "react";

// core components
import Table from "components/Table/Table.jsx";
import 'semantic-ui-css/semantic.min.css';
import {Flag, Segment} from 'semantic-ui-react';


//import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const {color, data, base, title, id}=this.props;
    return (
      <div>
            <Segment inverted color={color} textAlign='center' raised padded>
              <span style={{
                          fontSize: 16,
                          fontFamily: 'Arial',
                          font: 'Arial',
                          fontStyle: 'bold',
                          fontWeight: 400,
                          transition: 'all .3s ease'
                        }}>
                          {title}
                        </span>
                
                        <p style={{
                          fontSize: 24,
                          //color: base == 'BTC' ? '#300430' : '#933011',
                          transition: 'all .3s ease',
                          fontWeight: base =='BTC'? "500" : "600"
                        }}>
                          { base == 'BTC' ? '$'
                          : base == 'USD' ? '$'
                          : ''}
                        {
                          base == 'BTC' ? data.USD
                          : base == 'USD' ? data.USD
                          : base == 'AUD' ? data.AUD
                          : base == 'BGN' ? data.BGN
                          : base == 'BRL' ? data.BRL
                          : base == 'CAD' ? data.CAD
                          : base == 'CHF' ? data.CHF
                          : base == 'CNY' ? data.CNY
                          : base == 'CZK' ? data.CZK
                          : base == 'EUR' ? data.EUR
                          : base == 'JPY' ? data.JPY
                          : base == 'KRW' ? data.KRW
                          : base == 'VND' ? data.VND
                          : base == 'RUB' ? data.RUB
                          : data.USD
                        }
                        {' '}{ base == 'BTC' ? ''
                          : base == 'USD' ? ''
                          : base == 'AUD' ? 'AUD'
                          : base == 'BGN' ? 'BGN'
                          : base == 'BRL' ? 'BRL'
                          : base == 'CAD' ? 'CAD'
                          : base == 'CHF' ? 'CHF'
                          : base == 'CNY' ? 'CNY'
                          : base == 'CZK' ? 'CZK'
                          : base == 'EUR' ? 'EUR'
                          : base == 'JPY' ? 'JPY'
                          : base == 'KRW' ? 'KRW'
                          : base == 'VND' ? 'VND'
                          : base == 'RUB' ? 'RUB'
                          : 'USD'}
                        </p>
                        <p style={{
                          fontSize: 14,
                          //color: base == 'BTC' ? '#300430' : '#933011',
                          transition: 'all .3s ease',
                          fontWeight: base =='BTC'? "500" : "600"
                        }}>
                          {data.BTC} BTC
                        </p>
                        <p style={{
                          fontSize: 14,
                          //color: base == 'BTC' ? '#300430' : '#933011',
                          transition: 'all .3s ease',
                          fontWeight: base =='BTC'? "500" : "600"
                        }}>
                          {data.coin} {id}
                        </p>
              </Segment>
            
      </div>
      )
  }
}


export default Income;
