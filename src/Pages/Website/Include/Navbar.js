/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import ServicesDropdown from "../../../Components/ServicesDropdown";
import SideBox from "../../../Components/SideBox";
import LanguageSelector from "./LanguageSelector";
import NoticeBar from "./NoticeBar";

const Navbar = (props) => {
    var history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleSideBoxToggle = () => {
        setIsOpen(!isOpen);
    };
    let activePage = window.location.href.split("/")[3];
    switch (activePage) {
        case "":
            activePage = 'home';
            break;

        default:
            // activePage = 'home';
            break;
    }
    // useEffect(() => {
    //     console.log("tets");
    //     setActiveFilter(activePage);
    // }, [activePage]);

    const [activeFilter, setActiveFilter] = useState(activePage);

    const handleMenuClick = (filter) => {
        setActiveFilter(filter);
        
    };

    const [linksOpen, setLinksOpen] = useState(false);
    const [dataGet, setDataGet] = useState("");
    const handleOpenLinks = () => {
        setLinksOpen(true);
    };

    const handleCloseLinks = () => {
        setLinksOpen(false);
    };
    // const location = useLocation();

    const [previousLocation, setPreviousLocation] = useState('');
    useEffect(() => {
        if (previousLocation !== location.pathname) {
          setLinksOpen(false);
        }
        setPreviousLocation(location.pathname);
      }, [location, previousLocation]);
      const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;
  function parentAlert(data) {
    setLinksOpen(data);
  }
  
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="theme-navbar" id="theme-navbar">
                <NoticeBar />
                <div className="container-fluid">
                    {/* <!-- nav-top --> */}
                    <div className="nav-top d-flex align-items-center">
                        {/* <!-- menu-icon --> */}
                        <div className="menu-icon" id="open-links-btn"  onClick={handleOpenLinks}>
                            <img 
                            // src="/assets/images/templates/navbar/hamburger.png"
                            src={baseUrl+"/templates/navbar/hamburger.png"}
                            className="menu-icon img-fluid" alt="TechX" />
                        </div>
                        {/* <!-- brand --> */}
                        
                        {/* <!-- options --> */}
                        {/* <div className="options d-md-flex d-none align-items-center justify-content-end ml-auto">
                            
                            <a href="#" className="c-link">
                                <img src="/assets/images/templates/navbar/gear.png" className="icon" alt="icon" />
                                <span className="text">Shared Control Panel</span>
                            </a>
                            
                            <a href="#" className="c-link">
                                <img src="/assets/images/templates/navbar/network.png" className="icon" alt="icon" />
                                <span className="text">VPS Control Panel</span>
                            </a>
                            <LanguageSelector />
                        </div> */}
                        {/* <!-- second-options --> */}
                        <div className="second-options d-md-none d-flex align-content-center justify-content-end ml-auto">
                            {/* <!-- o-link --> */}
                            <a href="kb.html" className="o-link">
                                {/* <img 
                                
                                src={baseUrl+"/templates/navbar/question-mark.png"}
                                 className="icon" alt="Icon" /> */}
                            </a>
                            {/* <!-- o-link --> */}
                            <div className="o-link user-link" id="user-menu-btn">
                                {/* <img 
                                
                                src={baseUrl+"/templates/navbar/profile.png"}
                                className="icon" alt="Icon" /> */}
                                {/* <!-- user-dropdown-menu --> */}
                                <ul className="user-dropdown-menu list-unstyled" id="user-dropdown-menu">
                                    {/* <!-- uddm-link-parent --> */}
                                    <li className="uddm-link-parent">
                                        <div className="title-2">Registered Users</div>
                                        <p className="para-2">Have an account? Sign in now.</p>
                                        <a href="#" className="uddm-link">Sign In</a>
                                    </li>
                                    {/* <!-- uddm-link-parent --> */}
                                    <li className="uddm-link-parent">
                                        <div className="title-2">New Customer</div>
                                        <p className="para-2">New to TechX? Create an account to get started today.</p>
                                        <a href="#" className="uddm-link">Create an Account</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- o-link --> */}
                            
                        </div>
                    </div>
                    {/* <!-- nav-bottom --> */}
                    <div className="nav-bottom d-flex align-items-center justify-content-between">
                        {/* <!-- info --> */}
                        <div className="info d-flex align-items-center">
                            {/* <!-- item --> */}
                            {/* <a href="https://api.whatsapp.com/send?phone=447387788662" className="item"> */}
                                {/* <img src="/assets/images/icons/fill-font-icons/fi-sr-phone-call.svg" className="img-fluid" alt="Icon" /> */}
                                {/* <span className="btn btn-fill-primary shadow-off mr-1 mb-md-0 mb-1">Support</span> */}
                            {/* </a> */}
                            <Link to="/" className="brand d-flex align-items-center">
                            <img 
                            // src="/assets/images/templates/navbar/logo-d.png"
                            src={baseUrl+"/templates/navbar/logo-d.png"}
                            className="dt-img img-fluid" alt="TechX" />
                            <img 
                            // src="/assets/images/templates/navbar/logo-l.png"
                            src={baseUrl+"/templates/navbar/logo-l.png"} 
                            className="lt-img img-fluid" alt="TechX" />
                            </Link>
                        </div>
                        {/* <!-- links --> */}
                        <div className={`links d-xl-flex align-items-center ml-auto ${linksOpen ? 'open-links': ''}`} id="theme-navbar-links">
                            {/* <!-- close-links-btn --> */}
                            <div className="close-links-btn" id="close-links-btn" onClick={handleCloseLinks}>
                                <img
                                //  src="/assets/images/templates/navbar/close.png"
                                src={baseUrl+"/templates/navbar/close.png"} 
                                 className="img-fluid" alt="Close" />
                            </div>
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'home' ? 'active' : ''}`} onClick={() => handleMenuClick('home')}>
                            
                                <Link to="/" onClick={handleCloseLinks}>Home</Link>
                            </div>
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'about' ? 'active' : ''}`} onClick={() => handleMenuClick('about')}>
                                <Link to="/about" onClick={handleCloseLinks}>About Us</Link>
                            </div>
                            {/* <!-- link --> */}
                            <ServicesDropdown dataAlert={parentAlert}/>
                            {/* <!-- link --> */}
                            {/* <div className={`link ${activeFilter === 'shared-hosting' ? 'active' : ''}`} onClick={() => handleMenuClick('shared-hosting')}>
                                <Link to="/shared-hosting">Windows Hosting</Link>
                            </div> */}
                            {/* <!-- link --> */}
                            {/* <div className={`link ${activeFilter === 'dedicated-server' ? 'active' : ''}`} onClick={() => handleMenuClick('dedicated-server')}>
                                <Link to="/dedicated-server">Windows VPS Hosting</Link>
                            </div> */}
                            <div className={`link ${activeFilter === 'support' ? 'active' : ''}`} onClick={() => handleMenuClick('support')}>
                                <Link to="/support" onClick={handleCloseLinks}>Support</Link>
                            </div>
                            {/* <!-- link --> */}
                            {/* <!-- link --> */}
                            <div className={`link ${activeFilter === 'contact' ? 'active' : ''}`} onClick={() => handleMenuClick('contact')}>
                                <Link to="/contact" onClick={handleCloseLinks}>Contact</Link>
                            </div>
                            {/* <!-- indicator --> */}
                            <span className="indicator"></span>
                        </div>
                        {/* <!-- side-box-btn --> */}
                        {/* <div className="side-box-btn" id="side-box-btn" onClick={handleSideBoxToggle}>
                            <span className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>Products
                        </div> */}
                        <div className="buttons">
                                {/* <a href="" className="btn btn-fill-primary btn-sm btn-rounded shadow-off text-uppercase mr--sm">Free Trial</a> */}
                                <a href="https://sso.secureserver.net/?plid=589497&prog_id=589497&realm=idp&path=%2Fproducts&app=account" target="_blank" className="btn btn-outline-dark btn-sm btn-rounded shadow-off text-uppercase">Login</a>
                            </div>
                    </div>
                    {/* <!-- side-box --> */}
                    {isOpen && <SideBox handleSideBoxToggle={handleSideBoxToggle} />}
                </div>
            </nav>
        </>
    );
};

export default withRouter(Navbar);
