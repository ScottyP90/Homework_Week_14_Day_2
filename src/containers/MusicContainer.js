import React, { Component } from 'react';
import MusicSelector from '../components/MusicSelector'
import MusicDetail from '../components/MusicDetail'
import Request from '../helper/request'

class MusicContainer extends Component{
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      selectedSong: null
    }
    this.handleSelectedMusic = this.handleSelectedMusic.bind(this)
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data}));
  }

  handleSelectedMusic(index){
    console.log('index', index);
    const chosenSong = this.state.songs.feed.entry[index];
    console.log(chosenSong);
    this.setState({selectedSong: chosenSong})
  }

  render(){
    if(this.state.songs.length === 0){
      return <p>Loading Data ....</p>
    }

    return(
      <div>
        <h2>Itunes top 20</h2>
        <MusicSelector songs={this.state.songs} onSongSelected= {this.handleSelectedMusic}/>
        <MusicDetail song={this.state.selectedSong}/>
      </div>
    )
  }

}

export default MusicContainer
