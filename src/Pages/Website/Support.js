import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import AbuseForm from '../../Components/AbuseForm';
import BotnetForm from '../../Components/BotnetForm';
import ChildAbuseForm from '../../Components/ChildAbuseForm';
import FAQ from '../../Components/FAQ';
import IntrusionForm from '../../Components/IntrusionForm';
import MalwareForm from '../../Components/MalwareForm';
import OtherForm from '../../Components/OtherForm';
import PhishingForm from '../../Components/PhishingForm';
import SharedHostingHeader from '../../Components/SharedHostingHeader';
import SpamForm from '../../Components/SpamForm';
import TrademarkForm from '../../Components/TrademarkForm';
import ViolentForm from '../../Components/ViolentForm';
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';


import './styles/Support.css';


// import useLoader from "../Services/useLoader";
export const Support = (props) => {

    
    const handleSupportClick = (e) => {
        
        if (e.target.classList.contains('item') || e.target.classList.contains('item-head') || e.target.classList.contains('accordion-title') || e.target.classList.contains('accordion-para')) {
            console.log(e.target);
            const items = document.querySelectorAll('.item');

            items.forEach(item => {
                if (item !== e.currentTarget) {
                    item.classList.remove('open');
                    if(item.querySelector('.item-body')){
                        item.querySelector('.item-body').style.display = 'none';
                    }
                    

                }
            });
            // e.currentTarget.classList.toggle('open');
            // const qb = e.currentTarget.querySelector('.item-body');

            // if (qb) {
            //     qb.style.display = qb.style.display === 'block' ? 'none' : 'block';
            // }

            if (e.target.classList.contains('item') || e.target.classList.contains('item-head') || e.target.classList.contains('accordion-title') || e.target.classList.contains('accordion-para')) {
                e.currentTarget.classList.toggle('open');
                const qb = e.currentTarget.querySelector('.item-body');
                if (qb) {
                    qb.style.display = qb.style.display === 'block' ? 'none' : 'block';
                }
            }else{
                // if (!e.target.classList.contains('item-body')) {
                    // e.currentTarget.classList.toggle('open');
                    // const qb = e.currentTarget.querySelector('.item-body');
                    // if (qb) {
                    //   qb.style.display = qb.style.display === 'block' ? 'none' : 'block';
                    // }
                //   }
            }
        }
        

    };
    return (
        <>

            {/* <!-- Section I --> */}
            <div className="se-i-support py-120">
                <div className="container">
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- title-1 --> */}
                        <h1 className="title-1">Report abuse and illegal content</h1>
                        {/* <!-- para-1 --> */}
                        <p className="para-1">If you want to report an Internet breach to TechX, select an option below to create your report. Please provide the necessary details so that our team can investigate your complaint.<br />If you have submitted a report by e-mail and have been forwarded to this form, your details are<br />incomplete. In order for us to process your request, you must complete the form below and provide all the necessary information.</p>
                    </div>
                    {/* <!-- accordion --> */}
                    <div className="accordion">
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">DMCA Takedown</h4>
                                <p className="accordion-para">DMCA—is a federal law that helps copyright holders.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <AbuseForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Trademark Infringement</h4>
                                <p className="accordion-para">Trademark abuse is the unauthorized use of a trademark in connection with services in a way that is likely to cause confusion about the source of the goods or services.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <TrademarkForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Spam</h4>
                                <p className="accordion-para">Spam is Unsolicited Bulk Email distributed to recipients who have not provided direct consent.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <SpamForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Phishing</h4>
                                <p className="accordion-para">Phishing is the fraudulent practice of sending emails purporting to be from reputable companies in order to induce individuals to reveal personal information.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <PhishingForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Malware</h4>
                                <p className="accordion-para">Malware is software that is intended to damage or disable computers and computer systems.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <MalwareForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Botnet</h4>
                                <p className="accordion-para">A botnet is a network of private computers infected with malicious software and controlled as a group without the owners' knowledge.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <BotnetForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Intrusion/exploit attempts (Bruteforce, Scans etc)</h4>
                                <p className="accordion-para">Intrusion/exploit attempts (Bruteforce, Scans etc) attacks are when malicious applications makes several attempts to access, crack, or locate vulnerabilities on machines they have no right accessing. This is a technique commonly employed by malicious actors in order to find an attack vector to utilize against a server/website.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <IntrusionForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Child Abuse</h4>
                                <p className="accordion-para">Child Abuse is physical maltreatment or sexual molestation of a child.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <ChildAbuseForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Violent Threats and Harassment</h4>
                                <p className="accordion-para">Violent threats and harassment are any sort of content pertaining to intent to harm a person(s). These can be threats of physical altercation or content to cause emotional distress.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <ViolentForm />
                            </div>
                        </div>
                        {/* <!-- item --> */}
                        <div className="item" onClick={(e) => handleSupportClick(e)}>
                            {/* <!-- item-head --> */}
                            <div className="item-head">
                                <h4 className="accordion-title">Other</h4>
                                <p className="accordion-para">Please utilize this form to provide TechX with evidence of any abuse outside of our categories listed.</p>
                            </div>
                            {/* <!-- item-body --> */}
                            <div className="item-body">
                                {/* <!-- abuse-form --> */}
                                <OtherForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Notifications --> */}
            <div className="notifications">
                {/* <!-- notify-i --> */}
                <div className="notify notify-1 success">
                    {/* <!-- div --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- icon --> */}
                        <img src="/assets/images/theme/smile.gif" className="img-fluid mr-1" width="70" alt="Xerox" />
                        {/* <!-- para-1 --> */}
                        <p className="para-1 mb-0"><span>Success!,</span> your request has been successfully sent!, we will reply to you soon.</p>
                    </div>
                    {/* <!-- close-btn --> */}
                    <button className="close-notify-btn close__notify__btn d-flex align-items-center justify-content-center" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="close">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292894 11.7071C-0.0976312 11.3166 -0.0976312 10.6834 0.292894 10.2929L4.58579 6L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893Z"></path>
                        </svg>
                    </button>
                </div>
                {/* <!-- notify-i --> */}
                <div className="notify notify-1 fail">
                    {/* <!-- div --> */}
                    <div className="d-flex align-items-center">
                        {/* <!-- icon --> */}
                        <img src="/assets/images/theme/emoji_2.gif" className="img-fluid mr-1" width="70" alt="Xerox" />
                        {/* <!-- para-1 --> */}
                        <p className="para-1 mb-0"><span>Sorry!,</span> it seems to be a server problem right now!, please try again later.</p>
                    </div>

                    {/* <!-- close-btn --> */}
                    <button className="close-notify-btn close__notify__btn d-flex align-items-center justify-content-center" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="close">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683418 12.0976 0.292894 11.7071C-0.0976312 11.3166 -0.0976312 10.6834 0.292894 10.2929L4.58579 6L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893Z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Sounds --> */}
            <audio id="success-notify" preload="auto">
                <source src="assets/sounds/success_notification.mp3" />
            </audio>
            <audio id="failure-notify" preload="auto">
                <source src="assets/sounds/failure_notification.mp3" />
            </audio>
            <ThemeSetting />
            <FAQ/>
            <Cookie />


        </>
    )
}

export default withRouter(Support);