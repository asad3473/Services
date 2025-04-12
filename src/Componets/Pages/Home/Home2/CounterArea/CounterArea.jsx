import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Sample data for counters
const counters = [
  {
    id: 1,
    number: '20',
    unit: '+',
    heading: 'Years In Business',
  },
  {
    id: 2,
    number: '1.2',
    unit: 'k',
    heading: 'Projects Completed',
  },
  {
    id: 3,
    number: '750',
    unit: '+',
    heading: 'Reviews',
  },
  {
    id: 4,
    number: '150',
    unit: '+',
    heading: 'Team Members',
  },
];

const CounterArea = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });

  }, []);
  return (
    <section className="py-10 bgColor font-ui-sans-serif">
      <div className="container mx-auto px-4 relative">
        <div className='absolute bottom-6 z-20 right-16 bg-[#52b6f975] h-20 w-20 rounded-full'></div>
        <div className='absolute -bottom-10 right-0 bg-[#52b6f975] h-28 w-28 rounded-full'></div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-up">
          {counters.map(counter => (
            <div key={counter.id} className="w-full lg:w-1/4 md:w-1/2 px-4 mb-8">
              <div className=" p-6 rounded-lg ">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white">
                    <span className="counter-number">{counter.number}</span>
                    <span>{counter.unit}</span>
                  </h2>
                  <h3 className="text-xl font-semibold text-white mt-2">
                    {counter.heading}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterArea;