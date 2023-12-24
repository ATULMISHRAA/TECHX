import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/Terms.css';


// import useLoader from "../Services/useLoader";
export const Terms = (props) => {
    const [activeFilter, setActiveFilter] = useState('Terms of Service');
    const handleTabClick = (filter) => {
        console.log(filter);
        setActiveFilter(filter);
    };

    return (
        <>
            {/* <!-- Main --> */}
            <main>
                <div className="container-fluid">
                    {/* <!-- Links Area --> */}
                    <div className="links-area d-lg-none">
                        <a href="#" className={` ${activeFilter === 'Terms of Service' ? 'active' : ''}`} onClick={() => handleTabClick('Terms of Service')}>Terms of Service</a>
                        <a href="#" className={` ${activeFilter === 'Acceptable Use Policy' ? 'active' : ''}`} onClick={() => handleTabClick('Acceptable Use Policy')}>Acceptable Use Policy</a>
                        <a href="#" className={` ${activeFilter === 'Domain Registration Agreement' ? 'active' : ''}`} onClick={() => handleTabClick('Domain Registration Agreement')}>Domain Registration Agreement</a>
                        <a href="#" className={` ${activeFilter === 'Professional Services Agreement' ? 'active' : ''}`} onClick={() => handleTabClick('Professional Services Agreement')}>Professional Services Agreement</a>
                        <a href="#" className={` ${activeFilter === 'VPS Terms of Service' ? 'active' : ''}`} onClick={() => handleTabClick('VPS Terms of Service')}>VPS Terms of Service</a>
                        <a href="#" className={` ${activeFilter === 'Microsoft Customer Agreement' ? 'active' : ''}`} onClick={() => handleTabClick('Microsoft Customer Agreement')}>Microsoft Customer Agreement</a>
                        <a href="#" className={` ${activeFilter === 'Dedicated Mail Policy' ? 'active' : ''}`} onClick={() => handleTabClick('Dedicated Mail Policy')}>Dedicated Mail Policy</a>
                        <a href="#" className={` ${activeFilter === 'Email Policy' ? 'active' : ''}`} onClick={() => handleTabClick('Email Policy')}>Email Policy</a>
                        <a href="#" className={` ${activeFilter === 'Copyright Policy' ? 'active' : ''}`} onClick={() => handleTabClick('Copyright Policy')}>Copyright Policy</a>
                        <a href="#" className={` ${activeFilter === 'Affiliate Agreement' ? 'active' : ''}`} onClick={() => handleTabClick('Affiliate Agreement')}>Affiliate Agreement</a>
                        <a href="#" className={` ${activeFilter === 'Data Request Policy' ? 'active' : ''}`} onClick={() => handleTabClick('Data Request Policy')}>Data Request Policy</a>
                    </div>
                    {/* <!-- Sidebar --> */}
                    <div className="sidebar">
                        {/* <!-- content --> */}
                        <div className="content">
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Terms of Service' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Terms of Service')}>Terms of Service</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item active">
                                        <a href="#additional-policies-and-agreements-section" className="menu-link">1. Additional Policies and Agreements</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#account-eligibility-section" className="menu-link">2. Account Eligibility</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#transfers-section" className="menu-link">3. Transfers</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#techx-content-section" className="menu-link">4. TechX Content</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#user-content-section" className="menu-link">5. User Content</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#compliance-with-applicable-law-section" className="menu-link">6. Compliance with Applicable Law</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">7. Third Party Products and Services</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">8. Prohibited Persons (Countries, Entities, And Individuals)</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">9. Account Security and TechX Systems</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">10. HIPAA Disclaimer. We are not "HIPAA compliant."</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">11. Compatibility with the Services</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">12. Billing and Payment Information</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">13. Money-Back Guarantee</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">14. Cancellations and Refunds</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">15. Resource Usage</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">16. Uptime Guarantee</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">17. Reseller Terms and Client Responsibility</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">18. Shared (non-reseller accounts)</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">19. Dedicated Servers</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">20. Appointment Booking</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">21. Email Marketing</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">22. Store</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Acceptable Use Policy' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Acceptable Use Policy')}>Acceptable Use Policy</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Prohibited Uses</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Enforcement</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Reporting Violations</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Domain Registration Agreement' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Domain Registration Agreement')}>Domain Registration Agreement</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Definitions</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Obligations of the registrant</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Representations and warranties</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Dispute process</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Term of agreement / Renewals</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Fees / Renewal</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Registrant - Registrant Transfer</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Change of Registrant</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Designated agent</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Professional Services Agreement' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Professional Services Agreement')}>Professional Services Agreement</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">term and termination</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">scope of services</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">customer responsibilities</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">license grant</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">website design</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">marketing services</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">wp live</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'VPS Terms of Service' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('VPS Terms of Service')}>VPS Terms of Service</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Microsoft Customer Agreement' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Microsoft Customer Agreement')}>Microsoft Customer Agreement</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Dedicated Mail Policy' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Dedicated Mail Policy')}>Dedicated Mail Policy</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Email Policy' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Email Policy')}>Email Policy</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Copyright Policy' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Copyright Policy')}>Copyright Policy</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Affiliate Agreement' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Affiliate Agreement')}>Affiliate Agreement</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- item --> */}
                            <div className={`item has-menu ${activeFilter === 'Data Request Policy' ? 'open-menu' : ''}`}>
                                <a href="#" className="item-link" onClick={() => handleTabClick('Data Request Policy')}>Data Request Policy</a>
                                {/* <!-- menu --> */}
                                <ul className="menu list-unstyled">
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">About TechX Copilot telemetry</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">TechX Copilot telemetry terms</a>
                                    </li>
                                    {/* <!-- menu-item --> */}
                                    <li className="menu-item">
                                        <a href="#" className="menu-link">Research recitation</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Content --> */}
                    <div className="content">
                        {/* <!-- title-1 --> */}
                        <h1 className="title-1">Terms of Use</h1>
                        {/* <!-- title-3 --> */}
                        <h2 className="title-3">September 2021</h2>
                        {/* <!-- para-1 --> */}
                        <p className="para-1">We’ve updated Section 14 (Cancellations and Refunds), effective August 5, 2021, to clarify that purchases of certain add-on products such as SiteLock are non-refundable. On 6/17/2021, we revised Section 15 (Resource Usage) to clarify our policy on resource usage and Section 24 (WordPress Plugins) to include new terms applicable to users of WordPress Plugins. Please read the terms below.</p>
                        {/* <!-- para-1 --> */}
                        <p className="para-1">These Terms of Service (the "Agreement") are an agreement between TechX.live,  ("TechX", "us", "our", or the “Company”) and you ("User" or "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the products and services made available by TechX and of the TechX.live website (collectively, the "Services"). By using the Services, you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Services.</p>

                        {/* <!-- Additional Policies and Agreements --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="additional-policies-and-agreements-section">1. Additional Policies and Agreements</h2>
                            {/* <!-- list-level-i --> */}
                            <ul className="list-level-i">
                                {/* <!-- list-item --> */}
                                <li className="list-item">
                                    Use of the Services is also governed by the following policies, which are incorporated by reference. By using the Services, you also agree to the terms of the following policies.
                                    {/* <!-- list-level-ii --> */}
                                    <ul className="list-level-ii">
                                        <li><a href="#" className="list-link">Privacy Notice</a></li>
                                        <li><a href="#" className="list-link">Acceptable Use Policy</a></li>
                                        <li><a href="#" className="list-link">Copyright Infringement Policy</a></li>
                                    </ul>
                                </li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">Additional terms may also apply to certain Services, and are incorporated by reference herein as applicable. For example, if you register a domain name with us, then the Domain Registration Agreement will also apply to you and would be incorporated herein.</li>
                            </ul>
                        </section>

                        {/* <!-- Account Eligibility --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="account-eligibility-section">2. Account Eligibility</h2>
                            {/* <!-- list-level-i --> */}
                            <ul className="list-level-i">
                                {/* <!-- list-item --> */}
                                <li className="list-item">
                                    By registering for or using the Services, you represent and warrant that:
                                    {/* <!-- list-level-ii --> */}
                                    <ul className="list-level-ii">
                                        <li>You are eighteen (18) years of age or older. The Services are intended solely for Users who are eighteen (18) years of age or older. Any registration, use of or access to the Services, by anyone under eighteen (18) is unauthorized and is a violation of this Agreement.</li>
                                        <li>If you use the Services on behalf of another party you agree that you are authorized to bind such other party to this Agreement and to act on such other party's behalf with respect to any actions you take in connection with the Services.</li>
                                    </ul>
                                </li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">It is your responsibility to provide accurate, current, and complete information on the registration forms, including an email address that is different from the domain you are signing up under. If there is ever an abuse issue or we need to contact you, we will use the primary email address we have on file. It is your responsibility to ensure that the contact information for your account, including any domain accounts is accurate, correct and complete at all times. TechX is not responsible for any lapse in the Services, including without limitation, any lapsed domain registrations due to outdated contact information being associated with the domain. If you need to verify or change your contact information, you may utilize the <a href="#" className="list-link">TechX Billing and Support Portal</a> to update your contact information. Providing false contact information of any kind may result in the termination of your account. In dedicated server purchases or certain other cases, you may be required to provide government issued identification and possibly a scan of the credit card used for verification purposes. Failure to provide the information requested may result in your order being denied.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">You agree to be fully responsible for all use of your account and for any actions that take place through your account. It is your responsibility to maintain the confidentiality of your password and other information related to the security of your account.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">Any dedicated IP order in addition to those provided with a hosting package may be subject to IP justification. IP justification practices are subject to change to remain in compliance with the policies of the American Registry for Internet Numbers (ARIN). We reserve the right to deny any dedicated IP request based on insufficient justification or current IP utilization.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">The Service and any data you provide to TechX is hosted in the United States (U.S.) unless otherwise provided. If you access the Service from outside of the U.S., you are voluntarily transferring information (potentially including personally-identifiable information) and content to the U.S. and you agreeing that our collection, use, storage and sharing of your information and content is subject to the laws of the U.S., and not necessarily of the jurisdiction in which you are located.</li>
                            </ul>
                        </section>

                        {/* <!-- Transfers --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="transfers-section">3. Transfers</h2>
                            {/* <!-- para-1 --> */}
                            <p className="para-1">Our Transfers Team will make every effort to help you move your website to us. Transfers are provided as a courtesy service. We do not make any guarantees regarding the availability, possibility, or time required to complete an account transfer. Each hosting company is configured differently, and some hosting platforms save data in an incompatible or proprietary format, which may make it extremely difficult, if not impossible, to migrate some or all account data. In some cases we may not be able to assist you in a transfer of data from an old host. The free transfer service is available for thirty (30) days from your sign up date. Transfers outside of the thirty (30) day period will incur a charge; please contact a member of our Transfers department to receive a price quote. In no event shall TechX be held liable for any lost or missing data or files resulting from a transfer to or from TechX. You are solely responsible for backing up your data in all circumstances.</p>
                        </section>

                        {/* <!-- TechX Content --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="techx-content-section">4. TechX Content</h2>
                            {/* <!-- list-level-i --> */}
                            <ul className="list-level-i">
                                {/* <!-- list-item --> */}
                                <li className="list-item">Except for User Content (as defined below), all content made available through the Services, including images made available through website builder tools provided by TechX (the “Licensed Images”), designs, templates, text, graphics, images, video, information, software, audio and other files, and their selection and arrangement, and all software used to provide the Services (collectively with the Licensed Images, "TechX Content"), are the property of TechX or its licensors. No TechX Content may not be modified, copied, distributed, framed, reproduced, republished, downloaded, scraped, displayed, posted, transmitted, sold or exploited for any purpose in any form or by any means, in whole or in part, other than as expressly permitted in this Agreement. You may not, directly or indirectly, reverse engineer, decompile, disassemble, or otherwise attempt to derive source code or other trade secrets from any TechX Content.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">To the extent applicable, you are granted a limited, revocable, non-sublicensable, license to use the Licensed Images solely in connection with the Services. You are prohibited from using any Licensed Images: (i) with pornographic, defamatory, or unlawful content or in such a manner that infringes upon any third party's trademark or intellectual property rights; (ii) as a trademark, service mark, or logo; and (iii) portraying any person depicted therein (a "Model") in a way that a reasonable person would find offensive, including but not limited to depicting a Model: (a) in connection with pornography, "adult videos", adult entertainment venues, escort services, dating services, or the like; (b) in connection with the advertisement or promotion of tobacco products; (c) as endorsing a political party, candidate, elected official, or opinion; (d) as suffering from, or medicating for, a physical or mental ailment; or (e) engaging in immoral or criminal activities.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">Any use of TechX Content, other than as specifically authorized herein, is prohibited and will automatically terminate your rights to use the Services and any TechX Content. All rights to use TechX Content that are not expressly granted in this Agreement are reserved by TechX and TechX's licensors.</li>
                            </ul>
                        </section>

                        {/* <!-- User Content --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="user-content-section">5. User Content</h2>
                            {/* <!-- list-level-i --> */}
                            <ul className="list-level-i">
                                {/* <!-- list-item --> */}
                                <li className="list-item">You may be able to upload, store, publish, display and distribute information, text, photos, videos, emails, and other content on or through the Services (collectively, "User Content"). User Content includes any content posted by you or by users of any of your websites hosted through the Services ("User Websites"). You are solely responsible for any and all User Content and any transactions or other activities conducted on or through User Websites. By posting or distributing User Content on or through the Services, you represent and warrant to TechX that (i) you have all the necessary rights to post or distribute such User Content, and (ii) your posting or distribution of such User Content does not infringe or violate the rights of any third party.<br /><br />Solely for purposes of providing the Services, you hereby grant to TechX a non-exclusive, royalty-free, worldwide right and license to: (i) use, reproduce, publicly perform, publicly display, modify, translate, excerpt (in whole or in part), publish and distribute User Content; and (ii) make archival or back-up copies of User Content and User Websites. Except for the rights expressly granted herein, TechX does not acquire any right, title or interest in or to the User Content, all of which shall remain solely with you.</li>
                                {/* <!-- list-item --> */}
                                <li className="list-item">TechX exercises no control over, and accepts no responsibility for, User Content or the content of any information passing through TechX's computers, network hubs and points of presence or the Internet. TechX does not monitor User Content. However, you acknowledge and agree that TechX may, but is not obligated to, immediately take any corrective action in TechX's sole discretion, including without limitation removal of all or a portion of the User Content or User Websites, and suspend or terminate any and all Services without refund if you violate the terms of this Agreement. You hereby agree that TechX shall have no liability due to any corrective action that TechX may take.</li>
                            </ul>
                        </section>

                        {/* <!-- Compliance with Applicable Law --> */}
                        <section>
                            {/* <!-- title-2 --> */}
                            <h2 className="title-2" id="compliance-with-applicable-law-section">6. Compliance with Applicable Law</h2>
                            {/* <!-- list-level-i --> */}
                            <ul className="list-level-i">
                                {/* <!-- list-item --> */}
                                <li className="list-item">You agree to comply with all applicable laws, rules, and regulations, including without limitation all local rules where you reside or your organization is location regarding User Content, User Websites, online activities, email and your use of the Services. More specifically, but without limitation, you agree to comply with all applicable laws regarding the transmission of technical data exported to or from the United States or the country in which you reside. The Services are controlled and operated by us from our offices within the United States (although we may share data with third parties around the world to assist us in providing the Services as further described in our Privacy Notice) and we make no representation that the Services are appropriate or available for use in other locations. Those who access the Services from other locations do so at their own initiative and risk, and are fully responsible for compliance with all applicable laws in those locations. We do not offer the Services where prohibited by law.<br /><br />For the purposes of European Directive 95/46/EC, the General Data Protection Regulation 2016/679) (“GDPR”) and any applicable national implementing laws in your jurisdiction, and with respect to your subscribers’ or customers’ personal data, you acknowledge and agree that you are the Controller (as that term is defined in the GDPR), and we are a Processor (as that term is defined in the GDPR) insofar as you may store personal data through your use of our Services only as permitted and subject to the terms of this Agreement. You also acknowledge and agree that you are responsible for complying with all obligations of a data controller under applicable law (including the GDPR).<br /><br />To the extent the GDPR applies to you, you represent and warrant that in using our Services, you will clearly describe in writing how you plan to use any personal data collected and you will ensure you have a legitimate legal basis to transfer such personal data to us and that you have the necessary permission to allow us to receive and process (e.g., store) such personal data on your behalf. The additional data processing terms set forth here shall apply where you are a Controller subject to the GDPR.</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </main>
            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(Terms);