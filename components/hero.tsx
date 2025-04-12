import React, { useEffect, useState } from 'react';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Set logo as loaded after component mounts with a 70ms delay
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 70);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center bg-[#F1D65F] text-[#333333] gap-3 overflow-hidden pt-16'>
      {/* Social Media Icons with custom animations */}
      <style jsx global>{`
        @keyframes floatHorizontal1 {
          0% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
          100% { transform: translateX(0px); }
        }
        
        @keyframes floatHorizontal2 {
          0% { transform: translateX(0px); }
          50% { transform: translateX(20px); }
          100% { transform: translateX(0px); }
        }
        
        @keyframes floatVertical1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatVertical2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes floatDiagonal {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(10px, 10px); }
          100% { transform: translate(0px, 0px); }
        }
        
        @keyframes logoEntrance {
          0% { 
            opacity: 0;
            transform: scale(0.5) translateY(30px);
          }
          60% {
            transform: scale(1.1) translateY(-5px);
          }
          80% {
            transform: scale(0.95) translateY(2px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .float-h1 {
          animation: floatHorizontal1 3s ease-in-out infinite !important;
        }
        
        .float-h2 {
          animation: floatHorizontal2 4s ease-in-out infinite !important;
        }
        
        .float-v1 {
          animation: floatVertical1 3.5s ease-in-out infinite !important;
        }
        
        .float-v2 {
          animation: floatVertical2 2.5s ease-in-out infinite !important;
        }
        
        .float-d {
          animation: floatDiagonal 3.8s ease-in-out infinite !important;
        }
        
        .logo-animate {
          animation: logoEntrance 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transform-origin: center bottom;
        }
      `}</style>
      
      {/* Social Media Icons with improved responsive positioning */}
      <Image 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/60219ae9b5fd305991f5a994_Insta.png" 
        alt="Instagram" 
        width={144}
        height={144}
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-30 left-4 top-20 sm:left-8 sm:top-40 md:left-32 md:top-64 float-h1"
      />
      <Image 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a3f9050aceeb201a9ea2_Twitter.png" 
        alt="Twitter" 
        width={144}
        height={144}
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-30 left-8 bottom-16 sm:left-16 sm:bottom-24 md:left-1/4 md:bottom-24 float-v1"
      />
      <Image
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a401efa64c41f32c5dfa_FB.png" 
        alt="Facebook" 
        width={144}
        height={144}
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-30 top-24 right-28 sm:top-28 sm:right-28 md:top-24 md:right-1/2 float-h2"
      />
      <Image 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a3cd5a15542d9fe2a642_Linkedin.png" 
        alt="LinkedIn" 
        width={112}
        height={112}
        className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-30 right-6 bottom-12 sm:right-16 sm:bottom-20 md:right-72 md:bottom-50 float-v2"
      />
      <Image
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/60218f93e083ce225dcc16d1_Tube.png" 
        alt="YouTube" 
        width={144}
        height={144}
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-30 right-8 top-24 sm:right-20 sm:top-36 md:right-48 md:top-48 float-d"
      />
      
      {/* Main Content with Logo instead of Text */}
      <div className="z-10 flex flex-col items-center mt-8 sm:mt-0">
        {/* Fixed Image component with required width and height */}
        <div className={`${logoLoaded ? 'logo-animate' : 'opacity-0'}`} style={{width: "100%", maxWidth: "450px"}}>
          <Image 
            src="/bull-logo.png" 
            alt="Bison Buzz Logo"
            width={450}
            height={300}
            style={{width: "100%", height: "auto"}}
            priority
          />
        </div>
        <p className='text-xl sm:text-xl md:text-2xl font-bold montserrat-new z-10 text-center px-4'>
          We help brands grow and manage their social media
        </p>
      </div>
      <div className="flex mt-4 gap-2 sm:gap-4 z-10">
        <Link href="/contact-us">
          <Button text='BRAND' bg='#333333' textColor='#ffd823'/>
        </Link>
        <Link href="/contact-us">
          <Button text='INFLUENCER' bg='#333333' textColor='#ffd823'/>
        </Link>
      </div>
    </div>
  );
};

export default Hero;