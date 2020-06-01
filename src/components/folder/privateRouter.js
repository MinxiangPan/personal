import React, { Component } from 'react';
import axios from 'axios';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isLogin, ...rest}) => { 

    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route render={props => (
            isLogin ?
                <Component {...props} {...rest}/>
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;