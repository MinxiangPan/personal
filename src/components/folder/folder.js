import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './folder.css';

class Folder extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            server : 'https://gcpf1.mattpan.com/api'
        };
        this.updatebasedonCurrentURL = this.updatebasedonCurrentURL.bind(this);
        this.updateToNewFolder = this.updateToNewFolder.bind(this);
    }

    componentDidMount(){
        this.updateToNewFolder(document.URL.substr(document.URL.indexOf('/public')));
        window.addEventListener('popstate', this.updatebasedonCurrentURL);
    }

    updatebasedonCurrentURL(e){
        this.updateToNewFolder(document.URL.substr(document.URL.indexOf('/public')));
    }

    updateToNewFolder = name => {
        axios.get(this.state.server + name)
        .then(res => {
            if(!res.data.hasOwnProperty("errno")){
                var ret = res.data;
                ret.sort((a,b)=>{return a.isDict == b.isDict ? 0 : a.isDict ? -1 : 1;});
                this.setState({list: ret});
            }
        })
        .catch(err => {
            console.log(err);
        });
    }



    render() {
        return (
            <div>
                <button onClick={()=>{
                    var prev = document.URL.substring(document.URL.indexOf('/public'), document.URL.lastIndexOf('/'));
                    if(prev == ''){
                        var link = document.URL.substring(0, document.URL.lastIndexOf('/'));
                        window.location.href = link;
                    }
                    else{
                        this.updateToNewFolder(prev);
                        window.history.pushState(null, null, document.URL.substring(0, document.URL.lastIndexOf('/')));
                    }
                }}>
                    Back
                </button>

                {this.state.list.map(items => {
                    if(items.isDict){
                        return <Link className="itemFolder" key={this.state.server + items.name} to={items.name} onClick={()=>this.updateToNewFolder(items.name)}>{'Folder: ' + items.name.substr(items.name.lastIndexOf('/')+1)}</Link>;
                    }
                    else{
                        return <div className="itemFiles" key={this.state.server + items.name} onClick={()=>{window.open(this.state.server + items.name, '_blank')}}>{'Files: ' + items.name.substr(items.name.lastIndexOf('/')+1)}</div>;
                    }
                    
                })}
            </div>
        );
    }
}

export default Folder;
