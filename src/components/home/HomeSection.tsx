import React from 'react'
import HomeHeroComponent from './HomeHeroComponent'
import Navbar from '../common/Navbar'
import Tools from './Tools'
import Projects from './Projects'
import About from './About'
import AboutTimeline from './AboutTimeline'
import { Vortex } from '../ui/vortex'
import Contact from './Contact'


const HomeSection = () => {
    return (
        <div className=''>
            <div className='content-section px-4 sm:px-12'>
                <Navbar />
                <Vortex
                    backgroundColor="black"
                    rangeY={1600}
                    particleCount={100}
                    baseHue={2000}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >
                    <HomeHeroComponent />
                </Vortex>
                <Tools />
                <AboutTimeline />
                <Projects />
                {/* <Stats /> */}
                <Contact />
            </div>
        </div>

    )
}

export default HomeSection