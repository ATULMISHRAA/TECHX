/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import ThemeSetting from "./Include/ThemeSetting";
import "./styles/ArtificialIntelligence.css";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GiRelationshipBounds } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Link, withRouter, useHistory } from "react-router-dom";
function ArtificialIntelligence() {
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
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
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



  return (
    <>
      {/* <div
        className="AI-banner-section"
        style={{
          backgroundImage:
            localData == "dark"
              ? `url(${baseUrl}/icons/bacground-banner-AI.jpg)`
              : `url(${baseUrl}/icons/ai-technology-brain-background-digital-transformation-concept.jpg)`,
        }}
      >
        <div className="overlay-AI-banner-section"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="AI-banner-img-section">
                <img
                  // src="/assets/images/icons/AI_Bannner_robot.png"
                  src={baseUrl + "/icons/AI_Bannner_robot.png"}
                  className="banner-AI-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="AI-banner-text-section">
                <h2 className="AI-text-title-one">
                  <span className="heading-text-AI-banner">Empowering</span> The
                  Future With AI & Robotics
                </h2>
                <a href="https://store.techx.live/" target="_blank" className="AI-text-title-one-btn">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <ThemeSetting dataAlert={parentAlert} />
      </div> */}


      <div className="container webhosting-all-section cloud-banner-section" >

        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h2 className="AI-text-title-one">
                <span className="heading-text-AI-banner">Empowering</span> The
                Future With AI & Robotics
              </h2>
              <a href="https://store.techx.live/" target="_blank" className="AI-text-title-one-btn">
                Explore Now
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/icons/AI_Bannner_robot.png"
                src={baseUrl + "/icons/AI_Bannner_robot.png"}
                className="banner-AI-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>



      <div className="AI-card-section">
        <h2 className="AI-text-title-one text-center mt-5 white-theme-text-AI">
          Why Choose <span className="heading-text-AI-banner">TechX? </span> ?
        </h2>
        <p className="AI-text-title-three text-center width-text-tile-three mt-2">
          TechX is a leading technology company that offers a wide range of IT services and solutions to individuals and businesses.
        </p>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Easy Integration
                </h3>
                <p className="AI-text-title-three mt-1">
                  Easy integration refers to the ability to seamlessly incorporate or combine one system, software, or component with another without significant complications or barriers.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <GrTechnology className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  New Technology
                </h3>
                <p className="AI-text-title-three mt-1">
                  We use latest technology to build AI based applications for our reputed clients.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <GiRelationshipBounds className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  Better Reliability
                </h3>
                <p className="AI-text-title-three mt-1">
                  Improving reliability is a critical aspect of technological advancements across various domains. Enhancing reliability ensures that systems, products, or services consistently perform as intended, minimizing failures, downtime, and disruptions
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="AI-card-box mt-3">
                <div className="AI-circle-box">
                  <MdOutlineIntegrationInstructions className="icon-AI-card" />
                </div>
                <h3 className="AI-text-title-two mt-1 white-theme-color">
                  100% Secured
                </h3>
                <p className="AI-text-title-three mt-1">
                  Achieving 100% security is an ambitious goal but practically challenging in the realm of technology. Security is a continuous process of assessing risks, implementing safeguards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="AI-about-section">
                <img
                  // src="/assets/images/icons/AI_about_img.png"
                  src={baseUrl + "/icons/AI-M2.gif"}
                  className="about-AI-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="AI-about-text-section">
                <h3 className="AI-text-title-one AI-about-details white-theme-text-AI">
                  Transform Your Business With AI Technology
                </h3>
                <p className="AI-text-title-three mt-2 pb-2">
                  AI technology has the potential to transform businesses across various industries by automating processes, enabling data-driven decision-making, and unlocking new opportunities.
                </p>
                <Link to="/contact" className="AI-text-title-one-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <h2 className="AI-text-title-one white-theme-text-AI">
                What <span className="heading-text-AI-banner">People Say</span>{" "}
                About Our AI Service & Technology
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="AI-text-title-three mt-5 textColor">
                Users appreciate the accuracy, speed, and efficiency of our AI service. They may find it helpful in providing accurate information, solving problems, or simplifying tasks. We have many clients who always be happy with the work we have done for them.
              </p>
            </div>
          </div>
          <div className="AI-slider-section mt-5">
            <Slider {...settings}>
              <div>
                <div className="AI-slider-box Aislider1">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Machine Learning Libraries and Frameworks:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                    <li>Scikit-Learn</li>
                    <li>Keras</li>
                    <li>Theano</li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider2">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                  Computer Vision Software:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>OpenCV</li>
                    <li>YOLO (You Only Look Once)</li>
                    <li>Caffe</li>
                    <li>Dlib</li>
                    <li>Image</li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider3">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    AI in Finance and Trading:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>Adobe Sensei</li>
                    <li>Salesforce Einstein</li>
                    <li>Acquia Lift</li>
                    <li>Albert AI</li>
                    <li>Persado</li>
                  </ul>
                  <div className="quotes-slider-AI ">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider4">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color">
                    Speech Recognition and Synthesis Software:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>Amazon Transcribe and Polly</li>
                    <li>IBM Speech to Text and Text to Speech</li>
                    <li>CMU Sphinx</li>
                    <li>Dragon NaturallySpeaking</li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider5">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Natural Language Processing (NLP) Software:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>GPT-3 (OpenAI)</li>
                    <li>BERT (Google)</li>
                    <li>NLTK (Natural Language Toolkit)</li>
                    <li>spaCy</li>
                    <li>Stanford NLP</li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
              <div>
                <div className="AI-slider-box Aislider6">
                  <ImQuotesLeft className="AI-slider-icon" />
                  <h3 className="AI-text-title-two white-theme-color ">
                    Chatbot and Virtual Assistant Platforms:
                  </h3>
                  <ul className="AI-text-title-three mt-1 textColor">
                    <li>Dialog Flow (Google)</li>
                    <li>IBM Watson Assistant</li>
                    <li>Microsoft Bot Framework</li>
                    <li>Rasa</li>
                    <li>Chatfuel</li>
                  </ul>
                  <div className="quotes-slider-AI">
                    <ImQuotesRight className="icon-slider-quotes" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div>
            <h2 className="AI-text-title-one mt-5 text-center white-theme-text-AI">
              AI Powerhouses: Unleashing Innovation, Transforming Industries
            </h2>
            <p className="AI-text-title-three mt-1 text-center width-text-tile-three">
              Revolutionizing Industries: How AI Powerhouses are Disrupting the Status Quo, Driving Innovation, and Empowering Businesses to Thrive in the Digital Era.
            </p>
            <div className="row mt-2">
              <div className="col-lg-4">
                <div
                  className="card-AI-box-section img-card-AI-backImage-one mt-3"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/robot-hand-finger-ai-background-technology-graphics-one.jpg)`,
                  }}
                >
                  <div className="overlay-card-AI-box-section"></div>
                  <div className="card-AI-text-section">
                    <h3 className="AI-text-title-two">
                      Enhance productivity with AI software
                    </h3>
                    <p className="AI-text-title-three mt-1 detail-white-theme-AI textColor">
                      the use of AI software can bring about significant productivity enhancements across various industries and domains by automating tasks, improving data analysis, enabling predictive maintenance, and providing personalized experiences. However, it's essential to implement AI solutions thoughtfully and ethically to maximize the benefits while addressing potential challenges and concerns
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card-AI-box-section img-card-AI-backImage-two mt-3"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/robot-hand-finger-ai-background-technology-graphics-two.jpg)`,
                  }}
                >
                  <div className="overlay-card-AI-box-section"></div>
                  <div className="card-AI-text-section">
                    <h3 className="AI-text-title-two">
                      Custom-made AI software
                    </h3>
                    <p className="AI-text-title-three mt-1 detail-white-theme-AI textColor">
                      AI software requires a significant investment in terms of time, expertise, and resources. Organizations or individuals interested in custom AI solutions typically collaborate with AI developers, data scientists, and domain experts to ensure that the software meets their precise needs. The choice between custom solutions and off-the-shelf AI software depends on the specific goals and requirements of the project or organization.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="card-AI-box-section img-card-AI-backImage-three mt-3"
                  style={{
                    backgroundImage: `url(${baseUrl}/icons/robot-hand-finger-ai-background-technology-graphics-three.jpg)`,
                  }}
                >
                  <div className="overlay-card-AI-box-section"></div>
                  <div className="card-AI-text-section textColor ">
                    <h3 className="AI-text-title-two">
                      Transforming Industries And Changing Lives With AI
                    </h3>
                    <p className="AI-text-title-three mt-1 detail-white-theme-AI textColor">
                      The profound impact of artificial intelligence (AI) on both businesses and individuals AI is a transformative technology that has the power to reshape industries, improve efficiency, enhance personalization, and positively influence the lives of individuals. The responsible development and deployment of AI are key to unlocking its full potential and ensuring that it benefits society as a whole.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="image-AI-lower-footer-section">
                <img
                  // src="/assets/images/icons/stylish-robot-pointing-removebg-preview.png"
                  src={
                    baseUrl +
                    "/icons/stylish-robot-pointing-removebg-preview.png"
                  }
                  className="img-fluid ai-img-about"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="detials-section-AI-footer">
                <h2 className="AI-text-title-one white-theme-text-AI">
                  Unlock The Potential Of AI And Robotics With Artifice
                </h2>
                <p className="AI-text-title-three mt-1">
                  The specific details and implications of this statement would depend on the context and the actual technology or system referred to as "Artifice." To get a better understanding of what "Artifice" is and how it can unlock the potential of AI and robotics, you would need to explore more about the technology or organization behind it
                </p>
                <Link to="/contact" className="AI-text-title-one-btn marginTop">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeSetting />
    </>
  );
}

export default ArtificialIntelligence;
