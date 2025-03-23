"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../partials/framer-motion'
import Marquee from 'react-fast-marquee'
import Image from "next/image"
import TextReveal from '../ui/TextReveal'

const Tools = () => {

    const stacks1 = [
        "https://angular.io/assets/images/logos/angular/angular.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    ]

    const stacks2 = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    ]
    const stacks3 = [
        "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        "https://www.chartjs.org/media/logo-title.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    ]


    return (
        <div className=''>
            <TextReveal>
                <div className="max-w-7xl md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
                    <h2 className="text-xl text-center md:text-3xl mb-4 text-black dark:text-white max-w-4xl">
                        Technologies
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-300 md:text-lg max-w-sm">
                        Languages and Frameworks
                    </p>
                </div>
            </TextReveal>
            <section className='mb-24 hidden md:block'>
                {[stacks1, stacks2, stacks3].map((stack, index) => (
                    <section key={index} className={`w-full flex ${index == 1 ? "justify-start" : "justify-center"} my-4`}>
                        <div className='flex justify-between w-[90%]'>
                            {stack.map((item, subIndex) => (
                                <div key={subIndex} className={`w-fit border transition-all duration-100 ${subIndex % 2 == 0 ? "reverse-vertical-move-animation border-purple-400" : "vertical-move-animation border-blue-600"} 
                                rounded-full shadow-lg shadow-[#be70cb5a] h-[100px] mx-2 flex justify-center aspect-square`}>
                                    <Image src={item} width={50} height={50} className='h-auto aspect-square w-[50px]' alt="" />
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
                                <div key={subIndex} className={`w-fit border ${subIndex % 2 == 0 ? "reverse-vertical-move-animation" : "vertical-move-animation"} rounded-full
                                 h-[80px] mx-2 flex justify-center aspect-square`}>
                                    <Image src={item} width={50} height={50} className='h-auto aspect-square w-[30px]' alt="" />
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