"use client"

import { motion } from 'framer-motion';
import React, { useEffect, useState, useMemo } from 'react'
import { fadeIn } from '../partials/framer-motion';
import Carousel from '../common/Carousel';
import TextParaAnimation from '../ui/TextParaAnimation';
import Link from 'next/link';

const Projects = () => {

    const [cachedRepos, setCachedRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getRepos = async () => {
        try {
            const response = await fetch('/api/github');
            if (!response.ok) {
                throw new Error("Failed to fetch repositories");
            }
            setIsLoading(false)
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
            <div id='projects' className="content-section  md:mt-24 sm:!mt-[10rem] ">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-1 col-span-4  grid place-items-center'>
                    <div className='text-[20px] flex flex-col text-center md:text-left'>
                        <h2 className="text-xl md:text-3xl mb-1 text-center text-black dark:text-white max-w-4xl">
                            More GitHub Projects
                        </h2>
                        <p className='content-para'>
                            Explore additional projects showcasing creativity, problem-solving, and technical expertise.
                        </p>
                        <Link
                            href={'https://github.com/Risiidhan?tab=repositories'} target='_blank' rel="noopener noreferrer"
                            className='content-para text-md text-purple-300 text-center pt-2 mb-5 transition-all
                          duration-300 hover:underline underline-offset-8  cursor-pointer'>
                            View All Projects
                        </Link>
                    </div>
                </motion.div>
                <div className='fade-out    
                    md:col-span-3 col-span-4 h-fit
                    place-items-center md:place-items-start pt-6'>
                    <MemoizedCarousel props={cachedRepos} />
                </div>
                {isLoading ? ( <Carousel isLoading={isLoading}/>) : ""}
            </div>
        </>
    )
}

export default Projects