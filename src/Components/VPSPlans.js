import React, { useState } from 'react';

const VPSPlans = () => {

    const [activeFilter, setActiveFilter] = useState('hardware');
    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            <div className="se-v py-90">
                <div className="container">
                    {/* <!-- se-head --> */}
                    <div className="se-head">
                        <h3 className="se-title-1">Let's get to the juicy deets</h3>
                        <h4 className="se-title-2">Compare TechX VPS Plans and Support Services</h4>
                    </div>
                    {/* <!-- space --> */}
                    <div className="space space-sm"></div>
                    {/* <!-- filter-nav --> */}
                    <div className="filter-nav" id="filter-nav-v">
                        {/* <!-- row --> */}
                        <div className="row justify-content-center">
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-2">
                                {/* <!-- tab --> */}
                                <div className={`tab ${activeFilter === 'hardware' ? 'active' : ''}`} data-filter="hardware" onClick={() => handleTabClick('hardware')}>Hardware</div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-2">
                                {/* <!-- tab --> */}
                                <div className={`tab ${activeFilter === 'features' ? 'active' : ''}`} data-filter="features"onClick={() => handleTabClick('features')}>VPS Features</div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-2">
                                {/* <!-- tab --> */}
                                <div className={`tab ${activeFilter === 'email' ? 'active' : ''}`} data-filter="email"onClick={() => handleTabClick('email')}>Email</div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-md-0 mb-2">
                                <div className={`tab ${activeFilter === 'security' ? 'active' : ''}`} data-filter="security"onClick={() => handleTabClick('security')}>Security</div>
                                {/* <!-- tab --> */}
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                {/* <!-- tab --> */}
                                <div className={`tab ${activeFilter === 'network' ? 'active' : ''}`} data-filter="network"onClick={() => handleTabClick('network')}>Network</div>
                            </div>
                            {/* <!-- col --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                                {/* <!-- tab --> */}
                                <div className={`tab ${activeFilter === 'support' ? 'active' : ''}`} data-filter="support"onClick={() => handleTabClick('support')}>Support</div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- compare-table --> */}
                    <div className="compare-table-container mb-4">
                        {/* <!-- custom-thead --> */}
                        <div className="custom-thead" id="custom-thead-v">
                            {/* <!-- tabs --> */}
                            <div className="tabs d-flex align-items-center justify-content-start">
                                <div className="tab active flex-grow-1" data-filter="self">Self Managed</div>
                                <div className="tab flex-grow-1" data-filter="full">Fully Managed</div>
                            </div>
                            {/* <!-- tab-content --> */}
                            <div className="tab-content" data-for="self">
                                {/* <!-- row --> */}
                                <div className="row align-items-center">
                                    {/* <!-- col --> */}
                                    <div className="col-md-6 mb-md-0 mb-2 text-md-left text-center">
                                        {/* <!-- table-title-4 --> */}
                                        <span className="table-title-4">As low as</span>
                                        {/* <!-- table-title-1 --> */}
                                        <span className="table-title-1"><span className="coin">$</span>19.99<span className="sm-text">/mo</span></span>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-md-6 text-md-left text-center">
                                        {/* <!-- btn --> */}
                                        <a href="vps.html" className="btn btn-fill-primary btn-sm font-500 shadow-off">See Plans &amp; Pricing </a>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content content-hide" data-for="full">
                                {/* <!-- row --> */}
                                <div className="row align-items-center">
                                    {/* <!-- col --> */}
                                    <div className="col-md-6 mb-md-0 mb-2 text-md-left text-center">
                                        {/* <!-- table-title-4 --> */}
                                        <span className="table-title-4">As low as</span>
                                        {/* <!-- table-title-1 --> */}
                                        <span className="table-title-1"><span className="coin">$</span>29.99<span className="sm-text">/mo</span></span>
                                    </div>
                                    {/* <!-- col --> */}
                                    <div className="col-md-6 text-md-left text-center">
                                        {/* <!-- btn --> */}
                                        <a href="vps.html" className="btn btn-fill-primary btn-sm font-500 shadow-off">See Plans &amp; Pricing </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- compare-table --> */}
                        <table className="compare-table" id="compare-table-v">
                            {/* <!-- thead --> */}
                            <thead>
                                <tr>
                                    {/* <!-- top-left-corner --> */}
                                    <th className="top-left-corner">
                                        {/* <!-- table-title-head --> */}
                                        <span className="table-title-head">Swipe to<br />check plans <span>{`→`}</span></span>
                                    </th>
                                    {/* <!-- top-right-corner --> */}
                                    <th className="top-right-corner">
                                        {/* <!-- table-title-3 --> */}
                                        <span className="table-title-3">Self Managed</span>
                                        {/* <!-- price --> */}
                                        <div className="price">
                                            {/* <!-- table-title-4 --> */}
                                            <span className="table-title-4">As low as</span>
                                            {/* <!-- table-title-1 --> */}
                                            <span className="table-title-1"><span className="coin">$</span>19.99<span className="sm-text">/mo</span></span>
                                        </div>
                                        {/* <!-- btn --> */}
                                        <a href="#" className="btn btn-fill-primary btn-sm font-500 shadow-off">See Plans &amp; Pricing </a>
                                    </th>
                                    {/* <!-- top-right-corner --> */}
                                    <th className="top-right-corner">
                                        {/* <!-- table-title-3 --> */}
                                        <span className="table-title-3">Fully Managed</span>
                                        {/* <!-- price --> */}
                                        <div className="price">
                                            {/* <!-- table-title-4 --> */}
                                            <span className="table-title-4">As low as</span>
                                            {/* <!-- table-title-1 --> */}
                                            <span className="table-title-1"><span className="coin">$</span>29.99<span className="sm-text">/mo</span></span>
                                        </div>
                                        {/* <!-- btn --> */}
                                        <a href="#" className="btn btn-fill-primary btn-sm font-500 shadow-off">See Plans &amp; Pricing </a>
                                    </th>
                                </tr>
                            </thead>
                            {/* <!-- tbody --> */}
                            <tbody>
                                <tr className="hovered">
                                    <td className="left-corner"></td>
                                    <td className="right-corner" data-for="self">For experienced users that want full control over their server.</td>
                                    <td className="right-corner td-hide" data-for="full">For those that don’t have the time or advanced server skills.</td>
                                </tr>
                                {/* <!-- hardware --> */}
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">vCPU</td>
                                    <td className="right-corner" data-for="self">2 Cores</td>
                                    <td className="right-corner td-hide" data-for="full">4 Cores</td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Performance / RAM</td>
                                    <td className="right-corner" data-for="self">1 – 32 GB RAM</td>
                                    <td className="right-corner td-hide" data-for="full">2 – 32 GB RAM</td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Storage</td>
                                    <td className="right-corner" data-for="self">120 GB SSD</td>
                                    <td className="right-corner td-hide" data-for="full">240 GB SSD</td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Bandwidth</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Dedicated IP</td>
                                    <td className="right-corner" data-for="self">2 IPs</td>
                                    <td className="right-corner td-hide" data-for="full">2 IPs</td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Additional dedicated IP options</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">CPU, RAM, disk & uptime</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Services monitoring</td>
                                    <td className="right-corner" data-for="self">-</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="hardware" className={`${activeFilter === 'hardware' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Proactive remediation</td>
                                    <td className="right-corner" data-for="self">-</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                {/* <!-- features --> */}
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Root access</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">cPanel/WHM</td>
                                    <td className="right-corner" data-for="self">Optional</td>
                                    <td className="right-corner td-hide" data-for="full">Optional</td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Operating Systems</td>
                                    <td className="right-corner" data-for="self">CentOS, Ubuntu or Windows Server</td>
                                    <td className="right-corner td-hide" data-for="full">CentOS or Windows Server</td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Softaculous script installer</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">LetsEncrypt SSL included</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Unlimited email accounts</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Free content transfers</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Network guarantee</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">MySQL</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Monitoring and alerts</td>
                                    <td className="right-corner" data-for="self">5-minute intervals</td>
                                    <td className="right-corner td-hide" data-for="full">1-minute interval</td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Standard Hosting phone support</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Comprehensive help/how-to video library and technical blogs</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Community peer-to-peer advice</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Dedicated services team - (control panel recommended)</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full">Unlimited service requests.</td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Content migration</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full">5 free site migrations, ‪70%‬ discount off service fee for additional site migrations.</td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Server setup</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">DNS setup and configuration</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">SSL installation</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">HTTP/2 server configuration</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">SQL Server Express install</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Package management</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Email client setup</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">PHP module install/upgrade</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">MySQL optimization</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">WordPress setup</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Disk space audit</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Firewall rules configuration</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="features" className={`${activeFilter === 'features' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Call for custom service request</td>
                                    <td className="right-corner" data-for="self">Paid option</td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                {/* <!-- email --> */}
                                <tr data-filter="email" className={`${activeFilter === 'email' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Maximum outgoing emails</td>
                                    <td className="right-corner" data-for="self">Unlimited</td>
                                    <td className="right-corner td-hide" data-for="full">Unlimited</td>
                                </tr>
                                <tr data-filter="email" className={`${activeFilter === 'email' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Maximum POP/IMAP connections</td>
                                    <td className="right-corner" data-for="self">Unlimited</td>
                                    <td className="right-corner td-hide" data-for="full">Unlimited</td>
                                </tr>
                                {/* <!-- security --> */}
                                <tr data-filter="security" className={`${activeFilter === 'security' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Centralized DDoS Protection</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="security" className={`${activeFilter === 'security' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Weekly offsite backups</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="security" className={`${activeFilter === 'security' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Create manual backups</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="security" className={`${activeFilter === 'security' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Create scheduled backups</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                {/* <!-- network --> */}
                                <tr data-filter="network" className={`${activeFilter === 'network' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Network uptime guarantee</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="network" className={`${activeFilter === 'network' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">US-based Data Centers</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="network" className={`${activeFilter === 'network' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Fully redundant network</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="network" className={`${activeFilter === 'network' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Multiple bandwidth providers</td>
                                    <td className="right-corner" data-for="self">AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT</td>
                                    <td className="right-corner td-hide" data-for="full">AboveNet, AT&T, Comcast, Global crossing, Level (3), NTT</td>
                                </tr>
                                {/* <!-- support --> */}
                                <tr data-filter="support" className={`${activeFilter === 'support' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Premium support</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                                <tr data-filter="support" className={`${activeFilter === 'support' ? 'active' : 'tr-hide'}`}>
                                    <td className="left-corner">Server monitoring and remediation</td>
                                    <td className="right-corner" data-for="self"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                    <td className="right-corner td-hide" data-for="full"><img src="/assets/images/icons/check.svg" className="lazy check-icon img-fluid" alt="Check" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <!-- se-footer --> */}
                    <div className="se-footer d-flex align-items-center justify-content-center flex-wrap">
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Backups monthly</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Free white-glove migrations</span>
                        </div>
                        {/* <!-- line --> */}
                        <div className="line d-flex align-items-center justify-content-start">
                            <img src="/assets/images/icons/check-circle.svg" className="lazy icon img-fluid" alt="Check" />
                            <span className="text">Staging environments, and more.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VPSPlans;