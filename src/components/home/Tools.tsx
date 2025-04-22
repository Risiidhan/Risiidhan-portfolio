"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../partials/framer-motion'
import Marquee from 'react-fast-marquee'
import Image from "next/image"
import TextReveal from '../ui/TextReveal'
import TextParaAnimation from '../ui/TextParaAnimation'

const Tools = () => {
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" />
          

    const stacks1 = [
        { src: "https://angular.io/assets/images/logos/angular/angular.svg", alt: "Angular" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", alt: "React" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", alt: "Laravel" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", alt: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", alt: ".NET Core" },
    ];

    const stacks2 = [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", alt: "Azure SQL Database" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", alt: "JavaScript" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", alt: "Docker" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", alt: "Microsoft SQL Server" },
    ];

    const stacks3 = [
        { src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", alt: "Firebase" },
        { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "Git" },
        { src: "https://www.chartjs.org/media/logo-title.svg", alt: "Chart.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
        { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", alt: "HTML5" },
    ];



    return (
        <div className=''>
            <TextReveal>
                <div className="max-w-7xl md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center mx-auto pt-20 pb-2 px-4 md:px-8 lg:px-10">
                    <h2 className="text-xl text-center md:text-3xl mb-1 text-black dark:text-white md:max-w-4xl">
                        Tech Stack & Tools
                    </h2>
                </div>
            </TextReveal>
            <TextParaAnimation>
                <div className=' w-full  flex justify-center'>
                    <p className="text-neutral-700 dark:text-neutral-300 text-center content-para pb-10 max-w-[70%]">
                        A collection of technologies and tools shaping my development journey, ensuring efficiency and performance.
                    </p>
                </div>
            </TextParaAnimation>
            <section className='mb-24 hidden md:block'>
                {[stacks1, stacks2, stacks3].map((stack, index) => (
                    <section key={index} className={`w-full flex ${index == 1 ? "justify-start" : "justify-center"} my-4`}>
                        <div className='flex justify-between w-[90%]'>
                            {stack.map((item, subIndex) => (
                                <div key={subIndex} className={`w-fit border transition-all duration-100 ${subIndex % 2 == 0 ? "reverse-vertical-move-animation border-purple-400" : "vertical-move-animation border-blue-600"} 
                                rounded-full shadow-lg shadow-[#be70cb5a] h-[100px] mx-2 flex justify-center aspect-square`}>
                                    <Image src={item?.src} width={50} height={50} className='h-auto aspect-square w-[50px]' alt={item?.alt} title={item?.alt} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>

            <section className='mb-24 flex md:hidden'>
                {[stacks1, stacks2, stacks3].map((stack, index) => (
                    <section key={index} className={`w-full flex justify-center my-4`}>
                        <div className='flex flex-col items-center gap-3 justify-between w-[90%]'>
                            {stack.map((item, subIndex) => (
                                <div key={subIndex} className={`w-fit border ${subIndex % 2 == 0 ? "reverse-vertical-move-animation border-purple-400" : "vertical-move-animation border-blue-400"} rounded-full
                                 h-[80px] mx-2 flex shadow-[#be70cb5a] justify-center aspect-square`}>
                                    <Image src={item?.src} width={50} height={50} className='h-auto aspect-square w-[30px]' alt={item?.alt} title={item?.alt} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </section>
        </div>

    )
}

export default Tools