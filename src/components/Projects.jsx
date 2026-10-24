import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ title, desc, tech, isFeatured }) => (
  <div className={`bg-brand-card p-6 rounded-xl border ${isFeatured ? 'border-brand-teal/50' : 'border-gray-800'} hover:-translate-y-1 transition-transform duration-300`}>
    {/* وهمي للتعبير عن الصورة */}
    <div className="h-40 bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
      <div className="w-16 h-16 bg-brand-teal/20 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 bg-brand-teal rounded-md"></div>
      </div>
    </div>
    
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-brand-text text-sm mb-4 line-clamp-3">{desc}</p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map(t => <span key={t} className="text-xs font-mono text-gray-400 bg-gray-800/50 px-2 py-1 rounded">{t}</span>)}
    </div>
    
    <div className="flex items-center justify-between border-t border-gray-800 pt-4">
      {/* رابط عرض المشروع */}
      <a href="https://example.com" className="flex items-center gap-1 text-sm text-gray-300 hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">
        <FiExternalLink /> عرض المشروع
      </a>
      {/* رابط الكود المصدري - تم ربطه بحسابك */}
      <a href="https://github.com/mahgoubtarig249" className="flex items-center gap-1 text-sm text-gray-300 hover:text-brand-teal transition-colors" target="_blank" rel="noopener noreferrer">
        <FiGithub /> الكود المصدري
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 border-t border-gray-800/50">
      <div className="text-right mb-12">
        <span className="text-brand-teal font-mono text-sm">02</span>
        <h2 className="text-3xl font-bold mt-2">أبرز المشاريع</h2>
        <p className="text-brand-text mt-2">مختارات من أعمالي، كل مشروع يحل تحدياً حقيقياً ويحسن تجربة المستخدم.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard 
          title="[اسم المشروع الأول]" 
          desc="لوحة تحكم تفاعلية [الوصف]، بواجهة React مع إدارة حالة متقدمة وسريعة الاستجابة على كل الشاشات."
          tech={['React', 'TypeScript', 'Recharts']}
          isFeatured={true}
        />
        <ProjectCard 
          title="[اسم المشروع الثاني]" 
          desc="متجر إلكتروني بواجهة Next.js، يركز على سرعة التحميل وتحسين محركات البحث وتجربة شراء سلسة."
          tech={['Next.js', 'Tailwind', 'Stripe']}
        />
        <ProjectCard 
          title="[اسم المشروع الثالث]" 
          desc="مكتبة مكونات (Design System) قابلة لإعادة الاستخدام، موثقة ومختبرة، تدعم إمكانية الوصول بالكامل."
          tech={['React', 'Storybook', 'Vitest']}
        />
      </div>
    </section>
  );
};

export default Projects;