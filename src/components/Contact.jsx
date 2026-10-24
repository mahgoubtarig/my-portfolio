import React from 'react';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="bg-brand-card rounded-2xl p-8 md:p-16 text-center border border-gray-800">
        <span className="text-brand-teal font-mono text-sm block mb-4">04</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">لنبني شيئاً رائعاً معاً</h2>
        <p className="text-brand-text mb-8 max-w-lg mx-auto">لديك فكرة مشروع أو فرصة عمل؟ يسعدني سماعها وسأرد عليك في أقرب وقت.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          {/* زر البريد الإلكتروني */}
          <a href="mailto:mahgoubtarig249@gmail.com" className="inline-flex items-center gap-2 bg-brand-teal text-brand-bg font-bold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors w-full sm:w-auto justify-center">
            <FiMail size={20} />
            mahgoubtarig249@gmail.com
          </a>
          
          {/* زر رقم الهاتف */}
          <a href="tel:+201234567890" className="inline-flex items-center gap-2 border border-gray-700 hover:border-brand-teal hover:text-brand-teal text-white font-bold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center" dir="ltr">
            <FiPhone size={20} />
            0570866836
          </a>
        </div>

        {/* روابط التواصل الاجتماعي */}
        <div className="flex justify-center gap-4 mt-8">
          <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:text-brand-teal transition-colors" aria-label="X"><FiTwitter size={20} /></a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:text-brand-teal transition-colors" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
          <a href="https://github.com/mahgoubtarig249" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:text-brand-teal transition-colors" aria-label="GitHub"><FiGithub size={20} /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;