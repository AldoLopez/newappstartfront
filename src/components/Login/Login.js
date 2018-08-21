import React from 'react';
import { TextField, FormControl, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import './Login.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: '40%'
    },
    input: {
        display: 'none'
    }
});

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='login-box'>
                <div className='login-input'>
                    <FormControl>
                        <TextField
                            id={'username'}
                            label={'Username'}
                            autoComplete={''}
                            required={true}
                        />
                        <TextField
                            id={'password'}
                            label={'Password'}
                            type={'password'}
                            autoComplete={'current-password'}
                            margin={'normal'}
                            required={true}
                        />
                        <div className={'buttons'}>
                            <Link to={'/register'}>
                                <Button variant={'outlined'} className={'button'} onClick={this.props.register}>
                                    Register
                                </Button>
                            </Link>
                            <Link to={'/home'}>
                                <Button variant={'outlined'} color={'primary'} className={'button'}
                                        onClick={this.props.login}>
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </FormControl>
                </div>
            </div>
        );
    };
};

Login.propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
};

export default withStyles(styles)(Login);