import React, { Component } from 'react';
import axios from 'axios';

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            server : 'https://gcpf1.mattpan.com',
            url : this.props.url
        };
    }

    componentDidMount(){
        this.updateToNewFolder(this.state.url);
    }

    updateToNewFolder = name => {
        this.setState({url : name});
        axios.get(this.state.server + this.state.url)
        .then(res => {
            if(!res.data.message.hasOwnProperty("errno")){
                this.setState({list: res.data.message});
            }
        })
        .catch(err => {
            console.log(err);
        });
    }



    render() {
        return (
            <div>
                {this.state.list.map(items => {
                    if(items.isDict){
                        return <button key={this.state.server + items.name} onClick={()=>this.updateToNewFolder(items.name)} style={{'display': 'block', 'color':'black'}}>{items.name}</button>;
                    }
                    else{
                        return <a key={this.state.server + items.name} href={this.state.server + items.name} style={{'display': 'block'}}>{items.name}</a>;
                    }
                    
                })}
            </div>
        );
    }
}

export default Folder;
