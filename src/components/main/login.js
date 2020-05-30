import React, { Component } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
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
    }

    processLogin(){
        axios.post(this.props.server + '/auth/login', {
            'username': document.getElementById('username').value,
            'password' : document.getElementById('password').value
        }).then(res => {
            if(res.data.token){
                localStorage.setItem('token', res.data.token);
                window.history.back();
            }
            else{
                document.getElementById('login-message').value = "username or password is incorrect!";

            }
        });
    }

    render() { 
        return ( 
        <div>
            <div className="login-item">
                <label>Username: </label>
                <input id="username"></input>
            </div>
            <div className="login-item">
                <label>Password: </label>
                <input id="password" type="password"></input>
            </div>
            <button className="login-button btn btn-primary" onClick={this.processLogin}>Login</button>
            <span className="login-message" id="login-message"></span>
        </div> );
    }
}
 
export default Login;