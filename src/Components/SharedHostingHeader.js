import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import HostingHeaderToggle from './HostingHeaderToggle';

export const SharedHostingHeader = (props) => {
    var history = useHistory();

    return (
        <>

            {/* <!-- Header --> */}
            <div className="header text-lg-left text-center">
                <HostingHeaderToggle currenActiveTab={'shared-hosting'}/>
                <div className="container position-relative">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-xl-6 col-lg-8">
                            {/* <!-- title-5 --> */}
                            <h5 className="title-5">Shared Hosting for high-traffic sites</h5>
                            {/* <!-- title-1 --> */}
                            <h1 className="title-1">Building your own<br/>website just got easier.</h1>
                            {/* <!-- para-1 --> */}
                            <p className="para-1 mb-3">With TechX Shared Hosting, whether you use the Website Builder or traditional WordPress, you get all the features, tools, and guidance you need to build and launch truly impressive WordPress websites.</p>
                            {/* <!-- btn --> */}
                            <button type="button" data-click-type="scroll-to" data-scroll="#se-i" className="btn btn-fill-success shadow-off font-500">Choose a Plan</button>
                        </div>
                    </div>
                    {/* <!-- hero --> */}
                    <img src="https://via.placeholder.com/2000x1320" className="lazy hero img-fluid" alt="Image"/>
                </div>
            </div>
        </>
    )
}

export default withRouter(SharedHostingHeader);