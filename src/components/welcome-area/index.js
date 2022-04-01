import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

import './style.css';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="welcome-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>Welcome to our big day!</h2>
              <div className="btn">
                <AnchorLink href="#event">{t('WHEN_WHERE')}</AnchorLink>
              </div>
              {/*<div className="btn">*/}
              {/*  <AnchorLink href="#rsvp">{t('RSVP')}</AnchorLink>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
