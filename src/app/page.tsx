import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
     <Header />
    <div className="max-w-5xl mx-auto p-4 flex flex-col gap-10">
     <Hero/>
     <Demo />
    </div>
     <Footer />
    </>

  )
}
