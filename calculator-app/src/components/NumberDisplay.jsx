import React, { Component } from 'react';

class NumberDisplay extends Component {
    render() {
        return (
            <td colSpan={"4"} className={"table__cell table__cell--display"} value={this.props.currentNumber === '' ? this.props.previousNumber : this.props.currentNumber}>
                {this.props.currentNumber === '' ? this.props.previousNumber : this.props.currentNumber}
            </td>
        )
    }
}

export default NumberDisplay;