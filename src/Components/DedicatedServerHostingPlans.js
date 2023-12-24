import React, { useState } from 'react';

const DedicatedServerHostingPlans = () => {

    const [activeFilter, setActiveFilter] = useState('HDD');
    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <>
            {/* <!-- filter-bar --> */}
            <div className="filter-bar">
                {/* <!-- row --> */}
                <div className="row justify-content-center">
                    {/* <!-- col --> */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        {/* <!-- item --> */}
                        <div className={`item ${activeFilter === 'HDD' ? 'active' : ''}`} data-show="hdd" onClick={() => handleTabClick('HDD')}>HDD</div>
                    </div>
                    {/* <!-- col --> */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        {/* <!-- item --> */}
                        <div className={`item ${activeFilter === 'SSD' ? 'active' : ''}`} data-show="ssd" onClick={() => handleTabClick('SSD')}>SSD</div>
                    </div>
                </div>
            </div>
            {/* <!-- plans-container --> */}
            <div className={`plans-container filter-hdd ${activeFilter === 'HDD' ? 'show' : ''} my-3`}>
                {/* <!-- plans --> */}
                <div className="plans">
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL SILVER 7402P</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/united-states-of-america.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/australia.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/united-kingdom.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>26 Cores @ 2.1 GHz</b><br />Benchmark 15,390</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>64GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>2x 250GB SSD</b><br />up to 8 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>1</b><br />up to 3</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>21.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">20.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL BRONZE 9306P</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/argentina.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/slovakia.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/india.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/united-arab-emirates.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>28 Cores @ 3.2 GHz</b><br />Benchmark 19,210</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>72GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>4x 5120GB SSD</b><br />up to 12 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>6Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3</b><br />up to 10</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>41.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">40.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL GOLD 8204P</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/brazil.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/france.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/spain.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/thailand.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/andorra.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>28 Cores @ 3.2 GHz</b><br />Benchmark 19,210</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>72GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>4x 5120GB SSD</b><br />up to 12 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>6Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3</b><br />up to 10</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>61.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">60.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- plans-container --> */}
            <div className={`plans-container filter-ssd ${activeFilter === 'SSD' ? 'show' : ''} my-3`}>
                {/* <!-- plans --> */}
                <div className="plans">
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL SILVER 3204H</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/united-states-of-america.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/australia.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/united-kingdom.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>32 Cores @ 2.4 GHz</b><br />Benchmark 15,390</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>64GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>4x 250GB SSD</b><br />up to 12 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3</b><br />up to 10</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>23.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">20.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL BRONZE 9306P</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/argentina.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/slovakia.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/india.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/united-arab-emirates.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>28 Cores @ 3.2 GHz</b><br />Benchmark 19,210</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>72GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>4x 5120GB SSD</b><br />up to 12 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>6Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3</b><br />up to 10</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>41.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">40.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan --> */}
                    <div className="plan">
                        {/* <!-- main-info-se --> */}
                        <div className="main-info-se">
                            <span className="plan-name">INTEL GOLD 8204P</span>
                            <span className="plan-sub-name">Middleweight</span>
                            <div className="locations">
                                <img src="/assets/images/flags/brazil.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/france.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/spain.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/thailand.svg" className="lazy img-fluid" alt="Flag" />
                                <img src="/assets/images/flags/andorra.svg" className="lazy img-fluid" alt="Flag" />
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>28 Cores @ 3.2 GHz</b><br />Benchmark 19,210</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>72GB</b><br />up to 384GB</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>4x 5120GB SSD</b><br />up to 12 disks</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>6Gbps</b><br />100TB/mo free traffic</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- spec-se --> */}
                        <div className="spec-se">
                            {/* <!-- icons-bar --> */}
                            <div className="icons-bar">
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                                {/* <!-- icon --> */}
                                <div className="icon">
                                    <img src="/assets/images/icons/controls.svg" className="lazy img-fluid" alt="Icon" />
                                </div>
                            </div>
                            {/* <!-- text-bar --> */}
                            <div className="text-bar">
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>3</b><br />up to 10</p>
                                </div>
                                {/* <!-- text --> */}
                                <div className="text">
                                    <p><b>cPanel/WHM, Plesk</b><br />Obsidian Web Host Edition</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- price-se --> */}
                        <div className="price-se">
                            {/* <!-- price --> */}
                            <div className="price">
                                <sup>$</sup>61.99
                            </div>
                            {/* <!-- price-comment --> */}
                            <p className="price-comment">60.00 USD/mo when you renew<sup>4</sup></p>
                            {/* <!-- actions --> */}
                            <div className="actions">
                                <a href="#" className="btn btn-fill-primary shadow-off">BUY NOW</a>
                                <a href="#" className="btn btn-outline-dark shadow-off">FEATURES</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DedicatedServerHostingPlans;