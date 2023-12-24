/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./styles/UiDesigning.css";
import { TiSupport } from "react-icons/ti";
import { GrUserExpert } from "react-icons/gr";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { FaBuromobelexperte } from "react-icons/fa";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeSetting from "./Include/ThemeSetting";

import {
  SiMaterialdesign,
  SiAffinitydesigner,
  SiMaterialdesignicons,
} from "react-icons/si";

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
const UiDesigning = (props) => {
  var history = useHistory();

  const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  var settingss = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    className: "myCustomCarousel",
  };

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

  return (
    <div className="Ui-designing-section">
      <div className="container">
        <div className="description">
          <span className="title-text-Uidesgn">WHAT WE DO</span>
          <h2 className="uides-desciption">Web, Apps & Business</h2>
          <h3 className="title-uidesign mt-1">
            Web Designing in a powerful way of just not an only professions,
            however, in a passion for our first{" "}
          </h3>
        </div>
        <div className="row row-box">
          <div className="col-lg-3 col-md-6  box-content">
            <div className="icon-section-uidesgn">
              <a>
                <SiMaterialdesign className="icon-uides" />
              </a>
            </div>
            <h3 className="title-uidesign mt-1">Web Designing </h3>
            <p className="card-details-uidesign">
            Web designing refers to the process of creating and designing the visual layout. 
            </p>
          </div>
          <div className="col-lg-3 col-md-6  box-content">
            <div className="icon-section-uidesgn">
              <a>
                <SiAffinitydesigner className="icon-uides" />
              </a>
            </div>

            <h3 className="title-uidesign mt-1">UI UX Designing </h3>
            <p className="card-details-uidesign">
            UI and UX designing are two interconnected disciplines that focus on creating intuitive and user-friendly digital experiences. 
            </p>
          </div>
          <div className="col-lg-3 col-md-6  box-content">
            <div className="icon-section-uidesgn">
              <a>
                <SiMaterialdesignicons className="icon-uides" />
              </a>
            </div>
            <h3 className="title-uidesign mt-1">Web Marketing </h3>
            <p className="card-details-uidesign">
            Web marketing, also known as online marketing or digital marketing, refers to the promotion of products, services, or brands using various online channels and strategies. 
            </p>
          </div>
          <div className="col-lg-3 col-md-6  box-content">
            <div className="icon-section-uidesgn">
              <a>
                <MdOutlineIndeterminateCheckBox className="icon-uides" />
              </a>
            </div>
            <h3 className="title-uidesign mt-1">Unique Technologies </h3>
            <p className="card-details-uidesign">
            There are various unique technologies that have emerged in recent years and are making a significant impact across different industries. 
            </p>
          </div>
        </div>
      </div>
      <marquee className="allimage-text">
        We're shaping the perfect web solutions
      </marquee>
      
  
  <div className="container webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section mt-1">
              <h3 className="AI-text-title-one white-theme-text-AI color-about ">
              WELCOME
              </h3>
              <h2 className="uides-desciption text-left">
                Experienced designers & developers
              </h2>
              <p className="Website-text-title-three mt-1">
              We have a team of experienced designers and developers who possess a high level of expertise and skills in their respective fields. They can do design work in a very short time.
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
                src={baseUrl + "/icons/Uidesign-two.gif"}
                className="lazy box-icon cyberbanner-banner-img"
                alt="Mail"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="uidesign-slider-section">
        <Slider {...settings}>
          <div>
            <figure>
              <div class="thumbnail">
                <div className="">graphic designers working their desk</div>
                <img
                  // src="/assets/images/icons/UiDesign-three.jpg"
                  src={baseUrl+"/icons/UiDesign-three.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
                
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div class="thumbnail">
                <div>handicapped business executive using digital tablet</div>
                <img
                  // src="/assets/images/icons/UiDesign-four.jpg"
                  src={baseUrl+"/icons/UiDesign-four.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                /> 
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div class="thumbnail">
                <div>web template website design concept</div>
                <img
                  // src="/assets/images/icons/UiDesign-five.jpg"
                  src={baseUrl+"/icons/UiDesign-five.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div class="thumbnail">
                <div>closeup hand using pen mouse working </div>
                <img
                  // src="/assets/images/icons/UiDesign-six.jpg"
                  src={baseUrl+"/icons/UiDesign-six.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
                
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div class="thumbnail">
                <div>high angle man designing websites</div>
                <img
                  // src="/assets/images/icons/UiDesign-seven.jpg"
                  src={baseUrl+"/icons/UiDesign-seven.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
                
              </div>
            </figure>
          </div>
          <div>
            <figure>
              <div class="thumbnail">
                <div>business people meeting office writing memos sticky notes</div>
                <img
                  // src="/assets/images/icons/UiDesign-nine.jpg"
                  src={baseUrl+"/icons/UiDesign-nine.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
              </div>
            </figure>
          </div>
        </Slider>
      </div>
      <div className="row about-section-uidesign">
        <div className="col-lg-6 col-md-6">
          <div className="aboutus-uidesign-image-section">
            <Slider {...settingss}>
              <div>
                <img
                  // src="/assets/images/icons/about_1.jpg"
                  src={baseUrl+"/icons/about_1.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
              </div>
              <div>
                <img
                  // src="/assets/images/icons/about_2.jpg"
                  src={baseUrl+"/icons/about_2.jpg"}
                  className="lower-img-uidesign img-fluid"
                  alt="priority"
                />
              </div>
            </Slider>
            
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="content-about-text">
            <h2 className="collapse-heading">UI/Ux Image Generator FAQs</h2>

            <div className="box-body">
              {/* <!-- q --> */}
              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}
                <div className="q-h">
                  {/* <!-- text --> */}
                  <h4 className="text">What It Takes to Create an Image?</h4>
                  {/* <!-- plus --> */}
                  <div className="plus">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                {/* <!-- q-b --> */}
                <div className="q-b">
                  <p>
                  

Creating an image typically involves a combination of artistic vision, technical skills, and tools.
                  </p>
                </div>
              </div>
              {/* <!-- q --> */}
              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}
                <div className="q-h">
                  {/* <!-- text --> */}
                  <h4 className="text">What's the Standard Image Size?</h4>
                  {/* <!-- plus --> */}
                  <div className="plus">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                {/* <!-- q-b --> */}
                <div className="q-b">
                  <p>
                  The standard image size can vary depending on the context and purpose of the image.
                  </p>
                </div>
              </div>
              {/* <!-- q --> */}
              <div className="q" onClick={(e) => handleFAQClick(e)}>
                {/* <!-- q-h --> */}
                <div className="q-h">
                  {/* <!-- text --> */}
                  <h4 className="text">
                    Can I Create Multiple Images at Once?
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
                  Yes, you can create multiple images at once using various methods and techniques.
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
export default withRouter(UiDesigning);
