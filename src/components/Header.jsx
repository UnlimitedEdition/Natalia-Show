import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu after clicking
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
          padding: '3px 0'
        }}>
          <div style={{ flex: 1 }}>
            <h1 style={{ 
              margin: '0', 
              fontSize: '1.2rem',
              color: 'white'
            }}>Natali Show</h1>
            <p style={{ 
              margin: '0', 
              fontSize: '0.65rem', 
              opacity: '0.9',
              color: 'white'
            }}>{t('heroTitle')}</p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <nav>
              <ul style={{ 
                display: 'flex', 
                listStyle: 'none',
                gap: '15px',
                margin: '0',
                padding: '0'
              }}>
                <li>
                  <a 
                    href="#hero" 
                    onClick={(e) => handleNavClick(e, 'hero')}
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
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
                      fontSize: '0.9rem'
                    }}
                  >
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </nav>
            <button 
              className="language-toggle" 
              onClick={toggleLanguage} 
              style={{ 
                padding: '0.4rem 0.8rem',
                fontSize: '0.8rem'
              }}
            >
              {language === 'sr' ? 'DE' : 'SR'}
            </button>
          </div>
          
          {/* Hamburger menu for mobile */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: 'none', // Hidden on desktop
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '5px',
                marginLeft: '10px'
              }}
              className="hamburger-menu"
            >
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s'
              }}></span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <nav style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            padding: '15px',
            boxShadow: '0 5px 10px rgba(0,0,0,0.2)',
            zIndex: 1000
          }}>
            <ul style={{ 
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              gap: '10px',
              margin: '0',
              padding: '0'
            }}>
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleNavClick(e, 'hero')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              <li>
                <a 
                  href="#podcast" 
                  onClick={(e) => handleNavClick(e, 'podcast')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              <li>
                <a 
                  href="#videos" 
                  onClick={(e) => handleNavClick(e, 'videos')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              <li>
                <a 
                  href="#kitchen" 
                  onClick={(e) => handleNavClick(e, 'kitchen')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              <li>
                <a 
                  href="#stories" 
                  onClick={(e) => handleNavClick(e, 'stories')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    display: 'block',
                    padding: '8px 0'
                  }}
                />
              </li>
              {/* Language toggle in mobile menu */}
              <li>
                <button 
                  className="language-toggle" 
                  onClick={() => { toggleLanguage(); setMenuOpen(false); }} 
                  style={{ 
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.8rem',
                    width: '100%',
                    marginTop: '10px'
                  }}
                >
                  {language === 'sr' ? 'DE' : 'SR'}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;