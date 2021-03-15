import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

import story1 from '../../images/story/1.jpg';
import story2 from '../../images/story/2.jpg';
import story3 from '../../images/story/3.jpg';
import story4 from '../../images/story/4.jpg';
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
                          <LazyLoad height="100%">
                            <img src={story1} alt={t('FIRST_TIME_WE_MET_DATE')} />
                          </LazyLoad>
                        </div>
                      </div>
                    </div>
                    <h2>{t('FIRST_TIME_WE_MET')}</h2>
                    <span className="date">{t('FIRST_TIME_WE_MET_DATE')}</span>
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
                          <LazyLoad height="100%">
                            <img src={story2} alt={t('OUR_FIRST_DATE_DATE')} />
                          </LazyLoad>
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_FIRST_DATE')}</h2>
                    <span className="date">{t('OUR_FIRST_DATE_DATE')}</span>
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
                          <LazyLoad height="100%">
                            <img src={story3} alt={t('OUR_MARRIAGE_PROPOSAL_DATE')} />
                          </LazyLoad>
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_MARRIAGE_PROPOSAL')}</h2>
                    <span className="date">{t('OUR_MARRIAGE_PROPOSAL_DATE')}</span>
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
                          <LazyLoad height="100%">
                            <img src={story4} alt={t('OUR_ENGAGEMENT_DATE')} />
                          </LazyLoad>
                        </div>
                      </div>
                    </div>
                    <h2>{t('OUR_ENGAGEMENT')}</h2>
                    <span className="date">{t('OUR_ENGAGEMENT_DATE')}</span>
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
