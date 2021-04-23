import React from 'react'

function nav() {
    return (
        <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="/" class="logo">BQTH</a>
                    <ul id="nav-mobile" class="right ">
                        <li><a className="nav-link" href="/designs">DESIGNS</a></li>
                        <li><a className="nav-link" href="/deployed-projects">DEPLOYED PROJECTS</a></li>
                        <li><a className="nav-link" href="/contact-me">CONTACT ME</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default nav
