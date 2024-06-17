"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navitem = () => {
  return (
    <>
      <nav>
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                {/* <img
                  src="./images/health logo.png"
                  alt="logo"
                  className="w-8"
                /> */}
                <span className="text-2xl sm:text-3xl font-semibold">
                  KeepSafe
                </span>
              </a>
            </div>
            {/* navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                <Button className="btn-primary">
                  <Link href="/auth">Sign In</Link>
                </Button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navitem;
