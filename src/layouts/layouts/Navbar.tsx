'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Settings, Moon, Sun, Sparkles } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [profileCompletion] = useState(80); // Example completion value
  const [level] = useState(12); // Example level
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const [isSwitching, setIsSwitching] = useState(false);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (!pathname) return [];
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' },
    ];
    let path = '';
    segments.forEach((segment, i) => {
      path += `/${segment}`;
      breadcrumbs.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: path,
        active: i === segments.length - 1
      });
    });
    return breadcrumbs;
  };
  const breadcrumbs = generateBreadcrumbs();

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
    <nav className="sticky top-0 z-30 flex h-16 w-full items-center justify-between px-4 lg:px-6 backdrop-blur transition-colors bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-gray-100">
      {/* Breadcrumb */}
      <div className="flex items-center">
        <div className="flex items-center">
          {breadcrumbs.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 h-4 w-4 text-muted-foreground">/</span>
              )}
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  item.active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Right actions */}
      <div className="flex items-center gap-4">
        {/* Gamification XP Progress */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-amber-700 mr-1 flex items-center">
            <Sparkles className="w-4 h-4 mr-1 text-amber-400" />
            XP Progress
          </span>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-100 rounded-full px-3 py-1">
            <Progress value={profileCompletion} className="h-2 w-20 bg-amber-100" indicatorClassName="bg-amber-400" />
            <span className="text-xs font-semibold text-amber-700 ml-2">{profileCompletion}%</span>
            <span className="text-xs font-bold text-amber-700 ml-2">Lv. {level}</span>
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
        {/* Profile Avatar (dropdown placeholder) */}
        <div className="relative group">
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarImage src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=64" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {/* Dropdown placeholder (implement with a menu if needed) */}
          {/* <div className="absolute right-0 mt-2 w-40  shadow-lg rounded-md py-2 hidden group-hover:block">
            <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
            <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;