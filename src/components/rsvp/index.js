import React from 'react';
import { useTranslation } from 'react-i18next';

// import { rsvpFormUrl } from '../../config';
import './style.css';

const Rsvp = () => {
  const { t } = useTranslation();

  return (
    <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <div className="rsvp-wrap">
              <div className="col-12">
                <div className="section-title section-title4 text-center">
                  <h2>{t('BE_OUR_GUEST')}</h2>
                  {/*<p className="note">{t('BE_OUR_GUEST_NOTE')}</p>*/}
                </div>
              </div>
              {/*<div className="contact-form form-style">*/}
              {/*  <div className="col-12 text-center">*/}
              {/*    <a*/}
              {/*      className="rsvp-form-url"*/}
              {/*      href={rsvpFormUrl}*/}
              {/*      target="_blank"*/}
              {/*      rel="noreferrer noopener"*/}
              {/*    >*/}
              {/*      {t('BE_OUR_GUEST_FORM_TITLE')}*/}
              {/*    </a>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col-12">
                <div className="section-title text-center thank-you-message">
                  <h2>{t('THANK_YOU')}</h2>
                  <span style={{ fontSize: '24px' }}>💕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
