"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { SignInButton, useUser } from '@clerk/nextjs'
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuOptions=[
    { name:'Home', path:'/' },
    { name:'Billing', path:'/workspace/billing' },
    { name:'Profile', path:'/workspace/profile' }
]

function Header() {

   const {user}=useUser();
   const [open,setOpen]=useState(false);

  return (
    <div className='bg-gradient-to-r to-blue-500 from-purple-500 flex items-center justify-between px-6 py-4'>

      {/* Logo */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex items-center gap-2'>
       <Image src={'/online-education.png'} alt='logo' width={30} height={30}/>
       <h2 className='font-bold text-xl md:text-2xl'>Online Learning Platform</h2>
      </motion.div>


      {/* Desktop Menu */}
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='hidden md:flex gap-8 items-center font-bold'>

        {menuOptions.map((menu,index)=>(
          <Link key={index} href={menu.path}>
            <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>
              {menu.name}
            </h2>
          </Link>
        ))}

        {!user ?
          <SignInButton mode='modal'>
            <Button>Get Started</Button>
          </SignInButton>
          :
          <Link href={'/workspace'}>
            <Button className="cursor-pointer">Get Started</Button>
          </Link>
        }
      </motion.div>


      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {open ?
          <X className="cursor-pointer" onClick={()=>setOpen(false)} />
          :
          <Menu className="cursor-pointer" onClick={()=>setOpen(true)} />
        }
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden'>

          {menuOptions.map((menu,index)=>(
            <Link key={index} href={menu.path} onClick={()=>setOpen(false)}>
              <h2 className='text-lg font-semibold'>{menu.name}</h2>
            </Link>
          ))}

          {!user ?
            <SignInButton mode='modal'>
              <Button>Get Started</Button>
            </SignInButton>
            :
            <Link href={'/workspace'}>
              <Button>Get Started</Button>
            </Link>
          }

        </div>
      )}

    </div>
  )
}

export default Header