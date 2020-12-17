/**
 * 
 */
import React, { useState, useRef } from "react";
import { InertiaLink } from '@inertiajs/inertia-react';
import { FaBell } from 'react-icons/fa';

import useOutSideClick from '../../hooks/useOutSideClick';

function Header({ setShowSideNav, showSideNav }) {
    const [showProfile, setShowProfile] = useState(false);
    const ref = useRef();

    useOutSideClick(ref, () => {
        if(showProfile) setShowProfile(false);
    });

    return (
    <div className="main-header">
        <div className="logo">
            <img src="./img/logo.png" alt="" />
        </div>
        <div className="menu-toggle" onClick={()=> setShowSideNav(!showSideNav)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div style={{ margin: 'auto' }}></div>
        <div className="header-part-right">
            <i className="i-Full-Screen header-icon d-none d-sm-inline-block"></i>
            <div className="dropdown">
                <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="badge badge-primary">3</span>
                    <FaBell className="i-Bell text-muted header-icon"/>
                </div>
            </div>
            <div className="dropdown">
                <div className={`user col align-self-end ${showProfile ? 'show' : ''}`} onClick={()=> setShowProfile(!showProfile)}>
                    <img src="./img/logo.png" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <div ref={ref} className={`dropdown-menu dropdown-menu-right ${showProfile ? 'show' : ''}`} aria-labelledby="userDropdown">
                        <div className="dropdown-header">
                            <i className="i-Lock-User mr-1"></i> Timothy Carlson
                        </div>
                        <a className="dropdown-item">Account settings</a>
                        <a className="dropdown-item">Billing history</a>
                        <InertiaLink href="/logout" className="dropdown-item">
                          Sign out
                        </InertiaLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
