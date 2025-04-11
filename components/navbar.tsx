import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define a type for the dropdown options
type DropdownType = 'company' | 'services' | 'mobile-company' | 'mobile-services' | null;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  
  const toggleDropdown = (dropdown: DropdownType) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };
  
  const serviceItems = [
    {
      icon: "/icons/influencer.png",
      title: "Influencer Marketing",
      description: "Explore and Learn",
      color: "#FFDD00"
    },
    {
      icon: "/icons/social-media.png",
      title: "Social Media Management",
      description: "Connect & Manage",
      color: "#FFDD00"
    },
    {
      icon: "/icons/digital-ad.png",
      title: "Digital Advertisement",
      description: "Animate and move",
      color: "#FFDD00"
    },
    {
      icon: "/icons/video.png",
      title: "Video Production",
      description: "Business & Sales",
      color: "#FFDD00"
    }
  ];
  
  return (
    <nav className="w-full absolute top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="w-full py-4 px-6 flex items-center justify-between">
        {/* Logo with more right padding */}
        <div className="flex items-center ml-4 sm:ml-8 md:ml-12">
          <Link href="/">
            <Image src="/bull-logo.png" alt="Bison Buzz" width={80} height={80} className="h-16 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button 
              className="font-bold uppercase flex items-center"
              onClick={() => toggleDropdown('company')}
            >
              COMPANY
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {activeDropdown === 'company' && (
              <div className="absolute left-0 mt-2 w-72 bg-[rgba(0,0,0,0.7)] rounded-lg shadow-lg z-50 backdrop-blur-sm p-4">
                <div className="flex flex-col space-y-4">
                  <Link href="/about" className="flex items-center space-x-4 hover:bg-black hover:bg-opacity-40 p-3 rounded-lg transition duration-300">
                    <div className="w-14 h-14 flex-shrink-0 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-base">About Us</h3>
                      <p className="text-yellow-200 text-sm">Explore our History</p>
                    </div>
                  </Link>
                  
                  <Link href="/jobs" className="flex items-center space-x-4 hover:bg-black hover:bg-opacity-40 p-3 rounded-lg transition duration-300">
                    <div className="w-14 h-14 flex-shrink-0 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-xl">👥</span>
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-base">Our Jobs</h3>
                      <p className="text-yellow-200 text-sm">Join our Team</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative group">
            <button 
              className="font-bold uppercase flex items-center"
              onClick={() => toggleDropdown('services')}
            >
              SERVICES
              <svg className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <Link href="/work" className="font-bold uppercase">WORK</Link>
        </div>
        
        {/* Contact Button & Mobile Menu Toggle */}
        <div>
          <Link href="/contact" className="hidden lg:inline-block bg-gray-800 hover:bg-gray-700 text-yellow-400 font-bold py-2 px-6 rounded transition duration-300">
            CONTACT US
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Services Dropdown Card - Desktop */}
      {activeDropdown === 'services' && (
        <div className="hidden lg:block absolute left-0 right-0 -mt-1 z-40">
          <div className="mx-auto container px-4">
            <div className="bg-[rgba(0,0,0,0.7)] rounded-lg max-w-md mx-auto backdrop-blur-sm p-4">
              <div className="flex flex-col space-y-4">
                {serviceItems.map((item, index) => (
                  <Link href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex items-center space-x-4 hover:bg-black hover:bg-opacity-40 p-3 rounded-lg transition duration-300">
                    <div className="w-14 h-14 flex-shrink-0 bg-yellow-400 rounded-lg flex items-center justify-center">
                      {/* Placeholder for icon - you'll need to add actual icons */}
                      {index === 0 && (
                        <span className="text-xl">💎</span>
                      )}
                      {index === 1 && (
                        <span className="text-xl">📱</span>
                      )}
                      {index === 2 && (
                        <span className="text-xl">🎬</span>
                      )}
                      {index === 3 && (
                        <span className="text-xl">🎥</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-base">{item.title}</h3>
                      <p className="text-yellow-200 text-sm">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 z- border bg-yellow-200 pt-4 pb-6 px-6">
          <div className="flex flex-col">
            <div className="py-4 border-b border-yellow-200">
              <div 
                className="flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-company')}
              >
                <span className="font-bold text-gray-800">COMPANY</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {activeDropdown === 'mobile-company' && (
                <div className="mt-4 bg-[rgba(0,0,0,0.5)] rounded-lg p-4 backdrop-blur-sm">
                  <Link href="/about" className="flex items-center space-x-3 mb-3 p-2 hover:bg-black hover:bg-opacity-40 rounded">
                    <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-sm">About Us</h3>
                      <p className="text-yellow-200 text-xs">Explore our History</p>
                    </div>
                  </Link>
                  
                  <Link href="/jobs" className="flex items-center space-x-3 mb-3 p-2 hover:bg-black hover:bg-opacity-40 rounded">
                    <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">👥</span>
                    </div>
                    <div>
                      <h3 className="text-yellow-400 font-bold text-sm">Our Jobs</h3>
                      <p className="text-yellow-200 text-xs">Join our Team</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <div className="py-4 border-b border-yellow-200">
              <div 
                className="flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-services')}
              >
                <span className="font-bold text-gray-800">SERVICES</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {activeDropdown === 'mobile-services' && (
                <div className="mt-4 bg-[rgba(0,0,0,0.5)] rounded-lg p-4 backdrop-blur-sm">
                  {serviceItems.map((item, index) => (
                    <Link href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="flex items-center space-x-3 mb-3 p-2 hover:bg-black hover:bg-opacity-40 rounded">
                      <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                        {/* Placeholder icons */}
                        <span className="text-lg">{index === 0 ? '💎' : index === 1 ? '📱' : index === 2 ? '🎬' : '🎥'}</span>
                      </div>
                      <div>
                        <h3 className="text-yellow-400 font-bold text-sm">{item.title}</h3>
                        <p className="text-yellow-200 text-xs">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="py-4 border-b border-yellow-200">
              <Link href="/work" className="font-bold text-gray-800">WORK</Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Bottom Mobile Menu */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 flex justify-center py-3 z-50">
        <button className="text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;