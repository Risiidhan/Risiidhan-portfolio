"use client"

import React from 'react'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";

const Form = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    const [mailError, setMailError] = useState('');

    const form: any = useRef();
    const resetForm = () => {
        form.current.reset();
    }
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
                form.current, {
                publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    setShowSuccess(true);
                    setTimeout(() => {
                        setShowSuccess(false);
                    }, 5000);
                },
                (error: any) => {
                    setMailError(error.text);
                    console.log(error.text);

                }
            );
        resetForm();
    };

    return (
        <>
            <form className='w-full p-[30px]' ref={form} onSubmit={sendEmail}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-2">
                        <h2 className="text-2xl md:text-3xl font-semibold leading-7 ">G Mail</h2>
                        <p className="mt-1 content-para  leading-6 ">You can send your G Mail here</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="col-span-full">
                                <label htmlFor="From" className="block content-para  font-medium leading-6 ">Name</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-400">
                                        <input type="text" name="from_name" id="from" autoComplete="from" className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder: focus:ring-0 sm:content-para  sm:leading-6" placeholder="janesmith" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="From" className="block content-para  font-medium leading-6 ">Email</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-400">
                                        <input type="email" required name="user_email" id="from" autoComplete="from" className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder: focus:ring-0 sm:content-para  sm:leading-6" placeholder="janesmith@gmail.com" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="subject" className="block content-para  font-medium leading-6 ">Subject</label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-400">
                                        <input required type="text" name="subject" id="subject" autoComplete="subject" className="block flex-1 border-0 bg-transparent py-1.5 pl-2  placeholder: focus:ring-0 sm:content-para  sm:leading-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="Message" className="block content-para  font-medium leading-6 ">Message</label>
                                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-fuchsia-400">
                                    <textarea required id="about" name="message" rows={3} className="block w-full rounded-md border-0 py-1.5 px-2 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder: focus:ring-2 focus:ring-inset focus:ring-fuchsia-400 sm:content-para  sm:leading-6"></textarea>
                                </div>
                                {showSuccess && (
                                    <div className='success-response-container items-end pt-2 flex gap-4 text-green-400'>
                                        <p className="mt-1 content-para ">Mail Sent Successfully</p>
                                        <FaRegCircleCheck className='text-xl ' />
                                    </div>
                                )}

                                {mailError && (
                                    <div className='error-response-container items-end pt-2 flex gap-4 text-red-400'>
                                        <p className="mt-1 content-para ">{mailError}</p>
                                        <IoIosCloseCircleOutline className='text-xl ' />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="mt-1 flex items-center justify-end gap-x-6">
                        <button type="button" className="content-para  hover:underline transition-all duration-100 font-semibold leading-6"
                            onClick={() => resetForm()}>Cancel</button>
                            
                        <button type="submit" value="Send" className="relative inline-flex h-8 active:scale-95 overflow-hidden rounded-full p-[1px] focus:outline-none active:sacle-95">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] px-6 active:scale-95  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center px-6 active:scale-95  rounded-full bg-slate-950 py-1 content-para font-medium text-white backdrop-blur-3xl">
                                Submit
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form