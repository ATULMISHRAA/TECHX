/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/Itmanagement.css";
import Aos from "aos";
import 'aos/dist/aos.css';
<<<<<<< HEAD

=======
>>>>>>> 5b4d6c8013622af23c73162a8ace20556a901a06
export const Itmanagement = (props) => {
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
        <div className="row ">
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/icons/It2.jpg"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h2 className="It-text-title-one white-theme-text-AI mt-1">
              Empowering Excellence<br/> Through Managed IT Solutions
              </h2>
              
            </div>
          </div>
        </div>
      </div>

      <div className="se-iv-home py-90 bg-2">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1" data-aos="fade-down">Unleashing Technological Brilliance for Seamless Operations</h3>
            <p className="se-title-2" data-aos="fade-down">
             At TECHX, we redefine the paradigm of Managed IT Services, propelling businesses into an era
             of unparalleled efficiency and innovation. Our commitment is rooted in transforming IT
             challenges into opportunities, ensuring your organization not only stays ahead but thrives in
             the dynamic digital landscape.

            </p>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>
          <div className="container" style={{marginTop:-20}}>
            <h4 className="head3">Categories of Excellence</h4>
          </div>
          {/* <!-- row --> */}
          <div className="row text-center">
          
            {/* <!-- col --> */}

            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It1.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h3 className="box-title">Proactive IT Management</h3>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                 Embrace a proactive approach to IT management with TECHX. We transcend traditional
                 models, anticipating and addressing potential issues before they impact your operations. Our
                 team is dedicated to ensuring your systems operate at peak performance, providing a stable
                 foundation for your business.
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
              <div className="box color-5">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It2.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h4 className="box-title">Strategic Consultancy</h4>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                 TECHX is more than just an IT service provider; we are your strategic partners in growth. Our
                 seasoned consultants collaborate closely with your team, aligning IT strategies with your
                 business objectives to drive sustainable success.
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
              <div className="box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It3.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h4 className="box-title">Tailored Solutions</h4>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                  Recognizing the uniqueness of each business, TECHX crafts bespoke IT solutions tailored to
                  your specific needs. Whether it's cloud migration, security enhancements, or infrastructure
                  optimization, our solutions seamlessly integrate with your existing framework.
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
              <div className="box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It6.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h4 className="box-title"> Innovation Integration</h4>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                 Embrace the future with TECHX. Our commitment to innovation extends beyond routine
                 maintenance; we actively seek opportunities to integrate emerging technologies into your IT
                 ecosystem, ensuring you stay at the forefront of industry trends.
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
              <div className="box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It5.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h4 className="box-title">Cybersecurity Fortification</h4>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                  In an era of escalating cyber threats, TECHX stands as your cybersecurity fortress. We
                  implement robust measures to safeguard your digital assets, secure sensitive data, and
                  ensure compliance with industry regulations.
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
              <div className="box color-2">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                <img
                src={baseUrl + "/icons/It4.jpg"}
                className=" img-fluid"
                alt="Image" height={220} width={450}
              />
                
                {/* <!-- box-title --> */}
                <h4 className="box-title">24/7 Monitoring and Support</h4>
                {/* <!-- box-para --> */}
                <p className="box-para" data-aos="fade-down">
                 Trust TECHX to be your vigilant guardian. With round-the-clock monitoring and responsive
                 support, we ensure that your IT infrastructure operates seamlessly, leaving you to focus on
                 what matters most the growth of your business.
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
        <div className="row " data-aos="fade-down">
          <div className="col-lg-6" style={{display:"flex",marginTop:-55}}>
          <div className="aboutus-text-section">
          <h1 className="heads5"data-aos="fade-right">Why Choose TECHX</h1>
          </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
          <div className="row" style={{marginTop:20}}> 
             <div className="col-lg-6">
                <h4 className="h4">Proven Track Record</h4>
                <p className="pa">
                 Benefit from a legacy of success as TECHX has consistently delivered outstanding Managed IT
                 Services across diverse industries.
                </p>
             </div>
             <div className="col-lg-6">
                <h4 className="h4">Client-Centric Approach</h4>
                <p className="pa">
                Experience a personalized approach where your goals and challenges become our priorities,
                ensuring a tailored and responsive service.
                </p>
             </div>
             <div className="col-lg-6" data-aos="fade-down" style={{marginTop:20}}>
                <h4 className="h4">Continuous Improvement</h4>
                <p  className="pa">
                TECHX is not just a service provider; we are your partners in growth. We continuously evolve
                to meet the ever-changing demands of the digital landscape.
                </p>
             </div>
             <div className="col-lg-6" data-aos="fade-down" style={{marginTop:20}}>
                <h4 className="h4">Innovation at Every Turn</h4>
                <p className="pa">
                Stay ahead with TECHX as we proactively integrate the latest innovations, guaranteeing your
                business remains technologically relevant and competitive.
                </p>
             </div>
          </div>
        </div>
        </div>
        </div>
        <div className="container" >
         <div className="head4d">
          <h1 className="head4">The TECHX Advantage</h1>
          <p className="pa4" data-aos="fade-down">
           At TECHX, excellence is not just a commitment; it is a culture. Our team comprises seasoned
           professionals driven by a passion for technology and an unwavering dedication to client
           success. We leverage cutting-edge tools and methodologies to deliver results that exceed
          expectations.
          </p> 
         </div>               
        </div>
<<<<<<< HEAD
             
=======
              
>>>>>>> 5b4d6c8013622af23c73162a8ace20556a901a06
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(Itmanagement);
