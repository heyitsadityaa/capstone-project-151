"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import "@/context/Healthrecord";
import { currentUser } from "@clerk/nextjs";
import { toast } from "sonner";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Profile() {
  const [date, setDate] = React.useState<Date>();
  return (
    <div className="">
      <div className="flex flex-col max-w-md px-5 py-5 space-y-5 ">
        <div className="">
          <Label htmlFor="email">Owner's WalletId</Label>
          <Input
            disabled
            type="text"
            placeholder="WalletId"
            className="focus:bg-sky-600"
          />
        </div>
        <div className="">
          <Label htmlFor="text">Individual's Name</Label>
          <Input type="text" placeholder="Name" className="" />
        </div>
        <div className="">
          <Label htmlFor="text">Date Of Birth</Label>
          <Input type="date" placeholder="datofbirth" className="" />
        </div>
        <div className="">
          <Label htmlFor="text">Gender</Label>
          <Input type="text" placeholder="Gender" className="" />
        </div>
        <div className="">
          <Label htmlFor="text">Blood Group</Label>
          <Input type="text" placeholder="Blood Group" className="" />
        </div>
        <Button
          variant="default"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Submit
        </Button>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Profile;
