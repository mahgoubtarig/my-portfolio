import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800/50 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <p>© 2026 محجوب طارق - جميع الحقوق محفوظة.</p>
      <a href="#" className="hover:text-brand-teal transition-colors">النسخة للخلف</a>
    </footer>
  );
};

export default Footer;