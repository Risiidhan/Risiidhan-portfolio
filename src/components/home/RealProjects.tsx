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
                `I designed and developed this modern portfolio using Next.js, 
                 Framer Motion, and Tailwind CSS. It dynamically fetches data 
                 from GitHub API, showcasing my projects and 
                 professional experience in an interactive and engaging way.`,
            header: <Skeleton url="/assets/gif/portfolio.gif" />,
            icon: GenerateIcons(["nextjs", "tailwindcss", "framermotion"]),
            isSource: true,
            link: "https://github.com/Risiidhan/Risiidhan-portfolio"
        },
    
        {
            title: "Movie App",
            description: `I built this Angular-based movie application, integrating 
            the TMDB API for an extensive movie collection. I implemented a 
            mobile-responsive UI and a seamless search functionality that allows 
            users to discover detailed movie information effortlessly.`,
            header: <Skeleton url="/assets/gif/app-movie.gif" />,
            icon: GenerateIcons(["angular"]),
            isSource: false,
            link: "https://movieapp-74.netlify.app/"
        },
        
        {
            title: "GSMFeed Landing Site",
            description: `I played a major role in developing this landing page, 
            implementing server-side rendering (SSR) for better performance and SEO. I also 
            enhanced the UI with Framer Motion, designed 
            a responsive UI using Tailwind CSS and event managements with backend APIs.`,
            header: <Skeleton url="/assets/gif/gsmfeed-landing.gif" />,
            icon: GenerateIcons(["nextjs", "tailwindcss", "laravel"]),
            isSource: false,
            link: "https://gsmfeed.com/"
        },
    
        {
            title: "Fitness App",
            description: `I built this fitness management platform from the ground up, 
            integrating Angular with Firebase for real-time data management, Stripe for payments, 
            and Chart.js for analytics. I also implemented secure authentication with 
            role-based access, a real-time chat feature, and PDF report generation using jsPDF.`,
            header: <Skeleton url="/assets/gif/getstrong.gif" />,
            icon: GenerateIcons(["angular", "firebase", "tailwindcss"]),
            isSource: true,
            link: "https://github.com/Risiidhan/Get-Strong-Fitness-App"
        },
    
        {
            title: "GSMFeed App",
            description: `I contributed significantly to this full stack trader-focused social platform. 
            My key contributions included developing the Contacts page (followers/following), implementing KYC verification 
            for over 200 users, the onboarding process and adding multi-language support to enhance accessibility.`,
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