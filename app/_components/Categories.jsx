"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {motion} from "motion/react"


function Categories() {
  return (
    
      <div 

       className="bg-gradient-to-r to-blue-500 from-purple-500 py-16 px-10 md:px-20 text-center  ">
      <motion.h2 initial={{y : -20 ,opacity:0}} whileInView={{y: 0,opacity: 1}} transition={{delay: 0.5,duration: 0.5}}

       className="text-3xl text-black font-bold mb-10">Explore Our Categories</motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        <div 
        className="bg-blue-50 p-6 rounded-2xl hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <div className="text-blue-600 text-4xl mb-3">💻</div>
          <h3 className="font-semibold">Programming</h3>
          <p className="text-sm text-gray-500">Master coding from scratch</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <div className="text-blue-600 text-4xl mb-3">🎨</div>
          <h3 className="font-semibold">Design</h3>
          <p className="text-sm text-gray-500">Learn creative design</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <div className="text-blue-600 text-4xl mb-3">📈</div>
          <h3 className="font-semibold">Business</h3>
          <p className="text-sm text-gray-500">Develop market skills</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <div className="text-blue-600 text-4xl mb-3">🤖</div>
          <h3 className="font-semibold">AI & Data</h3>
          <p className="text-sm text-gray-500">Explore data science</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl hover:shadow-(--shadow-black) cursor-pointer hover:bg-(--color-lightHover) hover:-translate-y-1 duration-500">
          <div className="text-blue-600 text-4xl mb-3">📱</div>
          <h3 className="font-semibold">App Dev</h3>
          <p className="text-sm text-gray-500">Build mobile apps</p>
        </div>
      </div>
    </div>

    
  )
}

export default Categories
