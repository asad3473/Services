import React from 'react';
import img from '../../../../images/freelancing.jpg';
import ShimmerButton from '../../../../Button/ShimmerButton';
import { Link } from 'react-router-dom';

export default function Swipe() {
    return (
        <div className='bg-white px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 py-4'>
                
                {/* Left Text Section */}
                <div className='w-full sm:w-6/12 text-center sm:text-left'>
                    <h1 className='text-2xl  sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight'>
                        We Are a Full-Service<br />
                        Web, App & Digital Marketing Agency
                    </h1>
                    <p className='mb-3 text-lg sm:text-xl lg:text-2xl'>
                        Crafting Digital Excellence for Your Business
                    </p>
                    <p className='mb-4 text-sm sm:text-base lg:text-lg text-gray-700'>
                        From stunning websites and powerful mobile apps to results-driven SEO, strategic social media, and complete branding solutions — we empower your business to thrive in the digital age.
                    </p>
                    <Link to='/services'><ShimmerButton text={'Get in touch'} /></Link>
                </div>

                {/* Right Image Section */}
                <div className='relative  w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mt-10 sm:mt-0'>
                    <div
                        className='absolute top-4 left-4 w-full h-full  z-0'
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            clipPath: 'polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)',
                            borderRadius: '40% 60% 60% 40% / 60% 60% 40% 40%',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
