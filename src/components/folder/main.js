import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Folder from './folder';
import MediaFolder from './mediaFolder';

class FolderMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            page : <Folder target="/public"/>
         }
    }

    componentDidMount(){

    }

    switchPage = page => {
        let pages = <Folder target="/public"/>
        switch(page){
            case "media":
                pages = <MediaFolder target="/media"/>
            default:

        }
        this.setState({page : pages});
    }

    // Temp Login Method
    tempLogin(username, password){
        
        axios.post('https://gcpf1.mattpan.com/api/auth/login', {
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
                    <Link class="navbar-brand" href="folder">Folder</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/folder/public" onClick={()=>this.switchPage("public")}>Public <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" onClick={()=>this.switchPage("media")} to="/folder/media">Media</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav my-2 my-lg-0">
                            <li>
                                <input id="username" />
                            </li>
                            <li>
                                <input id="password" type='password'/>
                            </li>
                            <li>
                                <button className="btn btn-primary" onClick={()=>{
                                    let username = document.getElementById('username');
                                    let password = document.getElementById('password');
                                    this.tempLogin(username.value, password.value);
                                    username.value = "";
                                    password.value = "";
                                    }}>Login</button>
                            </li>
                            <li>
                                <button className="btn btn-secondary" onClick={()=>{
                                    localStorage.removeItem('token');
                                    axios.defaults.headers.common['Authorization'] = ''}}>LogOut</button>
                            </li>
                        </ul>
                    </div>
                    </nav>

                    {this.state.page}

            </div>

         );
    }
}
 
export default FolderMain;