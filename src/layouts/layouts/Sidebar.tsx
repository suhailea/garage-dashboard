"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Importing all required icons from lucide-react
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Calculator,
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  FileText,
  HelpCircle,
  Home,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Settings,
  User,
} from "lucide-react";

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface SidebarGroup {
  group: string;
  items: SidebarItem[];
}

const Sidebar = () => {
  const pathname = usePathname();

  // Function to check if a sidebar item is active
  const isActiveSidebarItem = (url: string) => {
    // Consider trailing slash and root
    const current =
      pathname?.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;
    const target = url.endsWith("/") && url.length > 1 ? url.slice(0, -1) : url;
    return (
      current === target ||
      current?.startsWith(target + "/") ||
      current?.startsWith(target + "?") ||
      current?.startsWith(target + "#")
    );
  };

  // Handle logout function
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  // Sidebar items data
  const sidebarItems: SidebarGroup[] = [
    {
      group: "Garage",
      items: [
        {
          name: "Dashboard",
          icon: <Home className="size-4" />,
          url: "/dashboard",
        },
        {
          name: "My Garage",
          icon: <Briefcase className="size-4" />,
          url: "/garage",
        },
        {
          name: "My Profile",
          icon: <User className="size-4" />,
          url: "/profile/me",
        },
      ],
    },
    {
      group: "Garage Management",
      items: [
        {
          name: "Garage Stats",
          icon: <FileText className="size-4" />,
          url: "/garage/stats",
        },
        {
          name: "Garage Settings",
          icon: <Settings className="size-4" />,
          url: "/garage/settings",
        },
        {
          name: "Garage History",
          icon: <CalendarCheck className="size-4" />,
          url: "/garage/history",
        },
        {
          name: "Garage Support",
          icon: <HelpCircle className="size-4" />,
          url: "/garage/support",
        },
      ],
    },
    {
      group: "Garage Tools",
      items: [
        {
          name: "Garage Calculator",
          icon: <Calculator className="size-4" />,
          url: "/tools/calculator",
        },
        {
          name: "Garage Planner",
          icon: <LayoutDashboard className="size-4" />,
          url: "/tools/planner",
        },
        {
          name: "Garage Analytics",
          icon: <BarChart2 className="size-4" />,
          url: "/tools/analytics",
        },
      ],
    },
    {
      group: "Garage Resources",
      items: [
        {
          name: "Garage Guide",
          icon: <BookOpen className="size-4" />,
          url: "/resources/guide",
        },
        {
          name: "Garage FAQ",
          icon: <HelpCircle className="size-4" />,
          url: "/resources/faq",
        },
        {
          name: "Garage Tips",
          icon: <Lightbulb className="size-4" />,
          url: "/resources/tips",
        },
      ],
    },
  ];

  return (
    <div
      data-sidebar="sidebar"
      className="bg-gray-100 text-sm flex flex-col z-10 h-svh w-[280px] relative"
    >
      {/* Workspace Switcher */}
      <div className="p-4">
        <button className="flex w-full items-center gap-3 group">
          <img
            src="https://shadcnuikit.com/logo.png"
            className="w-8 h-8 rounded-lg"
            alt="workspace logo"
          />
          <div className="flex-1 text-left">
            <div className="font-medium text-gray-900">CRED Garage</div>
            <div className="text-sm text-gray-500">
              Find the best garage
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        id="sidebar-content"
        data-sidebar="content"
        className="flex-1 overflow-y-auto"
      >
        <div className="py-2">
          {sidebarItems.map((group) => (
            <div key={group.group} data-sidebar="group" className="px-3">
              {group.group !== "Home" && (
                <div className="flex text-sm h-8 items-center px-2 mt-4 mb-1">
                  <span className="font-medium text-sm text-gray-400 uppercase tracking-wider">
                    {group.group}
                  </span>
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActiveSidebarItem(item.url)
                        ? "bg-indigo-100 text-indigo-800 shadow"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span
                      className={
                        isActiveSidebarItem(item.url)
                          ? "text-indigo-700"
                          : "text-gray-500"
                      }
                    >
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    {isActiveSidebarItem(item.url) && (
                      <ChevronRight className="size-4 text-gray-400 ml-auto" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-auto">
        {/* Profile Section */}
        <div className="p-3">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="flex w-full items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  className="w-9 h-9 rounded-lg"
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="Profile avatar"
                />
                <div className="flex-1 text-left">
                  <div className="font-medium text-gray-900">John Doe</div>
                  <div className="text-sm text-gray-500">john@qasar.com</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
              <div className="p-3">
                <div className="pb-3 mb-3">
                  <div className="font-medium text-gray-900">
                    Account Settings
                  </div>
                  <div className="text-sm text-gray-500">
                    Manage your account preferences
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-50"
                  >
                    <User className="size-4" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-50"
                  >
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </Link>
                  <Link
                    href="/docs"
                    className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-50"
                  >
                    <FileText className="size-4" />
                    <span>Documentation</span>
                    <ExternalLink className="size-3 text-gray-400 ml-auto" />
                  </Link>
                  <Link
                    href="/support"
                    className="flex items-center gap-2 p-2 rounded text-gray-600 hover:bg-gray-50"
                  >
                    <HelpCircle className="size-4" />
                    <span>Support & Help</span>
                    <ExternalLink className="size-3 text-gray-400 ml-auto" />
                  </Link>
                  <div className="my-2 border-t" />
                  <button
                    className="w-full flex items-center gap-2 p-2 rounded text-red-600 hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <LogOut className="size-4" />
                    <span>Sign out</span>
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
