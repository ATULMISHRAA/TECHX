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
import "./styles/DatabaseService.css";

// import useLoader from "../Services/useLoader";
export const DatabaseService = (props) => {
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
  const [dataGet, setDataGet] = useState("");
  function parentAlert(data) {
    setDataGet(data);
  }
  const getLocalData = localStorage.getItem("themeId");
  return (
    <>
      {/* <div className="container webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section mt-1">
              <h3 className="AI-text-title-one white-theme-text-AI color-about ">
                Access The Largest Database Services Globally
              </h3>
              <p className="Website-text-title-three mt-1">
                Check out the services we offer below. We're determined to
                provide these services at the best quality - customer
                satisfaction and convenience are of the utmost importance for
                us.
              </p>
              <a
                href="https://store.techx.live/products/website-backup"
                target="blank"
                className="AI-text-title-one-btn"
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/icons/database-banner.gif"}
                className="lazy box-icon cyberbanner-banner-img"
                alt="Mail"
              />
            </div>
          </div>
        </div>
      </div> */}



<div className="website-all-section">
        <div className="overlay-website-banner cyber-security-color-overlay"></div>
        <div
          className="website-banner-img"
          style={{
            backgroundImage: `url(${baseUrl}/icons/database-banner-img.png)`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cyber-banner-text-area ">
                <h3
                  className="AI-text-title-one white-theme-text-AI color-about "
                  
                >
                  Access The Largest Database Services Globally
                </h3>
               <p className="Website-text-title-three mt-1 cyber-banner-detail">
               Check out the services we offer below. We're determined to provide these services at the best quality - customer satisfaction and convenience are of the utmost importance for us.
               </p>
                
                <a
                  href="https://store.techx.live/products/website-backup"
                  target="_blank"
                  className="AI-text-title-one-btn"
                >
                  Explore Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cyber-banner-img-section pt-3">
              {/* <img
                src={baseUrl + "/icons/database-banner.gif"}
                className="lazy box-icon cyberbanner-banner-img"
                alt="Mail"
              /> */}
              </div>
            </div>
          </div>
        </div>
        
      </div>



      {/* <!-- Section I --> */}
      <div className="se-iii-about databsegap-area">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head databasegap">
            <h3 className="se-title-1">Our Offerings</h3>
            <h4 className="se-title-2">
              Our comprehensive offerings of new age database management
              services.
            </h4>
          </div>
          {/* <!-- row --> */}
          <div className="row justify-content-center text-center">
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6">
              {/* <!-- media --> */}
              <img
                // src="/assets/images/pages/about/icons/solution.png"
                src={baseUrl + "/pages/about/icons/solution.png"}
                className="media lazy img-fluid"
                alt="Image"
              />
              {/* <!-- title-1 --> */}
              <h2 className="title-1">Data Validation</h2>
              {/* <!-- para-1 --> */}
              <p className="para-1 px-xl-2">
                Target active and high-intent buyers with the most comprehensive
                & human-verified company data in the industry.
              </p>
            </div>
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6">
              <img
                // src="/assets/images/pages/about/icons/maintenance.png"
                src={baseUrl + "/pages/about/icons/maintenance.png"}
                className="media lazy img-fluid"
                alt="Image"
              />
              {/* <!-- title-1 --> */}
              <h2 className="title-1">Data Maintenance</h2>
              {/* <!-- para-1 --> */}
              <p className="para-1 px-xl-2">
                Fix bad data by eliminating errors and standardize
                inconsistencies to fasten sales and marketing outreach.
              </p>
            </div>
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-6">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/pages/about/icons/question.png"}
                className="media lazy img-fluid"
                alt="Image"
              />
              {/* <!-- title-1 --> */}
              <h2 className="title-1">Data Profiling</h2>
              {/* <!-- para-1 --> */}
              <p className="para-1 px-xl-2">
                Turn data into insights with most advanced prospect data and
                company insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      


<div className="container webhosting-all-section cloud-banner-section mt-5">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
          <div className="image-aboutus-section">
              <img
                src={baseUrl + "/theme/database2.png"}
                className="lazy box-icon cyber-img-banner"
                alt="Mail"
              />
            </div>
          </div>
          <div className="col-lg-6">
            

            <div className="aboutus-text-section mt-1">
            <h3 className="sec-title-1">Our Solutions</h3>
              <h1 className="sec-title-2 ">
                Choosing the right database
                <br /> as per the volume, variety.
              </h1>
              <br />
              <p className="sec-para-1 ">
                Being one of the most sought ‘Database Management Services’
                providers for over two decades, we offer best-in-class services
                to some of the leading companies across industries. Our team of
                experts possess in-depth understanding of both – open and closed
                source databases, and help you to implement the best-suited
                solutions post a thorough evaluation of organizational
                requirements and business goals.
              </p>
            </div>
          </div>
        </div>
      </div>







      {/* <!-- Section III --> */}
      
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1">Database Services</h3>
            <h4 className="se-title-2">
              All your database needs in one place.
            </h4>
          </div>
          {/* <!-- row --> */}
          {/* <!-- col --> */}
          <div
            className="database2-bg"
            style={{
              backgroundImage: `url(${baseUrl}/theme/database3.png)`,
            }}
          ></div>
        
      </div>
      
      <ThemeSetting dataAlert={parentAlert} />

      <Cookie />
    </>
  );
};

export default withRouter(DatabaseService);
