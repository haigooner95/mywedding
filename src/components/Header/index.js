import React from 'react';

import MusicButton from '../MusicButton';
import './style.css';

const Header = () => {
  return (
    <div className="Header_root">
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-10"></div>
            <div className="col-lg-9">
              <div className="header-menu d-lg-block d-none">
                <MusicButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
