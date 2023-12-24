import { useEffect } from 'react';
const Cookie = (props) => {

    // FOR: Cookies

    // Cookies Dialog Cookie
    useEffect(() => {
        if (document.cookie.indexOf("cookies=true") >= 0) {
            if (document.querySelector('#cookies-dialog') != null) {
                document.querySelector('#cookies-dialog').style.display = "none";
            }
        }
    }, []);
    const clickOnCookie = ()=> {
        document.cookie = "cookies=true;";
        document.querySelector('#cookies-dialog').style.display = "none";
    }
    return (
        <>
            {/* <!-- Cookies Dialog --> */}
            <div className="cookies-dialog" id="cookies-dialog">
                <div className="container">
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- title-3 --> */}
                        <h3 className="title-3">Your privacy matters</h3>
                        {/* <!-- div --> */}
                        <div className="d-lg-flex align-items-end">
                            {/* <!-- para-1 --> */}
                            <p className="para-1 mr-3">We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy and Cookie and Tracking Notice. By continuing to browse our website, you agree to our use of cookies.<br/><a href="#">Settings</a></p>
                            {/* <!-- buttons --> */}
                            <div className="buttons text-right">
                                <button type="button" className="btn btn-fill-primary btn-sm shadow-off" onClick={clickOnCookie} id="cookies-dialog-btn">I Understand</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cookie;
