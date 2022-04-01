import React from 'react';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

import { anHoiLocation } from '../../config';
import Sectiontitle from '../section-title';
import story1 from '../../images/events/1.jpg';
// import story2 from '../../images/events/2.jpg';

import './style.css';

const Location = () => {
  const { t } = useTranslation();

  return (
    <div id="event" className="service-area section-padding">
      <div className="container">
        <Sectiontitle section={t('WHEN_WHERE')} />
        <div className="service-area-menu">
          <div className="Ceremony-wrap">
            <div className="row">
              <div className="col-lg-5">
                <div className="ceromony-img">
                  <LazyLoad height="100%">
                    <img src={story1} alt="Lễ vu quy" />
                  </LazyLoad>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ceromony-content">
                  <h3>Lễ thành hôn</h3>
                  <span className="time">15 giờ chủ nhật, ngày 10 tháng 4 năm 2022</span>
                  <span className="location">
                    Lạc Thổ Nam, thị trấn Hồ, huyện Thuận Thành, Bắc Ninh
                  </span>
                  <a
                    className="locationMap"
                    href={anHoiLocation}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Xem địa điểm trên Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="Ceremony-wrap">*/}
        {/*  <div className="row">*/}
        {/*    <div className="col-lg-7">*/}
        {/*      <div className="ceromony-content ceromony-content2">*/}
        {/*        <h3>Tiệc cưới</h3>*/}
        {/*        <span className="time">11h trưa Chủ nhật, ngày 11 tháng 4 năm 2021</span>*/}
        {/*        <span className="location">*/}
        {/*          Cung Eden, trung tâm tiệc cưới Cát Bi Plaza, số 1 Lê Hồng Phong, quận Ngô Quyền,*/}
        {/*          thành phố Hải Phòng*/}
        {/*        </span>*/}
        {/*        <a*/}
        {/*          className="locationMap"*/}
        {/*          href={damCuoiLocation}*/}
        {/*          target="_blank"*/}
        {/*          rel="noreferrer noopener"*/}
        {/*        >*/}
        {/*          Xem địa điểm trên Google Maps*/}
        {/*        </a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-lg-5">*/}
        {/*      <div className="ceromony-img">*/}
        {/*        <LazyLoad height="100%">*/}
        {/*          <img src={story2} alt="Tiệc cưới" />*/}
        {/*        </LazyLoad>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
export default Location;
