/* eslint-disable no-restricted-globals */
import { useState } from "react";

const FAQ = (props) => {
    const baseUrl = location.href.includes("trainingncr.info")
  ? `http://trainingncr.info/techx/assets/images`
  : `/assets/images`;
    const [activeFilter, setActiveFilter] = useState('general');
    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleFAQClick = (e) => {
        const questions = document.querySelectorAll('.q');

        questions.forEach(question => {
            if (question !== e.currentTarget) {
                question.classList.remove('open');
                question.querySelector('.q-b').style.display = 'none';

            }
        });
        e.currentTarget.classList.toggle('open');
        const qb = e.currentTarget.querySelector('.q-b');

        if (qb) {
            qb.style.display = qb.style.display === 'block' ? 'none' : 'block';
        }

    };



    return (
        <>
            {/* <!-- FAQs --> */}
            <div className="faqs py-90" id="faqs">
                <div className="container">
                    {/* <!-- se-head --> */}
                    {/* <div className="se-head">
                        <h3 className="se-title-1">FAQS</h3>
                        <h4 className="se-title-2">Got questions?<br />Well, we've got answers.</h4>
                    </div> */}
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- col --> */}
                        <div className="col-xl-4 pr-xl-3 mb-xl-0 mb-2">
                            {/* <!-- category --> */}
                            <div className="category" id="faqs-category">
                                {/* <!-- item --> */}
                                <div className={`item ${activeFilter === 'general' ? 'active' : ''}`} data-category="general" onClick={() => handleTabClick('general')}>
                                    <img 
                                    // src="/assets/images/icons/planet-earth.png"
                                    src={baseUrl+"/icons/planet-earth.png"}
                                    className="icon img-fluid" alt="Icon" />
                                    <div className="text">
                                        <h5 className="item-title">General inquiries</h5>
                                        <p className="item-des">New around here? Start with the basics.</p>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className={`item ${activeFilter === 'features' ? 'active' : ''}`} data-category="features" onClick={() => handleTabClick('features')}>
                                    <img 
                                    // src="/assets/images/icons/favorite.png"
                                    src={baseUrl+"/icons/favorite.png"} 
                                    className="icon img-fluid" alt="Icon" />
                                    <div className="text">
                                        <h5 className="item-title">VPS Hosting Features</h5>
                                        <p className="item-des">Dive deeper into TechX's servers features.</p>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                <div className={`item ${activeFilter === 'privacy' ? 'active' : ''}`} data-category="privacy" onClick={() => handleTabClick('privacy')}>
                                    <img 
                                    // src="/assets/images/icons/lock.png"
                                    src={baseUrl+"/icons/lock.png"}
                                     className="icon img-fluid" alt="Icon" />
                                    <div className="text">
                                        <h5 className="item-title">Permissions &amp; Privacy</h5>
                                        <p className="item-des">We take security &amp; privacy seriously.</p>
                                    </div>
                                </div>
                                {/* <!-- item --> */}
                                {/* <div className={`item ${activeFilter === 'pricing' ? 'active' : ''}`} data-category="pricing" onClick={() => handleTabClick('pricing')}>
                                    <img 
                                    // src="/assets/images/icons/dollar.png"
                                    src={baseUrl+"/icons/dollar.png"}
                                     className="icon img-fluid" alt="Icon" />
                                    <div className="text">
                                        <h5 className="item-title">Pricing &amp; Plans</h5>
                                        <p className="item-des">Learn about plans, payments, and more.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* <!-- col --> */}
                        <div className="col-xl-8">
                            {/* <!-- content --> */}
                            <div className="content">
                                {/* <!-- box --> */}
                                <div className="box category-general" style={{ display: `${activeFilter === 'general' ? 'block' : 'none'}` }}>
                                    {/* <!-- box-head --> */}
                                    <div className="box-head">
                                        <img 
                                        // src="/assets/images/icons/planet-earth.png"
                                        src={baseUrl+"/icons/planet-earth.png"}
                                        className="icon img-fluid" alt="Icon" />
                                        <div className="text">
                                            <h5 className="box-title">General inquiries</h5>
                                            <p className="box-des">New around here? Start with the basics.</p>
                                        </div>
                                    </div>
                                    {/* <!-- box-body --> */}
                                    <div className="box-body">
                                        
                                        <div className="q" onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">What is a Virtual Private Server (VPS)?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>A <a href="#">Virtual Private Server</a> is a server divided into fully separate hosting environments. When you have VPS hosting, one of those environments is completely dedicated to you. That means you don't have to share resources (such as RAM or CPU) with other customers and you're less likely to be impacted by their behavior.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="q" onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">What about VPS vs. Dedicated?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>Another great question. A dedicated server is a server that's literally dedicated to you and no one else, which means the world (or in this case, server) is your oyster. Learn more about the <a href="#">benefits of VPS and Dedicated here.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">How do I get started with VPS hosting?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>Our KnowledgeBase will walk you through exactly how to <a href="#">upgrade to a VPS.</a> Then you can check out these <a href="#">essential first steps.</a></p>
                                                <p>And if you really want to go for it, you can read up on more <a href="#">general information about VPS here.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Wait… if we're talking about a VPS, what is a VPN then?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>Yup, it can be a little confusing. But a virtual private server (VPS) is a form of web hosting, while a virtual private network (VPN) is a technology that allows you to remain completely anonymous when using the web. Read up more on <a href="#">VPS vs. VPN here.</a></p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">When should I use VPS hosting over Shared?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>In short, a virtual private server is ideal for users looking for more control over their hosting environment. Maybe your site traffic has grown, or maybe you have multiple websites and need more resources to run them all effectively. A VPS gives you more flexibility and control to bump up things like RAM and disk space without paying for more than you need.</p>
                                                <p>For more information on shared vs. VPS hosting <a href="#">check out our blog.</a></p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">I already have hosting, but want to switch to VPS. Any tips?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>If you’re switching from Shared, Reseller, or Dedicated hosting to a virtual private server, the process is pretty simple. You’ll just have to transfer your files, change the DNS, and cancel your old plan. For more details into this process, <a href="#">check out this article on switching to VPS.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- box --> */}
                                <div className="box category-features" style={{ display: `${activeFilter === 'features' ? 'block' : 'none'}` }}>
                                    {/* <!-- box-head --> */}
                                    <div className="box-head">
                                        <img 
                                        // src="/assets/images/icons/favorite.png"
                                        src={baseUrl+"/icons/favorite.png"} 
                                        className="icon img-fluid" alt="Icon" />
                                        <div className="text">
                                            <h5 className="box-title">VPS Hosting Features</h5>
                                            <p className="box-des">Dive deeper into TechX's servers features.</p>
                                        </div>
                                    </div>
                                    {/* <!-- box-body --> */}
                                    <div className="box-body">
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">How to Update cPanel in WHM?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p> To update cPanel in WHM, you  need to login to WHM using your username and password. Once logged in, search for the "cPanel" section. In the cPanel section, click on the "Upgrade to Latest Version" option. This will initiate the update process. </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Updating Legacy Linux Dedicated Hosting Packages</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>First log in to your hosting account. This typically involves accessing the control panel. The control panel might be cPanel, Plesk, or a custom control panel specific to your hosting provider, navigate to the section or menu related to your hosting package. look for an option like "Upgrade" or "Package Management" within the hosting package section. <a href="#"></a></p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">How to Reboot Your VPS/Dedicated Server?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>Log in to your server. Common methods include SSH (Secure Shell) or remote desktop access. Now, open a command-line interface or terminal window. This allows you to execute commands on the server. In the command-line interface, type the command to initiate a system reboot. </p>
                                                {/* <p>And if you really want to go for it, you can read up on more <a href="#">general information about VPS here.</a></p> */}
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">VPS General Information</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>A VPS (Virtual Private Server) is a virtualized server environment created through virtualization technology. It provides a dedicated portion of server resources to the user, allowing them to have more control and flexibility compared to shared hosting. </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">VPS Services - Self Signed SSL Certificates</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                {/* <p>In short, a virtual private server is ideal for users looking for more control over their hosting environment. Maybe your site traffic has grown, or maybe you have multiple websites and need more resources to run them all effectively. A VPS gives you more flexibility and control to bump up things like RAM and disk space without paying for more than you need.</p>
                                                <p>For more information on shared vs. VPS hosting <a href="#">check out our blog.</a></p> */}
                                                <p>
                                                A self-signed SSL certificate is a digital certificate that is signed by the entity itself rather than a trusted third-party certificate authority (CA). It is an option for securing a website with HTTPS encryption when you don't want to purchase a certificate from a recognized CA or when you are using it for testing or development purposes. 
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Do I Need a VPS?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                {/* <p>If you’re switching from Shared, Reseller, or Dedicated hosting to a virtual private server, the process is pretty simple. You’ll just have to transfer your files, change the DNS, and cancel your old plan. For more details into this process, <a href="#">check out this article on switching to VPS.</a></p> */}
                                                <p>
                                                Whether or not you need a VPS (Virtual Private Server) depends on your specific requirements, resources, and goals. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- box --> */}
                                <div className="box category-privacy" style={{ display: `${activeFilter === 'privacy' ? 'block' : 'none'}` }}>
                                    {/* <!-- box-head --> */}
                                    <div className="box-head">
                                        <img 
                                        // src="/assets/images/icons/lock.png"
                                        src={baseUrl+"/icons/lock.png"}
                                        className="icon img-fluid" alt="Icon" />
                                        <div className="text">
                                            <h5 className="box-title">Permissions &amp; Privacy</h5>
                                            <p className="box-des">We take security &amp; privacy seriously.</p>
                                        </div>
                                    </div>
                                    {/* <!-- box-body --> */}
                                    <div className="box-body">
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Do I Need Domain Privacy Protection? | TechX</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                {/* <p>A <a href="#">Virtual Private Server</a> is a server divided into fully separate hosting environments. When you have VPS hosting, one of those environments is completely dedicated to you. That means you don't have to share resources (such as RAM or CPU) with other customers and you're less likely to be impacted by their behavior.</p> */}
                                                <p>
                                                Whether or not you need domain privacy protection depends on your personal preferences and specific circumstances. 
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Launchpad: How to Enable WHMCS Privacy?</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                <p>Log in to WHM using your username and password. WHM is a control panel used for managing web hosting accounts and servers. Within the policies section, you may find a list of available policies or policy categories. These policies govern various aspects of hosting account management, security, resource usage, and more. </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">What Is Domain Name Privacy? | TechX</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                {/* <p>Our KnowledgeBase will walk you through exactly how to <a href="#">upgrade to a VPS.</a> Then you can check out these <a href="#">essential first steps.</a></p>
                                                <p>And if you really want to go for it, you can read up on more <a href="#">general information about VPS here.</a></p> */}
                                                <p>
                                                Domain name privacy, also known as WHOIS privacy or domain privacy protection, is a service offered by domain registrars to protect the privacy of domain owners. When you register a domain name, you are required to provide personal contact information such as your name, address, email address, and phone number. 
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- q --> */}
                                        {/* <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            
                                            <div className="q-h">
                                                
                                                <h4 className="text">Common Web Hosting Questions | TechX Blog</h4>
                                                
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            
                                            <div className="q-b">
                                                <p>Another great question. A dedicated server is a server that's literally dedicated to you and no one else, which means the world (or in this case, server) is your oyster. Learn more about the <a href="#">benefits of VPS and Dedicated here.</a></p>
                                            </div>
                                        </div> */}
                                        {/* <!-- q --> */}
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            {/* <!-- q-h --> */}
                                            <div className="q-h">
                                                {/* <!-- text --> */}
                                                <h4 className="text">Domain Privacy</h4>
                                                {/* <!-- plus --> */}
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            {/* <!-- q-b --> */}
                                            <div className="q-b">
                                                {/* <p>Our KnowledgeBase will walk you through exactly how to <a href="#">upgrade to a VPS.</a> Then you can check out these <a href="#">essential first steps.</a></p>
                                                <p>And if you really want to go for it, you can read up on more <a href="#">general information about VPS here.</a></p> */}
                                                <p>
                                                Domain privacy, also known as WHOIS privacy or domain privacy protection, is a service offered by domain registrars to protect the privacy of domain owners. When you register a domain name, you are required to provide personal contact information such as your name, address, email address, and phone number. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- box --> */}
                                {/* <div className="box category-pricing" style={{ display: `${activeFilter === 'pricing' ? 'block' : 'none'}` }}>
                                    
                                    <div className="box-head">
                                        <img 
                                        // src="/assets/images/icons/dollar.png"
                                        src={baseUrl+"/icons/dollar.png"} 
                                        className="icon img-fluid" alt="Icon" />
                                        <div className="text">
                                            <h5 className="box-title">Pricing &amp; Plansss</h5>
                                            <p className="box-des">Learn about plans, payments, and more.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="box-body">
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            
                                            <div className="q-h">
                                                
                                                <h4 className="text">Hosting Price Chart</h4>
                                                
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            
                                            <div className="q-b">
                                                <p>A <a href="#">Virtual Private Server</a> is a server divided into fully separate hosting environments. When you have VPS hosting, one of those environments is completely dedicated to you. That means you don't have to share resources (such as RAM or CPU) with other customers and you're less likely to be impacted by their behavior.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            
                                            <div className="q-h">
                                                
                                                <h4 className="text">Addon Price Chart</h4>
                                                
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                           
                                            <div className="q-b">
                                                <p>Another great question. A dedicated server is a server that's literally dedicated to you and no one else, which means the world (or in this case, server) is your oyster. Learn more about the <a href="#">benefits of VPS and Dedicated here.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            
                                            <div className="q-h">
                                                
                                                <h4 className="text">Web hosting discount prices</h4>
                                               
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            
                                            <div className="q-b">
                                                <p>Our KnowledgeBase will walk you through exactly how to <a href="#">upgrade to a VPS.</a> Then you can check out these <a href="#">essential first steps.</a></p>
                                                <p>And if you really want to go for it, you can read up on more <a href="#">general information about VPS here.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                           
                                            <div className="q-h">
                                                
                                                <h4 className="text">Domain Registration and Renewal Pricing Explained</h4>
                                                
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            
                                            <div className="q-b">
                                                <p>Yup, it can be a little confusing. But a virtual private server (VPS) is a form of web hosting, while a virtual private network (VPN) is a technology that allows you to remain completely anonymous when using the web. Read up more on <a href="#">VPS vs. VPN here.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                            
                                            <div className="q-h">
                                                
                                                <h4 className="text">Registering Domain Names and TLD Prices</h4>
                                                
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                            
                                            <div className="q-b">
                                                <p>In short, a virtual private server is ideal for users looking for more control over their hosting environment. Maybe your site traffic has grown, or maybe you have multiple websites and need more resources to run them all effectively. A VPS gives you more flexibility and control to bump up things like RAM and disk space without paying for more than you need.</p>
                                                <p>For more information on shared vs. VPS hosting <a href="#">check out our blog.</a></p>
                                            </div>
                                        </div>
                                        
                                        <div className="q"  onClick={(e) => handleFAQClick(e)}>
                                           
                                            <div className="q-h">
                                               
                                                <h4 className="text">How To Set Pricing for Your Online Store | TechX Blog</h4>
                                               
                                                <div className="plus">
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </div>
                                           
                                            <div className="q-b">
                                                <p>If you’re switching from Shared, Reseller, or Dedicated hosting to a virtual private server, the process is pretty simple. You’ll just have to transfer your files, change the DNS, and cancel your old plan. For more details into this process, <a href="#">check out this article on switching to VPS.</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
