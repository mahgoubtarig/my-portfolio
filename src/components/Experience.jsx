import React from 'react';

const ExperienceItem = ({ date, title, company, desc, isActive }) => (
  <div className="relative pl-8 md:pl-0 md:pr-8 pb-12 last:pb-0 border-r-2 md:border-r-0 md:border-l-2 border-gray-800 md:mr-4">
    <div className={`absolute top-0 right-[-9px] md:right-auto md:left-[-9px] w-4 h-4 rounded-full border-2 ${isActive ? 'bg-brand-teal border-brand-teal' : 'bg-brand-bg border-gray-600'}`}></div>
    
    <div className="md:flex md:justify-between md:items-start">
      <div className="md:w-2/3 md:pr-8">
        <h3 className="font-bold text-lg">{title} — <span className="text-gray-400">{company}</span></h3>
        <p className="text-brand-text text-sm mt-2 leading-relaxed">{desc}</p>
      </div>
      <div className="text-sm font-mono text-gray-500 mt-1 md:mt-0">{date}</div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-gray-800/50">
      <div className="text-right mb-12">
        <span className="text-brand-teal font-mono text-sm">03</span>
        <h2 className="text-3xl font-bold mt-2">الخبرة العملية</h2>
        <p className="text-brand-text mt-2">رحلتي المهنية في بناء المنتجات الرقمية.</p>
      </div>

      <div className="space-y-8">
        <ExperienceItem 
          date="أكثر من سنة" 
          title="مستقل (Freelancer)" 
          company="العمل الحر" 
          desc="تصميم وتطوير مواقع الويب، المتاجر الإلكترونية، والأنظمة المخصصة. العمل مع عملاء مختلفين لتحويل أفكارهم إلى منتجات رقمية متكاملة وسريعة الاستجابة."
          isActive={true}
        />
        
        {/* يمكنك إضافة خبرات أخرى هنا في المستقبل إذا أردت */}
      </div>
    </section>
  );
};

export default Experience;