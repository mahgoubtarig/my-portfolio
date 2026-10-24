import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-right">
        <span className="inline-block bg-brand-card border border-gray-700 text-brand-teal text-xs px-3 py-1 rounded-full">
          • متاح للعمل حالياً
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">أبني واجهات <span className="text-brand-teal">سريعة</span><br />
          وواضحة وممتعة في<br />
          الاستخدام.
        </h1>
        <p className="text-brand-text text-lg max-w-md mx-auto md:mx-0">محجوب طارق | مهندس برمجيات ومطوّر ويب

أحوّل أفكارك إلى حلول رقمية متكاملة، من مواقع الويب والمتاجر الإلكترونية إلى أنظمة الكاشير والأنظمة الإدارية التي تساعدك على إدارة أعمالك بكفاءة وسهولة.

أجمع بين خبرة Front-End ومعرفة Back-End لبناء حلول عصرية، سريعة، موثوقة وقابلة للتطوير، مصمّمة لتلبية احتياجات مشروعك.
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
          <a href="#projects" className="bg-brand-teal text-brand-bg font-bold px-6 py-3 rounded-lg hover:bg-teal-400 transition-colors">
            شاهد أعمالي ←
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
            تواصل معي
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <div className="bg-brand-card rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden font-mono text-sm text-left" dir="ltr">
          <div className="bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-700/50">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-xs ml-4">developer.ts</span>
          </div>
          <div className="p-6 text-gray-300">
            <p><span className="text-pink-400">const</span> <span className="text-blue-300">developer</span> = {'{'}</p>
            <p className="pl-4">role: <span className="text-green-300">"Front-End Engineer"</span>,</p>
            <p className="pl-4">stack: [<span className="text-green-300">"React"</span>, <span className="text-green-300">"TypeScript"</span>, <span className="text-green-300">"Next.js"</span>],</p>
            <p className="pl-4">focus: [<span className="text-green-300">"Performance"</span>, <span className="text-green-300">"Accessibility"</span>],</p>
            <p className="pl-4">available: <span className="text-orange-300">true</span>,</p>
            <p>{'}'};</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;