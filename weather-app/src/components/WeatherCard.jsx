import React, { Component } from 'react';
import sunny from '../images/sunny.png';
import snowy from '../images/snowy.png';
import rainy from '../images/rainy.png';
import cloudy from '../images/cloudy.png';

class WeatherCard extends Component {
    render() {
        let imgSource;
        if (this.props.forecast === "sunny") {
            imgSource = sunny;
        } else if (this.props.forecast === "snowy") {
            imgSource = snowy;
        } else if (this.props.forecast === "rainy") {
            imgSource = rainy;
        } else if (this.props.forecast === "cloudy") {
            imgSource = cloudy;
        }

        return (
            <div className={"weatherCard " + (this.props.activeCard === this ? "weatherCard--active" : "")} onClick={() => this.props.handleSelect(this)}>
                <h1 className={"weatherCard__header"}>{this.props.day}</h1>
                <img className={"weatherCard__image"} src={imgSource} alt={this.props.forecast}/>
                <div className={"weatherCard__text"}>
                    <span className={"weatherCard__high"}>{this.props.high}°</span>
                    <span className={"weatherCard__low"}>{this.props.low}°</span>
                </div>
            </div>
        );
    }
}

export default WeatherCard;