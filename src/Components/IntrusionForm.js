import axios from "axios";
import React, { useState } from "react";

const IntrusionForm = () => {
   
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        logs: '',
        timezone: '',
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
       
        if (formData.logs.length < 20) {
          error.logs = 'logs should be at least 20 characters';
        }
        if (formData.digitalSignature.length < 3) {
          error.digitalSignature = 'Signature should be at least 3 characters';
        }
      
        if (formData.timezone.length < 10) {
          error.timezone = 'timezone content should be at least 10 characters';
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
                    <label className="form-label" htmlFor="logs">
                        <span className="input-title">Evidence or logs of the activity showing source IP.</span>
                        <textarea className={`form-textarea ${(errors.logs)? "error" : ((formData.logs != '')?'valid':'')}`} name="logs" id="logs" required
                        value={formData.logs}
                        // onChange={event => setlogs(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.logs && <span className="error">{errors.logs}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="timezone">
                        <span className="input-title">Your servers time zone</span>
                        <textarea className={`form-textarea ${(errors.timezone)? "error" : ((formData.timezone != '')?'valid':'')}`} name="timezone" id="timezone" required
                        value={formData.timezone}
                        // onChange={event => settimezone(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.timezone && <span className="error">{errors.timezone}</span>}
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

export default IntrusionForm;