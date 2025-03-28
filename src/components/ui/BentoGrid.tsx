"use client"

import { cn } from "@/libs/utils";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl h-full grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  isSource
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: any,
  isSource?: boolean
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,)}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-[16px] font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
        <Link
          className="flex w-fit justify-center hover:bg-white hover:text-black mt-[0.7rem] active:scale-95 transition-all duration-200 items-center border-2 text-xs 2xl:text-sm px-3 py-1 border-white  rounded-md"
          href={link}
        >
          {isSource ? (<FaLink className='mr-1' />) : (<FaLink className='mr-1' /> )}
          {isSource ? "Source" : "Website"}
        </Link>
      </div>
    </div>
  );
};
