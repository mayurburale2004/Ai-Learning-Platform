"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
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
   const menuRef = useRef(null);

   // Close menu when clicking outside
   useEffect(() => {
     function handleClickOutside(event){
       if(menuRef.current && !menuRef.current.contains(event.target)){
         setOpen(false);
       }
     }

     document.addEventListener("mousedown", handleClickOutside);
     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, []);

  return (
    <div className='bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-between px-6 py-4 relative'>

      {/* Logo */}
      <div className='flex items-center gap-2'>
        <Image src={'/online-education.png'} alt='logo' width={30} height={30}/>
        <h2 className='font-bold text-xl md:text-2xl text-black'>
          Online Learning Platform
        </h2>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-8 items-center font-bold text-white'>
        {menuOptions.map((menu,index)=>(
          <Link key={index} href={menu.path}>
            <h2 className='text-lg hover:scale-105 transition-all'>
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {!user ?
          <SignInButton mode='modal'>
            <Button>Get Started</Button>
          </SignInButton>
          :
          <Link href={'/workspace'}>
            <Button className="cursor-pointer">Get Started</Button>
          </Link>
        }

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black">
          {open ?
            <X className="cursor-pointer" onClick={()=>setOpen(false)} />
            :
            <Menu className="cursor-pointer" onClick={()=>setOpen(true)} />
          }
        </div>

      </div>

      {/* Dark Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={()=>setOpen(false)}
        ></div>
      )}

      {/* Glassmorphism Mobile Menu */}
      {open && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='fixed top-20 left-1/2 -translate-x-1/2 w-[90%]
          bg-white/20 backdrop-blur-lg border border-white/30
          shadow-2xl rounded-2xl flex flex-col items-center
          gap-6 py-6 md:hidden z-50'>

          {menuOptions.map((menu,index)=>(
            <Link key={index} href={menu.path} onClick={()=>setOpen(false)}>
              <h2 className='text-lg font-semibold text-white hover:scale-105 transition-all'>
                {menu.name}
              </h2>
            </Link>
          ))}

        </motion.div>
      )}

    </div>
  )
}

export default Header