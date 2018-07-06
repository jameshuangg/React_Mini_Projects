import React, { Component } from 'react';
import Calculator from '../components/Calculator.jsx';

class CalculatorContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousNumber: '0',
            currentNumber: '',
            queuedOp: '',
        }

        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleOperationClick = this.handleOperationClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }

    handleNumberClick(e) {
        let number = e.target.getAttribute('value');
        this.setState((prevState) => {
            return { currentNumber: prevState.currentNumber + number}
        });
    }

    handleOperationClick(e) {
        let operation = e.target.getAttribute('value');
        // If there has previously been an operation clicked. Upon clicking another. It will render the resultant.
        if (this.state.queuedOp !== '') {
            switch(this.state.queuedOp) {
                case '/':
                    this.setState((prevState) => {
                        return { previousNumber: (parseInt(prevState.previousNumber, 10) / parseInt(prevState.currentNumber, 10)).toString(), queuedOp: '/', currentNumber: '' };
                    });
                    break;
                case '-':
                    this.setState((prevState) => {
                        return { previousNumber: (parseInt(prevState.previousNumber, 10) - parseInt(prevState.currentNumber, 10)).toString(), queuedOp: '-', currentNumber: '' };
                    });
                    break;
                case '+':
                    this.setState((prevState) => {
                        return { previousNumber: (parseInt(prevState.previousNumber, 10) + parseInt(prevState.currentNumber, 10)).toString(), queuedOp: '+', currentNumber: '' };
                    });
                    break;
                default:
                    return null;
            }
        } else {
            this.setState((prevState) => {
                return { previousNumber: prevState.currentNumber, currentNumber: '' }
            });
            switch(operation) {
                case '/':
                    this.setState({ queuedOp: '/' });
                    break;
                case '-':
                    this.setState({ queuedOp: '-' });
                    break;
                case '+':
                    this.setState({ queuedOp: '+' });
                    break;
                case '=':
                    break;
                default:
                    return null;
            }   
        }
    }

    handleClearClick() {
        this.setState({ queuedOp: '', previousNumber: '0', currentNumber: '' });
    }

    render() {
        return <Calculator 
                    currentNumber={this.state.currentNumber}
                    previousNumber={this.state.previousNumber}
                    handleNumberClick={this.handleNumberClick}
                    handleOperationClick={this.handleOperationClick}
                    handleClearClick={this.handleClearClick} />
    }
}

export default CalculatorContainer;