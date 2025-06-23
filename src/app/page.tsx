"use client";

import { Benefits } from "@/components/dashboard/Benefits";
import { Banner } from "@/components/dashboard/Banner";
import MonthlyPointsChart from "@/components/dashboard/MonthlySummary";
import UserProfile from "@/components/dashboard/UserProfile";
import { CarViewer } from "@/components/dashboard/car/CarViewer";
import AnimatedLoader from "@/components/shared/AnimatedLoader";
import useLoading from "@/hooks/useLoading";

export default function Home() {
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full">
        <AnimatedLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-900">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4">
        {/* Responsive grid: stack on mobile, 2 columns on md+, sidebar on lg+ */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
          {/* Banner - Always first on mobile */}
          <div className="w-full order-first lg:hidden">
            <Banner />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col gap-4 order-3 lg:order-1 min-w-0">
            {/* Hero and Profile section */}
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 w-full">
              <div className="hidden lg:block flex-1 min-w-0">
                <Banner />
              </div>
              <div className="flex-1 min-w-0">
                <UserProfile />
              </div>
            </div>
            <div className="order-4 lg:order-none">
              <Benefits />
            </div>
            <div className="order-5 lg:order-none">
              <MonthlyPointsChart />
            </div>
          </div>

          {/* Car Viewer - Second on mobile, sidebar on lg+ */}
          <div className="w-full lg:w-96 order-2 lg:order-2 flex-shrink-0">
            <CarViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
