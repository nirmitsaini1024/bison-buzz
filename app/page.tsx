"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { WobbleCardDemo } from "@/components/services";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-home";

export default function AboutUsSection() {
  // Client-side rendering for images to avoid hydration errors
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative">
      {/* Navbar is positioned absolutely to overlay the hero */}
      <Navbar />
      
      {/* Hero starts from the top of the page */}
      <Hero />
      
      <div className="relative w-full py-8 md:py-24 overflow-hidden bg-white">
        {/* Background SVG pattern - only render on client side */}
        {isMounted && (
          <div className="absolute inset-0 z-0">
            <Image
              src="https://assets-global.website-files.com/5ecac4ce2b50b65b73142945/5fafd72f0470394d61fb33d4_Polygon%20Luminary%20(3).svg"
              alt="Background pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:gap-8 relative z-10">
            {/* Left side - Illustration - increased size and maintained for mobile */}
            <div className="w-full md:w-2/5 flex justify-center mb-0">
              <div className="w-72 h-72 md:w-96 md:h-96 relative">
                {isMounted ? (
                  <Image
                    src="/bull.png"
                    alt="Monk-E Logo"
                    width={400}
                    height={400}
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-full"></div>
                )}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full md:w-1/2 space-y-2 md:space-y-6 px-4 md:px-0 -mt-6 md:mt-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center md:text-left">
                ABOUT US
              </h2>
              <div className="text-gray-700 text-base md:text-lg space-y-2 text-center md:text-left">
                <p>
                  Monk-E is a 360° creative digital media organisation that
                  unifies Talent Management, Video Production, Social Media
                  Management and Influencer Marketing under one roof.
                  Conceptualised by Viraj Sheth and Ranveer Allahbadia, we are
                  an ensemble set of young creators who specialise in all things
                  digital.
                </p>
              </div>
              <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
                <Button className="bg-gray-800 hover:bg-gray-700 text-amber-400 hover:text-amber-300 font-medium px-6 py-2">
                  KNOW MORE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <WobbleCardDemo />
      </div>
      <ContactSection />
    </div>
  );
}