import React from 'react'
import img from '../../../../images/freelancing.jpg'
import ShimmerButton from '../../../../Button/ShimmerButton'

export default function Swipe() {
    return (
        <div className='bg-white'>
            <div className='container flex flex-col sm:flex-row justify-center gap-28 items-center relative py-6'>
                <div className='w-full sm:w-5/12  text-center sm:text-left'>
                    <h1 className='text-3xl sm:text-5xl font-semibold mb-2'>
                        We Are a Full-Service<br />
                        Web, App & Digital Marketing Agency
                    </h1>
                    <p className='mb-3 text-xl sm:text-2xl'>
                        Crafting Digital Excellence for Your Business
                    </p>
                    <p className=' mb-2'>From stunning websites and powerful mobile apps to results-driven SEO, strategic social media, and complete branding solutions — we empower your business to thrive in the digital age.</p>
                    <ShimmerButton text={'Get in touch'}/>
                </div>          
                <div className='relative w-72 h-72 sm:w-96 sm:h-96 mt-10 sm:mt-0'>
                    <div
                        className='absolute top-4 left-4 w-full h-full transform rotate-[25deg] z-0'
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            clipPath: ' polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
                            borderRadius: '40% 60% 60% 40% / 60% 60% 40% 40%',
                        }}
                    ></div>
                </div>

            </div>
        </div>
    )
}
