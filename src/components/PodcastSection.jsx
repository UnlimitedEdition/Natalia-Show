import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PodcastSection = () => {
  const { t } = useLanguage();
  
  const latestEpisode = {
    title: "Dijaspora u Nemačkoj: Priče o Integraciji i Tradiciji",
    description: "U ovoj epizodi razgovaramo sa uspešnim predstavnicima romske zajednice iz Nemačke o izazovima integracije, očuvanju kulturnog identiteta i mostovima koje grade između svoje nove domovine i Balkana.",
    duration: "45 min",
    views: "12,453 pregleda"
  };

  const handleVideoNav = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('videos');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="podcast-section" id="podcast">
      <div className="container">
        <h2>{t('reports')}</h2>
        <p>{t('reportsDesc')}</p>
        
        <h3>{t('latestEpisode')}</h3>
        <div className="card">
          <h4>{latestEpisode.title}</h4>
          <p>{latestEpisode.description}</p>
          <p><strong>{latestEpisode.duration}</strong> | {latestEpisode.views}</p>
          <button className="btn" onClick={handleVideoNav}>{t('allEpisodes')}</button>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;