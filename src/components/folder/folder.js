import React, { Component } from 'react';
import axios from 'axios';

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            server : 'https://gcpf1.mattpan.com',
        };
    }

    // componentDidMount(){
    //     this.updateToNewFolder(document.URL.substr(document.URL.indexOf('/public')));
    // }

    // updateToNewFolder = name => {
    //     axios.get(this.state.server + name)
    //     .then(res => {
    //         if(!res.data.message.hasOwnProperty("errno")){
    //             var ret = res.data.message;
    //             ret.sort((a,b)=>{return a.isDict == b.isDict ? 0 : a.isDict ? -1 : 1;});
    //             this.setState({list: ret});
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }



    render() {
        return (
            <div>
                {this.state.list.map(items => {
                    if(items.isDict){
                        return <a key={this.state.server + items.name} href={items.name} style={{'display': 'block', 'color':'black'}}>{'Folder: ' + items.name.split(document.URL.substr(document.URL.indexOf('/public')))[1].substr(1)}</a>;
                    }
                    else{
                        return <a key={this.state.server + items.name} href={this.state.server + items.name} style={{'display': 'block'}}>{'Files: ' + items.name.split(document.URL.substr(document.URL.indexOf('/public')))[1].substr(1)}</a>;
                    }
                    
                })}
            </div>
        );
    }
}

export default Folder;
