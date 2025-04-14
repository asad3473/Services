import React from 'react';
import ShimmerButton from '../../../../Button/ShimmerButton';
import { Link } from 'react-router-dom';

const ConsultationSection = () => {
  return (
    <section className='py-4 '>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center'>
          <div className='lg:w-2/3 text-center '>
            <h2 className='text-3xl font-bold mb-4'>
            Committed to delivering tailored IT support.
            </h2>
            <p className=' mb-6'>
            Request your free business consultation to learn more about our services.</p>
            <Link to='/contact' className=''>
              <ShimmerButton text={'Let’s Talk Now'} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
