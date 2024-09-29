'use client';

import { SunIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const updatePosition = () => {
      const item = document.getElementById('vapi-support-btn');
      if (item) {
        item.style.position = 'fixed';
        // @ts-ignore
        item.style.zIndex = 9999;
        item.classList.add('!bg-background');
        item.classList.add('!text-foreground');
      }
    };
    const timeout = setTimeout(updatePosition, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return <div className="h-6 w-6"></div>;

  return (
    <AnimatePresence presenceAffectsLayout mode="sync">
      {currentTheme === 'dark' ? (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <SunIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setTheme('light')}
          />
        </motion.div>
      ) : (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <MoonIcon
            className="h-6 w-6 cursor-pointer text-foreground"
            onClick={() => setTheme('dark')}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
