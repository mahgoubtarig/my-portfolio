import React from 'react';

const Skills = () => {
  return (
    <section className="py-20 border-t border-gray-800/50">
      <div className="text-right mb-12">
        <span className="text-brand-teal font-mono text-sm">01</span>
        <h2 className="text-3xl font-bold mt-2">المهارات والأدوات</h2>
        <p className="text-brand-text mt-2">التقنيات التي أستخدمها لبناء وتطوير تطبيقات ومواقع متكاملة.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* الأساسيات */}
        <div className="bg-brand-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
          <h3 className="font-bold text-center mb-4 border-b border-gray-700 pb-2">الأسسيات (Frontend)</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['HTML5', 'CSS3', 'JavaScript'].map(skill => (
              <span key={skill} className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1.5 rounded-md font-mono">{skill}</span>
            ))}
          </div>
        </div>

        {/* المكتبات والأطر */}
        <div className="bg-brand-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
          <h3 className="font-bold text-center mb-4 border-b border-gray-700 pb-2">المكتبات والأطر</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {/* تمت إضافة Bootstrap هنا */}
            {['React', 'Bootstrap', 'PHP'].map(skill => (
              <span key={skill} className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1.5 rounded-md font-mono">{skill}</span>
            ))}
          </div>
        </div>

        {/* قواعد البيانات */}
        <div className="bg-brand-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
          <h3 className="font-bold text-center mb-4 border-b border-gray-700 pb-2">قواعد البيانات</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['MySQL'].map(skill => (
              <span key={skill} className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1.5 rounded-md font-mono">{skill}</span>
            ))}
          </div>
        </div>

        {/* الأدوات */}
        <div className="bg-brand-card p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors">
          <h3 className="font-bold text-center mb-4 border-b border-gray-700 pb-2">الأدوات</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Git', 'GitHub', 'VS Code'].map(skill => (
              <span key={skill} className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1.5 rounded-md font-mono">{skill}</span>
            ))}
          </div>
        </div>

      </div>

      {/* الممارسات */}
      <div className="mt-6 bg-brand-card p-6 rounded-xl border border-gray-800 text-right">
        <h3 className="font-bold mb-4">الممارسات والخبرات</h3>
        <ul className="space-y-2 text-brand-text text-sm grid grid-cols-1 md:grid-cols-2">
          <li className="flex items-center gap-2"><span className="text-brand-teal">•</span> بناء واجهات تفاعلية (React)</li>
          <li className="flex items-center gap-2"><span className="text-brand-teal">•</span> تطوير الأنظمة الخلفية (PHP)</li>
          <li className="flex items-center gap-2"><span className="text-brand-teal">•</span> تصميم قواعد البيانات (MySQL)</li>
          <li className="flex items-center gap-2"><span className="text-brand-teal">•</span> تصميم سريع الاستجابة (Bootstrap & Tailwind)</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;