import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import FAQ from '../../Components/FAQ';
import SharedHostingHeader from '../../Components/SharedHostingHeader';
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/SharedHosting.css';


// import useLoader from "../Services/useLoader";
export const SharedHosting = (props) => {


    return (
        <>

            <SharedHostingHeader />

            {/* <!-- Section I --> */}
            <div className="se-i-shared-hosting py-90 bg-2" id="se-i">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head mb-5">
                        <h3 className="se-title-1">What about our plans</h3>
                        <h4 className="se-title-2">Shared server hosting plans and pricing</h4>
                    </div>
                    {/* <!-- plans --> */}
                    <div className="plans mb-2">
                        {/* <!-- row --> */}
                        <div className="row">
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-2">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-icon --> */}
                                    <div className="plan-icon">
                                        <img src="/assets/images/pages/shared-hosting/diamond-01.png" className="lazy img-fluid" alt="Icon"/>
                                    </div>
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Basic Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">When you need just one site.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$2.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $9.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Basic</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>1 Website <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>50 GB SSD Storage <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain - 1 year</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free SSL Certificate</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-2">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-icon --> */}
                                    <div className="plan-icon">
                                        <img src="/assets/images/pages/shared-hosting/diamond-02.png" className="lazy img-fluid" alt="Icon"/>
                                    </div>
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Advanced Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">For those running multiple sites.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$5.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $13.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Advanced</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited SSD Storage <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain - 1 year</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Office 365 - 30 days</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-2">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- popular-box --> */}
                                    <div className="popular-box">
                                        <img src="/assets/images/pages/shared-hosting/trending.png" className="lazy img-fluid" alt="Icon"/>
                                    </div>
                                    {/* <!-- plan-icon --> */}
                                    <div className="plan-icon">
                                        <img src="/assets/images/pages/shared-hosting/diamond-03.png" className="lazy img-fluid" alt="Icon"/>
                                    </div>
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Enterprise Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">With added privacy and security features.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$9.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $18.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Enterprise</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited SSD Storage <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain - 1 year</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Office 365 - 30 days</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain Privacy</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Automated Backup - 1 year</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-3 col-md-6 mb-2">
                                {/* <!-- plan --> */}
                                <div className="plan">
                                    {/* <!-- plan-icon --> */}
                                    <div className="plan-icon">
                                        <img src="/assets/images/pages/shared-hosting/diamond-04.png" className="lazy img-fluid" alt="Icon"/>
                                    </div>
                                    {/* <!-- plan-head --> */}
                                    <div className="plan-head">
                                        {/* <!-- plan-name --> */}
                                        <h3 className="plan-name">Premium Plan</h3>
                                        {/* <!-- plan-para --> */}
                                        <p className="plan-para">Get more power with optimized web resources.</p>
                                    </div>
                                    {/* <!-- plan-price --> */}
                                    <div className="plan-price">
                                        {/* <!-- price --> */}
                                        <h4 className="price">$13.45</h4>
                                        {/* <!-- price-comment --> */}
                                        <p className="price-comment">Normally $17.99 - 12/mo term</p>
                                    </div>
                                    {/* <!-- actions --> */}
                                    <div className="actions">
                                        <a href="#" className="btn btn-fill-primary btn-sm shadow-off w-100">Choose Premium</a>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Top Features</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited Websites <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Unlimited SSD Storage <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Custom Themes <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>24/7 Customer Support <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Optimized CPU Resources <span className="float-box" data-text="An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)."></span></li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Website Builder Available</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>WordPress Integration</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Drag and Drop Functionality</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>AI-Driven Templates</li>
                                        </ul>
                                    </div>
                                    {/* <!-- group --> */}
                                    <div className="group">
                                        {/* <!-- title-4 --> */}
                                        <h4 className="title-4">Also Includes</h4>
                                        {/* <!-- list --> */}
                                        <ul className="list list-unstyled">
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain - 1 year</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free CDN Included</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free SSL Certificate</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Office 365 - 30 days</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Domain Privacy</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Automated Backup</li>
                                            <li><img src="/assets/images/pages/shared-hosting/check-circle.svg" className="lazy img-fluid" alt="Icon"/>Free Dedicated IP</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- se-footer --> */}
                    <div className="se-footer d-flex align-items-center justify-content-center flex-wrap">
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check"/>
                                <span className="text">Backups monthly</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check"/>
                                <span className="text">Free white-glove migrations</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check"/>
                                <span className="text">Staging enviroments, ande more.</span>
                        </div>
                    </div>
                </div>
            </div>

            <FAQ />

            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(SharedHosting);