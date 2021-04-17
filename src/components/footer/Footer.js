import React from 'react'

import './style.css'

const sourceLink = ' https://api.covid19india.org/'

export default function Footer() {
    return (
        <div className="footer-outer">
            <div className="footer">
                {/* <p>Developed by Santosh Rao</p> */}
                <p>Data source:
                    <span onClick={() => window.open(sourceLink, '_blank')}>
                        {sourceLink}
                    </span>
                </p>
            </div>
        </div>
    )
}
