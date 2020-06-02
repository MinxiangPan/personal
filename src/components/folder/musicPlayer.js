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
            playStatus : false,
            audioControlName : 'audioControl',
            currentTime: 0,
            duration: 0,
            audioHaveControl: true
        };
        this.playTargetSong = this.playTargetSong.bind(this);
        this.updateStateElement = this.updateStateElement.bind(this);
        this.playNext = this.playNext.bind(this);
        this.pauseMusic = this.pauseMusic.bind(this);
        this.playMusic = this.playMusic.bind(this);
        this.shufflePlayList = this.shufflePlayList.bind(this);
        this.toHrMinSec = this.toHrMinSec.bind(this);
        this.getAudioTitle = this.getAudioTitle.bind(this);
        this.setState = this.setState.bind(this);
    }

    componentDidMount(){
        this.props.getAudioInstance(this);
        let audio = document.getElementById(this.state.audioControlName);
        let playhead = document.getElementById('playhead');
        let timeline = document.getElementById('timeline');
        let setState = this.setState;

        audio.addEventListener('ended', ()=>this.playNext());
        // audio.addEventListener('error', ()=>this.playNext());
        audio.addEventListener('timeupdate', ()=>{
            if(this.state.audioHaveControl){
                var playPercent = 100 * (audio.currentTime / audio.duration);
                playhead.style.marginLeft = playPercent + "%";
                this.setState({currentTime: audio.currentTime, duration: audio.duration});
            }
        });
        window.addEventListener('keypress', (e)=>{
            if(e.keyCode == 32){
                if(audio.paused){
                    this.playMusic();
                }
                else{
                    this.pauseMusic();
                }
            }
        });

        timeline.addEventListener("click", function (event) {
            moveplayhead(event);
            audio.currentTime = audio.duration * clickPercent(event);
        }, false);

        playhead.addEventListener("dragstart", function (event) {
            setState({audioHaveControl: false});

            playhead.addEventListener('drag', onMouseMove);
            playhead.addEventListener('dragend', onMouseUp);
        }, false);

        function onMouseUp(event){
            audio.currentTime = audio.duration * clickPercent(event);
            setState({audioHaveControl: true});

            playhead.removeEventListener('dragend', onMouseUp);
            playhead.removeEventListener('drag', onMouseMove);
        }

        function onMouseMove(event){
            moveplayhead(event);
        }

        
        // returns click as decimal (.77) of the total timelineWidth
        function clickPercent(event) {
            return (event.clientX - getPosition(timeline)) / timeline.offsetWidth;
        }
        
        function moveplayhead(event) {
            var newMargLeft = event.clientX - getPosition(timeline);
            newMargLeft = newMargLeft < 0 ? 0 : newMargLeft > timeline.offsetWidth ? timeline.offsetWidth : newMargLeft;
            playhead.style.marginLeft = newMargLeft + "px";
            setState({currentTime : (newMargLeft/timeline.offsetWidth)*audio.duration});
        }
        
        // getPosition
        // Returns elements left position relative to top-left of viewport
        function getPosition(el) {
            return el.getBoundingClientRect().left;
        }
    }

    updateStateElement(data){
        this.setState(data);
    }

    updateListOfSound(data, album_id){
        this.setState({listOfSong: data, musicPlayIndex: 0, currentAlbum: album_id});
        if(this.state.playType == "shuffle"){
            this.shufflePlayList();
        }
        this.playTargetSong(this.state.listOfSong[0], false);
    }

    // Types: listloop, loop, random
    updatePlayType(type){
        this.setState({playType : type});
    }

    pauseMusic(){
        document.getElementById(this.state.audioControlName).pause();
        this.setState({playStatus: false});
    }

    playMusic(){
        document.getElementById(this.state.audioControlName).play();
        this.setState({playStatus: true});
    }

    toHrMinSec(time){
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
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
        switch(this.state.playType){
            case "listloop":
                if(this.state.listOfSong.length < index+2){
                    index = -1;
                }
                break;
            case "shuffle":
                // if(index < 0){
                //     this.shufflePlayList();
                // }
                // this.playTargetSong(this.state.listOfSong[index+1]);
                // this.setState({musicPlayIndex: index+1});
                break;
            case "random":
                index = (Math.random() * this.state.listOfSong.length) << 0;
                while(this.state.listOfSong.length > 1 && index == this.state.musicPlayIndex){
                    index = (Math.random() * this.state.listOfSong.length) << 0;
                }
                index -= 1;
                break;
            case "loop":
                index -= 1;
                break;
            default:

                break;
        }
        this.playTargetSong(this.state.listOfSong[index+1], true);
    }

    playTargetSong(data, play){
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
            let audio = document.getElementById(this.state.audioControlName);
            audio.src = response.url;
            audio.title = data.song_title;
            audio.type = response.type;
            this.setState({audioTitle: data.song_title, playStatus: play});
            if(play) audio.play();
        }).catch(error=>this.playNext());
    }

    getAudioTitle(){
        return this.state.audioTitle;
    }


    render() { 
        return ( 
            <div className="container" id="music_player_container">
                <div className="row spinner-border text-info" role="status" id="loading" style={{'display': 'none'}}>
                    <span className="sr-only">Loading...</span>
                </div>
                <span className="row musci_player_element">{this.state.audioTitle}</span>
                <audio className="row musci_player_element" id={this.state.audioControlName} src="" type="audio/mpeg"/>
                <div className="row musci_player_element">
                    <div className="btn-group btn-group-toggle col-lg-8" >
                        <div className="btn btn-secondary active col-lg-0.5">
                            {
                                this.state.playType == 'listloop' ?
                                <div type="radio" onClick={()=>this.updatePlayType('random')}><i className='fas fa-redo-alt music_icon'></i></div>
                                : this.state.playType == 'random' ? 
                                <div type="radio" onClick={()=>this.updatePlayType('loop')}><i className='fas fa-random music_icon'></i></div>
                                : <div type="radio" onClick={()=>this.updatePlayType('listloop')}><i className='fas fa-sync-alt music_icon'></i></div>
                            }
                        </div>
                        <div className="btn btn-secondary col-lg-0.5">
                            <div type="radio" onClick={()=>{
                                    if(this.state.playType == 'random') this.playNext();
                                    else{
                                        let index = this.state.musicPlayIndex;
                                        index = index > 0 ? index-1 : this.state.listOfSong.length - 1
                                        this.playTargetSong(this.state.listOfSong[index], true);
                                    }
                            }}><i className='fas fa-backward music_icon'></i>
                            </div>
                        </div>
                        <div className="btn btn-secondary col-lg-0.5">
                            <div type="radio" onClick={()=>{
                                    if(this.state.playStatus) this.pauseMusic();
                                    else this.playMusic();
                            }}><i className={this.state.playStatus ? 'fas fa-pause music_icon' : 'fas fa-play music_icon'}></i>
                            </div>
                        </div>
                        <div className="btn btn-secondary col-lg-0.5">
                            <div type="radio" onClick={()=>{
                                if(this.state.playType == 'loop'){
                                    let index = this.state.musicPlayIndex;
                                    index = index < this.state.listOfSong.length - 1 ? index+1 : 0
                                    this.playTargetSong(this.state.listOfSong[index], true);
                                }else{
                                    this.playNext();
                                }
                            }}><i className='fas fa-forward music_icon'></i>
                            </div>
                        </div>
                        <div className="btn btn-secondary col col-lg-10">
                            <div className="col col-lg-3" id="displaytime" style={{'display': 'inline-block'}}>
                                {this.toHrMinSec(this.state.currentTime) + ' / ' + this.toHrMinSec(this.state.duration)}
                            </div>
                            <div className="col col-lg-8" id="timeline" >
                                <div id="playhead" draggable='true'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MusicPlayer;