"'use client'"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import { motion } from "motion/react"

const menuOptions=[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Billing',
        path:'/workspace/billing'
    },
    {
        name:'Profile',
        path:'/workspace/profile'
    }
]


function Header() {
   const {user}=useUser();
   
  return (
    <div className='bg-gradient-to-r to-blue-500 from-purple-500 flex items-center justify-between p-4'>
      {/* Logo */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center gap-2 '>
       <Image src={'/online-education.png'} alt='logo' width={30} height={30}/>
       <h2 className='font-bold text-2xl '>Online Learning Platform</h2>
       </motion.div>
      {/* Menu Options */}
        <motion.div initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
         className='flex gap-8 items-center font-bold'>
            {menuOptions.map((menu,index)=>(
                <Link key={index} href={menu.path} >
                <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                </Link>
                ))}
      
        </motion.div>
    {/* Get Started Button */}
    {!user ? <SignInButton mode='modal'>
        <Button>Get Started</Button>
        </SignInButton> :
        <Link href={'/workspace'}>
        <Button className="cursor-pointer">Get Started</Button>
        </Link>}
    </div>

    
  )
}

export default Header