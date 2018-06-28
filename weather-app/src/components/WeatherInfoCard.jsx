import React, { Component } from 'react';

class WeatherInfoCard extends Component {
  render() {
    return (
      <div className={"infoCardContainer"}>
        <h1 className={"infoCardContainer__header"}>{this.props.day} Hourly Forcast</h1>
      </div>
    )
  }
}

export default WeatherInfoCard;