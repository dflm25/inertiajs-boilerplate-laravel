/**
 * 
 */
import React, { useState } from 'react';
import Header from './Header';
import SideNav from './Sidenav';

function Layout({ children }) {
  const [showSideNav, setShowSideNav] = useState(true);

  return (
    <div className="app-admin-wrap layout-sidebar-large">
      <Header setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      <SideNav showSideNav={showSideNav} />
      <div className={`main-content-wrap d-flex flex-column ${showSideNav ? 'sidenav-open' : ''}`}>
          <div className="main-content">
              <div className="breadcrumb">
                  <h1>Blank</h1>
                  <ul>
                      <li><a href="">Pages</a></li>
                      <li>Blank</li>
                  </ul>
              </div>
              <div className="separator-breadcrumb border-top">
                {children}
              </div>
          </div>
          <div className="flex-grow-1"></div>
      </div>
  </div>
  );
}

export default Layout;