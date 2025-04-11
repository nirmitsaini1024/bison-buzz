import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='relative min-h-screen w-full flex flex-col justify-center items-center bg-[#ffd823] text-[#333333] gap-3 overflow-hidden pt-16'>
      {/* Social Media Icons with custom animations */}
      <style jsx>{`
        @keyframes floatHorizontal {
          0% { transform: translateX(0px); }
          50% { transform: translateX(15px); }
          100% { transform: translateX(0px); }
        }
        
        @keyframes floatVertical {
          0% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0px); }
        }
        
        .float-h {
          animation: floatHorizontal 3s ease-in-out infinite;
        }
        
        .float-v {
          animation: floatVertical 3s ease-in-out infinite;
        }
        
        .float-h-reverse {
          animation: floatHorizontal 3s ease-in-out infinite reverse;
        }
        
        .float-v-reverse {
          animation: floatVertical 3s ease-in-out infinite reverse;
        }
      `}</style>
      
      {/* Social Media Icons with improved responsive positioning */}
      <img 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/60219ae9b5fd305991f5a994_Insta.png" 
        alt="Instagram" 
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-15 left-4 top-20 sm:left-8 sm:top-40 md:left-32 md:top-64 float-h"
      />
      <img 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a3f9050aceeb201a9ea2_Twitter.png" 
        alt="Twitter" 
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-15 left-8 bottom-16 sm:left-16 sm:bottom-24 md:left-1/4 md:bottom-24 float-v"
      />
      <img 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a401efa64c41f32c5dfa_FB.png" 
        alt="Facebook" 
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-15 top-24 right-28 sm:top-28 sm:right-28 md:top-36 md:right-1/2 float-h-reverse"
      />
      <img 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/6021a3cd5a15542d9fe2a642_Linkedin.png" 
        alt="LinkedIn" 
        className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 opacity-15 right-6 bottom-12 sm:right-16 sm:bottom-20 md:right-72 md:bottom-50 float-v-reverse"
      />
      <img 
        src="https://cdn.prod.website-files.com/5ecac4ce2b50b65b73142945/60218f93e083ce225dcc16d1_Tube.png" 
        alt="YouTube" 
        className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-15 right-8 top-24 sm:right-20 sm:top-36 md:right-48 md:top-48 float-h"
      />
      
      {/* Main Content */}
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold z-10 mt-8 sm:mt-0'>BISON BUZZ</h1>
      <p className='text-xl sm:text-xl md:text-2xl font-bold montserrat-new z-10 text-center px-4'>Taking Influencer Marketing to Next Level</p>
      <div className="flex mt-2 gap-2 sm:gap-4 z-10">
        <Button text='BRAND' bg='#333333' textColor='#ffd823'/>
        <Button text='INFLUENCER' bg='#333333' textColor='#ffd823'/>
      </div>
    </div>
  );
};

export default Hero;