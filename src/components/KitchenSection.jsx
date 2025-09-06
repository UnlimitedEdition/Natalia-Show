import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KitchenSection = () => {
  const { t } = useLanguage();
  
  const guestTypes = [
    {
      title: t('politicians'),
      description: t('politiciansDesc')
    },
    {
      title: t('artists'),
      description: t('artistsDesc')
    },
    {
      title: t('academics'),
      description: t('academicsDesc')
    },
    {
      title: t('diaspora'),
      description: t('diasporaDesc')
    }
  ];

  return (
    <section className="kitchen-section" id="kitchen">
      <div className="container">
        <h2>{t('kitchen')}</h2>
        <p>{t('kitchenDesc')}</p>
        
        <div className="quote">
          <p>"{t('quote')}"</p>
        </div>
        
        <div className="guest-grid">
          {guestTypes.map((guest, index) => (
            <div className="card" key={index}>
              <h4>{guest.title}</h4>
              <p>{guest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenSection;