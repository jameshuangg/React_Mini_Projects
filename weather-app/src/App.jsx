import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WeatherCardListContainer from './containers/WeatherCardListContainer.jsx';
// import WeatherInfoCard from './components/WeatherInfoCard.jsx';

import properties from './properties.jsx';
import days from './days.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false
    };

    this.getWeatherData = this.getWeatherData.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let weatherData = await this.getWeatherData();
    const processedData = processWeatherData(weatherData);
    this.setState({ data: processedData, loading: false });
  }

  getWeatherData() {
    let url = new URL(properties.weatherAPIUrl);
    let params = {id: 6167865, APPID: properties.weatherAPIKey};
    url.search = new URLSearchParams(params);
    return new Promise(async (resolve) => {
      const response = await fetch(url);
      const jsonResponse = response.json();
      resolve(jsonResponse);
    });
  }

  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <Router>
        <div>
          <WeatherCardListContainer data={this.state.data}/>
          <Route path={'/'}></Route>
          {/* {
            this.state.data.map((weatherData, index) => {
              var day = days[(new Date(weatherData.dt * 1000)).getDay()];
              return <Route path={'/' + day} render={() => <WeatherInfoCard day={day} key={index}/>}></Route>
            })
          } */}
        </div>
      </Router>
    );
  }
}

function convertKelvinToCelsius(kelvTemp) {
  return Math.round(kelvTemp - 273.15);
}

function processWeatherData(weatherData) {
  if (!weatherData.list) {
    return null;
  }
  const weatherList = weatherData.list;
  let result = [];
  let previousDay = null;
  let totalHigh = 0;
  let totalLow = 0;
  let numDataForToday = 0;
  // I know the weather data is given in chronological order
  for (let i = 0; i < weatherList.length; i++) {
    const thisDay = days[new Date(weatherList[i].dt * 1000).getDay()];
    // Only time we need to push is when previousDay is not equal to today or if it is the last entry
    if ((previousDay !== thisDay && previousDay !== null) || i === weatherList.length - 1) {
      let weatherObject = {};
      weatherObject.day = previousDay;
      weatherObject.high = convertKelvinToCelsius(totalHigh / numDataForToday);
      weatherObject.low = convertKelvinToCelsius(totalLow / numDataForToday);
      weatherObject.forecast = weatherList[i].weather[0].main;
      result.push(weatherObject);
      totalHigh = 0;
      totalLow = 0;
      numDataForToday = 0;
    }
    previousDay = thisDay;
    totalHigh += weatherList[i].main.temp_max;
    totalLow += weatherList[i].main.temp_min;
    numDataForToday++;
  }
  return result;
}

export default App;
