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
            isLogin : null,
            userid : null,
            username: null,
            email: null
         }
    }

    componentDidMount(){
        this.testUserToken()
        .then(res =>{
            console.log(res);
            this.setState({isLogin: true, userid: res.data.id, username: res.data.username, email: res.data.email});
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
                                <Link className="nav-link" to="/app/public" >Public <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app/media">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app/music">Music</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav my-2 my-lg-0">
                            {
                                this.state.isLogin ? 
                                <li style={{'color': 'white', 'margin':'8px 10px 0 0'}}>Weclome: {this.state.username}</li>
                                : null
                            }
                            { 
                                this.state.isLogin ? 
                                <li>
                                    <Link className="btn btn-secondary" to="/app/public" onClick={()=>{
                                        localStorage.removeItem('token');
                                        this.setState({isLogin: false});
                                        axios.defaults.headers.common['Authorization'] = ''}}>LogOut</Link>
                                </li>
                                : 
                                <li>
                                    <Link className="btn btn-primary" to="/login">Login</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>
                {
                    this.state.isLogin == null ? <span/>:
                    <Switch>
                        <PrivateRoute component={MediaFolder} isLogin={this.state.isLogin} path='/app/media/(.*)?' target="/media" server={this.props.server}/>
                        <PrivateRoute component={Music} isLogin={this.state.isLogin} path='/app/music/(.*)?' server={this.props.server}/>
                        <Route path='/app/public/(.*)?' render={(props)=><Folder {...props} target="/public" server={this.props.server} />}/>
                    </Switch>
                }
                
            </div>
         );
    }
}
 
export default FolderMain;