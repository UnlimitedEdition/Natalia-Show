import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VideoSection = () => {
  const { t } = useLanguage();
  
  const videos = [
    {
      title: "Đurđevdan 2024",
      description: "Najveće romsko slavlje u Nemačkoj sa preko 2000 učesnika",
      views: "25,000",
      duration: "2h 15min"
    },
    {
      title: "Svadba Veka",
      description: "Tradicionalna romska svadba koja je okupila tri generacije",
      views: "18,500",
      duration: "1h 45min"
    },
    {
      title: "Festival Kulture",
      description: "Međunarodna manifestacija romske kulture i umetnosti",
      views: "31,200",
      duration: "3h 30min"
    }
  ];

  const handleStoriesNav = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('stories');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="video-section" id="videos">
      <div className="container">
        <h2>{t('videoReports')}</h2>
        <p>{t('celebrations')} - {t('celebrationsDesc')}</p>
        
        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="card" key={index}>
              <h4>{video.title}</h4>
              <p>{video.description}</p>
              <p><strong>{video.views}</strong> | {video.duration}</p>
            </div>
          ))}
        </div>
        
        <button className="btn" onClick={handleStoriesNav}>{t('allCelebrations')}</button>
      </div>
    </section>
  );
};

export default VideoSection;