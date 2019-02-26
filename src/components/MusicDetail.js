import React from 'react';

const MusicDetail = (props) => {
  if(!props.song){
    return <p>select music</p>
  }

  return(
    <div>
      <h3>Name: {props.song['im:name'].label}</h3>
      <h4>Artist: {props.song['im:artist'].label}</h4>
      <h4>Release date: {props.song['im:releaseDate'].attributes.label}</h4>
      <h4>Price: {props.song['im:price'].label}</h4>
      <img src={props.song['im:image'][2].label}/>
      <audio controls src={props.song.link[1].attributes.href}></audio>
    </div>
  )

}

export default MusicDetail
