"use client";

import { UserButton } from "@clerk/nextjs";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const NavBar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="sm:ml-auto sm:justify-end justify-between w-full flex items-center">
        <Button variant="ghost">
          <Link href="/patient">Home</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/patient/profile">Profile</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/patient/health-records">Patients</Link>
        </Button>
        <Button variant="ghost">
          <Link href="/patient/prescriptions">Add Patients</Link>
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
export default NavBar;
