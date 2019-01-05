import React from 'react';
import styled from 'styled-components';

const Following = styled.button`
  display: inline-block;
  position: relative;
  height: 26px;
  margin: 0;
  padding: 2px 11px 2px 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  background-color: #fff;
  border-color: #f50;
  cursor: pointer;
  color: #f50;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  font-family: 'Interstate', 'Lucida Grande', 'Lucida Sans Unicode',
    'Lucida Sans', Garuda, Verdana, Tahoma, sans-serif;
  font-weight: 100;
  text-align: center;
  vertical-align: baseline;
`;

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followBtnOff: true,
      follows: this.props.artFol
    };
    this.followClick = this.followClick.bind(this);
    this.followingClick = this.followingClick.bind(this);
  }

  followClick() {
    this.setState(prevState => ({
      followBtnOff: !prevState.followBtnOff,
      follows: this.state.follows + 1
    }));
  }

  followingClick() {
    this.setState(prevState => ({
      followBtnOff: !prevState.followBtnOff,
      follows: this.state.follows - 1
    }));
  }

  render() {
    return (
      <div className="desc-artist-container">
        <div className="desc-artist-flex">
          <div className="artist">{this.props.artist}</div>
          <div className="artist-info">F {this.state.follows}</div>
          <div className="artist-info">T {this.props.artTra}</div>
          <div>
            {this.state.followBtnOff ? (
              <button className="follow" onClick={this.followClick}>
                Follow
              </button>
            ) : (
              <Following onClick={this.followingClick}>Following</Following>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Artist;
