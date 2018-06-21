import React, { Component } from 'react';
import WeatherCardList from '../components/WeatherCardList.jsx';
import dummyData from '../DummyData.jsx';

class WeatherCardListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeCard: null
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.setState({ data: dummyData });
    }

    handleSelect(key) {
        if (this.state.activeCard === key) {
            this.setState({ activeCard: null });
        } else {
            this.setState({ activeCard: key })
        }
    }

    render() {
        return (
            <WeatherCardList data={this.state.data} handleSelect={this.handleSelect} activeCard={this.state.activeCard}/>
        )
    }
}

export default WeatherCardListContainer;