import React from "react";

interface SkeletonWrapperProps {
  isLoading: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  isLoading,
  children,
}) => {
  return <>{isLoading && children}</>;
};

export default SkeletonWrapper;
