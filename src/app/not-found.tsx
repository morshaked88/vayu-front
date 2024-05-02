import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center">404 | Page Not Found</h1>
      <Link href={"/"}>
        <Button variant="link" className="text-muted-foreground">
            Go back to Home
        </Button>
      </Link>
    </div>
  )
};

export default NotFound;
