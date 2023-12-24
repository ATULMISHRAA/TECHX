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
import { FaShieldAlt, FaGlobe, FaClipboardCheck } from "react-icons/fa";
import {
  BsFillBugFill,
  BsFillChatLeftTextFill,
  BsTelephoneFill,
  BsXbox,
} from "react-icons/bs";
import "./styles/CyberSecurity.css";

// import useLoader from "../Services/useLoader";

export const CyberSecurity = (props) => {
  // eslint-disable-next-line no-restricted-globals
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;

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
  const [dataGet, setDataGet] = useState("");
  function parentAlert(data) {
    setDataGet(data);
  }
  const getLocalData = localStorage.getItem("themeId");
  return (
    <>
      {/* <div
        className=" cyber-background "
        style={{
          backgroundImage:
            getLocalData == "dark"
              ? `url(${baseUrl}/theme/Cyberbg_dark.png)`
              : `url(${baseUrl}/theme/cyber-security-back.jpg)`,
        }}
      > */}
      {/* <div className=" cyber-background "  >
        
        <div className="container">
          
          <div className="row">
            
            <div className="col-lg-7">
              <div className="text-banner-cyber-section">
                
                <h3 className="AI-text-title-one AI-about-details white-theme-text-AI mb-2 cyber-heading-text ">
                  Secure your Cyberspace Secure your Digital life !
                </h3>
                <p className="AI-text-title-three cyber-text-three">
                  Check out the services we offer below. We're determined to
                  provide these services at the best quality - customer
                  satisfaction and convenience are of the utmost importance for
                  us.
                </p>
                <a href="https://store.techx.live/products/website-security" target="blank" className="AI-text-title-one-btn">
                  Explore Now
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cyber-security-img-section">
                <img
                  src={baseUrl + "/icons/cyber-security-image.png"}
                  className="lazy box-icon cyber-img-banner"
                  alt="Mail"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="container webhosting-all-section cloud-banner-section" >
         
         <div className="row cloud-row-reverse">
           <div className="col-lg-6">
             <div className="aboutus-text-section mt-2">
             <h3 className="AI-text-title-one white-theme-text-AI color-about">
             Secure your Cyberspace Secure your Digital life !
                 </h3>
                 
                 <p className="Website-text-title-three mt-1">
                 Check out the services we offer below. We're determined to
                  provide these services at the best quality - customer
                  satisfaction and convenience are of the utmost importance for
                  us.
                 </p>
                 <a href="https://store.techx.live/products/website-builder cyber-banner-btn" target="_blank" className="btn-website mt-2">
                   Discover More
                 </a>
             </div>
           </div>
           <div className="col-lg-6">
             <div className="image-aboutus-section pt-3">
             <img
                  src={baseUrl + "/icons/Cyber-Security-1.gif"}
                  className="cyberbanner-banner-img"
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
            backgroundImage: `url(${baseUrl}/icons/Cyber-Security-1.png)`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              
            </div>
            <div className="col-lg-6">
              {/* <div className="cyber-banner-img-section pt-3">
                <img
                  src={baseUrl + "/icons/Cyber-Security-1.gif"}
                  className="cyberbanner-banner-img"
                  alt="Mail"
                />
              </div> */}
              <div className="cyber-banner-text-area ">
                <h3
                 className="AI-text-title-one white-theme-text-AI color-about "
                  
                >
                  Secure your Cyberspace Secure your Digital life !
                </h3>
                
                <p className="Website-text-title-three mt-1 cyber-banner-detail">
                  Check out the services we offer below. We're determined to
                  provide these services at the best quality - customer
                  satisfaction and convenience are of the utmost importance for
                  us.
                </p>
                <a
                  href="https://store.techx.live/products/website-builder"
                  target="_blank"
                  className="btn-website mt-2"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="se-i-home text-lg-left text-center transparent-bg mb-1">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- col --> */}
            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box box-bg cyber-box">
                <div className="overlay-website-banner"></div>
                <div
                  className="website-banner-img cyber-banner-img"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/internet.jpg)`,
                  }}
                ></div>
                <div className="website-banner-text-section">
                  <img
                    // src="/assets/images/icons/mail.svg"
                    src={baseUrl + "/icons/mail.svg"}
                    className="lazy box-icon"
                    alt="Mail"
                  />
                  <h2 className="box-title mb-0">
                    Internet
                    <br />
                    Security
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box box-bg cyber-box">
                <div className="overlay-website-banner"></div>
                <div
                  className="website-banner-img cyber-banner-img"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/Security-global.jpg)`,
                  }}
                ></div>
                <div className="website-banner-text-section">
                  <img
                    // src="/assets/images/icons/mail.svg"
                    src={baseUrl + "/icons/logout.svg"}
                    className="lazy box-icon"
                    alt="Mail"
                  />
                  <h2 className="box-title mb-0">
                    Secure
                    <br />
                    VPN
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box box-bg cyber-box">
                <div className="overlay-website-banner"></div>
                <div
                  className="website-banner-img cyber-banner-img"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/vpn.jpg)`,
                  }}
                ></div>
                <div className="website-banner-text-section">
                  <img
                    // src="/assets/images/icons/mail.svg"
                    src={baseUrl + "/icons/digital.svg"}
                    className="lazy box-icon"
                    alt="Mail"
                  />
                  <h2 className="box-title mb-0">
                    Tune-Up
                    <br />
                    Limit
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box box-bg cyber-box">
                <div className="overlay-website-banner"></div>
                <div
                  className="website-banner-img cyber-banner-img"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/limit.jpg)`,
                  }}
                ></div>
                <div className="website-banner-text-section">
                  <img
                    // src="/assets/images/icons/mail.svg"
                    src={baseUrl + "/icons/wishlist.svg"}
                    className="lazy box-icon"
                    alt="Mail"
                  />
                  <h2 className="box-title mb-0">
                    Privacy
                    <br />
                    Protections
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="se-iv-home py-90 bg-2">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1">Why our Cyber Security</h3>
            <h4 className="se-title-2">
              Keeping you safe, keeping you secure.
            </h4>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>
          {/* <!-- row --> */}
          <div className="row text-center">
            {/* <!-- col --> */}

            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-3 box-card-cyber">
                {/* <!-- link --> */}
                <a
                  href="https://store.techx.live/"
                  target="_blank"
                  className="box-link"
                ></a>
                {/* <!-- icon --> */}
                <div className="icon icon-style color1 m-auto">
                  <FaShieldAlt />
                  {/* <img src="/assets/images/icons/mission.svg" className="lazy img-fluid" alt="mission" /> */}
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">Privacy Protection</h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Host unlimited domains, create unlimited email addresses,
                  databases, FTP accounts, & more.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow"
                  />
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-5 box-card-cyber">
                {/* <!-- link --> */}
                <a
                  href="https://store.techx.live/"
                  target="_blank"
                  className="box-link"
                ></a>
                {/* <!-- icon --> */}
                <div className="icon icon-style color2 m-auto">
                  <FaGlobe />
                  {/* <img src="/assets/images/icons/data-storage-device.svg" className="lazy img-fluid" alt="data-storage-device" /> */}
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">Secure Network</h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  We perform a courtesy off-site backup of your private server
                  data each and every week.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow"
                  />
                </div>
              </div>
            </div>
            {/* <!-- col --> */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-2 box-card-cyber">
                {/* <!-- link --> */}
                <a
                  href="https://store.techx.live/"
                  target="_blank"
                  className="box-link"
                ></a>
                {/* <!-- icon --> */}
                <div className="icon icon-style color3 m-auto">
                  <BsFillBugFill />
                  {/* <img src="/assets/images/icons/priority.svg" className="lazy img-fluid" alt="priority" /> */}
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">Malware & Virus Protection</h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  It’s hard to believe anyone would want to harm your website,
                  but they do.
                  <br />
                  Thankfully.
                </p>
                {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="se-ii-home bg-2">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row align-items-center">
            {/* <!-- col --> */}
            <div className="col-lg-4 col-md-4 text-xl-left text-center mb-5">
              {/* <!-- title-1 --> */}
              <h2 className="title-1 mb-1">
                <span>Protecting</span>
                <br className="d-xl-block d-none" />
                <span>your Assets</span>
                <br className="d-xl-block d-none" />
                <span>and your</span>
                <br />
                <span className="primary-color">Brand.</span>
              </h2>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="row ">
                <div className="col-lg-6 col-md-6">
                  <div className="box box-bg cyber-box mt-2">
                    <div className="overlay-website-banner"></div>
                    <div
                      className="website-banner-img cyber-banner-img"
                      style={{
                        backgroundImage: `url(${baseUrl}/icons/Free-Consultations.jpg)`,
                      }}
                    ></div>
                    <div className="website-banner-text-section">
                      <BsFillChatLeftTextFill
                        style={{ fontSize: 40, color: "Red", textAlign:'center' }}
                      />
                      <h4 className="box-title mb-0 text-center mt-1">
                        Free
                        
                        Consultations
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box box-bg cyber-box mt-2">
                    <div className="overlay-website-banner"></div>
                    <div
                      className="website-banner-img cyber-banner-img"
                      style={{
                        backgroundImage: `url(${baseUrl}/icons/Certified.jpg)`,
                      }}
                    ></div>
                    <div className="website-banner-text-section">
                      <FaClipboardCheck
                        style={{ fontSize: 40, color: "Green", textAlign:'center' }}
                      />
                      <h4 className="box-title mb-0 text-center mt-1">
                        Certified
                        
                        Professional Expert
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box box-bg cyber-box mt-2">
                    <div className="overlay-website-banner"></div>
                    <div
                      className="website-banner-img cyber-banner-img"
                      style={{
                        backgroundImage: `url(${baseUrl}/icons/Security-global.jpg)`,
                      }}
                    ></div>
                    <div className="website-banner-text-section">
                      <BsXbox style={{ fontSize: 40, color: "orange" }} />
                      <h4 className="box-title mb-0 text-center mt-1">
                        Security
                       
                        on a Global Scale
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box box-bg cyber-box mt-2">
                    <div className="overlay-website-banner"></div>
                    <div
                      className="website-banner-img cyber-banner-img"
                      style={{
                        backgroundImage: `url(${baseUrl}/icons/support.jpg)`,
                      }}
                    ></div>
                    <div className="website-banner-text-section">
                      <BsTelephoneFill
                        style={{ fontSize: 40, color: "blue" }}
                      />
                      <h4 className="box-title mb-0 text-center mt-1">
                        24/7
                        
                        Premium Support
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>

      {/* <!-- Notifications --> */}
      <div className="notifications">
        {/* <!-- notify-i --> */}
        <div className="notify notify-1 success">
          {/* <!-- div --> */}
          <div className="d-flex align-items-center">
            {/* <!-- icon --> */}
            <img
              src="/assets/images/theme/smile.gif"
              className="img-fluid mr-1"
              width="70"
              alt="Xerox"
            />
            {/* <!-- para-1 --> */}
            <p className="para-1 mb-0">
              <span>Success!,</span> your request has been successfully sent!,
              we will reply to you soon.
            </p>
          </div>
          {/* <!-- close-btn --> */}
          <button
            className="close-notify-btn close__notify__btn d-flex align-items-center justify-content-center"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              id="close"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292894 11.7071C-0.0976312 11.3166 -0.0976312 10.6834 0.292894 10.2929L4.58579 6L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893Z"
              ></path>
            </svg>
          </button>
        </div>
        {/* <!-- notify-i --> */}
        <div className="notify notify-1 fail">
          {/* <!-- div --> */}
          <div className="d-flex align-items-center">
            {/* <!-- icon --> */}
            <img
              src="/assets/images/theme/emoji_2.gif"
              className="img-fluid mr-1"
              width="70"
              alt="Xerox"
            />
            {/* <!-- para-1 --> */}
            <p className="para-1 mb-0">
              <span>Sorry!,</span> it seems to be a server problem right now!,
              please try again later.
            </p>
          </div>

          {/* <!-- close-btn --> */}
          <button
            className="close-notify-btn close__notify__btn d-flex align-items-center justify-content-center"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 12"
              id="close"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292894 11.7071C-0.0976312 11.3166 -0.0976312 10.6834 0.292894 10.2929L4.58579 6L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>


      <div className="se-head mt-2">
                        <h3 className="se-title-1">FAQS</h3>
                        <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
                        <Link to="/support"
                
                className="AI-text-title-one-btn" style = {{ margin:'auto' }}
              >
                Support
              </Link >
                    </div>
      {/* <FAQ /> */}
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(CyberSecurity);
