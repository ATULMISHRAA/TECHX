import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ServicesDropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

    const [previousLocation, setPreviousLocation] = useState('');
    useEffect(() => {
        if (previousLocation !== location.pathname) {
          setIsOpen(false);
        }
        setPreviousLocation(location.pathname);
      }, [location, previousLocation]);
      
      const handleCloseLinks = () => {
        setLinksOpen(false);
        props.dataAlert(linksOpen);
    };
  return (
    <div className={`link has-dropdown-menu ${isOpen ? 'open-dropdown-menu' : ''}`}>
      <a href="#" onClick={toggleDropdown}>Services</a>
      <ul className={`dropdown-menu list-unstyled ${isOpen ? 'open' : ''}`}>
      <li><Link to='/domains' className="dm-link" onClick={handleCloseLinks}>Domains</Link></li>
      <li><Link to='/WebHosting' className="dm-link" onClick={handleCloseLinks}>Hosting</Link></li>
      <li><Link to='/Website' className="dm-link" onClick={handleCloseLinks}>Website</Link></li>
      <li><Link to='/cyber-security' className="dm-link" onClick={handleCloseLinks}>Cyber Security</Link></li>
      <li><Link to='/DatabaseService' className="dm-link" onClick={handleCloseLinks}>Database Service</Link></li>
      <li><Link to='/CloudService' className="dm-link" onClick={handleCloseLinks}>Cloud Service</Link></li>
      <li><Link to='/MobileApp' className="dm-link" onClick={handleCloseLinks}>Mobile App</Link></li>
      <li><Link to='/DegitalMarketing' className="dm-link" onClick={handleCloseLinks}>Digital Marketing</Link></li>
        
        <li><Link to='/UiDesigning' className="dm-link" onClick={handleCloseLinks}>UI/UX Designing</Link></li>
        <li><Link to='/ArtificialIntelligence' className="dm-link" onClick={handleCloseLinks}>Artificial Intelligence</Link></li>
        <li><Link to='/Itmanagement' className="dm-link" onClick={handleCloseLinks}>IT Mgmt & Consultancy</Link></li>
        <li><Link to='/Itmanagement1' className="dm-link" onClick={handleCloseLinks}>IT Mgmt & Consultancy1</Link></li>
        <li><Link to='/ItinfraMgmt' className="dm-link" onClick={handleCloseLinks}>IT Infra Mgmt-group3</Link></li>
        <li><Link to='/ItinfraMgmt1' className="dm-link" onClick={handleCloseLinks}>IT Infra Mgmt-group4</Link></li>
        <li><Link to='/Itmanagement2' className="dm-link" onClick={handleCloseLinks}>IT Mgmt & Consultancy2</Link></li>
        <li><Link to='/Itmanagement3' className="dm-link" onClick={handleCloseLinks}>IT Mgmt & Consultancy3</Link></li>
        <li><Link to='/DataAnalytics' className="dm-link" onClick={handleCloseLinks}>Data Analytics</Link></li>


      </ul>
    </div>
  );
};

export default ServicesDropdown;