import React from 'react'
import Socials from './../components/socials/socials'
import Nav from './../components/nav/nav'

function Home() {
    return (
        <div>
            <section id="main">
                <div>
                    <Nav />
                    <Socials />

                    <div class="oneline">
                        <h6>UI designer, Front-end developer and photographer with a passion for nature and music</h6>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Home
