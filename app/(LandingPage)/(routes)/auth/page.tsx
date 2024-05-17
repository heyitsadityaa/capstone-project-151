import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="w-1/2 flex flex-col space-y-5 py-4 px-10 rounded">
      <Button variant="default" className="" asChild>
        <Link href="/patient">Sign In as Patient</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/health-professional">Sign In as Health Professional</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/health-facility">Sign In as Health Facility</Link>
      </Button>
    </div>
  );
}

export default page;
