/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';
import { FaLock,FaUbuntu, FaRegSun,FaHeadset, FaDollyFlatbed,FaHome} from 'react-icons/fa'

import './styles/Contact.css';


// import useLoader from "../Services/useLoader";
export const Contact = (props) => {
    const baseUrl = location.href.includes("trainingncr.info")
        ? `http://trainingncr.info/techx/assets/images`
        : `/assets/images`;
    return (
        <>
            {/* <!-- Section I --> */}
            <div className="se-i-contact" style={{
                backgroundImage: `url(${baseUrl}/pages/contact/visu-bg.png)`
            }}>
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-lg-6 left-col d-flex flex-column justify-content-between">
                            {/* <!-- t-s --> */}
                            <div className="t-s mb-lg-0 mb-5">
                                {/* <!-- title-1 & title-2 & para-1 --> */}
                                <h2 className="title-2">Contact Us</h2>
                                <h1 className="title-1">Get in Touch With Us</h1>
                                <p className="para-1">Every guide is trained and excited to work with you, whether you need help with a password reset or you're looking for a team to build your complete web presence.</p>
                            </div>
                            {/* <!-- b-s --> */}
                            <div className="b-s">
                                {/* <!-- row --> */}
                                <div className="row">
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-xl-0 mb-2">
                                        <div className="box">
                                            <div className="icon">
                                                {/* <img
                                                    src={baseUrl + "/pages/contact/icons/home.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                    <FaHome className="lazy img-fluid" alt="icon" />
                                            </div>
                                            <p className="text">Head Office (Only inquiries)</p>
                                            <p className="text">24, St Albans, AL2 1TD,</p>
                                            <p className="text">England, United Kingdom</p>
                                            <a href="mailto:Info@techx.live" className="text">Info@techx.live</a>
                                        </div>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-lg-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                {/* <img
                                                 
                                                    src={baseUrl + "/pages/contact/icons/envelope.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                     <FaRegSun className="lazy img-fluid" alt="icon"/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <p className="text">Technical Support Assistance,</p>
                                            <p className="text">(Software or Hardware)[24/7]</p>
                                            <a href="mailto:support@techx.live" className="text">support@techx.live</a>
                                            
                                        </div>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6">
                                        <div className="box">
                                            <div className="icon">
                                                {/* <img
                                                    src={baseUrl + "/pages/contact/icons/phone-call.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                    <FaHeadset />
                                            </div>
                                            <p className="text">General inquiry</p>
                                            <a href="mailto:contact@techx.live" className="text">contact@techx.live</a>
                                            
                                        </div>
                                    </div>



                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-lg-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                {/* <img
                                                    // src="/assets/images/pages/contact/icons/envelope.png"
                                                    src={baseUrl + "/pages/contact/icons/envelope.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                    <FaUbuntu/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <p className="text">Graphic Design Logo,</p>
                                            <p className="text">(Flyers, B’Cards and more)</p>
                                            <a href="mailto:support@techx.live" className="text">uiux@techx.live</a>
                                            
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-lg-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                {/* <img
                                                    // src="/assets/images/pages/contact/icons/envelope.png"
                                                    src={baseUrl + "/pages/contact/icons/envelope.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                    <FaLock/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <p className="text">Cybersecurity </p>
                                            <p className="text">(CyberX) [24/7] </p>
                                            <a href="mailto:uiux@techx.live" className="text">cyberx@techx.live</a>
                                            
                                        </div>
                                    </div>


                                    <div className="col-xl-4 col-lg-6 col-md-4 col-6 mb-lg-0 mb-2">
                                        {/* <!-- box --> */}
                                        <div className="box">
                                            {/* <!-- icon --> */}
                                            <div className="icon">
                                                {/* <img
                                                    // src="/assets/images/pages/contact/icons/envelope.png"
                                                    src={baseUrl + "/pages/contact/icons/envelope.png"}
                                                    className="lazy img-fluid" alt="icon" /> */}
                                                    <FaDollyFlatbed/>
                                            </div>
                                            {/* <!-- text --> */}
                                            <p className="text">Sales Enquiry,</p>
                                            
                                            <a href="mailto:support@techx.live" className="text">sales@techx.live</a>
                                            
                                        </div>
                                    </div>


                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right-col">
                            {/* <!-- contact-form --> */}
                            <form action="#" className="contact-form ml-auto" id="contact-form" method="POST">
                                {/* <!-- form-title --> */}
                                <h1 className="form-title">Fill up the form and our team will get back to you within 24 hours.</h1>
                                {/* <!-- form-label --> */}
                                <label htmlFor="fname" className="form-label">
                                    <span className="input-label">Full Name</span>
                                    <input type="text" name="fname" id="fname" className="form-input" placeholder="Enter Your Full Name" required />
                                    <span className="state"></span>
                                </label>
                                {/* <!-- form-label --> */}
                                <label htmlFor="email" className="form-label">
                                    <span className="input-label">Email</span>
                                    <input type="text" name="email" id="email" className="form-input" placeholder="Enter Your Email id" required />
                                    <span className="state"></span>
                                </label>
                                {/* <!-- form-label --> */}
                                <label htmlFor="msg" className="form-label">
                                    <span className="input-label">Message</span>
                                    <textarea name="msg" id="msg" rows="5" className="form-input" placeholder="Write Your Message" required></textarea>
                                    <span className="state"></span>
                                </label>
                                {/* <!-- buttons --> */}
                                <div className="buttons mt-2">
                                    <button type="submit" className="btn btn-sm btn-fill-success shadow-off text-uppercase w-100">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(Contact);