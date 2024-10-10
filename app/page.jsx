"use client";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Testimonial from "@/components/Testimonial";
import Trial from "@/components/Trial";
import { ReactLenis } from "lenis/dist/lenis-react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <Integrations />
        <Testimonial />
        <Trial />
        <Footer />
        {/* <div className="h-[8000px]"></div> */}
      </ReactLenis>
    </>
  );
}
