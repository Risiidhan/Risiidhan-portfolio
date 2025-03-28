import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { IconBoxAlignRightFilled, IconClipboardCopy, IconFileBroken } from '@tabler/icons-react';
import Image from "next/image"

const RealProjects = () => {

    const Skeleton = (url?: any) => (
        <div className="flex flex-1 w-full h-full rounded-xl">
            <Image alt="" className='w-full object-fit h-fit' width={200} height={100} src={url.url}></Image>
        </div>
    );

    const items = [

        {
            title: "Movie App",
            description: `This Angular application integrates the OMDB API to display a 
            vast movie collection, mobile-responsive UI. 
            Allowign users can search for movies and access detailed information.`,
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "gsmfeed landing site",
            description: `Contributed major part in Next.js-based landing site. It features server-side rendering (SSR), 
            Framer Motion animations, and Tailwind CSS for a dynamic and responsive user experience.`,
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Portfolio",
            description:
                `Portfolio is a sleek and modern web application built with Nextjs,
                 Framer motion and Tailwind CSS. It leverages the GitHub and LinkedIn API 
                 to dynamically fetch.`,
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Fitness app",
            description: `integrating Firebase, Tailwind CSS, jsPDF, Chart.js, and Stripe for data management 
            and analysis. It features secure authentication with role-based access, an interactive dashboard using 
            Chart.js for tracking metrics, and a calorie tracker to log daily intake. Users can perform CRUD operations
             on profiles, logs, and payments via Firebase Firestore. A real-time chat powered by Firebase Realtime Database
              enables messaging, while jsPDF allows PDF report generation. The app also integrates Stripe for a seamless payment UI.`,
            header: <Skeleton />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "gsmfeed app",
            description: `Contributed to a trader-focused social platform using Next.js, Tailwind, Laravel, 
            and Framer Motion. Built the Contacts page (followers/following), implemented KYC verification
             for 200+ users, added multi-language support and more.`,
            header: <Skeleton url="/assets/gif/app-gsmfeed-gif.gif" />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },

    ];

    return (
        <div className='h-[900px]'>
            <BentoGrid className="2xl:max-w-5xl mx-auto">
                {items.map((item: any, i: number) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}

export default RealProjects