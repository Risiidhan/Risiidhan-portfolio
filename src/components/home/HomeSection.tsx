import React from 'react'
import HomeHeroComponent from './HomeHeroComponent'
import Navbar from '../common/Navbar'
import Tools from './Tools'
import Projects from './Projects'
import About from './About'


const HomeSection = () => {
    return (
        <div className=''>
            <div className='content-section px-4 sm:px-12'>
                <Navbar />
                <HomeHeroComponent />
                <Tools />
                <About />
                <Projects />
                {/* <Stats /> */}
                {/* <Contact /> */}
            </div>
        </div>

    )
}

export default HomeSection