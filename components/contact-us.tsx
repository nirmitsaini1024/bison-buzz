/** @format */
"use client";

import React, { useState, useRef } from "react";

// Recaptcha Component type
interface ReCAPTCHARef {
  executeAsync: () => Promise<string>;
  reset: () => void;
}

// Type definitions
interface ContactFormData {
  fullName: string;
  companyName: string;
  companyWebsite: string;
  phoneNumber: string;
  email: string;
  message: string;
}

interface ContactFormErrors {
  fullName?: string;
  companyName?: string;
  companyWebsite?: string;
  phoneNumber?: string;
  email?: string;
  message?: string;
}

interface SubmitStatus {
  type: 'success' | 'error';
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    companyWebsite: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);
  const recaptchaRef = useRef<ReCAPTCHARef | null>(null);

  // No need for reCAPTCHA component as we're handling verification server-side

  const validateForm = (): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    if (formData.phoneNumber && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number';
    }

    // Validate website URL if provided
    if (formData.companyWebsite && !/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/.test(formData.companyWebsite)) {
      errors.companyWebsite = 'Please enter a valid website URL';
    }
    
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof ContactFormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // We don't need to execute reCAPTCHA in the client
    // The backend will handle validation
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully!'
        });
        // Reset form
        setFormData({
          fullName: '',
          companyName: '',
          companyWebsite: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
        // No need to reset reCAPTCHA as we're not using it anymore
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F1D65F]">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-12 overflow-hidden"
      >
        {/* Page heading with gradient underline */}
        <div className="text-center my-12 pt-8 md:pt-16 ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Get In Touch
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or want to learn more? We&rsquo;d love to hear from you.
          </p>
        </div>

        <section className="my-10 max-w-3xl mx-auto">
          {/* Contact Form Section */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="h-8 w-2 bg-yellow-500 rounded mr-3"></div>
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Please be specific in your communication to serve you better.
              We&rsquo;ll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition ${
                    formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.fullName}</p>
                )}
              </div>
              
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition"
                />
              </div>
              
              {/* Company Website (New field) */}
              <div>
                <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Website
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition ${
                    formErrors.companyWebsite ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formErrors.companyWebsite && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.companyWebsite}</p>
                )}
              </div>
              
              {/* Email and Phone in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                  )}
                </div>
                
                {/* Phone */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition ${
                      formErrors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.phoneNumber}</p>
                  )}
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                )}
              </div>
              
              {/* Status Message */}
              {submitStatus && (
                <div 
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 text-white font-medium rounded-lg transition focus:outline-none focus:ring-4 focus:ring-yellow-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}