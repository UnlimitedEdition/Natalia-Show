import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <Logo size="large" />
        <h2>{t('heroSubtitle')}</h2>
        <button className="btn">{t('watchLatest')}</button>
      </div>
    </section>
  );
};

export default Hero;