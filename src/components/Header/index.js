import React from 'react';

import MusicButton from '../MusicButton';
import './style.css';

const Header = () => {
  return (
    <div className="Header_root">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <MusicButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
