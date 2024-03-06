/* eslint-disable react/no-unescaped-entities */
import SocialLinks from '@/components/utils/social-links/social-links'
import React from 'react'

type Props = {}

const ContactSection = (props: Props) => {
    return (
        <section id="contact" className='mx-auto h-auto max-h-full max-w-full border-t'>
            <div className='px-6 lg:px-12 py-6 '>
                <div className='mx-auto'>
                    <h3 className="text-8xl tracking-tighter font-medium">contact me.</h3>
                    <p className='text-md'> Send me an email or you can message me to my other social links.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='flex mt-4 lg:mt-0'>
                        <h1 className='text-center lg:text-right text-7xl lg:text-[7rem] font-semibold tracking-tighter'>Let's Talk</h1>
                    </div>
                    <div className="card card-normal mx-auto">
                        <button className=' btn my-2 btn-outline'>
                            <span className="mr-1">Send an Email</span>
                            <i className="fi fi-rs-paper-plane"></i>
                        </button>
                        <SocialLinks orientation='none' />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default ContactSection