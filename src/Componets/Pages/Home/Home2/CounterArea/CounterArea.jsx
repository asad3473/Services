import React, { useEffect } from 'react';
import AOS from 'aos';
import ceo from '../../../../images/ceo.jpeg';
import waseem from '../../../../images/waseem.png';
import mughees from '../../../../images/mughees.jpeg';
import nicole from '../../../../images/nicole.jpeg';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Team Data
const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Asif',
    role: 'Ceo & Founder',
    image: ceo,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Waseem Malik',
    role: 'Operational Manager',
    image: waseem,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Nicole Oosthuizen',
    role: 'Sales Manager',
    image: nicole,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Mughees Ur Rehman',
    role: 'Devops & Cloud Engineer',
    image: mughees,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },

];

const TeamArea = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="py-4  font-ui-sans-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 " data-aos="fade-up">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap cursor-pointer -mx-4 justify-center" data-aos="fade-up">
          {teamMembers.map(member => (
            <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-10">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300 ease-in-out">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#181e29bb] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={member.socials.facebook} className="text-white hover:text-[#52b6f9]">
                      <FaFacebookF size={20} />
                    </a>
                    <a href={member.socials.twitter} className="text-white hover:text-[#52b6f9]">
                      <FaTwitter size={20} />
                    </a>
                    <a href={member.socials.linkedin} className="text-white hover:text-[#52b6f9]">
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center p-5 bg-[#181e29]">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[#52b6f9] mt-1">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
