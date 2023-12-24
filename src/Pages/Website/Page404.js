import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import Cookie from './Include/Cookie';
import ThemeSetting from './Include/ThemeSetting';

import './styles/404.css';


// import useLoader from "../Services/useLoader";
export const Page404 = (props) => {

    return (
        <>
            {/* <!-- Section --> */}
            <div className="section">
                <div className="container-fluid">
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- row --> */}
                        <div className="row justify-content-center align-items-center">
                            {/* <!-- col --> */}
                            <div className="col-12 text-center mb-2">
                                {/* <!-- hero --> */}
                                <img src="/assets/images/pages/404/404.svg" className="lazy hero img-fluid" alt="Image" />
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-12 text-center">
                                {/* <!-- title-1 --> */}
                                <h1 className="title-1">Look like you've found the<br />doorway to the great nothing.</h1>
                                {/* <!-- para-1 --> */}
                                <p className="para-1 mb-4">You tried to access a page that isn't on out server.</p>
                                {/* <!-- links --> */}
                                <div className="links d-flex align-items-center justify-content-center flex-wrap">
                                    <a href="#" className="link">Home</a>
                                    <a href="#" className="link">Help Center</a>
                                    <a href="#" className="link">Login</a>
                                    <a href="#" className="link">Knowledgebase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ThemeSetting />

            <Cookie />


        </>
    )
}

export default withRouter(Page404);