import React, { useState } from 'react';
import LostChameleon from './assets/LostChameleon.mp3';
import Rock from './assets/TheHipsta.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
   //let audio = new Audio()
  const [state, setState] = useState({
    audioPlayer: {},
    tracks: [
      {
        name: 'Lost Chameleon - Genesis',
        file: LostChameleon,
      },
      {
        name: 'The Hipsta - Shaken Soda',
        file: Rock,
      }
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };