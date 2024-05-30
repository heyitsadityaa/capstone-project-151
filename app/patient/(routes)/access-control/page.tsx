import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function page() {
  return (
    <div className="max-w-md p-5 space-y-5">
      <div>
        <Label htmlFor="email">Add Health Professional</Label>
        <div className="flex flex-row space-x-5">
          <Input type="text" placeholder="WalletId" />
          <Button>Add</Button>
        </div>
      </div>
      <div className="">
        <Label htmlFor="email">Add Health Facility</Label>
        <div className="flex flex-row space-x-5">
          <Input type="text" placeholder="WalletId" />
          <Button>Add</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
