"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Future from "./_components/Future";
import Choice from "./_components/Choice";
import Header from "./_components/Header";


export default function Home() {
  return (
    <div>
       <Header/>
      <Hero/>
      <Categories/>
      <Future/>
      <Choice/>
    </div>
  );
}
