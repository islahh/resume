'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({
  title,
  children,
  className = ''
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 border-b-2 border-slate-800 dark:border-slate-200 pb-2">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </motion.section>
  );
}