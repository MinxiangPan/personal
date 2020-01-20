import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var today = `${mm}/${dd}/${yyyy}`;

        return ( 
            <footer className='footer'>
                <p>Posted by: Matthew Pan - Date: {today} - Website: <a href='https://www.mattpan.com'>www.mattpan.com</a></p>
            </footer>
         );
    }
}
 
export default Footer;