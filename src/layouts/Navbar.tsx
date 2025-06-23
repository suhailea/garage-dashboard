'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Settings, Moon, Sun, Sparkles, Home, Briefcase, User, MoreVertical } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [level] = useState(12); // Example level
  const [progress] = useState(80); // Example progress value
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isSwitching, setIsSwitching] = useState(false);

  const handleThemeSwitch = () => {
    if (isSwitching) return;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setPendingTheme(nextTheme);
    setIsSwitching(true);
    setTimeout(() => {
      setTheme(nextTheme);
      setPendingTheme(null);
      setIsSwitching(false);
    }, 1000);
  };

  return (
    <nav className="sticky top-0 z-30 w-full px-2 sm:px-4 lg:px-6 backdrop-blur transition-colors bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center justify-between h-16">
        {/* Disabled Nav Links - Left side (desktop) */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-3">
          <button disabled className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-700 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 opacity-80 cursor-not-allowed shadow-sm transition-colors">
            <Home className="w-4 h-4" />
            <span className="font-medium text-sm">Dashboard</span>
          </button>
          <button disabled className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 opacity-60 cursor-not-allowed shadow-sm transition-colors">
            <Briefcase className="w-4 h-4" />
            <span className="font-medium text-sm">Garage</span>
          </button>
          <button disabled className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 opacity-60 cursor-not-allowed shadow-sm transition-colors">
            <User className="w-4 h-4" />
            <span className="font-medium text-sm">Profile</span>
          </button>
        </div>
        {/* Mobile Options Button */}
        <div className="flex sm:hidden items-center">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-center rounded-full p-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <MoreVertical className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                <span className="sr-only">Options</span>
              </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-44 p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl">
              <button disabled className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-indigo-200 dark:border-indigo-700 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 opacity-80 cursor-not-allowed mb-1">
                <Home className="w-4 h-4" />
                <span className="font-medium text-sm">Dashboard</span>
              </button>
              <button disabled className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 opacity-60 cursor-not-allowed mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="font-medium text-sm">Garage</span>
              </button>
              <button disabled className="w-full flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 opacity-60 cursor-not-allowed">
                <User className="w-4 h-4" />
                <span className="font-medium text-sm">Profile</span>
              </button>
            </PopoverContent>
          </Popover>
        </div>
        {/* Right actions - Always visible, responsive layout */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          {/* XP Progress */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-2 sm:px-3 py-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <Progress value={progress} className="h-2 w-12 sm:w-16 bg-amber-100" indicatorClassName="bg-amber-400" />
              <span className="text-xs font-medium text-amber-700">{progress}%</span>
              <span className="text-xs font-bold text-amber-700">Lv. {level}</span>
            </div>
          </div>

          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground relative overflow-hidden"
            onClick={handleThemeSwitch}
            disabled={isSwitching}
          >
            <AnimatePresence mode="wait" initial={false}>
              {(pendingTheme ? pendingTheme : theme) === 'dark' ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Moon className="h-5 w-5 text-indigo-500 animate-pulse" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Sun className="h-5 w-5 text-yellow-400 animate-pulse" />
                </motion.span>
              )}
            </AnimatePresence>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="h-5 w-5" />
          </Button>

          {/* Profile Avatar */}
          <div className="relative group">
            <Avatar className="w-8 h-8 cursor-pointer">
              <AvatarImage src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=64" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;