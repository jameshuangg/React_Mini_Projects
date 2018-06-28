import React, { Component } from 'react';
import WeatherCard from './WeatherCard.jsx';

class WeatherCardList extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div>
        {this.props.data.map((weatherCard, index) => {
          return (
          <WeatherCard day={weatherCard.day}
            forecast={weatherCard.forecast}
            high={weatherCard.high}
            low={weatherCard.low}
            handleSelect={this.props.handleSelect}
            activeCard={this.props.activeCard}
            key={index} />
          );
        })}
      </div>
    )
  }
}

export default WeatherCardList;