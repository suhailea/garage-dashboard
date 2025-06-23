import { Skeleton } from "@/components/ui/skeleton";

export default function UserProfileSkeleton() {
  return (
    <div className="rounded-xl  dark:bg-gray-800 shadow-lg p-6 w-full max-w-xs mx-auto flex flex-col items-center text-center">
      <Skeleton className="w-24 h-24 rounded-full mb-4" />
      <Skeleton className="h-8 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <div className="w-full">
        <div className="flex justify-between mb-1">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-2 w-full" />
      </div>
    </div>
  );
} 