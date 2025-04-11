import React from 'react';
import Link from 'next/link';
import Button from './Button';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in touch</h2>
        <p className="text-lg text-gray-600 mb-8">
          Let&apos;s discuss how we can help you stand out
        </p>
        <Link href="/contact-us" passHref>
          <Button text="Contact Us" bg="#ffd823" textColor="#333333" />
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
