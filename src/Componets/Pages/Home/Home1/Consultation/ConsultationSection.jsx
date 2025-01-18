import React from 'react';
import ShimmerButton from '../../../../Button/ShimmerButton';

const ConsultationSection = () => {
  return (
    <section className='py-12 '>
      <div className='container mx-auto px-4'>
        <div className='flex justify-center'>
          <div className='lg:w-2/3 text-center '>
            <h2 className='text-3xl font-bold mb-4'>
              We’re here to help and answer any question you might have.
            </h2>
            <p className=' mb-6'>
              Free Consultation About Our IT Solutions For Your Business
            </p>
            <a href='mailto:support@ideatech.ae' className=''>
              <ShimmerButton text={'Let’s Talk Now'} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
