/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import Api from "../../../Services/Api";
import Alert from "../../../Services/Alert";

import { useForm } from "react-hook-form";
import { Form, FormLabel, Button, Modal } from "react-bootstrap";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import ThemeSetting from "./ThemeSetting";
const REACT_APP_NAME = process.env.REACT_APP_NAME;

export const Header = (props) => {
  var history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
  const getLocalData = localStorage.getItem("themeId");
  return (
    <>
      <div className="all-header-section">
        
        <header
          className="main-headers"
          style={{
            backgroundImage:
              getLocalData == "dark"
                ? `url(${baseUrl}/icons/rainbow-soap-bubble-on-a-black-background-close-up-of-a-colorful-surface-.jpg)`
                : `url(${baseUrl}/icons/rainbow-soap-remove.png)`,
          }}
        ></header>
        <div className="overlay-section"></div>
        <div className="container content-box">
          <div className="row align-items-center">
            <div className="col-xl-7 text-xl-left text-center">
              <h6 className="title-2 text-uppercase mb-2 mx-xl-0 mx-auto">
                MAKE YOUR BUSINESS ONLINE TODAY
              </h6>
              <h1 className="title-1 text-uppercase mb-2 mx-xl-0 mx-auto">
                We Make IT Simple Faster and Less Expensive
              </h1>
              <p className="para-1 mb-2 mx-xl-0 mx-auto">
                We offer top-notch hosting services designed to elevate your
                online presence. Whether you're a small business, a budding
                entrepreneur, or an established enterprise, we have the perfect
                hosting solution to meet your needs.
              </p>

              <div className="buttons">
                <a
                  href="https://store.techx.live/"
                  className="btn btn-fill-primary shadow-off mr-1 mb-md-0 mb-1"
                  target="_blank"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className="col-xl-5 d-xl-block d-none"></div>
          </div>
        </div>
        <div className="dark-image" data-aos="fade-up">
          <img
            // src="/assets/images/icons/banner_image-2.png"
            src={baseUrl + "/icons/banner_image-2.png"}
            className="img-fluid"
            alt="Icon"
          />
        </div>
      </div>
      <ThemeSetting />
    </>
  );
};

export default withRouter(Header);
