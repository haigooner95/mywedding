import React from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-area">
      <div className="container">
        <div className="footer-content">
          <div className="content-sub">
            <h2>{t('THANK_YOU')}</h2>
            <span>{t('FOR_BEING_WITH_US')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
