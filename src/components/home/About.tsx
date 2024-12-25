"use client"

import { FaGraduationCap, FaCode } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const About = () => {
    // const isMobile = window.innerWidth <= 768;
    // const containerMotion = isMobile ? "hidden" : "show";
  
    return (
      <div className="mb-[8rem] ">
       <motion.div
            id="about-title"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='sticky z-0 top-[100px] mb-[3rem] h-[400px] text-center'>
            <span className='text-xl sm:text-[50px] mb-2'>
              Qualification and Experience
            </span>
          </motion.div>
        <div
          id="about"
          className="content-section grid">
          <div
            className='
            
              md:col-span-2 col-span-3 
              border-2 rounded-xl max-h-[400px] overflow-y-auto border-fuchsia-300
              md:order-1 order-2 grid place-items-center md:place-items-start
              px-6 py-6 text-[16.8px] z-10 sm:text-[20px] font-thin tracking-wide text-center md:text-justify
              '>
            <div className='icon-container text-4xl md:text-left my-3'>
              <FaCode />
            </div>
               As a Software Engineer I have demonstrated a strong ability
                to adapt quickly and learn independently, ensuring timely project completion
                and maintaining a steadfast commitment to excellence. My journey began with a
                role where I served to enhance website responsiveness and cross platform development
                and now I play a full stack role in the development of comprehensive projects.
            <br />
            <div className='icon-container text-4xl md:text-5xl text-left md:text-left my-3'>
              <FaGraduationCap />
            </div>
  
                Education wise, I hold a Bachelor’s degree in Software Engineering from London
                Metropolitan University, where I graduated with First Class Honors. Recognized
                as the top performer in my graduating batch, I have consistently demonstrated a
                strong aptitude for academic excellence and a passion for continuous learning.
          </div>
        </div>
      </div>
  
    )
}
export default About