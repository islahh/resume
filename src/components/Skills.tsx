'use client';

import { motion } from 'framer-motion';
// import { SkillCategories } from '@/data/cv-data';

export default function SkillsSection() {
  // Categorize skills based on your existing data
  const categorizedSkills = {
    'DevOps & Cloud': ['Docker', 'Kubernetes', 'Openshift', 'GitLab CI/CD', 'Bash Script', 'Linux', 'Helm', 'Alibaba Cloud'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'ElasticSearch'],
    'Languages & Tools': ['Go', 'Python (Cerfified)', 'Celery', 'RabbitMQ','Javascript','Geospatial', 'PowerBI', 'ORMs'],
    'Platforms & Misc': ['DevOps', 'Redis', 'ElasticSearch', 'Fluentd', 'Kibana', 'Grafana', 'Prometheus', 'SonarQube'],
    'AI & LLMs': ['Langchain', 'Azure OpenAI', 'GPT-4o', 'GuardRails'],
    'Analytics': ['PowerBI (Cerfified)', 'Tableau', 'GeoPandas'],
  };

  return (
    <section className="mb-12">
      {/* <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b-2 border-slate-800 dark:border-slate-200 pb-2">
        Technical Skills
      </h2> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(categorizedSkills).map(([category, skills], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-xl bg-white dark:bg-slate-800/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}