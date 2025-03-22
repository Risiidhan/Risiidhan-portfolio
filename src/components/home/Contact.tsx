"use client"
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
import Form from '../common/Form';

const Contact = () => {

    const isMobile = window?.innerWidth <= 768;
    const containerMotion = isMobile ? "hidden" : "show";

    return (
        <section className='content-section'>
            <motion.div
                id='contact'
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={containerMotion}
                viewport={{ once: false, amount: 0.7 }}

                className=" my-28 grid grid-cols-4 gap-4 ">
                <div
                    className='
                        md:col-span-3 col-span-5 
                        border-2 rounded-xl border-fuchsia-300
                        md:order-1 order-2 px-4 md:px-12 w- py-6'>
                    <Form />
                </div>
                <motion.div
                    id='contact-title'
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center'>
                    
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Contact