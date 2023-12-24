/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";

import "./styles/About.css";

export const About = (props) => {
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  

  const localData = localStorage.getItem("themeId");
  return (
    <>
    
      <div className="container">
      <div className="row ">
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/business-concept-with-team-close-up.jpg"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-text-section">
            <h2 className="AI-text-title-one white-theme-text-AI color-about mt-1">
                  About Us
                </h2>
              <p className="AI-text-title-three mt-1">
              Welcome to TechX, a technology company that provides
                  comprehensive IT services and solutions. Our mission is to
                  empower individuals and businesses with the latest and most
                  advanced technologies, enabling them to achieve their goals
                  with efficiency and excellence.
              </p>
              <p className="AI-text-title-three mt-1">
              At TechX, we understand that technology is constantly
                  evolving, and so we are committed to staying at the forefront
                  of the industry. We offer a wide range of IT services,
                  including software development, cloud computing, data
                  analytics, cybersecurity, and more. Whether you are a small
                  business looking to streamline your operations, or a large
                  corporation seeking to transform your digital infrastructure,
                  we have the expertise and resources to help you achieve your
                  goals.
              </p>
              <a href="https://store.techx.live/" target="_blank" className="AI-text-title-one-btn" >
                  Explore Now
                </a>
            </div>
          </div>
          </div>
</div>
      <div className="se-ii-about">
        <div className="container">
          <div className="se-head">
            <h3 className="se-title-1">Overview</h3>
            <h4 className="se-title-2">
              We’re a trusted growth partner to millions of everyday
              entrepreneurs.
            </h4>
            
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="box text-center">
                <h3 className="box-title">2022</h3>

                <p className="AI-text-title-three">
                  TechX service was founded by HH. Abdulkarim.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box text-center">
                <h3 className="box-title">121</h3>

                <p className="AI-text-title-three">
                  We power websites all over the world and support thousands
                  more every day.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="box text-center">
                <h3 className="box-title">750+</h3>

                <p className="AI-text-title-three">
                  Our vast team is dedicated to helping our customers around the
                  clock.
                </p>
              </div>
            </div>
          </div>

          <div className="content text-lg-left text-md-center text-left">
            <div className="row align-items-center ">
              <div className="col-lg-6 pr-xl-3 mb-lg-0 mb-2">
                <img
                  src={baseUrl + "/Meetingimage.jpg"}
                  className="img-fluid about-image"
                  alt="Image"
                  style={{ width: "300px", importance: "important" }}
                />
              </div>

              <div className="col-lg-6 pl-xl-3">
                <h4 className="title-2">Co-Founder & CEO</h4>

                <p className="AI-text-title-three">
                  TechX is the place folks come to name their idea, create a
                  compelling brand and a great looking website, attract
                  customers with digital and social marketing, and manage their
                  work. Where no tool alone will do, we give direct one-on-one
                  guidance with a human connection.
                </p>
              </div>
            </div>

            {/* <div className="row align-items-center">
              <div className="col-lg-6 pr-xl-3 order-lg-1 order-2">
                <h4 className="title-2">Techical Partner</h4>

                <p className="AI-text-title-three">
                  Our leadership team humbly and passionately dedicates itself
                  to unleashing the collective power of everyday entrepreneurs.
                </p>
              </div>

              <div className="col-lg-6 pl-xl-3 mb-lg-0 mb-2 order-lg-2 order-1">
                <img
                  src={baseUrl + "/gaurav.png"}
                  className="img-fluid about-image"
                  alt="Image"
                  style={{ width: "400px", importance: "important" }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="se-head">
          <h3 className="se-title-1">What We Do</h3>
          <h4 className="se-title-2">
            We champion entrepreneurs by delivering the perfect help and tools
            for their journey.
          </h4>
        </div>

        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-md-6">
            <img
              src={baseUrl + "/pages/about/icons/solution.png"}
              className="img-fluid card-aboutus-section"
              alt="Image"
            />

            <h3 className="AI-text-title-two white-theme-color">Complete Web Solutions</h3>

            <p className="AI-text-title-three mt-1">
              Our best-in-class solutions are designed to meet the needs of a
              wide range of customers. All fully-managed, these solutions
              empower.
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <img
              src={baseUrl + "/icons/setting-removebg-preview.png"}
              className="img-fluid card-aboutus-section"
              alt="Image"
            />

            <h3 className="AI-text-title-two white-theme-color">Extensive Tools</h3>

            <p className="AI-text-title-three mt-1">
              Integrated into every TechX account, a suite of add-on products
              and resources enhance our customers' ability to build an online.
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <img
              // src="/assets/images/pages/about/icons/question.png"
              src={baseUrl + "/pages/about/icons/question.png"}
              className="img-fluid card-aboutus-section"
              alt="Image"
            />

            <h3 className="AI-text-title-two white-theme-color">Expert Support</h3>

            <p className="AI-text-title-three mt-1">
              No one knows the web better. We understand not only how it works,
              but more importantly how it can be used as a tool to bring our
              customers.
            </p>
          </div>
        </div>
      </div>

      <div className=" container about-all-section">
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/expertise.jpg"}
                className="about-image img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="aboutus-text-section">
              <h3 className="AI-text-title-two white-theme-color">Expertise</h3>
              <p className="AI-text-title-three mt-1">
                Our team of experts comprises some of the most talented and
                experienced professionals in the industry. We have the expertise
                to develop solutions that meet the unique needs of each of our
                clients, and we are committed to staying up-to-date with the
                latest technologies and industry trends.
              </p>
            </div>
          </div>
          </div>


          <div className="row row-reverse-area">
          <div className="col-lg-6 col-md-6">
            
              <div className="aboutus-text-section">
                <h3 className="AI-text-title-two white-theme-color">
                  Customization
                </h3>
                <p className="AI-text-title-three mt-1">
                  We understand that every client has different needs and goals.
                  That's why we offer solutions that are scalable, adaptable,
                  and customizable. We take the time to understand our clients'
                  requirements, and work closely with them to develop solutions
                  that meet their exact needs.
                </p>
              </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/customization.jpg"}
                className=" img-fluid about-image"
                alt="Image"
              /> 
            </div>
          </div>
          </div>


          <div className="row innovation-section">
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/innovation.png"}
                className=" img-fluid about-image"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="aboutus-text-section">
              <h3 className="AI-text-title-two white-theme-color">
                Innovation
              </h3>
              <p className="AI-text-title-three mt-1">
                We are passionate about pushing the boundaries of technology to
                deliver exceptional results. We are constantly exploring new
                ideas and technologies, and we are committed to continuing to
                innovate and deliver cutting-edge solutions to our clients.
              </p>
            </div>
          </div>
          </div>


          <div className="row row-reverse-area customer-section">
          <div className="col-lg-6 col-md-6">
            <div className="aboutus-text-section">
              <h3 className="AI-text-title-two white-theme-color">
                Customer service
              </h3>
              <p className="AI-text-title-three mt-1">
                Our focus is always on delivering value and exceeding our
                clients' expectations. We believe in building long-term
                relationships with our clients, based on mutual trust and
                respect. We are dedicated to providing excellent customer
                service, and to ensuring that our clients are completely
                satisfied with our solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/customer.jpg"}
                className=" img-fluid about-image"
                alt="Image"
              />
            </div>
          </div>
          </div>

          <div className="row Community-section">
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/community.jpg"}
                className=" img-fluid about-image"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="aboutus-text-section">
              <h3 className="AI-text-title-two white-theme-color">
                Community impact
              </h3>
              <p className="AI-text-title-three mt-1">
                At TechX, we are committed to using our expertise and resources
                to make a positive impact on the world around us. We support
                charitable organizations and initiatives that promote social,
                economic, and environmental sustainability. We believe that by
                working together, we can create a better future for everyone.
              </p>
            </div>
          </div>
          </div>

          <div className="row row-reverse-area suummary-section">
          <div className="col-lg-6 col-md-6">
            
              <div className="aboutus-text-section">
                <h3 className="AI-text-title-two white-theme-color">
                  In summary
                </h3>
                <p className="AI-text-title-three mt-1 mb-5">
                  TechX is a leading technology company that offers a wide range
                  of IT services and solutions to individuals and businesses. We
                  are known for our expertise, customization, innovation,
                  customer service, and community impact. We are committed to
                  making a positive impact on the world through technology, and
                  we invite you to join us on this journey.
                </p>
              </div>
            </div>
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/summary.jpg"}
                className=" img-fluid about-image"
                alt="Image"
              />
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
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(About);
