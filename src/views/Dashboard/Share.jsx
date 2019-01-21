import React from "react";

// core components
import ReactTable from "react-table";
import Table from "components/Table/Table.jsx";
import 'semantic-ui-css/semantic.min.css';
import { Card, Progress,Label} from 'semantic-ui-react';
import Icon from "@material-ui/core/Icon";

//import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


class Share extends React.Component {
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
                <i className="fas fa-list-alt"></i> {"  Top Sharing services"}</Card.Header></Card.Content>
                <Card.Content>
                <Card.Description>
                      {data.map((o)=>{
                        return (
                          <div>
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                  <p><span style={{
                                        color: '#000',
                                        transition: 'all .3s ease',
                                        fontWeight: "500" }}> 
                                    <img width="20" height="20" src={require('assets/img/share/'+o._id.toLowerCase()+'.png')}/>
                                    {'   '}{o.basedata.name}
                                    </span>
                                      <a href={o.basedata.website}>{'   '}<i className="fab fa-internet-explorer" /></a>
                                      <a href={o.basedata.discord}>{'   '}<i className="fab fa-discord" /></a>
                                      <a href={o.basedata.twitter}>{'   '}<i className="fab fa-twitter" /></a>
                                      <a href={o.basedata.telegram}>{'   '}<i className="fab fa-telegram" /></a>
                                      <a href={o.basedata.facebook}>{'   '}<i className="fab fa-facebook" /></a>
                                    </p>
                                  </td>
                                  <td>
                                    <p>15 Nodes running</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  <p>
                                  <Progress percent={o.process} indicating autoSuccess size='small'/>
                                  </p>
                                  </td>
                                  <td>
                                    Fee: 1%
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )
                      })}
                </Card.Description>
              </Card.Content>
            </Card>
      )
  }
}

export default Share;
