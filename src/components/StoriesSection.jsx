import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const StoriesSection = () => {
  const { t } = useLanguage();
  
  const stories = [
    {
      title: t('featuredDesc'),
      description: t('featuredSub'),
      type: "München - Beograd",
      location: "Nemačka"
    },
    {
      title: "Mostovi Preko Granica",
      description: "Kako romska zajednica u Beču čuva tradicije i gradi budućnost svojoj deci",
      type: t('viewDocumentary'),
      location: "Austrija"
    },
    {
      title: "Povratak Kući",
      description: "Dokumentarni film o onima koji su se vratili i svojim iskustvom menjaju zajednicu",
      type: t('viewDocumentary'),
      location: "Srbija"
    }
  ];

  return (
    <section className="stories-section" id="stories">
      <div className="container">
        <h2>{t('featured')}</h2>
        <h3>Berlin - Novi Dom, Stara Srca</h3>
        
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div className="card" key={index}>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
              <p><strong>{story.type}</strong> | {story.location}</p>
              <button className="btn btn-secondary">{t('viewDocumentary')}</button>
            </div>
          ))}
        </div>
        
        <button className="btn">{t('allStories')}</button>
      </div>
    </section>
  );
};

export default StoriesSection;