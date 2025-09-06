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

    // Only apply scroll effect on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header style={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: 'rgba(44, 62, 80, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 999,
      transition: 'transform 0.3s ease-in-out',
      transform: (window.innerWidth > 768 || headerVisible) ? 'translateY(0)' : 'translateY(-100%)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px 0'
        }}>
          {/* Show site title on mobile when menu is closed */}
          <div style={{ 
            color: 'white',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            display: window.innerWidth <= 768 && !menuOpen ? 'block' : 'none',
            fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
          }}>
            Natali Show
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                      fontSize: '0.9rem',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
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
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
            >
              {language === 'sr' ? 'DE' : 'SR'}
            </button>
          </div>
          
          {/* Hamburger menu for mobile */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center'
          }}>
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
                padding: '8px',
                marginLeft: '10px',
                borderRadius: '4px',
                transition: 'background-color 0.3s'
              }}
              className="hamburger-menu"
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s',
                borderRadius: '2px'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s',
                borderRadius: '2px'
              }}></span>
              <span style={{
                width: '25px',
                height: '3px',
                background: 'white',
                margin: '3px 0',
                transition: '0.3s',
                borderRadius: '2px'
              }}></span>
            </button>
          </div>
        </div>
        
        {/* Mobile menu - shows all navigation when open */}
        {menuOpen && window.innerWidth <= 768 && (
          <nav style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
            padding: '20px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease-out'
          }}>
            {/* Show site title and subtitle in mobile menu */}
            <div style={{ 
              color: 'white',
              marginBottom: '20px',
              paddingBottom: '15px',
              borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h1 style={{ 
                margin: '0', 
                fontSize: '1.8rem',
                color: 'white',
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                fontWeight: '700'
              }}>Natali Show</h1>
              <p style={{ 
                margin: '8px 0 0 0', 
                fontSize: '0.9rem', 
                opacity: '0.9',
                color: 'white'
              }}>Profesionalni Podcasti & Video Izveštaji</p>
            </div>
            
            <ul style={{ 
              display: 'flex',
              flexDirection: 'column',
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
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
                    fontSize: '1.1rem',
                    display: 'block',
                    padding: '12px 15px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
                >
                  {t('contact')}
                </a>
              </li>
              {/* Language toggle in mobile menu */}
              <li>
                <button 
                  className="language-toggle" 
                  onClick={() => { toggleLanguage(); setMenuOpen(false); }} 
                  style={{ 
                    padding: '0.7rem 1.2rem',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    width: '100%',
                    marginTop: '20px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  {language === 'sr' ? 'DE' : 'SR'}
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hamburger-menu {
            display: flex !important;
          }
          
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;