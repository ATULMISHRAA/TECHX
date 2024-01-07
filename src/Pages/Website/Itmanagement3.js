import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import "./styles/Itmanagement3.css";
import Cookie from "./Include/Cookie";
import ThemeSetting from "./Include/ThemeSetting";
import Aos from "aos";
import"aos/dist/aos.css";
 export const Itmanagement3=()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return(
        <>
        <div className="container-fluid " style={{padding:70,paddingBottom:160}}>
            <div className="row" style={{marginLeft:60,marginTop:35,marginBottom:60}}>
                 <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={400} width={400} alt=""/>
                </div>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
               <h1>Revolutionizing Communication with Cutting-Edge VoIP Systems at TECHX</h1>

                </div>
                
            </div>
        </div>
        <div className="container text-center Itf-style2">
            <h2>"Unleashing Unprecedented Connectivity: Discover the Future of Communication with TECHX's VoIP Expertise</h2>
            <p data-aos="fade-down">In the dynamic landscape of technological innovation, TECHX stands out as a trailblazing
              engineering company committed to redefining the way businesses communicate. Our focus
             on VoIP (Voice over Internet Protocol) Systems sets us apart, offering a transformative
              approach to voice communication that goes beyond conventional boundaries.</p>
        </div>
        <div className="container-fluid " style={{padding:80}}>
            <div className="row" style={{marginLeft:60}}>
                <div data-aos="fade-left" className="col-md-6 It-mgt2">
                    <h2>Introduction</h2>
                    <p>At TECHX, we pride ourselves on being more than just an engineering firm; we are pioneers in
                     crafting seamless and advanced VoIP Systems that elevate communication experiences to
                      unparalleled heights. VoIP has become the cornerstone of modern business communication,
                     and we lead the charge in harnessing its potential to revolutionize the way organizations
                     connect and collaborate.</p>
                </div>
                <div data-aos="fade-right" className="col-md-6" style={{paddingLeft:70}}>
                   <img src="../assets/images/icons/adummy.jpg" height={300} width={300} alt=""/>
                </div>
            </div>
        </div>
        
        <div className="container mt-4 Itf-style3">
            <h2 className="text-center mb-2">Why TECHX for VoIP Systems</h2>
            <div className="row Itf-style4">
                <div className="col-lg-4">
                    <h3>Innovative Engineering</h3>
                    <p data-aos="fade-down">: Our team of skilled engineers at TECHX pushes the boundaries of
                   what is possible in VoIP technology. We consistently innovate, ensuring our clients are
                   equipped with the latest advancements in voice communication</p>
                </div>
                <div className="col-lg-4">
                    <h3>Custom Solutions</h3>
                    <p data-aos="fade-down">: Recognizing that one size does not fit all, we specialize in tailoring VoIP
                     Systems to meet the unique needs of each client. Whether you're a small startup or a large
                     enterprise, TECHX has the expertise to design a bespoke solution just for you.</p>
                </div>
                <div className="col-lg-4">
                    <h3>Reliability and Scalability</h3>
                    <p data-aos="fade-down">TECHX ensures that your communication infrastructure is not only
                       reliable but also scalable. As your business grows, our VoIP Systems seamlessly adapt to
                       meet increased demands, providing a future-proof solution</p>
                </div>
                <div className="col-lg-4 mt-2" style={{marginLeft:200}}>
                    <h3>Enhanced Features</h3>
                    <p data-aos="fade-down">: Experience VoIP like never before with TECHX. Our systems come
                    equipped with advanced features such as crystal-clear HD voice quality, intuitive user
i                   nterfaces, and robust security protocols, ensuring a superior communication experience.</p>
                </div>
                <div className="col-lg-4 mt-2">
                    <h3>Cost-Efficiency</h3>
                    <p data-aos="fade-down">We understand the importance of cost-effectiveness in business operations.
                    TECHX's VoIP Systems not only enhance communication but also contribute to significant
                    cost savings compared to traditional telephony.</p>
                </div>
                
            </div>
        </div>
        
        <div className="container Itf-style3 mt-4" data-aos="fade-down" style={{paddingBottom:50}}>
            <h2 className="text-center mb-2" data-aos="fade-down">Categories of VoIP Services at TECHX</h2>
            <div className="row Itf-style4 Itf-style5">
                <div className="col-lg-3 ml-1 Itf-style6">
                    <h3>VoIP System Integration</h3>
                    <p data-aos="fade-down">Seamlessly integrate our advanced VoIP Systems with your existing
                    infrastructure for enhanced communication capabilities.</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                    <h3>VoIP Consulting</h3>
                    <p data-aos="fade-down">: Leverage our expertise to receive comprehensive consulting services,
                    guiding you through the adoption and optimization of VoIP solutions.</p>
                </div>
                <div className="col-lg-3 Itf-style6">
                    <h3>VoIP Maintenance and Support</h3>
                    <p data-aos="fade-down">TECHX stands by your side post-implementation, providing
                    dedicated maintenance and support to ensure uninterrupted communication.</p>
                </div>
                <div className="col-lg-3 Itf-style6" style={{marginLeft:350}}>
                    <h3>VoIP Security Solutions</h3>
                    <p data-aos="fade-down">: Safeguard your communication channels with TECHX's robust VoIP
                    security solutions, protecting your business from potential threats</p>
                </div>
                
            </div>
        </div>
        <div className="container" style={{paddingTop:40}}>
         <div className="head4d" style={{marginTop:5}}>
          <h3 className="head4">Conclusion</h3>
          <p className="pa4" data-aos="fade-down">
          In a world where data is abundant, TECHX stands out as the catalyst for transformation. Our
          Data Analytics Services are not just about numbers; they are about possibilities, insights, and
          opportunities. Join hands with TECHX to embark on a data-driven journey that propels your
          business towards unprecedented success.
          </p> 
         </div>               
        </div>
        
        <ThemeSetting />

      <Cookie />
        </>
    )
}
export default withRouter(Itmanagement3);