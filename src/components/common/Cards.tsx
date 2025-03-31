

import { div } from 'framer-motion/m';
import React, { memo, useEffect, useRef } from 'react'
import { FaGithub, FaLink, FaStar } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

const Cards = ({ prop }: any) => {

    const cardRef = useRef(null);

    const renderIcons = () => {
        let lang = prop?.language.toLowerCase();
        lang === 'html' ? (lang = 'html5') : (lang = lang);
        lang === 'c#' ? (lang = 'csharp') : (lang = lang);

        let description = prop?.description ?? '';
        let frameworks = description?.split('Framework ')[1]?.split(',') || [lang];

        return frameworks.map((framework: any) => (
            <img alt={`${framework}-icon `} title={`${framework}-icon `} key={framework} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${framework}/${framework}-original.svg`} />
        ));
    };

    // let lang = prop.language.toLowerCase();
    // lang == 'html' ? lang = 'html5' : lang = lang;
    // lang == 'c#' ? lang = 'csharp' : lang = lang;
    let aboutBreakdown = prop?.description?.split('Framework ');
    let description = aboutBreakdown?.[0]
    // let frameworks = aboutBreakdown[1]?.split(',') ? aboutBreakdown[1]?.split(',') : aboutBreakdown[1];

    useEffect(() => {
        const setMaxHeight = () => {
            const cards = document.querySelectorAll('.card-container');
            let maxHeight = 0;
            cards.forEach(card => {
                maxHeight = Math.max(maxHeight, card.clientHeight);
            });
            return window.innerWidth >= 768 ? maxHeight + 2 : maxHeight + 5;
        };

        const cards = document.querySelectorAll('.card-container');

        const applyMaxHeight = () => {
            if (prop) {
                const maxHeight = setMaxHeight();
                cards.forEach((card: any) => {
                    card.style.height = `${maxHeight + 4}px`;
                });
            } else {
                cards.forEach((card: any) => {
                    card.style.height = `250px`;
                });
            }
        };
        applyMaxHeight();
    }, []);

    return (
        <>
            <div ref={cardRef} className="border bg-gradient-to-b !w-[88%] md:!w-full from-pink-400 via-purple-500 to-blue-500 rounded-2xl !shadow-none px-[0.7px] py-[0.7px] card-container">
                <div className='bg-[#0f0f0f] w-full h-full rounded-[15px] px-8 py-3'>
                    <div className="flex items-center justify-between py-2">
                        <div className='w-6 h-6 flex gap-2'>
                            {prop ? (renderIcons()) : (
                                <div className='flex gap-2'>
                                    <div className='animate-pulse h-4 w-4 rounded-full bg-zinc-500'></div>
                                    <div className='animate-pulse h-4 w-4 rounded-full bg-zinc-500'></div>
                                    <div className='animate-pulse h-4 w-4 rounded-full bg-zinc-500'></div>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-end items-center gap-1 w-24 h-px 2xl:w-32'>
                            <FaStar /> {prop?.stargazers_count}
                            <TbGitFork /> {prop?.forks_count}
                        </div>
                    </div>

                    <h5 className="block font-sans text-xl md:text-2xl font-medium  ">
                        {prop ? prop?.name : (
                            <div className='animate-pulse flex w-full flex-col gap-2'>
                                <div className=' h-5 w-[30%] rounded-md bg-zinc-500'></div>
                            </div>
                        )}
                    </h5>
                    <div className=" pt-3 md:pb-6 block font-sans text-[16px] font-thin leading-relaxed antialiased">
                        {prop ? description : (
                            <div className='animate-pulse flex w-full flex-col gap-2'>
                                <div className=' h-3 w-[80%] rounded-md bg-zinc-500'></div>
                                <div className=' h-3 w-full rounded-md bg-zinc-500'></div>
                                <div className=' h-3 w-full rounded-md bg-zinc-500'></div>
                                <div className=' h-3 w-full rounded-md bg-zinc-500'></div>
                                <div className=' h-3 w-full rounded-md bg-zinc-500'></div>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2 absolute bottom-3 mb-4">
                        {prop ? <button
                            className="flex justify-center hover:bg-purple-300 hover:text-black mt-[0.5rem] active:scale-95 transition-all duration-200 items-center border-2 text-xs 2xl:text-sm px-3 py-1 border-purple-300  rounded-md"
                            type="button"
                            data-ripple-light="true"
                            onClick={() => window.open(prop?.html_url, "_blank")}
                        >
                            <FaGithub className='mr-1' />
                            Source
                        </button> : (
                            <div className='animate-pulse flex w-full flex-col gap-2'>
                                <div className=' h-8 w-[30%] rounded-md bg-zinc-500'></div>
                            </div>
                        )}

                        {prop?.homepage && (
                            <button
                                className="flex justify-center hover:bg-purple-300 hover:text-black mt-[0.5rem] active:scale-95 transition-all duration-200 items-center border-2 text-xs 2xl:text-sm px-3 py-1 border-purple-300  rounded-md"
                                type="button"
                                data-ripple-light="true"
                                onClick={() => window.open(prop?.homepage, "_blank")}
                            >
                                <FaLink className='mr-1' />
                                Website
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default memo(Cards);