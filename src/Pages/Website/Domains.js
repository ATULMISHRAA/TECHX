/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import DomainHeader from '../../Components/DomainHeader';
import FAQ from '../../Components/FAQ';
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/Domains.css';


// import useLoader from "../Services/useLoader";
export const Domains = (props) => {

    const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
    return (
        <>

            <DomainHeader style = {{ position:'relative', opacity:1 }}/>
            {/* <!-- Section I --> */}
            <div className="se-i-domains py-120-90 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    {/* <div className="se-head mb-5">
                        <h3 className="se-title-1">Get the world's most popular domains</h3>
                        <h4 className="se-title-2">Treat yourself to the most popular top level domains.</h4>
                    </div> */}
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row box-domain-section" >
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>com</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">The most popular and professional extension for any kind of website.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$4.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                        className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>site</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Grow your network, and your business, with a .net domain.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$0.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                         className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>org</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Brand your site as an organization for greater good.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$3.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"}  
                                        className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>tech</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Show you're at the forefront of today's tech scene with highly relevant domain.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$2.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                         className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>co.tz</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Brand your site as an organization for greater good.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$3.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                         className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>co.uk</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Brand your site as an organization for greater good.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$2.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                         className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>net</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">The most popular and professional extension for any kind of website.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$2.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        // src="/assets/images/pages/domains/icons/right-arrows.png"
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                         className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- domain-box --> */}
                            <div className="domain-box">
                                {/* <!-- box-name --> */}
                                <h2 className="box-name"><span>.</span>io</h2>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Get personal. Show off what you're all about to your visitors.</p>
                                {/* <!-- div --> */}
                                <div className="d-flex align-items-end justify-content-between">
                                    {/* <!-- price --> */}
                                    <div className="price">
                                        {/* <!-- sub --> */}
                                        <span className="sub">Starting at</span>
                                        {/* <!-- title-3 --> */}
                                        <h3 className="title-3">$3.99</h3>
                                    </div>
                                    {/* <!-- search-btn --> */}
                                    <a href="#" className="search-btn btn-fill-primary">
                                        <img 
                                        src={baseUrl+"/pages/domains/icons/right-arrows.png"} 
                                        className="lazy img-fluid" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section II --> */}
            <div className="se-ii-domains py-120-75">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head mb-5">
                        <h3 className="se-title-1">Your domain comes bearing gifts</h3>
                        <h4 className="se-title-2">Enjoy free products and services with every registration</h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/lock.png"
                                    src={baseUrl+"/pages/domains/icons/lock.png"}  
                                    className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/lock-l.png"
                                    src={baseUrl+"/pages/domains/icons/lock-l.png"} 
                                    className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Domain Lock</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Prevent unauthorized transfers of your domain names, & retain control to unlock domains if you so please.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/renew.png"
                                    src={baseUrl+"/pages/domains/icons/renew.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img
                                    //  src="/assets/images/pages/domains/icons/renew-l.png"
                                    src={baseUrl+"/pages/domains/icons/renew-l.png"} 
                                      className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Auto-renewal</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">If you forget to renew your domain, you could lose it (gasp!). That's why we set up auto renew, so you don't gotta worry.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/forward-button.png"
                                    src={baseUrl+"/pages/domains/icons/forward-button.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/forward-button-l.png" 
                                    src={baseUrl+"/pages/domains/icons/forward-button-l.png"} 
                                    className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Email forwarding</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">If you'd like, automatically forward any of your domain's email addresses to any other valid email address.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/shield.png"
                                    src={baseUrl+"/pages/domains/icons/shield.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/shield-l.png" 
                                    src={baseUrl+"/pages/domains/icons/shield-l.png"} 
                                    className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Privacy protection</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">For a small fee, you can protect your personal information from being publicly available on the WHOIS database.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/dns.png"
                                    src={baseUrl+"/pages/domains/icons/dns.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/dns-l.png"
                                    src={baseUrl+"/pages/domains/icons/dns-l.png"} 
                                     className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">DNS management</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">Route your DNS to us, another host, dedicated IPs, the moon — wherever you'd like (minus the moon part).</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/brain.png"
                                    src={baseUrl+"/pages/domains/icons/brain.png"} 
                                    className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/brain-l.png"
                                    src={baseUrl+"/pages/domains/icons/brain-l.png"} 
                                     className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Easy management</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">Our control panel is designed for ease of use. Manage your online awesomeness from one single dashboard.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/bell.png"
                                    src={baseUrl+"/pages/domains/icons/bell.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/bell-l.png"
                                    src={baseUrl+"/pages/domains/icons/bell-l.png"} 
                                     className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Status alerts</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">Prevent unauthorized transfers of your domain names, & retain control to unlock domains if you so please.</p>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {/* <!-- box --> */}
                            <div className="box">
                                {/* <!-- box-icon --> */}
                                <div className="box-icon d-flex align-items-center justify-content-start">
                                    <img 
                                    // src="/assets/images/pages/domains/icons/jack-cable.png"
                                    src={baseUrl+"/pages/domains/icons/jack-cable.png"} 
                                     className="d-img lazy img-fluid" alt="Icon" />
                                    <img 
                                    // src="/assets/images/pages/domains/icons/jack-cable-l.png" 
                                    src={baseUrl+"/pages/domains/icons/jack-cable-l.png"} 
                                    className="l-img lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Simple &amp;  Intuitive</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para pr-xl-2">We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few. We'll help you get online with ease.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Section III --> */}
            <div className="se-iii-domains py-120 bg-2">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head mb-5">
                        <h3 className="se-title-1">Techx domain registration features</h3>
                        <h4 className="se-title-2">Why choose TechX for your domain name registration</h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row justify-content-center">
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-1 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/businessman.svg"
                                    src={baseUrl+"/icons/businessman.svg"} 
                                     className="lazy img-fluid" alt="businessman" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Upgrade<br />Management</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"}  
                                    className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-2 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="#" className="box-link" href="https://store.techx.live/products/domain-registration" target="_blank"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img
                                    //  src="/assets/images/icons/priority.svg"
                                    src={baseUrl+"/icons/priority.svg"} 
                                      className="lazy img-fluid" alt="priority" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Priority<br />Support &amp; contact</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                     className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-3 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a  className="box-link" href="https://store.techx.live/products/domain-registration" target="_blank"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/mission.svg"
                                    src={baseUrl+"/icons/mission.svg"} 
                                     className="lazy img-fluid" alt="mission" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Advanced<br />Functionality</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                     className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-4 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/hula-hoop.svg"
                                    src={baseUrl+"/icons/hula-hoop.svg"} 
                                     className="lazy img-fluid" alt="hula-hoop" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Flexible <br />Software Env.</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                     className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-5 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/data-storage-device.svg"
                                    src={baseUrl+"/icons/data-storage-device.svg"}  
                                    className="lazy img-fluid" alt="data-storage-device" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Weekly<br />Backups</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">We perform a courtesy off-site backup of your private server data each and every week.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                     className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-6 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/power.svg"
                                    src={baseUrl+"/icons/power.svg"} 
                                     className="lazy img-fluid" alt="power" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Powerful<br />Hardware Env.</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">It’s hard to believe anyone would want to harm your website, but they do.<br />Thankfully.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                     className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-lg-0 mb-2">
                            {/* <!-- box --> */}
                            <div className="box color-1 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/network.svg" 
                                    src={baseUrl+"/icons/network.svg"} 
                                    className="lazy img-fluid" alt="network" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Network<br />Guarantee</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img
                                    //  src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"} 
                                      className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            {/* <!-- box --> */}
                            <div className="box color-2 Domain-box-card-section">
                                {/* <!-- link --> */}
                                <a href="https://store.techx.live/products/domain-registration" target="_blank" className="box-link"></a>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img 
                                    // src="/assets/images/icons/security-on.svg"
                                    src={baseUrl+"/icons/security-on.svg"} 
                                     className="lazy img-fluid" alt="security-on" />
                                </div>
                                {/* <!-- box-title --> */}
                                <h4 className="box-title">Max Reliability<br />&amp; Accuracy</h4>
                                {/* <!-- box-para --> */}
                                <p className="box-para">Host unlimited domains, create unlimited email addresses, databases, FTP accounts, & more.</p>
                                {/* <!-- arrow --> */}
                                <div className="arrow text-right">
                                    <img 
                                    // src="/assets/images/icons/right-arrow.svg"
                                    src={baseUrl+"/icons/right-arrow.svg"}  
                                    className="lazy img-fluid" alt="Right-Arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="se-head mt-2">
                        <h3 className="se-title-1">FAQS</h3>
                        <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
                        <Link to="/support"
                
                className="AI-text-title-one-btn" style = {{ margin:'auto' }}
              >
                Explore Now
              </Link >
                    </div>
            {/* <FAQ /> */}
            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(Domains);