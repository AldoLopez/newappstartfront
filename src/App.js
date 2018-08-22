import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import { Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import * as authUtils from './utils/AuthUtils';

const auth = {
    isAuthenticated: false,
    authenticate() {
        authUtils.loginUser(false, (data) => {
            if (data.auth) {
                this.isAuthenticated = true;
            } else {
                this.isAuthenticated = false;
            }
        });
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        auth.isAuthenticated === true ?
            <Component {...props}/>
           :<Redirect to={'/'}/>
    )} />
);

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
            this.attemptLogin(user, password);
        }
    };

    attemptLogin = (user, password) => {
        const authBody = JSON.stringify({
            username: user,
            password: password
        });

        authUtils.loginUser(authBody, (data) => {
            console.log(data);
            if (data.auth === true) {
                auth.authenticate(() => {
                    this.setState({
                        auth: true
                    });
                });
            }
        });
    };

    render() {
        return (
          <div>
            <NavBar/>
            <Login login={this.handleLogin} register={this.handleRegister}/>
            <Route path={'/register'} component={Register} />
            <PrivateRoute  path={'/home'} component={Home} />
              {this.state.auth ?
                  <Redirect to={'/home'}/> : ''
              }
          </div>
        );
  }
}

export default App;
