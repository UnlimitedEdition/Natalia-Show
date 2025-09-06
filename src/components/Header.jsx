import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Update logo visibility based on header visibility
  useEffect(() => {
    const logoElement = document.querySelector('.logo-top-left');
    if (logoElement) {
      logoElement.style.transform = headerVisible 
        ? 'translateY(0)' 
        : 'translateY(-100%)';
    }
  }, [headerVisible]);

  return (
    <header style={{ 
      transform: headerVisible ? 'translateY(0)' : 'translateY(-100%)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 0'
        }}>
          <div>
            <h1 style={{ 
              margin: '0', 
              fontSize: '1.8rem',
              color: 'white'
            }}>Natali Show</h1>
            <p style={{ 
              margin: '0', 
              fontSize: '1rem', 
              opacity: '0.9',
              color: 'white'
            }}>{t('heroTitle')}</p>
          </div>
          
          {/* Navigation links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <nav>
              <ul style={{ 
                display: 'flex', 
                listStyle: 'none',
                gap: '15px'
              }}>
                <li>
                  <a 
                    href="#hero" 
                    onClick={(e) => handleNavClick(e, 'hero')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('home')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#podcast" 
                    onClick={(e) => handleNavClick(e, 'podcast')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('podcast')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#videos" 
                    onClick={(e) => handleNavClick(e, 'videos')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('videos')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#kitchen" 
                    onClick={(e) => handleNavClick(e, 'kitchen')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('kitchen')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#stories" 
                    onClick={(e) => handleNavClick(e, 'stories')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('stories')}
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleNavClick(e, 'contact')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '1rem'
                    }}
                  >
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </nav>
            <button className="language-toggle" onClick={toggleLanguage}>
              {language === 'sr' ? 'DE' : 'SR'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;