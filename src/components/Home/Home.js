import React, { Component } from 'react';
import './Home.css';
import { Route, Switch } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: true
        }
    };

    render() {
        return (
            <div>
                Home Page
            </div>
        );
    };
}

export default Home;