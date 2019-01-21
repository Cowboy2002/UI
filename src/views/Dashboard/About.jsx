import React from "react";

// core components

import 'semantic-ui-css/semantic.min.css';
import { Card, Icon} from 'semantic-ui-react';

//import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {name, id, about}=this.props;
    return (
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  <i className="fas fa-info-circle"></i>
                  {'  About  '}{name} ({id})</Card.Header></Card.Content>
                <Card.Content>
                <Card.Description>
                  {about}
                </Card.Description>
              </Card.Content>
            </Card>
      )
  }
}


export default About;
