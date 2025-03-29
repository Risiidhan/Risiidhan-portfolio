import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='content-section py-6'>
    <div className='w-full flex flex-col md:flex-row my-4 justify-between items-center text-sm'>
        <div className="text-center md:text-left">
            <p className='content-para'>Copyright © {new Date().getFullYear()} Risiidhan Punniyamoorthy</p>
           
            <p className="text-gray-400 content-para">Designed & built with passion</p>
        </div>
        <div className='flex flex-col md:gap-1 items-center md:items-end'>
            <p className="font-semibold content-para">Connect with me:</p>
            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 text-lg'>
                <p className='content-para'>rkishon4@gmail.com</p>
                <div className='flex gap-4'>

                <a href="https://github.com/risiidhan" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/risiidhan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer