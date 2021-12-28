import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";


// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import useHashLocation from "./hooks/wouter-hash";

// The component that adds our Meta tags to the page
import Seo from "./components/seo.jsx";



// Home function that is reflected across the site
export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <header className="footer">
        <div className="links">
          <Link className = "home" href="/">Home</Link>
          <span className="divider">|</span>
          <Link href="/about">About</Link>
          <span className="divider">|</span>
          <Link href="/hazards">Hazards</Link>
          <span className="divider">|</span>
          <Link href="/report-incident">Incident Report</Link>
          <span className="divider">|</span>
          <Link className = "WR" href= "/rights">Worker's Rights</Link>
          <span className="divider">|</span>
          <Link href="/mental">Mental Health</Link>
          <span className="divider">|</span>
          <Link href="/tools">Tools</Link>
          
          
          
        </div>
      </header>
      <Seo />
      <main role="main" className="wrapper">
        {/* Main menu */}
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}

    </Router>
  );
}
