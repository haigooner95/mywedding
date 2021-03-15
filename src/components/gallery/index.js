import React from 'react';
import ReactFancyBox from 'react-fancybox';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';

import 'react-fancybox/lib/fancybox.css';
import Sectiontitle from '../section-title';
import './style.css';

import galleryImage1 from '../../images/gallery/1.jpg';
import galleryImage2 from '../../images/gallery/2.jpg';
import galleryImage4 from '../../images/gallery/4.jpg';
import galleryImage6 from '../../images/gallery/6.jpg';
import galleryImage7 from '../../images/gallery/7.jpg';
import galleryImage8 from '../../images/gallery/8.jpg';
import galleryImage9 from '../../images/gallery/9.jpg';
import galleryImage10 from '../../images/gallery/10.jpg';
import galleryImage11 from '../../images/gallery/11.jpg';
import galleryImage13 from '../../images/gallery/13.jpg';
import galleryImage14 from '../../images/gallery/14.jpg';
import galleryImage15 from '../../images/gallery/15.jpg';

const Gallery = () => {
  const { t } = useTranslation();
  const imgIndexes = {
    1: galleryImage1,
    2: galleryImage2,
    4: galleryImage4,
    6: galleryImage6,
    7: galleryImage7,
    8: galleryImage8,
    9: galleryImage9,
    10: galleryImage10,
    11: galleryImage11,
    13: galleryImage13,
    14: galleryImage14,
    15: galleryImage15,
  };

  return (
    <div id="gallery" className="Gallery-section section-padding pb-70">
      <Sectiontitle section={t('OUR_GALLERY')} />
      <div className="container">
        <div className="row gallery-wrapper">
          {Object.keys(imgIndexes).map((index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="gallery-img">
                  <LazyLoad height="100%">
                    <ReactFancyBox thumbnail={imgIndexes[index]} image={imgIndexes[index]} />
                  </LazyLoad>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
