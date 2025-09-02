"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Welcome to Learnify
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-center text-gray-600">
            Sign up or log in to start learning courses.
          </p>

          <Link href="/auth" className="w-full">
            <Button className="w-full">Go to Auth</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
