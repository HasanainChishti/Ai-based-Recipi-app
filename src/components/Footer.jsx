import React from "react";

const Footer = () => {
  return (
    <footer  className="bg-gray-300 text-white py-6 mt-10 mb-10 shadow-md w-[90%] mx-auto rounded-2xl ">
      <div id="footer" className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 h-40">
        <p className="text-sm">© {new Date().getFullYear()} RecipeApp. All rights reserved.</p>
        
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-800">
          <a href="https://github.com/yourgithub" target="_blank" className="hover:text-green-400 text-2xl ">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="hover:text-green-400 text-2xl">
            LinkedIn
          </a>
          <a href="#" className="hover:text-green-400 text-2xl">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
