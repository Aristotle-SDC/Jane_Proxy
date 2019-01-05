import React, { Component } from 'react';

class SoundStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      shared: false
    };
  }

  handleClick(event, stateProp) {
    if (this.state.stateProp === false) {
      event.target.innerHTML++;
      this.setState({ stateProp: true });
    } else {
      event.target.innerHTML--;
      this.setState({ stateProp: false });
    }

  }

  render() {
    return (
      <div>
        <span style={{ margin: 2 }}> {this.props.stats[0]} </span>
        <span style={{ margin: 2 }}> <button style={{ background: 'none', border: 'none' }} onClick={(e) => this.handleClick(e, 'liked')}>{this.props.stats[1]} </button></span>
        <span style={{ margin: 2 }}> <button style={{ background: 'none', border: 'none' }} onClick={(e) => this.handleClick(e, 'shared')}>{this.props.stats[2]}</button></span>
        <span style={{ margin: 2 }}>{this.props.stats[3]}</span>
      </div >
    )
  }

}
export default SoundStats; 