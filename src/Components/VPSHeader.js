import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import HostingHeaderToggle from './HostingHeaderToggle';

export const VPSHeader = (props) => {
    var history = useHistory();

    return (
        <>
            {/* <!-- Header --> */}
            <div className="header text-lg-left text-center">
                
                <HostingHeaderToggle currenActiveTab={'vps-hosting'}/>
                <div className="container position-relative">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-xl-6 col-lg-8">
                            {/* <!-- title-5 --> */}
                            <h5 className="title-5">Virtual Private Server</h5>
                            {/* <!-- title-1 --> */}
                            <h1 className="title-1">VPS hosting that puts<br/>the power in your hands.</h1>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 mb-3">With full SSD storage dedicated solely to you, our virtual private server hosting gives you the flexibility and control to build exactly the website you want.</p>
                            {/* <!-- btn --> */}
                            <button type="button" data-click-type="scroll-to" data-scroll="#se-i" className="btn btn-fill-success shadow-off font-500">Choose a Plan</button>
                        </div>
                    </div>
                    {/* <!-- hero --> */}
                    <img src="https://via.placeholder.com/1130x1280" className="lazy hero img-fluid" alt="Image"/>
                </div>
            </div>

        </>
    )
}

export default withRouter(VPSHeader);