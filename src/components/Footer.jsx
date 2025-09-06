import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy; 2025 Natali Show. {t('rights')}.</p>
        <p>{t('heroTitle')}</p>
      </div>
    </footer>
  );
};

export default Footer;