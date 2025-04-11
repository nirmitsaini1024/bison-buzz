// ContactSection.jsx
import React from 'react';
import Link from 'next/link';
import Button from './Button';

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h2>
        <p className="text-lg text-gray-600 mb-8">Let's discuss how we can help you stand out</p>
        
        <Link href="/contact">
        <Button text="Contact Us" bg="#ffd823" textColor="#333333" />

        </Link>
      </div>
    </section>
  );
};

export default ContactSection;

// Usage in your home page:
// import ContactSection from '../components/ContactSection';
//
// export default function Home() {
//   return (
//     <main>
//       {/* Other sections */}
//       <ContactSection />
//       {/* Footer, etc. */}
//     </main>
//   );
// }