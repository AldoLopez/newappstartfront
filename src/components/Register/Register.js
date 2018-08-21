import React, { Component } from 'react';
import './Register.css';
import { Route, Switch } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            validName: false
        }
    };

    render() {
        return (
            <div>
                Register Page
            </div>
        );
    };
}

export default Register;