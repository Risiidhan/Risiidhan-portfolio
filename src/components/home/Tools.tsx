"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../partials/framer-motion'
import Marquee from 'react-fast-marquee'

const Tools = () => {
    return (
        <div className=''>
            <motion.div
                id="about-title"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:col-span-1 col-span-3 md:order-2 mt-[-20%] order-1 grid place-items-center'>
                <span className='text-2xl sm:text-[50px] mb-10'>
                    Technologies
                </span>
            </motion.div>
            <section className='mb-24'>
                <motion.section
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.5 }}
                    className=''>
                    <div className='inner-glass-effect'>


                        <h1 className='text-center text-[16.8px] sm:text-[20px] pl-0 md:pl-6 pt-3 md:text-md mb-4 tracking-wide'>
                            Languages and Frameworks:</h1>
                        <Marquee autoFill={true} pauseOnHover>
                            <div className='flex items-center space-x-8 py-3 md:py-6 ml-6'>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20 mx-2' href="https://angular.io" target="blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://nextjs.org/" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://reactjs.org/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://www.w3schools.com/cs/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://nodejs.org" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" /></a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://dotnet.microsoft.com/" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" /></a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://expressjs.com" target="blank" rel="noreferrer">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                                </a>
                            </div>
                        </Marquee>
                        <Marquee autoFill={true} pauseOnHover direction='right'>
                            <div className='flex items-center  space-x-8 py-3 md:py-6 ml-6'>
                                <a className="w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> </a>
                                <a className="w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20" href="https://www.docker.com/" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" /></a>
                                <a className='w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20' href="https://www.mysql.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>
                                <a className='w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20' href="https://www.mongodb.com/" target="blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></a>
                                <a className='w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20' href="https://postman.com" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
                                <a className='w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20' href="https://www.microsoft.com/en-us/sql-server" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" /></a>
                                <a className='w-9 md:w-16  2xl:w-20 h-9 md:h-16  2xl:h-20' href="https://firebase.google.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /> </a>
                            </div>

                        </Marquee>

                        <Marquee autoFill={true} pauseOnHover>
                            <div className='flex items-center space-x-8 py-3 md:py-6  ml-6'>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://git-scm.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://getbootstrap.com" target="blank" rel="noreferrer"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" /></a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://www.chartjs.org" target="blank" rel="noreferrer"> <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://tailwindcss.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://www.typescriptlang.org/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" /> </a>
                                <a className='w-9 md:w-16   2xl:w-20 h-9 md:h-16   2xl:h-20' href="https://www.w3.org/html/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>
                            </div>
                        </Marquee>
                    </div>
                </motion.section>
            </section>
        </div>

    )
}

export default Tools