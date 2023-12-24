import React, { useRef, useEffect } from 'react';

const LanguageSelector = () => {
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        langRef.current.classList.remove('open');
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [langRef]);

  const handleLangClick = () => {
    langRef.current.classList.toggle('open');
  };

  return (
    <div className="lang" id="lang" ref={langRef}>
      <div className="current" onClick={handleLangClick}>
        EN
        <img src="/assets/images/icons/outline-font-icons/fi-rr-angle-small-down.svg" className="img-fluid" alt="Icon"/>
      </div>
      <div className="lang-menu" id="lang-menu">
        <a href="#" className="lang-item active">English</a>
        <a href="#" className="lang-item">Italian</a>
        <a href="#" className="lang-item">Arabic</a>
        <a href="#" className="lang-item">French</a>
        <a href="#" className="lang-item">German</a>
        <a href="#" className="lang-item">Chinese</a>
        <a href="#" className="lang-item">English</a>
        <a href="#" className="lang-item">Italian</a>
        <a href="#" className="lang-item">Arabic</a>
        <a href="#" className="lang-item">French</a>
        <a href="#" className="lang-item">German</a>
        <a href="#" className="lang-item">Chinese</a>
        <a href="#" className="lang-item">English</a>
        <a href="#" className="lang-item">Italian</a>
        <a href="#" className="lang-item">Arabic</a>
        <a href="#" className="lang-item">French</a>
        <a href="#" className="lang-item">German</a>
        <a href="#" className="lang-item">Chinese</a>
      </div>
    </div>
  );
};

export default LanguageSelector;