import React from 'react';
import { useTranslation } from 'react-i18next';

import strory1 from '../../images/story/1.jpg';
import strory2 from '../../images/story/2.jpg';
import strory3 from '../../images/story/3.jpg';
import strory4 from '../../images/story/4.jpg';
import './style.css';

const Story = () => {
  const { t } = useTranslation();

  return (
    <div id="story" className="story-area section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>{t('OUR_STORY')}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              <div className="story-top"></div>
              <div className="content-wrapper">
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory1} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>{t('FIRST_TIME_WE_MET')}</h2>
                    <span className="date">{t('FIRST_TIME_WE_MET_DATE')}</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some,
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_FIRST_DATE')}</h2>
                    <span className="date">{t('OUR_FIRST_DATE_DATE')}</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some,
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory3} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_MARRIAGE_PROPOSAL')}</h2>
                    <span className="date">{t('OUR_MARRIAGE_PROPOSAL_DATE')}</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some,
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory4} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_ENGAGEMENT')}</h2>
                    <span className="date">{t('OUR_ENGAGEMENT_DATE')}</span>
                    <p>
                      There are many variations of passages of Lorem Ipsum available, but the
                      majority have suffered alteration in some,
                    </p>
                  </div>
                </div>
              </div>
              <div className="story-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
