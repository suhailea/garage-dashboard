import { Skeleton } from "@/components/ui/skeleton";

export default function RewardPointsSkeleton() {
  return (
    <div className=" dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="flex items-center justify-center">
        <Skeleton className="w-48 h-48 rounded-full" />
      </div>
    </div>
  );
} 