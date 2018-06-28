import React, { Component } from 'react';
import WeatherCardList from '../components/WeatherCardList.jsx';

class WeatherCardListContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data: [],
      activeCard: null
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  handleSelect(cardElement) {
    if (this.state.activeCard === cardElement) {
      this.setState({ activeCard: null });
    } else {
      this.setState({ activeCard: cardElement })
    }
  }

  render() {
    return (
      <WeatherCardList data={this.state.data} handleSelect={this.handleSelect} activeCard={this.state.activeCard}/>
    );
  }
}

export default WeatherCardListContainer;