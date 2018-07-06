import React, { Component } from 'react';

class OperationButton extends Component {
    render() {
        return (
            <td className={"table__cell table__cell--operation"} onClick={this.props.clickHandler} value={this.props.operation}>
                {this.props.operation}
            </td>
        )
    }
}

export default OperationButton;