"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="sm:ml-auto sm:justify-end justify-between w-full flex items-center gap-x-2">
        <Button>
          <Link href="/auth">Sign In</Link>
        </Button>
      </div>
    </div>
  );
};
