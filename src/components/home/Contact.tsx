"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
import Form from '../common/Form';

const Contact = () => {

    return (
        <section className='content-section'>
            <div
                className="mb-[5rem] mt-[7rem] grid grid-cols-4 gap-4 ">
                <div className='
                    md:col-span-2 col-span-5 
                    rounded-xl 
                    md:order-1 order-2 
                    relative overflow-hidden'>
                    <div className="relative inline-flex h-full overflow-hidden rounded-2xl w-full p-[1px] focus:outline-none">
                        <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <div className="inline-flex h-full  cursor-pointer items-center justify-center rounded-2xl w-full bg-black py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            <Form />
                        </div>
                    </div>
                </div>


                <motion.div
                    id='contact-title'
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-2 col-span-4 md:order-2 order-1 w-full grid place-items-center'>
                    <div>
                        <h2 className="text-xl text-center md:text-3xl mb-1 text-black dark:text-white max-w-4xl">
                            Connect with me
                        </h2>
                        <p className="text-neutral-700 text-center dark:text-neutral-300 md:text-lg max-w-sm">
                            For any inquiries or collaboration opportunities, feel free to email. Im happy to get connected
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact