import React from 'react';
import { useTranslation } from 'react-i18next';

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
                  <p>{t('BE_OUR_GUEST_NOTE')}</p>
                </div>
              </div>
              <form>
                <div className="contact-form form-style">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        value={name}
                        placeholder="Your Name*"
                        id="fname"
                        name="name"
                      />
                    </div>
                    <div className="col-12  col-sm-6">
                      <input type="text" placeholder="Your Email*" id="email" name="email" />
                    </div>
                    <div className="col col-sm-6 col-12">
                      <select className="form-control" name="rsvp">
                        <option disabled value="">
                          Number Of rsvp*
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                    <div className="col col-sm-6 col-12">
                      <select className="form-control" name="events">
                        <option disabled value="">
                          I Am Attending*
                        </option>
                        <option value="1">Al events</option>
                        <option value="2">Wedding ceremony</option>
                        <option value="3">Reception party</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-12">
                      <textarea className="contact-textarea" placeholder="Message" name="notes" />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button id="submit" type="submit" className="submit">
                      Send Invitation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
