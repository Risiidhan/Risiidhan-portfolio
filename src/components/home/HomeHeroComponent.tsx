"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextHoverEffect } from '../ui/CoverText';
const HomeHeroComponent = () => {
    const targetRef = useRef(null);
    const textBgRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end end"]
    });

    // Title transforms: opacity and y-position
    const titleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const mediaOpacity = useTransform(scrollYProgress, [0.3, 0.51], [1, 0]);

    const titleScale = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);
    // const bgDivWidth = useTransform(scrollYProgress, [0, 1], [ ]);

    return (
        <>
            <div ref={targetRef} className="h-[120dvh] lg:h-[190vh]  w-full flex flex-col items-center">
                <motion.div
                    style={{
                        opacity: titleOpacity,
                        scale: titleScale
                    }}
                    className="sticky top-[40dvh] lg:top-[20dvh] w-[100dvw] translate-y-[50%] text-center"
                >
                    <div className='relative w-[100dvw]'>
                        <motion.div
                            style={{
                                scaleX: scrollYProgress
                            }}
                            className='absolute w-full h-full top-1'>

                        </motion.div>
                        <p className="text-[30px] w-[100dvw] md:text-[60px] leading-[2rem] sm:leading-[3rem] font-semibold z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">

                            <TextHoverEffect automatic={true} text="RISIIDHAN" />
                        </p>
                        <p className="content-para -mt-5 sm:text-[30px]">
                            Software Engineer | BEng (Hons) | Full-Stack Developer
                        </p>
                        <div className="typewriter">
                            <p className="content-para sm:text-[24px]">I'M RISIIDHASN PUNNIYAMOORTHY, WELCOME TO MY PORTFOLIO</p>
                        </div>
                    </div>

                </motion.div>


                <motion.div
                    style={{
                        opacity: mediaOpacity
                    }}
                    className="flex absolute top-[85dvh] items-center gap-6 justify-center">
                    <a className='w-6 h-6 ' href="https://x.com/risiidhan" target="blank">

                        <svg viewBox="0 0 128 128">
                            <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" fill="#FFFFFF"></path>
                        </svg>

                    </a>
                    <a className='w-6 h-6 ' href="https://www.linkedin.com/in/risiidhan/" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="risiidhan punniyamoorthy" /></a>
                    <a className='w-6 h-6 ' href="https://instagram.com/risiidhan" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="risiidhan" /></a>
                    <a className='w-9 h-9 ' href="https://www.hackerrank.com/rkishon4" target="blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="risiidhan" /></a>

                </motion.div>
            </div>

        </>

    );
}

export default HomeHeroComponent