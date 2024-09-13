import Demo from "@/components/Demo";
import Ecommerce from "@/components/Ecommerce";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowitWorks from "@/components/HowitWorks";

export default function Home() {
  return (
    <div className="flex flex-col gap-[96px]">
     <Header />
    <div className="max-w-6xl mx-auto px-3 md:px-0 flex flex-col gap-10">
     <Hero/>
     <HowitWorks />
     <Features />
     {/* <Ecommerce /> */}
     {/* <Demo /> */}
    </div>
     <Footer />
    </div >

  )
}
