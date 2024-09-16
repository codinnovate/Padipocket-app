'use client'

import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowitWorks from "@/components/HowitWorks";
import { useEffect, useState } from "react";
import { server } from "../../server";
import axios from "axios";
import Loader from "@/components/Loader";
import toast, { Toaster } from "react-hot-toast";




export default function Home() {
  const [loading, setLoading] = useState(true)

  async function load() {
    const response  = await axios.get(`${server}/active`)
    console.log(response);
    if(response.status === 200) {
      setLoading(false)
      toast.success("sorry for the waiting, server needs 40secs to respond  after inactivity...");
    }
  }


  useEffect(() => {
 load()
  }, [])
  if (loading) return <Loader />
  return (
    <div className="flex flex-col gap-[96px]">
      <Toaster />
     <Header />
    <div className="max-w-6xl mx-auto px-3 md:px-0 flex flex-col gap-10">
     <Hero/>
     <Demo />
     <HowitWorks />
     <Features />
   
    </div>
     <Footer />
    </div >

  )
}
