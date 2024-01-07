import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import "./styles/Itmanagement2.css";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import Aos from "aos";
import"aos/dist/aos.css";
 export const Itmanagement2=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div className="container-fluid text-center p-5  bg-primary mb-3 mt-5 Itf-style-home">
            <h1>Unlocking Business Insights Elevate Your Strategy with TECHX BI & Analytics Solutions</h1>
        </div>
        <div className="container text-center Itf-style2">
            <h2>Revolutionize Decision-Making with Cutting-Edge Business Intelligence and Analytics Services</h2>
            <p data-aos="fade-down">At TECHX, we redefine the possibilities of data-driven decision-making through our
              unparalleled BI & Analytics solutions. In the ever-evolving landscape of technology, our
              engineering prowess sets us apart as innovators, providing services that transcend the
              conventional boundaries of what others in the industry offer.

            </p>
        </div>
        <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:60}}>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
                    <h2>Crafting Unique Insights</h2>
                    <p>Our BI & Analytics services go beyond routine data analysis. We specialize in extracting
                       actionable insights from your raw data, transforming it into a strategic asset. TECHX
                       empowers your business with the foresight needed to make informed decisions, enabling you
                       to stay ahead of the competition</p>
                </div>
                <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={300} width={300} alt=""/>
                </div>
            </div>
        </div>
        <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:70}}>
               <div data-aos="fade-left" className="col-md-6" style={{paddingLeft:120}}>
                   <img src="../assets/images/icons/adummy.jpg" height={300} width={300} alt=""/>
                </div>
                <div data-aos="fade-right" className="col-md-6 It-mgt2" style={{marginLeft:-100}}>
                    <h2>Unmatched Engineering Expertise</h2>
                    <p>What sets TECHX apart is our deep-rooted engineering excellence. We pride ourselves on our
                       ability to engineer solutions that others deem challenging or impossible. Leveraging
                       advanced technologies and methodologies, we bring a fresh perspective to BI & Analytics,
                       unraveling insights that propel your business forward.</p>
                </div>
                
            </div>
        </div>
        <div className="container mt-4 Itf-style3">
            <h2 className="text-center mb-2">Categories of BI & Analytics Services</h2>
            <div className="row Itf-style4">
                <div className="col-lg-4">
                    <h3>Predictive Analytics</h3>
                    <p data-aos="fade-down">Forecast future trends and behaviors
                     with precision, enabling proactive decisionmaking</p>
                </div>
                <div className="col-lg-4">
                    <h3>Big Data Analytics</h3>
                    <p data-aos="fade-down">Harness the power of big data to extract 
                    valuable insights, turning data into a strategic asset.</p>
                </div>
                <div className="col-lg-4">
                    <h3>Business Intelligence Reporting</h3>
                    <p data-aos="fade-down">Create intuitive and visually compelling reports, 
                    providing a comprehensive view of your business metrics</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3>Real-time Analytics</h3>
                    <p data-aos="fade-down">Stay ahead in a fast-paced environment with real-time
                     analytics that offer instantaneous insights.</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3>Machine Learning Integration</h3>
                    <p data-aos="fade-down">Integrate machine learning algorithms for predictive 
                    modeling and pattern recognition.</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3>Data Visualization</h3>
                    <p data-aos="fade-down">Transform complex data into clear visualizations, 
                    making it easy to comprehend and act upon.</p>
                </div>
                <div className="col-lg-4 mt-1">
                    <h3>Custom Analytics Solutions</h3>
                    <p data-aos="fade-down">Tailor-made analytics solutions designed to 
                    address your unique business challenges and opportunities.</p>
                </div>
            </div>
        </div>
        <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:60}}>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
                    <h2>Tailored Solutions for Your Business Needs</h2>
                    <p>Understanding that every business is unique, TECHX crafts customized BI & Analytics
                       solutions aligned with your specific requirements. Whether you're a startup looking for
                       scalable analytics or an established enterprise seeking advanced BI capabilities, we have the
                       expertise to tailor our services to meet your goals.
                   </p>
                </div>
                <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={300} width={300} alt=""/>
                </div>
            </div>
        </div>
        <div className="container Itf-style3 mt-4" data-aos="fade-down" style={{paddingBottom:50}}>
            <h2 className="text-center mb-2" data-aos="fade-down">Why Choose TECHX for BI & Analytics</h2>
            <div className="row Itf-style4 Itf-style5">
                <div className="col-lg-3 ml-1 Itf-style6">
                    <h3>Innovative Engineering Approach</h3>
                    <p data-aos="fade-down">Our engineering mindset enables us to tackle BI & Analytics
                     challenges creatively, delivering solutions that stand out in the industry</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                    <h3>Proven Track Record</h3>
                    <p data-aos="fade-down">TECHX has a history of successful BI & Analytics implementations across 
                    diverse industries, showcasing our expertise and reliability</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                    <h3>Scalability and Flexibility</h3>
                    <p data-aos="fade-down">Our solutions are scalable, ensuring they grow with 
                    your business, and flexible enough to adapt to changing needs seamlessly</p>
                </div>
                <div className="col-lg-3 Itf-style6" style={{marginLeft:180}}>
                    <h3>Customer-Centric Focus</h3>
                    <p data-aos="fade-down">TECHX is committed to understanding your business objectives
                     and delivering BI & Analytics solutions that align with your vision.</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                    <h3>Closing Words</h3>
                    <p data-aos="fade-down">In the dynamic world of business, having a competitive edge is non-negotiable. TECHX is your
                        partner in unlocking the full potential of your data, providing BI & Analytics solutions that
                        empower your organization to thrive. Join us on the journey to transform raw data into
                        strategic insights, driving your business towards unparalleled success. With TECHX, your data
                        has never been more valuable.</p>
                </div>
            </div>
        </div>
        
        <ThemeSetting />

      <Cookie />
        </>
    )
}
export default withRouter(Itmanagement2);