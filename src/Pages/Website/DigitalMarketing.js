/* eslint-disable no-restricted-globals */
import React from "react";
import ThemeSetting from "./Include/ThemeSetting";
import { Link, withRouter, useHistory } from "react-router-dom";
// import "./styles/UiDesigning.css";
//import "./styles/DegitalMarketing.css";
import "./styles/DigitalMarketing.css";
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line no-unused-vars
const DegitalMarketing = () => {
  const handleFAQClick = (e) => {
    const questions = document.querySelectorAll(".q");

    questions.forEach((question) => {
      if (question !== e.currentTarget) {
        question.classList.remove("open");
        question.querySelector(".q-b").style.display = "none";
      }
    });
    e.currentTarget.classList.toggle("open");
    const qb = e.currentTarget.querySelector(".q-b");
    if (qb) {
      qb.style.display = qb.style.display === "block" ? "none" : "block";
    }
  };

  const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;
  return (
    <div className="digital-marketing-section">
      <h3 className="digital-section_subtitle">Online Marketing</h3>
      <h2 className="cs-section_title">What is Digital Marketing?</h2>
      <div className="container mt-3">
        <div className="row dm-card-section">
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <img
                // src="/assets/images/icons/icon01.svg"
                src={baseUrl+"/icons/icon01.svg"}
                className="dm-iconbox_icon img-fluid"
                alt="priority"
              />
              <h3 className="dm-iconbox_title">SEO</h3>
              <p className="dm-description">
              It is the practice of improving a website's visibility and ranking in search engine results pages (SERPs) organically. 
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <img
                // src="/assets/images/icons/icon02.svg"
                src={baseUrl+"/icons/icon02.svg"}
                className="dm-iconbox_icon img-fluid"
                alt="priority"
              />
              <h3 className="dm-iconbox_title">SMM</h3>
              <p className="dm-description">
              Social media marketing refers to the use of social media platforms to promote products, services, or brands and engage with target audiences.  
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="dm-box-section">
              <img
                // src="/assets/images/icons/icon03.svg"
                src={baseUrl+"/icons/icon03.svg"}
                className="dm-iconbox_icon img-fluid"
                alt="priority"
              />
              <h3 className="dm-iconbox_title">Analysis</h3>
              <p className="dm-description">
              Evaluate the design, user experience, and functionality of your website. Analyze factors such as site speed, mobile responsiveness, navigation, and overall aesthetics. 
              </p>
            </div>
          </div>
        </div>

        <div className="row dm-about-all-section mt-3">
          <div className="col-lg-6 col-md-6">
            <div className="dm-about-image-section">
              <img
                // src="/assets/images/icons/service_img_1.jpeg"
                src={baseUrl+"/icons/service_img_1.jpeg"}
                className="dm-about-image img-fluid"
                alt="priority"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="dm-about-text-section">
              <h2 className="dm-about-title">
              Below are our Digital Marketing Services 
              </h2>
              <div className="dm-list-section">
                <div className="dm-first-list-section">
                  <ul>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">SEO </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">PPC </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />
                        <span className="dm-icon-text"> SMM  </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">Content Marketing </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">
                          {" "}
                          E-Mail Marketing 
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">Influencer Marketing  </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dm-first-list-section second-list-section">
                  <ul>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">Affiliate Marketing </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">CRO </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />
                        <span className="dm-icon-text"> ORM </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">Google Ads </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">
                          {" "}
                          Facebook Ads 
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://store.techx.live/products/email-marketing" target="_blank">
                        {" "}
                        <BsArrowRight className="icon-dm-arrow" />{" "}
                        <span className="dm-icon-text">LinkedIn Ads  </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row qna-all-section">
          <div className="col-lg-6 col-md-6">
            <div className="dm-qna-circle-section">
              <div className="dm-section-heading">
                <h2 class="dm-section_title">Some pre questions and answers</h2>
              </div>
              <div class="main">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="box-body-dm">
              {/* <!-- q --> */}

              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}

                <div className="q-h">
                  {/* <!-- text --> */}

                  <h4 className="text">What is the need of SEO? </h4>

                  {/* <!-- plus --> */}

                  <div className="plus">
                    <span></span>

                    <span></span>
                  </div>
                </div>

                {/* <!-- q-b --> */}

                <div className="q-b">
                  <p>
                  SEO helps websites improve their visibility in search engine results pages (SERPs). 
                  </p>
                </div>
              </div>

              {/* <!-- q --> */}

              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}

                <div className="q-h">
                  {/* <!-- text --> */}

                  <h4 className="text">
                  What is the need of Social Media Marketing? 
                  </h4>

                  {/* <!-- plus --> */}

                  <div className="plus">
                    <span></span>

                    <span></span>
                  </div>
                </div>

                {/* <!-- q-b --> */}

                <div className="q-b">
                  <p>
                  Social media platforms have billions of active users, making them an ideal channel to reach a wide audience.
                  </p>
                </div>
              </div>

              {/* <!-- q --> */}

              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}

                <div className="q-h">
                  {/* <!-- text --> */}

                  <h4 className="text">
                  How much should I spend on Google Ads? 
                  </h4>

                  {/* <!-- plus --> */}

                  <div className="plus">
                    <span></span>

                    <span></span>
                  </div>
                </div>

                {/* <!-- q-b --> */}

                <div className="q-b">
                  <p>
                  The amount you should spend on Google Ads depends on various factors, including your business goals, budget, industry, competition, and the specific advertising objectives you want to achieve. 
                  </p>
                </div>
              </div>

              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}

                <div className="q-h">
                  {/* <!-- text --> */}

                  <h4 className="text">
                  How can Email Marketing help my business? 
                  </h4>

                  {/* <!-- plus --> */}

                  <div className="plus">
                    <span></span>

                    <span></span>
                  </div>
                </div>

                {/* <!-- q-b --> */}

                <div className="q-b">
                  <p>
                  Email marketing can be highly beneficial for your business in building and nourishing customers relationship, increase brand awareness and exposure, drive website traffic and conversion etc. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeSetting />
    </div>
  );
};
export default withRouter(DegitalMarketing);
