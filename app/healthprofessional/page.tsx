"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import {
  Bell,
  BellDotIcon,
  CheckCircle,
  Search,
  User,
  UserCheck,
} from "lucide-react";
import React from "react";

const page = () => {
  const { user } = useUser();
  const primaryWeb3Wallet = user?.primaryWeb3Wallet;
  const walletId = primaryWeb3Wallet?.web3Wallet;
  return (
    <div className="gap-x-5 p-5">
      <h2 className="text-lg font-medium flex flex-row space-y-5 pb-5">
        Welcome ,<span className="text-[#F2B6C1]">{walletId}</span>
      </h2>
      <div>
        <div className="flex justify-between items-center">
          <div className="font-semibold">Your Notifications</div>
          <Button variant="ghostHP" className="">
            Mark as Read
          </Button>
        </div>
        <div className="flex flex-col item-center space-y-2 pb-5">
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#F2B6C1] border-2">
            <Bell className="w-5 h-5 text-[#F2B6C1]" />
            <span>Update your Profile</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#F2B6C1] border-2">
            <UserCheck className="w-5 h-5 text-[#F2B6C1]" />
            <span>Your appointment is confirmed</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2 cursor-pointer border-[#F2B6C1] border-2">
            <BellDotIcon className="w-5 h-5 text-[#F2B6C1]" />
            <span>Prescription is ready for pickup</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Your Appointments</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <CheckCircle className="text-[#F2B6C1]" />
            <span>Appointment is confirmed for patient#20843 at 9AM</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <UserCheck className="text-[#F2B6C1]" />
            <span>Appointment is confirmed for patient#20864 at 12PM</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Patient Alerts</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <User className="text-[#F2B6C1]" />
            <span>Patient's #20345 lab results need review.</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <User className="text-[#F2B6C1]" />
            <span>New Message from Patient's #20345 regarding medication.</span>
          </Card>
        </div>
      </div>
      <div className="pb-5">
        <div className="font-semibold">Clinical resources</div>
        <div className="flex flex-col item-center space-y-2">
          <Card className="p-3 flex flex-row space-x-2">
            <Search className="text-[#F2B6C1]" />
            <span>[Search Patient Records]</span>
          </Card>
          <Card className="p-3 flex flex-row space-x-2">
            <UserCheck className="text-[#F2B6C1]" />
            <span>
              Quick Access: Patient#29209, Patient#29884, Patient#29434
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
