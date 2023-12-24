/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import Features from "../../../Components/Features";

import { AiOutlineClose } from "react-icons/ai";

const ThemeSetting = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('theme') || 'dark');
    const [isDesktopView, setIsDesktopView] = useState(false);

    const [activeFilter, setActiveFilter] = useState('general');
    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleFAQClick = (e) => {
        const questions = document.querySelectorAll('.q');

        questions.forEach(question => {
            if (question !== e.currentTarget) {
                question.classList.remove('open');
                question.querySelector('.q-b').style.display = 'none';

            }
        });
        e.currentTarget.classList.toggle('open');
        const qb = e.currentTarget.querySelector('.q-b');

        if (qb) {
            qb.style.display = qb.style.display === 'block' ? 'none' : 'block';
        }

    };



    useEffect(() => {
        const themeFromLocalStorage = localStorage.getItem('theme');
        if (themeFromLocalStorage) {
            setSelectedTheme(themeFromLocalStorage);
        }

        const desktopViewFromLocalStorage = localStorage.getItem('desktopView');
        if (desktopViewFromLocalStorage === 'true') {
            setIsDesktopView(true);
        }

    }, []);

    useEffect(() => {
       
        if(selectedTheme == "light"){
            document.body.classList.remove("dark-theme");
            document.body.classList.add('light-theme');
        }else{
            document.body.classList.remove("light-theme");
            document.body.classList.add('dark-theme');
        }

        localStorage.setItem('theme', selectedTheme);
    }, [selectedTheme]);

    useEffect(() => {
        localStorage.setItem('desktopView', isDesktopView);
    }, [isDesktopView]);

    const toggleSettings = () => {
        setIsOpen(!isOpen);
    };

    const closeSettings = () => {
        setIsOpen(false);
    };

    const handleThemeClick = (e, themeMode) => {
        
        setSelectedTheme(themeMode);
        // props.dataAlert(themeMode);
        setIsOpen(false);
        window.localStorage.setItem('themeId',themeMode);
    };

    const handleDesktopViewClick = () => {
        setIsDesktopView(!isDesktopView);
    };
    const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;

  
    return (
        <>
            {/* <!-- theme-settings-btn --> */}
            <button type="button" onClick={toggleSettings} className="theme-settings-btn" id="theme-settings-btn" data-tooltip="Theme Settings">
                <img 
                // src="/assets/images/templates/theme-settings/settings-sliders.svg"
                src={baseUrl+"/templates/theme-settings/settings-sliders.svg"}
                className="img-fluid" alt="Icon" />
            </button>

            {/* <!-- theme-settings --> */}
            <div className={`theme-settings ${isOpen ? "open" : ""}`} id="theme-settings">
                {/* <!-- title-1 --> */}
                <div className="title-1">Website Setting</div>
                {/* <!-- close-btn --> */}
                <div className="close-btn" id="theme-settings-close-btn" onClick={closeSettings}>
                    {/* <img 
                    // src="/assets/images/templates/theme-settings/close.png"
                    src={baseUrl+"/templates/theme-settings/close.png"} 
                    className="img-fluid" alt="Icon" /> */}
                    <AiOutlineClose className='close-templte-icon'/>
                </div>
                {/* <!-- section --> */}
                <div className="section">
                    {/* <!-- section-title --> */}
                    <div className="section-title">Display</div>
                    {/* <!-- themes --> */}
                    <div className="themes">
                        {/* <!-- theme-btn --> */}
                        <div className={`theme-btn light-theme ${selectedTheme === "light" ? "active-theme" : ""}`} id="light-theme-btn" onClick={(e) => handleThemeClick(e, "light")}>
                            <div className="color"></div>
                            <span className="name">Light</span>
                        </div>
                        {/* <!-- theme-btn --> */}
                        <div className={`theme-btn dark-theme ${selectedTheme === "dark" ? "active-theme" : ""}`} id="dark-theme-btn" onClick={(e) => handleThemeClick(e, "dark")}>
                            <div className="color"></div>
                            <span className="name">Dark</span>
                        </div>
                    </div>
                </div>
                {/* <!-- section --> */}
                <Features/>
                {/* <!-- section --> */}
                {/* <div className="section">
                    
                    <div className="section-title">Quick Links</div>
                    
                    <div className="q-link">
                        <a href="#">How to reset cookies?</a>
                    </div>
                    
                    <div className="q-link">
                        <a href="#">What about privacy policy?</a>
                    </div>
                    
                    <div className="q-link">
                        <a href="#">Can not reset server settings?</a>
                    </div>
                
                    <div className="q-link">
                        <a href="#">How to upgrade my current plan?</a>
                    </div>
                    
                    <div className="q-link">
                        <a href="#">What is the different between .com and .net?</a>
                    </div>
                </div> */}



        <div className="box category-general" style={{ display: `${activeFilter === 'general' ? 'block' : 'none'}` }}>
        <div className="section-title">Quick Links</div>
            <div className="box-body">
                <div className="q collapse-heading"  onClick={(e) => handleFAQClick(e)}>
                    {/* <!-- q-h --> */}
                    <div className="q-h">
                        {/* <!-- text --> */}
                        <p className="text">How to reset cookies?</p>
                    </div>
                    {/* <!-- q-b --> */}
                    <div className="q-b">
                        <p><a>Resetting cookies can be done through your web browser's settings. Cookies are small pieces of data stored on your computer by websites you visit, and they can be used for various purposes, including storing login information, tracking your browsing habits, and more.</a></p>
                    </div>
                </div>
                {/* <!-- q --> */}
                <div className="q collapse-heading"  onClick={(e) => handleFAQClick(e)}>
                    {/* <!-- q-h --> */}
                    <div className="q-h">
                        {/* <!-- text --> */}
                        <p className="text">What about privacy policy?</p>
                    </div>
                    {/* <!-- q-b --> */}
                    <div className="q-b">
                        <p>A privacy policy is a legal document that outlines how a website or online service collects, uses, stores, and protects user data. It's an essential component of any website or app that collects personal information from users, and it's often required by privacy laws and regulations in many countries.</p>
                    </div>
                </div>
                {/* <!-- q --> */}
                <div className="q collapse-heading"  onClick={(e) => handleFAQClick(e)}>
                    {/* <!-- q-h --> */}
                    <div className="q-h">
                        {/* <!-- text --> */}
                        <p className="text">Can not reset server settings?</p>
                    </div>
                    {/* <!-- q-b --> */}
                    <div className="q-b">
                        <p>Resetting server settings is a more involved and potentially risky process than resetting browser settings or cookies. The specific steps to reset server settings depend on what kind of server you are dealing with and what you want to reset. Servers can range from web servers (like Apache or Nginx) to database servers (like MySQL or PostgreSQL), email servers, and more. Each server has its own configuration files and procedures for resetting settings</p>
                        </div>
                </div>
                <div className="q collapse-heading"  onClick={(e) => handleFAQClick(e)}>
                    {/* <!-- q-h --> */}
                    <div className="q-h">
                        {/* <!-- text --> */}
                        <p className="text">How to upgrade my current plan?</p>
                    </div>
                    {/* <!-- q-b --> */}
                    <div className="q-b">
                        <p>To upgrade your current plan for a service or subscription, you'll typically need to follow a process specific to the service provider or company offering the plan. The exact steps can vary depending on the service you're using, whether it's a streaming service, web hosting, software subscription, or something else.</p>
                    </div>
                </div>
                <div className="q collapse-heading"  onClick={(e) => handleFAQClick(e)}>
                    {/* <!-- q-h --> */}
                    <div className="q-h">
                        {/* <!-- text --> */}
                        <p className="text">What is the different between .com and .net?</p>
                    </div>
                    {/* <!-- q-b --> */}
                    <div className="q-b">
                        <p>The primary difference between .net and .com is the purpose and historical use of these top-level domains (TLDs) on the internet. They are both common TLDs, but they have distinct intended uses and historical origins</p>
                    </div>
                </div>
            </div>
        </div>


                {/* <!-- section --> */}
                <div className="section">
                    {/* <!-- section-title --> */}
                    <div className="section-title">Copyright</div>
                    {/* <!-- copyright-text --> */}
                    <p className="copyright-text">Copyright © {(new Date().getFullYear())}, TechX Operating Company. All Rights Reserved. The TechX word mark and X logo is a registered trademark of TechX Operating Company.</p>
                </div>
            </div>
        </>
    );
};

export default ThemeSetting;
