import React, { Component } from 'react';

class NumberButton extends Component {
    render() {
        return (
            <td className={"table__cell table__cell--number"} onClick={this.props.clickHandler} value={this.props.number}>
                {this.props.number}
            </td>
        )
    }
}

export default NumberButton;