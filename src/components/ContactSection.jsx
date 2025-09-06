import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Poruka poslata! Hvala na vašem interesovanju.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>{t('contactTitle')}</h2>
        <p>{t('contactDesc')}</p>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t('yourName')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div>
              <label htmlFor="email">{t('email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div>
              <label htmlFor="message">{t('message')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="btn">{t('sendMessage')}</button>
          </form>
          
          <div className="contact-info">
            <h3>{t('directContact')}</h3>
            <p>Email: <a href="mailto:kontakt@podcaststudio.rs">{t('emailContact')}</a></p>
            <p>Telefon: {t('phone')}</p>
            
            <h3>{t('followUs')}</h3>
            <div className="social-links">
              <p>YouTube: @PodcastStudio</p>
              <p>Instagram: @podcast_studio</p>
              <p>TikTok: @podcast_studio</p>
            </div>
            
            <p>{t('subscribe')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;