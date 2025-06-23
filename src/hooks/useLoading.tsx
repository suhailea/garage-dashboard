import { useEffect, useState } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, [])

  return {
    isLoading,
    setIsLoading
  }
}