/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import AbuseForm from "../../Components/AbuseForm";
import BotnetForm from "../../Components/BotnetForm";
import ChildAbuseForm from "../../Components/ChildAbuseForm";
import FAQ from "../../Components/FAQ";
import Header from "./Include/Header";
import IntrusionForm from "../../Components/IntrusionForm";
import MalwareForm from "../../Components/MalwareForm";
import OtherForm from "../../Components/OtherForm";
import PhishingForm from "../../Components/PhishingForm";
import SharedHostingHeader from "../../Components/SharedHostingHeader";
import SpamForm from "../../Components/SpamForm";
import TrademarkForm from "../../Components/TrademarkForm";
import ViolentForm from "../../Components/ViolentForm";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
//import Card from '../../Components/UI/Card';
import {
  FaShieldAlt,
  FaGlobe,
  FaClipboardCheck,
  FaGoogleDrive,
  FaUbuntu,
  FaRandom,
} from "react-icons/fa";
import {
  BsFillBugFill,
  BsFillChatLeftTextFill,
  BsTelephoneFill,
  BsXbox,
} from "react-icons/bs";
//import "./styles/Itmanagement.css";
import "./styles/ItinfraMgmt.css";

import Aos from "aos";
 import 'aos/dist/aos.css';
//import './styles/DatabaseService.css';

// import useLoader from "../Services/useLoader";
export const ItinfraMgmt = (props) => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
  const handleSupportClick = (e) => {
    if (
      e.target.classList.contains("item") ||
      e.target.classList.contains("item-head") ||
      e.target.classList.contains("accordion-title") ||
      e.target.classList.contains("accordion-para")
    ) {
      console.log(e.target);
      const items = document.querySelectorAll(".item");

      items.forEach((item) => {
        if (item !== e.currentTarget) {
          item.classList.remove("open");
          if (item.querySelector(".item-body")) {
            item.querySelector(".item-body").style.display = "none";
          }
        }
      });

      if (
        e.target.classList.contains("item") ||
        e.target.classList.contains("item-head") ||
        e.target.classList.contains("accordion-title") ||
        e.target.classList.contains("accordion-para")
      ) {
        e.currentTarget.classList.toggle("open");
        const qb = e.currentTarget.querySelector(".item-body");
        if (qb) {
          qb.style.display = qb.style.display === "block" ? "none" : "block";
        }
      } else {
      }
    }
  };

  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  return (
    <>
      <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
        <div className="masthead">
        <div className="container mx-auto"style={{paddingTop:160,paddingLeft:220, width:1200, height:100}} >
        <h1 >
        Revolutionizing Mobile Device Management with TECHX Unmatched Solutions for Seamless
        Control and Security
        </h1>
       </div>
        

        </div>
      </div>

      <div className="se-iv-home py-90 bg-1">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h2 className="se-title1" data-aos="fade-down">
                 Empower Your Business Mobility with TECHX's Cutting-Edge MDM Expertise
            </h2>
            <p className="se-title2" data-aos="fade-down">
            In the ever-evolving landscape of technology, TECHX stands as a pioneering engineering
            company, setting new benchmarks in Mobile Device Management (MDM). Our commitment
            goes beyond conventional boundaries, providing unparalleled solutions that redefine how
            businesses manage and secure their mobile ecosystems.

            </p>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>
          <div className="container" style={{marginTop:-20}}>
            <h4 className="head3">Why Choose TECHX for MDM</h4>
          </div>
          {/* <!-- row --> */}
          <div className="row text-center">
          
            {/* <!-- col --> */}

            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h3 className="box_title">Innovative Engineering Excellence</h3>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                 At TECHX, we bring a unique blend of innovation and engineering prowess to MDM. Our
                 solutions are not just about managing devices; they're about enhancing your business
                  efficiency, productivity, and security through innovative engineering.

                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-5">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h4 className="box_title">Tailored MDM Solutions</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                One size doesn't fit all, especially in the dynamic world of MDM. TECHX crafts bespoke
                solutions tailored to your business needs, ensuring that your mobile devices are not just
                managed but optimized for peak performance.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h4 className="box_title">Enhanced User Experience</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                We understand that a seamless user experience is non-negotiable. TECHX focuses on not just
                managing devices but ensuring that your team can work efficiently and intuitively, fostering
                productivity and satisfaction.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div><div className="col-xl-4 col-lg-4 col-md-6 mb-2" data-aos="fade-down">
              {/* <!-- box --> */}
              <div className="Itf-box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h4 className="box_title"> Seamless Integration</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                Our MDM solutions seamlessly integrate into your existing IT infrastructure. Whether it's iOS,
                 Android, or other platforms, TECHX ensures a smooth and harmonious integration,
                 minimizing disruptions and maximizing control.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2" data-aos="fade-down">
              {/* <!-- box --> */}
              <div className="Itf-box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h4 className="box_title">Unmatched Security Protocols</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                In the digital age, security is paramount. TECHX's MDM solutions are fortified with state-of the-art security protocols. From device authentication to data encryption, we employ robust
                measures to safeguard your business information.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2" data-aos="fade-down">
              {/* <!-- box --> */}
              <div className="Itf-box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h4 className="box_title">Remote Management Capabilities</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                In a world where remote work is becoming the norm, TECHX's MDM solutions empower you to
                manage and secure devices from anywhere. Maintain control, enforce policies, and
                troubleshoot issues all remotely.

                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow" data-aos="fade-right"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
      <h3 className="head4-It">Categories of MDM Services by TECHX</h3>
        <div className="row " data-aos="fade-down">
          <div className="col-lg-4 hd3">
            <h3>Comprehensive Device Monitoring</h3>
            <p>Real-time monitoring of device health, usage, and performance.</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Security Enforcement</h3>
            <p>Robust security protocols to safeguard against data breaches and unauthorized access.</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Application Management</h3>
            <p>Control over the installation, updates, and usage of applications on mobile devices.</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Policy Compliance</h3>
            <p>Enforcement of company policies to ensure compliance and mitigate risks.</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Remote Troubleshooting</h3>
            <p>Swift identification and resolution of device issues, minimizing downtime</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Data Backup and Recovery</h3>
            <p>Regular backups and efficient recovery mechanisms to prevent data loss</p>
          </div>
          <div className="col-lg-4 hd3">
            <h3>Location Tracking</h3>
            <p>Geo-tracking capabilities for enhanced device security and asset management</p>
          </div>
        </div>
        </div>
        <div className="container" >
         <div className="head4d">
          <h3 className="head4">Conclusion</h3>
          <p className="pa4" data-aos="fade-down">
          At TECHX, we don't just manage devices; we engineer solutions that elevate your business to
          new heights. Our MDM services redefine what is possible, offering a unique blend of
          innovation, security, and efficiency. Choose TECHX, and let your mobile devices become a
          strategic asset rather than a management challenge. Experience the TECHX difference –
          where engineering meets excellence.
          </p> 
         </div>               
        </div>
        
        
      

      






      
      {/* <FAQ /> */}
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(ItinfraMgmt);
