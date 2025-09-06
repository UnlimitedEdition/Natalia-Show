import React, { useState } from 'react';
import ContentService from '../services/contentService';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('episodes');
  const [formData, setFormData] = useState({
    sr: { title: '', description: '' },
    de: { title: '', description: '' },
    duration: '',
    views: '',
    url: ''
  });

  const handleInputChange = (lang, field, value) => {
    setFormData({
      ...formData,
      [lang]: {
        ...formData[lang],
        [field]: value
      }
    });
  };

  const handleGeneralChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await ContentService.saveContent({ ...formData, type: activeTab });
      alert(result.message);
      // Reset form
      setFormData({
        sr: { title: '', description: '' },
        de: { title: '', description: '' },
        duration: '',
        views: '',
        url: ''
      });
    } catch (error) {
      alert('Error saving content: ' + error.message);
    }
  };

  return (
    <div className="admin-panel">
      <div className="container">
        <h2>Admin Panel</h2>
        
        <div className="tabs">
          <button 
            className={activeTab === 'episodes' ? 'btn active' : 'btn'}
            onClick={() => setActiveTab('episodes')}
          >
            Epizode
          </button>
          <button 
            className={activeTab === 'videos' ? 'btn active' : 'btn'}
            onClick={() => setActiveTab('videos')}
          >
            Video Sadržaj
          </button>
          <button 
            className={activeTab === 'stories' ? 'btn active' : 'btn'}
            onClick={() => setActiveTab('stories')}
          >
            Priče
          </button>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          <h3>Dodaj novi sadržaj ({activeTab})</h3>
          
          <div className="form-section">
            <h4>Srpski jezik</h4>
            <div>
              <label htmlFor="sr-title">Naslov (SR)</label>
              <input
                type="text"
                id="sr-title"
                value={formData.sr.title}
                onChange={(e) => handleInputChange('sr', 'title', e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="sr-description">Opis (SR)</label>
              <textarea
                id="sr-description"
                value={formData.sr.description}
                onChange={(e) => handleInputChange('sr', 'description', e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h4>Nemački jezik</h4>
            <div>
              <label htmlFor="de-title">Naslov (DE)</label>
              <input
                type="text"
                id="de-title"
                value={formData.de.title}
                onChange={(e) => handleInputChange('de', 'title', e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="de-description">Opis (DE)</label>
              <textarea
                id="de-description"
                value={formData.de.description}
                onChange={(e) => handleInputChange('de', 'description', e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h4>Opšte informacije</h4>
            <div>
              <label htmlFor="duration">Trajanje</label>
              <input
                type="text"
                id="duration"
                value={formData.duration}
                onChange={(e) => handleGeneralChange('duration', e.target.value)}
                placeholder="npr. 45 min"
              />
            </div>
            <div>
              <label htmlFor="views">Pregledi</label>
              <input
                type="text"
                id="views"
                value={formData.views}
                onChange={(e) => handleGeneralChange('views', e.target.value)}
                placeholder="npr. 12,453 pregleda"
              />
            </div>
            <div>
              <label htmlFor="url">URL</label>
              <input
                type="text"
                id="url"
                value={formData.url}
                onChange={(e) => handleGeneralChange('url', e.target.value)}
                placeholder="Link ka sadržaju"
              />
            </div>
          </div>

          <button type="submit" className="btn">Sačuvaj Sadržaj</button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;