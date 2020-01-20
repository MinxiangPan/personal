import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import logo from './logo.svg';
import './App.css';
import './components/main/default.css';
import { Button} from 'react-bootstrap';
import Header from './components/main/header';
import About from './components/main/about';
import Portfolio from './components/main/portfolio';
import Footer from './components/main/footer';
import Contact from './components/main/contact';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData : {},
      gridtemplate : '1fr 2.5fr 1fr'
    };

    this.resizeWindow = this.resizeWindow.bind(this);
    ReactGA.initialize('UA-156169363-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    this.resizeWindow();
    window.addEventListener("resize", this.resizeWindow);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.resizeWindow);
  }

  resizeWindow() {
    if(window.innerWidth < 500){
      this.setState({gridtemplate : '1fr 10fr 1fr'});
    }
    else{
      this.setState({gridtemplate : '1fr 2.5fr 1fr'});
    }
  }


  render(){
    return (
      <div className="App">
        <Header></Header>
        <div className='main' style={{gridTemplateColumns: this.state.gridtemplate}}>
          <div className='leftEmpty'></div>
          <div className='rightEmpty'></div>
          <About data={this.state.resumeData.main}></About>
          <Portfolio data={this.state.resumeData.resume}></Portfolio>
          <Contact data={this.state.resumeData.main}></Contact>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
