import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './music.css';
import Album from './music_album';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID : null,
            username : null,
            email : null,
            listOfalbum : [],
            listOfSong: [],
            currentAlbum : null,
            audioTitle : ""
         };
         this.getUserInfo = this.getUserInfo.bind(this);
         this.getListOfAlbum = this.getListOfAlbum.bind(this);
         this.getListOfSong = this.getListOfSong.bind(this);
         this.playSong = this.playSong.bind(this);
         this.uploadSong = this.uploadSong.bind(this);
    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = 'Token '+localStorage.getItem('token');
        this.getUserInfo();
    }

    getUserInfo(){
        axios.get(this.props.server+'/auth/user').then(res =>{
            this.setState({userID: res.data.id, username: res.data.username, email: res.data.email});
            this.getListOfAlbum();
        });
    }

    getListOfAlbum(){
        axios.get(this.props.server+'/music/getListOfAlbum')
        .then(res=>{
            this.setState({listOfalbum : res.data});
        });
    }

    getListOfSong(alblum_id){
        axios.get(this.props.server + "/music/getListOfSong?album_id=" + alblum_id)
        .then(res =>{
            if(res.data.success){
                this.setState({listOfSong: res.data.list, currentAlbum: alblum_id});
            }
            else{
                console.log(res.data.message);
            }
        });
    }

    playSong(data){
        let loading = document.getElementById('loading');
        loading.style.display = 'block';
        axios({
            url: this.props.server + '/music/getSong',
            method: 'POST',
            data: {"album_id": this.state.currentAlbum, "song_id" : data.song_id},
            responseType: 'blob', // important
        }).then((response) => {
            loading.style.display = 'none';
            const url = window.URL.createObjectURL(new Blob([response.data] , {type: response.headers["content-type"]}));
            let audio = document.getElementById('audioControl');
            audio.src = url;
            audio.title = data.song_title;
            audio.type = response.headers["content-type"];
            this.setState({audioTitle: data.song_title});
            audio.play();
        });
    }


    uploadSong(data){
        if(data.audio_file == null){
            alert('file cannot be empty');
            return ;
        }
        var formData = new FormData();
        formData.append("song_title", data.song_title == "" ? data.audio_file.name : data.song_title);
        formData.append("audio_file", data.audio_file);
        axios({
            url: this.props.server+'/music/uploadSong?album_id=' + this.state.currentAlbum,
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data' },
            data: formData
        }).then((res) => {
            if(res.data.success){
                this.getListOfSong(this.state.currentAlbum);
            }
            else{
                alert('file upload failed! \n Message: ' + res.data.message);
            }
        });
    }

    



    render() { 
        return ( 
            <div>
                <div>
                    {this.state.listOfalbum.map(data => {
                        return <div className="music_album_items" key={data.id+data.album_title} onClick={()=>this.getListOfSong(data.id)}><Album key={data} album_data={data}/></div>
                    })}
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Upload Song
                </button>

                <div>
                    <div className="" style={{'display': 'block'}}>
                        <div class="spinner-border text-info" role="status" id="loading" style={{'display': 'none'}}>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <span style={{'display': 'block'}}>{this.state.audioTitle}</span>
                        <audio controls="control" id="audioControl" src="" />
                    </div>
                    <div className="list-group">
                        {
                            this.state.listOfSong.map(data => {
                            return <button type="button" className="list-group-item list-group-item-action" onClick={()=>this.playSong(data)}>Song title: {data.song_title}</button>
                            })
                        }
                    </div>
                </div>

                
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="upload_song_form">
                                <div class="form-group">
                                    <label for="form_song_title">Song title</label>
                                    <input type="text" class="form-control" id="form_song_title" aria-describedby="songHelper"/>
                                    <small id="songHelper" class="form-text text-muted">Song Title is not relate to your filename.</small>
                                </div>
                                <div class="form-group">
                                    <label for="form_audio_file">Audio_file</label>
                                    <input type="file" class="form-control" id="form_audio_file" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={()=>{
                                this.uploadSong({
                                    'song_title': document.getElementById('form_song_title').value,
                                    'audio_file': document.getElementById('form_audio_file').files[0]
                            });
                            }}>Upload</button>
                        </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
         );
    }
}
 
export default Music;