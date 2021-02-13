import React from 'react';
import './Home.css';
import TrackList from './components/player/TrackList'
import PlayerControls from './components/player/PlayerControls'
import { MusicPlayerProvider } from "./MusicPlayerContext";
class Home extends React.Component {
  render() {
    return (
      <MusicPlayerProvider>
      <div className="container Home">
        <TrackList />
        <PlayerControls />
      </div>
    </MusicPlayerProvider>
    );
  }
}

export default Home;
