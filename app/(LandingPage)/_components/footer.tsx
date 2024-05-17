import { Button } from "@/components/ui/button";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-3 bg-background z-50">
      <div className="sm:ml-auto w-full justify-between sm:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Condition
        </Button>
      </div>
    </div>
  );
};

export default Footer;
