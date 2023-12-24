/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./styles/MobileApp.css";
import ThemeSetting from "./Include/ThemeSetting";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsStarFill } from "react-icons/bs";
import { VscServerProcess } from "react-icons/vsc";
import { AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { TbDatabaseImport } from "react-icons/tb";
function MobileApp(props) {
  var history = useHistory();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };

  var setting = {
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
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  };
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  return (
    <div>
      {/* <div className="mobile-banner-section" style= {{
        backgroundImage : `url(${baseUrl}/icons/illustration-bannner-image.jpg)`
      }} >
        <div className="overlay-banner-mobileApp"></div>
        
            <div className="text-section-mobile">
              <h2 className="text-title-one Website-text-title-one">
              Get Mobile App for your Business
              </h2>
              <p className="text-title-three banner-text-mobile mt-2">
              Still looking for the perfect app to manage your business? TechX might just be the perfect company for the job. 
              </p>
              
            </div>
      </div> */}
      <div className="container webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
            <div className="aboutus-text-section mt-1">
              <h3 className="AI-text-title-one white-theme-text-AI color-about ">
                Get Mobile App for your Business
              </h3>
              <p className="Website-text-title-three mt-1">
                Still looking for the perfect app to manage your business? TechX might just be the perfect company for the job.
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
                src={baseUrl + "/icons/Mobileapp.gif"}
                className="lazy box-icon cyberbanner-banner-img"
                alt="Mail"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="container slider-mobile-bottom-section">
        <div className="row mobileApp-card-section">
          <div className="col-lg-3 col-md-6">
            <div className="mobileApp-box-section mt-3">
              <div className="mobileApp-icon-section">
                <img
                  // src="/assets/images/icons/Home-2-Process-1.png"
                  src={baseUrl + "/icons/Home-2-Process-1.png"}
                  className="mobileApp-iconbox_icon img-fluid"
                  alt="priority"
                />
              </div>
              <h3 className="text-title-two text-center">Beautiful Design</h3>
              <p className="text-title-three text-center  text-color-creative">
                Creating a beautiful mobile app design involves combining aesthetic appeal with intuitive user experience.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mobileApp-box-section mt-3">
              <div className="mobileApp-icon-section">
                <img
                  // src="/assets/images/icons/Home-2-Process-2.png"
                  src={baseUrl + "/icons/Home-2-Process-2.png"}
                  className="mobileApp-iconbox_icon img-fluid"
                  alt="priority"
                />
              </div>
              <h3 className="text-title-two text-center">Wireframing </h3>
              <p className="text-title-three text-center  text-color-creative">
                Wireframing is the process of creating a visual representation or blueprint of a website, application, or user interface (UI) design.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mobileApp-box-section mt-3">
              <div className="mobileApp-icon-section">
                <img
                  // src="/assets/images/icons/Home-2-Process-3.png"
                  src={baseUrl + "/icons/Home-2-Process-3.png"}
                  className="mobileApp-iconbox_icon img-fluid"
                  alt="priority"
                />
              </div>
              <h3 className="text-title-two text-center">Prototyping </h3>
              <p className="text-title-three text-center  text-color-creative">
                Prototyping is the process of creating a preliminary model or representation of a product, system, or idea to test its functionality & design.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="mobileApp-box-section mt-3">
              <div className="mobileApp-icon-section">
                <img
                  // src="/assets/images/icons/Home-2-Process-4.png"
                  src={baseUrl + "/icons/Home-2-Process-4.png"}
                  className="mobileApp-iconbox_icon img-fluid"
                  alt="priority"
                />
              </div>
              <h3 className="text-title-two text-center">App Development </h3>
              <p className="text-title-three text-center  text-color-creative">
                Mobile app development refers to the process of creating software applications specifically designed to run on mobile devices.
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-section-mobileApp">
          <h2 className="text-title-one something-text-title text-center Website-text-title-one">Our Portfolio </h2>
          <p className="text-title-three text-center text-color-creative mt-1 mb-2">
            We have already build many mobile applications for our clients across the globe. Our mobile apps are easy to navigate and user friendly.
          </p>

        </div>

        <div>
          <Slider {...setting}>
            {/* <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C1.png"
                  src={baseUrl + "/icons/screenshot-1-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div> */}
            <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C2.png"
                  src={baseUrl + "/icons/screenshot-2-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div>
            <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C5.png"
                  src={baseUrl + "/icons/screenshot-3-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div>
            <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C4.png"
                  src={baseUrl + "/icons/screenshot-4-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div>
            <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C5.png"
                  src={baseUrl + "/icons/screenshot-5-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div>
            <div>
              <div className="image-section-slider-mobileApp">
                <img
                  // src="/assets/images/icons/Home-1-C1.png"
                  src={baseUrl + "/icons/screenshot-1-mobileApp.jpg"}
                  className="img-fluid slider-icon-mobileApp-screen"
                  alt="priority"
                />
              </div>
            </div>
          </Slider>
        </div>






        <div className="icon-gallery-mobileApp">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="icon-box-mobileApp mt-5">
                <VscServerProcess className="icon-mobileApp" />
                <h2 className="text-title-one something-text-title text-center">2330</h2>
                <h3 className="text-title-two text-center text-color-creative">Creative Process</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="icon-box-mobileApp mt-5">
                <AiOutlineHome className="icon-mobileApp" />
                <h2 className="text-title-one something-text-title text-center">1700</h2>
                <h3 className="text-title-two text-center text-color-creative">Stunning Layouts</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="icon-box-mobileApp mt-5">
                <TbDatabaseImport className="icon-mobileApp" />
                <h2 className="text-title-one something-text-title text-center">1158</h2>
                <h3 className="text-title-two text-center text-color-creative">Easy Import</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="icon-box-mobileApp mt-5">
                <AiOutlineHeart className="icon-mobileApp" />
                <h2 className="text-title-one something-text-title text-center">1997</h2>
                <h3 className="text-title-two text-center text-color-creative">Best Support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-mobileApp-section">
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
            <div className="overlay-card-box"></div>
            <img
              // src="/assets/images/icons/Home-2-Info-Box-1.jpg"
              src={baseUrl + "/icons/Home-2-Info-Box-1.jpg"}
              className="img-fluid card-img-mobileAppdevice"
              alt="priority"
            />
            <div className="card-text-box-mobileApp">
              <h3 className="text-title-two text-center banner-text-mobile">User Experience</h3>
              <p className="text-title-three text-center banner-text-mobile">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                See More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
            <div className="overlay-card-box"></div>
            <img
              // src="/assets/images/icons/Home-2-Info-Box-2.jpg"
              src={baseUrl + "/icons/Home-2-Info-Box-2.jpg"}
              className="img-fluid card-img-mobileAppdevice"
              alt="priority"
            />
            <div className="card-text-box-mobileApp">
              <h3 className="text-title-two text-center banner-text-mobile">Easy & Convenient Coding</h3>
              <p className="text-title-three text-center banner-text-mobile">
                You can customize to your needs by adding or removing simple html block.
              </p>
              <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                See More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 card-box-mobileApp mt-5">
            <div className="overlay-card-box"></div>
            <img
              // src="/assets/images/icons/Home-2-Info-Box-3.jpg"
              src={baseUrl + "/icons/Home-2-Info-Box-3.jpg"}
              className="img-fluid card-img-mobileAppdevice"
              alt="priority"
            />
            <div className="card-text-box-mobileApp">
              <h3 className="text-title-two text-center banner-text-mobile">Mobile Responsive</h3>
              <p className="text-title-three text-center banner-text-mobile">
                All Templates are designed mobile friendly. it looks perfect on all devices.
              </p>
              <a href="https://store.techx.live/" target="_blank" className="card-btn-mobileApp">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-mobileApp-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-immage-mobileApp-section mt-2">
                <img
                  // src="/assets/images/icons/FB-Phone-GIF.gif"
                  src={baseUrl + "/icons/FB-Phone-GIF.gif"}
                  className="img-fluid card-img-mobileAppdevice mobile-device-image"
                  alt="priority"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="details-mobileApp-section mt-3">
                <h2 className="text-title-one skills-proud-text-mobile something-text-title">
                  Skills For Proud
                </h2>
                <p className="text-title-three text-color-creative mt-1">
                  Mobile app development often involves collaboration among a team of professionals with different skills, including developers, designers, testers, and project managers. Our team has good developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-mobileApp-section">
        <Slider {...settings} style={{ width: "90vw", margin: "auto" }}>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C1.png"
              src={baseUrl + "/icons/Home-1-C1.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C2.png"
              src={baseUrl + "/icons/Home-1-C2.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C5.png"
              src={baseUrl + "/icons/Home-1-C5.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C4.png"
              src={baseUrl + "/icons/Home-1-C4.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C5.png"
              src={baseUrl + "/icons/Home-1-C5.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
          <div className="image-section-slider-mobileApp">
            <img
              // src="/assets/images/icons/Home-1-C1.png"
              src={baseUrl + "/icons/Home-1-C1.png"}
              className="img-fluid slider-icon-mobileApp"
              alt="priority"
            />
          </div>
        </Slider>
      </div>
      <ThemeSetting />
    </div>
  );
}
export default withRouter(MobileApp);
