import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex gap-y-4 flex-1 flex-col">
      <Button variant="default" asChild>
        <Link href="/patient">Sign In as Patient</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/patient">Sign In as Health Professional</Link>
      </Button>
      <Button variant="default" asChild>
        <Link href="/patient">Sign In as Health Facility</Link>
      </Button>
    </div>
  );
}

export default page;
