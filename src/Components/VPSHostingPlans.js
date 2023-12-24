import React, { useState } from 'react';

const VPSHostingPlans = () => {

    const [activeFilter, setActiveFilter] = useState('fully-managed');
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
                        <div className={`item ${activeFilter === 'fully-managed' ? 'active' : ''}`} data-show="fully-managed" onClick={() => handleTabClick('fully-managed')}>Fully Managed</div>
                    </div>
                    {/* <!-- col --> */}
                    <div className="col-xl-2 col-lg-3 col-md-4 col-6">
                        {/* <!-- item --> */}
                        <div className={`item ${activeFilter === 'self-managed' ? 'active' : ''}`} data-show="self-managed" onClick={() => handleTabClick('self-managed')}>Self Managed</div>
                    </div>
                </div>
            </div>
            {/* <!-- responsive-table --> */}
            <div className={`responsive-table filter-fully-managed mb-3 ${activeFilter === 'fully-managed' ? 'show' : ''}`}>
                {/* <!-- custom-table --> */}
                <div className="custom-table">
                    {/* <!-- tbody --> */}
                    <div className="tbody">
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/new-zealand.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 7402P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$14.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/germany.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/canada.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 8102P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$16.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/sweden.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/spain.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/romania.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/russia.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/romania.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/russia.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/new-zealand.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 7402P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$14.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/germany.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/canada.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 8102P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$16.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/sweden.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/spain.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- responsive-table --> */}
            <div className={`responsive-table filter-self-managed mb-3 ${activeFilter === 'self-managed' ? 'show' : ''}`}>
                {/* <!-- custom-table --> */}
                <div className="custom-table">
                    {/* <!-- tbody --> */}
                    <div className="tbody">
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/united-states-of-america.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 6402P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$14.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/new-zealand.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/niger.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 8102P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$16.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/niue.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/peru.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/mexico.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/monaco.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/romania.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/russia.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/new-zealand.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 7402P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$14.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/germany.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/canada.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 8102P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$16.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                        {/* <!-- tr --> */}
                        <div className="tr">
                            <div className="position-relative">
                                {/* <!-- td --> */}
                                <div className="td plan-td d-flex align-items-start">
                                    {/* <!-- flags --> */}
                                    <div className="flags">
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/sweden.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                        <div className="flag" data-tooltip="EU-Nord-1:3 in stock">
                                            <img src="/assets/images/flags/spain.svg" className="lazy flag img-fluid" alt="flag" />
                                        </div>
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">INTEL GOLD 9202P</div>
                                        <div className="des">Middleweight</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td cpu-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="CPU">
                                        <img src="/assets/images/icons/cpu.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">26 Cores @ 2.1 GHz</div>
                                        <div className="des">Benchmark 15,390</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ram-td">
                                    {/* <!-- icon --> */}
                                    <div className="icon" title="RAM">
                                        <img src="/assets/images/icons/ram-memory.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">64GB</div>
                                        <div className="des">up to 384GB</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td storage-td" title="Storage">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/hard-disk.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">2x 250GB SSD</div>
                                        <div className="des">up to 8 disks</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td bandwidth-td" title="Bandwidth">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/speedometer.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">3Gbps</div>
                                        <div className="des">100TB/mo free traffic</div>
                                    </div>
                                </div>
                                {/* <!-- td --> */}
                                <div className="td ip-td" title="Dedicated ID">
                                    {/* <!-- icon --> */}
                                    <div className="icon">
                                        <img src="/assets/images/icons/cable.svg" className="lazy img-fluid" alt="icon" />
                                    </div>
                                    {/* <!-- text --> */}
                                    <div className="text">
                                        <div className="name">1</div>
                                        <div className="des">up to 3</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td price-td">
                                {/* <!-- icon --> */}
                                <div className="icon" title="Price">
                                    <img src="/assets/images/icons/price-tag.svg" className="lazy img-fluid" alt="icon" />
                                </div>
                                <div className="price">$18.00<span>/mo</span></div>
                            </div>
                            {/* <!-- td --> */}
                            <div className="td actions-td">
                                <a href="#" className="btn btn-fill-primary shadow-off btn-sm">Configure</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VPSHostingPlans;