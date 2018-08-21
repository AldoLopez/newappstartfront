import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            auth: false
        }
    }

    handleRegister = () => {
        alert('registered');
    };

    handleLogin = () => {
        const user = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if ((typeof user === 'undefined' || user === '') || (typeof password === 'undefined' || password === '')) {
            alert('need user and pass');
        } else {
            const auth = this.attemptLogin(user, password);
        }
    };

    attemptLogin = (user, password) => {
        const authBody = JSON.stringify({
            username: user,
            password: password
        });
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost:3001/login', {
            method: 'POST',
            mode: 'cors',
            body: authBody,
            headers: myHeaders
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            if (data.auth === true) {
                //logged in redirect
            } else {
                //invalid password
            }
        });
    };

    render() {
    return (
      <div>
        <NavBar/>
        <Login login={this.handleLogin} register={this.handleRegister}/>
        <Route path={'/register'} component={Register} />
        <Route  path={'/home'} component={Home} />
      </div>
    );
  }
}

export default App;
