import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './music.css';
import Album from './music_album';
import MusicPlayer from './musicPlayer';

class Music extends Component {
    constructor(props) {
        super(props);
        this.audioInstance = null;
        this.state = { 
            listOfalbum : [],
            listOfSong: [],
            currentAlbum : null,
            audioTitle : "",
            audioList : [],
            songList : [],
            actionMessage : "",
            actionFun : ()=>{},
            refershList : false
         };
         this.getListOfAlbum = this.getListOfAlbum.bind(this);
         this.getListOfSong = this.getListOfSong.bind(this);
         this.uploadSong = this.uploadSong.bind(this);
         this.getSongUrl = this.getSongUrl.bind(this);
         this.deleteSong = this.deleteSong.bind(this);
    }

    componentDidMount(){
        axios.defaults.headers.common['Authorization'] = 'Token '+localStorage.getItem('token');
        this.getListOfAlbum();
    }

    getListOfAlbum(){
        axios.get(this.props.server+'/music/getListOfAlbum')
        .then(res=>{
            this.setState({listOfalbum : res.data});
        });
    }

    getListOfSong(album_id){
        axios.get(this.props.server + "/music/getListOfSong?album_id=" + album_id)
        .then(res =>{
            if(res.data.success){
                let newList = res.data.list.map(data =>{
                    data['src'] = ()=>this.getSongUrl(album_id,data.id);
                    return data;
                });
                this.setState({listOfSong: res.data.list, currentAlbum: album_id, songList: res.data.list});
                this.audioInstance.updateListOfSound(newList, album_id);
            }
            else{
                console.log(res.data.message);
            }
        });
    }

    async getSongUrl(alblum_id, song_id){
        let response = await axios({
            url: this.props.server + '/music/getSong?album_id=' + alblum_id +'&song_id=' +song_id,
            method: 'GET',
            responseType: 'blob', // important
        });
        const url = window.URL.createObjectURL(new Blob([response.data] , {type: response.headers["content-type"]}));
        return {'url': url, 'type': response.headers["content-type"]};
    }


    uploadSong(data){
        var formData = new FormData();
        formData.append("song_title", data.song_title == "" ? (data.audio_file ? data.audio_file.name : "" ) : data.song_title);
        formData.append("youtube_link", data.youtube_link);
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

    deleteSong(data){
        axios({
            url: this.props.server+'/music/deleteSong?song_id='+data.id +'&album_id=' + this.state.currentAlbum,
            method: 'GET'
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
                        return <div className="music_album_items" key={data.id+data.album_title+Math.random(0,10000)} onClick={()=>this.getListOfSong(data.id)}><Album album_data={data}/></div>
                    })}
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Upload Song
                </button>

                <MusicPlayer 
                    playType="shuffle"
                    server={this.props.server}
                    getAudioInstance={instance=>this.audioInstance=instance}
                />

                <div>
                    
                    <ul className="list-group">
                        {
                            this.state.listOfSong.map(
                                data => 
                                <li key={data+Math.random()+''+Math.random()}>
                                    <div className="input-group mb-1">
                                        <div key={data + Math.random()} className="form-control list-group-item list-group-item-action" onClick={()=>this.audioInstance.playTargetSong(data)}>
                                            Song title: {data.song_title}
                                        </div>
                                        <div className="input-group-append">
                                            <button 
                                                className="btn btn-secondary songDeleteButton" 
                                                type="button" 
                                                data-toggle="modal"  
                                                data-target="#confirmMessage"
                                                onClick={
                                                    ()=>{
                                                        this.setState({
                                                            actionMessage : "\nDelete Song: " + data.song_title ,
                                                            actionFun : ()=>{this.deleteSong(data)}
                                                        });
                                                    }
                                                }
                                            >Delete</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>

                
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="upload_song_form">
                                <div className="form-group">
                                    <label htmlFor="form_song_title">Song title</label>
                                    <input type="text" className="form-control" id="form_song_title" aria-describedby="songHelper"/>
                                    <small id="songHelper" className="form-text text-muted">Song Title is not relate to your filename.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_youtube_link">Youtube Link</label>
                                    <input type="text" className="form-control" id="form_youtube_link" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="form_audio_file">Audio_file</label>
                                    <input type="file" className="form-control" id="form_audio_file" required/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{
                                this.uploadSong({
                                    'song_title': document.getElementById('form_song_title').value,
                                    'youtube_link': document.getElementById('form_youtube_link').value,
                                    'audio_file': document.getElementById('form_audio_file').files[0]
                            });
                            }}>Upload</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="modal fade" id="confirmMessage" tabIndex="-1" role="dialog" aria-labelledby="confirmMessageLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="confirmMessageLabel">Confirm Page</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Please Confirm your Action! <br/>
                            {this.state.actionMessage}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{
                                this.state.actionFun()
                            }}>Confirm</button>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Music;