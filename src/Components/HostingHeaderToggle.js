import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

const HostingHeaderToggle = ({currenActiveTab}) => {


    return (
        <>
            <div className="container-fluid">
                {/* <!-- navigator --> */}
                <div className="navigator d-md-flex align-items-center justify-content-start d-none">
                    {/* <!-- title --> */}
                    <div className="title">Hosting / Servers</div>
                    {/* <!-- item --> */}
                    <Link to="/vps-hosting" className={`item ${(currenActiveTab == 'vps-hosting')? 'active': ''}`}>VPS Hosting</Link>
                    <Link to="/shared-hosting" className={`item ${(currenActiveTab == 'shared-hosting')? 'active': ''}`}>Shared Hosting</Link>
                    <Link to="/dedicated-server" className={`item ${(currenActiveTab == 'dedicated-server')? 'active': ''}`}>Dedicated Servers</Link>
                </div>
            </div>
        </>
    );
};

export default withRouter(HostingHeaderToggle);