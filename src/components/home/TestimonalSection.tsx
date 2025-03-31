import React from 'react'
import TextParaAnimation from '../ui/TextParaAnimation'
import TextReveal from '../ui/TextReveal'
import { AnimatedTestimonials } from '../ui/Testimonial'
import { recommendationsData } from '@/content/RecommendationContent'

const TestimonalSection = () => {

    const data = recommendationsData.map((item) => ({
        quote: item.text,
        name: `${item.firstName} ${item.lastName}`,  // Added space between first and last name
        designation: item.jobTitle,
        src: item.img,
        company: item?.company
    }));

    return (
        <div className='h-auto mt-32'>
            <TextReveal>
                <h2 className="text-xl text-center md:text-3xl mb-1 text-black dark:text-white pb-2 ">
                    Testimonial
                </h2>
            </TextReveal>
            <TextParaAnimation>
                <div className=' w-full  flex justify-center'>
                    <p className="text-neutral-700 dark:text-neutral-300 text-center content-para pb-10 sm:max-w-[60%]">
                        Hear from those who have worked with me! They share their experiences,
                        highlighting the quality, dedication, and impact at work
                    </p>
                </div>
            </TextParaAnimation>
            <AnimatedTestimonials testimonials={data} />

        </div>
    )
}

export default TestimonalSection