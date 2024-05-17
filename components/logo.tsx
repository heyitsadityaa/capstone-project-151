import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div>
      <p className={cn("font-semibold", font.className)}>
        {/* <Link href="/"> */}
        KeepSafe
        {/* </Link> */}
      </p>
    </div>
  );
};

export default Logo;
