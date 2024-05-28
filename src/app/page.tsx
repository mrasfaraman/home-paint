"use client";

// import Hero from "@/components/Hero"
import WhyYouChoseUs from "@/components/WhyYouChoseUs"
import { ReviewCards } from "@/components/ReviewCards"
import OurCoreServices from "@/components/OurCoreServices"
import { Gallery } from "@/components/Gallery"
import HeroSection from "@/components/gsap-hero";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Link from "next/link";

export default function Home() {

  return (
    <section className="w-full flex-center flex-col">
      <HeroSection />
      {/* <Hero/> */}
      <OurCoreServices/>
      <Gallery/>
      <WhyYouChoseUs />
      <ReviewCards />
      <Link href="https://wa.me/971554079685" target="_blank">
      <FloatingWhatsApp
        phoneNumber="+971554079685"
        accountName="Painters"
        chatboxHeight={0}
      />
      </Link>
    </section>
  )
}
