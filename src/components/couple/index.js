import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

import { facebookCoDau, facebookChuRe } from '../../config';
import Sectiontitle from '../section-title';
import codauImg from '../../images/couple/co-dau.JPG';
import chureImg from '../../images/couple/chu-re.JPG';
import greenHeartImg from '../../images/couple/green-heart.png';
import './style.css';

const Couple = () => {
  const { t } = useTranslation();

  return (
    <div id="couple" className="about-wrap">
      <div className="couple-area section-padding pb-70">
        <Sectiontitle section={t('HAPPY_COUPLE')} />
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-img">
                    <LazyLoad height="100%">
                      <img src={codauImg} alt="cô dâu" />
                    </LazyLoad>
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Hải Yến</h3>
                      <p>{t('BRIDE_DESCRIPTION')}</p>
                    </div>
                    <div className="social-icon">
                      <ul className="d-flex">
                        <li>
                          <a href={facebookCoDau} target="_blank" rel="noopenner noreferrer">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 couple-single">
                <div className="couple-shape">
                  <img src={greenHeartImg} alt="shape" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <LazyLoad height="100%">
                      <img src={chureImg} alt="chú rể" />
                    </LazyLoad>
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Bắc Hải</h3>
                      <p>{t('GROOM_DESCRIPTION')}</p>
                    </div>
                    <div className="social-icon">
                      <ul className="d-flex">
                        <li>
                          <a href={facebookChuRe} target="_blank" rel="noopenner noreferrer">
                            <span className="fa fa-facebook"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
