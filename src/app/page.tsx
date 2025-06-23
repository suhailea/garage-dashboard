"use client";

import AnimatedLoader from "@/components/AnimatedLoader";
import { Benefits } from "@/components/dashboard/Benefits";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import MonthlyPointsChart from "@/components/dashboard/MonthlySummary";
import UserProfile from "@/components/dashboard/UserProfile";
import { CarViewer } from "@/components/dashboard/car/CarViewer";
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
    <div className="min-h-screen  text-gray-900 ">
      <div className="container mx-auto">
        <div className="flex items-start space-x-2">
          <div>
            <div className="flex items-start space-x-2">
              <HeroBanner />
              <UserProfile />
            </div>
            <Benefits />
              <MonthlyPointsChart />
          </div>

          <div className="lg:w-80">
            <CarViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
