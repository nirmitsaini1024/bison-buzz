"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="mt-12 mb-8"> {/* Added top margin */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Services</h1> {/* Added heading */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-yellow-600 min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs px-6">
            <h2 className="text-left text-balance text-2xl font-bold md:text-xl lg:text-3xl md:font-semibold tracking-[-0.015em] text-white">
              Celebrity Giveaway Sponsorships{" "}
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Unlock Your Social Potential with Our Social Media Growth Campaigns!
              We specialize in boosting your online presence, increasing
              followers, and driving engagement to help your brand thrive in the
              digital world
            </p>
          </div>
          <Image
            src="/services-2.svg"
            width={280}
            height={280}
            alt="developer community image"
            className="hidden md:block absolute -right-10 md:-right-[40%] lg:right-[2%] bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="max-w-xs px-6">
            <h2 className="max-w-80 text-left text-balance text-2xl font-bold md:text-xl lg:text-3xl md:font-semibold tracking-[-0.015em] text-white">
              Social Media Management
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Our Instagram management service optimizes your brand&rsquo;s presence,
              boosts engagement, and drives growth through strategic content
              creation, audience targeting, and performance analytics..{" "}
            </p>
          </div>
          <Image
            src="/services-3.svg"
            width={180}
            height={180}
            alt="fight club rules image"
            className="hidden md:block absolute -right-4 -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* First new bottom card - taking 1 column */}
        <WobbleCard containerClassName="col-span-1 bg-purple-900 min-h-[300px]">
          <div className="max-w-sm px-6">
            <h2 className="max-w-sm text-left text-balance text-2xl font-bold md:text-xl lg:text-3xl md:font-semibold tracking-[-0.015em] text-white">
              Professional Dubbing
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Break the language barrier by getting your videos dubbed by
              professionals in Hindi to capture the 700 Million Hindi Speaking
              Viewers in India and grow your fanbase worldwide{" "}
            </p>
          </div>
          <Image
            src="/services-4.svg"
            width={180}
            height={180}
            alt="enterprise solution image"
            className="hidden md:block absolute -right-4 -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        {/* Second new bottom card - taking 2 columns */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-emerald-800 min-h-[300px]">
          <div className="max-w-xs px-6">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-2xl font-bold md:text-xl lg:text-3xl md:font-semibold tracking-[-0.015em] text-white">
              100% Youtube management
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              We&rsquo;ll cover it according to your needs or manage it all, from
              researching content ideas, scripting, professionally editing, making
              a super catchy thumbnail to publishing and everything small in
              between
            </p>
          </div>
          <Image
            src="/services-1.svg"
            width={280}
            height={280}
            alt="developer community image"
            className="hidden md:block absolute -right-10 md:-right-[40%] lg:right-[5%] bottom-5 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}