import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-800/50 bg-brand-bg/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold font-mono tracking-tighter">
          <span className="text-brand-teal">&lt;/&gt;</span> Mahgoub Tarig
        </div>
        
        <div className="hidden md:flex space-x-8 space-x-reverse text-sm text-gray-300">
          <a href="#projects" className="hover:text-brand-teal transition-colors">المشاريع</a>
          <a href="#experience" className="hover:text-brand-teal transition-colors">الخبرة</a>
          <a href="#contact" className="hover:text-brand-teal transition-colors">تواصل</a>
        </div>

        <button className="flex items-center gap-2 border border-gray-700 hover:border-brand-teal hover:text-brand-teal px-4 py-2 rounded-lg text-sm transition-all">
          <FiDownload />
          <span>تحميل السيرة الذاتية</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;