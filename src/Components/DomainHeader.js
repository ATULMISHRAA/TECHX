/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";

export const DomainHeader = (props) => {
    var history = useHistory();
    const baseUrl = location.href.includes("trainingncr.info")
    ? `http://trainingncr.info/techx/assets/images`
    : `/assets/images`;
    return (
        <>
       
            <header className="text-lg-left text-center mt-2" style={{ opacity:1 }}>
                <div className="container">
                   
                    <h1 className="title-1 mb-3">Find Perfect Domain<br />Name For Your Website.</h1>
                    
                    <form action="#" method="POST" className="search-form">
                        
                       
                            
                            <span className="input-icon">
                                {/* <img 
                                
                                src={baseUrl+"/pages/domains/icons/search.png"} 
                                className="lazy img-fluid" alt="Search" /> */}
                            </span>
                            
                            <a href=" https://store.techx.live/products/domain-registration" target="blank" className="submit-btn text-uppercase ml-md-1 ml-0 mt-md-0 mt-1">Search</a>
                            <p className="para-1 mt-md-1 mt-2 text-lg-left text-center pb-5">Already have a domain?<a href="https://store.techx.live/products/domain-transfer" target="blank">Transfer it to us</a></p>
                    </form>
                    
                    
                </div>
                
                {/* <input type="text" className="form-input" id="search-input" name="search-input" placeholder="Type the one you want here" /> */}
            </header>
            
        </>
    )
}

export default withRouter(DomainHeader);