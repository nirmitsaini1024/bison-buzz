import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import Button from "./Button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1e2833] text-white p-10 flex flex-col gap-4">
      <div className="flex justify-between items-center flex-wrap gap-6">
        <Image src="/bull.png" alt="Bull Logo" width={128} height={112} />
        <div className="flex gap-4 items-center flex-wrap">
          <p className="text-[#ffd823] font-bold text-2xl">
            Ready to get started?
          </p>
          <Button text="LET&apos;S TALK" bg="#ffd823" textColor="#333333" />
        </div>
      </div>

      <div className="border-t border-b border-gray-600 my-6"></div>

      <div className="text-white py-14 grid grid-cols-1 md:grid-cols-4 gap-10 montserrat-new">
        {/* Let's Connect */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">
            Let&apos;s Connect
          </h3>
          <p className="text-sm mb-4">
            When there are great ideas at stake, it&apos;s always a good idea to
            share. Tell us how we can make it happen for you!
          </p>
          <p className="text-sm">
            Email Us:{" "}
            <span className="text-yellow-400">business@monk-e.in</span>
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Influencer Marketing</li>
            <li>Social Media Management</li>
            <li>Digital Advertisement</li>
            <li>Video Production</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-yellow-400 font-bold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Feedback */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            <span className="text-yellow-400">Fill Out The</span>{" "}
            <span className="text-white">Feedback Form</span>
          </h3>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-6">
        <p>© Monk Entertainment 2022. All Rights Reserved.</p>
        <div className="flex gap-2">
          <a
            href="/"
            aria-label="LinkedIn"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="/"
            aria-label="Twitter"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="/"
            aria-label="Instagram"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="/"
            aria-label="YouTube"
            className="bg-gray-800 p-2 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition-all"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
