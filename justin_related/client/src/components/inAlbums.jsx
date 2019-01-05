import React, { Component } from 'react';
import SoundStats from './soundStats.jsx';

class InAlbums extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let background = this.props.currentTrack.albumArt;
    return (
      <div style={{ margin: 5 }}>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <span style={{ flex: 1 }}>Albums</span><span style={{ flex: 2 }}> View All</span>
        </div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>

          <li>
            <div style={{ display: 'flex', flexDirection: 'row', margin: 5, padding: 5 }} >
              <span style={{ flex: 1 }}>
                <div style={{ backgroundImage: `url(${background})`, width: 50, height: 50, opacity: 1 }} />
              </span>

              <div style={{ flex: 9, margin: 5, padding: 5 }}>
                <div>{this.props.currentTrack.artist}</div>
                <div><span>{this.props.currentTrack.track}</span></div>
                <SoundStats stats={[this.props.currentTrack.plays, this.props.currentTrack.likes, this.props.currentTrack.shares, this.props.currentTrack.comments]} />
              </div>

            </div>

          </li>

        </ul>
      </div>
    )

  }

}

export default InAlbums;