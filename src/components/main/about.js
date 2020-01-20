import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        if(this.props.data){
            var {name, profilepic, bio, email, resumeDownload, occupation} = this.props.data;
            var cityname = this.props.data.address.cityname;
            var social = this.props.data.social.map(ele => {
                return<a key={ele.name} className='link' href={ele.url}>{ele.name} <i className={ele.className} style={{fontSize:'30px'}}></i></a>;
            });
        }

        return ( 
            <section className='about' id='about'>
                <div className='intro'>
                    <h1 style={{fontSize: '50px'}}>{name}</h1>
                    <p className='lightdark'>{occupation}  in  {cityname}</p>
                    <p>

                    </p>
                    <div style={{display: 'inline'}}>{social}</div>
                    <a className='btn btn-info download' href={resumeDownload}><i className="fa fa-download" style={{fontSize:'30px'}}></i> Download Resume</a>
                </div>
            </section>
         );
    }
}
 
export default About;