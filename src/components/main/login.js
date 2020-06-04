import React, { Component } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.processLogin = this.processLogin.bind(this);

    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = '';
        document.body.style.backgroundColor = '#212121';
    }

    componentWillUnmount(){
        document.body.style.backgroundColor = 'white';
    }

    processLogin(){
        axios.post(this.props.server + '/auth/login', {
            'username': document.getElementById('username').value,
            'password' : document.getElementById('password').value
        }).then(res => {
            if(res.data.token){
                localStorage.setItem('token', res.data.token);
                axios.defaults.headers.common['Authorization'] = 'Token '+ res.data.token;
                window.history.back();
            }
            else{
                document.getElementById('login-message').value = "username or password is incorrect!";

            }
        });
    }

    render() { 
        return ( 
        <div className="form">
            <div className='control'>
                <h1>
                Sign In
                </h1>
            </div>
            <div className="control block-cube block-input login-item">
                <input id="username" type="text" name='username' placeholder='Username'></input>
                <div class='bg-top'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                    <div class='bg-inner'></div>
                </div>
            </div>
            <div className="control block-cube block-input login-item">
                <input id="password" name='password' placeholder='Password' type='password'></input>
                <div class='bg-top'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg-right'>
                    <div class='bg-inner'></div>
                </div>
                <div class='bg'>
                    <div class='bg-inner'></div>
                </div>
            </div>
            <button className="login-button btn block-cube block-cube-hover" type="button" onClick={this.processLogin}>
                <div className='bg-top'>
                    <div className='bg-inner'></div>
                    </div>
                    <div className='bg-right'>
                    <div className='bg-inner'></div>
                </div>
                <div className='bg'>
                    <div className='bg-inner'></div>
                </div>
                <div className='text'>
                    Log In
                </div>
            </button>
            <span className="login-message" id="login-message"></span>
        </div> );
    }
}
 
export default Login;