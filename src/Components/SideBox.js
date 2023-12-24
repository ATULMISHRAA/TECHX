import React, { useEffect, useRef, useState } from 'react';

const SideBox = ({ handleSideBoxToggle }) => {

    const node = useRef();

    const handleClickOutside = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        handleSideBoxToggle();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [activeFilter, setActiveFilter] = useState('all');
    const indicatorRef = useRef();

    const handleTabClick = (filter) => {
        setActiveFilter(filter);
    };

    const handleIndicator = (element) => {
        indicatorRef.current.style.width = `${element.offsetWidth}px`;
        indicatorRef.current.style.left = `${element.offsetLeft}px`;
    };


    return (
        <>
            {/* <!-- side-box --> */}
            <div className={`side-box scroll-area open-side-box`} id="side-box" ref={node}>
                {/* <!-- mega-menu --> */}
                <div className="mega-menu">
                    {/* <!-- f-nav --> */}
                    <div className="f-nav d-flex align-items-center justify-content-start flex-wrap">
                        <span className={`f-nav-tab ${activeFilter === 'all' ? 'active' : ''}`} data-filter="all" onClick={() => handleTabClick('all')}>All</span>
                        <span className={`f-nav-tab ${activeFilter === 'apps' ? 'active' : ''}`} data-filter="apps" onClick={() => handleTabClick('apps')}>Apps</span>
                        <span className={`f-nav-tab ${activeFilter === 'compute' ? 'active' : ''}`} data-filter="compute" onClick={() => handleTabClick('compute')}>Compute</span>
                        <span className={`f-nav-tab ${activeFilter === 'storage' ? 'active' : ''}`} data-filter="storage" onClick={() => handleTabClick('storage')}>Storage</span>
                        <span className={`f-nav-tab ${activeFilter === 'networking' ? 'active' : ''}`} data-filter="networking" onClick={() => handleTabClick('networking')}>Networking</span>
                        <span className={`f-nav-tab ${activeFilter === 'hosting' ? 'active' : ''}`} data-filter="hosting" onClick={() => handleTabClick('hosting')}>Hosting</span>
                        <span className="indicator" ref={indicatorRef}></span>
                    </div>
                    {/* <!-- content --> */}
                    <div className="content">
                        {/* <!-- f-area & all --> */}
                        <div className={`f-area all `} style={{ display: `${activeFilter === 'all' ? 'block' : 'none'}` }}>
                            {/* <!-- apps --> */}
                            <div className="apps mb-3">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">Top Apps</h3>
                                {/* <!-- boxes --> */}
                                <div className="boxes">
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/gmail.svg" className="img-fluid" alt="Gmail" />
                                        </span>
                                        <span className="title">Gmail</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/discord.svg" className="img-fluid" alt="Discord" />
                                        </span>
                                        <span className="title">Discord</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/airbnb.svg" className="img-fluid" alt="Airbnb" />
                                        </span>
                                        <span className="title">Airbnb</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/slack.svg" className="img-fluid" alt="Slack" />
                                        </span>
                                        <span className="title">Slack</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/reddit.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Reddit</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/yahoo.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Yahoo</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/evernote.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Evernote</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/dropbox.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Dropbox</span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- others --> */}
                            <div className="others">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">Recommended</h3>
                                {/* <!-- items --> */}
                                <div className="items">
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- f-area & apps --> */}
                        <div className={`f-area apps `} style={{ display: `${activeFilter === 'apps' ? 'block' : 'none'}` }}>
                            {/* <!-- apps --> */}
                            <div className="apps mb-2">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">Popular</h3>
                                {/* <!-- boxes --> */}
                                <div className="boxes">
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/gmail.svg" className="img-fluid" alt="Gmail" />
                                        </span>
                                        <span className="title">Gmail</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/discord.svg" className="img-fluid" alt="Discord" />
                                        </span>
                                        <span className="title">Discord</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/airbnb.svg" className="img-fluid" alt="Airbnb" />
                                        </span>
                                        <span className="title">Airbnb</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/slack.svg" className="img-fluid" alt="Slack" />
                                        </span>
                                        <span className="title">Slack</span>
                                    </a>
                                    {/* <!-- app-box --> */}
                                    <a href="#" className="app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/reddit.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Reddit</span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- apps --> */}
                            <div className="apps">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">All Apps</h3>
                                {/* <!-- boxes --> */}
                                <div className="boxes">
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/gmail.svg" className="img-fluid" alt="Gmail" />
                                        </span>
                                        <span className="title">Gmail</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/discord.svg" className="img-fluid" alt="Discord" />
                                        </span>
                                        <span className="title">Discord</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/airbnb.svg" className="img-fluid" alt="Airbnb" />
                                        </span>
                                        <span className="title">Airbnb</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/slack.svg" className="img-fluid" alt="Slack" />
                                        </span>
                                        <span className="title">Slack</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/reddit.svg" className="img-fluid" alt="Reddit" />
                                        </span>
                                        <span className="title">Reddit</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/yahoo.svg" className="img-fluid" alt="Yahoo" />
                                        </span>
                                        <span className="title">yahoo</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/evernote.svg" className="img-fluid" alt="Evernote" />
                                        </span>
                                        <span className="title">Evernote</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/dropbox.svg" className="img-fluid" alt="Dropbox" />
                                        </span>
                                        <span className="title">Dropbox</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/shopping.svg" className="img-fluid" alt="Shopify" />
                                        </span>
                                        <span className="title">Shopify</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/skype.svg" className="img-fluid" alt="Skype" />
                                        </span>
                                        <span className="title">Skype</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/github-1.svg" className="img-fluid" alt="Github" />
                                        </span>
                                        <span className="title">Github</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/pinterest.svg" className="img-fluid" alt="Pinterest" />
                                        </span>
                                        <span className="title">Pinterest</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/hashtag.svg" className="img-fluid" alt="Hashtag" />
                                        </span>
                                        <span className="title">Hashtag</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/tinder.svg" className="img-fluid" alt="Tinder" />
                                        </span>
                                        <span className="title">Tinder</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/yahoo.svg" className="img-fluid" alt="Yahoo" />
                                        </span>
                                        <span className="title">yahoo</span>
                                    </a>
                                    {/* <!-- small-app-box --> */}
                                    <a href="#" className="small-app-box">
                                        <span className="frame">
                                            <img src="/assets/images/icons/evernote.svg" className="img-fluid" alt="Evernote" />
                                        </span>
                                        <span className="title">Evernote</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- f-area & compute --> */}
                        <div className={`f-area compute `} style={{ display: `${activeFilter === 'compute' ? 'block' : 'none'}` }}>
                            {/* <!-- others --> */}
                            <div className="others">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">All</h3>
                                {/* <!-- items --> */}
                                <div className="items">
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- f-area & storage --> */}
                        <div className={`f-area storage `} style={{ display: `${activeFilter === 'storage' ? 'block' : 'none'}` }}>
                            {/* <!-- others --> */}
                            <div className="others">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">All</h3>
                                {/* <!-- items --> */}
                                <div className="items">
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- f-area & networking --> */}
                        <div className={`f-area networking `} style={{ display: `${activeFilter === 'networking' ? 'block' : 'none'}` }}>
                            {/* <!-- others --> */}
                            <div className="others">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">All</h3>
                                {/* <!-- items --> */}
                                <div className="items">
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- f-area & hosting --> */}
                        <div className={`f-area hosting `} style={{ display: `${activeFilter === 'hosting' ? 'block' : 'none'}` }}>
                            {/* <!-- others --> */}
                            <div className="others">
                                {/* <!-- cate-title --> */}
                                <h3 className="cate-title">All</h3>
                                {/* <!-- items --> */}
                                <div className="items">
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Virtual Private Server</span>
                                            <span className="des">Flexible virtual machines</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/laptop.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Business Analysis</span>
                                            <span className="des">Start your host business</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/data-protection.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Cloud Hosting</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/server-1.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Dedicated Servers</span>
                                            <span className="des">Powerful bare metal servers</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/shield.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Data Security</span>
                                            <span className="des">Keep your data safe</span>
                                        </span>
                                    </a>
                                    {/* <!-- item --> */}
                                    <a href="#" className="item">
                                        {/* <!-- icon --> */}
                                        <img src="/assets/images/icons/globe.svg" className="icon img-fluid" alt="Icon" />
                                        {/* <!-- item-con --> */}
                                        <span className="item-con">
                                            <span className="name">Web Hosting</span>
                                            <span className="des">Start hosting your website</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- close-side-box-btn --> */}
                <div className="close-side-box-btn" id="close-side-box-btn" onClick={handleSideBoxToggle}>
                    <img src="/assets/images/templates/navbar/close.png" className="img-fluid" alt="Close" />
                </div>
            </div>
        </>
    );
};

export default SideBox;