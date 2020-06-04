import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import './components/main/default.css';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/main/mainpage.js';
import FolderMain from './components/folder/main';
import Login from './components/main/login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      server : 'https://homepc.mattpan.com:5443/api'
    }
    ReactGA.initialize('UA-156169363-1');
    ReactGA.pageview(window.location.pathname);
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/login' render={(props)=><Login {...props} server={this.state.server} />}></Route>
          <Route path='/app/(.*)?' render={(props)=><FolderMain {...props} server={this.state.server} />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
