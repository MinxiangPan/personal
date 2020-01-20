import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        if (this.props.data){
            var {email, phone, address} = this.props.data;
            var {street, city, state, zip, cityname} = address;
        }

        return ( 
            <section className='contact' id='contact'>
                <div>
                    <h2 className='resume-title' style={{color:'#9933ff'}}>Contact Info</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td> : </td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td> : </td>
                                <td>{phone}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td> : </td>
                                <td>{street}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>{`${city}, ${state}, ${zip}`}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
         );
    }
}
 
export default Contact;