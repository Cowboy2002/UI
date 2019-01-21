import _ from 'lodash'
//import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment ,Label, Icon} from 'semantic-ui-react'
var axios = require('axios');
async function src() {
  var b = await axios.get('http://localhost:4200/api/coins');
  var a = b.data;
  var c = a.map(o=>{
    return {
      id: o._id,
      title: o.basedata.name,
      description: (
        <div><a href={`/coins/${o._id}`}>
        <Label>
          <Icon name='heart' color='red'/> {o.totalvote}
        </Label>
        <p>{o.about}</p>
        </a>
        </div>
      ),
      image: require('assets/img/coin/'+o._id.toLowerCase()+'.png'),
      price: o.marketdata.price.USD.toFixed(2) + ' USD'
    }
  });
  return c;
}


export default class SearchExampleStandard extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
    //this.props.selectCoin(result.id);
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(async () => {
      var source = await src();
      //console.log(source);
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
    )
  }
}
