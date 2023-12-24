import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import DedicatedServerHeader from '../../Components/DedicatedServerHeader';
import DedicatedServerHostingPlans from '../../Components/DedicatedServerHostingPlans';
import FAQ from '../../Components/FAQ';
import VPSPlans from '../../Components/VPSPlans';
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/DedicatedServer.css';


// import useLoader from "../Services/useLoader";
export const DedicatedServer = (props) => {


    return (
        <>
            <DedicatedServerHeader />

            {/* <!-- Section I --> */}
            <div className="se-i-dedicate-server py-120" id="se-i">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head mb-5">
                        <h3 className="se-title-1">What about our plans</h3>
                        <h4 className="se-title-2">Dedicated Server Hosting plans and pricing:</h4>
                    </div>

                    <DedicatedServerHostingPlans />
                    
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

            <VPSPlans/>
            <FAQ />

            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(DedicatedServer);