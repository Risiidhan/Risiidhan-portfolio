import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid'
import { IconBoxAlignRightFilled, IconClipboardCopy, IconFileBroken } from '@tabler/icons-react';

const RealProjects = () => {
    
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );

    const items = [
        {
            title: "Fitness app",
            description: "Explore the birth of groundbreaking ideas and  inventions.",
            header: <Skeleton />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Movie App",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "gsmfeed",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Portfolio",
            description:
                "Understand the impact of effective communication in our lives.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "gsmfeed app",
            description: "Join the quest for understanding and enlightenment.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Joy of Creation",
            description: "Experience the thrill of bringing ideas to life.",
            header: <Skeleton />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "The Spirit of Adventure",
            description: "Embark on exciting journeys and thrilling discoveries.",
            header: <Skeleton />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
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
    )
}

export default RealProjects