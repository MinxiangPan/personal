import React, { Component } from 'react';
import axios from 'axios';

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            server : 'https://www.mattpan.com:8443'
        };
    }

    componentDidMount(){
        var header = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Connection' : 'keep-alive'
        };
        axios.get(this.state.server + '/public', {headers : header})
        .then(res => {
            let nlist = []
            if(!res.message.hasOwnProperty("errno")){
                nlist = res.message.split('\n');   
            }
            this.setState({list: res.message});
            console.log(this.state.list);
        })
        .catch(err => {
            console.log(err);
        });
    }



    render() {
        return (
        <div>

        </div>
        );
    }
}

export default Folder;
