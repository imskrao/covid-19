import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import { navItems } from './Constant'

import './style.css'

export default function Navigation() {
    return (
        <div className="page-navigation-outer">
            <div className="page-navigation">
                <div className="page-logo">
                    Covid-19
            </div>
                <div className="nav-items">
                    <Router>
                        {navItems && navItems.map((item, index) => <Link key={index} to={item.url}>{item.name}</Link>)}
                    </Router>
                </div>
            </div>
        </div>
    )
}
