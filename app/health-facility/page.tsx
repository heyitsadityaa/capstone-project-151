"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./_components/Navbar";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bell,
  BellDotIcon,
  CheckCircle,
  Group,
  Info,
  User,
  UserCheck,
  UserCheck2,
  Users2Icon,
} from "lucide-react";

function page() {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;

  return (
    <div className="gap-x-5 p-5">
      <h2 className="text-lg font-medium flex flex-row space-y-5 pb-5">
        Welcome ,<span className="text-[#F2AE30]">{walletId}</span>
      </h2>
      <div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">Announcements</div>
          <Button variant="ghostHF" className="">
            Mark as Read
          </Button>
        </div>
        <div className="flex flex-col item-center space-y-2 pb-5">
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#f2ae30] border-2">
            <Group className="w-5 h-5 text-[#f2ae30]" />
            <span>New Message from Admin: [Currently No New Message]</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#f2ae30] border-2">
            <UserCheck className="w-5 h-5 text-[#f2ae30]" />
            <span>Staff meeting at 3 PM</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Scheduled Appointments</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <User className="text-[#f2ae30]" />
            <span>Appointment is confirmed for patient#20843 at 9AM</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <User className="text-[#f2ae30]" />
            <span>Appointment is confirmed for patient#20864 at 12PM</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <User className="text-[#f2ae30]" />
            <span>Appointment is confirmed for patient#20892 at 1PM</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Staff Management</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <Users2Icon className="text-[#f2ae30]" />
            <span>Staffs On Duty today: 24</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <Users2Icon className="text-[#f2ae30]" />
            <span>Staffs Scheduled for Next Shift: 18</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <Users2Icon className="text-[#f2ae30]" />
            <span>Staffs on Absences Today: 2</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Resources Remaining</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <CheckCircle className="text-[#f2ae30]" />
            <span>Medical Supplies: 80% in stock</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <CheckCircle className="text-[#f2ae30]" />
            <span>Bed Availability: 20 beds free</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <UserCheck className="text-[#f2ae30]" />
            <span>Equipment: 5 maintenance alerts</span>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default page;
