import { div } from 'framer-motion/m'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        // <nav className="bg-transparent navbar">
        //     <div className="">
        //         <div className="relative flex h-16 items-center justify-between">
        //             <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        //                 <div className="flex flex-shrink-0 items-center">
        //                 </div>
        //                 <div className="hidden sm:ml-6 sm:block">
        //                     <div className="flex space-x-4">
        //                         <a href="#hero" className=" active:scale-95 decoration-fuchsia-500 underline-offset-4 decoration-2 text-white hover:underline rounded-md px-3 py-2 text-[16.8px] sm:text-[20px] font-thin" aria-current="page">Home</a>
        //                         <a href="#about" className="active:scale-95 decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-[16.8px] sm:text-[20px] font-thin">About</a>
        //                         <a href="#projects" className="active:scale-95 decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-[16.8px] sm:text-[20px] font-thin">Projects</a>
        //                         <a href="#contact" className="active:scale-95 decoration-fuchsia-500 underline-offset-4 decoration-2 cursor-pointer hover:underline hover:text-white rounded-md px-3 py-2 text-[16.8px] sm:text-[20px] font-thin">Contact</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <div className='w-full flex flex-col items-center'>
        <Image width={40} height={40} alt="" className='rotate-90 z-10' src={"/assets/scroll-down.gif"}/>
        <Image width={40} height={40} alt="" className='rotate-90 sm:block hidden mt-[-2.5%] z-0' src={"/assets/scroll-down.gif"} />

        </div>
    )
}

export default Navbar