import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

function BenefitTileSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-1 flex flex-col p-6">
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}

export default function BenefitsSkeleton() {
  return (
    <div>
      <Skeleton className="h-8 w-48 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BenefitTileSkeleton />
        <BenefitTileSkeleton />
        <BenefitTileSkeleton />
      </div>
    </div>
  );
} 