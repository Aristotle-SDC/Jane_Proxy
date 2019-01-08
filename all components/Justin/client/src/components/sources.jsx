import React, { Component } from 'react';
import RelatedTracks from './relatedTracks.jsx';
import InPlaylists from './inPlaylists.jsx';
import InAlbums from './inAlbums.jsx';

class Sources extends React.Component {
  constructor(props) {
    super(props);
    }

  render() {

    return (<div style={{ display: 'flex', flexDirection: 'column', width: 300, height: 1114.13 }}>
      <RelatedTracks style={{ flex: 1 }} relatedTracks={this.props.relatedTracks}  />
      <InPlaylists style={{ flex: 1 }} plists={this.props.plists} />
      <InAlbums style={{ flex: 1 }} currentTrack={this.props.currentTrack} />
      </div>)
    }
}
export default Sources;
// https://s3-us-west-1.amazonaws.com/democrituscloud/play.png
