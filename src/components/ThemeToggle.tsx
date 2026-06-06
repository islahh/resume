'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className="flex justify-end items-center w-1/3">
        <AnimatePresence mode="wait" initial={false}>
        <motion.button
            key={darkMode ? 'dark' : 'light'}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            onClick={toggleDarkMode}
            className="p-4 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors relative overflow-hidden"
        >
            {darkMode ? (
            <SunIcon className="w-6 h-6 text-amber-400" />
            ) : (
            <MoonIcon className="w-6 h-6 text-slate-600" />
            )}
            <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-slate-200/50 dark:bg-slate-800/50 rounded-full"
            />
        </motion.button>
        </AnimatePresence>
    </div>
  );
}