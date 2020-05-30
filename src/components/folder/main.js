import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import Folder from './folder';
import MediaFolder from './mediaFolder';
import Music from './music';

class FolderMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            // server : 'https://gcpf1.mattpan.com/api'
            server : this.props.server
         }
    }

    componentDidMount(){

    }

    // Temp Login Method
    tempLogin(username, password){
        axios.post( this.state.server + '/auth/login', {
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
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link class="navbar-brand" >Folder</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/folder/public" >Public <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/folder/media">Media</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/folder/music">Music</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav my-2 my-lg-0">
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

                <Switch>
                    <Route path='/folder/media/(.*)?' render={(props)=><MediaFolder {...props} target="/media" server={this.state.server} />}/>
                    <Route path='/folder/public/(.*)?' render={(props)=><Folder {...props} target="/public" server={this.state.server} />}/>
                    <Route path='/folder/music/(.*)?' render={(props)=><Music {...props} server={this.state.server} />} />
                </Switch>
            </div>
         );
    }
}
 
export default FolderMain;