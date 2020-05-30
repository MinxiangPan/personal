import React, { Component } from 'react';
import axios from 'axios';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        // this.updateSongList = this.props.updateSongList;
        this.album_data = this.props.album_data;
    }


    render() { 
        return ( 
            <div>
                <div className="card" style={{"width": "18rem"}}>
                    <img src="" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.album_data.album_title}</h5>
                        <p className="card-text">Artist: {this.album_data.artist}</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Album;