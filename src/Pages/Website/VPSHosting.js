import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import FAQ from '../../Components/FAQ';
import VPSHeader from '../../Components/VPSHeader';
import VPSHostingPlans from '../../Components/VPSHostingPlans';
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/VPS.css';


// import useLoader from "../Services/useLoader";
export const VPSHosting = (props) => {


    return (
        <>

            <VPSHeader />

            {/* <!-- Section I --> */}
            <div className="se-i-vps py-120 bg-2" id="se-i">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head mb-5">
                        <h3 className="se-title-1">What about our plans</h3>
                        <h4 className="se-title-2">Self &amp; Fully Managed VPS Hosting plans</h4>
                    </div>
                    <VPSHostingPlans />
                    {/* <!-- se-footer --> */}
                    <div className="se-footer d-flex align-items-center justify-content-center flex-wrap">
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Backups monthly</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Free white-glove migrations</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
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

export default withRouter(VPSHosting);