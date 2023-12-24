import axios from "axios";
import React, { useState } from "react";

const AbuseForm = () => {
   
    const [formData, setFormData] = useState({
        copyrightOwnerFullName: '',
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        digitalSignature: '',
        infringingContent: '',
        originalContent: ''
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
        if (formData.copyrightOwnerFullName.length < 6) {
          error.copyrightOwnerFullName = 'Full Name should be at least 6 characters';
        }
        if (formData.fullName.length < 6) {
          error.fullName = 'Full Name should be at least 6 characters';
        }
        if (formData.address.length < 6) {
          error.address = 'Address should be at least 6 characters';
        }
        if (!formData.phoneNumber) {
          error.phoneNumber = 'Phone number is required';
        }
        if (!formData.email) {
          error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          error.email = 'Email is invalid';
        }
        if (formData.digitalSignature.length < 3) {
          error.digitalSignature = 'Signature should be at least 3 characters';
        }
        if (formData.infringingContent.length < 30) {
          error.infringingContent = 'Infringing content should be at least 30 characters';
        }
        if (formData.originalContent.length < 30) {
          error.originalContent = 'Original content should be at least 30 characters';
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
                <div className="col-lg-4 col-md-6">
                    <label className="form-label">
                        <span className="input-title">Copyright Owners Full Name</span>
                        <input
                            className={`form-input ${(errors.copyrightOwnerFullName)? "error" : ((formData.copyrightOwnerFullName != '')?'valid':'')}`}
                            type="text"
                            required
                            value={formData.copyrightOwnerFullName}
                            name="copyrightOwnerFullName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.copyrightOwnerFullName && <span className="error">{errors.copyrightOwnerFullName}</span>}
                        <span className="notify notify-valid">
                            <img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" />
                        </span>
                        <span className="notify notify-error">
                            <img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" />
                        </span>
                    </label>
                </div>
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-4 col-md-6">
                    <label className="form-label">
                        <span className="input-title">Address</span>
                        <input
                            className={`form-input ${(errors.address)? "error" : ((formData.address != '')?'valid':'')}`}
                            type="text"
                            required
                            value={formData.address}
                            name="address"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.address && <span className="error">{errors.address}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-4 col-md-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="phoneNumber">
                        <span className="input-title">Phone Number</span>
                        <input className={`form-input ${(errors.phoneNumber)? "error" : ((formData.phoneNumber != '')?'valid':'')}`} type="tel" name="phoneNumber" id="phoneNumber" required 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-4 col-md-6">
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
                <div className="col-lg-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="infringingContent">
                        <span className="input-title">URL(s) and/or a description of the infringing content</span>
                        <textarea className={`form-textarea ${(errors.infringingContent)? "error" : ((formData.infringingContent != '')?'valid':'')}`} name="infringingContent" id="infringingContent" required
                        value={formData.infringingContent}
                        // onChange={event => setInfringingContent(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.infringingContent && <span className="error">{errors.infringingContent}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-lg-6">
                    {/* <!-- form-label --> */}
                    <label className="form-label" htmlFor="originalContent">
                        <span className="input-title">URL(s) and/or a description of the original content</span>
                        <textarea className={`form-textarea ${(errors.originalContent)? "error" : ((formData.originalContent != '')?'valid':'')}`} name="originalContent" id="originalContent" required
                        value={formData.originalContent}
                        // onChange={event => setOriginalContent(event.target.value)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.originalContent && <span className="error">{errors.originalContent}</span>}
                        <span className="notify notify-valid"><img src="/assets/images/pages/abuse/fi-sr-check.svg" className="lazy img-fluid" alt="Icon" /></span>
                        <span className="notify notify-error"><img src="/assets/images/pages/abuse/fi-sr-cross.svg" className="lazy img-fluid" alt="Icon" /></span>
                    </label>
                </div>
                {/* <!-- col --> */}
                <div className="col-12 mb-3">
                    {/* <!-- form-para --> */}
                    <p className="form-para">By submiting this form, you attest, under penalty of perjury, that (1) you have a good faith belief that use of the material in this report is not authorized by the copyright owner, its agent, or the law; (2) you are the copyright owner or authorized to act on behalf of the copyright owner; and (3) you understand, under 17 U.S.C. § 512(f), that you may be liable for any damages, including costs and attorneys fees, if you knowingly materially misrepresent that the material you are reporting is infringing.</p>
                </div>
                {/* <!-- col --> */}
                <div className="col-12">
                    <button type="button" onClick={handleSubmit} className="btn btn-fill-primary shadow-off" name="dmcaForm">Report Abuse</button>
                </div>
            </div>
        </form>
    );
};

export default AbuseForm;