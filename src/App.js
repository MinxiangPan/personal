import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './App.css';
import './components/main/default.css';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/main/mainpage.js';
import FolderMain from './components/folder/main';

class App extends Component {
  constructor(props){
    super(props);
    ReactGA.initialize('UA-156169363-1');
    ReactGA.pageview(window.location.pathname);
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/folder/(.*)?' component={FolderMain}/>
        </Switch>
      </div>
    );
  }
}

export default App;
