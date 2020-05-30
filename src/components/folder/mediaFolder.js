import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './folder.css';

class MediaFolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : [],
            server : this.props.server,
            userID : null,
            username : null,
            email : null,
            audioUrl : null,
            audioTitle : null
        };
        this.updatebasedonCurrentURL = this.updatebasedonCurrentURL.bind(this);
        this.updateToNewFolder = this.updateToNewFolder.bind(this);
        this.ignoreStatic = this.ignoreStatic.bind(this);
        this.testAudio = this.testAudio.bind(this);
    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = 'Token '+localStorage.getItem('token');
        this.getUserInfo();
        window.addEventListener('popstate', this.updatebasedonCurrentURL);
    }

    getUserInfo(){
        axios.get(this.state.server+'/auth/user').then(res =>{
            this.setState({userID: res.data.id, username: res.data.username, email: res.data.email});
            if(document.URL.indexOf(this.props.target+ '/' + res.data.username) > 0){
                this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target))+'/');
            }
            else{
                this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target))+'/'+res.data.username+'/');
            }
        });
    }

    

    testThre(name){
        axios({
            url: this.state.server + name, //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
             const url = window.URL.createObjectURL(new Blob([response.data] , {type: response.headers["content-type"]}));
             window.open(url);
          });
    }

    updatebasedonCurrentURL(e){
        this.updateToNewFolder(document.URL.substr(document.URL.indexOf(this.props.target)));
    }
    

    updateToNewFolder = name => {
        axios.get(this.state.server + name)
        .then(res => {
            if(!res.data.hasOwnProperty("errno")){
                console.log(res.data);
                var ret = res.data;
                ret.sort((a,b)=>{return a.isDict == b.isDict ? 0 : a.isDict ? -1 : 1;});
                this.setState({list: ret});
            }
        })
        .catch(err => {
            console.log(err);
        });
        
    }

    ignoreStatic(name) {
        return name.substr(name.indexOf(this.props.target));
    }


    testAudio(name){
        let loading = document.getElementById('loading');
        loading.style.display = 'block';
        axios({
            url: this.state.server + name, //your url
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            loading.style.display = 'none';
             const url = window.URL.createObjectURL(new Blob([response.data] , {type: response.headers["content-type"]}));
             let audio = document.getElementById('audioControl');
             audio.src = url;
             audio.title = name;
             audio.type = response.headers["content-type"];
             this.setState({audioUrl : url, audioTitle: name.substr(name.lastIndexOf('/')+1)});
             audio.play();
          });
    }


    render() {
        return (
            <div>
                <button className="btn btn-secondary" onClick={()=>{
                    var prev = document.URL.substring(document.URL.indexOf(this.props.target), document.URL.lastIndexOf('/'));
                    if(prev == ''){
                        var link = document.URL.substring(0, document.URL.lastIndexOf('/'));
                        window.location.href = link;
                    }
                    else{
                        this.updateToNewFolder(prev+'/');
                        window.history.pushState(null, null, document.URL.substring(0, document.URL.lastIndexOf('/')));
                    }
                }}>
                    Back
                </button>
                
                <div className="" style={{'display': 'block'}}>
                    <div class="spinner-border text-info" role="status" id="loading" style={{'display': 'none'}}>
                        <span class="sr-only">Loading...</span>
                    </div>
                    <span style={{'display': 'block'}}>{this.state.audioTitle}</span>
                    <audio controls="control" id="audioControl" src={this.state.audio} />
                </div>
                
                    

                {this.state.list.map(items => {
                    if(items.isDict){
                        return <Link className="itemFolder" key={this.state.server + items.name} to={'/folder'+ this.ignoreStatic(items.name)} onClick={()=>this.updateToNewFolder(this.ignoreStatic(items.name))}>{'Folder: ' + items.name.substr(items.name.lastIndexOf('/')+1)}</Link>;
                    }
                    else{
                        return <div className="itemFiles" key={this.state.server + items.name} onClick={()=>{this.testThre(items.name)}}>{'Files: ' + items.name.substr(items.name.lastIndexOf('/')+1)}</div>;
                    }
                })}
            </div>
        );
    }
}

export default MediaFolder;
