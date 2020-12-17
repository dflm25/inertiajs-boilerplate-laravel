/**
 * 
 */
import React from 'react';
import { FaChartBar } from 'react-icons/fa';

function SideNav({ showSideNav }) {
  return (
    <div className="side-content-wrap">
        <div className={`sidebar-left rtl-ps-none ${showSideNav ? 'open' : ''}`} data-perfect-scrollbar="" data-suppress-scroll-x="true">
            <ul className="navigation-left">
                <li className="nav-item active" data-item="dashboard">
                  <a className="nav-item-hold" href="#">
                    <i className="nav-icon i-Bar-Chart"></i>
                    <FaChartBar className="nav-icon" />
                    <span className="nav-text">Dashboard</span>
                  </a>
                  <div className="triangle"></div>
                </li>
                <li className="nav-item" data-item="dashboard">
                  <a className="nav-item-hold" href="#">
                    <i className="nav-icon i-Bar-Chart"></i>
                    <FaChartBar className="nav-icon" />
                    <span className="nav-text">Dashboard</span>
                  </a>
                  <div className="triangle"></div>
                </li>
            </ul>
        </div>
        <div className="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
            <ul className="childNav" data-parent="dashboard">
                <li className="nav-item"><a href="dashboard1.html"><i className="nav-icon i-Clock-3"></i><span className="item-name">Version 1</span></a></li>
                <li className="nav-item"><a href="dashboard2.html"><i className="nav-icon i-Clock-4"></i><span className="item-name">Version 2</span></a></li>
                <li className="nav-item"><a href="dashboard3.html"><i className="nav-icon i-Over-Time"></i><span className="item-name">Version 3</span></a></li>
                <li className="nav-item"><a href="dashboard4.html"><i className="nav-icon i-Clock"></i><span className="item-name">Version 4</span></a></li>
            </ul>
        </div>
        <div className="sidebar-overlay"></div>
    </div>
  );
}

export default SideNav;