/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import {
  FaGoogleDrive,
  FaUbuntu,
  FaRandom,
} from "react-icons/fa";
import "./styles/Itmanagement1.css";
import Aos from "aos";
import"aos/dist/aos.css";

export const Itmanagement1 = (props) => {
    useEffect(()=>{
        Aos.init({duration:2000});
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
                         src={baseUrl + "/icons/It7.png"}
                          className=" img-fluid"
                          alt="Image" data-aos="fade-up"
                       />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="aboutus-text-section">
                        <h3 className="It1-text-title-one white-theme-text-AI mt-1">
                            Unlocking Strategic Excellence Unparalleled IT Consultancy with TECHX
                        </h3>
                        <p className="AI-text-title-three mt-1 mb-1" data-aos="fade-right">
                            
                        </p>
                    </div>
                </div>
           </div>
        </div>
        <div className="se-iv-home py-90 bg-2">
            <div className="container">
               {/* <!-- se-head --> */}
             <div className="se-head" data-aos="fade-down">
               <h3 className="It1-title-1" data-aos="fade-left">Navigating Tomorrow's Tech Landscape Today</h3>
               <p className="It1-title-2" data-aos="fade-right">
                   At TECHX, we redefine IT Consultancy with a visionary approach that propels businesses into
                   a future characterized by innovation, efficiency, and sustained growth. With a dynamic team
                   of seasoned experts, we deliver unparalleled strategic guidance to transform your IT
                   landscape and drive unparalleled success.
                </p>
             </div>
             {/* <!-- space --> */}
             <div className="space space-sm"></div>
             {/* <!-- row --> */}
             <div className="row text-center" data-aos="fade-down">
             {/* <!-- col --> */}

             <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
                {/* <!-- box --> */}
                <div className="box color-3">
                   {/* <!-- link --> */}
                    <a href="#" className="box-link"></a>
                    {/* <!-- icon --> */}
                    <div className="icon icon-style color3 m-auto">
                       <FaGoogleDrive />
                      {/* <img src="/assets/images/icons/mission.svg" className="lazy img-fluid" alt="mission" /> */}
                    </div>
                    {/* <!-- box-title --> */}
                    <h3 className="Itbox-title" data-aos="fade-down">Introduction</h3>
                    {/* <!-- box-para --> */}
                    <p className="Itbox-para" data-aos="fade-up">
                        In the ever-evolving realm of technology, partnering with a forward-thinking IT consultancy is
                        not just a choice; it's a strategic imperative. TECHX emerges as the beacon of transformative
                        IT consultancy services, providing businesses with an unwavering commitment to excellence.
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
                   <div className="box color-5">
                      {/* <!-- link --> */}
                      <a href="#" className="box-link"></a>
                      {/* <!-- icon --> */}
                      <div className="icon icon-style color3 m-auto">
                         <FaUbuntu />
                         {/* <img src="/assets/images/icons/data-storage-device.svg" className="lazy img-fluid" alt="data-storage-device" /> */}
                        </div>
                        {/* <!-- box-title --> */}
                        <h4 className="Itbox-title" data-aos="fade-right">Our Approach</h4>
                        {/* <!-- box-para --> */}
                        <p className="Itbox-para" data-aos="fade-left">
                          At TECHX, we go beyond conventional consultancy. We immerse ourselves in understanding
                          your unique business challenges and aspirations, crafting bespoke IT solutions that align
                          seamlessly with your goals. Our holistic approach involves a meticulous analysis of your
                          current infrastructure, identifying areas for improvement, and strategically deploying
                          cutting-edge technologies to propel your business forward.

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
                <div className="box color-2">
                 {/* <!-- link --> */}
                 <a href="#" className="box-link"></a>
                  {/* <!-- icon --> */}
                   <div className="icon icon-style color3 m-auto">
                     <FaRandom />
                     {/* <img src="/assets/images/icons/priority.svg" className="lazy img-fluid" alt="priority" /> */}
                    </div>
                    {/* <!-- box-title --> */}
                    <h4 className="Itbox-title" data-aos="fade-right">Strategic Insight</h4>
                    {/* <!-- box-para --> */}
                    <p className="Itbox-para" data-aos="fade-left">
                       Our consultancy isn't just about fixing problems; it's about anticipating challenges before
                       they arise. We bring a wealth of strategic insight to the table, helping you leverage technology
                       as a catalyst for innovation and growth. Whether it's streamlining operations, optimizing
                       workflows, or harnessing emerging tech trends, TECHX positions your business at the
                       forefront of the digital frontier.
                    </p>  
                    {/* <!-- arrow --> */}
                <div className="arrow text-right">
                  <img
                    // src="/assets/images/icons/right-arrow.svg"
                    src={baseUrl + "/icons/right-arrow.svg"}
                    className="lazy img-fluid"
                    alt="Right-Arrow"
                    data-aos="fade-down"/>
                </div>
            </div>
        </div>
    </div>
        </div>
      </div>

      <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
        <div className="row ">
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/icons/It8.png"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h1 className="sec-title-It mt-1" data-aos="fade-left">
              Expertise Across Industries
              </h1>
              <br />
              <p className="sec-para-It mb-1" data-aos="fade-left">
                 TECHX doesn't believe in a one-size-fits-all approach. With expertise spanning diverse
                 industries, from finance to healthcare, manufacturing to e-commerce, we tailor our
                 consultancy services to meet the unique demands of your sector. Our industry-centric
                 solutions ensure that your IT strategy isn't just effective; it's transformative.
              </p>
            </div>
          </div>
        </div>
      </div>
                   
   <div className="container-fluid webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
          <div className="aboutus-text-section">
             <h1 className="sec-title-It mb-2" data-aos="fade-down">
                 Collaborative Partnership
             </h1>
              <p className="sec-para-It mb-1" data-aos="fade-up">
                 We don't just work for you; we work with you. TECHX believes in fostering collaborative
                 partnerships, where your goals become our mission. Our consultants become an extension of
                 your team, seamlessly integrating with your organizational culture to ensure a unified
                 approach towards success.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/icons/It9.png"}
                className=" img-fluid"
                alt="Image"
                data-aos="fade-right" />
            </div>
          </div>
          </div>
        </div>
        <div className="cards" data-aos="fade-down">
          <div className="card" data-aos="fade-left">
            {/*<DiAndroid className="icon"/>*/}
            <h3 data-aos="fade-down">Innovation at Every Step</h3>
            <p>Innovation is the heartbeat of TECHX. We don't settle for the status quo; we challenge it.
            From leveraging the latest advancements in artificial intelligence to ensuring robust
            cybersecurity measures, we infuse innovation at every step of your IT journey.</p>
          </div>
          <div className="card">
       {/*</div>   <DiRuby className="icon"/>*/}
          <h3 data-aos="fade-down">Measurable Impact</h3>
            <p>The success of our consultancy is measured by the impact it creates. TECHX doesn't just
            promise; we deliver measurable results. From enhanced operational efficiency to a significant
            return on investment, our consultancy services are designed to translate into tangible
            success metrics for your business.</p>
          </div>
          <div className="card" data-aos="fade-right">
            {/*<FaBezierCurve className="icon"/>*/}
            <h3 data-aos="fade-down">Conclusion</h3>
            <p>In the realm of IT consultancy, TECHX stands as a beacon of innovation, expertise, and
               unwavering commitment. Choose us for a transformative journey where strategic excellence
               meets technological prowess. Your success is not just our goal; it's our commitment. Partner
               with TECHX and let's redefine what's possible in the world of IT consultancy.</p>
          </div>
          
          </div>
        
      <div className="se-head mt-2" data-aos="fade-down">
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

export default withRouter(Itmanagement1);
