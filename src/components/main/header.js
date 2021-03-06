import React, { Component } from 'react';
import { Button, Navbar, NavDropdown, Nav  } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message : ``,
            count: 0    
        }
    }

    componentDidMount(){
        window.addEventListener('click', ()=>{
            if(document.getElementById('navbarSupportedContent') != null){
                document.getElementById('navbarSupportedContent').classList.remove('show');
            }
        });
    }

    render() { 
        return ( 
            <nav id='navbar' className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button id='nav-toggler' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className='nav-item'>
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className='nav-item'>
                                <Link className="nav-link" to="/folder/public">Folder</Link>
                            </li>
                        </ul>
                    </div>
            </nav>
        );
    }
}
 
export default Header;