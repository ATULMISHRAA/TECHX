import axios from "axios";
import React, { useState } from "react";

const ViolentForm = () => {
   
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        urls: '',
        info: '',
        digitalSignature: '',
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (event) => {
        // if (event.target.value) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
            validate();
        // }
      };
    
      const validate = (inputName = '') => {
        const error = {};
       
        if (formData.fullName.length < 6) {
          error.fullName = 'Full Name should be at least 6 characters';
        }
        
        if (!formData.email) {
          error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          error.email = 'Email is invalid';
        }
       
        if (formData.urls.length < 20) {
          error.urls = 'urls should be at least 20 characters';
        }
        if (formData.info.length < 20) {
          error.info = 'info should be at least 20 characters';
        }
        if (formData.digitalSignature.length < 3) {
          error.digitalSignature = 'Signature should be at least 3 characters';
        }
    

        // if (inputName != '') {
        //     // validate specific input
        //     if (error[inputName]) {
        //         // console.log("i'm reached here "+ inputName);
        //         let specifiError = error[inputName];
        //         setErrors({[inputName]:specifiError});
        //         return Object.keys(error).length === 0;
        //     }
        // }else{
            
            setErrors(error);
            return Object.keys(error).length === 0;
        // }
        
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
          // submit the form

          // If form is valid, make the API call
            axios.post("your-api-endpoint", formData)
            .then(response => {
                // Handle success response
            })
            .catch(error => {
                // Handle error response
            });

        }
      };
      const handleBlur = e => {
        // validate(e.target.name);
      };
      
    return (
        <form className="abuse-form">
            <div className="row">
                
                <div className="col-lg-6 col-md-6">
                    <label className="form-label">
                        <span className="input-title">Your Full Name</span>
                        <input
                            className={`form-input ${(errors.fullName)? "error" : ((formData.fullName != '')?'valid':'')}`}
                            type="text"
                            required
                            value={formData.fullName}
                            name="fullName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                        <span className="notify notify-valid">
                            <img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" />
                        </span>
                        <span className="notify notify-error">
                            <img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" />
                        </span>
                    </label>
                </div>
              
                {/* <!-- col --> */}
                <div className="col-lg-6 col-md-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="email">
                        <span className="input-title">Email Address</span>
                        <input className={`form-input ${(errors.email)? "error" : ((formData.email != '')?'valid':'')}`} type="email" name="email" id="email" required 
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                
                
                
                
                {/* <!-- col --> */}
                <div className="col-lg-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="urls">
                        <span className="input-title">Evidence URLs</span>
                        <textarea className={`form-textarea ${(errors.urls)? "error" : ((formData.urls != '')?'valid':'')}`} name="urls" id="urls" required
                        value={formData.urls}
                        // onChange={event => seturls(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.urls && <span className="error">{errors.urls}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
               
               {/* <!-- col --> */}
               <div className="col-lg-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="info">
                        <span className="input-title">Additional information</span>
                        <textarea className={`form-textarea ${(errors.info)? "error" : ((formData.info != '')?'valid':'')}`} name="info" id="info" required
                        value={formData.info}
                        // onChange={event => setinfo(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.info && <span className="error">{errors.info}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-4 col-md-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="digitalSignature">
                        <span className="input-title">Digital Signature</span>
                        <input className={`form-input ${(errors.digitalSignature)? "error" : ((formData.digitalSignature != '')?'valid':'')}`} type="text" name="digitalSignature" id="digitalSignature" required
                        value={formData.digitalSignature}
                        onChange={handleChange}
                        onBlur={handleBlur}
                         />
                        {errors.digitalSignature && <span className="error">{errors.digitalSignature}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-12 mb-3">
                    {/* <!-- form-para --> */}
                    <p className="form-para">By entering your name, you affirm all information is true and accurate.<br />All information submitted to us may be relayed to the customer during our remediation process.</p>
                </div>
                {/* <!-- col --> */}
                <div className="col-12">
                    <button type="button" onClick={handleSubmit} className="btn btn-fill-primary shadow-off" name="dmcaForm">Report Abuse</button>
                </div>
            </div>
        </form>
    );
};

export default ViolentForm;