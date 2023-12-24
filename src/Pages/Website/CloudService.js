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
import {
  FaShieldAlt,
  FaGlobe,
  FaClipboardCheck,
  FaGoogleDrive,
  FaUbuntu,
  FaRandom,
} from "react-icons/fa";
import {
  BsFillBugFill,
  BsFillChatLeftTextFill,
  BsTelephoneFill,
  BsXbox,
} from "react-icons/bs";
import "./styles/CloudService.css";
//import './styles/DatabaseService.css';

// import useLoader from "../Services/useLoader";
export const CloudService = (props) => {
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
                src={baseUrl + "/theme/cloud-header.gif"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h2 className="AI-text-title-one white-theme-text-AI color-about mt-1">
                Cloud
                
                Services
                
                Cloud
                
                Consulting !
              </h2>
              <p className="AI-text-title-three mt-1 mb-1">
                Secure and managed cloud solutions that drive the outcome-based
                <br />
                modernization you need.
                <br />
                Unlock innovation with the right cloud solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="se-iv-home py-90 bg-2">
        <div className="container">
          {/* <!-- se-head --> */}
          <div className="se-head">
            <h3 className="se-title-1">Why our Cloud Service</h3>
            <h4 className="se-title-2">
              Get Your Enterprise on auto-scable secure cloud platform.
            </h4>
          </div>
          {/* <!-- space --> */}
          <div className="space space-sm"></div>
          {/* <!-- row --> */}
          <div className="row text-center">
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
                <h3 className="box-title">Reduce Risk</h3>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Our services are designed with integrated industry best
                  practices, processes, and methodologies that are reinforced by
                  24-7 support, that helps your service runs smoothly, minimizes
                  the risk of failure and drives your ongoing success.
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
                <h4 className="box-title">Secure</h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Our modern security and privacy measures safeguard your data
                  and our time-tested processes coupled with our cloud
                  governance, compliance, and visibility features provide
                  unparalleled transparency and control over your IT environment
                  from our user-friendly digital self-service model.
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
                <h4 className="box-title">Manage</h4>
                {/* <!-- box-para --> */}
                <p className="box-para">
                  Prioritize your business objectives by entrusting the
                  management of your IT estate to the Kyndryl experts. Our
                  intelligent monitoring and pre-emptive management of hybrid
                  multi-cloud environments allow you to optimize the potential
                  of your cloud environment, giving you the freedom to focus on
                  what truly matters.
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

      <div className="container-fluid pt-2 webhosting-all-section cloud-banner-section">
        <div className="row ">
          <div className="col-lg-6">
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/theme/cloud1.gif"}
                className=" img-fluid"
                alt="Image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aboutus-text-section">
              <h1 className="sec-title-2 mt-1">
                Managed Cloud Services
                <br />& Cloud Migration
              </h1>
              <br />
              <p className="sec-para-1 mb-1">
                With a suite of unparalleled capabilities across public,
                private, and hybrid cloud, Kyndryl empowers enterprises to
                optimize and modernize their infrastructure and applications,
                enabling them to fully harness the potential of the cloud, while
                also offering an array of managed services that cover the entire
                IT stack.
              </p>
            </div>
          </div>
        </div>
      </div>

      



<div className="container-fluid webhosting-all-section cloud-banner-section">
        <div className="row cloud-row-reverse">
          <div className="col-lg-6">
          <div className="aboutus-text-section">
          <h1 className="sec-title-2 mb-2">
                Unlock innovation
                <br />
                With the right
                <br />
                Cloud solutions{" "}
              </h1>
              <p className="sec-para-1 mb-1">
                Cloud has emerged as an enabler of transformation, but there are
                still significant barriers to cloud expansion and many
                enterprises prove transformation value or to tie IT value to
                business outcomes. Kyndryl Cloud Services provide a 360-degree
                approach identifying and solving challenges and driving
                transformation forward.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            
            <div className="image-aboutus-section">
              <img
                src={baseUrl + "/theme/cloud2.gif"}
                className=" img-fluid"
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
      {/* <FAQ /> */}
      <ThemeSetting />

      <Cookie />
    </>
  );
};

export default withRouter(CloudService);
