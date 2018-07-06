import React, { Component } from 'react';

class ClearButton extends Component {
    render() {
        return (
            <td colSpan={"3"} className={"table__cell table__cell--clear"} onClick={this.props.clickHandler}>
                clear
            </td>
        )
    }
}

export default ClearButton;