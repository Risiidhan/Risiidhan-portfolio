"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextHoverEffect } from '../ui/CoverText';
import { FloatingDock } from '../ui/FloatingDock';
import TextParaAnimation from '../ui/TextParaAnimation';
const HomeHeroComponent = () => {
    const targetRef = useRef(null);
    const textBgRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end end"]
    });

    const titleOpacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);

    const Links = [
        {
            title: "X",
            icon: <svg viewBox="0 0 128 128">
                <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" fill="#FFFFFF"></path>
            </svg>,
            href: "https://x.com/risiidhan"
        },
        {
            title: "LinkedIn",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="risiidhan punniyamoorthy" />,
            href: "https://www.linkedin.com/in/risiidhan/",
        },
        {
            title: "Instagram",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="risiidhan" />,
            href: "https://instagram.com/risiidhan",
        },
        {
            title: "HackerRank",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="risiidhan" />,
            href: "https://www.hackerrank.com/rkishon4",
        },
        {
            title: "GitHub",
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" />,
            href: "https://github.com/Risiidhan/",
        }
    ]


    return (
        <>
            <div ref={targetRef} className="h-[120dvh] lg:h-[190vh]  w-full flex flex-col items-center">
                <motion.div
                    style={{
                        opacity: titleOpacity,
                        scale: titleScale
                    }}
                    className="sticky top-[40dvh] lg:top-[15dvh] w-[100dvw] translate-y-[50%] text-center"
                >
                    <div className='relative w-[100dvw]'>
                        <motion.div
                            style={{
                                scaleX: scrollYProgress
                            }}
                            className='absolute w-full h-full top-1'>

                        </motion.div>
                        <p className="">

                            <TextHoverEffect automatic={true} text="RISIIDHAN" />
                        </p>
                        <TextParaAnimation>

                            <p className="content-para -mt-[20px] sm:text-[30px]">
                                Software Engineer | BEng (Hons) | Full-Stack Developer
                            </p>
                        </TextParaAnimation>
                        <TextParaAnimation>
                            <div className="typewriter">
                                <p className="content-para sm:text-[24px]">I'M RISIIDHASN PUNNIYAMOORTHY, WELCOME TO MY PORTFOLIO</p>
                            </div>
                        <div className="flex relative top-[10dvh] items-center gap-6 justify-center">
                            <FloatingDock items={Links} desktopClassName={"scale-[1.5]"} />
                        </div>
                        </TextParaAnimation>
                    </div>

                </motion.div>


            </div>

        </>

    );
}

export default HomeHeroComponent