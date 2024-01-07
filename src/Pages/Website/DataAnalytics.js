/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/DataAnalytics.css";
import Aos from "aos";
 import 'aos/dist/aos.css';

export const DataAnalytics = (props) => {
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
      <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:60}}>
                 <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={400} width={400} alt=""/>
                </div>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
               <h1> Unlocking Insights, Empowering Success Exceptional Data Analytics Services by TECHX</h1>

                </div>
                
            </div>
        </div>

      <div className="se-iv-home py-90 bg-1">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h2 className="se-title1" data-aos="fade-down">
               Harness the Power of Your Data with TECHX's Cutting-Edge Analytics Solutions
            </h2>
            <p className="se-title2" data-aos="fade-down">
            In the dynamic landscape of the digital era, data has emerged as the cornerstone of informed
           decision-making and business excellence. At TECHX, we take pride in offering unparalleled
           Data Analytics Services that transcend traditional boundaries, providing our clients with a
           competitive edge in today's data-driven world.</p>
          </div>
          {/* <!-- space --> */}
          
          <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:60}}>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
                    <h2>Unraveling the Complexity with Simplified Dashboards</h2>
                    <p>Our commitment to user-friendly solutions is reflected in the intuitive dashboards we design.
                     Visualizing complex data shouldn't be a challenge, and with TECHX, it isn't. We present your
                      insights in a clear and accessible manner, empowering users at all levels to make data-driven
                       decisions.</p>
                </div>
                <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={300} width={300} alt=""/>
                </div>
            </div>
        </div>
          <div className="container-fluid" style={{paddingTop:20}}>          
          {/* <!-- row --> */}
          <div className="row text-center">
          
            {/* <!-- col --> */}

            
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h3 className="box_title">Customized Solutions for Every Business</h3>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                Recognizing that each business is unique, our Data Analytics Services are tailored to meet
                specific needs and challenges. Whether you're a startup aiming for growth or an established
                enterprise seeking optimization, TECHX crafts personalized analytics solutions that align with
                your objectives.

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
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h3 className="box_title">Advanced Analytics Capabilities</h3>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                TECHX leverages state-of-the-art technologies and advanced analytics tools to delve deep
                into your data. From predictive analytics that forecast future trends to prescriptive analytics
                that provide actionable recommendations, we cover the entire spectrum to drive strategic
                decision-making.</p>
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
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h3 className="box_title">Real-time Insights for Timely Actions</h3>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                In today's fast-paced business environment, timely decisions are paramount. TECHX ensures
                that your organization stays ahead with real-time analytics, enabling you to respond
                promptly to market shifts, customer behaviors, and emerging opportunities.

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
            <div className="col-xl-4 col-lg-4 col-md-6 mb-2">
              {/* <!-- box --> */}
              <div className="Itf-box color-3">
                {/* <!-- link --> */}
                <a href="#" className="box-link"></a>
                
                
                {/* <!-- box-title --> */}
                <h3 className="box_title">Navigating the Data Deluge</h3>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                In the vast sea of information, TECHX stands as a beacon, helping businesses navigate and
                extract meaningful insights from their data. Our Data Analytics Services go beyond mere
                analysis; we empower organizations to unlock the full potential of their data, transforming it
                into actionable intelligence
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
                <h4 className="box_title">Data Security at the Core</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                We understand the critical nature of your data. Security is not an afterthought but a
                fundamental aspect woven into the fabric of our Data Analytics Services. TECHX employs
                robust measures to safeguard your data, ensuring confidentiality, integrity, and compliance
                with industry standards.</p>
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
                <h4 className="box_title">Scalability for Future Growth</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                As your business evolves, so do your data requirements. TECHX's Data Analytics Services are
                designed for scalability, accommodating the growing volumes and complexities of your data
                landscape. Our solutions grow with you, ensuring sustained relevance and value.</p>
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
                <h4 className="box_title"> Client-Centric Approach</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                Our success is intertwined with the success of our clients. TECHX adopts a client-centric
                approach, working collaboratively to understand your unique challenges and aspirations. We
                don't just deliver analytics; we foster partnerships that drive continual innovation and
                improvement.</p>
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
                <h4 className="box_title">Proven Track Record</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                TECHX takes pride in a track record of delivering impactful Data Analytics Services across
                diverse industries. From improving operational efficiency to enhancing customer
                experiences, our solutions have left a lasting imprint on businesses worldwide.</p>
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
                <h4 className="box_title">Continuous Innovation</h4>
                {/* <!-- box-para --> */}
                <p className="box_para" data-aos="fade-down">
                In the ever-evolving field of data analytics, stagnation is a setback. TECHX stays at the
                forefront of innovation, consistently incorporating the latest advancements to enhance the
                capabilities of our Data Analytics Services. Your success is our motivation for continual
                improvement.</p>
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
      </div>

     
        <div className="container" style={{paddingTop:150}}>
         <div className="head4d">
          <h3 className="head4">Conclusion</h3>
          <p className="pa4" data-aos="fade-down">
          In a world where data is abundant, TECHX stands out as the catalyst for transformation. Our
          Data Analytics Services are not just about numbers; they are about possibilities, insights, and
          opportunities. Join hands with TECHX to embark on a data-driven journey that propels your
          business towards unprecedented success.
          </p> 
         </div>               
        </div>
      
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(DataAnalytics);
