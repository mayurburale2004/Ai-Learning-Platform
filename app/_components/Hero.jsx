"'use client'"
import { Button } from '@/components/ui/button'
import { Section } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";


import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'

function Hero() {
  return (

    
     <div className="bg-gradient-to-r to-blue-500 from-purple-500 text-black py-20 px-10 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div  initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay:0.5}}
>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Empower Your Future with <br />Online Learning
          </h2>
          <p className="text-lg mb-6 ">
            Learn anytime, anywhere. Explore new skills and boost your career.
          </p>
          
        </motion.div>
        <motion.div initial={{opacity: 0,scale:0.9}} whileInView={{opacity: 1,scale:1}} transition={{duration: 0.6}}

         className="hidden md:block">
          <Image src={'/hero.jpg'}  width={300} height={300} alt="Online Learning Illustration" className="w-96 mx-auto rounded-4xl" />
        </motion.div>
      </div>
    </div>

  )
}

export default Hero