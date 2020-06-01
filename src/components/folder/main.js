import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Folder from './folder';
import MediaFolder from './mediaFolder';
import Music from './music';
import PrivateRoute from './privateRouter';

class FolderMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // server : 'https://gcpf1.mattpan.com/api'
            server : this.props.server,
            isLogin : null
         }
    }

    componentDidMount(){
        this.testUserToken()
        .then(res =>{
            this.setState({isLogin: true});
        }).catch(err=>{
            this.setState({isLogin: false});
        });
    }

    async testUserToken(){
        return await axios({
            url: "https://homepc.mattpan.com:5443/api/auth/user",
            headers:{
                'Authorization' : 'Token ' + localStorage.getItem('token')
            }
        });
    }

    // Temp Login Method
    tempLogin(username, password){
        axios.post( this.props.server + '/auth/login', {
            'username': username,
            'password' : password
        }).then(res => {
            if(res.data.token){
                localStorage.setItem('token', res.data.token);
            }
            else{
                alert("username or password is incorrect!");
            }
        });
    }



    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand" >Folder</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/folder/public" >Public <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/folder/media">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/folder/music">Music</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-2 my-lg-0">
                            <li>
                                <Link className="btn btn-primary" to="/login">Login</Link>
                            </li>
                            <li>
                                <Link className="btn btn-secondary" to="/folder/public" onClick={()=>{
                                    localStorage.removeItem('token');
                                    axios.defaults.headers.common['Authorization'] = ''}}>LogOut</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                {
                    this.state.isLogin == null ? <span/>:
                    <Switch>
                        <PrivateRoute component={MediaFolder} isLogin={this.state.isLogin} path='/folder/media/(.*)?' target="/media" server={this.props.server}/>
                        <PrivateRoute component={Music} isLogin={this.state.isLogin} path='/folder/music/(.*)?' server={this.props.server}/>
                        <Route path='/folder/public/(.*)?' render={(props)=><Folder {...props} target="/public" server={this.props.server} />}/>
                    </Switch>
                }
                
            </div>
         );
    }
}
 
export default FolderMain;