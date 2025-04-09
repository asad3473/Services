import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaThreads } from 'react-icons/fa6'

export default function Fotter() {
  const company = [
    {
      icon: <FaArrowRight className='textColor' />, title: 'About'
    },
    {
      icon: <FaArrowRight className='textColor' />, title: 'Term of Services'
    },
    {
      icon: <FaArrowRight className='textColor' />, title: 'Privacy Policy'
    },
    {
      icon: <FaArrowRight className='textColor' />, title: 'Licensed & Regulation'
    },
  ]
  const Products = [
    {
      icon: <FaArrowRight className='textColor' />, title: 'Features'
    },
    {
      icon: <FaArrowRight className='textColor' />, title: 'Integration'
    },
    {
      icon: <FaArrowRight className='textColor' />, title: 'RoadMap'
    },

  ]
  return (
    <div className=' bg-[#181B18] '>
      <div className='flex justify-around p-3 items-center flex-wrap'>
        <div className=' '>
          <h1 className='textColor text-3xl font-bold'>Web-Services</h1>
          <p className=' text-white'>Social media</p>
          <div className='  flex justify-start gap-10 items-center mt-2 p-2 text-xl text-white w-full sm:w-2/12 '>
            <button class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg bgColor shadow-md shadow-gray-200 group transition-all duration-300">
              <FaFacebook className='w-28  transition-all duration-300 group-hover:scale-110' />
            </button>
            <button class="cursor-pointer w-10 h-10 flex items-center justify-center group rounded-lg bgColor shadow-md shadow-gray-200 group transition-all duration-300">
              <FaInstagram className='w-28  transition-all duration-300 group-hover:scale-110' />
            </button>
            <button class="cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg bgColor shadow-md shadow-gray-200 group transition-all duration-300">
              <FaThreads className='w-28  transition-all duration-300 group-hover:scale-110' />
            </button>
          </div>
        </div>
        <div>
          <h1 className=' textColor mb-3 sm:text-2xl'>Company</h1>
          {
            company.map((item, index) => (
              <div key={index} className=' cursor-pointer group flex  justify-start items-center gap-2 mb-2'>
                <span className=' text-xs transform -translate-x-1 group-hover:translate-x-1 transition-all ease-in delay-75'>{item.icon}</span>
                <span className=' text-white'>{item.title}</span>
              </div>
            ))
          }
        </div>
        <div>
          <h1 className=' textColor mb-3 sm:text-2xl'>Products</h1>
          {
            Products.map((item, index) => (
              <div key={index} className=' cursor-pointer group flex  justify-start items-center gap-2 mb-2'>
                <span className=' text-xs transform -translate-x-1 group-hover:translate-x-1 transition-all ease-in delay-75'>{item.icon}</span>
                <span className=' text-white'>{item.title}</span>
              </div>
            ))
          }
        </div>
      </div>


      <hr className="bg-white h-[1px] w-full border-none" />

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-white text-sm gap-3 sm:gap-0">
        <div className="w-full sm:w-4/12 flex justify-around items-center">
          <span className="hover:text-cyan-400 cursor-pointer transition">Terms of Services</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Policy Services</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Cookies Policy</span>
        </div>
        <div className="text-center sm:text-right">
          <span>© 2025 Code's Thinker,All rights reserved.</span>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <hr className="bg-white h-[1px] w-full border-none" />
    </div>
  )
}
