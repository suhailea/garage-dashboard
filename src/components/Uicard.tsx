import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProp {
  title: string;
  description: string;
  children?: React.ReactNode;
  style: string;
}

const Uicard: React.FC<CardProp> = ({
  title,
  description,
  children,
  style,
}) => {
  return (
    <Card
      className={` dark:bg-gray-900 border-gray-200 dark:border-gray-700 ${style}`}
    >
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Uicard;
