import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

function Future() {
  return (
    <div>
      <div className="bg-gradient-to-r to-blue-500 from-purple-500 py-16 px-10 md:px-20 bg-gray-50 text-center">
      <motion.h2 initial={{y : -20 ,opacity:0}} whileInView={{y: 0,opacity: 1}} transition={{delay: 0.5,duration: 0.5}}

       className="text-3xl font-bold mb-10">Featured Courses</motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <Image src={'/java.jpg'} width={500} height={300} alt="UI/UX" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-lg">Java Programming</h3>
          <p className="text-sm text-gray-500 mb-2">Alex Johnson</p>
          <p className="text-yellow-500 mb-3">⭐ 4.6</p>
          
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <Image src={'/uiux.jpg'} width={500} height={300} alt="UI/UX" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-lg">UI/UX Design</h3>
          <p className="text-sm text-gray-500 mb-2">Maria Garcia</p>
          <p className="text-yellow-500 mb-3">⭐ 4.9</p>
          
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <Image src={'/dm.jpg'} width={500} height={300} alt="UI/UX" className="rounded-xl mb-4" />
          <h3 className="font-semibold text-lg">Digital Marketing</h3>
          <p className="text-sm text-gray-500 mb-2">Emina Brown</p>
          <p className="text-yellow-500 mb-3">⭐ 4.8</p>
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default Future
