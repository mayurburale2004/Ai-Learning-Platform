"'use client'"
import React from 'react'
import { motion } from "framer-motion";

function Choice() {
  return (
    
    <div className="bg-gradient-to-r to-blue-500 from-purple-500 text-white py-16 px-10 md:px-20 text-center">
      <motion.h2 initial={{y : -20 ,opacity:0}} whileInView={{y: 0,opacity: 1}} transition={{delay: 0.5,duration: 0.5}}

       className="text-3xl  text-black font-bold mb-10">Why Choose Us</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <div className='bg-black p-4 rounded-lg hover:shadow-(--shadow-black) cursor-pointer hover:-translate-y-1 duration-500'>
          <div className="text-blue-600 text-4xl mb-3">🕓</div>
          <h3 className="font-semibold">Flexible Learning</h3>
          <p className="text-sm text-gray-400">Learn at your own pace</p>
        </div>
        <div className='bg-black p-4 rounded-lg hover:shadow-(--shadow-black) cursor-pointer hover:-translate-y-1 duration-500'>
          <div className="text-blue-600 text-4xl mb-3">🏆</div>
          <h3 className="font-semibold">Certification</h3>
          <p className="text-sm text-gray-400">Earn completion certificates</p>
        </div>
        <div className='bg-black p-4 rounded-lg hover:shadow-(--shadow-black) cursor-pointer hover:-translate-y-1 duration-500'>
          <div className="text-blue-600 text-4xl mb-3">💬</div>
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-400">Help whenever you need</p>
        </div>

        <div className='bg-black p-4 rounded-lg hover:shadow-(--shadow-black) cursor-pointer hover:-translate-y-1 duration-500'>
          <div className="text-blue-600 text-4xl mb-3">⚙</div>
          <h3 className="font-semibold">Difficulty-Level Based Content</h3>
          <p className="text-sm text-gray-400">
            Personalized content as per your learning level
          </p>
        </div>

      </div>
    </div>

    
  )
}

export default Choice
