/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import AbuseForm from "../../Components/AbuseForm";
import BotnetForm from "../../Components/BotnetForm";
import ChildAbuseForm from "../../Components/ChildAbuseForm";
import FAQ from "../../Components/FAQ";
import Header from "./Include/Header";
import IntrusionForm from "../../Components/IntrusionForm";
import MalwareForm from "../../Components/MalwareForm";
import OtherForm from "../../Components/OtherForm";
import PhishingForm from "../../Components/PhishingForm";
import SharedHostingHeader from "../../Components/SharedHostingHeader";
import SpamForm from "../../Components/SpamForm";
import TrademarkForm from "../../Components/TrademarkForm";
import ViolentForm from "../../Components/ViolentForm";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
//import Card from '../../Components/UI/Card';
import { BsShieldCheck } from "react-icons/bs";
import {
  MdShield,
  MdSupportAgent,
  MdStorage,
  MdHandshake,
} from "react-icons/md";
import "./styles/Support.css";
import "./styles/WebHosting.css";

export const WebHosting = (props) => {
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
      <div className="container webhosting-all-section">
        <div className="row ">
          <div className="col-lg-6 col-md-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/icons/web-hosting.gif"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="aboutus-text-section">
              <h2 className="AI-text-title-one white-theme-text-AI" >
                Hosting
                Services
              </h2>
              <p className="AI-text-title-three mt-1">
                Secure and managed cloud solutions that drive the outcome-based
                
                Unlock innovation with the right cloud solutions.
              </p>
              <a href="https://store.techx.live/products/cpanel" target="_blank" className="AI-text-title-one-btn">
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>

     
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 mb-2">
              <div className="box-elementors-text webhost-elementor-all-section">
                <h6 className="sec-title-1">WHY CHOOSE US</h6>
                <h3 className="AI-text-title-one AI-about-details white-theme-text-AI">All-In-One Website Solution</h3>
                <p className="AI-text-title-three mt-2">
                  Launch, manage and grow your online presence – from your .com
                  to your SSL – from one single, convenient place.
                </p>
                <a href="https://store.techx.live/products/cpanel" target="_blank" className="btn-elementor-section webhost-btn">
                  More Information
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 mb-2">
              <div className="elementor-boxs-section">
                <div className="box-content-element">
                  <div className="elementor-box one-box">
                    <MdShield className="icon " />
                    <h3>Hosting security</h3>
                    <p className="card-box-des">
                      Our hosting security is on the job 24/7 to monitor
                      suspicious activity and help deflect DDoS attacks.
                    </p>
                  </div>
                  <div className="elementor-box second-box">
                    <MdSupportAgent className="icon" />
                    <h3>24/7 Support</h3>
                    <p className="card-box-des">
                      Whenever you’re stuck, whatever you’re trying to make
                      happen – our Happiness Engineers have the answers.
                    </p>
                  </div>
                </div>
                <div className="box-content-element third-box">
                  <div className="elementor-box">
                    <MdStorage className="icon" />
                    <h3>Global data centers</h3>
                    <p className="card-box-des">
                      Get faster page loads and better visitor experience with
                      global data.
                    </p>
                  </div>
                  <div className="elementor-box fourth-box">
                    <MdHandshake className="icon" />
                    <h3>Reliable hosting</h3>
                    <p className="card-box-des">
                      When your website down, that’s a potentially missed
                      opportunity to engage with a customer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <div className="container webhosting-all-section">
        <div className="row ">
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                // src="/assets/images/pages/about/icons/question.png"
                src={baseUrl + "/theme/webhosting1.gif"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="aboutus-text-section responsive-text-webhost">
              <h3 className="sec-title-1">Our Solutions</h3>
              <h1 className="sec-title-2 ">
                Choosing the right Web-Hosting
                <br /> as per the volume, variety.
              </h1>
              <br />
              <p className="sec-para-1 ">
                Being one of the most sought ‘Database Management Services’
                providers for over two decades, we offer best-in-class services
                to some of the leading companies across industries. Our team of
                experts possess in-depth understanding of both – open and closed
                source databases, and help you to implement the best-suited
                solutions post a thorough evaluation of organizational
                requirements and business goals.
              </p>
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
      {/* <FAQ /> */}
      <ThemeSetting />
    </>
  );
};

export default withRouter(WebHosting);
