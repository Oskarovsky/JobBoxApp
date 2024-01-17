﻿/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link';
import React from 'react';
import {useState, useEffect} from "react";

const Header = ({handleOpen, handleRemove, openClass}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link legacyBehavior href="/">
                                    <a className="d-flex">
                                        <img alt="jobBox" src="assets/imgs/template/findjobintech/logo-no-background.png"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="header-nav">
                            <nav className="nav-main-menu">
                                <ul className="main-menu">

                                    <li>
                                        <Link legacyBehavior href="/jobs-list"><a>Job Offers</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/companies"><a>Companies</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/blog-grid"><a>Blog</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/page-contact"><a>Contact</a></Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={`burger-icon burger-icon-white ${openClass && "burger-close"}`}
                                 onClick={() => {
                                     handleOpen();
                                     handleRemove()
                                 }}>
                                <span className="burger-icon-top"/><span className="burger-icon-mid"/><span
                                className="burger-icon-bottom"/></div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…"/><i className="fi-rr-search"/>
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className="has-children">
                                            <Link legacyBehavior href="/"><a className="active">Home</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/jobs-grid"><a>Find a Job</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/jobs-grid"><a>Jobs Grid</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/jobs-list"><a>Jobs List</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/companies"><a>Companies</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/candidates-grid"><a>Candidates</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/candidates-grid">
                                                        <a>Candidates Grid</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>Candidate Details</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/jobs-grid"><a>Pages</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/page-contact"><a>Contact Us</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-register"><a>Register</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-signin"><a>Signin</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-reset-password">
                                                        <a>Reset Password</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-content-protected">
                                                        <a>Content Protected</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="/page-contact"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link legacyBehavior href="#"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/page-signin"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright">Copyright 2022 © JobBox. <br/>Designed by us.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-search mobile-header-border mb-30">
                                <form action="#">
                                    <input type="text" placeholder="Search…"/><i className="fi-rr-search"/>
                                </form>
                            </div>
                            <div className="mobile-menu-wrap mobile-header-border">
                                {/* mobile menu start*/}
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className="has-children">
                                            <Link legacyBehavior href="/"><a className="active">Home</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/jobs-grid"><a>Find a Job</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/jobs-grid"><a>Jobs Grid</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/jobs-list"><a>Jobs List</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/companies"><a>Companies</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/candidates-grid"><a>Candidates</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/candidates-grid">
                                                        <a>Candidates Grid</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/candidate-details">
                                                        <a>Candidate Details</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link legacyBehavior href="/jobs-grid"><a>Pages</a></Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link legacyBehavior href="/page-contact"><a>Contact Us</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-register"><a>Register</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-signin"><a>Signin</a></Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-reset-password">
                                                        <a>Reset Password</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link legacyBehavior href="/page-content-protected">
                                                        <a>Content Protected</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link legacyBehavior href="/page-contact"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link legacyBehavior href="#"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="#"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link legacyBehavior href="/page-signin"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright">Copyright 2024 © JobBox. <br/>Designed by us.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
