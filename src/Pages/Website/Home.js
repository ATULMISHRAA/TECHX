/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import FAQ from "../../Components/FAQ";
import VPSPlans from "../../Components/VPSPlans";
import CallingMethod from "../../Services/CallingMethod";
import { capitalizeFirst, readLess } from "../../Services/Custom";
import Cookie from "./Include/Cookie";
import Header from "./Include/Header";
import ThemeSetting from "./Include/ThemeSetting";
import { BsShieldCheck, BsTrophy } from "react-icons/bs";
import { MdSupportAgent, MdReviews } from "react-icons/md";
import "./styles/Index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesRight } from "react-icons/im";
import { RiSecurePaymentLine } from "react-icons/ri";
// import { Link, withRouter, useHistory } from "react-router-dom";
// import useLoader from "../Services/useLoader";
export const Home = (props) => {


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    className: "myCustomCarousel",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 680,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  const [dataGet, setDataGet] = useState("");
  function parentAlert(data) {
    setDataGet(data);
  }
  return (
    <>
      <Header />


      <div className="se-ii-home bg-2">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row align-items-center">
            {/* <!-- col --> */}
            <div className="col-xl-4 col-12 text-xl-left text-center mb-xl-0 mb-5">
              {/* <!-- title-1 --> */}
              <h2 className="title-1 mb-1">
                <span>Popular</span><br className="d-xl-block d-none" />
                <span>operating</span><br className="d-xl-block d-none" />
                <span>systems.</span><br />
                <span className="primary-color">Your Choice.</span>
              </h2>
              {/* <!-- para-1 --> */}
              <p className="para-1 mb-0">With ability to upload your own Operating system.</p>
            </div>
            {/* <!-- col --> */}
            <div className="col-xl-8 col-12">
              {/* <!-- row --> */}
              <div className="row justify-content-center">
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box" >
                    <img
                      // src="/assets/images/os/windows.png" 
                      src={baseUrl + "/os/windows.png"}
                      className="lazy img-fluid" alt="Windows" />
                    <h3 className="text mb-0">Windows</h3>
                  </div>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box">
                    <img
                      // src="/assets/images/os/android.png"
                      src={baseUrl + "/os/android.png"}
                      className="lazy img-fluid" alt="Android" />
                    <h3 className="text mb-0">Android</h3>
                  </div>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box">
                    <img
                      // src="/assets/images/os/ubuntu.png" 
                      src={baseUrl + "/os/ubuntu.png"}
                      className="lazy img-fluid" alt="Ubuntu" />
                    <h3 className="text mb-0">Ubuntu</h3>
                  </div>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box">
                    <img
                      // src="/assets/images/os/debian.png"
                      src={baseUrl + "/os/debian.png"}
                      className="lazy img-fluid" alt="Debian" />
                    <h3 className="text mb-0">Debian</h3>
                  </div>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box">
                    <img
                      //  src="/assets/images/os/centos.png"
                      src={baseUrl + "/os/centos.png"}
                      className="lazy img-fluid" alt="CentOS" />
                    <h3 className="text mb-0">CentOS</h3>
                  </div>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-2 col-md-3 col-6">
                  {/* <!-- item --> */}
                  <div className="item text-center operating-box">
                    <img
                      //  src="/assets/images/os/open-suse.png"
                      src={baseUrl + "/os/open-suse.png"}
                      className="lazy img-fluid" alt="Open Suse" />
                    <h3 className="text mb-0">Open Suse</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="se-i-home text-lg-left text-center pt-5">
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- col --> */}
            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box">
                <img src="/assets/images/icons/mail.svg" className="lazy box-icon" alt="Mail" />
                <h2 className="box-title mb-0">Anonymous<br />Access</h2>
              </div>
            </div>

            {/* <!-- col --> */}
            <div className="col-lg-3 col-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box">
                <img src="/assets/images/icons/logout.svg" className="lazy box-icon" alt="Logout" />
                <h2 className="box-title mb-0">No Usage<br />Logs</h2>
              </div>
            </div>

            {/* <!-- col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- box --> */}
              <div className="box">
                <img src="/assets/images/icons/digital.svg" className="lazy box-icon" alt="Digital" />
                <h2 className="box-title mb-0">No Usage<br />Limit</h2>
              </div>
            </div>

            {/* <!-- col --> */}
            <div className="col-lg-3 col-6">
              {/* <!-- box --> */}
              <div className="box">
                <img src="/assets/images/icons/wishlist.svg" className="lazy box-icon" alt="Wishlist" />
                <h2 className="box-title mb-0">100% White . .<br />Listed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-all-section">
        <div className="overlay-elementor-section"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-2">
              <div className="box-elementor-text">
                <h6 className="box-title-text-elementor">WHY CHOOSE US</h6>
                <h2>See the difference TechX can do for you!</h2>
                <p className="box-des-text">
                  Our state-of-the-art servers ensure maximum uptime, providing
                  a reliable hosting environment for your website. With robust
                  security measures in place, you can trust that your data and
                  sensitive information are protected.
                </p>
              </div>
            </div>
            <div className="col-lg-7 mb-2">
              <div className="elementor-box-section">
                <div className="box-content-element">
                  <div className="elementor-box one-box">
                    {/* <BsShieldCheck className="icon" /> */}
                    <RiSecurePaymentLine className="icon" />
                    <h3>Be Secure</h3>
                    <p className="card-box-des">
                      We safeguard your online presence from hackers and
                      spammers by using advanced tools.
                    </p>
                  </div>
                  <div className="elementor-box second-box">
                    <MdSupportAgent className="icon" />
                    <h3>24/7 Support</h3>
                    <p className="card-box-des">
                      We believe that exceptional support is crucial for a
                      seamless and stress-free hosting experience.
                    </p>
                  </div>
                </div>
                <div className="box-content-element third-box">
                  <div className="elementor-box  ">
                    <MdReviews className="icon review-icon" />
                    <h3>Good Review</h3>
                    <p className="card-box-des">
                      We are the hosting provider you can rely on for
                      exceptional service, unmatched performance, and peace of
                      mind.
                    </p>
                  </div>
                  <div className="elementor-box fourth-box">
                    <BsTrophy className="icon" />
                  
                    <h3>Prestigious</h3>
                    <p className="card-box-des">
                      TechX is a prestigious company where excellence meets
                      technology. We take pride in offering hosting services
                      that are synonymous with prestige and quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Section IV --> */}
      <div className="se-iv-home py-90 bg-2">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1">MORE THAN JUST A HOSTING COMPANY.</h3>
            <h4 className="se-title-2">
              Best services you get from TechX Ltd.
            </h4>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>
          {/* <!-- row --> */}
          <div className="row justify-content-center">
            {/* <!-- col --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-1">
                <a href="https://techx.live/domains" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/businessman.svg"
                    src={baseUrl + "/icons/businessman.svg"}
                    className="lazy img-fluid"
                    alt="businessman"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Buy
                  <br />
                  Domains
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Each and every domain name comes with all you need to get online. Buy or transfer domain here.
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
            {/* <!-- col --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-2">
                <a href="https://techx.live/webhosting" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/priority.svg"
                    src={baseUrl + "/icons/priority.svg"}
                    className="lazy img-fluid"
                    alt="priority"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Web
                  <br />
                  Hosting
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Web Hosting Plus gives you the ultra-fast speed of a Virtual Private Server with a super simple control panel — a perfect fit for those who don’t have tech skills but still need powerful hosting.
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
            {/* <!-- col --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-3">
                <a href="https://techx.live/Website" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/mission.svg"
                    src={baseUrl + "/icons/mission.svg"}
                    className="lazy img-fluid"
                    alt="mission"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Website
                  <br />
                  Development
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Build an amazing website in just under an hour with Website Builder. Take advantage of designs created just for your industry and then customize them to reflect your one-of-a-kind idea.
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-4">
                {/* <!-- link --> */}
                <a href="https://techx.live/cyber-security" target="_blank" className="box-link"></a>
                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/hula-hoop.svg"
                    src={baseUrl + "/icons/hula-hoop.svg"}
                    className="lazy img-fluid"
                    alt="hula-hoop"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Cyber <br />
                  Security
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  In today's interconnected world, where our lives and businesses are heavily reliant on digital technology, protecting ourselves from cyber threats has become paramount.
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-5">
                <a href="https://techx.live/DatabaseService" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/data-storage-device.svg"
                    src={baseUrl + "/icons/data-storage-device.svg"}
                    className="lazy img-fluid"
                    alt="data-storage-device"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Database
                  <br />
                  Service
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  In the digital age, data has become the lifeblood of businesses across various industries. Managing and leveraging this data efficiently and securely is crucial for success.
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
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-6">
                {/* <!-- link --> */}
                <a href="https://techx.live/CloudService" target="_blank" className="box-link"></a>
                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/power.svg"
                    src={baseUrl + "/icons/power.svg"}
                    className="lazy img-fluid"
                    alt="power"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Cloud
                  <br />
                  Service
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Cloud services have revolutionized the way businesses operate by offering flexible, scalable, and cost-effective solutions for various computing needs.
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
            {/* <!-- col --> */}
            <div className="col-xl-3 col-lg-4 col-md-6 mb-lg-0 mb-2">
              {/* <!-- box --> */}
              <div className="box color-1">
                <a href="https://techx.live/MobileApp" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/network.svg"
                    src={baseUrl + "/icons/network.svg"}
                    className="lazy img-fluid"
                    alt="network"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Mobile App
                  <br />
                  Development
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Mobile app development has become a vital strategic investment for businesses across industries. It offers unparalleled opportunities to engage customers, extend reach, and drive business growth.
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
            <div className="col-xl-3 col-lg-4 col-md-6">
              {/* <!-- box --> */}
              <div className="box color-2">
                <a href="https://techx.live/DegitalMarketing" target="_blank" className="box-link"></a>
                {/* <!-- link --> */}

                {/* <!-- icon --> */}
                <div className="icon">
                  <img
                    // src="/assets/images/icons/security-on.svg"
                    src={baseUrl + "/icons/security-on.svg"}
                    className="lazy img-fluid"
                    alt="security-on"
                  />
                </div>
                {/* <!-- box-title --> */}
                <h4 className="box-title">
                  Digital
                  <br />
                  Marketing
                </h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  In the digital era, traditional marketing methods alone are no longer sufficient to reach and engage today's tech-savvy consumers.
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

      {/* <!-- Section V --> */}
      {/* <VPSPlans/> */}

      {/* <!-- Section VI --> */}
      <div className="se-vi-home py-90 bg-2">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1">Trust our customers</h3>
            <h4 className="se-title-2">
              VPS Hosting What Our Customers Have To Say?
            </h4>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>

          <div className="slider-home-page-section">
            <Slider {...settings}>


              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-6.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Reliable Service
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Instagram CEO
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    The IT company consistently delivers reliable and efficient solutions.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>


              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-7.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Streamlined Operations
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Instagram CEO
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Their IT solutions significantly improved our business processes.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>


              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-16.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Security and Compliance
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Instagram CEO
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Maintains a strong focus on data security and compliance.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>


              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-12.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Timely Project Completion
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Instagram CEO
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Consistently delivers projects on time, meeting our deadlines.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>



              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-10.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Long-Term Partnerships
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Instagram CEO
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Established a strong and lasting partnership, adding value to our organization.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>




              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/02.jpg"
                      src={baseUrl + "/icons/hosting-11.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Excellent Customer Support
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Adobe Product Manager
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Their customer support team is incredibly responsive and helpful.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>
              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/03.jpg"
                      src={baseUrl + "/icons/hosting-14.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Skilled Technicians
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Full Stack Web Developer
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Highly skilled IT professionals who tackle any problem swiftly.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>
              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/04.jpg"
                      src={baseUrl + "/icons/hosting-17.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Innovative Solutions
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Graphic Designer
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Always at the forefront of technology, offering innovative solutions.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>
              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/05.jpg"
                      src={baseUrl + "/icons/hosting-8.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Cost-Effective
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Adobe Product Manager
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Providing top-notch services at a competitive price.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>
              <div>
                <div className="slider-home-box">
                  <div className="home-box-image-section ">
                    <img
                      // src="/assets/images/avatars/01.jpg"
                      src={baseUrl + "/icons/hosting-13.png"}
                      className="slider-img-home img-fluid"
                      alt="Avatar"
                    />
                  </div>
                  <div className="title-home-text text-center mt-1">
                    Customization and Flexibility
                  </div>
                  {/* <div className="title-home-text text-center mt-1">
                    Full Stack Web Developer
                  </div> */}
                  <p className="quotes-slider-text mt-1">
                    Tailored solutions to meet our unique business needs.
                  </p>
                  <ImQuotesRight className="icon-slider-home mt-2" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="space space-sm"></div>
        </div>
      </div>

      <div className="se-head mt-2">
        <h3 className="se-title-1">FAQS</h3>
        <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
        <Link to="/support"
          className="AI-text-title-one-btn" style={{ margin: 'auto' }}
        >
          Support
        </Link >
      </div>

      {/* <FAQ /> */}

      <ThemeSetting dataAlert={parentAlert} />

      <Cookie />
    </>
  );
};

export default withRouter(Home);
