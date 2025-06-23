"use client";
import { Benefits } from "@/components/dashboard/Benefits";
import BenefitsSkeleton from "@/components/dashboard/BenefitsSkeleton";
import { HeroBanner } from "@/components/dashboard/HeroBanner";
import MonthlyPointsChart from "@/components/dashboard/MonthlySummary";
import { CarViewer } from "@/components/dashboard/car/CarViewer";
import useLoading from "@/hooks/useLoading";

export default function DashboardPage() {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto">
        <div className="flex items-stretch">
          <div className="flex-1 space-x-5">
            <HeroBanner />
            {isLoading ? <BenefitsSkeleton /> : <Benefits />}
            <MonthlyPointsChart />
          </div>
          <div className="lg:w-80 shadow-sm rounded-xl">
            <CarViewer />
          </div>
        </div>
      </div>
    </div>
  );
}
