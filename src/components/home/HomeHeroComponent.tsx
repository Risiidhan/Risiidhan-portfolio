"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextHoverEffect } from '../ui/CoverText';
import { FloatingDock } from '../ui/FloatingDock';
import TextParaAnimation from '../ui/TextParaAnimation';
const HomeHeroComponent = () => {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start center", "end end"]
    });

    const titleOpacity = useTransform(
        scrollYProgress,
        isMobile ? [0.6, 1] : [0.4, 1], // Adjust mobile range
        [1, 0]
    );
    const titleScale = useTransform(
        scrollYProgress,
         [0, 1], // Adjust mobile range
         isMobile ? [0.5, 0.85] :[0.5, 0.9]
    );
    // const titleScale = useTransform(scrollYProgress, [0, 1], [0.5, 0.9]);

    const Links = [
        {
            title: "X",
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/X_logo_2023_%28white%29.png/900px-X_logo_2023_%28white%29.png?20230728230735" alt="risiidhan x link" />,
            href: "https://x.com/risiidhan"
        },
        {
            title: "LinkedIn",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="risiidhan linkedIn link" />,
            href: "https://www.linkedin.com/in/risiidhan/",
        },
        {
            title: "Instagram",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="risiidhan Instagram link" />,
            href: "https://instagram.com/risiidhan",
        },
        {
            title: "HackerRank",
            icon: <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="risiidhan hackerRank link" />,
            href: "https://www.hackerrank.com/rkishon4",
        },
        {
            title: "GitHub",
            icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" alt='risiidhan github link' />,
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
                    <h1 className='hidden'>Risiidhan Punniyamoorthy</h1>
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

                            <p className="text-[20px] -mt-[20px] sm:text-[30px]">
                                Software Engineer | BEng (Hons) <br className='sm:hidden' /> | Full-Stack Developer
                            </p>
                        </TextParaAnimation>
                        <TextParaAnimation>
                            <div className="typewriter">
                                <p className="text-[20px] sm:text-[24px]">I'M RISIIDHASN PUNNIYAMOORTHY, WELCOME TO MY PORTFOLIO</p>
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