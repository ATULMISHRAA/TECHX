/* eslint-disable no-restricted-globals */
import { useEffect } from "react";

const NoticeBar = (props) => {

    // Notices Bar Cookie
    useEffect(() => {
        if (document.cookie.indexOf("notices-bar=true") >= 0) {
            if (document.querySelector('#notices-bar') != null) {
                document.querySelector('#notices-bar').style.display = "none";
            }
        }
    }, []);
    const clickOnClose = ()=> {
        document.cookie = "notices-bar=true;";
        document.querySelector('#notices-bar').style.display = "none";
    }
    const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;
    return (
        <>
            {/* <!-- notices-bar --> */}
            <div className="notices-bar" id="notices-bar">
                <div className="container-fluid">
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- text --> */}
                        <p className="text">TechX special deal save 25% on all website and mobile app plan</p>
                        {/* <!-- action-btn --> */}
                        <a href="http://store.techx.live/" target="_blank" className="action-btn">Buy Now</a>
                        {/* <!-- close-btn --> */}
                        <div className="close-btn" id="close-notices-bar-btn" onClick={clickOnClose}>
                            <img
                            //  src="/assets/images/templates/navbar/close.png"
                            src={baseUrl+"/templates/navbar/close.png"} 
                             className="img-fluid" alt="Down Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NoticeBar;
