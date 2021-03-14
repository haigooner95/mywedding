import React, { Fragment, useEffect } from 'react';
import useSound from 'use-sound';

import './style.css';
import music from '../../audio/beautifulInWhite.mp3';
import playButton from '../../images/music-button/play.png';
import pauseButton from '../../images/music-button/pause.png';

const MusicButton = () => {
  const [play, { pause, isPlaying }] = useSound(music);

  const handleClick = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      play();
    }, 1000);
  }, [play]);

  return (
    <Fragment>
      <button className="music-btn" onClick={handleClick}>
        <span>{isPlaying ? <img src={pauseButton} /> : <img src={playButton} />}</span>
        <span>Music</span>
      </button>
      <audio href="audio_tag" loop src={music} type="audio/mpeg" controls></audio>
    </Fragment>
  );
};

export default MusicButton;
