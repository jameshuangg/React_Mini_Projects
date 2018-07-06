import React, { Component } from 'react';
import NumberDisplay from './NumberDisplay.jsx';
import ClearButton from './ClearButton.jsx';
import NumberButton from './NumberButton.jsx';
import OperationButton from './OperationButton.jsx';

class Calculator extends Component {
    render() {
        return (
            <table className={"table"}>
                <tbody>
                    <tr>
                        <NumberDisplay currentNumber={this.props.currentNumber} previousNumber={this.props.previousNumber} />
                    </tr>
                    <tr>
                        <ClearButton clickHandler={this.props.handleClearClick} />
                        <OperationButton operation={"/"} clickHandler={this.props.handleOperationClick} />
                    </tr>
                    <tr>
                        <NumberButton number={7} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={8} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={9} clickHandler={this.props.handleNumberClick} />
                        <OperationButton operation={"-"} clickHandler={this.props.handleOperationClick} />
                    </tr>
                    <tr>
                        <NumberButton number={4} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={5} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={6} clickHandler={this.props.handleNumberClick} />
                        <OperationButton operation={"+"} clickHandler={this.props.handleOperationClick} />
                    </tr>
                    <tr>
                        <NumberButton number={1} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={2} clickHandler={this.props.handleNumberClick} />
                        <NumberButton number={3} clickHandler={this.props.handleNumberClick} />
                        <OperationButton operation={"="} clickHandler={this.props.handleOperationClick} />
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Calculator;