"use client"

import { motion } from 'framer-motion';
import React, { useEffect, useState, useMemo } from 'react'
import { fadeIn } from '../partials/framer-motion';
import Carousel from '../common/Carousel';

const Projects = () => {

    const [cachedRepos, setCachedRepos] = useState([]);

    const getRepos = async () => {
        try {
            const response = await fetch('/api/github');
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        return await response.json();
        } catch (error) {
            console.log('Error fetching repositories:', error);
        }
    }

    useEffect(() => {
        const fetchRepos = async () => {
            let res = await getRepos();
            setCachedRepos(res);
        };
        // Check if cached data exists
        if (cachedRepos?.length === 0) {
            fetchRepos();
        } else {
            console.log('Using cached repository data:', cachedRepos);
        }
    }, [cachedRepos]);

    const MemoizedCarousel = useMemo(() => React.memo(Carousel), []);

    return (
        <>
            <div id='projects' className="content-section grid grid-cols-4 gap-3 md:my-24 ">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-1 col-span-4  grid place-items-center'>
                    <div className='text-[20px] flex flex-col text-center md:text-left'>
                    <h2 className="text-xl md:text-3xl mb-1 text-black dark:text-white max-w-4xl">
                        Projects
                    </h2>
                        <a className='content-para  mb-5 underline underline-offset-8  cursor-pointer'
                            onClick={() => window.open('https://github.com/Risiidhan?tab=repositories', "_blank")}>
                            View All Projects - Github
                        </a>
                    </div>
                </motion.div>
                <div className='
                    md:col-span-3 col-span-4 h-fit
                    place-items-center md:place-items-start pt-6'>
                    <MemoizedCarousel props={cachedRepos} />

                </div>
            </div>
        </>
    )
}

export default Projects