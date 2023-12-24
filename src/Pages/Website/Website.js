import React from "react";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/Website.css";
//import { GrBusinessService } from "react-icons/gr";
import { MdOndemandVideo } from "react-icons/md";
import { GiGhostAlly } from "react-icons/gi";
import { BsServer } from "react-icons/bs";
import { BiSupport, BiMoneyWithdraw } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import FAQ from '../../Components/FAQ';
import { Link, withRouter } from "react-router-dom";
export default function Website() {
  // eslint-disable-next-line no-restricted-globals
  const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;

  return (
    <>
      
      {/* <div className="container webhosting-all-section cloud-banner-section" >
         
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section">
            <h3 className="website-text-title-two mt-1 white-theme-color web-title">
            Get A WEBSITE 
                </h3>
                <h2 className="Website-text-title-one">
                The Fastest Website Building Team for you. 
                </h2>
                <p className="Website-text-title-three mt-1">
                Make you business online in a faster way from our team of experts. 
                </p>
                <a href="https://store.techx.live/products/website-builder" target="_blank" className="btn-website mt-2">
                  Discover More
                </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-aboutus-section">
            <img
                 
                  src={baseUrl+"/icons/website.gif"}
                  className="web-banner-img"
                  alt=""
                />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="website-all-section" >
            <div className="overlay-website-banner" >
           
            </div>
            <div className="website-banner-img" style={{
            backgroundImage:
              `url(${baseUrl}/icons/website.gif)`
                
          }}>

            </div>
       
          <div className="website-banner-text-section">
          <h3 className="website-text-title-two mt-1 white-theme-color web-title">
            Get A WEBSITE 
                </h3>
                <h2 className="Website-text-title-one">
                The Fastest Website Building Team for you. 
                </h2>
                <p className="Website-text-title-three mt-1">
                Make you business online in a faster way from our team of experts. 
                </p>
                <a href="https://store.techx.live/products/website-builder" target="_blank" className="btn-website mt-2">
                  Discover More
                </a>
          </div>
       
      </div> */}

<div className="website-all-section">
        <div className="overlay-website-banner"></div>
        <div
          className="website-banner-img"
          style={{
            backgroundImage: `url(${baseUrl}/icons/website-banner.png)`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cyber-banner-text-area ">
                <h3
                  className="website-text-title-two mt-1 white-theme-color web-title"
                  
                >
                  Get A WEBSITE 
                </h3>
                <h2 className="Website-text-title-one">
                The Fastest Website Building Team for you. 
                </h2>
                <p className="Website-text-title-three mt-1 webdetail-text">
                Make you business online in a faster way from our team of experts.
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
            <div className="col-lg-6">
              <div className="cyber-banner-img-section pt-3">
                {/* <img
                  src={baseUrl + "/icons/website.gif"}
                  className="cyberbanner-banner-img"
                  alt="Mail"
                /> */}
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="card-website-section">
        <h2 className="Website-text-title-one text-center white-theme-text-Website mt-3">
        ALWAYS GET THE{" "}
          <span className="heading-text-Website-banner">RIGHT</span>
        </h2>
        <p className="Website-text-title-three text-center media-text-tile-three mt-2 width-para-text-website">
        TechX provide the right website which fits as per your business requirements, keeping your vision and goals as a priority. 
        </p>
        <div className="container mt-3">
          <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <BsServer className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Unique Design
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three">
                We always prefer to provide unique design to keep you separate from your competitors.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <MdOndemandVideo className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Easy Navigation
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three">
                We design/develop websites which are easy to navigate and user friendly. 
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box mt-3">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    <GiGhostAlly className="icon-website-card" />
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Fast Loading
                </h3>
                <p className="Website-text-title-three mt-1 text-center media-text-tile-three">
                We try to build websites by writing smart and minimal coding so that website opens in just a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container about-website-section mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="website-about-section">
              <img
                src={baseUrl+"/icons/illustration_about_web.gif"}
                className="about-AI-img"
                alt=""
              />
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="website-about-text-section">
              <h2 className="Website-text-title-one white-theme-text-AI">
                Transform Your Business With web Technology
              </h2>
              <p className="Website-text-title-three mt-2 pb-2 media-text-tile-three">
              In today's digital landscape, web technologies have become essential tools for businesses to thrive and succeed. By leveraging the power of the web, businesses can enhance their online presence, streamline operations. 
              </p>
              <a href="https://store.techx.live/products/website-builder" target="_blank" className="website-text-title-one-btn btn-website">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>  

      <div className="banner-card-web-section" style= {{
        backgroundImage : `url(${baseUrl}/icons/exclusive_service_bg.png)`
      }}>
        <div className="container">
      <div className="row justify-content-center mt-5">
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box img-card-box-web">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    {/* <BsServer className="icon-website-card" /> */}
                    <BiSupport className="icon-website-card"/>
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center ">
                24/7 Expert Support
                </h3>
                <p className="Website-text-title-three mt-1 text-center white-theme-text">
                Everything you need WordPress is Super powered Hosting, 24/7 Live Support Management tools.
                </p>
                <a href="https://store.techx.live/products/website-builder" target="_blank" className="website-text-title-one-btn btn-website btn-web-banner-card">
                Read More
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box img-card-box-web">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    {/* <MdOndemandVideo className="icon-website-card" /> */}
                    {/* <IoAccessibilitySharp className="icon-website-card"/> */}
                    <BiMoneyWithdraw className="icon-website-card"/>
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                Money-back Guarantee
                </h3>
                <p className="Website-text-title-three mt-1 text-center white-theme-text">
                Everything you need WordPress is Super powered Hosting, 24/7 Live Support Management tools.
                </p>
                <a href="https://store.techx.live/products/website-builder" target="_blank" className="website-text-title-one-btn btn-website btn-web-banner-card">
                Read More
              </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="Website-card-box img-card-box-web">
                <div className="Website-circle-box">
                  <div className="inner-circle-web">
                    {/* <GiGhostAlly className="icon-website-card" /> */}
                    {/* <BiGhost className="icon-website-card" /> */}
                    <SiAdguard className="icon-website-card"/>
                  </div>
                </div>
                <h3 className="Website-text-title-two mt-1 white-theme-color text-center">
                100% Uptime Guaranteed
                </h3>
                <p className="Website-text-title-three mt-1 text-center white-theme-text">
                Everything you need WordPress is Super powered Hosting, 24/7 Live Support Management tools
                </p>
                <a href="https://store.techx.live/products/website-builder" target="_blank" className="website-text-title-one-btn btn-website btn-web-banner-card">
                Read More
              </a>
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
                Support
              </Link >
                    </div>
      {/* <FAQ/> */}
      <ThemeSetting/>
    </>
  );
}
