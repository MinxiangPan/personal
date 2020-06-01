import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './music.css';


/*
this.props:
Variables:
    listOfSong
    currentAlbum
    playType
    server

Methods:
    getAudioInstance(instance)

*/
class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listOfSong : [],
            currentAlbum : 0,
            musicPlayIndex : 0,
            playType : this.props.playType ? this.props.playType : "listloop",
            audioTitle : "",
        };
        this.playTargetSong = this.playTargetSong.bind(this);
        this.updateStateElement = this.updateStateElement.bind(this);
        this.playNext = this.playNext.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.shufflePlayList = this.shufflePlayList.bind(this);
    }

    componentDidMount(){
        this.props.getAudioInstance(this);
        let audio = document.getElementById('audioControl');
        audio.addEventListener('ended', ()=>this.playNext());
        // audio.addEventListener('error', ()=>this.playNext());
        window.addEventListener('keypress', (e)=>{
            if(e.keyCode == 32){
                let audio = document.getElementById('audioControl');
                if(audio.paused){
                    audio.play();
                }
                else{
                    audio.pause();
                }
            }
        });
    }

    updateStateElement(data){
        this.setState(data);
    }

    updateListOfSound(data, album_id){
        this.setState({listOfSong: data, musicPlayIndex: 0, currentAlbum: album_id});
        if(this.state.playType == "shuffle"){
            this.shufflePlayList();
        }
    }

    pauseMusic(){
        document.getElementById('audioControl').pause();
    }

    playMusic(){
        document.getElementById('audioControl').play();
    }

    shufflePlayList(){
        let shuffleList = this.state.listOfSong;
        // Fisher–Yates shuffle
        for (let i = shuffleList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffleList[i], shuffleList[j]] = [shuffleList[j], shuffleList[i]];
        }
        this.setState({listOfSong : shuffleList});
    }

    playNext(){
        let index = this.state.musicPlayIndex;
        if(this.state.listOfSong.length < index+2){
            index = -1;
        }
        switch(this.state.playType){
            case "listloop":
                this.playTargetSong(this.state.listOfSong[index+1]);
                this.setState({musicPlayIndex: index+1});
                break;
            case "shuffle":
                if(index < 0){
                    this.shufflePlayList();
                }
                this.playTargetSong(this.state.listOfSong[index+1]);
                this.setState({musicPlayIndex: index+1});
                break;
            case "random":

                break
            case "":

                break;
            default:

                break;
        }
    }

    playTargetSong(data){
        let loading = document.getElementById('loading');
        loading.style.display = 'block';
        var foundIndex = this.state.listOfSong.findIndex(ele=>ele.id==data.id);
        if(foundIndex > -1){
            this.setState({musicPlayIndex: foundIndex});
        }
        else{
            this.setState({listOfSong: this.state.listOfSong.concat([data]), musicPlayIndex: this.state.listOfSong.length-1});
        }
        data.src().then((response) => {
            loading.style.display = 'none';
            let audio = document.getElementById('audioControl');
            audio.src = response.url;
            audio.title = data.song_title;
            audio.type = response.type;
            this.setState({audioTitle: data.song_title});
            audio.play();
        }).catch(error=>this.playNext());
    }


    render() { 
        return ( 
            <div className="" id="music_player_container" style={{'display': 'block'}}>
                <div className="spinner-border text-info" role="status" id="loading" style={{'display': 'none'}}>
                    <span className="sr-only">Loading...</span>
                </div>
                <span className="musci_player_element">{this.state.audioTitle}</span>
                <audio className="musci_player_element" controls id="audioControl" src="" type="audio/mpeg"/>
                <div className="musci_player_element">
                    <div className="btn-group btn-group-toggle" >
                        <label className="btn btn-secondary active">

                        </label>
                        <label className="btn btn-secondary">
                            {/* {document.getElementById('audioControl') && document.getElementById('audioControl').paused ? <div type="radio" onClick={this.playMusic}>Play</div> : <div type="radio" onClick={this.pauseMusic}>Pause</div>} */}
                        </label>
                        <label className="btn btn-secondary">
                            <div type="radio" onClick={()=>this.playNext()}>Next</div>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MusicPlayer;