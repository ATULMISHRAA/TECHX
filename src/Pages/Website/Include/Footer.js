/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import MobileApp from "../MobileApp"
import Website from '../../Website/Website'
const REACT_APP_NAME = process.env.REACT_APP_NAME;

export const Footer = (props) => {
    

    const handleNavigate = () =>{
    
    }

    const [isFooterLinkOpen, setIsFooterLinkOpen] = useState('');
    const openFooterLink = (footerLink) =>{
        if (isFooterLinkOpen === footerLink) {
            setIsFooterLinkOpen('');
          } else {
            setIsFooterLinkOpen(footerLink);
          }
    };
    const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;
    return (
        <>
            {/* <!-- Contact Bubble --> */}
            <div className="contact-bubble">
                <a href="https://wa.me/447387788662" target='blank' className="live-chat-btn">
                    <img 
                    src={baseUrl+"/icons/whatsapp.png"}
                    className="img-fluid" alt="Icon"/>
                        <span className="text">Chat Now</span>
                </a>
            </div> 

            {/* <!-- Theme Footer --> */}
            <footer className="theme-footer">
                {/* <!-- footer-top --> */}
                <div className="footer-top">
                    <div className="container-fluid">
                        {/* <!-- list-group --> */}
                        <div className="list-group">
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'About')? 'open-list' : ''}`} onClick={() => openFooterLink('About')}>
                                <li className="list-title">About TechX</li>
                                <li className="list-link"><Link to="/about">About Us</Link></li>
                                {/* <li className="list-link"><a href="#">Newsroom</a></li> */}
                                <li className="list-link"><a href="#">Investor Relations</a></li>
                                <li className="list-link"><a href="mailto:job@techx.live">Career</a></li>
                                <li className="list-link"><a href="#">Corporate Responsibility</a></li>
                                <li className="list-link"><a href="#">Trust Center</a></li>
                                {/* <li className="list-link"><Link to="/terms">Legal</Link></li> */}
                                <li className="list-link"><a href="https://store.techx.live/legal-agreements" target="_blank">Legal</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Help')? 'open-list' : ''}`} onClick={() => openFooterLink('Help')}>
                                <li className="list-title">Help Center</li>
                                <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Help Center</a></li>
                                {/* <li className="list-link"><a href="#">Community</a></li> */}
                                {/* <li className="list-link"><a href="#">TechX Blog</a></li> */}
                                <li className="list-link"><Link to="/contact">Contact Us</Link></li>
                                <li className="list-link"><Link to="/support">Report Abuse</Link></li>
                                <li className="list-link"><a href="https://www.secureserver.net/help?pl_id=589497" target="_blank">Resources</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Resources')? 'open-list' : ''}`} onClick={() => openFooterLink('Resources')}>
                                <li className="list-title">Resources</li>
                                <li className="list-link"><a href="https://store.techx.live/products/professional-email" target="_blank">Webmail</a></li>
                                <li className="list-link"><a href="https://www.secureserver.net/whois?plid=589497" target="_blank">WHOIS</a></li>
                                <li className="list-link"><Link to="/MobileApp">TechX Mobile App</Link></li>
                                <li className="list-link"><a href="https://www.icann.org/">ICANN Confirmation</a></li>
                                <li className="list-link"><Link to="/Website">Designers &amp; Developers</Link></li>
                                <li className="list-link"><a href="https://store.techx.live/products/domain-registration " target="_blank">Corporate Domains</a></li>
                                <li className="list-link"><a href="https://www.secureserver.net/redemption?plid=589497" target="_blank">Redeem Code</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            {/* <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Partner')? 'open-list' : ''}`} onClick={() => openFooterLink('Partner')}>
                                <li className="list-title">Partner Programs</li>
                                <li className="list-link"><a href="#">Affiliates</a></li>
                                <li className="list-link"><a href="#">Reseller Programs</a></li>
                                <li className="list-link"><a href="#">TechX Pro</a></li>
                            </ul> */}
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Account')? 'open-list' : ''}`} onClick={() => openFooterLink('Account')}>
                                <li className="list-title">Account</li>
                                <li className="list-link"><a href="https://account.secureserver.net/products?plid=589497" target="_blank">My Products</a></li>
                                <li className="list-link"><a href="https://account.secureserver.net/subscriptions?plid=589497 " target="_blank">Renewals & Billing</a></li>
                                <li className="list-link"><a href="https://sso.secureserver.net/account/create?plid=589497&prog_id=589497&realm=idp&path=%2Fproducts&app=account" target="_blank">Create Account</a></li>
                            </ul>
                            {/* <!-- footer-list --> */}
                            <ul className={`footer-list list-unstyled ${(isFooterLinkOpen == 'Shopping')? 'open-list' : ''}`} onClick={() => openFooterLink('Shopping')}>
                                <li className="list-title">Shopping</li>
                                <li className="list-link"><Link to="/Domains" target="_blank">Domain Search</Link></li>
                                <li className="list-link"><Link to='/Website' target="_blank">Websites</Link></li>
                                <li className="list-link"><a href="https://store.techx.live/products/wordpress" target="_blank">WordPress</a></li>
                                <li className="list-link"><a href="https://store.techx.live/products/cpanel " target="_blank">Hosting</a></li>
                                <li className="list-link"><a href="https://store.techx.live/products/website-security " target="_blank">Web Security</a></li>
                                <li className="list-link"><a href="https://store.techx.live/products/professional-email " target="_blank">Email &amp; Office</a></li>
                                {/* <li className="list-link"><a href="#">Phone Numbers</a></li>
                                <li className="list-link"><a href="#">Promos</a></li> */}
                                <li className="list-link"><Link to='/cyber-security'>Cyber Security</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-middle --> */}
                <div className="footer-middle">
                    <div className="container-fluid">
                        {/* <!-- reg-bar --> */}
                        <div className="reg-bar text-md-left text-center">
                            <div className="d-lg-flex align-items-center justify-content-between">
                                {/* <!-- text --> */}
                                <div className="text">
                                    {/* <!-- title-4 --> */}
                                    <h4 className="title-4">Switch to Pro Plan today and<br/>save up to 30% off</h4>
                                    {/* <!-- para-2 --> */}
                                    <p className="para-2">Check which version are available to upgrade to and validate wheter<br/>your current subscription is upgradeable.</p>
                                </div>
                                {/* <!-- buttons --> */}
                                <div className="buttons mt-lg-0 mt-3">
                                    <a href="#" className="btn btn-fill-primary shadow-off text-uppercase font-500"><Link to="/contact">Upgrade my plan </Link></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer-bottom --> */}
                <div className="footer-bottom">
                    <div className="container-fluid">
                        {/* <!-- content --> */}
                        <div className="content d-flex align-items-start mb-2">
                            {/* <!-- logo --> */}
                            <div className="logo mb-lg-0 mb-1">
                                <Link to="/">
                                    <img 
                                    // src="/assets/images/templates/footer/logo-d.png"
                                    src={baseUrl+"/templates/footer/logo-d.png"}
                                    className="img-fluid" alt="TechX"/>
                                    <p className='logo_p' >Registered Co. No-14520353</p>
                                </Link>
                            </div>
                            {/* <!-- copyright --> */}
                            <div className="copyright mr-lg-5">
                                {/* <!-- links --> */}
                                <ul className="links list-unstyled d-flex align-items-center flex-wrap">
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/terms">Privacy Policy</Link></li>
                                    <li><a href="#">Trademarks</a></li>
                                    <li><a href="#">License Agreements</a></li>
                                </ul>
                                {/* <!-- para-3 --> */}
                                <p className="para-3">TechX All Rights Reserved &copy; {(new Date().getFullYear())}. </p>
                            </div>
                            {/* <!-- social-list --> */}
                            <ul className="social-list list-unstyled d-flex align-items-center justify-content-lg-end justify-content-center ml-lg-auto mt-lg-0 mt-2">
                                <li><a href="https://www.instagram.com/techxltd/" target="_blank"><img 
                                // src="/assets/images/templates/footer/instagram.png"
                                src={baseUrl+"/templates/footer/instagram.png"}
                                 alt="Icon"/></a></li>
                                <li><a href="https://twitter.com/techxltd" target="_blank"><img 
                                // src="/assets/images/templates/footer/twitter.png"
                                src={baseUrl+"/templates/footer/twitter.png"} 
                                alt="Icon"/></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100088283091972" target="_blank"><img 
                                // src="/assets/images/templates/footer/facebook.png"
                                src={baseUrl+"/templates/footer/facebook.png"}
                                 alt="Icon"/></a></li>
                                <li><a href="https://www.tiktok.com/@techxltd?_t=8ZJjBgoCb70&_r=1" target="_blank"><img 
                                // src="/assets/images/templates/footer/tiktok.png" 
                                src={baseUrl+"/templates/footer/tiktok.png"}
                                alt="Icon"/></a></li>
                                <li><a href="https://www.youtube.com/@techx-" target="_blank"><img 
                                // src="/assets/images/templates/footer/youtube.png"
                                src={baseUrl+"/templates/footer/youtube.png"}
                                 alt="Icon"/></a></li>
                            </ul>
                        </div>
                        {/* <!-- content --> */}
                        <div className="content d-lg-flex align-items-end flex-wrap">
                            {/* <!-- para-3 --> */}
                            <p className="para-3">Use of this Site is subject to express terms of use.<br/>By using this site, you signify that you agree to be bound by these <Link to="/terms">Universal Terms of Service</Link>.</p>
                            {/* <!-- sign --> */}
                            <div className="signature ml-auto mt-lg-0 mt-1">
                                <p className="para-3">Developed by <a href="https://techx.live/" target="_blank">TechX</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default withRouter(Footer);