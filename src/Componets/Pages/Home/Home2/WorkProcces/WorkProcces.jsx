import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const workSteps = [
  {
    number: 1,
    title: 'Discover',
    description:
      'The "Discover" feature is designed to help you explore and find new job opportunities effortlessly.',

  },
  {
    number: 2,
    title: 'Design & Build',
    description:
      'The "Design and Build" feature empowers you to create and customize your ideal job search experience. '
  },
  {
    number: 3,
    title: 'Deliver',
    description:
      'The "Deliver" feature ensures that your job search or application process is completed effectively and on time.'
  },
];

const WorkProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className='py-4  font-ui-sans-serif'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h6 className='text-lg font-semibold text-black'>
            3 Step Work Process
          </h6>
          <h2 className='text-3xl font-bold text-black'>Our Working Process</h2>
        </div>
        <div className="flex flex-wrap -mx-4" data-aos="fade-right">
          {workSteps.map((step) => (
            <div
              key={step.number}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="p-6 group rounded-lg border border-[#1c2930] shadow-lg relative transition-all ease-in-out duration-300 cursor-pointer hover:bg-[#1c2930] ">
                <div
                  className="flex items-center justify-center w-12 h-12 text-white border rounded-full absolute -top-6 group-hover:mx-[38%] transition-all ease-in-out delay-75 duration-500 bg-black group-hover:bg-white group-hover:text-black"
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold transition-all ease-in delay-100 text-black group-hover:text-white">
                    {step.title}
                  </h3>
                  <p className="text-black transition-all ease-in delay-100 group-hover:text-white mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WorkProcess;
