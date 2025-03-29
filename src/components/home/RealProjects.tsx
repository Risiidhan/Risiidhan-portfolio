import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import Image from "next/image"
import TextReveal from '../ui/TextReveal'
import TextParaAnimation from '../ui/TextParaAnimation'

const RealProjects = () => {

    const GenerateIcons = (items: string[]) => {
        return <div className='w-6 h-6 flex gap-2'>
            {items.map((framework: any) => (
                <img alt={`${framework}-icon `} className='shadow-white' title={`${framework}-icon `} key={framework} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${framework}/${framework}-original.svg`} />
            ))}
        </div>
    }

    const Skeleton = ({ url, isSquare = false }: { url: string; isSquare?: boolean }) => (
        <div className="flex flex-1 w-full h-fit overflow-hidden rounded-md">
            <Image alt="" className={`w-full object-cover ${isSquare ? "md:aspect-[0.9/0.95]" : isSquare} h-fit`} width={200} height={100} src={url}></Image>
        </div>
    );

    const items = [
        {
            title: "Portfolio",
            description:
                `Portfolio is a sleek and modern web application built with Nextjs,
                 Framer motion and Tailwind CSS. It leverages the GitHub and LinkedIn API 
                 to dynamically fetch.`,
            header: <Skeleton url="/assets/gif/portfolio.gif" />,
            icon: GenerateIcons(["nextjs", "tailwindcss", "framermotion"]),
            isSource: true,
            link: "https://github.com/Risiidhan/Risiidhan-portfolio"
        },

        {
            title: "Movie App",
            description: `This Angular application integrates the OMDB API to display a 
            vast movie collection, mobile-responsive UI. 
            Allowign users can search for movies and access detailed information.`,
            header: <Skeleton url="/assets/gif/app-movie.gif" />,
            icon: GenerateIcons(["angular"]),
            isSource: false,
            link: "https://movieapp-74.netlify.app/"
        },
        {
            title: "gsmfeed landing site",
            description: `Contributed major part in Next.js-based landing site. It features server-side rendering (SSR), 
            Framer Motion animations, and Tailwind CSS for a dynamic and responsive user experience.`,
            header: <Skeleton url="/assets/gif/gsmfeed-landing.gif" />,
            icon: GenerateIcons(["nextjs", "tailwindcss", "laravel"]),
            isSource: false,
            link: "https://gsmfeed.com/"
        },

        {
            title: "Fitness app",
            description: `integrating Firebase, Tailwind CSS, jsPDF, Chart.js, and Stripe for data management 
            and analysis. It features secure authentication with role-based access, an interactive dashboard. 
             A real-time chat powered by Firebase Realtime Database
              enables messaging, while jsPDF allows PDF report generation.`,
            header: <Skeleton url="/assets/gif/getstrong.gif" />,
            icon: GenerateIcons(["angular", "firebase", "tailwindcss"]),
            isSource: true,
            link: "https://github.com/Risiidhan/Get-Strong-Fitness-App"
        },
        {
            title: "gsmfeed app",
            description: `Contributed to a trader-focused social platform using Next.js, Tailwind, Laravel, 
            and Framer Motion. Built the Contacts page (followers/following), implemented KYC verification
            for 200+ users, added multi-language support and more.`,
            header: <Skeleton url="/assets/gif/gsmfeed-app.gif" isSquare={true} />,
            icon: GenerateIcons(["nextjs", "tailwindcss", "laravel"]),
            isSource: false,
            link: "https://app.gsmfeed.com/"
        },
    ];

    return (
        <div className='h-auto mb-24'>
            <TextReveal>
                <h2 className="text-xl text-center md:text-3xl mb-1 text-black dark:text-white pb-2 ">
                    Featured Work
                </h2>
            </TextReveal>
            <TextParaAnimation>
                <div className=' w-full  flex justify-center'>
                    <p className="text-neutral-700 dark:text-neutral-300 text-center content-para pb-10 sm:max-w-[70%]">
                        Showcasing a collection of innovative and dynamic projects that blend
                        creativity with technology. From sleek web applications to powerful backend
                        solutions, each project reflects a commitment to high-quality development,
                        performance, and user experience.
                    </p>
                </div>
            </TextParaAnimation>
            <BentoGrid className="2xl:max-w-5xl mx-auto">
                {items.map((item: any, i: number) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        isSource={item?.isSource}
                        link={item?.link}
                        className={i === 3 || i === 6 ? "lg:col-span-2 " : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default RealProjects