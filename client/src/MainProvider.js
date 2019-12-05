import React, { Component } from 'react';
import axios from 'axios';
const { Provider, Consumer } = React.createContext();
class MainProvider extends Component {
  constructor() {
    super();
    this.state = {
      camping: [],
      cycling: [],
      fishing: [],
      skiing: [],
    }
  }
  getCamping = () => {
    axios.get('/classifiedItems').then((res) => {
      // filter
      const campingFilter = res.data.filter((category) => {
        return category.category === 'Camping'
      })
      this.setState({ camping: campingFilter })
      // setState
      console.log(this.state.camping)
    })
  }
  getCycling = () => {
    axios.get('/classifiedItems').then((res) => {
      // filter
      const cyclingFilter = res.data.filter((category) => {
        return category.category === 'Cycling'
      })
      this.setState({ cycling: cyclingFilter })
      // setState
      console.log(this.state.cycling)
    })
  }
  getFishing = () => {
    axios.get('/classifiedItems').then((res) => {
      // filter
      const fishingFilter = res.data.filter((category) => {
        return category.category === 'Fishing'
      })
      this.setState({ fishing: fishingFilter })
      // setState
      console.log(this.state.fishing)
    })
  }
  getSkiing = () => {
    axios.get('/classifiedItems').then((res) => {
      // filter
      const skiingFilter = res.data.filter((category) => {
        return category.category === 'Skiing'
      })
      this.setState({ skiing: skiingFilter })
      // setState
      console.log(this.state.skiing)
    })
  }
  addNewItem = newItem => {
    axios.post('/classifiedItems', newItem)
      .then(res => console.log("wahoo"))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <Provider value={{
        ...this.state,
        getCamping: this.getCamping,
        getCycling: this.getCycling,
        getFishing: this.getFishing,
        getSkiing: this.getSkiing,
        addNewItem: this.addNewItem,
      }}>
        {this.props.children}
      </Provider>
    )
  }
}
export default MainProvider
export function withProvider(Comp) {
  return props => <Consumer>
    {value => <Comp {...value} {...props} />}
  </Consumer>
}