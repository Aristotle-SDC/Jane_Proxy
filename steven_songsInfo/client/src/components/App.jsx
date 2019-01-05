import React from 'react';
import SongsInfo from './SongsInfo.jsx';
import SongsDesc from './SongsDesc.jsx';
import Artist from './Artist.jsx';
import axios from 'axios';

// const styles = {
//   app: { backgroundColor: 'orange', padding: '5' },
//   songsInfo: { backgroundColor: 'red', padding: '5' }
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songsInfo: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/songs-info')
      .then(res => {
        // console.log(res.data);
        this.setState({
          songsInfo: res.data
        });
      })
      .catch(err => {
        console.log('client GET is not working!', err);
      });
  }

  render() {
    return (
      <div>
        {this.state.songsInfo.map(songInfo => {
          return (
            <div>
              <SongsInfo
                key={songInfo.id}
                plays={songInfo.plays}
                likes={songInfo.likes}
                reposts={songInfo.reposts}
              />
              <div className="container">
                <Artist
                  artist={songInfo.artist}
                  artFol={songInfo.artist_followers}
                  artTra={songInfo.artist_tracks}
                />
                <div className="desc-padding">
                  <SongsDesc desc={songInfo.description} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
