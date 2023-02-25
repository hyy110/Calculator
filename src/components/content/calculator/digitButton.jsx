import React, { Component } from 'react';
import ACTIONS from '../../../redux/action';
import { connect } from 'react-redux';

class DigitBuTTON extends Component {
    render() { 
        return (
            <button onClick={() => this.props.add_digit(this.props.digit)}>{this.props.digit}</button>
        )
    }
}

const mapDispatchToProps = {
    add_digit: digit => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit,
        }
    }
}

export default connect(null, mapDispatchToProps)(DigitBuTTON)