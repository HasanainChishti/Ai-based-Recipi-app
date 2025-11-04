// import React from "react";

import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex justify-evenly gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-green-400 mb-2">🍲MyRecipi</h2>
          <h7 className=" leading-relaxed  text-white text-2xl">
            Discover mouthwatering recipes,
            <br/>
             cooking tips,
             <br/>
              and food stories.
          </h7>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-green-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-orange-400">
            <li><a href="/" className="hover:text-green-400 text-white">Home</a></li>
            <li><a href="/recipes" className="hover:text-green-400 text-white">All Recipes</a></li>
            <li><a href="/categories" className="hover:text-green-400 text-white">Categories</a></li>
            <li><Link to={"/Contact"} className="hover:text-green-400 text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        {/* <div className="flexx flex-col">
          <h3 className="text-lg font-semibold text-orange-400 mb-3 ">Follow Us</h3>
          <div className="flex space-x-4 text-xl flex-col">
            <a href="#" className="hover:text-green-400 text-white">Instagram</a>
            <a href="#" className="hover:text-green-400 text-white">FaYoutube</a>
            <a href="#" className="hover:text-green-400 text-white">FaPinterest</a>
            <a href="#" className="hover:text-green-400 text-white">FaFacebook</a>
          </div>
        </div> */}

        {/* Legal */}
        {/* <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-amber-200 flex flex-col">
            <li><a href="/privacy" className="hover:text-green-400 text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-green-400 text-white">Terms of Service</a></li>
          </ul>
        </div> */}
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 MyRecipi. Built with ❤️ using React & GeminiAi &Tailwind CSS.
      </div>
    </footer>
  );
}